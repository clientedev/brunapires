import { sql } from "drizzle-orm";
import { db } from "./db";
import fs from "fs";
import path from "path";

export async function initializeDatabase() {
  console.log("🚀 Inicializando estrutura do banco de dados...");
  
  try {
    // Lê o arquivo SQL de inicialização
    const initSqlPath = path.join(process.cwd(), "migrations", "init.sql");
    
    if (fs.existsSync(initSqlPath)) {
      const initSql = fs.readFileSync(initSqlPath, "utf-8");
      
      // Executa o SQL de inicialização
      await db.execute(sql.raw(initSql));
      console.log("✅ Estrutura do banco de dados criada com sucesso!");
      
      // Testa se as tabelas estão funcionando
      await db.execute(sql`SELECT 1 FROM posts LIMIT 1`);
      await db.execute(sql`SELECT 1 FROM contacts LIMIT 1`);
      await db.execute(sql`SELECT 1 FROM users LIMIT 1`);
      
      console.log("✅ Todas as tabelas estão funcionando corretamente!");
      
    } else {
      console.warn("⚠️ Arquivo de inicialização não encontrado, usando Drizzle push");
    }
    
  } catch (error) {
    console.error("❌ Erro ao inicializar banco de dados:", error);
    
    // Fallback: tentar usar a estrutura do Drizzle diretamente
    console.log("🔄 Tentando inicialização alternativa...");
    try {
      // Tenta criar as extensões básicas
      await db.execute(sql`CREATE EXTENSION IF NOT EXISTS "pgcrypto"`);
      console.log("✅ Extensão pgcrypto habilitada");
      
      // Tenta verificar se as tabelas existem
      const tableCheck = await db.execute(sql`
        SELECT table_name 
        FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name IN ('posts', 'contacts', 'users')
      `);
      
      const tableCount = Array.isArray(tableCheck) ? tableCheck.length : (tableCheck?.rows?.length || 0);
      
      if (tableCount < 3) {
        console.warn("⚠️ Algumas tabelas estão faltando. Execute 'npm run db:push --force' manualmente");
      } else {
        console.log("✅ Tabelas principais encontradas no banco");
      }
      
    } catch (fallbackError) {
      console.error("❌ Erro na inicialização alternativa:", fallbackError);
      throw fallbackError;
    }
  }
}