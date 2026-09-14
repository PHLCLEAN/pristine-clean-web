import React from 'react';
import TechnicalFigure from './TechnicalFigure';

const SPECS = [
  { label: "Standard", value: "ANSI/IICRC S100" },
  { label: "Slip", value: "DCOF ≥ 0.42" },
  { label: "Crew", value: "Same team, every visit" },
];

const Hero = () => {
  return (
    <section className="bg-phl-ground border-b border-phl-rule">
      <div className="container-custom py-12 md:py-20">
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] gap-10 xl:gap-14 items-center">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-6 h-px bg-phl-blue" aria-hidden="true" />
              <span className="font-mono text-[11px] tracking-[0.13em] uppercase text-phl-blue">
                Philadelphia &amp; Surrounding Counties
              </span>
            </div>

            <h1 className="text-[clamp(2.1rem,5.2vw,3.55rem)] text-phl-ink">
              Most floors don&rsquo;t need replacing.<br />
              They need <span className="text-phl-blue">somebody who reads them.</span>
            </h1>

            <p className="mt-5 max-w-[46ch] text-phl-ink-2 text-base leading-relaxed">
              Commercial carpet and hard-surface floor care. Extraction, encapsulation, tile and grout
              restoration, re-grout, and maintenance intervals set to how your building actually gets
              used — not to a sales calendar.
            </p>

            <div className="flex flex-wrap gap-3 mt-7">
              <a href="#contact" className="btn-primary px-6 py-3 text-[15px]">Schedule a Walkthrough</a>
              <a href="#services" className="btn-ghost px-6 py-3 text-[15px]">See the Methods</a>
            </div>

            <dl className="flex flex-wrap gap-x-6 gap-y-2 mt-7 pt-5 border-t border-phl-rule font-mono text-[11px] uppercase tracking-[0.06em] text-phl-muted">
              {SPECS.map(s => (
                <div key={s.label} className="flex gap-2">
                  <dt className="text-phl-ink-2">{s.label}</dt>
                  <dd>{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <TechnicalFigure kind="carpet" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
