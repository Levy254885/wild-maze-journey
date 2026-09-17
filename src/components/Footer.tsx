import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { z } from "zod";
import { navigation, site, whatsappHref } from "@/lib/site";
import { useEnquiry } from "./EnquiryPanel";

const newsletterSchema = z.object({
  firstName: z.string().trim().min(1, "Required").max(60),
  lastName: z.string().trim().min(1, "Required").max(60),
  country: z.string().trim().min(1, "Required").max(60),
  email: z.string().trim().email("Please enter a valid email address").max(160),
  consent: z.literal(true, { errorMap: () => ({ message: "Please confirm to continue" }) }),
});

const field =
  "w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm font-light transition-colors placeholder:text-muted-foreground/70 focus:border-foreground focus:outline-none";

function Newsletter() {
  const [state, setState] = useState({ firstName: "", lastName: "", country: "", email: "", consent: false });
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  return (
    <section aria-labelledby="newsletter-title" className="border-t border-border bg-background px-5 py-20 sm:px-8 lg:px-12 lg:py-28" data-nav-theme="dark">
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-24">
        <div>
          <p className="eyebrow text-muted-foreground">Newsletter</p>
          <h2 id="newsletter-title" className="display-lg mt-6">
            Let&rsquo;s stay in touch
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Occasional letters from the field — where the herds are, which camps have just opened,
            and journeys we are quietly excited about.
          </p>
        </div>

        {done ? (
          <p className="lede self-center">
            Thank you. We&rsquo;ll be in touch when there is something worth reading.
          </p>
        ) : (
          <form
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              const parsed = newsletterSchema.safeParse(state);
              if (!parsed.success) {
                setError(parsed.error.issues[0]?.message ?? "Please check the form");
                return;
              }
              setError(null);
              setDone(true);
            }}
            className="grid gap-x-10 gap-y-6 sm:grid-cols-2"
          >
            <div>
              <label htmlFor="nl-first" className="eyebrow text-muted-foreground">First name</label>
              <input id="nl-first" className={field} value={state.firstName} onChange={(e) => setState({ ...state, firstName: e.target.value })} autoComplete="given-name" />
            </div>
            <div>
              <label htmlFor="nl-last" className="eyebrow text-muted-foreground">Last name</label>
              <input id="nl-last" className={field} value={state.lastName} onChange={(e) => setState({ ...state, lastName: e.target.value })} autoComplete="family-name" />
            </div>
            <div>
              <label htmlFor="nl-country" className="eyebrow text-muted-foreground">Country</label>
              <input id="nl-country" className={field} value={state.country} onChange={(e) => setState({ ...state, country: e.target.value })} autoComplete="country-name" />
            </div>
            <div>
              <label htmlFor="nl-email" className="eyebrow text-muted-foreground">Email</label>
              <input id="nl-email" type="email" className={field} value={state.email} onChange={(e) => setState({ ...state, email: e.target.value })} autoComplete="email" />
            </div>
            <label className="flex items-start gap-3 pt-2 text-xs leading-relaxed text-muted-foreground sm:col-span-2">
              <input
                type="checkbox"
                checked={state.consent}
                onChange={(e) => setState({ ...state, consent: e.target.checked })}
                className="mt-0.5 h-4 w-4 shrink-0 accent-[oklch(0.32_0.056_152)]"
              />
              I agree to receive occasional emails from {site.name} and have read the{" "}
              <Link to="/privacy-policy" className="line-link text-foreground">privacy policy</Link>.
            </label>
            {error ? (
              <p role="alert" className="text-xs text-destructive sm:col-span-2">{error}</p>
            ) : null}
            <div className="sm:col-span-2">
              <button type="submit" className="eyebrow inline-flex items-center gap-4 border-b border-foreground pb-2 transition-opacity hover:opacity-70">
                Subscribe
                <svg width="18" height="8" viewBox="0 0 18 8" fill="none" aria-hidden="true">
                  <path d="M0 4h16M13 1l3 3-3 3" stroke="currentColor" strokeWidth="1" />
                </svg>
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

export function Footer() {
  const { openEnquiry } = useEnquiry();

  return (
    <>
      <Newsletter />
      <footer data-nav-theme="light" className="bg-ink px-5 pb-10 pt-20 text-background sm:px-8 lg:px-12 lg:pt-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-20">
            <div>
              <img src={site.logo} alt={`${site.name} logo`} className="h-24 w-auto brightness-0 invert sm:h-32" />
              <p className="display-lg mt-10 max-w-[13ch] leading-[1.05]">
                Wild places, travelled well.
              </p>
              <button
                type="button"
                onClick={() => openEnquiry()}
                className="eyebrow mt-10 inline-flex items-center gap-4 border-b border-background pb-2 transition-opacity hover:opacity-70"
              >
                Plan your safari
                <svg width="18" height="8" viewBox="0 0 18 8" fill="none" aria-hidden="true">
                  <path d="M0 4h16M13 1l3 3-3 3" stroke="currentColor" strokeWidth="1" />
                </svg>
              </button>
            </div>

            <div className="grid gap-10 sm:grid-cols-3">
              <div>
                <p className="eyebrow opacity-60">Explore</p>
                <ul className="mt-6 space-y-3 text-sm font-light">
                  {navigation.map((n) => (
                    <li key={n.to}>
                      <Link to={n.to} className="line-link opacity-85 hover:opacity-100">{n.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow opacity-60">Plan</p>
                <ul className="mt-6 space-y-3 text-sm font-light">
                  <li>
                    <button type="button" onClick={() => openEnquiry()} className="line-link opacity-85 hover:opacity-100">
                      Plan your safari
                    </button>
                  </li>
                  <li><Link to="/contact" className="line-link opacity-85 hover:opacity-100">Contact us</Link></li>
                  <li>
                    <a href={whatsappHref} target="_blank" rel="noreferrer" className="line-link opacity-85 hover:opacity-100">
                      WhatsApp
                    </a>
                  </li>
                  <li>
                    <a href={`tel:${site.phoneLinks[0]}`} className="line-link opacity-85 hover:opacity-100">Call us</a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="eyebrow opacity-60">Contact</p>
                <ul className="mt-6 space-y-3 text-sm font-light">
                  {site.phones.map((p, i) => (
                    <li key={p}>
                      <a href={`tel:${site.phoneLinks[i]}`} className="line-link opacity-85 hover:opacity-100">{p}</a>
                    </li>
                  ))}
                  <li>
                    <a href={whatsappHref} target="_blank" rel="noreferrer" className="line-link opacity-85 hover:opacity-100">
                      WhatsApp {site.whatsapp.display}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${site.email}`} className="line-link break-all opacity-85 hover:opacity-100">{site.email}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-20 flex flex-col gap-5 border-t border-background/20 pt-7 text-xs font-light opacity-70 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <ul className="flex flex-wrap gap-6">
              <li><Link to="/privacy-policy" className="line-link">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="line-link">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
