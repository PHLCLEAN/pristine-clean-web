/**
 * Build-time render entry. Not shipped to browsers.
 *
 * scripts/prerender.mjs builds this with `vite build --ssr`, then calls
 * render(url) for every route and writes the result into dist/<route>/index.html.
 * That puts the real page — headings, copy, links, structured data — into the
 * HTML itself, so crawlers that don't run JavaScript (Bing, most AI search
 * crawlers) see the same page a browser does.
 */
import React from "react";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Writable } from "node:stream";
import { Providers, AppRoutes } from "./App";
import { beginSeoCollection, endSeoCollection } from "./hooks/use-seo";

export { services } from "./data/services";
export { locations, COMBO_LOCATION_SLUGS, INDEXED_COMBO_LOCATION_SLUGS } from "./data/locations";
export { blogPosts } from "./data/blog-posts";

export function render(url: string): Promise<{ html: string; seo: ReturnType<typeof endSeoCollection> }> {
  beginSeoCollection();
  return new Promise((resolve, reject) => {
    let html = "";
    const sink = new Writable({
      write(chunk, _enc, cb) { html += chunk.toString(); cb(); },
      final(cb) { resolve({ html, seo: endSeoCollection() }); cb(); },
    });
    const stream = renderToPipeableStream(
      <Providers>
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      </Providers>,
      {
        onAllReady() { stream.pipe(sink); },
        onShellError: reject,
        onError(err) { reject(err); },
      },
    );
  });
}
