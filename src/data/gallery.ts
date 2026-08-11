import { media } from "./media";

export type GalleryCategory =
  | "Destinations"
  | "Safari"
  | "Wildlife"
  | "Accommodation"
  | "Experiences";

export interface GalleryImage {
  src: string;
  alt: string;
  category: GalleryCategory;
  /** portrait images get taller cells in the mosaic */
  orientation: "portrait" | "landscape";
}

export const galleryCategories: GalleryCategory[] = [
  "Destinations",
  "Safari",
  "Wildlife",
  "Accommodation",
  "Experiences",
];

export const gallery: GalleryImage[] = [
  {
    src: media.bushBreakfast,
    alt: "Maasai hosts and guests at a bush breakfast overlooking the plains",
    category: "Experiences",
    orientation: "portrait",
  },
  {
    src: media.sundownerRock,
    alt: "A couple watching sunset from a rock outcrop with a bush bar set up behind them",
    category: "Experiences",
    orientation: "portrait",
  },
  {
    src: media.lakesideDining,
    alt: "Long dining table laid beside a lake with a safari vehicle in the distance",
    category: "Experiences",
    orientation: "portrait",
  },
  {
    src: media.tentedSuite,
    alt: "Luxury tented suite with a private deck and garden",
    category: "Accommodation",
    orientation: "portrait",
  },
  {
    src: media.spaWellness,
    alt: "Hot stone massage treatment by candlelight",
    category: "Experiences",
    orientation: "portrait",
  },
  {
    src: media.savannah,
    alt: "Acacia on open savannah at sunrise",
    category: "Destinations",
    orientation: "landscape",
  },
  {
    src: media.gameDrive,
    alt: "Safari vehicle on a game drive at sunset",
    category: "Safari",
    orientation: "landscape",
  },
  {
    src: media.balloon,
    alt: "Hot air balloon drifting over herds on the plains",
    category: "Safari",
    orientation: "landscape",
  },
  {
    src: media.lions,
    alt: "Two lionesses in long grass",
    category: "Wildlife",
    orientation: "landscape",
  },
  {
    src: media.elephants,
    alt: "Elephants crossing golden grassland",
    category: "Wildlife",
    orientation: "landscape",
  },
  {
    src: media.rhinos,
    alt: "Rhinos walking together in dry bush",
    category: "Wildlife",
    orientation: "landscape",
  },
  {
    src: media.giraffe,
    alt: "Close portrait of a giraffe",
    category: "Wildlife",
    orientation: "portrait",
  },
  {
    src: media.giraffeSunset,
    alt: "Giraffe silhouetted against an orange sky",
    category: "Wildlife",
    orientation: "landscape",
  },
  {
    src: media.kilimanjaro,
    alt: "Kilimanjaro rising above the Amboseli plains",
    category: "Destinations",
    orientation: "landscape",
  },
  {
    src: media.elephantMist,
    alt: "Lone elephant in morning mist",
    category: "Wildlife",
    orientation: "landscape",
  },
  {
    src: media.beach,
    alt: "White sand beach and turquoise water on the Indian Ocean coast",
    category: "Destinations",
    orientation: "landscape",
  },
  {
    src: media.coral,
    alt: "Coral garden and reef fish",
    category: "Experiences",
    orientation: "landscape",
  },
];
