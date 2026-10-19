/**
 * Post-build checks on the HTML that actually ships.
 *
 * check-meta.mjs looks at the data files before the build. This looks at the
 * finished pages, which is the only place some problems show up: the homepage
 * meta lives in index.html, combo meta is assembled from a template, and
 * links are written all over the components.
 *
 * Fails the build if any prerendered page:
 *   - has an empty #root (content not prerendered)
 *   - does not have exactly one <h1>
 *   - has a title over 60 characters, or a description outside 70–158
 *   - links internally to a page path without a trailing slash (each one is a
 *     redirect hop on Cloudflare Pages)
 *   - links internally to a page that doesn't exist
 *   - has unparseable JSON-LD
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const routes = JSON.parse(fs.readFileSync(path.join(ROOT, 'dist-ssr', 'routes.json'), 'utf-8'));
const known = new Set(routes);

const decode = s => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const problems = [];

for (const url of routes) {
  const html = fs.readFileSync(path.join(DIST, url, 'index.html'), 'utf-8');
  const p = msg => problems.push(`${url}: ${msg}`);

  if (html.includes('<div id="root"></div>')) p('empty #root — page body was not prerendered');

  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  if (h1s !== 1) p(`${h1s} <h1> tags`);

  const title = decode((html.match(/<title>([^<]*)<\/title>/) || [])[1] || '');
  const desc = decode((html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '');
  if (title.length > 60) p(`title ${title.length}/60 — "${title}"`);
  if (desc.length > 158 || desc.length < 70) p(`description ${desc.length} chars (70–158)`);

  for (const m of html.matchAll(/<a\s[^>]*href="(\/[^"]*)"/g)) {
    const href = decode(m[1]);
    const pathOnly = href.split('#')[0].split('?')[0];
    if (!pathOnly || pathOnly === '/') continue;
    if (/\.[a-z0-9]{2,5}$/i.test(pathOnly)) continue; // files
    if (!pathOnly.endsWith('/')) { p(`link without trailing slash: ${href}`); continue; }
    if (!known.has(pathOnly)) p(`link to a page that doesn't exist: ${href}`);
  }

  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(m[1]); } catch { p('invalid JSON-LD block'); }
  }
}

const notFound = fs.readFileSync(path.join(DIST, '404.html'), 'utf-8');
if (!/name="robots" content="noindex/.test(notFound)) problems.push('404.html: missing noindex');
if (/rel="canonical"/.test(notFound)) problems.push('404.html: should not carry a canonical');

const uniq = [...new Set(problems)];
if (uniq.length) {
  console.error(`\nDist check FAILED — ${uniq.length} problem(s):\n`);
  for (const x of uniq.slice(0, 60)) console.error('  ' + x);
  if (uniq.length > 60) console.error(`  …and ${uniq.length - 60} more`);
  process.exit(1);
}
console.log(`Dist check passed: ${routes.length} pages`);
