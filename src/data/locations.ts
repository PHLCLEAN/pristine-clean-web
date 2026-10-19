export interface LocationData {
  slug: string;
  shortName: string;     // "Bensalem" — used in copy
  longName: string;      // "Bensalem, PA" — used in titles
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroTagline: string;
  intro: string;
  neighborhoods?: string[];
  industries: string[];
  whyLocal: string;
  /** Neighborhood pages: the slug of the city page they sit under. */
  parent?: string;
  /** Extra long-form sections, each rendered as an H2 with paragraphs. */
  sections?: { heading: string; paragraphs: string[] }[];
}

export const locations: LocationData[] = [
  {
    slug: "philadelphia",
    shortName: "Philadelphia",
    longName: "Philadelphia, PA",
    h1: "Commercial Floor Care in Philadelphia, PA",
    metaTitle: "Carpet, Tile & Floor Care Philadelphia PA | PHL Clean",
    metaDescription: "Commercial carpet cleaning, tile and grout cleaning, re-grout and hard surface floor care in Philadelphia, PA. Free on-site walkthrough — (215) 550-1414.",
    heroTagline: "Carpet, tile and grout, and hard surface floor care for Philadelphia buildings — including the older ones with something worth saving under the finish.",
    intro: "Philadelphia has the oldest commercial building stock we work in, and that changes the job. Under a Center City lobby's worn vinyl there is often original terrazzo; under decades of yellowed finish in a converted warehouse there is frequently quarry tile that has never actually been cleaned, only coated. Identifying what is really there before anyone puts a machine on it is the difference between restoring a floor and destroying one. On the modern side, high-rise carpet tile wears in narrow, predictable lanes at elevator lobbies — which is exactly the kind of wear an interim program is designed to stay ahead of.",
    neighborhoods: [
      "Center City", "Old City", "University City", "Northern Liberties",
      "Fishtown", "Manayunk", "Roxborough", "Chestnut Hill",
      "Society Hill", "Rittenhouse", "South Philadelphia", "Northeast Philadelphia",
    ],
    industries: [
      "High-rise and Center City offices",
      "Bank and credit union branches",
      "Medical and dental practices",
      "Converted warehouse and loft space",
      "Universities and schools",
      "Retail and showrooms",
      "Restaurants — after-hours kitchen and dining floors",
    ],
    whyLocal: "We work Philadelphia constantly and we plan around it — loading dock windows, freight elevator bookings and after-hours building access are part of the schedule we hand you, not a problem we discover on the night.",
    sections: [
      {
        heading: "Why a Philadelphia floor job runs differently",
        paragraphs: [
          "Most of the work in a city job happens before a machine is switched on. Managed buildings usually want a certificate of insurance naming the owner and the management company before anyone is let in. Equipment comes up the freight elevator, which has to be booked, and through a loading dock that has its own hours. Parking a van with an extractor in it is a plan, not an afterthought. None of that is difficult, but all of it has to be in the schedule, and a quote that ignores it is a quote that changes on the night.",
          "So the walkthrough covers access as well as the floor: where we load in, which elevator, what hours the building allows, who signs us in, and where water can and cannot be drained. That goes into the written scope and into your building's file, so the visit after this one doesn't start from scratch either.",
        ],
      },
      {
        heading: "Identify the floor before anyone cleans it",
        paragraphs: [
          "Philadelphia has a lot of floor that is older than the business sitting on it. Terrazzo under sheet vinyl in a lobby. Quarry tile in a converted warehouse that has been coated for years instead of cleaned. Small ceramic mosaic in the vestibule of a storefront. Each of those needs different chemistry, and each can be damaged by the method that is right for the floor next to it — an acidic cleaner that is fine on porcelain will etch marble and terrazzo.",
          "We tell you what the floor actually is, what it will look like after the work, and when the honest answer is that it won't come back. Sometimes the cheaper job is the right one. Sometimes what's under the current finish is worth more than the finish.",
        ],
      },
    ],
  },
  {
    slug: "bensalem",
    shortName: "Bensalem",
    longName: "Bensalem, PA",
    h1: "Commercial Floor Care in Bensalem, PA",
    metaTitle: "Carpet, Tile & Floor Care Bensalem PA | PHL Clean",
    metaDescription: "Commercial carpet cleaning, tile and grout cleaning, re-grout and hard surface floor care in Bensalem, PA. Free on-site walkthrough — (215) 550-1414.",
    heroTagline: "PHL Clean is based in Bensalem. Floor work in our own township gets looked at faster than anywhere else we cover.",
    intro: "This is home. Our equipment lives here, which means a Bensalem walkthrough is usually a matter of days rather than weeks, and a problem floor can be looked at before a scheduled visit rather than after. The local mix is distinctive: auto showrooms with large polished or sealed concrete floors, industrial office suites running long VCT corridors, and Route 13 retail where the entrance zone takes everything the parking lot brings in.",
    neighborhoods: [
      "Andalusia", "Trevose", "Cornwells Heights", "Eddington",
      "Croydon (adjacent)", "Feasterville (adjacent)",
    ],
    industries: [
      "Auto dealerships and showrooms",
      "Industrial and warehouse office suites",
      "Corporate offices",
      "Bank branches",
      "Medical and dental practices",
      "Retail along the Route 13 corridor",
      "Property management portfolios",
    ],
    whyLocal: "We are based in Bensalem, so we are probably driving past your building already. Most walkthroughs here get booked within 48 hours.",
  },
  {
    slug: "bucks-county",
    shortName: "Bucks County",
    longName: "Bucks County, PA",
    h1: "Commercial Floor Care in Bucks County, PA",
    metaTitle: "Carpet, Tile & Floor Care Bucks County PA | PHL Clean",
    metaDescription: "Commercial carpet cleaning, tile and grout cleaning, re-grout and hard surface floor care in Bucks County, PA. Free on-site walkthrough — (215) 550-1414.",
    heroTagline: "Our home county, run out of Bensalem — from Doylestown professional offices to Levittown retail and the industrial corridor along the river.",
    intro: "Bucks County is where most of our work is, and the county covers two very different worlds. The northern and central boroughs are full of older professional buildings — historic stock with original tile, wooden trim to protect and floors that reward a careful hand. The lower county toward the river is newer and harder-working: retail, light industrial and medical, running VCT and carpet tile that takes real traffic. Crews live throughout the county, so response times here are genuinely short rather than merely promised.",
    neighborhoods: [
      "Doylestown", "Newtown", "Yardley", "Levittown", "Bristol", "Bensalem",
      "Langhorne", "Feasterville", "Warminster", "Warrington", "New Hope", "Quakertown",
    ],
    industries: [
      "Professional and corporate offices",
      "Medical and dental practices",
      "Retail centers and showrooms",
      "Schools and educational facilities",
      "Light industrial and warehouse offices",
      "Restaurants and food service",
      "Property management portfolios",
    ],
    whyLocal: "Our crews and supervisors live in Bucks. We are rarely more than twenty minutes from any account in the county, which is why a floor that needs looking at gets looked at.",
  },
  {
    slug: "montgomery-county",
    shortName: "Montgomery County",
    longName: "Montgomery County, PA",
    h1: "Commercial Floor Care in Montgomery County, PA",
    metaTitle: "Carpet, Tile & Floor Care Montgomery County PA | PHL Clean",
    metaDescription: "Commercial carpet cleaning, tile and grout cleaning, re-grout and hard surface floor care in Montgomery County, PA. Free on-site walkthrough — (215) 550-1414.",
    heroTagline: "Corporate parks, medical campuses and retail centers — the county with the most VCT corridor and carpet tile per square foot we service anywhere.",
    intro: "Montgomery County's building stock skews modern and large: corporate parks around King of Prussia, medical campuses, and retail centers built to a scale that makes floor care a genuine line item rather than an afterthought. Two things dominate the work here. Long VCT corridors, where regular burnishing postpones an expensive strip by a very long way. And open-plan carpet tile, where wear concentrates so tightly in the main runs that an interim program on those lanes alone keeps the whole floor looking level.",
    neighborhoods: [
      "King of Prussia", "Norristown", "Lansdale", "Plymouth Meeting",
      "Conshohocken", "Ambler", "Blue Bell", "Pottstown",
      "Willow Grove", "Abington", "Jenkintown", "Bryn Mawr",
    ],
    industries: [
      "Corporate parks and office campuses",
      "Medical campuses and outpatient facilities",
      "Retail centers and showrooms",
      "Schools and educational facilities",
      "Banks and credit unions",
      "Hotels and conference space",
      "Managed property common areas",
    ],
    whyLocal: "Montgomery County accounts get the same written interval and the same documented scope as our home county. Distance from Bensalem does not change the standard.",
  },
  {
    slug: "delaware-county",
    shortName: "Delaware County",
    longName: "Delaware County, PA",
    h1: "Commercial Floor Care in Delaware County, PA",
    metaTitle: "Carpet, Tile & Floor Care Delaware County PA | PHL Clean",
    metaDescription: "Commercial carpet cleaning, tile and grout cleaning, re-grout and hard surface floor care in Delaware County, PA. Free on-site walkthrough — (215) 550-1414.",
    heroTagline: "Offices, medical practices, retail and managed property — plus a lot of mid-century municipal and institutional buildings with floors worth restoring.",
    intro: "Delaware County runs from dense older boroughs out to suburban office and retail, and the floor work follows that split. There is a large stock of mid-century institutional and municipal buildings here — schools, civic offices, medical practices — often with original terrazzo or quarry tile buried under years of accumulated finish. Those floors are almost always worth restoring rather than covering. Alongside them, the suburban office and retail stock runs standard VCT and carpet tile on predictable maintenance cycles.",
    neighborhoods: [
      "Media", "Springfield", "Newtown Square", "Drexel Hill",
      "Havertown", "Upper Darby", "Chester", "Lansdowne",
      "Broomall", "Glen Mills", "Wallingford", "Aston",
    ],
    industries: [
      "Professional and corporate offices",
      "Medical and dental practices",
      "Schools and institutional buildings",
      "Retail and showrooms",
      "Restaurants and food service",
      "Gyms and fitness studios",
      "Managed property common areas",
    ],
    whyLocal: "Locally dispatched, which keeps response times short when a floor needs a look before its next scheduled visit rather than after it.",
  },
  {
    slug: "chester-county",
    shortName: "Chester County",
    longName: "Chester County, PA",
    h1: "Commercial Floor Care in Chester County, PA",
    metaTitle: "Carpet, Tile & Floor Care Chester County PA | PHL Clean",
    metaDescription: "Commercial carpet cleaning, tile and grout cleaning, re-grout and hard surface floor care in Chester County, PA. Free on-site walkthrough — (215) 550-1414.",
    heroTagline: "Historic downtown buildings and modern corporate campuses — often natural stone in one and polished concrete in the other, needing opposite chemistry.",
    intro: "Chester County puts the two hardest surfaces to get right side by side. The historic downtowns — West Chester, Kennett Square, Phoenixville — are full of natural stone: marble thresholds, limestone lobbies, travertine in renovated professional space. All of it is permanently etched by the acidic cleaners routinely used on ceramic grout, and that damage does not come back out. Meanwhile the corporate campuses out toward Exton and Malvern run polished concrete, which is dulled by exactly the sort of aggressive chemistry that stone needs protecting from. Identifying which is which is the first thing we do, every time.",
    neighborhoods: [
      "West Chester", "Exton", "Malvern", "Phoenixville",
      "Coatesville", "Downingtown", "Kennett Square", "Paoli",
      "Berwyn", "Frazer", "Chadds Ford", "Oxford",
    ],
    industries: [
      "Corporate campuses and office parks",
      "Historic downtown professional offices",
      "Medical and dental practices",
      "Retail and hospitality",
      "Schools and educational facilities",
      "Restaurants and food service",
      "Managed property common areas",
    ],
    whyLocal: "Chester County accounts get the same documented scope and the same accountability as our home county. There is no drop-off in standard the further west you go.",
  },
  {
    slug: "doylestown",
    shortName: "Doylestown",
    longName: "Doylestown, PA",
    h1: "Commercial Floor Care in Doylestown, PA",
    metaTitle: "Carpet, Tile & Floor Care Doylestown PA | PHL Clean",
    metaDescription: "Commercial carpet cleaning, tile and grout cleaning, re-grout and hard surface floor care in Doylestown, PA. Free on-site walkthrough — (215) 550-1414.",
    heroTagline: "Professional offices, medical practices and historic borough buildings — where the floor is often older and more valuable than it first looks.",
    intro: "Doylestown's commercial stock is heavily professional — law, medical, dental, financial — and a large share of it sits in converted historic buildings around the borough. Those conversions routinely hide original tile beneath later flooring, and they nearly always have wooden trim, thresholds and staircases immediately adjacent to whatever we are working on. Both facts change how a job is run: slower, with more protection, and with the assumption that what is underneath might be worth keeping.",
    neighborhoods: [
      "Doylestown Borough", "Doylestown Township", "Cross Keys",
      "Buckingham (adjacent)", "New Britain (adjacent)", "Furlong (adjacent)",
    ],
    industries: [
      "Legal and financial professional offices",
      "Medical and dental practices",
      "Historic borough commercial buildings",
      "Retail and galleries",
      "Restaurants and food service",
      "Schools and educational facilities",
    ],
    whyLocal: "About twenty-five minutes from our Bensalem base, and a route our crews run weekly. Evening and weekend scheduling is standard, which matters in a borough where daytime parking is its own problem.",
  },
  {
    slug: "newtown",
    shortName: "Newtown",
    longName: "Newtown, PA",
    h1: "Commercial Floor Care in Newtown, PA",
    metaTitle: "Carpet, Tile & Floor Care Newtown PA | PHL Clean",
    metaDescription: "Commercial carpet cleaning, tile and grout cleaning, re-grout and hard surface floor care in Newtown, PA. Free on-site walkthrough — (215) 550-1414.",
    heroTagline: "Office parks, medical suites and the historic borough — carpet tile programs and hard surface care on a schedule that suits professional hours.",
    intro: "Newtown splits neatly between the office parks off the bypass and the historic borough along State Street. The office parks are carpet-tile heavy, with wear concentrating in reception and the main circulation runs, which makes them ideal candidates for interim encapsulation between restorative cleans. The borough buildings are older, smaller and more varied, and more likely to need a proper look at what is under the current floor before anything is quoted.",
    neighborhoods: [
      "Newtown Borough", "Newtown Township", "Newtown Grant",
      "Wrightstown (adjacent)", "Upper Makefield (adjacent)",
    ],
    industries: [
      "Office parks and professional suites",
      "Medical and dental practices",
      "Historic borough retail and offices",
      "Banks and financial services",
      "Restaurants and food service",
      "Schools and childcare facilities",
    ],
    whyLocal: "Twenty minutes from Bensalem and firmly inside our home county. Same-week walkthroughs are normal here.",
  },
  {
    slug: "levittown",
    shortName: "Levittown",
    longName: "Levittown, PA",
    h1: "Commercial Floor Care in Levittown, PA",
    metaTitle: "Carpet, Tile & Floor Care Levittown PA | PHL Clean",
    metaDescription: "Commercial carpet cleaning, tile and grout cleaning, re-grout and hard surface floor care in Levittown, PA. Free on-site walkthrough — (215) 550-1414.",
    heroTagline: "Retail, medical and light industrial — high-traffic VCT and entrance zones that take everything the parking lot brings in.",
    intro: "Levittown is retail, medical and light industrial, and the floors take it. Shopping-center VCT here goes through entrance zones that see thousands of feet a week, plus a full winter of salt and slush that abrades finish faster than anything else in the calendar. The honest answer for most buildings in this area is not more frequent stripping — it is better entry matting, a proper burnishing cycle, and a planned strip once a year rather than an emergency one every eight months.",
    neighborhoods: [
      "Bristol Township sections", "Falls Township sections", "Middletown Township sections",
      "Tullytown (adjacent)", "Fairless Hills (adjacent)",
    ],
    industries: [
      "Retail centers and shopping plazas",
      "Medical and dental practices",
      "Light industrial and warehouse offices",
      "Restaurants and food service",
      "Gyms and fitness studios",
      "Schools and childcare facilities",
    ],
    whyLocal: "Fifteen minutes up the road from our Bensalem base, in the heart of our home county. Overnight and Sunday work is routine for retail here.",
  },
  {
    slug: "bristol",
    shortName: "Bristol",
    longName: "Bristol, PA",
    h1: "Commercial Floor Care in Bristol, PA",
    metaTitle: "Carpet, Tile & Floor Care Bristol PA | PHL Clean",
    metaDescription: "Commercial carpet cleaning, tile and grout cleaning, re-grout and hard surface floor care in Bristol, PA. Free on-site walkthrough — (215) 550-1414.",
    heroTagline: "Historic riverfront borough and the industrial corridor — quarry tile, old terrazzo, and floors that have been coated rather than cleaned for years.",
    intro: "Bristol Borough has some of the oldest commercial buildings we work in, and the riverfront industrial corridor beside it has some of the hardest-used. In the borough, we regularly find original quarry tile or terrazzo under layers of finish that were applied instead of ever properly stripping what was there. Those floors usually clean up far better than the owner expects. In the industrial buildings the problem is the opposite and simpler: sealed concrete taking heavy traffic, which needs the right neutral chemistry rather than more aggressive cleaning.",
    neighborhoods: [
      "Bristol Borough", "Bristol Township", "Croydon",
      "Edgely", "Newportville", "Tullytown (adjacent)",
    ],
    industries: [
      "Historic borough commercial buildings",
      "Industrial and warehouse facilities",
      "Restaurants and food service",
      "Medical and dental practices",
      "Retail and showrooms",
      "Municipal and institutional buildings",
    ],
    whyLocal: "Ten minutes from our Bensalem base — the closest area we cover after Bensalem itself, and a place our crews know building by building.",
  },
  {
    slug: "langhorne",
    shortName: "Langhorne",
    longName: "Langhorne, PA",
    h1: "Commercial Floor Care in Langhorne, PA",
    metaTitle: "Carpet, Tile & Floor Care Langhorne PA | PHL Clean",
    metaDescription: "Commercial carpet cleaning, tile and grout cleaning, re-grout and hard surface floor care in Langhorne, PA. Free on-site walkthrough — (215) 550-1414.",
    heroTagline: "The Oxford Valley corridor and the medical cluster around it — retail entrance zones and healthcare flooring, both with no tolerance for downtime.",
    intro: "Langhorne carries two demanding kinds of floor. The Oxford Valley retail corridor runs large VCT and tile areas where entrance zones take the whole parking lot's worth of grit, and where the floor has to be back in service before opening without exception. And the medical cluster around the hospital brings sheet vinyl with coved edges, waiting-room carpet, and a genuine need for measured slip resistance rather than assumed. Both are scheduled overnight, with cure times we state precisely rather than optimistically.",
    neighborhoods: [
      "Langhorne Borough", "Langhorne Manor", "Oxford Valley",
      "Penndel (adjacent)", "Middletown Township sections", "Hulmeville (adjacent)",
    ],
    industries: [
      "Retail along the Oxford Valley corridor",
      "Medical practices and outpatient facilities",
      "Corporate and professional offices",
      "Restaurants and food service",
      "Hotels and hospitality",
      "Schools and childcare facilities",
    ],
    whyLocal: "Twelve minutes from Bensalem. Overnight work here is standard, and we hand you an exact time the floor is ready rather than a hopeful one.",
  },
  // ---------------------------------------------------------------
  // Philadelphia neighborhoods. Each sits under /locations/philadelphia/
  // and gets its own page, but not its own service combo pages — the
  // Philadelphia combos already cover the city, and near-duplicate combo
  // pages per neighborhood would be thin.
  // ---------------------------------------------------------------
  {
    slug: "northeast-philadelphia",
    parent: "philadelphia",
    shortName: "Northeast Philadelphia",
    longName: "Northeast Philadelphia, PA",
    h1: "Commercial Floor Care in Northeast Philadelphia",
    metaTitle: "Commercial Floor Care Northeast Philadelphia | PHL Clean",
    metaDescription: "Commercial carpet, tile and grout, and VCT floor care in Northeast Philadelphia — Mayfair to Somerton. Free on-site walkthrough — (215) 550-1414.",
    heroTagline: "The part of Philadelphia that starts where Bensalem ends. Strip centers, medical offices, light industrial and parish buildings — and a short drive from our base.",
    intro: "Northeast Philadelphia is the closest part of the city to us — Bensalem shares a border with it along the Poquessing Creek. The commercial mix is different from Center City. Strip centers along Roosevelt Boulevard, Cottman Avenue and Frankford Avenue run VCT and tile in entrance zones that take everything the parking lot brings in. Medical and dental offices fill converted storefronts and low-rise buildings. Light industrial parks out toward the airport have sealed concrete on the floor and carpet tile in the office. And the neighborhood's churches, parish halls and schools carry decades-old VCT and terrazzo that are usually worth restoring rather than covering.",
    neighborhoods: [
      "Mayfair", "Frankford", "Tacony", "Holmesburg", "Fox Chase", "Rhawnhurst",
      "Bustleton", "Somerton", "Torresdale", "Oxford Circle", "Castor Gardens", "Parkwood",
    ],
    industries: [
      "Retail and strip centers along the Boulevard and Cottman Avenue",
      "Medical and dental offices",
      "Light industrial and warehouse offices",
      "Churches, parish halls and parochial schools",
      "Bank and credit union branches",
      "Restaurants and food service",
      "Property management portfolios",
    ],
    whyLocal: "From our base in Bensalem, most of the Northeast is a short drive. Walkthroughs here are easier to fit in quickly than almost anywhere else in the city, and so is coming back to look at a problem before it turns into a bigger job.",
    sections: [
      {
        heading: "Entrance zones on the Boulevard",
        paragraphs: [
          "Shopping-center floors in the Northeast fail from the door inward. Grit and winter salt come in on every pair of shoes, and the first twenty feet of VCT lose their finish months before the rest of the store. The usual response is to strip the whole floor more often. The better answer is usually narrower: proper entry matting, a burnishing cycle that keeps the traffic lanes protected, and a scheduled strip and refinish once a year instead of an emergency one.",
          "Where the floor is ceramic or quarry tile, the grout at the entrance goes dark first. Pressure extraction gets most of it back. Where it doesn't, color sealing or re-grouting the worst run is cheaper than retiling — we'll tell you which one you are looking at.",
        ],
      },
      {
        heading: "Older buildings that are worth a closer look",
        paragraphs: [
          "A lot of the Northeast was built out in the middle of the last century, and the institutional buildings from that era — parish halls, school corridors, older office buildings — often have terrazzo or durable commercial tile under layers of finish that were applied instead of ever stripping what was there. Those floors usually come back better than anyone expects. They also need identifying before work starts, because the wrong chemistry on terrazzo does damage you can't undo.",
        ],
      },
    ],
  },
  {
    slug: "center-city-philadelphia",
    parent: "philadelphia",
    shortName: "Center City",
    longName: "Center City Philadelphia, PA",
    h1: "Commercial Floor Care in Center City Philadelphia",
    metaTitle: "Commercial Floor Care Center City Philadelphia | PHL Clean",
    metaDescription: "Commercial carpet cleaning, carpet tile programs, and lobby tile and terrazzo care in Center City Philadelphia. After-hours. Walkthrough: (215) 550-1414.",
    heroTagline: "Office floors, lobbies and ground-floor retail — scheduled around building access, freight elevators and the hours your tenants aren't there.",
    intro: "Center City floor work is mostly two things: carpet tile on office floors, and hard surface in lobbies and ground-floor retail. Office carpet wears in narrow, predictable lanes — elevator lobbies, the run from reception to the kitchen, the corridor past the conference rooms — which makes it the clearest case there is for an interim maintenance program instead of waiting until the whole floor looks tired. Lobbies are often stone, terrazzo or large-format porcelain, and they get judged by every visitor who walks in.",
    neighborhoods: [
      "Market East", "Rittenhouse", "Logan Square", "Washington Square West",
      "Old City", "Society Hill", "Chinatown", "Callowhill",
    ],
    industries: [
      "Office floors in managed buildings",
      "Building lobbies and common areas",
      "Ground-floor retail and showrooms",
      "Law, accounting and professional offices",
      "Medical and dental suites",
      "Restaurants — after-hours kitchen and dining floors",
    ],
    whyLocal: "Most Center City work happens at night or on weekends, and almost all of it involves a building's own rules — insurance certificates, freight elevator reservations, loading dock windows. We build those into the schedule at the walkthrough so they aren't discovered on the night.",
    sections: [
      {
        heading: "Carpet tile on the office floors",
        paragraphs: [
          "Carpet tile in an office suite almost never wears evenly. The lanes go gray first, and the rest of the floor still looks acceptable. Low-moisture encapsulation on those lanes between restorative extractions keeps them from falling behind, and it lets the floor go back into use quickly — which matters when the space is occupied the next morning.",
          "Interval matters more than the machine. We set it from how your floor is actually used rather than a calendar, and we'll tell you when a tile is past saving and is cheaper to swap than to keep cleaning.",
        ],
      },
      {
        heading: "Lobbies: identify the stone first",
        paragraphs: [
          "Lobby floors are where the wrong product does the most expensive damage. Marble and terrazzo are calcium-based and etch under the acidic cleaners that are perfectly safe on porcelain. We identify the surface before we quote, and the method follows the floor — not the other way around.",
        ],
      },
    ],
  },
  {
    slug: "university-city-philadelphia",
    parent: "philadelphia",
    shortName: "University City",
    longName: "University City, Philadelphia, PA",
    h1: "Commercial Floor Care in University City",
    metaTitle: "Commercial Floor Care University City Philadelphia",
    metaDescription: "Carpet, tile and grout, and VCT floor care for offices, labs-adjacent space, retail and food service in University City, Philadelphia. (215) 550-1414.",
    heroTagline: "Offices, research-adjacent space, student-facing retail and food service — planned around academic calendars and building access rules.",
    intro: "University City runs on the academic calendar. The best windows for heavy floor work — a VCT strip and refinish, re-grouting a restroom run, restorative carpet extraction across a whole floor — are the breaks, when the buildings empty out. Plan the summer in the spring and it goes smoothly. Plan it in July and you are competing for the same few weeks as everyone else. Around the universities and hospital campuses there are offices, research-adjacent buildings, and a dense strip of restaurants and retail that serve them.",
    neighborhoods: [
      "University City", "Powelton Village", "Spruce Hill", "Cedar Park",
      "Mantua (adjacent)", "West Philadelphia",
    ],
    industries: [
      "Offices and administrative space",
      "Research-adjacent and science-park buildings",
      "Student-facing retail",
      "Restaurants and food service",
      "Medical and dental practices",
      "Managed residential common areas",
    ],
    whyLocal: "Many buildings here have their own access rules — rooms we won't be allowed into, hours we can work, who needs to escort us. We write the scope around them rather than assuming the whole floor is ours.",
    sections: [
      {
        heading: "Food service floors on a student schedule",
        paragraphs: [
          "Restaurant kitchens here are usually quarry tile, and the grout between it goes dark from grease long before the tile does. Pressure extraction with the right degreasing chemistry empties the joint instead of pushing the soil deeper. It's done after close, with the floor back to you before the morning prep — and slip resistance matters more than shine, so we don't put anything on a kitchen floor that makes it slicker.",
        ],
      },
      {
        heading: "Corridors that take a full semester",
        paragraphs: [
          "VCT corridors in busy buildings lose their finish at the doors and down the middle. A burnish and recoat during a short break can buy a full term before a strip is due. We'll tell you which one your floor needs — the bigger job isn't always the right one.",
        ],
      },
    ],
  },
  {
    slug: "south-philadelphia",
    parent: "philadelphia",
    shortName: "South Philadelphia",
    longName: "South Philadelphia, PA",
    h1: "Commercial Floor Care in South Philadelphia & the Navy Yard",
    metaTitle: "Commercial Floor Care South Philadelphia | PHL Clean",
    metaDescription: "Carpet, tile and grout, and hard surface floor care for Navy Yard offices, South Philly restaurants and storefronts. Free walkthrough: (215) 550-1414.",
    heroTagline: "Navy Yard offices, East Passyunk restaurants and corner storefronts — from modern carpet tile to old mosaic tile in the doorway.",
    intro: "South Philadelphia covers two very different kinds of building. The Navy Yard is a business campus — converted historic naval buildings and newer offices, mostly carpet tile, sealed or polished concrete, and porcelain in the common areas. The neighborhoods north of it are restaurants, corner storefronts and small offices in older buildings, where the floor might be quarry tile in the kitchen, ceramic mosaic in the vestibule, and a century of patching in between.",
    neighborhoods: [
      "Navy Yard", "East Passyunk", "Bella Vista", "Queen Village", "Pennsport",
      "Point Breeze", "Graduate Hospital (adjacent)", "Whitman", "Packer Park",
    ],
    industries: [
      "Navy Yard offices and campus buildings",
      "Restaurants — kitchens and dining rooms",
      "Corner retail and storefronts",
      "Medical and dental practices",
      "Gyms and fitness studios",
      "Small professional offices",
    ],
    whyLocal: "Restaurant work here happens after close, and storefront work happens when the street parking allows it. We plan load-in at the walkthrough so the night isn't spent looking for somewhere to put the van.",
    sections: [
      {
        heading: "Restaurant kitchens",
        paragraphs: [
          "Quarry tile in a working kitchen gets mopped every night and still goes dark at the grout, because a mop moves grease around instead of removing it. Pressure extraction pulls it out of the joint. Where the grout is eroded or missing, cleaning won't fix it, and we'll say so: re-grouting the worst runs is what stops water getting under the tile.",
          "We never leave a kitchen floor slicker than we found it. The relevant standard is ANSI A137.1, which calls for a wet dynamic coefficient of friction of at least 0.42 on level interior tile that is walked on when wet. Chemistry and any sealer are chosen with that in mind.",
        ],
      },
      {
        heading: "Old storefronts",
        paragraphs: [
          "Plenty of South Philly storefronts still have their original small ceramic mosaic in the entry. It's tougher than it looks and usually cleans up well — the grout is what gives out. Color sealing can give it a uniform look again. Where the joints are failing, re-grouting is the honest fix.",
        ],
      },
    ],
  },
  {
    slug: "fishtown-northern-liberties",
    parent: "philadelphia",
    shortName: "Fishtown & Northern Liberties",
    longName: "Fishtown & Northern Liberties, Philadelphia, PA",
    h1: "Commercial Floor Care in Fishtown, Northern Liberties & the River Wards",
    metaTitle: "Commercial Floor Care Fishtown & Northern Liberties",
    metaDescription: "Concrete, quarry tile, carpet tile and grout care for converted warehouses, restaurants and offices in Fishtown and Northern Liberties. (215) 550-1414.",
    heroTagline: "Converted industrial buildings — sealed concrete, quarry tile that has been coated instead of cleaned, and new offices inside old walls.",
    intro: "The River Wards are full of industrial buildings with a second life: offices and studios on concrete floors, restaurants and breweries in old factory space, retail along Frankford and Girard Avenues. Concrete is the common thread. Sealed concrete needs neutral chemistry and the right pad, not aggressive cleaning that strips the sealer. Polished concrete needs maintaining, not coating. And under a lot of old finish in these buildings there is quarry tile or terrazzo that has never been properly cleaned.",
    neighborhoods: [
      "Fishtown", "Northern Liberties", "Kensington", "Port Richmond",
      "East Kensington", "Olde Kensington", "Callowhill (adjacent)",
    ],
    industries: [
      "Converted warehouse and loft offices",
      "Restaurants, bars and breweries",
      "Retail along Frankford and Girard Avenues",
      "Studios, gyms and fitness spaces",
      "Light industrial and maker space",
      "Managed residential common areas",
    ],
    whyLocal: "Old industrial buildings rarely have a straightforward load-in. We check the door widths, the freight elevator if there is one, and where water can be disposed of — at the walkthrough, not on the night.",
    sections: [
      {
        heading: "Concrete: maintain it, don't coat it",
        paragraphs: [
          "The most common problem we see on concrete in converted space is buildup — layers of topical finish or the wrong cleaner leaving residue that dulls the floor and holds dirt. The fix is usually to take it back to the sealer or the polish and then maintain it with neutral chemistry and a regular burnish. It's less work than people expect and costs less than another coat.",
        ],
      },
      {
        heading: "Brewery and kitchen floors",
        paragraphs: [
          "Quarry tile and sealed concrete in food and drink spaces take water, sugar, grease and constant traffic. The grout on tile floors is the weak point. Pressure extraction gets most of it back, and failing joints get re-grouted before water gets underneath. Slip resistance comes before appearance, every time.",
        ],
      },
    ],
  },
  {
    slug: "northwest-philadelphia",
    parent: "philadelphia",
    shortName: "Northwest Philadelphia",
    longName: "Northwest Philadelphia, PA",
    h1: "Commercial Floor Care in Manayunk, Chestnut Hill & Northwest Philadelphia",
    metaTitle: "Commercial Floor Care Manayunk & Chestnut Hill | PHL Clean",
    metaDescription: "Carpet, tile and grout, and hard surface floor care for storefronts, mill offices and practices in Manayunk, Roxborough, East Falls and Chestnut Hill.",
    heroTagline: "Main Street and Germantown Avenue storefronts, offices in converted mills, and older buildings with original tile worth keeping.",
    intro: "Northwest Philadelphia's commercial streets are older and smaller-scale than most of the city. Manayunk's Main Street and Chestnut Hill's Germantown Avenue are lined with storefronts in buildings that have been renovated many times, and the floor often shows it — original tile in one room, VCT in the next, carpet over something nobody has looked at in years. The mill buildings along the Schuylkill in Manayunk and East Falls now hold offices, with concrete and heavy timber alongside newer carpet tile.",
    neighborhoods: [
      "Manayunk", "Roxborough", "East Falls", "Chestnut Hill",
      "Mount Airy", "Germantown", "Wissahickon",
    ],
    industries: [
      "Main Street and Germantown Avenue retail",
      "Offices in converted mill buildings",
      "Restaurants and food service",
      "Medical, dental and therapy practices",
      "Schools and institutional buildings",
      "Churches and community buildings",
    ],
    whyLocal: "Steep streets and limited parking make load-in the first thing to plan on a Main Street job. We work it out at the walkthrough, and most storefront work is done before opening or after close.",
    sections: [
      {
        heading: "Storefronts with a history",
        paragraphs: [
          "Older retail buildings here often have several floors stacked on top of each other. Before quoting a strip, a re-grout or a carpet extraction, we look at what's actually there and whether something underneath is worth more than what's on top. Sometimes the best job is restoring the original tile. Sometimes it's leaving it alone.",
        ],
      },
      {
        heading: "Mill buildings and mixed floors",
        paragraphs: [
          "Offices in converted mills tend to mix carpet tile, sealed concrete and tile in the same suite. Each surface gets its own method — extraction or encapsulation for the carpet, neutral cleaning and burnishing for the concrete, pressure extraction for the tile and grout — on one schedule, so you're not booking three vendors.",
        ],
      },
    ],
  },
];

/** City and county pages — not the Philadelphia neighborhood pages. */
export const topLevelLocations = locations.filter(l => !l.parent);

/** Locations that get service × location combo pages. */
export const COMBO_LOCATION_SLUGS = topLevelLocations.map(l => l.slug);

/** County and home-base combos are indexable. Small-town combos stay live but noindexed. */
export const INDEXED_COMBO_LOCATION_SLUGS = [
  'philadelphia',
  'bensalem',
  'bucks-county',
  'montgomery-county',
  'delaware-county',
  'chester-county',
];

export function childLocations(slug: string): LocationData[] {
  return locations.filter(l => l.parent === slug);
}

export function getLocation(slug: string): LocationData | undefined {
  return locations.find(l => l.slug === slug);
}
