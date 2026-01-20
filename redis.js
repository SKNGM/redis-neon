import "dotenv/config";
import { createClient } from "redis";

console.log("📡 Conectando a Redis...");

export const redis = createClient({
  username: process.env.REDIS_USERNAME,
  password: process.env.REDIS_PASSWORD,
  socket: {
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT)
  }
});

redis.on("error", err => console.error("❌ Redis error:", err));

await redis.connect();
console.log("✅ Redis conectado");
