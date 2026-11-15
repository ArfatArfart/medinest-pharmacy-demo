// Wraps src/page.html into a standalone index.html (for hosting on Netlify, Vercel, GitHub Pages).
import { readFileSync, writeFileSync } from 'node:fs';
const page = readFileSync(new URL('./src/page.html', import.meta.url), 'utf8');
const out = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
</head>
<body>
${page}
</body>
</html>
`;
writeFileSync(new URL('./index.html', import.meta.url), out);
console.log('index.html written', out.length, 'bytes');
