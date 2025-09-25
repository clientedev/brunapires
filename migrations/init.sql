-- Migração inicial para criação das tabelas necessárias
-- Este arquivo pode ser usado para configurar o banco de dados no Railway

-- Extensão para gerar UUIDs
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Tabela de sessões para autenticação
CREATE TABLE IF NOT EXISTS "sessions" (
  "sid" varchar PRIMARY KEY NOT NULL,
  "sess" jsonb NOT NULL,
  "expire" timestamp NOT NULL
);

-- Índice para performance das sessões
CREATE INDEX IF NOT EXISTS "IDX_session_expire" ON "sessions" ("expire");

-- Tabela de usuários
CREATE TABLE IF NOT EXISTS "users" (
  "id" varchar PRIMARY KEY DEFAULT gen_random_uuid(),
  "email" varchar UNIQUE,
  "first_name" varchar,
  "last_name" varchar,
  "profile_image_url" varchar,
  "created_at" timestamp DEFAULT now(),
  "updated_at" timestamp DEFAULT now()
);

-- Tabela de contatos
CREATE TABLE IF NOT EXISTS "contacts" (
  "id" varchar PRIMARY KEY DEFAULT gen_random_uuid(),
  "name" text NOT NULL,
  "email" text NOT NULL,
  "phone" text NOT NULL,
  "service" text NOT NULL,
  "message" text,
  "created_at" timestamp DEFAULT now() NOT NULL
);

-- Tabela de posts (blog)
CREATE TABLE IF NOT EXISTS "posts" (
  "id" varchar PRIMARY KEY DEFAULT gen_random_uuid(),
  "title" text DEFAULT '',
  "excerpt" text DEFAULT '',
  "content" text DEFAULT '',
  "image_urls" text[] DEFAULT '{}',
  "author" text DEFAULT '',
  "category" text DEFAULT '',
  "featured" boolean DEFAULT false,
  "published" boolean DEFAULT true,
  "created_at" timestamp DEFAULT now() NOT NULL,
  "updated_at" timestamp DEFAULT now() NOT NULL
);

-- Índices para melhor performance
CREATE INDEX IF NOT EXISTS "idx_posts_published" ON "posts" ("published");
CREATE INDEX IF NOT EXISTS "idx_posts_created_at" ON "posts" ("created_at");
CREATE INDEX IF NOT EXISTS "idx_posts_featured" ON "posts" ("featured");
CREATE INDEX IF NOT EXISTS "idx_posts_category" ON "posts" ("category");