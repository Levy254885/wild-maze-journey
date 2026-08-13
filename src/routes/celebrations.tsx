import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ImageReveal, Reveal } from "@/components/Reveal";
import { ArrowButton } from "@/components/ArrowLink";
import { useEnquiry } from "@/components/EnquiryPanel";
import { client, media } from "@/data/media";

export const Route = createFileRoute("/celebrations")({
  head: () => ({
    meta: [
      { title: "Celebrations & Special Occasions — WildMaze Safaris" },
      { name: "description", content: "Honeymoons, anniversaries, proposals, milestone birthdays and private celebrations arranged in the bush and on the Indian Ocean coast." },
      { property: "og:title", content: "Celebrations — WildMaze Safaris" },
      { property: "og:description", content: "Honeymoons, anniversaries, proposals and milestone celebrations on safari." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/celebrations" },
    ],
    links: [{ rel: "canonical", href: "/celebrations" }],
  }),
  component: CelebrationsPage,
});

const occasions = [
  ["Honeymoons", "Private tented suites, a plunge pool at the end of the deck, and a week on the coast to follow. Slower mornings, no fixed plan."],
  ["Proposals", "A sundowner arranged on a rock outcrop, a photographer placed discreetly, and the camp told only what it needs to know."],
  ["Anniversaries", "A table laid by the lake at dusk, a private chef, and a return to the camp where it started."],
  ["Milestone birthdays", "A house or camp taken exclusively, guides for every family group, and one long table under the trees."],
  ["Family gatherings", "Interconnecting tents, flexible mealtimes, and activities graded so that everyone travels at their own pace."],
  ["Vow renewals", "Maasai blessings, bush ceremonies and quiet celebrations arranged with the community and the camp together."],
];

function CelebrationsPage() {
  const { openEnquiry } = useEnquiry();
  return (
    <>
      <PageHero eyebrow="Special occasions" title="Celebrations" image={client.lakesideDining} />

      <section data-nav-theme="dark" className="bg-background px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="display-lg max-w-[20ch]">Some journeys are marking something.</p>
            <p className="lede mt-10 max-w-2xl text-muted-foreground">
              We plan the surprise as carefully as the itinerary — and keep it to ourselves until the
              moment arrives.
            </p>
          </Reveal>

          <ul className="mt-20 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {occasions.map(([t, d], i) => (
              <li key={t}>
                <Reveal delay={(i % 3) * 80} className="rule pt-5">
                  <h2 className="display-md">{t}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section data-nav-theme="dark" className="px-5 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1400px] gap-6 lg:grid-cols-2 lg:gap-10">
          <ImageReveal src={client.spaWellness} alt="Hot stone massage by candlelight" className="aspect-[4/5] w-full" />
          <ImageReveal src={media.beach} alt="Indian Ocean shoreline at dusk" className="aspect-[4/3] w-full self-end" />
        </div>
      </section>

      <section data-nav-theme="dark" className="bg-background px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <h2 className="display-lg max-w-[16ch]">Tell us what we are celebrating.</h2>
            <ArrowButton onClick={() => openEnquiry("Celebration")} className="mt-10">Plan your celebration</ArrowButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
