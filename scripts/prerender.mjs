/**
 * Post-build prerendering script.
 * Creates per-route HTML files with correct title/description/canonical
 * baked into the raw HTML so crawlers see unique meta per page.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, '..', 'dist');
const SRC = path.resolve(__dirname, '..', 'src');

const template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf-8');

const routes = [];

function addRoute(urlPath, title, description, canonical) {
  canonical = canonical || `https://phlclean.com${urlPath}/`;
  routes.push({ urlPath, title, description, canonical });
}

// Helper: extract a quoted field value from a block of TS object text
function getField(block, key) {
  // Match key: "value" with possible whitespace/newlines
  const re = new RegExp(`${key}:\\s*"([^"]*)"`, 's');
  const m = block.match(re);
  return m ? m[1] : '';
}

// Parse services — split on each object in the array
const servicesContent = fs.readFileSync(path.join(SRC, 'data', 'services.ts'), 'utf-8');
// Find each object that has a slug field
const serviceMatches = [...servicesContent.matchAll(/\{\s*\n\s*slug:\s*"([^"]+)"([\s\S]*?)(?=\n\s*\{[\s\n]*slug:|export\s)/g)];
const services = serviceMatches.map(m => ({
  slug: m[1],
  shortTitle: getField(m[2], 'shortTitle'),
  metaTitle: getField(m[2], 'metaTitle'),
  metaDescription: getField(m[2], 'metaDescription'),
  heroTagline: getField(m[2], 'heroTagline'),
}));

// Parse locations
const locationsContent = fs.readFileSync(path.join(SRC, 'data', 'locations.ts'), 'utf-8');
const locationMatches = [...locationsContent.matchAll(/\{\s*\n\s*slug:\s*"([^"]+)"([\s\S]*?)(?=\n\s*\{[\s\n]*slug:|^\];$)/gm)];
const locations = locationMatches.map(m => ({
  slug: m[1],
  shortName: getField(m[2], 'shortName'),
  longName: getField(m[2], 'longName'),
  metaTitle: getField(m[2], 'metaTitle'),
  metaDescription: getField(m[2], 'metaDescription'),
}));

// Parse blog posts
const blogContent = fs.readFileSync(path.join(SRC, 'data', 'blog-posts.ts'), 'utf-8');
const blogPostMatches = [...blogContent.matchAll(/slug:\s*"([^"]+)"[\s\S]*?metaTitle:\s*"([^"]+)"[\s\S]*?metaDescription:\s*"([^"]+)"/g)];
const blogPosts = blogPostMatches.map(m => ({
  slug: m[1],
  metaTitle: m[2],
  metaDescription: m[3],
}));

console.log(`Parsed: ${services.length} services, ${locations.length} locations, ${blogPosts.length} blog posts`);

// Service pages
for (const svc of services) {
  addRoute(`/services/${svc.slug}`, svc.metaTitle, svc.metaDescription);
}

// Location pages
for (const loc of locations) {
  addRoute(`/locations/${loc.slug}`, loc.metaTitle, loc.metaDescription);
}

// Combo pages (service x location)
for (const svc of services) {
  for (const loc of locations) {
    const title = `${svc.shortTitle} in ${loc.shortName} | PHL Clean`;
    const desc = `Professional ${svc.shortTitle.toLowerCase()} for businesses in ${loc.longName}. ${svc.heroTagline} Locally owned. Book a free walkthrough — (215) 550-1414.`;
    addRoute(`/services/${svc.slug}/${loc.slug}`, title, desc);
  }
}

// Blog index
addRoute('/blog',
  'Cleaning Tips & Insights for Facility Managers | PHL Clean Blog',
  'Practical advice on commercial carpet cleaning, floor maintenance, and facility care from PHL Clean — serving Philadelphia, Bucks County, and surrounding areas.'
);

// Blog posts
for (const post of blogPosts) {
  addRoute(`/blog/${post.slug}`, post.metaTitle, post.metaDescription);
}

// Static pages
addRoute('/team',
  'Our Team — PHL Clean',
  'Meet the PHL Clean team. Locally owned commercial cleaning and janitorial services in Philadelphia, Bucks County, and surrounding areas. (215) 550-1414.'
);
addRoute('/careers',
  'Careers at PHL Clean — Join Our Cleaning Team',
  'Now hiring experienced commercial cleaners in Philadelphia and Bucks County. Competitive pay, consistent hours, growth opportunities. Apply today.'
);
addRoute('/privacy',
  'Privacy Policy | PHL Clean',
  'PHL Clean privacy policy — how we collect, use, and protect your personal information.'
);
addRoute('/terms',
  'Terms of Service | PHL Clean',
  'PHL Clean terms of service for phlclean.com.'
);

// Generate HTML files
function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

let generated = 0;

for (const route of routes) {
  let html = template;

  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${escapeHtml(route.title)}</title>`
  );

  html = html.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${escapeHtml(route.description)}"`
  );

  html = html.replace(
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${escapeHtml(route.title)}"`
  );

  html = html.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${escapeHtml(route.description)}"`
  );

  // Replace existing canonical from template
  html = html.replace(
    /<link rel="canonical" href="[^"]*"/,
    `<link rel="canonical" href="${route.canonical}"`
  );

  // Replace og:url from template
  html = html.replace(
    /<meta property="og:url" content="[^"]*"/,
    `<meta property="og:url" content="${route.canonical}"`
  );

  // Replace twitter:title and twitter:description from template
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"/,
    `<meta name="twitter:title" content="${escapeHtml(route.title)}"`
  );

  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"/,
    `<meta name="twitter:description" content="${escapeHtml(route.description)}"`
  );

  const outDir = path.join(DIST, route.urlPath);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  generated++;
}

console.log(`Prerendered ${generated} route HTML files`);
