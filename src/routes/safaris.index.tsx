import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SafariCollection } from "@/components/Collections";
import { media } from "@/data/media";

export const Route = createFileRoute("/safaris/")({
  head: () => ({
    meta: [
      { title: "Safari Journeys — Wild Maze Safaris" },
      { name: "description", content: "Private, tailor-made safari journeys across Kenya, Tanzania and the Indian Ocean coast — migration, fly-in, honeymoon, family, photography and conservation itineraries." },
      { property: "og:title", content: "Safari Journeys — Wild Maze Safaris" },
      { property: "og:description", content: "Private, tailor-made safari journeys across Kenya, Tanzania and the coast." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/safaris" },
    ],
    links: [{ rel: "canonical", href: "/safaris" }],
  }),
  component: SafarisPage,
});

function SafarisPage() {
  return (
    <>
      <PageHero eyebrow="The collection" title="Our safaris" image={media.gameDrive} />
      <section data-nav-theme="dark" className="bg-background py-24 lg:py-36">
        <SafariCollection />
      </section>
    </>
  );
}
