import { media } from "./media";

export interface Experience {
  slug: string;
  title: string;
  kicker: string;
  description: string;
  details: string[];
  image: string;
}

/** Signature services offered by WildMaze Safaris. */
export const experiences: Experience[] = [
  {
    slug: "adventure",
    title: "Adventure",
    kicker: "On foot, on horseback, in the air",
    description:
      "Safari at ground level and above it — walking with an armed guide, riding out across the plains, or lifting off for a scenic flight along the escarpment.",
    details: [
      "Walking safaris",
      "Horseback safaris",
      "Camel safaris",
      "Mountain hiking",
      "Helicopter scenic flights",
      "Jet ski experiences along the Kenyan coast",
    ],
    image: media.gameDrive,
  },
  {
    slug: "honeymoon",
    title: "Honeymoon & Romance",
    kicker: "Two people, a great deal of space",
    description:
      "Private bush dinners, sundowners on a rock above the plains and accommodation chosen for seclusion rather than scale.",
    details: [
      "Private bush dinners",
      "Sundowner experiences",
      "Couples spa treatments",
      "Luxury romantic accommodation",
    ],
    image: media.sundownerRock,
  },
  {
    slug: "family",
    title: "Family Safaris",
    kicker: "Built for every age in the vehicle",
    description:
      "Child-friendly guides, junior ranger programmes and days paced so that the youngest travellers stay as engaged as the oldest.",
    details: [
      "Child-friendly guides",
      "Junior ranger programmes",
      "Educational wildlife activities",
      "Multi-generational travel planning",
    ],
    image: media.elephants,
  },
  {
    slug: "wellness",
    title: "Wellness",
    kicker: "Recovery between early mornings",
    description:
      "Couples spa treatments and quiet afternoons built into the itinerary, in camps where the treatment room looks out over the bush.",
    details: ["Couples spa treatments", "Restorative afternoons", "Quiet, unscheduled days"],
    image: media.spaWellness,
  },
  {
    slug: "beach",
    title: "Beach",
    kicker: "Salt water after dust",
    description:
      "Luxury beach resorts on the Kenyan coast and Zanzibar, private dhow cruises and reefs worth the early start.",
    details: [
      "Luxury beach resorts",
      "Private dhow cruises",
      "Snorkeling and diving excursions",
    ],
    image: media.coral,
  },
  {
    slug: "corporate",
    title: "Corporate & Executive",
    kicker: "Business, considerably relocated",
    description:
      "Executive retreats, incentive travel and team-building safaris, with full conference and event management.",
    details: [
      "Executive retreats",
      "Incentive travel",
      "Team-building safaris",
      "Conference and event management",
    ],
    image: media.lakesideDining,
  },
];

export interface ConciergeItem {
  label: string;
}

/** Premium concierge services included across journeys. */
export const concierge: string[] = [
  "24/7 travel support",
  "Airport VIP fast-track assistance",
  "Luxury airport transfers",
  "Visa assistance",
  "Travel insurance guidance",
  "Private aviation arrangements",
  "Restaurant reservations",
  "Birthday and anniversary celebrations",
  "Professional safari photography and videography",
];

export interface Celebration {
  title: string;
  description: string;
  image: string;
}

/** Celebrations — drawn from services WildMaze Safaris actually offers. */
export const celebrations: Celebration[] = [
  {
    title: "Honeymoons",
    description:
      "Private bush dinners, sundowner experiences and couples spa treatments, in accommodation chosen for its seclusion.",
    image: media.sundownerRock,
  },
  {
    title: "Birthdays & Anniversaries",
    description:
      "Arranged quietly through our concierge team — a table set on the plains, a surprise at camp, the day marked properly.",
    image: media.bushBreakfast,
  },
  {
    title: "Private Groups",
    description:
      "Exclusive-use camps, private guides and vehicles, and an itinerary that keeps a group of any size travelling together comfortably.",
    image: media.lakesideDining,
  },
  {
    title: "Corporate Retreats",
    description:
      "Executive retreats, incentive travel and team-building safaris with full conference and event management.",
    image: media.tentedSuite,
  },
];
