import React from 'react';

/**
 * Deliberately not "reliable, professional, satisfaction guaranteed."
 * Every one of these is a claim a generalist cannot make, and two of them
 * cost us money on purpose. That is what makes them worth reading.
 */
const REASONS = [
  {
    title: "We'll talk you out of the bigger job",
    body: "Stripping a floor is the most profitable thing we could sell you and the hardest thing on your tile. When a scrub and recoat will get you there, that is what we quote. Same with carpet — if an interval adjustment beats another deep clean, we say so.",
  },
  {
    title: "We tell you what won't come back",
    body: "Traffic lane gray is often abraded fiber, not soil. Deeply stained grout is sometimes past cleaning. You hear that at the walkthrough, before you pay — not afterwards as an excuse.",
  },
  {
    title: "Method follows the floor",
    body: "Nylon, olefin and wool don't take the same chemistry or the same heat. Marble is etched by the acids that clean ceramic grout. We identify the surface before anything touches it.",
  },
  {
    title: "Every job gets rinsed",
    body: "Carpet cleaned with an alkaline pre-spray and no neutralizing rinse re-soils faster than before it was cleaned. The rinse is why our work still looks right weeks later, and it is the step most often skipped.",
  },
  {
    title: "Your building has a file",
    body: "Surfaces, methods, the areas that gave trouble last time, access and alarm notes — written down and kept. Floor work is project work and crews change; what does not change is the record the crew is working from.",
  },
  {
    title: "You reach ownership",
    body: "No franchise help desk, no offshore ticket queue, no account manager three states away who has never seen your floor. A direct line to the people who price the work and answer for it.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="section-padding bg-phl-navy border-b border-phl-rule">
      <div className="container-custom">
        <div className="max-w-3xl mb-10">
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-phl-blue-soft mb-3">
            Why us
          </p>
          <h2 className="text-[clamp(1.6rem,3.4vw,2.35rem)] text-white">
            Six things a generalist can&rsquo;t say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
          {REASONS.map(r => (
            <div key={r.title} className="border-t border-white/20 pt-4">
              <h3 className="text-[18px] text-white mb-2.5">{r.title}</h3>
              <p className="text-[13.5px] text-[#AFC4E0] leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { stat: "2–6 hr", label: "Typical return to service after restorative extraction" },
            { stat: "≥ 0.42", label: "Dynamic coefficient of friction we work to, per ANSI A137.1" },
            { stat: "Month to month", label: "No multi-year agreement on any maintenance program" },
          ].map(s => (
            <div key={s.label}>
              <div className="font-mono text-[22px] text-phl-blue-soft tabular-nums">{s.stat}</div>
              <div className="text-[12.5px] text-[#9FB6D4] mt-1.5 leading-relaxed">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
