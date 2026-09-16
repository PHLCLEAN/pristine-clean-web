import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Phone } from 'lucide-react';
import { useSeo } from '../hooks/use-seo';

/**
 * Deliberately does NOT promise the same faces every visit. Floor work is
 * project work — crews are assigned per job. What we can honestly promise is
 * that the scope, the record and the method standard don't change, which is
 * what a facility manager actually needs.
 */

const CONSTANTS = [
  {
    term: "The written scope",
    def: "Every job runs off the scope agreed at the walkthrough — areas, surfaces, method, square footage. Nobody arrives and improvises.",
  },
  {
    term: "Your building's record",
    def: "Surfaces identified, methods used, the areas that gave trouble last time, access and alarm notes. Whoever is scheduled reads it before they arrive.",
  },
  {
    term: "One method standard",
    def: "Every technician is trained to the same selection rules. The process does not change because a different van showed up.",
  },
  {
    term: "A named lead per visit",
    def: "One person is responsible for the job on site, and you get their name. If something needs raising, you are not hunting for who to ask.",
  },
];

const TRAINING = [
  "Identifying fiber type and carpet construction before selecting chemistry or heat",
  "Identifying calcareous stone before anything acidic goes near it — etching is permanent",
  "Dwell time discipline, because rushing the pre-spray wastes it entirely",
  "Matching extraction pressure to the carpet's construction rather than turning everything up",
  "Neutralizing rinse on every carpet job, so the work does not re-soil in a fortnight",
  "Cure times, and refusing to hand a floor back early even when asked",
  "Wet floor signage and barriers staying up for the whole cure window, not just while we are there",
];

const Team = () => {
  useSeo({
    title: "Our Team — PHL Clean",
    description: "How PHL Clean staffs commercial floor work: crews assigned per job, one written scope, one method standard, and a named lead on every visit.",
    canonical: "https://phlclean.com/team/",
  });

  return (
    <div className="min-h-screen bg-phl-ground">
      <Navbar />
      <main>
        <section className="border-b border-phl-rule">
          <div className="container-custom py-12 md:py-20">
            <p className="spec-label mb-3">The team</p>
            <h1 className="text-[clamp(2rem,4.6vw,3.1rem)] text-phl-ink max-w-[16ch]">
              Who actually turns up
            </h1>
            <p className="mt-5 max-w-[58ch] text-phl-ink-2 leading-relaxed">
              Floor work is project work. A strip and refinish needs a different crew size than a
              carpet interim clean, and the two rarely happen on the same night — so crews are
              assigned per job rather than parked on one account.
            </p>
            <p className="mt-4 max-w-[58ch] text-phl-ink-2 leading-relaxed">
              <strong className="text-phl-ink font-semibold">
                Which means we are not going to promise you the same faces every time.
              </strong>{' '}
              Plenty of companies do. Here is what we promise instead, and it is the part that
              actually determines whether your floor comes out right.
            </p>
          </div>
        </section>

        <section className="section-padding border-b border-phl-rule">
          <div className="container-custom">
            <div className="rack-head">What doesn&rsquo;t change</div>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-7">
              {CONSTANTS.map(c => (
                <div key={c.term} className="border-t border-phl-rule pt-4">
                  <dt className="text-[18px] text-phl-ink font-heading uppercase mb-2">{c.term}</dt>
                  <dd className="text-[13.5px] text-phl-ink-2 leading-relaxed">{c.def}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="section-padding border-b border-phl-rule">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-12 lg:gap-16">
              <div>
                <div className="rack-head">Training</div>
                <p className="text-phl-ink-2 leading-relaxed text-[15px]">
                  Anyone can be taught to run a machine. What separates a technician from an
                  operator is knowing when not to — which surface will be damaged by which
                  chemistry, and when the honest answer is that a floor has gone past cleaning.
                </p>
                <p className="mt-4 text-phl-ink-2 leading-relaxed text-[15px]">
                  Every technician on a PHL Clean job is trained on the list opposite before they
                  work unsupervised, and every one of them is background-checked and insured.
                </p>
              </div>
              <ul className="space-y-3">
                {TRAINING.map((t, i) => (
                  <li key={i} className="flex gap-4 border-b border-phl-rule pb-3">
                    <span className="font-mono text-[11px] text-phl-blue pt-1 shrink-0 tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[13.5px] text-phl-ink-2 leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section-padding bg-phl-navy border-b border-phl-rule">
          <div className="container-custom">
            <div className="max-w-[62ch]">
              <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-phl-blue-soft mb-3">
                Ownership
              </p>
              <h2 className="text-[clamp(1.5rem,3vw,2.1rem)] text-white">
                Locally owned, and reachable
              </h2>
              <p className="mt-4 text-[#AFC4E0] leading-relaxed">
                PHL Clean is based in Bensalem and independently owned. There is no corporate office
                in another state, no franchise help desk, and no account manager who has never seen
                your building.
              </p>
              <p className="mt-4 text-[#AFC4E0] leading-relaxed">
                Walkthroughs are run by an owner or a senior estimator — whoever comes out has stood
                on your floor before quoting it, and their assessment is what the number is built on.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-[54ch]">
              <p className="spec-label mb-3">Next step</p>
              <h2 className="text-[clamp(1.5rem,3vw,2.1rem)] text-phl-ink">
                Meet whoever walks your floor
              </h2>
              <p className="mt-4 text-phl-ink-2 leading-relaxed">
                The walkthrough is free and takes under an hour. You get an honest read on what
                will and won&rsquo;t come back, whether or not you hire us.
              </p>
              <div className="flex flex-wrap gap-3 mt-7">
                <a href="/#contact" className="btn-primary px-6 py-3 text-[15px]">Schedule a Walkthrough</a>
                <a href="tel:+12155501414" className="btn-ghost px-6 py-3 text-[15px] gap-2">
                  <Phone className="h-[17px] w-[17px]" />
                  (215) 550-1414
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
