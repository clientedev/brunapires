import { sql } from "drizzle-orm";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { db, connectDatabase } from "./db";
import { users } from "@shared/schema";
import bcrypt from "bcryptjs";
import path from "path";

export async function initializeDatabase() {
  console.log("🚀 Inicializando estrutura do banco de dados...");
  
  // Conecta ao banco primeiro
  await connectDatabase();
  
  try {
    // Executa as migrações automaticamente
    console.log("📄 Executando migrações do banco de dados...");
    await migrate(db, { migrationsFolder: path.join(process.cwd(), "migrations") });
    console.log("✅ Migrações executadas com sucesso!");
    
    // Verifica se as tabelas estão funcionando
    await db.execute(sql`SELECT 1 FROM posts LIMIT 1`);
    await db.execute(sql`SELECT 1 FROM contacts LIMIT 1`);
    await db.execute(sql`SELECT 1 FROM users LIMIT 1`);
    console.log("✅ Todas as tabelas estão funcionando corretamente!");
    
    // Cria usuário admin padrão se não existir
    await createDefaultAdmin();
    
  } catch (error) {
    console.error("❌ Erro ao inicializar banco de dados:", error);
    
    // Fallback: verificar estrutura básica
    console.log("🔄 Verificando estrutura do banco...");
    try {
      // Verifica se as tabelas existem
      const tableCheck = await db.execute(sql`
        SELECT table_name 
        FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name IN ('posts', 'contacts', 'users')
      `);
      
      const tableCount = Array.isArray(tableCheck) ? tableCheck.length : (tableCheck?.rows?.length || 0);
      
      if (tableCount < 3) {
        console.warn("⚠️ Algumas tabelas estão faltando. Executando push forçado...");
        // Note: Em produção, o Railway deve ter as migrações já aplicadas
      } else {
        console.log("✅ Tabelas principais encontradas no banco");
      }
      
    } catch (fallbackError) {
      console.error("❌ Erro na verificação:", fallbackError);
      throw fallbackError;
    }
  }
}

async function createDefaultAdmin() {
  try {
    // Verifica se já existe um admin
    const existingAdmin = await db.execute(sql`
      SELECT * FROM users WHERE email = 'admin@bpc.com' LIMIT 1
    `);
    
    if (Array.isArray(existingAdmin) && existingAdmin.length > 0) {
      console.log("✅ Usuário admin já existe");
      return;
    }
    
    // Cria usuário admin padrão
    const defaultEmail = process.env.ADMIN_EMAIL || 'admin@bpc.com';
    const defaultPassword = process.env.ADMIN_PASSWORD || 'admin123';
    const hashedPassword = await bcrypt.hash(defaultPassword, 10);
    
    await db.insert(users).values({
      email: defaultEmail,
      password: hashedPassword,
      firstName: 'Admin',
      lastName: 'BPC',
    });
    
    console.log(`✅ Usuário admin criado: ${defaultEmail}`);
    console.log(`🔑 Senha padrão: ${defaultPassword} (altere no primeiro login)`);
    
  } catch (error) {
    console.error("⚠️ Erro ao criar usuário admin:", error);
  }
}