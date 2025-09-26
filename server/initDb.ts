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
      await applyMigrationsManually();
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
    // Aplica a primeira migração (criar tabelas)
    const migration1Path = path.join(process.cwd(), "migrations", "0000_redundant_mister_sinister.sql");
    if (fs.existsSync(migration1Path)) {
      const migration1Sql = fs.readFileSync(migration1Path, "utf-8");
      
      // Divide as declarações SQL e executa uma por vez
      const statements = migration1Sql.split('-->').filter(stmt => stmt.trim() && !stmt.includes('statement-breakpoint'));
      
      for (const statement of statements) {
        const cleanStatement = statement.trim();
        if (cleanStatement) {
          try {
            await db.execute(sql.raw(cleanStatement));
            console.log(`✅ Executado: ${cleanStatement.substring(0, 50)}...`);
          } catch (error: any) {
            if (error.code === '42P07') { // table already exists
              console.log(`⚠️ Tabela já existe: ${cleanStatement.substring(0, 50)}...`);
            } else {
              throw error;
            }
          }
        }
      }
    }
    
    console.log("✅ Migrações básicas aplicadas");
    
  } catch (error) {
    console.error("❌ Erro nas migrações manuais:", error);
    throw error;
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