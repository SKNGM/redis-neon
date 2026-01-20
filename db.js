import "dotenv/config";
import pkg from "pg";
const { Pool } = pkg;

console.log("📡 Iniciando conexión a PostgreSQL...");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

try {
  const res = await pool.query("SELECT NOW()");
  console.log("✅ PostgreSQL conectado:", res.rows[0]);
} catch (error) {
  console.error("❌ Error conectando a PostgreSQL:", error.message);
} finally {
  await pool.end();
}
