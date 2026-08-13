/**
 * Central media registry.
 *
 * `client.*` entries are WildMaze Safaris' own supplied photographs (CDN hosted).
 * `temp.*` entries are TEMPORARY placeholders pending client photography —
 * replace the URL in this single file when the real asset arrives.
 *
 * No hero video has been supplied yet. When it is, add it as `client.heroVideo`
 * and pass it to <VideoHero src={...} /> on the homepage.
 */

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;

export const client = {
  bushBreakfast: "/images/bush-breakfast-mara.jpg",
  lakesideDining: "/images/lakeside-dining.jpg",
  spaWellness: "/images/spa-wellness.jpg",
  tentedSuite: "/images/tented-suite.jpg",
  sundownerRock: "/images/sundowner-rock.jpg",
  /** Client photography — supplied Aug 2026 */
  gameDrive: "/images/lion-game-drive.jpg",
  lions: "/images/lions-in-tree.jpg",
  walkingSafari: "/images/walking-safari-maasai.jpg",
  flyIn: "/images/fly-in-airstrip.jpg",
  oceanDinner: "/images/oceanside-dinner.jpg",
  conservation: "/images/conservation-planting.jpg",
  heroVideo: "/videos/wildmaze-hero.mp4",
  heroPoster: "/images/hero-video-poster.jpg",
};


/** TEMPORARY imagery — replace with client photography. */
export const temp = {
  savannah: u("1547471080-7cc2caa01a7e"),
  giraffeSunset: u("1523805009345-7448845a9e53"),
  elephantMist: u("1535941339077-2dd1c7963098"),
  elephants: u("1521651201144-634f700b36ef"),
  rhinos: u("1504173010664-32509aeebb62"),
  kilimanjaro: u("1526481280693-3bfa7568e0f3"),
  balloon: u("1519659528534-7fd733a832a0"),
  beach: u("1544551763-46a013bb70d5"),
  coral: u("1552465011-b4e21bf6e79a"),
  giraffe: u("1516815231560-8f41ec531527"),
};

export const media = { ...client, ...temp };
export type MediaKey = keyof typeof media;
