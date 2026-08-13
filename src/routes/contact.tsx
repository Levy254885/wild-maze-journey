import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { EnquiryForm } from "@/components/EnquiryForm";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { media } from "@/data/media";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Enquiries — WildMaze Safaris" },
      { name: "description", content: "Start planning a private, tailor-made safari with WildMaze Safaris. Share your dates, party size and interests and a safari designer will reply personally." },
      { property: "og:title", content: "Contact — WildMaze Safaris" },
      { property: "og:description", content: "Start planning your private, tailor-made safari with WildMaze Safaris." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Enquiries" title="Plan your safari" image={media.gameDrive} />

      <section data-nav-theme="dark" className="bg-background px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-24">
          <Reveal>
            <p className="lede text-muted-foreground">
              Every journey begins with a conversation. Tell us roughly when you would like to
              travel and who is coming — we will do the rest.
            </p>
            <dl className="mt-12 space-y-8 text-sm">
              <div className="rule pt-5">
                <dt className="eyebrow">Email</dt>
                <dd className="mt-2">
                  <a href={`mailto:${site.email}`} className="line-link text-muted-foreground">{site.email}</a>
                </dd>
              </div>
              <div className="rule pt-5">
                <dt className="eyebrow">Telephone</dt>
                <dd className="mt-2 flex flex-col gap-1">
                  {site.phoneLinks.map((tel, i) => (
                    <a key={tel} href={`tel:${tel}`} className="line-link text-muted-foreground">{site.phones[i]}</a>
                  ))}
                </dd>
              </div>
              <div className="rule pt-5">
                <dt className="eyebrow">WhatsApp</dt>
                <dd className="mt-2 text-muted-foreground"><WhatsAppLink /></dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={100}>
            <EnquiryForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
