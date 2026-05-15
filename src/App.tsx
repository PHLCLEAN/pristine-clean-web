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
import LocationPage from "./pages/LocationPage";
import StickyCta from "./components/StickyCta";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import { trackPageview } from "./lib/analytics";

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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RouteTracker />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/locations/:slug" element={<LocationPage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <StickyCta />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
