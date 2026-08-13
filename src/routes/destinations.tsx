import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { DestinationExplorer } from "@/components/Collections";
import { media } from "@/data/media";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destinations — WildMaze Safaris" },
      { name: "description", content: "Maasai Mara, Amboseli, Samburu, Laikipia, Serengeti, Ngorongoro, Zanzibar and the Kenyan coast — where WildMaze Safaris travels, and when to go." },
      { property: "og:title", content: "Destinations — WildMaze Safaris" },
      { property: "og:description", content: "Where WildMaze Safaris travels across Kenya, Tanzania and the coast." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/destinations" },
    ],
    links: [{ rel: "canonical", href: "/destinations" }],
  }),
  component: DestinationsPage,
});

function DestinationsPage() {
  return (
    <>
      <PageHero eyebrow="Where we travel" title="Destinations" image={media.kilimanjaro} />
      <section data-nav-theme="dark" className="bg-background py-24 lg:py-36">
        <DestinationExplorer />
      </section>
    </>
  );
}
