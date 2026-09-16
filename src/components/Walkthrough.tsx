import React from 'react';

/**
 * Replaces the old "Security & Trust" block, which was written for a
 * janitorial business with crews in the building nightly. Floor work is
 * project work, so the questions a facility manager actually has are
 * different: what happens at the walkthrough, and what happens on the night.
 */

const STEPS = [
  {
    n: "01",
    title: "We walk the floor",
    body: "Thirty to forty-five minutes, usually. We identify the surfaces, check the grout joints by hand, look at your entry matting, and find the areas that are genuinely worn versus the ones that are only dirty.",
  },
  {
    n: "02",
    title: "You get told what won't come back",
    body: "If the traffic lanes are abraded, or the grout is past cleaning, you hear it there and then. It is the single most useful thing we do, and it is free.",
  },
  {
    n: "03",
    title: "A written scope and a number",
    body: "Surfaces, method, square footage, frequency and price. No line item called 'miscellaneous', and no per-visit surprises.",
  },
  {
    n: "04",
    title: "We work around your hours",
    body: "Most floor work happens evenings, weekends or over a closure. You get exact cure times, so you know when the floor is genuinely ready — not an optimistic guess.",
  },
];

const LOGISTICS = [
  ["Insurance", "General liability and workers' compensation. Certificate of Insurance issued to you on request before the first visit."],
  ["Building access", "Keys, fobs and alarm codes logged and held to a named person. We follow your access procedure rather than inventing our own."],
  ["Your furniture and walls", "Light items moved and replaced. Corner guards and wall protection on hard-surface jobs, because a stripping machine finds every doorframe."],
  ["Safety on site", "Wet floor signage and barriers stay up for the whole cure window, not just while we are standing there."],
  ["Who turns up", "Background-checked and uniformed, working from your building's written scope. Crews are assigned per job; the method and the record travel with it."],
  ["Documentation", "Product data sheets and service records available whenever your compliance file or your insurer needs them."],
];

const Walkthrough = () => {
  return (
    <section id="walkthrough" className="section-padding bg-phl-ground border-b border-phl-rule">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] gap-12 lg:gap-16">
          <div>
            <p className="spec-label mb-3">The walkthrough</p>
            <h2 className="text-[clamp(1.6rem,3.4vw,2.35rem)] text-phl-ink">
              We won&rsquo;t quote a floor we haven&rsquo;t stood on
            </h2>
            <p className="mt-4 text-phl-ink-2 leading-relaxed max-w-[52ch]">
              Anyone who gives you a price for floor work over the phone is guessing, and the
              guess gets corrected on your invoice. The walkthrough is free, takes under an hour,
              and you get something useful out of it whether or not you hire us.
            </p>

            <ol className="mt-8 space-y-6">
              {STEPS.map(s => (
                <li key={s.n} className="flex gap-4">
                  <span className="font-mono text-[12px] text-phl-blue pt-1 shrink-0 tabular-nums">{s.n}</span>
                  <div className="border-l border-phl-rule pl-4">
                    <h3 className="text-[17px] text-phl-ink mb-1.5">{s.title}</h3>
                    <p className="text-[13.5px] text-phl-ink-2 leading-relaxed">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <div className="rack-head">Working in your building</div>
            <dl className="divide-y divide-phl-rule border-y border-phl-rule">
              {LOGISTICS.map(([term, def]) => (
                <div key={term} className="py-4">
                  <dt className="text-[14px] font-semibold text-phl-ink mb-1">{term}</dt>
                  <dd className="text-[13.5px] text-phl-ink-2 leading-relaxed">{def}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-7 bg-phl-surface border border-phl-rule rounded-sm p-5">
              <p className="text-[13.5px] text-phl-ink-2 leading-relaxed">
                <strong className="text-phl-ink font-semibold">Equipment and chemistry are ours.</strong>{' '}
                You supply nothing to get a floor done — no machines, no products, no water
                arrangements beyond a tap.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Walkthrough;
