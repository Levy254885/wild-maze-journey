import { media } from "./media";

export type Region = "Kenya" | "Tanzania" | "Zanzibar & The Coast";

export const regions: Region[] = ["Kenya", "Tanzania", "Zanzibar & The Coast"];

export interface Destination {
  slug: string;
  name: string;
  region: Region;
  country: string;
  blurb: string;
  image: string;
  best: string;
}

/** Destinations WildMaze Safaris operates in. */
export const destinations: Destination[] = [
  {
    slug: "maasai-mara",
    name: "Maasai Mara",
    region: "Kenya",
    country: "Kenya",
    blurb:
      "Open grassland, river crossings and the densest concentration of big cats in East Africa. The stage for the Great Migration between July and October.",
    image: media.savannah,
    best: "July – October for the migration; year-round for big cats",
  },
  {
    slug: "amboseli",
    name: "Amboseli",
    region: "Kenya",
    country: "Kenya",
    blurb:
      "Great elephant herds crossing dust and swamp beneath the snows of Kilimanjaro. Wide horizons and some of the most photographed light in Africa.",
    image: media.kilimanjaro,
    best: "June – October, January – February",
  },
  {
    slug: "samburu",
    name: "Samburu",
    region: "Kenya",
    country: "Kenya",
    blurb:
      "Northern drylands along the Ewaso Ng'iro river, home to species found nowhere further south — Grevy's zebra, reticulated giraffe, gerenuk.",
    image: media.giraffe,
    best: "June – October",
  },
  {
    slug: "laikipia",
    name: "Laikipia",
    region: "Kenya",
    country: "Kenya",
    blurb:
      "Private conservancies where walking, horseback riding and night drives are possible, and where rhino conservation happens in front of you.",
    image: media.rhinos,
    best: "Year-round",
  },
  {
    slug: "tsavo",
    name: "Tsavo",
    region: "Kenya",
    country: "Kenya",
    blurb:
      "Immense, red-earthed and quiet. Volcanic hills, lava flows and the spring-fed clarity of Mzima, with far fewer vehicles than the classic parks.",
    image: media.elephantMist,
    best: "June – October",
  },
  {
    slug: "great-rift-lakes",
    name: "Great Rift Lakes",
    region: "Kenya",
    country: "Kenya",
    blurb:
      "Naivasha and Nakuru — freshwater and soda lakes framed by escarpments, boat safaris, birdlife in the thousands and easy road access from Nairobi.",
    image: media.lakesideDining,
    best: "Year-round",
  },
  {
    slug: "serengeti",
    name: "Serengeti",
    region: "Tanzania",
    country: "Tanzania",
    blurb:
      "Endless plains that carry the migration south into the calving grounds. Vast, cinematic and best reached by light aircraft.",
    image: media.giraffeSunset,
    best: "December – March (calving), June – July (river crossings)",
  },
  {
    slug: "ngorongoro",
    name: "Ngorongoro",
    region: "Tanzania",
    country: "Tanzania",
    blurb:
      "A collapsed caldera holding a self-contained world of lion, elephant and black rhino, with the highland forest and Maasai grazing lands above.",
    image: media.lions,
    best: "Year-round",
  },
  {
    slug: "zanzibar",
    name: "Zanzibar",
    region: "Zanzibar & The Coast",
    country: "Tanzania",
    blurb:
      "Spice island shorelines, Stone Town's carved doors and dhows on a turquoise channel — the natural close to a bush journey.",
    image: media.beach,
    best: "June – October, December – February",
  },
  {
    slug: "diani-watamu",
    name: "Diani & Watamu",
    region: "Zanzibar & The Coast",
    country: "Kenya",
    blurb:
      "Kenya's own coast: white sand, coral gardens, marine reserves and a short flight from the Mara.",
    image: media.coral,
    best: "December – March, July – October",
  },
];

export interface SafariSection {
  title: string;
  body: string;
}

export interface Safari {
  slug: string;
  name: string;
  location: string;
  region: Region;
  /** visual weight in the collection layout */
  scale: "full" | "tall" | "wide";
  summary: string;
  intro: string;
  hero: string;
  images: string[];
  duration: string;
  highlights: string[];
  sections: SafariSection[];
}

