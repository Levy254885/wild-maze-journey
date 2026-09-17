import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { media } from "@/data/media";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions | WildMaze Safaris" },
      {
        name: "description",
        content:
          "Terms and Conditions governing use of the Wildmaze Safaris website and the booking of safari and travel services.",
      },
      { property: "og:title", content: "Terms and Conditions | WildMaze Safaris" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms-and-conditions" },
    ],
    links: [{ rel: "canonical", href: "/terms-and-conditions" }],
  }),
  component: TermsPage,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border pt-10 first:border-0 first:pt-0">
      <h2 className="font-display text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      <div className="mt-5 space-y-4 text-base leading-relaxed text-foreground/85 sm:text-[1.0625rem]">
        {children}
      </div>
    </section>
  );
}

function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms and Conditions" image={media.gameDrive} />
      <section data-nav-theme="dark" className="bg-background px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-3xl text-foreground">
          <p className="text-sm text-foreground/70">Last updated: 2023</p>
          <div className="mt-12 space-y-12">
            <Section title="1. About These Terms">
              <p>
                These Terms and Conditions govern your use of the Wildmaze Safaris website and the
                purchase or booking of safari, travel and related services from us. By using our
                website, submitting an enquiry, accepting a quotation or making a booking, you agree
                to these Terms. If you are booking on behalf of other travellers, you confirm that
                you have authority to accept these Terms on their behalf.
              </p>
            </Section>

            <Section title="2. About Wildmaze Safaris">
              <p>
                <strong className="text-foreground">Business name:</strong> Wildmaze Safaris
                <br />
                <strong className="text-foreground">Registered business name:</strong> WILDMAZE
                SAFARIS
                <br />
                <strong className="text-foreground">Address:</strong> 19258 Westlands Nairobi
                <br />
                <strong className="text-foreground">Email:</strong>{" "}
                <a href="mailto:Wildmazesafaris@gmail.com" className="line-link text-foreground">
                  Wildmazesafaris@gmail.com
                </a>
                {" / "}
                <a href="mailto:info@wildmazesafaris.com" className="line-link text-foreground">
                  info@wildmazesafaris.com
                </a>
                <br />
                <strong className="text-foreground">Telephone:</strong> +254719222750
              </p>
              <p>
                Wildmaze Safaris arranges and provides bespoke safari and travel experiences in Kenya
                and, where agreed, other destinations.
              </p>
            </Section>

            <Section title="3. Enquiries and Quotations">
              <p>
                A quotation is prepared based on information available at the time it is issued.
                Unless otherwise stated: quotations are valid for 30 days; prices are subject to
                availability; prices may change before confirmation because of supplier availability,
                exchange rates, park fees, taxes, fuel costs or supplier price changes. A quotation
                is not a confirmed booking until we provide written confirmation and receive any
                required deposit. An itinerary may change if a requested lodge, camp, vehicle, guide,
                flight or activity becomes unavailable.
              </p>
            </Section>

            <Section title="4. Booking Confirmation">
              <p>
                The Lead Booking Name on paying the deposit acknowledges that they accept these terms
                and conditions on behalf of themselves and each travelling companion and warrants to
                the Company that they have the authority to do so.
              </p>
            </Section>

            <Section title="5. Payment and Confirmation">
              <p>
                Bookings will be confirmed upon receipt of a 40% non-refundable accommodation
                deposit. The final 60% payment plus any additional sums due to external transport or
                transfer operators is due no later than 42 days prior to the proposed date of arrival.
                If the Client makes a reservation less than 42 days prior to arrival, bookings will
                only be confirmed upon receipt of a 100% pre-payment, plus any additional sums due to
                external transport or transfer operators.
              </p>
            </Section>

            <Section title="6. What Is Included">
              <p>
                Inclusions are listed in the relevant quotation or itinerary and may include
                accommodation; meals specified; private or shared vehicle and driver-guide services;
                airport transfers; park, conservancy or activity fees specifically listed; domestic
                flights or transfers specifically listed; and selected activities specifically listed.
              </p>
            </Section>

            <Section title="7. What Is Not Included">
              <p>
                Unless expressly stated, the price does not include international flights; visas,
                passports or travel documents; travel and medical insurance; vaccinations or medical
                expenses; personal items, drinks, laundry and telephone costs; tips and gratuities;
                optional activities; excess baggage charges; additional accommodation or transport
                caused by delays; costs from missed flights or personal itinerary changes; or costs
                resulting from force majeure.
              </p>
            </Section>

            <Section title="8. Cancellation by the Client">
              <p>
                We strongly recommend travel insurance with full cancellation cover. The Client is
                liable for any payments outstanding on the date cancellation is received. Send all
                cancellations in writing to{" "}
                <a href="mailto:info@wildmazesafaris.com" className="line-link text-foreground">
                  info@wildmazesafaris.com
                </a>
                . The Company will confirm cancellation in writing with a cancellation number.
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Cancellations more than 43 days prior to arrival: 30% penalty.</li>
                <li>Cancellations within 42 days prior to arrival: 100% penalty.</li>
              </ul>
              <p className="font-medium text-foreground">Festive season</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  30% non-refundable deposit required; remaining 70% due 60 days prior to arrival.
                </li>
                <li>Cancellations more than 61 days prior: 30% penalty.</li>
                <li>Cancellations 60 days or less prior: 100% penalty.</li>
              </ul>
            </Section>

            <Section title="9. Changes by the Client">
              <p>
                Requests to change dates, destinations, accommodation or other arrangements after
                confirmation are subject to availability and may incur supplier fees and
                administrative costs. Revised price and terms will be confirmed in writing.
              </p>
            </Section>

            <Section title="10. Changes or Cancellation by Wildmaze Safaris">
              <p>
                We may change or cancel arrangements due to supplier availability, operational
                reasons, safety or force majeure. Where we make a material change, we will offer a
                suitable alternative or a refund of amounts paid for services not provided, subject
                to the booking terms and applicable law.
              </p>
            </Section>

            <Section title="11. Force Majeure">
              <p>
                We are not liable for failure or delay caused by events beyond our reasonable
                control, including natural disasters, epidemic, war, civil unrest, government action,
                industrial dispute, fire, flood or failure of utilities or transport.
              </p>
            </Section>

            <Section title="12. Travel Documents and Health">
              <p>
                You are responsible for valid passports, visas, vaccinations and health requirements.
                Please advise us of any medical, mobility or accessibility needs. Some safari
                environments have inherent access limitations.
              </p>
            </Section>

            <Section title="13. Safari and Wildlife Risks">
              <p>
                Safari travel involves inherent risks including uneven terrain, remote locations,
                wildlife encounters, rough roads, walking and water activities, insects and
                environmental hazards, limited medical access, and weather or altitude conditions. You
                must follow guide and supplier instructions and must not approach, feed or interfere
                with wildlife. You participate at your own risk, subject to rights that cannot
                lawfully be excluded.
              </p>
            </Section>

            <Section title="14. Travel Insurance">
              <p>
                Travel insurance is strongly recommended and may be required. Your policy should cover
                medical treatment, emergency evacuation, cancellation, interruption, baggage, delays,
                personal liability, and safari activities. Wildmaze Safaris is not an insurer and does
                not provide insurance coverage.
              </p>
            </Section>

            <Section title="15. Accommodation and Service Providers">
              <p>
                Accommodation, transport, flights and activities may be supplied by independent third
                parties. Their own terms may apply. We select suppliers with reasonable care but are
                not responsible for acts or omissions of independent suppliers except where liability
                cannot lawfully be excluded. Descriptions and photographs are a guide; standards and
                facilities may vary.
              </p>
            </Section>

            <Section title="16. Wildlife Sightings and Itinerary Experiences">
              <p>
                Wildlife is free-ranging and unpredictable. We cannot guarantee sightings of a
                particular animal, weather, specific rooms or experiences. Outcomes depend on natural
                and operational conditions.
              </p>
            </Section>

            <Section title="17. Customer Responsibilities">
              <p>
                You agree to provide accurate information; pay by stated deadlines; follow laws and
                supplier rules; respect communities, wildlife and the environment; follow safety
                instructions; and behave respectfully toward guides, staff and other travellers.
              </p>
            </Section>

            <Section title="18. Complaints">
              <p>
                Raise concerns during your safari with your guide or camp management as soon as
                possible. After travel, contact us in writing with full details. We will investigate
                and respond fairly.
              </p>
            </Section>

            <Section title="19. Liability">
              <p>
                Nothing in these Terms excludes liability that cannot lawfully be excluded. Subject to
                that, Wildmaze Safaris is not liable for loss arising from your failure to follow
                instructions or provide accurate information; personal changes after booking; events
                beyond our control; acts of independent suppliers (except where liability cannot be
                excluded); or indirect or consequential loss where exclusion is permitted by law.
              </p>
            </Section>

            <Section title="20. Website Content">
              <p>
                We aim to keep the website accurate but do not guarantee that all content is complete
                or error-free. You may view and print content for personal non-commercial use. You may
                not copy or commercially exploit our content without written permission.
              </p>
            </Section>

            <Section title="21. Intellectual Property">
              <p>
                Website content is owned by or licensed to Wildmaze Safaris. You must not use our
                intellectual property without prior written permission.
              </p>
            </Section>

            <Section title="22. Website Use">
              <p>
                You must not use the website unlawfully; attempt unauthorised access; upload malicious
                code; interfere with security; scrape or harvest information without permission; or
                impersonate another person.
              </p>
            </Section>

            <Section title="23. Privacy and Cookies">
              <p>
                Our collection and use of personal information is explained in our{" "}
                <Link to="/privacy-policy" className="line-link text-foreground">
                  Privacy Policy
                </Link>
                .
              </p>
            </Section>

            <Section title="24. Governing Law and Jurisdiction">
              <p>
                These Terms are governed by the laws of Kenya. Subject to mandatory consumer rights,
                disputes will be submitted to the courts of Kenya unless the parties agree otherwise.
              </p>
            </Section>

            <Section title="25. Changes to These Terms">
              <p>
                We may update these Terms from time to time. The version applicable to a booking is
                generally the version accepted when the booking is confirmed, unless a change is
                required by law or agreed in writing.
              </p>
            </Section>
          </div>
        </div>
      </section>
    </>
  );
}
