import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  noindex?: boolean;
}

/**
 * Lightweight client-side SEO hook.
 * Sets document.title, meta description, OG title/description/url,
 * twitter title/description, and optional canonical URL.
 * Good enough for Google (which executes JS) without pulling in react-helmet-async.
 */
export function useSeo({ title, description, canonical, noindex }: SeoProps) {
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

    if (noindex) {
      setMeta('meta[name="robots"]', 'content', 'noindex, nofollow', { tag: 'meta', key: 'name', keyValue: 'robots' });
    } else {
      const robotsTag = document.querySelector('meta[name="robots"]');
      if (robotsTag) robotsTag.remove();
    }
  }, [title, description, canonical, noindex]);
}
