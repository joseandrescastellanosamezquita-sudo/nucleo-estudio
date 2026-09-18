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

function linkNext(header) {
  if (!header) return null;
  const hit = header.split(",").find((part) => /rel="next"/.test(part));
  return hit?.match(/<([^>]+)>/)?.[1] || null;
}

async function canvasAll(path) {
  const base = process.env.CANVAS_BASE_URL?.replace(/\/$/, "");
  const token = process.env.CANVAS_API_TOKEN;
  if (!base || !token) throw Object.assign(new Error("Canvas no está configurado en el servidor."), { code: "NOT_CONFIGURED" });
  let url = `${base}/api/v1${path}${path.includes("?") ? "&" : "?"}per_page=100`;
  const rows = [];
  while (url) {
    const response = await fetch(url, { headers: { Authorization: `Bearer ${token}`, Accept: "application/json+canvas-string-ids" } });
    if (!response.ok) throw new Error(`Canvas respondió ${response.status}`);
    rows.push(...await response.json());
    url = linkNext(response.headers.get("link"));
  }
  return rows;
}

async function syncCanvas(res) {
  try {
    const courses = (await canvasAll("/courses?enrollment_state=active&include[]=term")).filter((c) => c.name);
    const detailed = await Promise.all(courses.map(async (course) => {
      const [assignments, modules] = await Promise.all([
        canvasAll(`/courses/${course.id}/assignments?order_by=due_at`),
        canvasAll(`/courses/${course.id}/modules?include[]=items`)
      ]);
      return {
        id: course.id, name: course.name, code: course.course_code, term: course.term?.name,
        assignments: assignments.map((a) => ({ id: a.id, title: a.name, dueAt: a.due_at, points: a.points_possible, url: a.html_url, description: (a.description || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim() })),
        modules: modules.map((m) => ({ id: m.id, name: m.name, items: (m.items || []).map((i) => ({ id: i.id, title: i.title, type: i.type })) }))
      };
    }));
    json(res, 200, { source: "canvas", syncedAt: new Date().toISOString(), courses: detailed });
  } catch (error) {
    json(res, error.code === "NOT_CONFIGURED" ? 503 : 502, { error: error.message, code: error.code || "CANVAS_ERROR" });
  }
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  if (url.pathname === "/api/health") return json(res, 200, { ok: true, canvasConfigured: Boolean(process.env.CANVAS_BASE_URL && process.env.CANVAS_API_TOKEN) });
  if (url.pathname === "/api/canvas/sync" && req.method === "GET") return syncCanvas(res);
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

server.listen(PORT, () => console.log(`Núcleo disponible en http://localhost:${PORT}`));
