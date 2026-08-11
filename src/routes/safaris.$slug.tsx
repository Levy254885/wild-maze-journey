import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ImageReveal, Reveal } from "@/components/Reveal";
import { ArrowButton, ArrowLink } from "@/components/ArrowLink";
import { useEnquiry } from "@/components/EnquiryPanel";
import { safaris } from "@/data/safaris";

export const Route = createFileRoute("/safaris/$slug")({
  loader: ({ params }) => {
    const safari = safaris.find((s) => s.slug === params.slug);
    if (!safari) throw notFound();
    return { safari };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Journey not found — Wild Maze Safaris" }, { name: "robots", content: "noindex" }] };
    }
    const { safari } = loaderData;
    return {
      meta: [
        { title: `${safari.name} — Wild Maze Safaris` },
        { name: "description", content: safari.summary },
        { property: "og:title", content: `${safari.name} — Wild Maze Safaris` },
        { property: "og:description", content: safari.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/safaris/${safari.slug}` },
      ],
      links: [{ rel: "canonical", href: `/safaris/${safari.slug}` }],
    };
  },
  component: SafariDetail,
});

function SafariDetail() {
  const { safari } = Route.useLoaderData();
  const { openEnquiry } = useEnquiry();

  return (
    <>
      <PageHero eyebrow={safari.location} title={safari.name} image={safari.hero} />

      <section data-nav-theme="dark" className="bg-background px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-24">
          <Reveal>
            <p className="lede text-muted-foreground">{safari.intro}</p>
          </Reveal>
          <Reveal delay={100} className="max-w-md">
            <div className="rule pt-5">
              <p className="eyebrow">Duration</p>
              <p className="mt-2 text-sm text-muted-foreground">{safari.duration}</p>
            </div>
            <div className="rule mt-8 pt-5">
              <p className="eyebrow">Highlights</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {safari.highlights.map((h: string) => <li key={h}>{h}</li>)}
              </ul>
            </div>
            <ArrowButton onClick={() => openEnquiry(safari.name)} className="mt-10">
              Enquire about this journey
            </ArrowButton>
          </Reveal>
        </div>
      </section>

      <section data-nav-theme="dark" className="px-5 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1400px] gap-6 sm:grid-cols-2 lg:gap-10">
          {safari.images.slice(0, 4).map((src: string, i: number) => (
            <ImageReveal
              key={src + i}
              src={src}
              alt={`${safari.name} — scene ${i + 1}`}
              className={i % 3 === 0 ? "aspect-[4/5] w-full" : "aspect-[4/3] w-full self-end"}
            />
          ))}
        </div>
      </section>

      <section data-nav-theme="dark" className="bg-background px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1400px] space-y-16">
          {safari.sections.map((sec: { title: string; body: string }) => (
            <Reveal key={sec.title} className="grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-24">
              <h2 className="display-md max-w-[16ch]">{sec.title}</h2>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">{sec.body}</p>
            </Reveal>
          ))}
          <Reveal><ArrowLink to="/safaris">All journeys</ArrowLink></Reveal>
        </div>
      </section>
    </>
  );
}
