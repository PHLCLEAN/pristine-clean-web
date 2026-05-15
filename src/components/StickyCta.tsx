import React from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, Calendar } from 'lucide-react';

/**
 * Sticky bottom CTA bar — mobile only.
 * Desktop already has phone + Walkthrough CTAs in the navbar.
 * On mobile, this gives one-tap access to call or jump to the page's quote form.
 */
const StickyCta = () => {
  const location = useLocation();

  // Pick the right in-page anchor based on which page we're on.
  // - Service pages and Location pages have an inline form at #quote
  // - Homepage has the form at #contact
  // - Careers has the application form at #apply
  // - Team has no inline form, so link back to homepage contact
  let formHref = '/#contact';
  if (location.pathname.startsWith('/services/') || location.pathname.startsWith('/locations/')) {
    formHref = '#quote';
  } else if (location.pathname === '/careers') {
    formHref = '#apply';
  } else if (location.pathname === '/team') {
    formHref = '/#contact';
  }

  return (
    <>
      {/* Spacer so page content doesn't hide behind the sticky bar on mobile */}
      <div className="md:hidden h-16" aria-hidden="true" />

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
        <div className="flex items-stretch">
          <a
            href="tel:+12155501414"
            aria-label="Call PHL Clean at 215-550-1414"
            className="flex-1 flex items-center justify-center py-4 px-3 bg-cleaner-green-500 hover:bg-cleaner-green-600 text-white font-semibold text-sm transition-colors"
          >
            <Phone className="h-5 w-5 mr-2" />
            Call Now
          </a>
          <a
            href={formHref}
            aria-label="Schedule a walkthrough"
            className="flex-1 flex items-center justify-center py-4 px-3 bg-cleaner-blue-700 hover:bg-cleaner-blue-800 text-white font-semibold text-sm transition-colors"
          >
            <Calendar className="h-5 w-5 mr-2" />
            Walkthrough
          </a>
        </div>
      </div>
    </>
  );
};

export default StickyCta;
