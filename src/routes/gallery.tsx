import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ImageReveal } from "@/components/Reveal";
import { Lightbox } from "@/components/Lightbox";
import { gallery, galleryCategories, type GalleryCategory } from "@/data/gallery";
import { client } from "@/data/media";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — WildMaze Safaris" },
      { name: "description", content: "Photographs from WildMaze journeys: destinations, wildlife, camps and the experiences in between." },
      { property: "og:title", content: "Gallery — WildMaze Safaris" },
      { property: "og:description", content: "Photographs from WildMaze journeys across Kenya and East Africa." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [cat, setCat] = useState<GalleryCategory | "All">("All");
  const [open, setOpen] = useState<number | null>(null);
  const list = cat === "All" ? gallery : gallery.filter((g) => g.category === cat);

  return (
    <>
      <PageHero eyebrow="Photography" title="Gallery" image={client.sundownerRock} />

      <section data-nav-theme="dark" className="bg-background px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-b border-border pb-5">
            {(["All", ...galleryCategories] as const).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCat(c)}
                aria-pressed={cat === c}
                className={`eyebrow transition-opacity duration-300 ${cat === c ? "text-foreground" : "text-muted-foreground opacity-70 hover:opacity-100"}`}
              >
                {c}
              </button>
            ))}
          </div>

          <div key={cat} className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {list.map((g, i) => (
              <button
                key={g.src + i}
                type="button"
                onClick={() => setOpen(i)}
                className="zoom-media mb-5 block w-full break-inside-avoid text-left"
                aria-label={`View: ${g.alt}`}
              >
                <ImageReveal
                  src={g.src}
                  alt={g.alt}
                  className={g.orientation === "portrait" ? "aspect-[3/4] w-full" : "aspect-[4/3] w-full"}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <Lightbox images={list} index={open} onClose={() => setOpen(null)} onNavigate={(i: number) => setOpen(i)} />
    </>
  );
}
