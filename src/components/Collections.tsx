import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ImageReveal, Reveal } from "./Reveal";
import { ArrowLink } from "./ArrowLink";
import { destinations, regions, safaris, type Region } from "@/data/safaris";
import { experiences } from "@/data/experiences";

/** Asymmetric, image-led safari collection — deliberately not a card grid. */
export function SafariCollection({ limit }: { limit?: number }) {
  const items = limit ? safaris.slice(0, limit) : safaris;

  return (
    <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
      <ul className="space-y-24 lg:space-y-40">
        {items.map((s, i) => {
          const flipped = i % 2 === 1;
          const wide = s.scale === "full";
          return (
            <li key={s.slug}>
              <article
                className={`grid items-end gap-8 lg:gap-16 ${
                  wide ? "" : flipped ? "lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]" : "lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]"
                }`}
              >
                <Link
                  to="/safaris/$slug"
                  params={{ slug: s.slug }}
                  className={`zoom-media group block ${flipped && !wide ? "lg:order-2" : ""}`}
                  aria-label={`${s.name} — explore`}
                >
                  <ImageReveal
                    src={s.hero}
                    alt={s.name}
                    className={
                      wide
                        ? "aspect-[16/9] w-full"
                        : s.scale === "tall"
                          ? "aspect-[4/5] w-full sm:aspect-[3/2] lg:aspect-[4/5]"
                          : "aspect-[3/2] w-full"
                    }
                  />
                </Link>

                <Reveal className={`${wide ? "mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16" : ""}`}>
                  <div>
                    <p className="eyebrow text-muted-foreground">
                      {String(i + 1).padStart(2, "0")} — {s.location}
                    </p>
                    <h3 className="display-lg mt-4 max-w-[14ch]">{s.name}</h3>
                  </div>
                  <div className={wide ? "self-end" : "mt-6"}>
                    <p className="max-w-md text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
                    <ArrowLink to="/safaris/$slug" params={{ slug: s.slug }} className="mt-7">
                      Explore
                    </ArrowLink>
                  </div>
                </Reveal>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/** Editorial region filtering — animated, no page reload. */
export function DestinationExplorer() {
  const [region, setRegion] = useState<Region | "All">("All");
  const list = region === "All" ? destinations : destinations.filter((d) => d.region === region);

  return (
    <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
      <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-b border-border pb-5">
        {(["All", ...regions] as const).map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setRegion(r)}
            aria-pressed={region === r}
            className={`eyebrow transition-opacity duration-300 ${
              region === r ? "text-foreground opacity-100" : "text-muted-foreground opacity-70 hover:opacity-100"
            }`}
          >
            {r === "All" ? "All regions" : r}
          </button>
        ))}
      </div>

      {list.length === 0 ? (
        <p className="py-20 text-sm text-muted-foreground">No destinations in this region yet.</p>
      ) : (
        <ul key={region} className="mt-12 grid animate-[page-in_600ms_ease-out] gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((d, i) => (
            <li key={d.slug} id={d.slug} className="scroll-mt-32">
              <Reveal delay={i * 60}>
                <div className="zoom-media">
                  <ImageReveal
                    src={d.image}
                    alt={d.name}
                    className={i % 3 === 1 ? "aspect-[4/5] w-full" : "aspect-[3/4] w-full sm:aspect-[4/5]"}
                  />
                </div>
                <p className="eyebrow mt-6 text-muted-foreground">{d.country}</p>
                <h3 className="display-md mt-2">{d.name}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{d.blurb}</p>
                <p className="mt-4 text-xs text-muted-foreground/80">Best time — {d.best}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/** Horizontally-scrolled experience storytelling; stacks naturally on mobile. */
export function ExperienceStrip() {
  return (
    <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 sm:-mx-8 sm:px-8 lg:-mx-12 lg:gap-10 lg:px-12">
      {experiences.map((e) => (
        <article key={e.slug} className="w-[78vw] shrink-0 snap-start sm:w-[46vw] lg:w-[30vw] xl:w-[24vw]">
          <div className="zoom-media">
            <ImageReveal src={e.image} alt={e.title} className="aspect-[3/4] w-full" />
          </div>
          <p className="eyebrow mt-6 text-muted-foreground">{e.kicker}</p>
          <h3 className="display-md mt-2">{e.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.description}</p>
        </article>
      ))}
    </div>
  );
}
