import { sql } from "drizzle-orm";
import { db, connectDatabase } from "./db";
import { users } from "@shared/schema";
import bcrypt from "bcryptjs";
import fs from "fs";
import path from "path";

export async function initializeDatabase() {
  console.log("🚀 Inicializando estrutura do banco de dados...");
  
  // Conecta ao banco primeiro
  await connectDatabase();
  
  try {
    // Verifica se as tabelas principais existem
    console.log("📄 Verificando estrutura do banco de dados...");
    const tableCheck = await db.execute(sql`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name IN ('posts', 'contacts', 'users', 'sessions')
    `);
    
    const existingTables = Array.isArray(tableCheck) ? 
      tableCheck.map((row: any) => row.table_name) : 
      (tableCheck?.rows?.map((row: any) => row.table_name) || []);
    
    console.log(`📊 Tabelas encontradas: ${existingTables.join(', ')}`);
    
    // Se não temos todas as tabelas, executa as migrações
    if (existingTables.length < 4) {
      console.log("🔧 Aplicando migrações...");
      try {
        await applyMigrationsManually();
      } catch (migrationError) {
        console.error("❌ Erro nas migrações, tentando criação manual das tabelas...", migrationError);
        await createTablesManually();
      }
    } else {
      console.log("✅ Todas as tabelas já existem");
    }
    
    // Verifica se o campo password existe na tabela users
    await ensurePasswordField();
    
    // Testa se as tabelas estão funcionando
    await db.execute(sql`SELECT 1 FROM posts LIMIT 1`);
    await db.execute(sql`SELECT 1 FROM contacts LIMIT 1`);
    await db.execute(sql`SELECT 1 FROM users LIMIT 1`);
    console.log("✅ Todas as tabelas estão funcionando corretamente!");
    
    // Cria usuário admin padrão se não existir
    await createDefaultAdmin();
    
  } catch (error) {
    console.error("❌ Erro ao inicializar banco de dados:", error);
    throw error;
  }
}

async function applyMigrationsManually() {
  console.log("🔧 Executando migrações manuais...");
  
  try {
    // Lista todos os arquivos de migração
    const migrationsDir = path.join(process.cwd(), "migrations");
    const migrationFiles = fs.readdirSync(migrationsDir)
      .filter(file => file.endsWith('.sql'))
      .sort(); // Garante ordem correta
    
    console.log(`📁 Arquivos de migração encontrados: ${migrationFiles.join(', ')}`);
    
    for (const migrationFile of migrationFiles) {
      console.log(`📄 Processando: ${migrationFile}`);
      const migrationPath = path.join(migrationsDir, migrationFile);
      const migrationSql = fs.readFileSync(migrationPath, "utf-8");
      
      // Divide as declarações SQL corretamente
      const statements = migrationSql
        .split('-- statement-breakpoint')
        .map(stmt => stmt.replace(/--.*$/gm, '').trim())
        .filter(stmt => stmt.length > 0);
      
      for (const statement of statements) {
        try {
          await db.execute(sql.raw(statement));
          const preview = statement.replace(/\s+/g, ' ').substring(0, 60);
          console.log(`✅ Executado: ${preview}...`);
        } catch (error: any) {
          if (error.code === '42P07') { // table already exists
            const preview = statement.replace(/\s+/g, ' ').substring(0, 60);
            console.log(`⚠️ Já existe: ${preview}...`);
          } else {
            console.error(`❌ Erro executando: ${statement.substring(0, 60)}...`);
            console.error('Erro:', error.message);
            throw error;
          }
        }
      }
    }
    
    console.log("✅ Todas as migrações aplicadas");
    
  } catch (error) {
    console.error("❌ Erro nas migrações manuais:", error);
    throw error;
  }
}

