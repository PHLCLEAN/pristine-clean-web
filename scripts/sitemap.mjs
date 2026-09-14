/**
 * Sitemap generator.
 *
 * Derives every URL from the data files rather than a hand-maintained list,
 * so the sitemap can never drift out of sync with the site again. Writes
 * public/sitemap.xml (committed, and served by any host) and also copies into
 * dist/ when a build has already run.
 *
 * Runs automatically as part of `npm run build`.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'src');
const ORIGIN = 'https://phlclean.com';
const NS = 'http://www.sitemaps.org/schemas/sitemap/0.9';

function slugsFrom(file) {
  const content = fs.readFileSync(path.join(SRC, 'data', file), 'utf-8');
  // services.ts / locations.ts nest objects inside an array (4 spaces);
  // blog-posts.ts declares each post at top level (2 spaces).
  return [...content.matchAll(/^ {2,4}slug:\s*"([^"]+)"/gm)].map(m => m[1]);
}

/**
 * Blog posts carry their own publish date. Use it for lastmod rather than
 * claiming every post changed today — a sitemap that says everything is
 * always fresh is one Google learns to ignore.
 */
function postDates() {
  const content = fs.readFileSync(path.join(SRC, 'data', 'blog-posts.ts'), 'utf-8');
  const out = {};
  for (const m of content.matchAll(/slug:\s*"([^"]+)"[\s\S]{0,600}?date:\s*"(\d{4}-\d{2}-\d{2})"/g)) {
    out[m[1]] = m[2];
  }
  return out;
}

const services = slugsFrom('services.ts');
const locations = slugsFrom('locations.ts');
const posts = slugsFrom('blog-posts.ts');

if (!services.length || !locations.length || !posts.length) {
  throw new Error(
    `Sitemap parse failed — services:${services.length} locations:${locations.length} posts:${posts.length}`
  );
}

const today = new Date().toISOString().slice(0, 10);
const DATES = postDates();

/** [path, changefreq, priority] */
const urls = [
  ['/', 'weekly', '1.0'],
  ['/blog/', 'weekly', '0.8'],
  ['/team/', 'monthly', '0.5'],
  ['/careers/', 'monthly', '0.5'],
  ...services.map(s => [`/services/${s}/`, 'monthly', '0.9']),
  ...locations.map(l => [`/locations/${l}/`, 'monthly', '0.7']),
  ...services.flatMap(s => locations.map(l => [`/services/${s}/${l}/`, 'monthly', '0.6'])),
  ...posts.map(p => [`/blog/${p}/`, 'monthly', '0.6', DATES[p]]),
  ['/privacy/', 'yearly', '0.3'],
  ['/terms/', 'yearly', '0.3'],
];

const entries = urls.map(([loc, changefreq, priority, lastmod]) => [
  '  <url>',
  `    <loc>${ORIGIN}${loc}</loc>`,
  `    <lastmod>${lastmod || today}</lastmod>`,
  `    <changefreq>${changefreq}</changefreq>`,
  `    <priority>${priority}</priority>`,
  '  </url>',
].join('\n')).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="${NS}">\n${entries}\n</urlset>\n`;

fs.writeFileSync(path.join(ROOT, 'public', 'sitemap.xml'), xml);
const dist = path.join(ROOT, 'dist');
if (fs.existsSync(dist)) fs.writeFileSync(path.join(dist, 'sitemap.xml'), xml);

console.log(
  `Sitemap: ${urls.length} URLs ` +
  `(${services.length} services, ${locations.length} locations, ` +
  `${services.length * locations.length} combos, ${posts.length} posts)`
);
