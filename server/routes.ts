import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth, isAuthenticated } from "./replitAuth";
import { insertContactSchema, insertPostSchema, updatePostSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Auth middleware
  await setupAuth(app);

  // Auth routes
  app.get('/api/auth/user', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      res.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });

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
