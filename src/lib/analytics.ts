/**
 * Lightweight GA4 helper. All functions are no-ops if gtag isn't loaded
 * (e.g. ad-blocked, dev preview, or the script hasn't finished loading yet)
 * so the site never breaks because of analytics.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/** Fire a GA4 page_view event manually (we need this for SPA route changes). */
export function trackPageview(path: string, title?: string) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.origin + path,
    page_title: title ?? document.title,
  });
}

/** Fire any GA4 event with arbitrary params. */
export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', eventName, params);
}
