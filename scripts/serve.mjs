import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const portIndex = process.argv.indexOf('--port');
const port = Number(portIndex >= 0 ? process.argv[portIndex+1] : process.env.PORT || 3210);
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.ico':'image/x-icon','.json':'application/json','.webmanifest':'application/manifest+json','.woff2':'font/woff2','.ttf':'font/ttf','.zip':'application/zip','.md':'text/plain; charset=utf-8','.txt':'text/plain; charset=utf-8'};
const server = http.createServer(async (req,res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    const relative = pathname === '/' ? 'index.html' : pathname.slice(1);
    if (!(relative === 'index.html' || relative.startsWith('assets/') || relative.startsWith('styles/') || relative === 'scripts/showcase.js')) {res.writeHead(404);res.end('Not found');return;}
    const file = path.resolve(root,relative);
    const resolvedRelative = path.relative(root,file).split(path.sep).join('/');
    if (!(resolvedRelative === 'index.html' || resolvedRelative.startsWith('assets/') || resolvedRelative.startsWith('styles/') || resolvedRelative === 'scripts/showcase.js')) {res.writeHead(404);res.end('Not found');return;}
    if (!file.startsWith(root+path.sep) || !(await stat(file)).isFile()) {res.writeHead(404);res.end('Not found');return;}
    const body = await readFile(file);
    res.writeHead(200,{'Content-Type':types[path.extname(file)] || 'application/octet-stream','Content-Length':body.length,'Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'});
    res.end(req.method === 'HEAD' ? undefined : body);
  } catch {res.writeHead(404);res.end('Not found');}
});
server.on('error',error => {console.error(`Preview could not start on 127.0.0.1:${port}: ${error.message}`);process.exitCode=1;});
server.listen(port,'127.0.0.1',()=>console.log(`Monolith preview: http://127.0.0.1:${port}`));
