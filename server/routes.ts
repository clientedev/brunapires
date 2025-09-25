import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth, isAuthenticated } from "./replitAuth";
import { insertContactSchema, insertPostSchema, updatePostSchema } from "@shared/schema";
import { z } from "zod";
import multer from "multer";
import path from "path";
import fs from "fs";
import express from "express";

export async function registerRoutes(app: Express): Promise<Server> {
  // Create uploads directory if it doesn't exist
  const uploadsDir = path.join(process.cwd(), 'uploads');
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }

  // Configure multer for image uploads
  const storage_multer = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, uploadsDir);
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, 'image-' + uniqueSuffix + path.extname(file.originalname));
    }
  });

  const upload = multer({
    storage: storage_multer,
    limits: {
      fileSize: 5 * 1024 * 1024 // 5MB limit
    },
    fileFilter: (req, file, cb) => {
      const allowedTypes = /jpeg|jpg|png|gif|webp/;
      const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
      const mimetype = allowedTypes.test(file.mimetype);

      if (mimetype && extname) {
        return cb(null, true);
      } else {
        cb(new Error('Apenas imagens são permitidas (JPEG, PNG, GIF, WebP)'));
      }
    }
  });

  // Auth middleware
  await setupAuth(app);

  // Auth routes
  app.get('/api/auth/user', isAuthenticated, async (req: any, res) => {
    try {
      // Check if user is authenticated via session (simple auth)
      if ((req.session as any)?.isAdminAuthenticated) {
        res.json({ 
          email: 'admin@bpc.com', 
          firstName: 'Admin',
          id: 'admin' 
        });
        return;
      }
      
      // Otherwise, try Replit OIDC auth
      if (req.user?.claims) {
        const userId = req.user.claims.sub;
        const user = await storage.getUser(userId);
        res.json(user);
      } else {
        res.status(401).json({ message: "Unauthorized" });
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });

  // Session check endpoint for non-Replit environments
  app.get('/api/admin/session', (req, res) => {
    const isAuthenticated = (req.session as any)?.isAdminAuthenticated || false;
    res.json({ authenticated: isAuthenticated });
  });

  // Debug endpoint (protected)
  app.get('/api/admin/debug', isAuthenticated, (req, res) => {
    res.json({ 
      hasSession: !!req.session,
      isAuthenticated: (req.session as any)?.isAdminAuthenticated || false,
      environment: process.env.NODE_ENV || 'development'
    });
  });

  // Image upload endpoint (admin only)
  app.post('/api/admin/upload', isAuthenticated, upload.single('image'), (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: 'Nenhuma imagem foi enviada'
        });
      }

      const imageUrl = `/uploads/${req.file.filename}`;
      
      res.json({
        success: true,
        message: 'Imagem enviada com sucesso!',
        imageUrl: imageUrl
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Erro ao fazer upload da imagem'
      });
    }
  });

  // Serve uploaded images
  app.use('/uploads', (req, res, next) => {
    // Add cache headers for images
    res.setHeader('Cache-Control', 'public, max-age=86400'); // 1 day
    next();
  });
  
  app.use('/uploads', express.static(uploadsDir));

  // Contact form submission (public)
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      res.json({ 
        success: true, 
        message: "Mensagem enviada com sucesso! Em breve entraremos em contato.",
        contact: contact 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Dados inválidos", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Erro interno do servidor" 
        });
      }
    }
  });

  // Get all contacts (admin only)
  app.get("/api/contacts", isAuthenticated, async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Erro ao buscar contatos" 
      });
    }
  });

  // Blog posts routes (public)
  app.get("/api/posts", async (req, res) => {
    try {
      const posts = await storage.getPublishedPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Erro ao buscar posts" 
      });
    }
  });

  app.get("/api/posts/featured", async (req, res) => {
    try {
      const post = await storage.getFeaturedPost();
      res.json(post);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Erro ao buscar post em destaque" 
      });
    }
  });

  app.get("/api/posts/:id", async (req, res) => {
    try {
      const post = await storage.getPost(req.params.id);
      if (!post) {
        return res.status(404).json({ 
          success: false, 
          message: "Post não encontrado" 
        });
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Erro ao buscar post" 
      });
    }
  });

  // Admin blog posts routes (protected)
  app.get("/api/admin/posts", isAuthenticated, async (req, res) => {
    try {
      const posts = await storage.getPosts(); // All posts including unpublished
      res.json(posts);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Erro ao buscar posts" 
      });
    }
  });

  app.post("/api/admin/posts", isAuthenticated, async (req, res) => {
    try {
      // Ensure imageUrls doesn't exceed 3 items
      if (req.body.imageUrls && req.body.imageUrls.length > 3) {
        req.body.imageUrls = req.body.imageUrls.slice(0, 3);
      }
      
      const validatedData = insertPostSchema.parse(req.body);
      const post = await storage.createPost(validatedData);
      res.json({ 
        success: true, 
        message: "Post criado com sucesso!",
        post: post 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Dados inválidos", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Erro interno do servidor" 
        });
      }
    }
  });

  app.put("/api/admin/posts/:id", isAuthenticated, async (req, res) => {
    try {
      // Ensure imageUrls doesn't exceed 3 items
      if (req.body.imageUrls && req.body.imageUrls.length > 3) {
        req.body.imageUrls = req.body.imageUrls.slice(0, 3);
      }
      
      const validatedData = updatePostSchema.parse(req.body);
      const post = await storage.updatePost(req.params.id, validatedData);
      res.json({ 
        success: true, 
        message: "Post atualizado com sucesso!",
        post: post 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Dados inválidos", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Erro interno do servidor ou post não encontrado" 
        });
      }
    }
  });

  app.delete("/api/admin/posts/:id", isAuthenticated, async (req, res) => {
    try {
      await storage.deletePost(req.params.id);
      res.json({ 
        success: true, 
        message: "Post excluído com sucesso!" 
      });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Erro ao excluir post" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
