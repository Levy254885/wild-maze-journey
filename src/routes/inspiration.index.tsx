import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ImageReveal, Reveal } from "@/components/Reveal";
import { ArrowLink } from "@/components/ArrowLink";
import { articles } from "@/data/articles";
import { media } from "@/data/media";

export const Route = createFileRoute("/inspiration/")({
  head: () => ({
    meta: [
      { title: "Inspiration — The WildMaze Journal" },
      { name: "description", content: "Safari guides, destination notes, wildlife writing and travel tips from the WildMaze Safaris team." },
      { property: "og:title", content: "Inspiration — The WildMaze Journal" },
      { property: "og:description", content: "Safari guides, destination notes and travel tips from WildMaze Safaris." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/inspiration" },
    ],
    links: [{ rel: "canonical", href: "/inspiration" }],
  }),
  component: InspirationPage,
});

function InspirationPage() {
  return (
    <>
      <PageHero eyebrow="The journal" title="Inspiration" image={media.balloon} />
      <section data-nav-theme="dark" className="bg-background px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1400px] gap-x-10 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a, i) => (
            <article key={a.slug}>
              <Reveal delay={(i % 3) * 80}>
                <Link to="/inspiration/$slug" params={{ slug: a.slug }} className="zoom-media block">
                  <ImageReveal src={a.image} alt={a.title} className="aspect-[4/3] w-full" />
                </Link>
                <p className="eyebrow mt-6 text-muted-foreground">{a.category} — {a.readingTime}</p>
                <h2 className="display-md mt-3">{a.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
                <ArrowLink to="/inspiration/$slug" params={{ slug: a.slug }} className="mt-6">Read</ArrowLink>
              </Reveal>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