async function createTablesManually() {
  console.log("🛠️ Criando tabelas manualmente...");
  
  const tableDefinitions = [
    {
      name: 'contacts',
      sql: `
        CREATE TABLE IF NOT EXISTS "contacts" (
          "id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
          "name" text NOT NULL,
          "email" text NOT NULL,
          "phone" text NOT NULL,
          "service" text NOT NULL,
          "message" text,
          "created_at" timestamp DEFAULT now() NOT NULL
        );
      `
    },
    {
      name: 'posts',
      sql: `
        CREATE TABLE IF NOT EXISTS "posts" (
          "id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
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
      `
    },
    {
      name: 'sessions',
      sql: `
        CREATE TABLE IF NOT EXISTS "sessions" (
          "sid" varchar PRIMARY KEY NOT NULL,
          "sess" jsonb NOT NULL,
          "expire" timestamp NOT NULL
        );
      `
    },
    {
      name: 'users',
      sql: `
        CREATE TABLE IF NOT EXISTS "users" (
          "id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
          "email" varchar UNIQUE,
          "password" varchar,
          "first_name" varchar,
          "last_name" varchar,
          "profile_image_url" varchar,
          "created_at" timestamp DEFAULT now(),
          "updated_at" timestamp DEFAULT now()
        );
      `
    }
  ];
  
  for (const table of tableDefinitions) {
    try {
      await db.execute(sql.raw(table.sql));
      console.log(`✅ Tabela "${table.name}" criada/verificada`);
    } catch (error: any) {
      console.error(`❌ Erro ao criar tabela "${table.name}":`, error.message);
    }
  }
  
  // Cria índices necessários
  try {
    await db.execute(sql.raw(`
      CREATE INDEX IF NOT EXISTS "IDX_session_expire" ON "sessions" USING btree ("expire");
    `));
    console.log("✅ Índices criados");
  } catch (error: any) {
    console.log("⚠️ Erro ao criar índices:", error.message);
  }
}

async function ensurePasswordField() {
  try {
    // Verifica se o campo password existe
    const columnCheck = await db.execute(sql`
      SELECT column_name 
      FROM information_schema.columns 
      WHERE table_name = 'users' AND column_name = 'password'
    `);
    
    const hasPasswordField = Array.isArray(columnCheck) ? 
      columnCheck.length > 0 : 
      (columnCheck?.rows?.length || 0) > 0;
    
    if (!hasPasswordField) {
      console.log("🔧 Adicionando campo password à tabela users...");
      await db.execute(sql`ALTER TABLE "users" ADD COLUMN "password" varchar`);
      console.log("✅ Campo password adicionado");
    } else {
      console.log("✅ Campo password já existe");
    }
    
  } catch (error) {
    console.error("⚠️ Erro ao verificar campo password:", error);
  }
}

async function createDefaultAdmin() {
  try {
    // Verifica se já existe um admin
    const existingAdmin = await db.execute(sql`
      SELECT * FROM users WHERE email = 'bruna.admin' LIMIT 1
    `);
    
    const hasExistingAdmin = existingAdmin.rows && existingAdmin.rows.length > 0;
    
    if (hasExistingAdmin) {
      console.log("✅ Usuário admin já existe");
      return;
    }
    
    // Cria usuário admin padrão
    const defaultEmail = process.env.ADMIN_EMAIL || 'bruna.admin';
    const defaultPassword = process.env.ADMIN_PASSWORD || '4731bruna';
    const hashedPassword = await bcrypt.hash(defaultPassword, 10);
    
    try {
      await db.insert(users).values({
        email: defaultEmail,
        password: hashedPassword,
        firstName: 'Bruna',
        lastName: 'Admin',
      });
      
      console.log(`✅ Usuário admin criado: ${defaultEmail}`);
      console.log(`🔑 Senha padrão: ${defaultPassword} (altere no primeiro login)`);
      
    } catch (insertError: any) {
      if (insertError.code === '23505') { // unique constraint violation
        console.log("✅ Usuário admin já existe (constraint)");
      } else {
        throw insertError;
      }
    }
    
  } catch (error) {
    console.error("⚠️ Erro ao criar usuário admin:", error);
  }
}