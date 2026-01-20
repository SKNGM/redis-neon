import express from "express";
import { pgPool } from "./db.js";

const app = express();

app.get("/health", async (req, res) => {
  const result = await pgPool.query("SELECT NOW()");
  res.json({ status: "ok", dbTime: result.rows[0] });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});

