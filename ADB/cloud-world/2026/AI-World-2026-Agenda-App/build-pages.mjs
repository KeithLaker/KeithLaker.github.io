import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const appDir = path.dirname(new URL(import.meta.url).pathname);
const dataSource = fs.readFileSync(path.join(appDir, 'data.js'), 'utf8');
const context = { window: {} };
vm.runInNewContext(dataSource, context);
const sessions = context.window.AI_WORLD_DATA.sessions;

const shell = (session) => `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${session.title} · Oracle AI World 2026">
  <title>${session.title} · Oracle AI World 2026</title>
  <link rel="stylesheet" href="../../styles.css">
</head>
<body><div class="site-shell"><div id="app" data-view="session" data-session="${session.id}" data-root="../../"></div></div><script src="../../data.js"></script><script src="../../app.js"></script></body>
</html>
`;

for (const session of sessions) {
  const dir = path.join(appDir, 'sessions', session.id);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), shell(session));
}

console.log(`Generated ${sessions.length} session pages.`);
