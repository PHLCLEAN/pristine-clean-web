import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import Index from "./pages/Index";
import StickyCta from "./components/StickyCta";
import { trackPageview, trackEvent } from "./lib/analytics";

/**
 * Only the homepage ships in the initial bundle. Everything else — including
 * the blog data, which is the single largest module on the site — is split
 * into its own chunk and fetched on navigation. Each route is also
 * prerendered to static HTML, so crawlers and first-time visitors still get
 * real content immediately; the chunk only has to arrive before the page
 * becomes interactive.
 */
const Team = lazy(() => import("./pages/Team"));
const Careers = lazy(() => import("./pages/Careers"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const ComboPage = lazy(() => import("./pages/ComboPage"));
const LocationPage = lazy(() => import("./pages/LocationPage"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));

/** Matches the page ground so a chunk fetch never flashes a different colour. */
const RouteFallback = () => <div className="min-h-screen bg-phl-ground" aria-hidden="true" />;

const queryClient = new QueryClient();

/**
 * Fires a GA4 page_view event on every route change.
 * GA4 config has send_page_view: false so we own this completely.
 */
const RouteTracker = () => {
  const location = useLocation();
  useEffect(() => {
    // setTimeout 0 lets the new page's useSeo() effect set document.title first
    const id = window.setTimeout(() => {
      trackPageview(location.pathname + location.search, document.title);
    }, 0);
    return () => window.clearTimeout(id);
  }, [location.pathname, location.search]);
  return null;
};


/**
 * Fires a GA4 generate_lead event whenever any tel: link is clicked,
 * anywhere on the site. One global listener so we don't have to touch
 * every component that renders a phone number.
 */
const PhoneClickTracker = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (!target) return;
      const anchor = target.closest('a[href^="tel:"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const phone = anchor.getAttribute('href')?.replace(/^tel:/, '') ?? '';
      trackEvent('generate_lead', {
        form_name: 'phone_click',
        phone_number: phone,
        page_path: window.location.pathname,
        value: 1,
      });
    };
    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, []);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RouteTracker />
        <PhoneClickTracker />
        <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/services/:serviceSlug/:locationSlug" element={<ComboPage />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/locations/:slug" element={<LocationPage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
        <StickyCta />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
