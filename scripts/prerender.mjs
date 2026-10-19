/**
 * Post-build prerender.
 *
 * Renders every route with React on the server (src/entry-server.tsx, built
 * by `vite build --ssr` into dist-ssr/) and writes dist/<route>/index.html
 * with the full page body and the page's own head tags.
 *
 * Before October 2026 this script only rewrote the <head>; the body was an
 * empty <div id="root"> that JavaScript filled in. Google coped, slowly. Bing
 * and most AI search crawlers saw nothing at all.
 *
 * The meta comes from the same useSeo() call the live page makes, so the raw
 * HTML and the rendered page cannot disagree.
 *
 * Also writes dist/sitemap.xml from the same route list (every route that is
 * not noindexed), so the sitemap cannot drift from what actually exists.
 *
 * Also writes dist/404.html. Cloudflare Pages serves that file with a real 404
 * status for any path that has no file — which is why public/_redirects no
 * longer has a catch-all SPA rule.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const SSR_ENTRY = path.join(ROOT, 'dist-ssr', 'entry-server.js');
const ORIGIN = 'https://phlclean.com';

const { render, services, locations, blogPosts, COMBO_LOCATION_SLUGS, INDEXED_COMBO_LOCATION_SLUGS } =
  await import(pathToFileURL(SSR_ENTRY).href);

const template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf-8');
if (!template.includes('<div id="root"></div>')) {
  throw new Error('dist/index.html has no empty #root — has it already been prerendered?');
}

const routes = [
  '/', '/blog/', '/team/', '/careers/', '/privacy/', '/terms/',
  ...services.map(s => `/services/${s.slug}/`),
  ...locations.map(l => `/locations/${l.slug}/`),
  ...services.flatMap(s => COMBO_LOCATION_SLUGS.map(l => `/services/${s.slug}/${l}/`)),
  ...blogPosts.map(p => `/blog/${p.slug}/`),
];

const esc = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function setAttr(html, re, value, label, url) {
  if (!re.test(html)) throw new Error(`${url}: template has no ${label} tag to replace`);
  return html.replace(re, (_m, pre) => `${pre}${value}"`);
}

function buildPage(url, body, seo) {
  let html = template;
  if (seo) {
    const t = esc(seo.title), d = esc(seo.description);
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${t}</title>`);
    html = setAttr(html, /(<meta name="description" content=")[^"]*"/, d, 'description', url);
    html = setAttr(html, /(<meta property="og:title" content=")[^"]*"/, t, 'og:title', url);
    html = setAttr(html, /(<meta property="og:description" content=")[^"]*"/, d, 'og:description', url);
    html = setAttr(html, /(<meta name="twitter:title" content=")[^"]*"/, t, 'twitter:title', url);
    html = setAttr(html, /(<meta name="twitter:description" content=")[^"]*"/, d, 'twitter:description', url);
    if (seo.canonical) {
      html = setAttr(html, /(<link rel="canonical" href=")[^"]*"/, seo.canonical, 'canonical', url);
      html = setAttr(html, /(<meta property="og:url" content=")[^"]*"/, seo.canonical, 'og:url', url);
    }
    if (seo.robots) {
      html = html.replace('<meta name="author"', `<meta name="robots" content="${esc(seo.robots)}" />\n    <meta name="author"`);
    }
  }
  return html.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
}

let count = 0;
const indexable = [];
for (const url of routes) {
  const { html: body, seo } = await render(url);
  if (url !== '/' && !seo) throw new Error(`${url}: page did not call useSeo()`);
  if (seo?.canonical && seo.canonical !== ORIGIN + url) {
    throw new Error(`${url}: canonical is ${seo.canonical}`);
  }
  if (!/<h1[\s>]/.test(body)) throw new Error(`${url}: rendered without an <h1>`);
  const out = path.join(DIST, url, 'index.html');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, buildPage(url, body, seo));
  if (!seo?.robots?.includes('noindex')) indexable.push(url);
  count++;
}

// ---- sitemap ----
// lastmod only where we know a real date (blog posts). A build date on every
// page teaches Google to ignore lastmod entirely.
const postDate = Object.fromEntries(blogPosts.map(p => [`/blog/${p.slug}/`, p.updated ?? p.date]));
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable.map(u => `  <url>\n    <loc>${ORIGIN}${u}</loc>${postDate[u] ? `\n    <lastmod>${postDate[u]}</lastmod>` : ''}\n  </url>`).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(DIST, 'sitemap.xml'), sitemap);
const expectedNoindex = services.length * (COMBO_LOCATION_SLUGS.length - INDEXED_COMBO_LOCATION_SLUGS.length);
if (routes.length - indexable.length !== expectedNoindex) {
  throw new Error(`Expected ${expectedNoindex} noindexed routes, found ${routes.length - indexable.length}`);
}

// 404 page — rendered at a path no route matches.
{
  const { html: body, seo } = await render('/__not-found__/');
  const page = buildPage('/404', body, { ...seo, canonical: undefined })
    .replace(/\s*<link rel="canonical" href="[^"]*" \/>/, '')
    .replace(/\s*<meta property="og:url" content="[^"]*" \/>/, '');
  fs.writeFileSync(path.join(DIST, '404.html'), page);
}

fs.writeFileSync(path.join(ROOT, 'dist-ssr', 'routes.json'), JSON.stringify(routes, null, 1));
console.log(`Prerendered ${count} routes with full content, plus 404.html. Sitemap: ${indexable.length} URLs (${count - indexable.length} noindexed routes left out)`);
