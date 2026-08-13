import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ImageReveal, Reveal } from "@/components/Reveal";
import { ArrowLink } from "@/components/ArrowLink";
import { client, media } from "@/data/media";
import { concierge } from "@/data/experiences";
import { site } from "@/lib/site";

export const Route = createFileRoute("/our-story")({
  head: () => ({
    meta: [
      { title: "Our Story — WildMaze Safaris" },
      {
        name: "description",
        content:
          "How WildMaze Safaris plans private, tailor-made journeys across Kenya and East Africa — our philosophy, our approach and the concierge care behind every safari.",
      },
      { property: "og:title", content: "Our Story — WildMaze Safaris" },
      {
        property: "og:description",
        content: "Our philosophy, our approach to travel, and the care behind every WildMaze journey.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/our-story" },
    ],
    links: [{ rel: "canonical", href: "/our-story" }],
  }),
  component: OurStory,
});

function OurStory() {
  return (
    <>
      <PageHero eyebrow={site.name} title="Our story" image={media.savannah} />

      <section data-nav-theme="dark" className="bg-background px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="display-lg max-w-[20ch]">
              A safari should feel like it was made for one group of people. Because it was.
            </p>
          </Reveal>
          <Reveal delay={120} className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-24">
            <p className="lede text-muted-foreground">
              WildMaze Safaris is a Kenyan safari company designing private, tailor-made journeys
              across Kenya, Tanzania and the Indian Ocean coast.
            </p>
            <div className="max-w-md space-y-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                We plan a small number of journeys carefully rather than a great many quickly. Each
                begins with a conversation about how you like to travel — how early you want to be
                out, how much you want in the day, whether children are travelling, whether you
                would rather walk than drive.
              </p>
              <p>
                From there we build the route, select lodges and tented camps for their position and
                their quiet, appoint a guide who suits the group, and take care of everything from
                charter flights to the table set on the plains.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section data-nav-theme="dark" className="px-5 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1400px] gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-10">
          <ImageReveal src={client.tentedSuite} alt="Luxury tented suite with a private deck" className="aspect-[4/3] w-full" />
          <ImageReveal src={client.spaWellness} alt="Spa treatment by candlelight" className="aspect-[4/5] w-full self-end" />
        </div>
      </section>

      <section data-nav-theme="dark" className="bg-background px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-24">
          <Reveal><p className="eyebrow text-muted-foreground">Our philosophy</p></Reveal>
          <Reveal delay={100}>
            <h2 className="display-lg max-w-[18ch]">Fewer vehicles. Longer sightings. Better hours.</h2>
            <div className="mt-10 grid gap-10 sm:grid-cols-2">
              {[
                ["Private by default", "Your own guide and vehicle on every journey, so the day answers to you and not to a group schedule."],
                ["Position over polish", "Camps chosen first for where they sit — close to the river lines, inside the conservancies, away from the traffic."],
                ["Local knowledge", "Guides who know the ground personally, and community hosts who are invited rather than visited."],
                ["Nothing left to you", "A personal safari concierge, 24/7 support, VIP airport assistance and every transfer confirmed before you fly."],
              ].map(([t, d]) => (
                <div key={t} className="rule pt-5">
                  <h3 className="display-md text-[1.4rem]">{t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section data-nav-theme="dark">
        <ImageReveal src={media.rhinos} alt="Rhinos in dry bush in a private conservancy" className="h-[60svh] w-full lg:h-[85svh]" />
      </section>

      <section data-nav-theme="dark" className="bg-background px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-24">
          <Reveal><p className="eyebrow text-muted-foreground">Community & conservation</p></Reveal>
          <Reveal delay={100}>
            <h2 className="display-lg max-w-[20ch]">The land is lived in, and the work is ongoing.</h2>
            <p className="mt-10 max-w-xl text-sm leading-relaxed text-muted-foreground">
              We include community conservation projects, rhino conservation visits, wildlife
              research encounters, tree planting and sustainable tourism programmes in journeys where
              they are relevant — arranged with the people running them, and only where an extra
              visitor is genuinely welcome.
            </p>
            <ArrowLink to="/safaris/$slug" params={{ slug: "conservation" }} className="mt-8">
              Conservation journeys
            </ArrowLink>
          </Reveal>
        </div>
      </section>

      <section data-nav-theme="dark" className="bg-secondary/50 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="eyebrow text-muted-foreground">Premium concierge services</p>
            <h2 className="display-lg mt-6 max-w-[16ch]">Everything either side of the safari.</h2>
          </Reveal>
          <ul className="mt-14 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {concierge.map((c, i) => (
              <li key={c}>
                <Reveal delay={i * 40} className="rule pt-4 text-sm text-muted-foreground">
                  {c}
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
