import React from 'react';
import {
  Building, Briefcase, School, Stethoscope, UtensilsCrossed,
  Dumbbell, ShoppingBag, Hotel, Warehouse,
} from 'lucide-react';

/**
 * Industries framed by the floor problem each one actually has.
 * Generic "we clean your industry" copy is what every competitor writes —
 * naming the specific failure mode is what proves we've been in the building.
 */
const INDUSTRIES = [
  {
    name: "Corporate Offices",
    icon: Briefcase,
    problem: "Carpet tile in the elevator lobby and the main run wears first and wears unevenly. Interim encapsulation on those lanes keeps the whole floor looking level without closing the office.",
  },
  {
    name: "Banks & Credit Unions",
    icon: Building,
    problem: "Teller lines and ATM vestibules take concentrated traffic in a narrow strip, with salt and slush dragged in all winter. Both accelerate abrasion in exactly the area customers stand and look down.",
  },
  {
    name: "Schools & Education",
    icon: School,
    problem: "Corridor VCT and cafeteria tile take a year of punishment, then need everything done in one summer window. We plan the strip, finish and cure around the calendar you actually have.",
  },
  {
    name: "Medical & Dental",
    icon: Stethoscope,
    problem: "Sheet vinyl and VCT with coved edges, plus waiting-room carpet that sees every shoe in the neighborhood. Slip resistance and a defensible cleaning record both matter here.",
  },
  {
    name: "Restaurants & Food Service",
    icon: UtensilsCrossed,
    problem: "Quarry tile behind the line collects grease in the joint, which mopping spreads rather than lifts. It is the single most common source of a slip complaint and a failed inspection.",
  },
  {
    name: "Gyms & Studios",
    icon: Dumbbell,
    problem: "Rubber flooring, locker-room tile and shower grout, all constantly wet. Grout that has gone dark and porous in a wet area is usually past cleaning and into restoration.",
  },
  {
    name: "Retail & Showrooms",
    icon: ShoppingBag,
    problem: "The floor is part of the product presentation. Entrance zones take the soil, but it is the sightline down the main aisle that customers actually register.",
  },
  {
    name: "Hotels & Hospitality",
    icon: Hotel,
    problem: "Corridors and function space never fully close, so restorative extraction has to happen in windows. Low-moisture interim work between resets is what makes the schedule possible.",
  },
  {
    name: "Property Management",
    icon: Warehouse,
    problem: "Lobbies, corridors and common-area floors across several buildings, each on its own cycle. One interval, one point of contact, one standard you can hold every site to.",
  },
];

const AREAS = [
  {
    name: "Philadelphia",
    body: "From Center City towers to Northeast Philadelphia industrial space. Older buildings here often have original terrazzo or quarry tile under decades of finish — worth knowing before anyone puts a stripping machine on it.",
  },
  {
    name: "Bucks County",
    body: "Our home county, run out of Bensalem. Crews live here, so a same-week look at a problem floor is realistic rather than a promise we walk back.",
  },
  {
    name: "Montgomery County",
    body: "Corporate parks, medical campuses and retail centers. A high proportion of VCT corridor work and carpet-tile office floors, both of which reward a planned interval over reactive cleaning.",
  },
  {
    name: "Delaware County",
    body: "Offices, retail, medical and managed property. Locally dispatched, which keeps response times short when a floor needs looking at before a scheduled visit.",
  },
  {
    name: "Chester County",
    body: "Historic downtown buildings alongside modern corporate campuses — often natural stone in one and polished concrete in the other. They need opposite chemistry, and getting that wrong is permanent.",
  },
];

const IndustriesServed = () => {
  return (
    <section id="industries" className="section-padding bg-phl-ground border-b border-phl-rule">
      <div className="container-custom">
        <div className="max-w-3xl mb-10">
          <p className="spec-label mb-3">Who we work for</p>
          <h2 className="text-[clamp(1.6rem,3.4vw,2.35rem)] text-phl-ink">
            Every building type fails in its own way
          </h2>
          <p className="mt-4 text-phl-ink-2 leading-relaxed">
            The floor problem in a restaurant kitchen has nothing in common with the one in a bank
            lobby. Here is what we actually find in each.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-phl-rule border border-phl-rule rounded-sm overflow-hidden">
          {INDUSTRIES.map(({ name, icon: Icon, problem }) => (
            <div key={name} className="bg-phl-surface p-5 pb-6">
              <div className="flex items-center gap-2.5 mb-2.5">
                <Icon className="h-[18px] w-[18px] text-phl-blue shrink-0" aria-hidden="true" />
                <h3 className="text-[17px] text-phl-ink">{name}</h3>
              </div>
              <p className="text-[13.5px] text-phl-ink-2 leading-relaxed">{problem}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="rack-head">Service areas</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AREAS.map(a => (
              <div key={a.name} className="border-l border-phl-rule pl-4">
                <h3 className="text-[17px] text-phl-ink mb-2">{a.name}</h3>
                <p className="text-[13.5px] text-phl-ink-2 leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;
