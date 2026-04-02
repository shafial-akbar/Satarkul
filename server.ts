import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import fs from "fs";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API Route for Content
  app.get("/api/content", async (req, res) => {
    try {
      // Use a cache-busting query string for the dynamic import in development
      const contentPath = path.join(process.cwd(), "src/data/siteContent.js");
      const fileUri = `file://${contentPath}?update=${Date.now()}`;
      const { default: siteContent } = await import(fileUri);
      res.json(siteContent);
    } catch (error) {
      console.error("Error loading siteContent.js:", error);
      res.status(500).json({ error: "Failed to load content" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
