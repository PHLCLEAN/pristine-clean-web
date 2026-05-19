import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Team from "./pages/Team";
import Careers from "./pages/Careers";
import ServicePage from "./pages/ServicePage";
import ComboPage from "./pages/ComboPage";
import LocationPage from "./pages/LocationPage";
import StickyCta from "./components/StickyCta";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import { trackPageview, trackEvent } from "./lib/analytics";

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
        <StickyCta />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
