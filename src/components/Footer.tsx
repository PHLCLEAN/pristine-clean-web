import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import { services } from '@/data/services';

const LOCATIONS = [
  ["philadelphia", "Philadelphia"],
  ["bensalem", "Bensalem"],
  ["bucks-county", "Bucks County"],
  ["montgomery-county", "Montgomery County"],
  ["delaware-county", "Delaware County"],
  ["chester-county", "Chester County"],
] as const;

const COMPANY = [
  ["/#about", "About"],
  ["/team", "Our Team"],
  ["/careers", "Careers"],
  ["/blog", "Field Notes"],
  ["/#contact", "Contact"],
] as const;

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-phl-surface border-t border-phl-rule text-phl-ink-2">
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img
              src="/images/logo.webp"
              alt="PHL Clean"
              width={760}
              height={443}
              loading="lazy"
              className="h-12 w-auto mb-5"
            />
            <p className="text-[13.5px] leading-relaxed max-w-[34ch]">
              Commercial carpet and hard-surface floor care across Philadelphia and the surrounding
              counties. Carpet, tile and grout, VCT, concrete and terrazzo — and nothing else.
            </p>
            <a
              href="https://instagram.com/phl.clean"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow PHL Clean on Instagram"
              className="inline-flex mt-5 p-2 rounded-sm border border-phl-rule hover:border-phl-blue hover:text-phl-blue transition-colors"
            >
              <Instagram className="h-[18px] w-[18px]" />
            </a>
          </div>

          <div>
            <h3 className="spec-label mb-4">Services</h3>
            <ul className="space-y-2.5 text-[13.5px]">
              {services.map(s => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="hover:text-phl-blue transition-colors">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="spec-label mb-4">Company</h3>
            <ul className="space-y-2.5 text-[13.5px]">
              {COMPANY.map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="hover:text-phl-blue transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="spec-label mb-4">Service areas</h3>
            <ul className="space-y-2.5 text-[13.5px]">
              {LOCATIONS.map(([slug, label]) => (
                <li key={slug}>
                  <Link to={`/locations/${slug}`} className="hover:text-phl-blue transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-5 border-t border-phl-rule space-y-1.5 text-[13.5px]">
              <p>
                <a href="tel:+12155501414" className="font-mono text-phl-blue hover:text-phl-blue-soft transition-colors">
                  (215) 550-1414
                </a>
              </p>
              <p>
                <a href="mailto:info@phlclean.com" className="hover:text-phl-blue transition-colors">
                  info@phlclean.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-phl-rule">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-[12.5px] text-phl-muted">
            <p>&copy; {year} PHL Clean LLC. All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              <Link to="/privacy" className="hover:text-phl-blue transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-phl-blue transition-colors">Terms of Service</Link>
              <span>Locally owned · Bensalem, PA</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
