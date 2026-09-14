export interface ServiceData {
  slug: string;
  shortTitle: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroTagline: string;
  heroImage: string;
  /** Which technical figure heads this page. See components/figures. */
  figure: "carpet" | "grout" | "finish";
  whatsIncluded: string[];
  process: { title: string; description: string }[];
  whoItsFor: string[];
  whyChoose: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
}

export const services: ServiceData[] = [
  {
    slug: "carpet-cleaning",
    shortTitle: "Carpet Cleaning",
    h1: "Commercial Carpet Cleaning in Philadelphia & Surrounding Counties",
    metaTitle: "Commercial Carpet Cleaning Philadelphia | PHL Clean",
    metaDescription: "Restorative commercial carpet cleaning across Philadelphia, Bucks, Montgomery, Delaware and Chester counties. Hot water extraction, encapsulation, traffic lane and stain work. Book a walkthrough — (215) 550-1414.",
    heroTagline: "Restorative hot water extraction that lifts abrasive grit out of the base of the pile, where it is quietly destroying your carpet.",
    heroImage: "/images/commercial.webp",
    figure: "carpet",
    whatsIncluded: [
      "Thorough dry soil removal before any moisture touches the carpet",
      "Alkaline pre-spray matched to the soil load, with correct dwell time",
      "Mechanical agitation to break the soil bond at the fiber",
      "Hot water extraction at the pressure the carpet construction can take",
      "Acid rinse to neutralize residue so the carpet does not re-soil quickly",
      "Traffic lane and spot work — coffee, ink, grease, beverage",
      "Enzyme treatment for odor at the source rather than a masking fragrance",
      "Airmovers set to bring the space back into service the same day",
    ],
    process: [
      { title: "Inspect and Identify", description: "We check fiber type, construction, and backing before anything else, because nylon, olefin and wool do not tolerate the same chemistry or the same heat. We also flag anything we do not expect to fully recover, so you hear it from us first." },
      { title: "Dry Soil Removal", description: "The majority of what is in a commercial carpet is dry, gritty and abrasive. It comes out far more effectively before it is wet. Skipping this step is the single most common shortcut in the trade — wetting dry soil makes mud." },
      { title: "Pre-Spray and Dwell", description: "An alkaline pre-spray sized to the actual soil load, then left to work. Dwell time is free and it does more than pressure does. Rushing it is why some jobs look clean wet and gray again dry." },
      { title: "Agitate and Extract", description: "Mechanical agitation breaks the bond between soil and fiber, then hot water extraction pulls soil, chemistry and moisture out together in one pass." },
      { title: "Rinse, Groom and Dry", description: "An acid rinse brings the carpet back to neutral pH so no sticky residue is left behind to attract soil. We groom the pile for an even finish and set airmovers to speed the dry down." },
    ],
    whoItsFor: [
      "Offices with carpet tile or broadloom",
      "Bank and credit union branches",
      "Schools and educational facilities",
      "Hotels, hospitality and event space",
      "Property management portfolios and common areas",
      "Retail floors and showrooms",
      "Medical and dental waiting areas",
    ],
    whyChoose: [
      { title: "Method Matched to the Carpet", description: "Extraction is not always the right answer, and we will say so. Method follows fiber, construction, soil load and how fast you need the space back — not whatever machine is already on the van." },
      { title: "Honest About Permanent Wear", description: "Traffic lane gray is often abraded fiber rather than soil. Cleaning removes the soil; nothing un-scratches the yarn. We tell you which you have before you pay, not after." },
      { title: "Back In Service Fast", description: "Correct extraction and airmovers put most commercial carpet back in use within a few hours, not a day. Evening and weekend scheduling is normal for us." },
      { title: "Residue-Free Rinse", description: "Carpet cleaned without a neutralizing rinse re-soils faster than it did before. We rinse every job, which is why our work still looks right several weeks later." },
    ],
    faqs: [
      { question: "How long does commercial carpet take to dry?", answer: "With proper extraction and airmovers, most commercial carpet is walkable within 2 to 4 hours and fully dry within 6 to 12, depending on humidity, airflow and pile density. Low-moisture encapsulation is much faster — typically 20 to 60 minutes — which is why we use it for interim cleans in buildings that cannot close." },
      { question: "Why does my carpet look dirty again so quickly after cleaning?", answer: "Almost always residue. If a carpet is cleaned with an alkaline pre-spray and never rinsed back to a neutral pH, the leftover chemistry stays sticky and grabs soil from the first day. It is why we finish every job with an acid rinse. The other cause is over-wetting, which wicks soil from the backing up to the surface as it dries." },
      { question: "Can you get rid of the dark traffic lanes?", answer: "Sometimes, and we will tell you honestly which case you have. If the lane is soil, extraction lifts it. If the lane is abrasion — grit acting like sandpaper and scratching the fiber so it scatters light differently — no cleaning method will restore it, because the damage is physical rather than chemical. Catching it early with a maintenance interval is the only real fix." },
      { question: "Do you move furniture?", answer: "We move light, movable items such as chairs, waste bins and small tables as part of the job. Heavy furniture, filing systems and anything with electronics we clean around, and we will point out in the walkthrough exactly what that means for your space so there are no surprises." },
      { question: "What about pet or biological odors?", answer: "We use enzyme treatments that digest the source rather than fragrance that covers it. Severe contamination that has reached the backing or the subfloor is a different job, and sometimes the honest answer is replacement of the affected section. We will say so rather than take the money and disappoint you." },
    ],
    relatedSlugs: ["carpet-maintenance-programs", "tile-grout-cleaning", "floor-maintenance"],
  },
  {
    slug: "carpet-maintenance-programs",
    shortTitle: "Carpet Maintenance Programs",
    h1: "Commercial Carpet Maintenance Programs in Philadelphia & Surrounding Counties",
    metaTitle: "Commercial Carpet Maintenance Programs Philadelphia | PHL Clean",
    metaDescription: "Scheduled commercial carpet maintenance across Philadelphia, Bucks, Montgomery, Delaware and Chester counties. Interim encapsulation plus restorative extraction on an interval set by traffic. (215) 550-1414.",
    heroTagline: "Interim encapsulation on the lanes, restorative extraction on a schedule set by how your building is actually used — not by the calendar.",
    heroImage: "/images/commercial.webp",
    figure: "carpet",
    whatsIncluded: [
      "Traffic pattern survey to find where soil actually enters and settles",
      "A written interval — what gets cleaned, how, and how often",
      "Interim low-moisture encapsulation on lanes and entry zones",
      "Restorative hot water extraction on the agreed cycle",
      "Spot and spill response between scheduled visits",
      "Entry matting review, because most soil is preventable at the door",
      "Annual condition report on wear, seams and areas to plan for",
      "One point of contact who knows your building",
    ],
    process: [
      { title: "Survey the Traffic", description: "We walk the building and map it: entry points, lanes, pivot areas at lifts and doorways, and the quiet zones nobody walks on. Those areas have completely different needs and pretending otherwise is how buildings get over-cleaned in one place and neglected in another." },
      { title: "Set the Interval", description: "Frequency comes from traffic count, entry design, floor covering and how visible the space is to your customers. A reception lane may need interim work monthly while a back office needs extraction once a year." },
      { title: "Interim Encapsulation", description: "Between restorative cleans we use low-moisture encapsulation on the lanes. A polymer surrounds the soil, dries to a brittle crystal, and comes out with routine vacuuming. Low water, fast dry, no closing the building." },
      { title: "Restorative Extraction", description: "On the agreed cycle we do the full restorative clean — pre-spray, agitation, hot water extraction, acid rinse. This is the reset that interim cleaning extends rather than replaces." },
      { title: "Review and Adjust", description: "We check the plan against reality once a year. If an area is holding up better than expected we reduce the frequency and you pay less. That has happened, and we would rather keep the account for a decade." },
    ],
    whoItsFor: [
      "Property managers running several buildings",
      "Corporate offices with a visible reception floor",
      "Banks and credit unions with branch standards to hold",
      "Schools working around term time and breaks",
      "Hotels and hospitality with continuous occupancy",
      "Medical and dental practices with heavy waiting-room traffic",
      "Any building that keeps paying for emergency cleans",
    ],
    whyChoose: [
      { title: "Cheaper Than the Emergencies", description: "A planned interval almost always costs less per year than the reactive deep cleans it replaces, because interim work is quick, low-moisture and does not need the building closed." },
      { title: "It Is the Only Thing That Prevents Wear", description: "Once grit has abraded the fiber, the damage is permanent. Removing soil before it grinds is the only intervention that actually extends the life of the carpet. Everything else is cosmetic." },
      { title: "We Will Reduce Your Frequency", description: "If an area does not need the visits it is scheduled for, we say so and adjust it down. A maintenance company that never reduces anything is selling a subscription, not a service." },
      { title: "Same Crew, Same Building", description: "The team assigned to your account learns the layout, the problem corners and your access rules. You stop re-explaining your building every visit." },
    ],
    faqs: [
      { question: "What is the difference between encapsulation and hot water extraction?", answer: "Extraction is restorative: hot water and chemistry go in, soil and moisture come out, and the carpet is genuinely deep cleaned. Encapsulation is interim: a polymer surrounds each soil particle and dries into a brittle crystal that releases from the fiber and is removed by vacuuming. Encapsulation uses a fraction of the water and dries in under an hour, so it suits buildings that cannot close — but it does not replace extraction, it stretches the interval between them." },
      { question: "How often should commercial carpet actually be cleaned?", answer: "There is no universal number, and any company that gives you one without seeing your building is guessing. It depends on foot traffic, how close the area is to an entrance, your entry matting, the carpet's color and construction, and how visible the space is to customers. A busy reception lane might need interim work monthly and extraction twice a year; a low-traffic private office might genuinely need extraction once a year and nothing else." },
      { question: "Do I have to sign a long contract?", answer: "No. Our maintenance agreements are month to month. The interval is a plan, not a lock-in — if it stops making sense for your building, we change it or you stop. We would rather earn the renewal." },
      { question: "Can a program really make carpet last longer?", answer: "Yes, and it is the one thing that can. The wear that ends a commercial carpet's life is abrasion from dry, gritty soil being ground into the fiber underfoot. Remove the grit on a sensible interval and the yarn keeps its light-reflecting surface for years longer. Let it build up and no amount of later cleaning reverses it." },
      { question: "What difference does entry matting make?", answer: "A large one, and it is the cheapest improvement most buildings can make. A proper matting run inside and outside the main doors captures a substantial share of tracked-in grit and moisture before it ever reaches your carpet. We include a matting review in every program because reducing the soil load costs you far less than cleaning it up repeatedly." },
    ],
    relatedSlugs: ["carpet-cleaning", "floor-maintenance", "tile-grout-cleaning"],
  },
  {
    slug: "tile-grout-cleaning",
    shortTitle: "Tile & Grout Cleaning",
    h1: "Commercial Tile & Grout Cleaning in Philadelphia & Surrounding Counties",
    metaTitle: "Commercial Tile & Grout Cleaning Philadelphia | PHL Clean",
    metaDescription: "Deep tile and grout cleaning for commercial buildings across Philadelphia, Bucks, Montgomery, Delaware and Chester counties. Pressure extraction that empties the joint instead of pushing soil in. (215) 550-1414.",
    heroTagline: "High-pressure extraction at the grout line — because a mop does not clean a joint, it fills one.",
    heroImage: "/images/floor-maintenance.webp",
    figure: "grout",
    whatsIncluded: [
      "Alkaline pre-treatment sized to the soil and left to dwell",
      "Mechanical agitation along the joint, not just across the tile face",
      "High-pressure hot water extraction with simultaneous vacuum recovery",
      "Contained recovery — the slurry leaves the building rather than the joint",
      "Neutralizing rinse so no residue is left to attract soil",
      "Grease and soap-scum work for restrooms and food service areas",
      "Penetrating sealer applied after cleaning, where the grout warrants it",
      "Honest assessment of what cleaning will and will not recover",
    ],
    process: [
      { title: "Identify the Surface", description: "Porcelain, ceramic, quarry tile, natural stone and polished concrete all behave differently, and some will be damaged outright by the acids used routinely on others. We identify the surface first. Natural stone in particular is easy to permanently etch." },
      { title: "Pre-Treat and Dwell", description: "An alkaline cleaner goes down and is left to work on the soil in the joint. Grout is porous, so the chemistry needs time to get down into it. This is the step that separates a real clean from a wet floor." },
      { title: "Agitate the Joint", description: "Soil sits in the recessed grout line, below the tile face. Agitation is directed along the joint, because a flat pass over the tile surface never reaches what is actually discolored." },
      { title: "Pressure Extraction", description: "Hot water at pressure goes in and is recovered in the same motion by a contained vacuum head. The dirty slurry is captured rather than squeegeed into the next joint, which is exactly what mopping does every day." },
      { title: "Rinse, Dry and Assess", description: "A neutralizing rinse, then a dry-down, then we look at the result with you. If the grout is clean but permanently discolored, that is the moment to talk about color sealing rather than repeat cleaning." },
    ],
    whoItsFor: [
      "Commercial restrooms",
      "Restaurant and food service kitchens and dining floors",
      "Building lobbies and entryways",
      "Medical, dental and veterinary practices",
      "Schools — cafeterias, corridors and washrooms",
      "Gyms, studios and locker rooms",
      "Retail floors and back-of-house areas",
    ],
    whyChoose: [
      { title: "We Empty the Joint", description: "Contained pressure extraction recovers the slurry as it cleans. Mopping relocates soil into the grout line; that is why the joint gets darker every year while the tile looks fine." },
      { title: "We Identify Stone First", description: "The acidic products that clean ceramic grout quickly will permanently etch marble, travertine and limestone. Knowing the difference before starting is not an upsell, it is the job." },
      { title: "We Do Not Seal Dirty Grout", description: "Sealing traps whatever is in the joint underneath it. If it is not clean, sealing locks the problem in and you pay again to remove the sealer later." },
      { title: "We Tell You When Cleaning Is Done", description: "There is a point where grout is clean and still looks wrong, because it is permanently stained or was never uniform. We say so and show you the restoration options instead of selling you the same clean twice." },
    ],
    faqs: [
      { question: "Why does my grout still look dirty after the cleaners come?", answer: "Because a mop and bucket cannot clean a recessed joint. The grout line sits below the tile face, so a flat mop passes over it, and the water in the bucket gets dirtier as the job goes on — which means the last part of the floor is being wiped with soil. Over months that soil settles into the porous grout. Getting it out needs pressure and simultaneous vacuum recovery, not more mopping." },
      { question: "Will cleaning make my grout look new again?", answer: "Often it gets remarkably close, and sometimes it does not, which we will tell you at the walkthrough rather than after. Cement-based grout is porous and absorbs stains; if a spill has penetrated deeply or the grout was installed with inconsistent color, cleaning removes the soil but the discoloration stays. That is when color sealing is the honest answer, and it is a restoration service rather than a cleaning one." },
      { question: "Should I seal my grout after cleaning?", answer: "Usually yes for cement-based grout in a wet or high-traffic area, because a penetrating sealer slows how fast spills soak in and buys you time to wipe them up. Two caveats: sealer must only go onto genuinely clean grout, or you lock the soil in; and epoxy grout is already non-porous and does not need it. We will tell you which you have." },
      { question: "How long is the floor out of use?", answer: "Most commercial tile is walkable almost immediately after extraction and dry within an hour or two, since the surface holds very little water. If we are applying a penetrating sealer, allow longer before the area gets wet — we give you exact timings for the product used on your floor before we start." },
      { question: "Do you clean natural stone?", answer: "Yes, with a different process. Marble, travertine, limestone and other calcareous stone are damaged by the acidic cleaners commonly used on ceramic tile grout, so they get neutral-pH chemistry and, where appropriate, honing or polishing rather than aggressive cleaning. Identifying the stone correctly is the first thing we do." },
    ],
    relatedSlugs: ["grout-restoration", "floor-maintenance", "carpet-cleaning"],
  },
  {
    slug: "grout-restoration",
    shortTitle: "Grout Restoration & Re-Grout",
    h1: "Grout Restoration, Color Sealing & Re-Grout in Philadelphia & Surrounding Counties",
    metaTitle: "Grout Restoration & Re-Grout Philadelphia | PHL Clean",
    metaDescription: "Commercial grout color sealing, cut-out and re-grout across Philadelphia, Bucks, Montgomery, Delaware and Chester counties. We fix failed joints instead of sealing over them. (215) 550-1414.",
    heroTagline: "Color seal where the joint is sound, cut it out and replace it where it has failed — and we will tell you which one you actually have.",
    heroImage: "/images/floor-maintenance.webp",
    figure: "grout",
    whatsIncluded: [
      "Joint-by-joint condition survey before any quote is given",
      "Deep cleaning first — nothing is sealed over soil",
      "Pigmented color sealing for uniform color and stain resistance",
      "Cut-out and replacement of cracked, hollow or missing grout",
      "Correct replacement of failed joints in movement and corner locations",
      "Re-grouting to match existing color and joint width",
      "Silicone renewal where wet-area joints have failed",
      "Clear cure times so you know exactly when the floor returns to service",
    ],
    process: [
      { title: "Survey the Joints", description: "We go along the joints and sound them out. Hollow, cracked, crumbling and missing grout are structural problems; uniform-but-ugly grout is a cosmetic one. The two need completely different work and the price difference is significant." },
      { title: "Diagnose the Cause", description: "Grout that keeps cracking in the same line is usually telling you something — a movement joint that was filled with rigid grout, deflection in the subfloor, or a failed tile bond underneath. Replacing the grout without addressing that just resets the clock." },
      { title: "Clean Before Anything Else", description: "Every restoration starts with a full clean. Color seal or new grout applied over soil traps it permanently and fails early. There is no shortcut around this step." },
      { title: "Color Seal or Cut Out", description: "Sound joints get a pigmented color seal that bonds to the grout, evens out the color completely and forms a stain-resistant barrier. Failed joints get cut out to depth and re-grouted properly." },
      { title: "Cure and Hand Back", description: "Color seal and new grout both need genuine cure time before the area gets wet or takes heavy traffic. We give you the real number for the product used rather than an optimistic one." },
    ],
    whoItsFor: [
      "Restrooms where the grout will not come clean however often it is cleaned",
      "Restaurant and commercial kitchen floors",
      "Building lobbies and entrances that set a first impression",
      "Locker rooms, showers and wet areas",
      "Property managers preparing a space for turnover or sale",
      "Buildings where grout color was never consistent from installation",
      "Any floor where the tile is fine and only the joints look bad",
    ],
    whyChoose: [
      { title: "We Will Not Seal a Failed Joint", description: "Color sealing a cracked or hollow joint hides it for a few months and changes nothing underneath. If it needs cutting out we say so, even though sealing would have been the easier sale." },
      { title: "Caulk Where Caulk Belongs", description: "Movement joints, wall-to-floor corners and changes of plane are meant to be flexible. Filling them with rigid grout is a common installation error and it is why the same line keeps cracking. We put the right material in the right joint." },
      { title: "Color Matched Properly", description: "New grout that does not match reads as a repair from across the room. We match color and joint width to what is already there, so the fix disappears." },
      { title: "Cheaper Than Replacing the Floor", description: "When tile is sound and only the joints look bad, restoration gets you a floor that looks new for a fraction of the cost and disruption of tearing it out." },
    ],
    faqs: [
      { question: "What is color sealing and how long does it last?", answer: "A color seal is a pigmented coating that bonds to the surface of cement-based grout. It does two things at once: it makes the color perfectly uniform, which cleaning alone cannot do on stained or patchy grout, and it forms a barrier that resists staining because spills sit on top rather than soaking in. In a commercial setting it typically holds for several years, with the wear showing first in the heaviest traffic lanes, and it can be touched up in those areas rather than redone throughout." },
      { question: "How do I know if I need a re-grout or just a color seal?", answer: "Run a key or a screwdriver handle along the joint. If the grout is solid, level and intact — just stained, patchy or the wrong shade — it is a color seal. If it is cracked, crumbling, sounds hollow, or has gone missing in places, that is a failed joint and it needs cutting out and replacing. Sealing over a failure hides it briefly and fixes nothing. We survey this properly before quoting, because the price difference between the two is real." },
      { question: "Why does my grout keep cracking in the same place?", answer: "Almost always because that line is doing a job rigid grout cannot do. Tile assemblies move — thermal expansion, building deflection, the change of plane where the floor meets a wall — and those locations are supposed to be filled with a flexible material, not grout. If they were grouted at installation, they will crack repeatedly no matter how many times they are refilled. Fixing it means cutting out and replacing with the correct flexible joint." },
      { question: "Can you match my existing grout color?", answer: "Yes, in the great majority of cases. We match against the existing joints in good light rather than from a chart alone, because grout that has been down for years has usually shifted from its original color. If a spot repair simply will not disappear — which happens with unusual or heavily faded colors — we will tell you before we start and give you the option of color sealing the whole area instead, so the result is uniform." },
      { question: "How long before the floor can be used?", answer: "It depends on the work and the product. New grout generally needs to cure before it gets wet or takes heavy traffic, and a color seal needs its own cure window. We plan the work around your hours — evenings and weekends are routine for us — and we give you the actual cure time for the specific products used on your floor rather than a rough guess." },
    ],
    relatedSlugs: ["tile-grout-cleaning", "floor-maintenance", "carpet-maintenance-programs"],
  },
  {
    slug: "floor-maintenance",
    shortTitle: "Hard Surface Floor Care",
    h1: "Commercial Hard Surface Floor Care in Philadelphia & Surrounding Counties",
    metaTitle: "Commercial Hard Surface Floor Care & VCT Philadelphia | PHL Clean",
    metaDescription: "VCT strip and finish, burnishing, concrete and terrazzo care across Philadelphia, Bucks, Montgomery, Delaware and Chester counties. Slip resistance measured, not assumed. (215) 550-1414.",
    heroTagline: "Strip, finish, burnish and maintain — VCT, LVT, concrete and terrazzo, with slip resistance we actually measure.",
    heroImage: "/images/floor-maintenance.webp",
    figure: "finish",
    whatsIncluded: [
      "Full strip and refinish for VCT, vinyl and linoleum",
      "Scrub and recoat where a full strip is not yet warranted",
      "Multiple coats of commercial finish with real cure time between them",
      "Burnishing and buffing programs to hold the gloss",
      "Polished and sealed concrete maintenance",
      "Terrazzo cleaning, honing and restoration",
      "Slip resistance testing against the ANSI A137.1 benchmark",
      "Written maintenance schedules so floors stop cycling good to bad",
    ],
    process: [
      { title: "Identify and Assess", description: "We establish what the floor actually is and what is on it. VCT, LVT, sheet vinyl, sealed concrete and terrazzo need different products, and the wrong one can strip a finish that was never meant to come off or fail to touch one that was." },
      { title: "Recommend Honestly", description: "A full strip is disruptive, expensive and hard on the tile. If a scrub and recoat will get you there, that is what we quote, because stripping a floor more often than it needs shortens the life of the tile itself." },
      { title: "Strip to the Substrate", description: "When a strip is warranted we take it back properly — old finish, sealer and embedded soil removed, then neutralized and rinsed. Finish applied over residue peels, and a peeling floor has to be done again." },
      { title: "Build the Finish in Coats", description: "Commercial finish is applied in multiple thin coats, each allowed to cure before the next. This is the step most often rushed, and rushing it is why some floors look good for a month and then go dull and scuff-prone." },
      { title: "Set the Maintenance Cycle", description: "Regular burnishing keeps the gloss and postpones the next strip by a long way. We put the cycle in writing so the floor is maintained rather than periodically rescued." },
    ],
    whoItsFor: [
      "Offices and common areas with VCT or vinyl",
      "Schools and educational facilities",
      "Medical, dental and veterinary practices",
      "Retail floors and showrooms",
      "Banks and credit union branches",
      "Warehouses and light industrial with sealed concrete",
      "Lobbies and corridors in managed property",
    ],
    whyChoose: [
      { title: "Slip Resistance Measured", description: "A high-gloss floor is not automatically a dangerous one, but nobody should be guessing. ANSI A137.1 sets a dynamic coefficient of friction of 0.42 or above for level interior tile walked on when wet, and we work to that benchmark rather than to how shiny it looks." },
      { title: "We Talk You Out of Strips", description: "Stripping is the most profitable thing we could sell you and the hardest thing on your floor. When a scrub and recoat will do, that is what we recommend." },
      { title: "Coats Cured Properly", description: "Finish needs time between coats, and we schedule the job so it gets it. That is the difference between a floor that holds up for a year and one that scuffs in a month." },
      { title: "Scheduled Around Your Hours", description: "Floor work means downtime. Evenings, weekends and holiday closures are when most of our hard surface work happens, so your floor is cured and ready when you open." },
    ],
    faqs: [
      { question: "Do you work on hardwood floors?", answer: "No, and we would rather say so plainly than take the job and learn on your floor. Hardwood refinishing is a different trade with different equipment, different chemistry and a very different failure mode when it goes wrong. We cover carpet, tile and grout, VCT and vinyl, polished and sealed concrete, and terrazzo. If you need hardwood done, we are happy to point you toward someone who specialises in it." },
      { question: "How often does VCT need stripping and refinishing?", answer: "For most commercial floors a full strip once a year is a reasonable starting point, with regular burnishing in between to maintain the gloss. But the honest answer is that it depends on traffic, entry matting and how well the interim maintenance is done. A well-burnished floor in a moderate-traffic building can often go considerably longer, and stripping more often than necessary wears the tile itself down." },
      { question: "What is the difference between a strip and a scrub and recoat?", answer: "A strip removes all the finish down to the tile and rebuilds it from nothing. A scrub and recoat removes only the top worn layers and adds fresh coats over the sound finish underneath. Scrub and recoat is faster, cheaper and much gentler on the tile, and it works whenever the existing finish is still sound and well-bonded. It is not an option once the finish is discolored throughout, contaminated or peeling — at that point it has to come off." },
      { question: "Will a glossy floor make the building a slip hazard?", answer: "Gloss and traction are not the same thing, though they are easily confused. What matters is the coefficient of friction of the finished surface, particularly when wet. ANSI A137.1 sets a benchmark of 0.42 or above for level interior tile expected to be walked on wet, and NFSI B101.3 sets a slightly stricter bar. We select finishes and maintenance methods with that in mind, and for a facility with a real concern we would rather measure it than reassure you." },
      { question: "Can polished concrete be maintained, or does it need redoing?", answer: "It can and should be maintained, and doing so postpones restoration for years. Polished concrete keeps its finish through regular cleaning with a neutral-pH cleaner and periodic burnishing; what dulls it is abrasive grit left underfoot and acidic or alkaline cleaners used routinely. When it has genuinely lost its polish, it is re-honed and re-polished rather than coated." },
    ],
    relatedSlugs: ["tile-grout-cleaning", "grout-restoration", "carpet-maintenance-programs"],
  },
];

export function getService(slug: string): ServiceData | undefined {
  return services.find(s => s.slug === slug);
}
