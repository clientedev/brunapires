import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import * as schema from "@shared/schema";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is required");
}

// Configuração do cliente PostgreSQL para Railway
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === "production" ? {
    rejectUnauthorized: false // Railway uses self-signed certificates
  } : false
});

export const db = drizzle(client, { schema });

// Função para conectar ao banco
export async function connectDatabase() {
  try {
    await client.connect();
    console.log("✅ Conectado ao banco de dados PostgreSQL");
  } catch (error: any) {
    if (error.code !== 'ECONNREFUSED' && !error.message.includes('already connected')) {
      console.log("✅ Banco de dados já conectado");
    } else {
      throw error;
    }
  }
  return client;
}