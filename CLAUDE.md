# phlclean.com — working notes

Commercial floor care site for PHL Clean (Bensalem, PA). React + TypeScript +
Vite + Tailwind, deployed to Cloudflare Pages on push to `main`.

## What this business does

Commercial **carpet** and **hard surface** floor care only:
carpet cleaning, carpet maintenance programs, tile & grout cleaning,
grout restoration & re-grout, and hard surface floor care (VCT, LVT,
concrete, terrazzo).

**Not janitorial.** Janitorial, deep cleaning and medical facility cleaning
were retired in September 2026 and 301'd in `public/_redirects`. Do not
reintroduce office cleaning, restroom sanitation, trash, dusting, glass or
window cleaning anywhere in copy.

**Not hardwood.** Stated explicitly on the homepage and the hard surface
page, and it is a deliberate trust signal — we say what we don't do.

## Copy constraints — these are not style preferences

**Never name an individual.** Several people may go out to measure or quote.
Ownership accountability is fair to claim, unattributed: "you reach
ownership", "whoever comes out has walked the space".

**Never promise the same crew or the same team each visit.** This is project
work, not janitorial, and not daily — a strip and refinish needs a different
crew than a carpet interim clean. Teams change. What is promised instead:

- the written scope agreed at the walkthrough
- your building's file — surfaces, methods, problem areas, access notes
- one method standard every technician is trained to
- a named lead per visit

Continuity lives in the record, not the roster. That is a stronger claim
because it is verifiable. `/team` is built entirely around this — read it
before writing anything about staffing.

**Never pitch instant or phone quotes.** Every job needs an on-site
walkthrough. The CTA is "Schedule a Walkthrough" everywhere.

**Voice:** the whole persuasive strategy is candour. The site tells customers
what won't come clean, and when the cheaper job is the right one. A claim the
business can't keep undermines every other claim on the page. New copy should
pass the test: *would a competitor dare publish this?*

**US spelling.** The site was converted from British spelling once already
(colour, programme, fibre, centre, car park). Don't reintroduce it.

**Technical claims must be real.** Anchored to actual standards:
ANSI A137.1 (DCOF ≥ 0.42 for level interior tile walked on when wet) and
ANSI/IICRC S100-2021. Never invent statistics.

## Design system — "Substrate"

Tokens live in `tailwind.config.ts` under `phl`. Ground `#0B121C` is the brand
navy desaturated; accent `#0887FF` is the brand blue exactly; `#0A255A` is the
brand navy for feature bands.

**Amber `#F0B429` is instrument ink.** It appears only inside technical figures
to mark callouts and measurements — never in buttons, links or navigation. No
content layer in a diagram may use a warm colour, or the convention breaks.

Type: Saira Condensed (headings) / Saira (body) / IBM Plex Mono (every number,
label and spec). The mono does real work: it marks which text is data.

Buttons use near-black navy on blue (`btn-primary`), **not white** — white on
`#0887FF` measures 3.55:1 and fails WCAG AA.

The hero grids stay single-column until `xl` so the technical figures get a
column wide enough to read. Don't change that to `lg` — it squeezes the figure
to ~467px and forces a scrollbar.

## Build

```
npm run build
```
Runs, in order: meta length check → vite build → sitemap → prerender.

- `scripts/check-meta.mjs` fails the build if any meta title exceeds 60 chars
  or any description falls outside 70–158.
- `scripts/sitemap.mjs` derives every URL from the data files, so the sitemap
  cannot drift. Blog entries use each post's own date as `lastmod`.
- `scripts/prerender.mjs` writes static HTML per route with correct meta. It
  parses the data files **as text**, so keep `slug:`, `metaTitle:` and
  `metaDescription:` as plain string literals — a helper function or template
  literal silently breaks it.

Routes are code-split; only the homepage is in the initial bundle.

## Verifying before you push

`vite build` succeeding only proves it compiles. Two things have shipped
broken here before — a temporal-dead-zone error that blanked every page, and
a colour class that made every blog headline invisible on the dark ground.

- Render check: serve `dist/` and load each route type in a real browser.
  JSDOM cannot resolve the lazy chunks, so it is no longer sufficient alone.
- Contrast: measure computed colours against WCAG AA. `--phl-muted` failed at
  3.84:1 until it was lifted to `#7D8C9E`.
- Grep for retired vocabulary: `janitor|same crew|same team|every visit`.

## Known gaps (not bugs)

- Zero Google reviews. The biggest constraint on the business's visibility.
- Only two real photographs, both stock. A drag-to-reveal before/after
  component is designed but deliberately unbuilt until real paired photos
  exist — it would ship empty otherwise.
- Tile & grout is half the business and two of sixteen blog posts.
- The logo files are flattened raster; no vector original has surfaced.
