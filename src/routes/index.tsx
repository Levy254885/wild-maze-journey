import { createFileRoute, Link } from "@tanstack/react-router";
import { ImageReveal, Reveal, MaskText } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { SafariCollection, DestinationExplorer, ExperienceStrip } from "@/components/Collections";
import { ArrowLink, ArrowButton } from "@/components/ArrowLink";
import { useEnquiry } from "@/components/EnquiryPanel";
import { client, media } from "@/data/media";
import { articles } from "@/data/articles";
import { gallery } from "@/data/gallery";
import { site } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WildMaze Safaris — Luxury tailor-made safaris in Kenya & East Africa" },
      {
        name: "description",
        content:
          "Private, tailor-made luxury safaris across Kenya, Tanzania and the Indian Ocean coast. Great Migration journeys, fly-in itineraries, beach and bush, photography and family safaris.",
      },
      { property: "og:title", content: "WildMaze Safaris — Breaking Normalcy" },
      {
        property: "og:description",
        content:
          "Private, tailor-made luxury safaris across Kenya, Tanzania and the Indian Ocean coast.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const { openEnquiry } = useEnquiry();
  const [lead, ...rest] = articles;

  return (
    <>
      {/* ——— Opening scene (desktop: preserved full-bleed composition) ——— */}
      <section data-nav-theme="light" className="relative hidden h-[100svh] w-full overflow-hidden bg-ink lg:block">
        <img
          src={client.sundownerRock}
          alt="Sunset over the plains from a rock outcrop, with a private bush bar set up nearby"
          fetchPriority="high"
          className="ken-burns absolute inset-0 h-full w-full object-cover object-center"
        />
        {client.heroVideo ? (
          <video
            className="absolute inset-0 h-full w-full object-cover object-center"
            src={client.heroVideo}
            poster={client.heroPoster}
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            preload="metadata"
            aria-hidden="true"
            tabIndex={-1}
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-ink/30" />

        <div className="relative z-10 flex h-full flex-col justify-end px-5 pb-12 text-background sm:px-8 lg:px-12 lg:pb-16">
          <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow opacity-80">{site.name}</p>
              <MaskText as="p" className="display-xl mt-4 max-w-[12ch] leading-[0.95]" delay={120}>
                {["Breaking", "Normalcy"]}
              </MaskText>
            </div>
            <a href="#introduction" className="eyebrow flex items-center gap-3 pb-2 opacity-85 transition-opacity hover:opacity-100">
              Scroll to discover
              <svg width="8" height="26" viewBox="0 0 8 26" fill="none" aria-hidden="true">
                <path d="M4 0v24M1 21l3 3 3-3" stroke="currentColor" strokeWidth="1" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ——— Opening scene (mobile / tablet: contained media band) ——— */}
      <section data-nav-theme="dark" className="bg-background pt-[4.25rem] sm:pt-[4.75rem] lg:hidden">
        <div className="relative h-[46svh] min-h-[280px] w-full overflow-hidden bg-ink">
          <img
            src={client.heroPoster || client.sundownerRock}
            alt="Sunset over the plains, with a private bush bar set up on a rock outcrop"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          {client.heroVideo ? (
            <video
              className="absolute inset-0 h-full w-full object-cover object-center"
              src={client.heroVideo}
              poster={client.heroPoster}
              autoPlay
              muted
              loop
              playsInline
              disablePictureInPicture
              preload="metadata"
              aria-hidden="true"
              tabIndex={-1}
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/45 to-transparent" />
          <p className="eyebrow absolute bottom-4 left-5 text-[0.62rem] text-background/85 sm:left-8">
            {site.tagline}
          </p>
        </div>
      </section>

      {/* ——— Introduction ——— */}
      <section id="introduction" data-nav-theme="dark" className="scroll-mt-24 bg-background px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-[1400px]">
          <MaskText as="h2" className="display-lg max-w-[22ch]">
            {["Wild places.", "Remarkable journeys.", "Stories worth carrying home."]}
          </MaskText>
          <Reveal delay={160} className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-24">
            <p className="lede text-muted-foreground">
              WildMaze Safaris designs private, tailor-made journeys across Kenya, Tanzania and the
              Indian Ocean coast — planned in detail, guided with care and paced entirely around you.
            </p>
            <div className="max-w-md text-sm leading-relaxed text-muted-foreground">
              <p>
                Every journey begins as a conversation. From that we build the route, choose the
                camps, appoint the guide and hold the logistics together so that nothing on the
                ground falls to you. Private 4×4 Land Cruisers, luxury lodges and tented camps, and
                a personal safari concierge from arrival to departure.
              </p>
              <Link to="/our-story" className="bar-link mt-8 text-foreground">Our story</Link>
            </div>
          </Reveal>
        </div>

      </section>

      {/* ——— Large destination image ——— */}
      <section data-nav-theme="dark">
        <ImageReveal
          src={media.savannah}
          alt="Acacia trees on open savannah at first light"
          className="h-[70svh] w-full lg:h-[92svh]"
        />
      </section>

      {/* ——— Editorial story ——— */}
      <section data-nav-theme="dark" className="bg-background px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-24">
          <Reveal>
            <p className="eyebrow text-muted-foreground">The way we travel</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="display-lg max-w-[18ch]">
              The best days on safari are the ones nobody planned.
            </h2>
            <p className="mt-10 max-w-xl text-sm leading-relaxed text-muted-foreground">
              We hold itineraries loosely. A private vehicle and your own guide mean a morning can
              change because a leopard did — that you can stay for an hour with a single sighting,
              or leave the road entirely because the light is better elsewhere. What is fixed is
              everything behind the scenes: flights, transfers, camps, the table waiting at the
              right moment.
            </p>
            <div className="mt-12 grid gap-10 sm:grid-cols-3">
              {[
                ["Private", "Your own guide and 4×4 Land Cruiser on every journey."],
                ["Considered", "Camps chosen for position and quiet, not for scale."],
                ["Held together", "A personal concierge and 24/7 support throughout."],
              ].map(([t, d]) => (
                <div key={t} className="rule pt-5">
                  <p className="eyebrow">{t}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ——— Safari collection ——— */}
      <section data-nav-theme="dark" className="bg-background pb-24 lg:pb-40">
        <div className="mx-auto mb-16 max-w-[1400px] px-5 sm:px-8 lg:mb-24 lg:px-12">
          <Reveal className="flex flex-wrap items-end justify-between gap-6 border-b border-border pb-6">
            <h2 className="display-lg">Our safaris</h2>
            <ArrowLink to="/safaris">View all journeys</ArrowLink>
          </Reveal>
        </div>
        <SafariCollection limit={4} />
      </section>

      {/* ——— Full-width image ——— */}
      <section data-nav-theme="dark">
        <ImageReveal
          src={client.bushBreakfast}
          alt="Guests and Maasai hosts at a bush breakfast set beneath a tree overlooking the plains"
          className="h-[70svh] w-full lg:h-[95svh]"
        />
      </section>

      {/* ——— Experiences ——— */}
      <section data-nav-theme="dark" className="bg-background px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-muted-foreground">Experiences</p>
            <h2 className="display-lg mt-6">Ways to spend the day</h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Walking, riding, flying, diving, or nothing at all. Every journey is assembled from the
              experiences that suit the people travelling.
            </p>
          </Reveal>
          <div className="mt-16">
            <ExperienceStrip />
          </div>
          <Reveal className="mt-14">
            <ArrowLink to="/experiences">All experiences</ArrowLink>
          </Reveal>
        </div>
      </section>

      {/* ——— Destinations ——— */}
      <section data-nav-theme="dark" className="bg-secondary/50 py-24 lg:py-36">
        <div className="mx-auto mb-14 max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <p className="eyebrow text-muted-foreground">Destinations</p>
            <h2 className="display-lg mt-6 max-w-[18ch]">Where we travel</h2>
          </Reveal>
        </div>
        <DestinationExplorer />
      </section>

      {/* ——— Large image ——— */}
      <section data-nav-theme="dark">
        <ImageReveal
          src={media.kilimanjaro}
          alt="Kilimanjaro rising beyond the Amboseli plains"
          className="h-[60svh] w-full lg:h-[85svh]"
        />
      </section>

      {/* ——— Inspiration ——— */}
      <section data-nav-theme="dark" className="bg-background px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="flex flex-wrap items-end justify-between gap-6 border-b border-border pb-6">
            <h2 className="display-lg">Inspiration</h2>
            <ArrowLink to="/inspiration">The journal</ArrowLink>
          </Reveal>

          {lead ? (
            <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] lg:gap-20">
              <Reveal>
                <Link to="/inspiration/$slug" params={{ slug: lead.slug }} className="zoom-media group block">
                  <ImageReveal src={lead.image} alt={lead.title} className="aspect-[16/10] w-full" />
                </Link>
                <p className="eyebrow mt-6 text-muted-foreground">{lead.category} — {lead.readingTime}</p>
                <h3 className="display-md mt-3 max-w-[20ch]">{lead.title}</h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">{lead.excerpt}</p>
                <ArrowLink to="/inspiration/$slug" params={{ slug: lead.slug }} className="mt-7">Read</ArrowLink>
              </Reveal>

              <ul className="space-y-10">
                {rest.slice(0, 3).map((a, i) => (
                  <li key={a.slug}>
                    <Reveal delay={i * 80} className="rule pt-6">
                      <p className="eyebrow text-muted-foreground">{a.category}</p>
                      <Link to="/inspiration/$slug" params={{ slug: a.slug }} className="line-link mt-3 inline-block">
                        <span className="display-md text-[1.5rem]">{a.title}</span>
                      </Link>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>

      {/* ——— Gallery teaser ——— */}
      <section data-nav-theme="dark" className="bg-background pb-24 lg:pb-36">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <Reveal className="flex flex-wrap items-end justify-between gap-6 border-b border-border pb-6">
            <h2 className="display-lg">Gallery</h2>
            <ArrowLink to="/gallery">View the gallery</ArrowLink>
          </Reveal>
        </div>
        <div className="no-scrollbar mt-12 flex gap-4 overflow-x-auto px-5 sm:px-8 lg:gap-6 lg:px-12">
          {gallery.slice(0, 8).map((g) => (
            <div key={g.src} className="w-[62vw] shrink-0 sm:w-[38vw] lg:w-[24vw]">
              <ImageReveal
                src={g.src}
                alt={g.alt}
                className={g.orientation === "portrait" ? "aspect-[3/4] w-full" : "aspect-[4/3] w-full"}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ——— Plan your safari ——— */}
      <section data-nav-theme="light" className="relative overflow-hidden bg-ink text-background">
        <img src={media.giraffeSunset} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="relative mx-auto max-w-[1400px] px-5 py-28 sm:px-8 lg:px-12 lg:py-44">
          <Reveal>
            <p className="eyebrow opacity-80">Start your journey</p>
            <h2 className="display-lg mt-6 max-w-[16ch]">
              Tell us how you would like to travel.
            </h2>
            <p className="mt-8 max-w-md text-sm leading-relaxed opacity-85">
              Every WildMaze journey begins with a conversation. Share a few details and one of our
              safari designers will be in touch.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-x-12 gap-y-6">
              <ArrowButton onClick={() => openEnquiry()}>Plan your safari</ArrowButton>
              <ArrowLink to="/contact">Contact us</ArrowLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
