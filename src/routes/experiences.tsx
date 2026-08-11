import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ImageReveal, Reveal } from "@/components/Reveal";
import { experiences, concierge } from "@/data/experiences";
import { client } from "@/data/media";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Safari Experiences — Wild Maze Safaris" },
      { name: "description", content: "Bush breakfasts, sundowners, balloon flights, walking safaris, cultural immersion, spa and wellness — the experiences that make up a Wild Maze journey." },
      { property: "og:title", content: "Safari Experiences — Wild Maze Safaris" },
      { property: "og:description", content: "The experiences that make up a Wild Maze journey." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/experiences" },
    ],
    links: [{ rel: "canonical", href: "/experiences" }],
  }),
  component: ExperiencesPage,
});

function ExperiencesPage() {
  return (
    <>
      <PageHero eyebrow="Signature services" title="Experiences" image={client.lakesideDining} />

      <section data-nav-theme="dark" className="bg-background px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1400px]">
          <ul className="space-y-24 lg:space-y-36">
            {experiences.map((e, i) => (
              <li key={e.slug}>
                <article className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-24`}>
                  <div className={`zoom-media ${i % 2 ? "lg:order-2" : ""}`}>
                    <ImageReveal src={e.image} alt={e.title} className="aspect-[4/3] w-full" />
                  </div>
                  <Reveal>
                    <p className="eyebrow text-muted-foreground">{e.kicker}</p>
                    <h2 className="display-lg mt-4 max-w-[16ch]">{e.title}</h2>
                    <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">{e.description}</p>
                    <ul className="mt-8 space-y-2 text-sm text-muted-foreground">
                      {e.details.map((d) => <li key={d} className="rule pt-3">{d}</li>)}
                    </ul>
                  </Reveal>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section data-nav-theme="dark" className="bg-secondary/50 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="eyebrow text-muted-foreground">Premium concierge</p>
            <h2 className="display-lg mt-6 max-w-[16ch]">Handled before you ask.</h2>
          </Reveal>
          <ul className="mt-14 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {concierge.map((c, i) => (
              <li key={c}>
                <Reveal delay={i * 40} className="rule pt-4 text-sm text-muted-foreground">{c}</Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
