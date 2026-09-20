import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL(".", import.meta.url));
const PORT = Number(process.env.PORT || 4173);
const MIME = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".json": "application/json; charset=utf-8", ".svg": "image/svg+xml" };

function json(res, status, body) {
  res.writeHead(status, { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" });
  res.end(JSON.stringify(body));
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  if (url.pathname === "/api/health") return json(res, 200, { ok: true });
  if (req.method !== "GET") return json(res, 405, { error: "Método no permitido" });
  const requestPath = url.pathname === "/" ? "index.html" : url.pathname.slice(1);
  const safePath = normalize(requestPath).replace(/^(\.\.[/\\])+/, "");
  const file = join(ROOT, safePath);
  if (!file.startsWith(ROOT)) return json(res, 403, { error: "Ruta no permitida" });
  try {
    const info = await stat(file);
    if (!info.isFile()) throw new Error("Not a file");
    res.writeHead(200, { "content-type": MIME[extname(file)] || "application/octet-stream" });
    res.end(await readFile(file));
  } catch {
    res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    res.end("No encontrado");
  }
});

server.listen(PORT, () => console.log(`Nexo Estudio UVG disponible en http://localhost:${PORT}`));
