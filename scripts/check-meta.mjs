/**
 * Build-time guard on meta tag lengths.
 *
 * Every service, location and blog meta title/description on this site was at
 * some point too long to render in a search result — the descriptions ran to
 * 212 characters against a ~155 truncation point. They were found by hand.
 * This makes that impossible to reintroduce: the build fails instead.
 *
 * Runs as part of `npm run build`, before the sitemap and prerender steps.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA = path.resolve(__dirname, '..', 'src', 'data');

/** Google truncates titles near 60 chars and descriptions near 155-160. */
const TITLE_MAX = 60;
const DESC_MAX = 158;
const DESC_MIN = 70; // shorter than this and Google usually writes its own

const FILES = ['services.ts', 'locations.ts', 'blog-posts.ts'];
const problems = [];
let checked = 0;

for (const file of FILES) {
  const content = fs.readFileSync(path.join(DATA, file), 'utf-8');

  const titles = [...content.matchAll(/metaTitle:\s*"([^"]+)"/g)].map(m => m[1]);
  const descs = [...content.matchAll(/metaDescription:\s*"([^"]+)"/g)].map(m => m[1]);

  if (!titles.length || !descs.length) {
    problems.push(`${file}: parsed 0 titles or 0 descriptions — the guard is not seeing the data`);
    continue;
  }
  checked += titles.length + descs.length;

  for (const t of titles) {
    if (t.length > TITLE_MAX) {
      problems.push(`${file}: title ${t.length}/${TITLE_MAX} — "${t}"`);
    }
  }
  for (const d of descs) {
    if (d.length > DESC_MAX) {
      problems.push(`${file}: description ${d.length}/${DESC_MAX} — "${d.slice(0, 80)}…"`);
    } else if (d.length < DESC_MIN) {
      problems.push(`${file}: description only ${d.length} chars (min ${DESC_MIN}) — "${d}"`);
    }
  }
}

if (problems.length) {
  console.error(`\nMeta check FAILED — ${problems.length} problem(s):\n`);
  for (const p of problems) console.error('  ' + p);
  console.error('\nTitles must be <= 60 chars; descriptions between 70 and 158.\n');
  process.exit(1);
}

console.log(`Meta check passed: ${checked} titles and descriptions within limits`);
