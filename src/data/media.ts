/**
 * Central media registry.
 *
 * `client.*` entries are WildMaze Safaris' own supplied photographs.
 * Prefer client photography over temporary stock for destination and
 * experience cards.
 */

export const client = {
  bushBreakfast: "/images/bush-breakfast-mara.jpg",
  lakesideDining: "/images/lakeside-dining.jpg",
  spaWellness: "/images/spa-wellness.jpg",
  tentedSuite: "/images/tented-suite.jpg",
  sundownerRock: "/images/sundowner-rock.jpg",
  gameDrive: "/images/lion-game-drive.jpg",
  lions: "/images/lions-in-tree.jpg",
  walkingSafari: "/images/walking-safari-maasai.jpg",
  flyIn: "/images/fly-in-airstrip.jpg",
  oceanDinner: "/images/oceanside-dinner.jpg",
  conservation: "/images/conservation-planting.jpg",
  heroVideo: "/videos/wildmaze-hero.mp4",
  heroPoster: "/images/hero-video-poster.jpg",
  /** Client photography — destination & experience replacements */
  lionsAcacia: "/images/lions-acacia.jpg",
  amboseliElephants: "/images/amboseli-elephants.jpg",
  tsavoElephants: "/images/tsavo-elephants.jpg",
  dianiBeach: "/images/diani-beach.jpg",
  zanzibarDhow: "/images/zanzibar-dhow.jpg",
  mzimaSprings: "/images/mzima-springs.jpg",
  gorillaTrek: "/images/gorilla-trek.jpg",
};

/** Fallback imagery where no client photograph is yet assigned. */
export const temp = {
  savannah: client.lionsAcacia,
  giraffeSunset: client.lionsAcacia,
  elephantMist: client.tsavoElephants,
  elephants: client.tsavoElephants,
  rhinos: client.lionsAcacia,
  kilimanjaro: client.amboseliElephants,
  balloon: client.flyIn,
  beach: client.dianiBeach,
  coral: client.dianiBeach,
  giraffe: client.walkingSafari,
};

export const media = { ...client, ...temp };
export type MediaKey = keyof typeof media;
