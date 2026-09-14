import React from 'react';

const POINTS = [
  { title: "Owner on site", body: "Joe runs the walkthroughs. You're talking to the person who prices the job and answers for it." },
  { title: "Insured & background-checked", body: "General liability and workers' comp. Certificate of Insurance on request, every time." },
  { title: "Month to month", body: "No multi-year lock-in. We'd rather earn the renewal than enforce a contract." },
  { title: "We bring the equipment", body: "Machines and chemistry are ours. You supply nothing to get a floor done." },
];

const AboutUs = () => {
  return (
    <section id="about" className="section-padding bg-phl-ground border-b border-phl-rule">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="order-2 lg:order-1">
            <p className="spec-label mb-3">About</p>
            <h2 className="text-[clamp(1.6rem,3.4vw,2.35rem)] text-phl-ink">
              We used to clean everything.<br />Now we clean floors.
            </h2>

            <div className="mt-5 space-y-4 text-phl-ink-2 leading-relaxed">
              <p>
                PHL Clean started as a general commercial cleaning company out of Bensalem, and for
                a while we did what everyone in that business does — a bit of everything, for anyone
                who asked.
              </p>
              <p>
                The work we were consistently best at, and the work clients kept calling us back
                for specifically, was the floors. So we stopped doing the rest. Today we do
                commercial carpet and hard surfaces — tile and grout, VCT, concrete, terrazzo — and
                nothing else.
              </p>
              <p>
                <strong className="text-phl-ink font-semibold">
                  That is a smaller business on purpose.
                </strong>{' '}
                A generalist has to be adequate at twenty things. We would rather know two surfaces
                down to the substrate, and be the people who can tell you why your grout keeps
                cracking in the same line.
              </p>
            </div>

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 mt-8 pt-7 border-t border-phl-rule">
              {POINTS.map(p => (
                <div key={p.title}>
                  <dt className="text-[14px] font-semibold text-phl-ink mb-1">{p.title}</dt>
                  <dd className="text-[13px] text-phl-ink-2 leading-relaxed">{p.body}</dd>
                </div>
              ))}
            </dl>

            <a href="#contact" className="btn-primary px-6 py-3 text-[15px] mt-8">
              Schedule a Walkthrough
            </a>
          </div>

          <div className="order-1 lg:order-2">
            <figure className="border border-phl-rule rounded-sm overflow-hidden bg-phl-surface">
              <img
                src="/images/commercial.webp"
                alt="A PHL Clean technician running a hot water extraction wand across commercial carpet tile in an office"
                width={768}
                height={512}
                loading="lazy"
                decoding="async"
                className="w-full h-auto block"
              />
              <figcaption className="font-mono text-[10.5px] text-phl-muted p-3 border-t border-phl-rule">
                Extraction wand, commercial carpet tile. The overlapping passes are deliberate —
                a single dry stroke after each wet one is what actually takes the water back out.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
