import * as client from "openid-client";
import { Strategy, type VerifyFunction } from "openid-client/passport";

import passport from "passport";
import session from "express-session";
import type { Express, RequestHandler } from "express";
import memoize from "memoizee";
import connectPg from "connect-pg-simple";
import { storage } from "./storage";

// Check if we're in a Replit environment
const isReplitEnvironment = !!process.env.REPLIT_DOMAINS;

if (!isReplitEnvironment && process.env.NODE_ENV === "production") {
  console.log("Running in non-Replit production environment (e.g., Railway). Replit auth disabled.");
}

const getOidcConfig = memoize(
  async () => {
    return await client.discovery(
      new URL(process.env.ISSUER_URL ?? "https://replit.com/oidc"),
      process.env.REPL_ID!
    );
  },
  { maxAge: 3600 * 1000 }
);

export function getSession() {
  const sessionTtl = 7 * 24 * 60 * 60 * 1000; // 1 week
  
  let sessionStore;
  if (process.env.DATABASE_URL) {
    const pgStore = connectPg(session);
    sessionStore = new pgStore({
      conString: process.env.DATABASE_URL,
      createTableIfMissing: true,
      ttl: sessionTtl,
      tableName: "sessions",
    });
  }
  // If no DATABASE_URL, use default memory store
  
  return session({
    secret: process.env.SESSION_SECRET || 'fallback-secret-key',
    store: sessionStore, // undefined = use default memory store
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: sessionTtl,
    },
  });
}

function updateUserSession(
  user: any,
  tokens: client.TokenEndpointResponse & client.TokenEndpointResponseHelpers
) {
  user.claims = tokens.claims();
  user.access_token = tokens.access_token;
  user.refresh_token = tokens.refresh_token;
  user.expires_at = user.claims?.exp;
}

async function upsertUser(
  claims: any,
) {
  await storage.upsertUser({
    id: claims["sub"],
    email: claims["email"],
    firstName: claims["first_name"],
    lastName: claims["last_name"],
    profileImageUrl: claims["profile_image_url"],
  });
}

export async function setupAuth(app: Express) {
  app.set("trust proxy", 1);
  
  // Always setup sessions (needed for admin login in all environments)
  app.use(getSession());
  
  // Only setup passport if in Replit environment
  if (isReplitEnvironment) {
    app.use(passport.initialize());
    app.use(passport.session());

    const config = await getOidcConfig();

    const verify: VerifyFunction = async (
      tokens: client.TokenEndpointResponse & client.TokenEndpointResponseHelpers,
      verified: passport.AuthenticateCallback
    ) => {
      const user = {};
      updateUserSession(user, tokens);
      await upsertUser(tokens.claims());
      verified(null, user);
    };

    // Get domains from REPLIT_DOMAINS and add localhost for development
    const domains = process.env.REPLIT_DOMAINS!.split(",");
    const allDomains = [...domains, "localhost", "127.0.0.1"];
    
    for (const domain of allDomains) {
      const isLocalhost = domain === "localhost" || domain === "127.0.0.1";
      const protocol = isLocalhost ? "http" : "https";
      const port = isLocalhost ? ":5000" : "";
      
      const strategy = new Strategy(
        {
          name: `replitauth:${domain}`,
          config,
          scope: "openid email profile offline_access",
          callbackURL: `${protocol}://${domain}${port}/api/callback`,
        },
        verify,
      );
      passport.use(strategy);
    }

    passport.serializeUser((user: Express.User, cb) => cb(null, user));
    passport.deserializeUser((user: Express.User, cb) => cb(null, user));

    app.get("/api/login", (req, res, next) => {
      passport.authenticate(`replitauth:${req.hostname}`, {
        prompt: "login consent",
        scope: ["openid", "email", "profile", "offline_access"],
      })(req, res, next);
    });

    app.get("/api/callback", (req, res, next) => {
      passport.authenticate(`replitauth:${req.hostname}`, {
        successReturnToOrRedirect: "/",
        failureRedirect: "/api/login",
      })(req, res, next);
    });

    app.get("/api/logout", (req, res) => {
      req.logout(() => {
        res.redirect(
          client.buildEndSessionUrl(config, {
            client_id: process.env.REPL_ID!,
            post_logout_redirect_uri: `${req.protocol}://${req.hostname}`,
          }).href
        );
      });
    });
  }
  
  // Always enable simple admin login as fallback (even in Replit)
  app.post("/api/admin/login", (req, res) => {
    const { username, password } = req.body;
    
    // Get credentials from environment or use defaults
    const adminUsername = process.env.ADMIN_USERNAME || "bruna.admin";
    const adminPassword = process.env.ADMIN_PASSWORD || "bruna4731";
    
    if (username === adminUsername && password === adminPassword) {
      (req.session as any).isAdminAuthenticated = true;
      res.json({ success: true, message: "Login realizado com sucesso" });
    } else {
      res.status(401).json({ 
        success: false, 
        message: "Usuário ou senha incorretos" 
      });
    }
  });
  
  app.post("/api/admin/logout", (req, res) => {
    (req.session as any).isAdminAuthenticated = false;
    req.session.destroy(() => {
      res.json({ success: true, message: "Logout realizado com sucesso" });
    });
  });
}

export const isAuthenticated: RequestHandler = async (req, res, next) => {
  // Check simple session auth first (works in both Replit and non-Replit)
  if ((req.session as any)?.isAdminAuthenticated) {
    return next();
  }
  
  // Check if we're in Replit environment for OIDC auth
  if (isReplitEnvironment) {
    // Original Replit auth logic
    const user = req.user as any;

    if (!req.isAuthenticated() || !user.expires_at) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const now = Math.floor(Date.now() / 1000);
    if (now <= user.expires_at) {
      return next();
    }

    const refreshToken = user.refresh_token;
    if (!refreshToken) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    try {
      const config = await getOidcConfig();
      const tokenResponse = await client.refreshTokenGrant(config, refreshToken);
      updateUserSession(user, tokenResponse);
      return next();
    } catch (error) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }
  } else {
    // If no authentication method worked
    return res.status(401).json({ message: "Unauthorized" });
  }
};