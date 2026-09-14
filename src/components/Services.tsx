import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '@/data/services';

/** One line per service, kept short enough to scan the whole rack at once. */
const BLURBS: Record<string, { line: string; method: string }> = {
  "carpet-cleaning": {
    line: "Restorative hot water extraction with pre-spray, agitation, and an acid rinse that leaves nothing behind to re-soil.",
    method: "HWE",
  },
  "carpet-maintenance-programs": {
    line: "Interim encapsulation on the lanes, restorative extraction on an interval set by traffic — not by the calendar.",
    method: "Encap + HWE",
  },
  "tile-grout-cleaning": {
    line: "High-pressure extraction at the grout line, alkaline dwell, and a rinse that pulls the slurry out instead of pushing it in.",
    method: "Pressure + vac",
  },
  "grout-restoration": {
    line: "Color seal for uniformity and stain resistance. Cut-out and re-grout where the joint has actually failed.",
    method: "Seal / re-grout",
  },
  "floor-maintenance": {
    line: "VCT strip and finish, burnish programs, concrete and terrazzo. Slip resistance measured, not assumed.",
    method: "Strip / burnish",
  },
};

const METHODS = [
  { name: "Hot water extraction", slug: "carpet-cleaning", moisture: "High", rts: "2–6 hr", where: "Restorative. The reset, once or twice a year." },
  { name: "Encapsulation", slug: "carpet-maintenance-programs", moisture: "Low", rts: "20–60 min", where: "Interim. Traffic lanes, between resets, open buildings." },
  { name: "Bonnet", slug: "", moisture: "Low", rts: "20–40 min", where: "Appearance only. We'll say so rather than sell it as cleaning." },
  { name: "Grout color seal", slug: "grout-restoration", moisture: "—", rts: "24 hr cure", where: "After cleaning, when the grout is sound but permanently stained." },
  { name: "Cut-out & re-grout", slug: "grout-restoration", moisture: "—", rts: "24–72 hr", where: "When the joint has failed. Sealing a failed joint just hides it." },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-phl-ground border-b border-phl-rule">
      <div className="container-custom">
        <div className="max-w-3xl mb-10">
          <p className="spec-label mb-3">Practice</p>
          <h2 className="text-[clamp(1.6rem,3.4vw,2.35rem)] text-phl-ink">
            Two surfaces. Done properly.
          </h2>
          <p className="mt-4 text-phl-ink-2 leading-relaxed">
            We work on commercial carpet and on hard surfaces — tile and grout, VCT, concrete and
            terrazzo. That is the whole list, and keeping it short is the point: these are the floors
            we know down to the substrate.
          </p>
        </div>

        <div className="grid gap-px bg-phl-rule border border-phl-rule rounded-sm overflow-hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map(s => {
            const b = BLURBS[s.slug];
            return (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group bg-phl-surface hover:bg-phl-raised transition-colors p-5 pb-6 flex flex-col gap-2"
              >
                <h3 className="text-[19px] text-phl-ink group-hover:text-phl-blue transition-colors">
                  {s.shortTitle}
                </h3>
                <p className="text-[13px] text-phl-ink-2 leading-snug">{b?.line}</p>
                <p className="mt-auto pt-3 font-mono text-[10px] uppercase tracking-[0.07em] text-phl-muted">
                  <span className="text-phl-blue">Method</span> · {b?.method}
                </p>
              </Link>
            );
          })}
        </div>

        {/* The honest table. No competitor in the region publishes one. */}
        <div className="mt-12">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[560px] text-[13.5px]">
              <caption className="text-left spec-label pb-3">
                Method selection — what we&rsquo;d actually recommend
              </caption>
              <thead>
                <tr>
                  {["Method", "Moisture", "Return to service", "Where it belongs"].map(h => (
                    <th
                      key={h}
                      scope="col"
                      className="text-left font-heading uppercase text-[13px] tracking-[0.06em] font-semibold text-phl-blue py-2.5 pr-4 border-b border-phl-blue"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {METHODS.map(m => (
                  <tr key={m.name}>
                    <td className="py-3 pr-4 border-b border-phl-rule text-phl-ink font-medium align-top">
                      {m.slug
                        ? <Link to={`/services/${m.slug}`} className="hover:text-phl-blue transition-colors underline decoration-phl-rule underline-offset-4">{m.name}</Link>
                        : m.name}
                    </td>
                    <td className="py-3 pr-4 border-b border-phl-rule text-phl-ink-2 align-top font-mono text-[12px] whitespace-nowrap">{m.moisture}</td>
                    <td className="py-3 pr-4 border-b border-phl-rule text-phl-ink-2 align-top font-mono text-[12px] tabular-nums whitespace-nowrap">{m.rts}</td>
                    <td className="py-3 pr-4 border-b border-phl-rule text-phl-ink-2 align-top">{m.where}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-5 text-[13px] text-phl-muted max-w-[62ch]">
            We don&rsquo;t work on hardwood. It&rsquo;s a different trade with a different failure mode, and
            we&rsquo;d rather say so than learn on your floor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