export const safaris: Safari[] = [
  {
    slug: "great-migration",
    name: "The Great Migration",
    location: "Maasai Mara & Serengeti",
    region: "Kenya",
    scale: "full",
    summary:
      "Front-row viewing of the wildebeest migration, with balloon flights at first light and breakfast laid out on the plains.",
    intro:
      "For a few months each year the Mara-Serengeti ecosystem carries more than a million animals across it. We position you where the herds are — not where the crowds are — with a private guide who reads the river lines daily.",
    hero: media.savannah,
    images: [media.balloon, media.bushBreakfast, media.savannah, media.lions],
    duration: "7 – 10 nights",
    highlights: [
      "Front-row viewing of the wildebeest migration",
      "Hot air balloon safari over the plains",
      "Champagne bush breakfast",
      "Professional photography opportunities",
    ],
    sections: [
      {
        title: "The journey",
        body: "Days follow the herds rather than a fixed schedule. Early departures for the river lines, long unhurried mornings with the cats, and afternoons that end wherever the light is best. Your guide holds the plan loosely so the wildlife can change it.",
      },
      {
        title: "Accommodation",
        body: "Luxury tented camps and lodges chosen for position first — camps close enough to the crossing points that you are out before other vehicles arrive, with the comfort of proper beds, hot water and quiet service when you return.",
      },
      {
        title: "Wildlife",
        body: "Wildebeest and zebra in their hundreds of thousands, and the predators that follow them: lion prides, cheetah on the termite mounds, leopard in the riverine forest, and crocodile at the crossings.",
      },
      {
        title: "Dining",
        body: "Champagne breakfasts set up on the plains, sundowners on a rise as the herds settle, and dinner under canvas or open sky.",
      },
    ],
  },
  {
    slug: "tailor-made-luxury",
    name: "Tailor-Made Luxury",
    location: "Kenya & East Africa",
    region: "Kenya",
    scale: "tall",
    summary:
      "A bespoke itinerary built around you — private 4×4 Land Cruiser, luxury camps and a personal safari concierge from arrival to departure.",
    intro:
      "No two journeys we plan are the same. We begin with a conversation about how you like to travel, then build the route, the camps and the pace around that.",
    hero: media.tentedSuite,
    images: [media.tentedSuite, media.gameDrive, media.lakesideDining, media.savannah],
    duration: "From 5 nights",
    highlights: [
      "Bespoke itineraries across Kenya and East Africa",
      "Private 4×4 Land Cruiser safaris",
      "Luxury lodges and tented camps",
      "Personal safari concierge",
    ],
    sections: [
      {
        title: "How it works",
        body: "You tell us what matters — wildlife, photography, walking, children, privacy, time. We propose a route, refine it with you, and hold every element together so that the journey runs without a single question falling to you.",
      },
      {
        title: "Accommodation",
        body: "Hand-selected lodges and tented camps, from classic canvas in the conservancies to contemporary suites with private decks and plunge pools.",
      },
      {
        title: "Concierge",
        body: "A personal safari concierge on call throughout, coordinating flights, transfers, dietary requests, celebrations and anything that arises en route.",
      },
    ],
  },
  {
    slug: "exclusive-private",
    name: "Exclusive Private Safari",
    location: "Private conservancies, Kenya",
    region: "Kenya",
    scale: "wide",
    summary:
      "Your own guide, your own vehicle, your own hours. Designed for families and couples who would rather not share the morning.",
    intro:
      "Privacy changes a safari entirely. With a dedicated guide and vehicle, the day belongs to you — you leave when you want, stay as long as you like and stop for the things others drive past.",
    hero: media.gameDrive,
    images: [media.gameDrive, media.sundownerRock, media.elephants, media.tentedSuite],
    duration: "From 4 nights",
    highlights: [
      "Private guide and vehicle",
      "Flexible daily schedules",
      "Family and honeymoon safaris",
      "VIP airport meet-and-greet",
    ],
    sections: [
      {
        title: "Your guide",
        body: "Experienced, licensed guides who know the conservancies personally and who tailor the day to your interests, whether that is a single leopard sighting held for an hour or a wide loop across the plains.",
      },
      {
        title: "Arrival",
        body: "VIP meet-and-greet on landing, fast-track assistance where available and a luxury transfer straight into the journey.",
      },
    ],
  },
  {
    slug: "fly-in",
    name: "Luxury Fly-In Safari",
    location: "Remote conservancies, East Africa",
    region: "Kenya",
    scale: "tall",
    summary:
      "Scheduled and private charter flights that trade long road transfers for more time in the wild.",
    intro:
      "The most remote and least visited country in East Africa is reached from the air. A fly-in itinerary turns a full day of driving into forty minutes over the escarpment.",
    hero: media.flyIn,
    images: [media.flyIn, media.giraffeSunset, media.kilimanjaro, media.tentedSuite],
    duration: "From 5 nights",
    highlights: [
      "Scheduled and private charter flights",
      "Seamless transfers",
      "Access to remote conservancies",
      "Time-saving itineraries",
    ],
    sections: [
      {
        title: "The advantage",
        body: "Multiple ecosystems in a single journey without losing days to the road — the Mara in the morning, Samburu by lunch, the coast the following week.",
      },
      {
        title: "Logistics",
        body: "Airstrip transfers, luggage allowances and camp pick-ups are all arranged and confirmed before you travel.",
      },
    ],
  },
  {
    slug: "beach-and-bush",
    name: "Beach & Bush",
    location: "Maasai Mara with Diani, Watamu or Zanzibar",
    region: "Zanzibar & The Coast",
    scale: "wide",
    summary:
      "Dust, then salt. A classic safari followed by the Indian Ocean — dhow cruises, coral gardens and long empty beaches.",
    intro:
      "The oldest and still the best combination in East Africa: a week of early mornings in the bush, then a week of doing very little at all beside warm water.",
    hero: media.beach,
    images: [media.beach, media.coral, media.savannah, media.lakesideDining],
    duration: "10 – 14 nights",
    highlights: [
      "Maasai Mara combined with Diani, Watamu or Zanzibar",
      "Luxury beach resorts",
      "Private dhow cruises",
      "Snorkeling and diving excursions",
    ],
    sections: [
      {
        title: "The coast",
        body: "Luxury beach resorts and private villas on Kenya's south and north coasts or on Zanzibar, with marine reserves within reach for snorkelling and diving.",
      },
      {
        title: "On the water",
        body: "Private dhow cruises at sunset, reef excursions with local skippers and, for divers, guided sites along the coral gardens.",
      },
    ],
  },
  {
    slug: "photography",
    name: "Photography Safari",
    location: "Maasai Mara, Amboseli & Samburu",
    region: "Kenya",
    scale: "tall",
    summary:
      "Guided by experienced wildlife photographers, in vehicles built for the camera and timed to the golden hour.",
    intro:
      "A photographic safari is a different discipline: lower angles, longer waits, positioning for light rather than proximity. Our photographic guides plan the day around the frame you want.",
    hero: media.lions,
    images: [media.lions, media.elephantMist, media.giraffe, media.gameDrive],
    duration: "From 6 nights",
    highlights: [
      "Guided by experienced wildlife photographers",
      "Special photography vehicles",
      "Golden-hour game drives",
      "Photography workshops",
    ],
    sections: [
      {
        title: "Vehicles",
        body: "Open-sided vehicles with bean bags, camera mounts, charging and space to work — and no more than a few guests per row.",
      },
      {
        title: "Workshops",
        body: "Field and evening sessions covering settings, composition and editing, pitched to your level from first safari to portfolio.",
      },
    ],
  },
  {
    slug: "cultural-immersion",
    name: "Cultural Immersion",
    location: "Maasai Mara & Samburu",
    region: "Kenya",
    scale: "wide",
    summary:
      "Time with Maasai and Samburu communities, traditional cuisine and the conservation projects they lead.",
    intro:
      "The land you travel through is lived in. We arrange visits that are invited, paid for fairly and spent in conversation rather than performance.",
    hero: media.walkingSafari,
    images: [media.walkingSafari, media.bushBreakfast, media.savannah, media.giraffe],
    duration: "Added to any itinerary",
    highlights: [
      "Authentic Maasai village visits",
      "Samburu cultural experiences",
      "Traditional cuisine experiences",
      "Community conservation projects",
    ],
    sections: [
      {
        title: "The visits",
        body: "Arranged directly with community hosts, unhurried and small in number, with a guide who translates and gives context rather than narrating over people.",
      },
      {
        title: "Community conservation",
        body: "Where you would like to see it, we include the conservancy and community projects that the land you are visiting supports.",
      },
    ],
  },
  {
    slug: "conservation",
    name: "Conservation Journeys",
    location: "Laikipia & northern Kenya",
    region: "Kenya",
    scale: "tall",
    summary:
      "Rhino conservation visits, wildlife research encounters, tree planting and sustainable tourism programmes.",
    intro:
      "Some of the most affecting days on safari are spent with the people protecting it. These journeys are built around access to that work.",
    hero: media.conservation,
    images: [media.conservation, media.rhinos, media.elephants, media.savannah],
    duration: "From 5 nights",
    highlights: [
      "Rhino conservation visits",
      "Tree planting",
      "Wildlife research encounters",
      "Sustainable tourism programmes",
    ],
    sections: [
      {
        title: "In the field",
        body: "Time with rangers and researchers in the conservancies, understanding tracking, monitoring and the daily reality of protecting a population.",
      },
      {
        title: "Contribution",
        body: "Participation in tree planting and habitat programmes where they are running and where an extra pair of hands is genuinely useful.",
      },
    ],
  },
];

export const getSafari = (slug: string) => safaris.find((s) => s.slug === slug);
