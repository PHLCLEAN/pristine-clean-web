import React from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, Calendar } from 'lucide-react';

/**
 * Sticky bottom CTA bar — mobile only.
 * Desktop already carries phone + walkthrough CTAs in the navbar.
 */
const StickyCta = () => {
  const { pathname } = useLocation();

  let formHref = '/#contact';
  if (pathname.startsWith('/services/') || pathname.startsWith('/locations/')) {
    formHref = '#quote';
  } else if (pathname === '/careers') {
    formHref = '#apply';
  }

  return (
    <>
      {/* Spacer so content doesn't hide behind the bar */}
      <div className="md:hidden h-16" aria-hidden="true" />

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-phl-surface border-t border-phl-rule">
        <div className="flex items-stretch">
          <a
            href="tel:+12155501414"
            aria-label="Call PHL Clean at 215-550-1414"
            className="flex-1 flex items-center justify-center gap-2 py-4 px-3 border-r border-phl-rule text-phl-ink font-heading uppercase tracking-wide text-[14px] font-semibold"
          >
            <Phone className="h-[18px] w-[18px] text-phl-blue" />
            Call
          </a>
          <a
            href={formHref}
            aria-label="Schedule a walkthrough"
            className="flex-1 flex items-center justify-center gap-2 py-4 px-3 bg-phl-blue text-phl-navy-deep font-heading uppercase tracking-wide text-[14px] font-semibold"
          >
            <Calendar className="h-[18px] w-[18px]" />
            Walkthrough
          </a>
        </div>
      </div>
    </>
  );
};

export default StickyCta;
