export interface ServiceData {
  slug: string;
  shortTitle: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroTagline: string;
  heroImage: string;
  whatsIncluded: string[];
  process: { title: string; description: string }[];
  whoItsFor: string[];
  whyChoose: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
}

export const services: ServiceData[] = [
  {
    slug: "commercial-cleaning",
    shortTitle: "Commercial Cleaning",
    h1: "Commercial Cleaning & Janitorial Services in Philadelphia & Surrounding Counties",
    metaTitle: "Commercial Cleaning & Janitorial Services Philadelphia | PHL Clean",
    metaDescription: "Reliable commercial cleaning and janitorial services for offices, banks, and businesses across Philadelphia, Bucks, Montgomery, Delaware, and Chester counties. Free quotes — call (215) 550-1414.",
    heroTagline: "Daily, weekly, and after-hours office cleaning that keeps your workspace healthy, professional, and ready for business — every single day.",
    heroImage: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    whatsIncluded: [
      "Daily, weekly, or bi-weekly scheduled cleaning",
      "Trash removal, recycling, and liner replacement",
      "Restroom sanitation and consumable restocking",
      "Floor vacuuming, mopping, and routine polishing",
      "Dusting of surfaces, blinds, vents, and high-touch points",
      "Kitchen and break-room cleaning",
      "Glass, door, and entryway cleaning",
      "Allergen and dust control",
    ],
    process: [
      { title: "Walkthrough", description: "We visit your facility, assess the space, and ask questions about your real day-to-day needs — not generic checkboxes." },
      { title: "Custom Quote", description: "You get a written quote with everything spelled out: scope, frequency, equipment, pricing. No hidden fees, no fine print." },
      { title: "Trained Crew Assigned", description: "We assign the same crew to your account so you see the same faces each visit — accountability you can put a name to." },
      { title: "Quality Checks", description: "Crew leads and supervisors do unannounced quality inspections so problems get caught before you have to flag them." },
      { title: "Open Communication", description: "Direct phone and email access to ownership. When you need to talk to someone, you talk to someone — not a ticket system." },
    ],
    whoItsFor: [
      "Corporate offices",
      "Bank branches and financial institutions",
      "Medical and dental offices",
      "Religious facilities",
      "Schools and educational facilities",
      "Retail and showrooms",
      "Property management portfolios",
    ],
    whyChoose: [
      { title: "Locally Owned", description: "PHL Clean is based in Bensalem, PA. When something needs attention, you talk to ownership directly — not a franchise help-desk." },
      { title: "Insured & Background-Checked", description: "Every team member is fully insured and background-checked before they ever step foot in your facility." },
      { title: "Consistent Crews", description: "Same team, same standards, every visit. No revolving door of strangers in your building." },
      { title: "Real Communication", description: "Phone, email, or text — we answer. No 48-hour ticket queues, no off-shore call centers." },
    ],
    faqs: [
      { question: "What hours do you clean?", answer: "Most clients prefer evening or overnight service so we're out of the way during business hours. We can also do early-morning or daytime cleaning if that works better for you." },
      { question: "Do I need to sign a long contract?", answer: "Most of our commercial agreements are month-to-month. We earn your business each month — we don't lock you in." },
      { question: "What about supplies?", answer: "We provide all the equipment, machines, and cleaning chemicals our team uses on the job. Day-to-day consumables — trash bags, toilet paper, paper towels, hand soap — are typically supplied by your facility. We're happy to discuss alternative arrangements if you'd prefer we handle that too." },
      { question: "Are you insured?", answer: "Yes — fully insured with general liability and workers' compensation. We're happy to provide a Certificate of Insurance on request." },
    ],
    relatedSlugs: ["carpet-cleaning", "deep-cleaning", "floor-maintenance"],
  },
  {
    slug: "carpet-cleaning",
    shortTitle: "Carpet Cleaning",
    h1: "Commercial Carpet Cleaning in Philadelphia & Surrounding Counties",
    metaTitle: "Commercial Carpet Cleaning Philadelphia | PHL Clean",
    metaDescription: "Professional commercial carpet cleaning serving Philadelphia, Bucks, Montgomery, Delaware, and Chester counties. Hot water extraction, encapsulation, stain & odor removal.",
    heroTagline: "Hot water extraction and low-moisture encapsulation cleaning that lifts dirt, removes stains, and extends the life of your commercial carpet.",
    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    whatsIncluded: [
      "Hot water extraction (deep-clean steam method)",
      "Low-moisture encapsulation for high-traffic areas",
      "Stain and spot removal — coffee, ink, food, traffic lanes",
      "Odor and pet-odor neutralization",
      "Allergen and dust-mite reduction treatment",
      "Pre-vacuuming, pre-spray, and grooming",
      "Quick-dry processes so your space is usable fast",
      "Scheduled maintenance programs to keep carpet looking new",
    ],
    process: [
      { title: "Inspection", description: "We walk the space and identify high-traffic areas, problem stains, and any carpet types that need special handling." },
      { title: "Pre-Treatment", description: "Pre-spray treatment breaks down soils and stains before extraction so the cleaning is far more effective." },
      { title: "Deep Extraction", description: "Truck-mounted or commercial-grade portable extraction lifts soil, allergens, and treatment chemicals out of the carpet." },
      { title: "Spot & Stain Work", description: "Targeted treatment on stubborn spots after the main pass — coffee, ink, beverage stains, traffic lanes." },
      { title: "Grooming & Dry", description: "Carpet is groomed for a uniform finish and dried with airmovers. Most commercial carpet is walkable in a few hours." },
    ],
    whoItsFor: [
      "Office carpet maintenance programs",
      "Banks and financial branches",
      "Schools and education facilities",
      "Hotels and hospitality",
      "Property management portfolios",
      "Retail and showrooms",
      "Restaurants (after-hours service)",
    ],
    whyChoose: [
      { title: "Right Method for the Carpet", description: "We match the cleaning method to your carpet construction and traffic level — not a one-size-fits-all process." },
      { title: "Quick Turnaround", description: "Most commercial carpet is dry and walkable within a few hours. No closing your space for a full day." },
      { title: "Stain Experts", description: "Coffee, ink, traffic lanes, mystery stains — we've seen them and we know what actually works." },
      { title: "Maintenance Programs", description: "Scheduled quarterly or annual deep cleans keep your carpet looking new and protect your flooring investment." },
    ],
    faqs: [
      { question: "How long does carpet take to dry?", answer: "With our extraction equipment and airmovers, commercial carpet is typically walkable within 2-4 hours, and fully dry within 6-12 hours depending on humidity and ventilation." },
      { question: "Can you remove tough stains like coffee or ink?", answer: "Most of the time, yes. We assess each stain and use the right treatment for the carpet type and stain source. We're upfront if we don't think a stain can be fully removed." },
      { question: "Do you offer scheduled maintenance?", answer: "Yes — many of our commercial clients are on quarterly or semi-annual carpet maintenance programs that keep their carpet looking new and extend its lifespan." },
      { question: "What about pet odors?", answer: "We use enzyme-based treatments that neutralize odor at the source rather than just masking it. We're upfront about results for severe cases." },
    ],
    relatedSlugs: ["commercial-cleaning", "deep-cleaning", "floor-maintenance"],
  },
  {
    slug: "deep-cleaning",
    shortTitle: "Deep Cleaning",
    h1: "Commercial Deep Cleaning Services in Philadelphia & Surrounding Counties",
    metaTitle: "Commercial Deep Cleaning Services Philadelphia | PHL Clean",
    metaDescription: "Top-to-bottom deep cleaning for offices, medical facilities, and commercial buildings in Philadelphia, Bucks, Montgomery, Delaware, and Chester counties. Free quotes.",
    heroTagline: "Floor-to-ceiling deep cleaning that gets to the dust, grime, and surfaces routine cleaning misses. Perfect for move-ins, move-outs, post-construction, or annual refreshes.",
    heroImage: "https://images.unsplash.com/photo-1628177142898-93e36e4e3715?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    whatsIncluded: [
      "High dusting — vents, ceiling tiles, light fixtures, ductwork",
      "Detail cleaning of baseboards, doors, frames, and trim",
      "Wall washing and spot-cleaning",
      "Furniture and upholstery cleaning",
      "Window interior cleaning (inside surface)",
      "Disinfection of all high-touch surfaces",
      "Detail kitchen and break-room cleaning",
      "Restroom deep clean — grout, fixtures, partitions",
    ],
    process: [
      { title: "Site Assessment", description: "We tour the facility and build a detailed scope so nothing gets missed — and you know exactly what you're paying for." },
      { title: "High-to-Low Plan", description: "Deep cleans always work top-down. We start with high dusting and ceiling-area work, then surfaces, then floors." },
      { title: "Crew Assembly", description: "Deep cleans typically require a larger crew for a shorter window. We bring the right number of trained cleaners to get it done." },
      { title: "Detail Work", description: "Every fixture, every corner, every surface. The kind of cleaning that resets a space rather than just maintaining it." },
      { title: "Walk-Through", description: "We walk the completed space with you so anything not up to standard gets re-addressed before we leave." },
    ],
    whoItsFor: [
      "Move-in / move-out cleaning",
      "Post-construction or renovation cleanup",
      "Annual or semi-annual office refresh",
      "Medical and dental facility deep cleans",
      "Property turnover (commercial real estate)",
      "Schools — summer or holiday-break deep cleans",
      "Religious facilities — between major services",
    ],
    whyChoose: [
      { title: "Genuinely Top-to-Bottom", description: "We don't skip the ceilings, vents, or behind-the-furniture areas. A real deep clean covers what routine cleaning never touches." },
      { title: "Right-Sized Crew", description: "We bring enough trained cleaners to do the job in a reasonable window — not stretch it across days." },
      { title: "Disinfection Done Right", description: "Hospital-grade disinfectants applied with correct dwell times. Not a quick spray-and-wipe." },
      { title: "Documented Scope", description: "You get a written scope before the work starts. No 'extras' surprise charges after the fact." },
    ],
    faqs: [
      { question: "How long does a deep clean take?", answer: "Depends on facility size and condition, but most offices in the 5,000-15,000 sq ft range take a single overnight or weekend. We give you a clear time estimate in the quote." },
      { question: "Do I need to do a deep clean every year?", answer: "Most commercial spaces benefit from an annual or semi-annual deep clean even with routine janitorial in place — it resets the building and catches things daily cleaning isn't designed to handle." },
      { question: "Can you do post-construction cleanup?", answer: "Yes — post-construction is a specific kind of deep clean (drywall dust, debris, sticker removal, etc.). We handle it regularly." },
      { question: "Will you move furniture?", answer: "For light furniture (chairs, small tables), yes. For heavy furniture or sensitive equipment, we'll work around it and clean what's accessible — let us know specifics in advance." },
    ],
    relatedSlugs: ["commercial-cleaning", "carpet-cleaning", "medical-facility-cleaning"],
  },
  {
    slug: "floor-maintenance",
    shortTitle: "Floor Maintenance",
    h1: "Commercial Floor Maintenance & Care in Philadelphia & Surrounding Counties",
    metaTitle: "Commercial Floor Maintenance Philadelphia | PHL Clean",
    metaDescription: "Strip, wax, buff, and polish for VCT, tile, and hard-surface flooring across Philadelphia, Bucks, Montgomery, Delaware, and Chester counties. Schedule a free walkthrough.",
    heroTagline: "Strip, wax, buff, polish — professional hard-surface floor care that protects your investment and keeps your building looking sharp.",
    heroImage: "https://images.unsplash.com/photo-1628177142898-93e36e4e3715?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    whatsIncluded: [
      "Strip and wax (VCT, vinyl, linoleum)",
      "Buffing and burnishing for shine restoration",
      "Tile and grout deep cleaning",
      "Concrete cleaning and sealing",
      "Hardwood cleaning and conditioning",
      "Scrub-and-recoat for floors not ready for full strip",
      "Spot polishing for high-traffic touch-up",
      "Scheduled maintenance programs",
    ],
    process: [
      { title: "Floor Assessment", description: "We identify the floor type, current finish condition, and traffic patterns so we recommend the right service — not the most expensive one." },
      { title: "Recommendation", description: "Strip-and-wax, scrub-and-recoat, or maintenance buffing — each has its place. We tell you what your floor actually needs." },
      { title: "Service Window", description: "Floor work usually happens after-hours or on weekends so the floor can cure before you reopen." },
      { title: "Multi-Coat Application", description: "Quality strip-and-wax means multiple coats of commercial finish — properly cured between coats — not a single rushed pass." },
      { title: "Maintenance Schedule", description: "We set you up on a routine schedule (monthly burnish, annual strip-and-wax) so your floors stay looking new instead of bouncing back and forth." },
    ],
    whoItsFor: [
      "Offices with VCT or vinyl flooring",
      "Schools and educational facilities",
      "Medical and dental offices",
      "Retail stores and showrooms",
      "Bank branches",
      "Religious facilities",
      "Property management — common areas",
    ],
    whyChoose: [
      { title: "Right Service for the Floor", description: "Not every floor needs a full strip — sometimes scrub-and-recoat does the job at half the price. We give you the honest call." },
      { title: "Commercial-Grade Finish", description: "We use professional commercial floor finishes that hold up to real foot traffic, not consumer-grade wax." },
      { title: "After-Hours & Weekend Work", description: "Floor work means downtime. We schedule around your business so you don't lose a day." },
      { title: "Maintenance Programs", description: "Regular buffing and burnishing extends the life of every strip-and-wax. We help you spend less on floors over time, not more." },
    ],
    faqs: [
      { question: "How often should floors be stripped and waxed?", answer: "Most commercial VCT floors benefit from a full strip-and-wax annually, with regular buffing/burnishing in between. Heavy-traffic areas may need it more often. We'll recommend a schedule." },
      { question: "How long is the floor unusable after waxing?", answer: "Floor finish typically needs 8-12 hours to cure before foot traffic. We schedule around your hours so the floor is ready when you open." },
      { question: "Can you do tile and grout?", answer: "Yes — we do deep tile and grout cleaning with the right equipment and chemicals to actually pull grime out of the grout lines, not just brighten the tile surface." },
      { question: "Do you do hardwood?", answer: "We do hardwood cleaning, conditioning, and light maintenance. For full refinishing or sanding, we partner with hardwood specialists." },
    ],
    relatedSlugs: ["commercial-cleaning", "carpet-cleaning", "deep-cleaning"],
  },
  {
    slug: "medical-facility-cleaning",
    shortTitle: "Medical Facility Cleaning",
    h1: "Medical & Healthcare Facility Cleaning in Philadelphia & Surrounding Counties",
    metaTitle: "Medical Facility Cleaning Philadelphia | PHL Clean",
    metaDescription: "Specialized medical office and healthcare facility cleaning serving Philadelphia, Bucks, Montgomery, Delaware, and Chester counties. Hospital-grade disinfection, OSHA-aware, HIPAA-respectful.",
    heroTagline: "Healthcare-grade cleaning for medical offices, dental practices, urgent care clinics, and outpatient facilities — built for infection control, patient safety, and regulatory peace of mind.",
    heroImage: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    whatsIncluded: [
      "Hospital-grade disinfection of exam rooms and treatment areas",
      "Color-coded microfiber to prevent cross-contamination",
      "Proper dwell times on all disinfectants",
      "Waiting room and reception cleaning",
      "Restroom sanitation with healthcare-appropriate products",
      "Floor care suited to medical environments",
      "Trash, bio-waste handling (per facility protocol)",
      "After-hours service to protect patient privacy",
    ],
    process: [
      { title: "Walkthrough with Your Office Manager", description: "We tour the facility with someone who knows it — practice manager or office lead — so we understand what each room needs." },
      { title: "Infection-Control Plan", description: "We document the disinfection scope: which products, which dwell times, which areas. Audit-friendly." },
      { title: "Trained Medical-Office Crew", description: "Crew members assigned to healthcare accounts are trained on the differences — cross-contamination, dwell time, HIPAA awareness." },
      { title: "After-Hours Service", description: "We clean after patient hours so we don't disrupt operations and don't compromise patient privacy." },
      { title: "Documented Quality Checks", description: "Cleaning logs and quality audits give you the documentation regulators and accreditors look for." },
    ],
    whoItsFor: [
      "Family practice and primary care offices",
      "Dental and orthodontic practices",
      "Urgent care clinics",
      "Outpatient surgery centers",
      "Specialty practices (dermatology, cardiology, etc.)",
      "Physical therapy and rehab facilities",
      "Diagnostic imaging centers",
    ],
    whyChoose: [
      { title: "Medical-Office Specific", description: "We don't treat medical offices like regular offices. Different products, different methods, different training." },
      { title: "Documentation Ready", description: "Cleaning logs and product MSDS sheets available so you have what you need for compliance audits." },
      { title: "HIPAA-Aware Crews", description: "Our crews are trained on what they can and can't touch, photograph, or discuss. Patient privacy is protected." },
      { title: "Consistent Crew Assignment", description: "Same team each visit — they learn your facility's layout, your protocols, and your standards." },
    ],
    faqs: [
      { question: "Do you have experience with medical office cleaning?", answer: "Yes — we service multiple medical, dental, and outpatient practices across Philadelphia and surrounding counties. We're happy to provide references." },
      { question: "What disinfectants do you use?", answer: "EPA-registered hospital-grade disinfectants applied with proper dwell times. We provide product information for any compliance documentation you need." },
      { question: "Can you handle bio-waste?", answer: "We don't haul regulated medical waste, but we handle general trash and follow your facility's protocols for non-regulated waste streams. Regulated medical waste pickup is handled by your contracted hauler." },
      { question: "Are your cleaners background-checked?", answer: "Yes — all team members are background-checked before assignment. We can provide documentation for credentialing files if needed." },
    ],
    relatedSlugs: ["commercial-cleaning", "deep-cleaning", "floor-maintenance"],
  },
];

export function getService(slug: string): ServiceData | undefined {
  return services.find(s => s.slug === slug);
}
