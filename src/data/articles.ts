import { media } from "./media";

export interface Article {
  slug: string;
  title: string;
  category: "Safari Guides" | "Destination Guides" | "Wildlife" | "Travel Tips";
  excerpt: string;
  readingTime: string;
  date: string;
  image: string;
  /** Editorial body — paragraphs. */
  body: string[];
}

export const articles: Article[] = [
  {
    slug: "when-to-see-the-great-migration",
    title: "When to see the Great Migration",
    category: "Safari Guides",
    excerpt:
      "The herds move on rainfall, not a calendar. A month-by-month reading of where to be, and why the river is only part of the story.",
    readingTime: "6 min",
    date: "2026-06-18",
    image: media.savannah,
    body: [
      "The migration is often described as an event. It is closer to a continuous circuit — well over a million wildebeest, joined by zebra and gazelle, following rainfall around the Mara-Serengeti ecosystem across the whole year.",
      "From December to March the herds are on the short-grass plains in the south, calving. It is a quieter spectacle than the crossings and, for many travellers, a better one: thousands of births within a few weeks, and predators concentrated around them.",
      "By June the columns are moving north and west. July to October is the Maasai Mara's season, when the river lines become the crossing points that most people picture. Crossings cannot be scheduled. What can be arranged is position — camps close to the river, an early departure and a guide with the patience to wait.",
      "The practical advice is simple. Travel with a private vehicle so that waiting is your decision, allow more nights than you think you need, and treat any crossing you see as a gift rather than an itinerary item.",
    ],
  },
  {
    slug: "a-first-safari-what-to-expect",
    title: "A first safari: what actually happens in a day",
    category: "Travel Tips",
    excerpt:
      "Early starts, long breakfasts, an afternoon that belongs to you. An honest account of the rhythm of a safari day.",
    readingTime: "5 min",
    date: "2026-05-02",
    image: media.gameDrive,
    body: [
      "Days begin before light. Coffee is brought to the tent, and you are in the vehicle as the sky turns — the coolest hours are when the cats are still active and the light is worth the alarm.",
      "Mid-morning, breakfast is often set up in the field rather than back at camp. The middle of the day is slow by design: heat, shade, a long lunch, a swim, sleep.",
      "The second drive leaves in the late afternoon and runs into the golden hour, ending with a sundowner somewhere with a view. Dinner is back at camp, and it is usually early.",
      "The most common surprise for first-time travellers is how much of a safari is spent stationary. The best sightings are earned by staying with an animal, not by covering ground.",
    ],
  },
  {
    slug: "beach-and-bush-planning-the-combination",
    title: "Beach and bush: planning the combination",
    category: "Destination Guides",
    excerpt:
      "How to sequence a safari and a coastal stay so that the second week feels like a reward rather than a transfer.",
    readingTime: "4 min",
    date: "2026-04-11",
    image: media.beach,
    body: [
      "Bush first, coast second. The order matters. Safari days are early and full; the coast is the decompression, and it works far better at the end.",
      "Flight timing is the detail that makes or breaks the combination. A light aircraft from the Mara to the coast turns a two-day drive into a morning, and leaves the first beach afternoon intact.",
      "Diani and Watamu keep you inside Kenya, which simplifies visas and transfers. Zanzibar adds a border but brings Stone Town and the spice farms with it.",
      "Allow at least four nights on the coast. Anything shorter and you spend the stay unpacking.",
    ],
  },
  {
    slug: "photographing-wildlife-in-low-light",
    title: "Photographing wildlife in low light",
    category: "Wildlife",
    excerpt:
      "The first and last thirty minutes of the day produce most of the frames worth keeping. Working with what little light there is.",
    readingTime: "7 min",
    date: "2026-03-08",
    image: media.lions,
    body: [
      "Golden hour on the equator is short. The sun rises fast and sets faster, which compresses the best light into two narrow windows either side of the day.",
      "Shoot wide open, accept higher ISO, and prioritise shutter speed over noise — a sharp grainy frame survives editing; a clean blurred one does not.",
      "Position for backlight where you can. Dust, breath and grass edges all separate an animal from its background when the sun is behind it.",
      "Finally, lower the camera. A vehicle with a bean bag on the sill puts you at eye level with the subject, and eye level is the difference between a record shot and a photograph.",
    ],
  },
  {
    slug: "conservancies-and-why-they-matter",
    title: "Conservancies, and why they matter",
    category: "Safari Guides",
    excerpt:
      "Private conservancies allow walking, night drives and far fewer vehicles — and they exist because of the communities who lease the land.",
    readingTime: "5 min",
    date: "2026-02-19",
    image: media.rhinos,
    body: [
      "A national reserve is public land with public rules: fixed hours, no off-road driving, no walking, and as many vehicles as arrive.",
      "A conservancy is land leased from communities by a small number of camps. Vehicle numbers are capped, off-road access is permitted at a guide's discretion, and walking and night drives become possible.",
      "The trade is straightforward. Guests pay a conservancy fee; that fee is paid to the landowners as a direct return for keeping the land open to wildlife rather than fencing or farming it.",
      "For travellers it means quieter sightings. For the ecosystem it means corridors that stay open. Both are reasons to include at least a few conservancy nights in any Kenyan itinerary.",
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
