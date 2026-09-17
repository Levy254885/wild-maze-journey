import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { media } from "@/data/media";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | WildMaze Safaris" },
      {
        name: "description",
        content:
          "How WildMaze Safaris collects, uses, stores and protects personal information under Kenya's Data Protection Act, 2019.",
      },
      { property: "og:title", content: "Privacy Policy | WildMaze Safaris" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicyPage,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rule pt-10 first:border-0 first:pt-0">
      <h2 className="font-display text-2xl font-medium tracking-tight text-foreground sm:text-3xl">{title}</h2>
      <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">{children}</div>
    </section>
  );
}

function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" image={media.savannah} />
      <section data-nav-theme="dark" className="bg-background px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-sm text-muted-foreground">Last updated: 2023</p>
            <div className="mt-12 space-y-12">
              <Section title="1. Introduction">
                <p>Welcome to Wildmaze Safaris ("Wildmaze Safaris," "we," "us" or "our").</p>
                <p>
                  We respect your privacy and are committed to protecting your personal information.
                  This Privacy Policy explains how we collect, use, store, share and protect personal
                  information when you visit our website, submit an enquiry or booking, contact us,
                  make a payment, subscribe to marketing, or interact with our online platforms.
                </p>
                <p>
                  For purposes of applicable data-protection law, including Kenya's Data Protection
                  Act, 2019, Wildmaze Safaris is the data controller responsible for the personal
                  information described in this Policy.
                </p>
              </Section>

              <Section title="2. Who We Are">
                <p>
                  <strong className="text-foreground">Business name:</strong> Wildmaze Safaris<br />
                  <strong className="text-foreground">Registered business name:</strong> WILDMAZE SAFARIS LTD<br />
                  <strong className="text-foreground">Business address:</strong> 19258, Westlands, Nairobi<br />
                  <strong className="text-foreground">Country:</strong> Kenya<br />
                  <strong className="text-foreground">Telephone:</strong> +254719222750<br />
                  <strong className="text-foreground">Email:</strong>{" "}
                  <a href="mailto:wildmazesafaris@gmail.com" className="line-link">wildmazesafaris@gmail.com</a><br />
                  <strong className="text-foreground">Website:</strong> www.wildmazesafaris.com
                </p>
                <p>If you have questions about this Privacy Policy or wish to exercise your data-protection rights, contact us using the details above.</p>
              </Section>

              <Section title="3. Personal Information We Collect">
                <p className="font-medium text-foreground">Information you provide directly</p>
                <p>
                  Full name; nationality and country of residence; email; telephone and WhatsApp
                  numbers; postal or billing address; travel dates and preferred destinations;
                  number of travellers; accommodation, transport and activity preferences; dietary
                  requirements; mobility or accessibility needs; passport or identification where
                  required; emergency contacts; payment and transaction information; and information
                  in enquiries, reviews or correspondence.
                </p>
                <p>Please do not provide sensitive medical information unless it is necessary for your travel arrangements or personal safety.</p>
                <p className="font-medium text-foreground">Information collected automatically</p>
                <p>
                  IP address; browser and device information; operating system; general location;
                  pages visited and links clicked; date, time and duration of visits; referral
                  source; cookie and similar tracking information; website performance and security
                  information.
                </p>
                <p className="font-medium text-foreground">Information from other sources</p>
                <p>
                  We may receive information from your travel agent or employer; airlines,
                  accommodation and activity suppliers; payment-service providers; advertising or
                  analytics platforms; and individuals travelling with you where they provide
                  information on your behalf.
                </p>
              </Section>

              <Section title="4. How We Use Your Information">
                <p>
                  We use personal information to respond to enquiries and provide quotations; design
                  and manage safari itineraries; make travel arrangements; process payments; communicate
                  about your booking; meet legal and regulatory obligations; prevent fraud; improve
                  our website and services; send service messages; send marketing where permitted or
                  with consent; request feedback; manage complaints; protect guests, staff and the
                  business; and maintain website security.
                </p>
              </Section>

              <Section title="5. Legal Basis for Processing">
                <p>
                  We process personal information on the basis of contract (quotations and bookings);
                  consent (marketing and optional cookies); legal obligation; legitimate interests
                  (operating and improving the business, where your rights are not overridden); and
                  vital interests in an emergency. Where we rely on consent, you may withdraw it at
                  any time.
                </p>
              </Section>

              <Section title="6. Travel and Special Requirements">
                <p>
                  Safari travel may require us to process dietary restrictions, medical or mobility
                  requirements, and emergency contacts. We process this only as needed to arrange
                  your travel safely. Share only what is necessary.
                </p>
              </Section>

              <Section title="7. Sharing Your Information">
                <p>
                  We may share information with accommodation, transport and activity suppliers;
                  payment processors; professional advisers; authorities where required by law; and
                  service providers who host our systems, under confidentiality arrangements. We do
                  not sell personal information.
                </p>
              </Section>

              <Section title="8. Payments">
                <p>
                  Payment details are processed through the payment channels we arrange for each
                  booking. We do not store full card numbers on our systems where a payment provider
                  handles the transaction.
                </p>
              </Section>

              <Section title="9. Marketing">
                <p>
                  Where permitted by law or where you have consented, we may send information about
                  safaris and offers. You can unsubscribe at any time using the link in a message or
                  by contacting us.
                </p>
              </Section>

              <Section title="10. Retention">
                <p>
                  We keep personal information for as long as needed for the purposes in this Policy,
                  including booking records and legal requirements. When no longer required, we delete
                  or anonymise it where practicable.
                </p>
              </Section>

              <Section title="11. Your Data-Protection Rights">
                <p>
                  Subject to applicable law, you may access, correct or request deletion of personal
                  information; object to or restrict certain processing; withdraw consent; and lodge
                  a complaint with the Office of the Data Protection Commissioner. Contact{" "}
                  <a href="mailto:Wildmazesafaris@gmail.com" className="line-link">Wildmazesafaris@gmail.com</a>{" "}
                  with the subject line "Data Protection Request."
                </p>
              </Section>

              <Section title="12. Security">
                <p>
                  We use reasonable technical and organisational measures to protect personal
                  information, including access controls, secure hosting, staff confidentiality and
                  supplier due diligence. No method of transmission is completely secure.
                </p>
              </Section>

              <Section title="13. Children's Information">
                <p>
                  Our website is not directed at children. We do not knowingly collect personal
                  information from children without appropriate adult consent. If a child will
                  participate in a safari, the booking adult must provide the necessary information
                  and confirm they are authorised to do so.
                </p>
              </Section>

              <Section title="14. Third-Party Websites">
                <p>
                  Our website may link to third-party sites. We are not responsible for their privacy
                  practices. Review their policies before providing personal information.
                </p>
              </Section>

              <Section title="15. Changes to This Policy">
                <p>
                  We may update this Privacy Policy from time to time. The updated version will be
                  published on this page with a revised "Last updated" date.
                </p>
              </Section>

              <Section title="16. Contact and Complaints">
                <p>
                  Wildmaze Safaris<br />
                  Email: <a href="mailto:Wildmazesafaris@gmail.com" className="line-link">Wildmazesafaris@gmail.com</a><br />
                  Telephone: +254724433483<br />
                  Address: 19258 Nairobi
                </p>
                <p>
                  You may also contact the Office of the Data Protection Commissioner of Kenya.
                </p>
                <p className="pt-4">
                  <Link to="/terms-and-conditions" className="line-link">View our Terms & Conditions</Link>
                </p>
              </Section>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
