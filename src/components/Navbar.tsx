import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Menu, X } from "lucide-react";
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { label: "Carpet", to: "/services/carpet-cleaning" },
  { label: "Tile & Grout", to: "/services/tile-grout-cleaning" },
  { label: "Hard Surface", to: "/services/floor-maintenance" },
  { label: "Programs", to: "/services/carpet-maintenance-programs" },
  { label: "Field Notes", to: "/blog" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const close = () => setIsMenuOpen(false);

  return (
    <nav className="w-full bg-phl-ground/95 backdrop-blur-sm border-b border-phl-rule sticky top-0 z-50">
      <div className="container-custom py-3">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center shrink-0" aria-label="PHL Clean — home">
            <img
              src="/images/logo.webp"
              alt="PHL Clean"
              width={760}
              height={443}
              className="h-11 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className="text-[12px] font-medium uppercase tracking-[0.1em] text-phl-ink-2 hover:text-phl-blue transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href="tel:+12155501414"
              className="font-mono text-[12.5px] text-phl-blue border border-phl-rule hover:border-phl-blue rounded-sm px-3 py-1.5 transition-colors whitespace-nowrap"
            >
              (215) 550-1414
            </a>
            <a href="/#contact" className="btn-primary text-[14px] px-4 py-2 whitespace-nowrap">
              Schedule a Walkthrough
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <a
              href="tel:+12155501414"
              aria-label="Call PHL Clean"
              className="p-2 rounded-sm bg-phl-blue text-phl-navy-deep"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsMenuOpen(v => !v)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              className="p-2 rounded-sm text-phl-ink-2 hover:text-phl-blue"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <div className={cn("md:hidden", isMenuOpen ? "block" : "hidden")}>
          <div className="flex flex-col gap-1 pt-4 pb-3 border-t border-phl-rule mt-3">
            {NAV_LINKS.map(l => (
              <Link
                key={l.to}
                to={l.to}
                onClick={close}
                className="px-1 py-2.5 text-[13px] font-medium uppercase tracking-[0.1em] text-phl-ink-2 hover:text-phl-blue"
              >
                {l.label}
              </Link>
            ))}
            <a href="/#contact" onClick={close} className="btn-primary w-full mt-3 py-3 text-[15px]">
              Schedule a Walkthrough
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
