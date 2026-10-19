import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  noindex?: boolean;
  /** Overrides the robots tag. 404s stay noindex,nofollow. Thin combos use noindex,follow. */
  robots?: string;
}

export interface CollectedSeo {
  title: string;
  description: string;
  canonical?: string;
  robots?: string;
}

/**
 * Build-time collection. During the prerender there is no document, so the
 * hook records what it was asked to set and scripts/prerender.mjs writes it
 * into the page head. One source for the meta in both places — the raw HTML
 * and the live page can no longer disagree.
 */
let collecting: CollectedSeo | null | undefined;
export function beginSeoCollection() { collecting = null; }
export function endSeoCollection(): CollectedSeo | null {
  const out = collecting ?? null;
  collecting = undefined;
  return out;
}

/**
 * Lightweight client-side SEO hook.
 * Sets document.title, meta description, OG title/description/url,
 * twitter title/description, and optional canonical URL.
 * Good enough for Google (which executes JS) without pulling in react-helmet-async.
 */
export function useSeo({ title, description, canonical, noindex, robots }: SeoProps) {
  if (typeof document === 'undefined' && collecting !== undefined) {
    collecting = { title, description, canonical, robots: robots ?? (noindex ? 'noindex, nofollow' : undefined) };
  }

  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, attr: string, value: string, create?: { tag: string; key: string; keyValue: string }) => {
      let el = document.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;
      if (!el && create) {
        el = document.createElement(create.tag) as HTMLMetaElement | HTMLLinkElement;
        el.setAttribute(create.key, create.keyValue);
        document.head.appendChild(el);
      }
      if (el) el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', 'content', description, { tag: 'meta', key: 'name', keyValue: 'description' });
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);

    if (canonical) {
      setMeta('link[rel="canonical"]', 'href', canonical, { tag: 'link', key: 'rel', keyValue: 'canonical' });
      setMeta('meta[property="og:url"]', 'content', canonical);
    }

    const robotsValue = robots ?? (noindex ? 'noindex, nofollow' : null);
    if (robotsValue) {
      setMeta('meta[name="robots"]', 'content', robotsValue, { tag: 'meta', key: 'name', keyValue: 'robots' });
    } else {
      const robotsTag = document.querySelector('meta[name="robots"]');
      if (robotsTag) robotsTag.remove();
    }
  }, [title, description, canonical, noindex, robots]);
}
