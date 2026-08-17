import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { navigation, site, whatsappHref } from "@/lib/site";
import { destinations, safaris } from "@/data/safaris";
import { useEnquiry } from "./EnquiryPanel";
import { cn } from "@/lib/utils";

/**
 * Fixed overlay navigation.
 * Desktop (xl+) keeps the original overlay behaviour: it samples whichever
 * section sits beneath it (sections opt in with data-nav-theme="light" | "dark").
 * Below xl the header is a solid ink band with a centred logo — the mobile
 * navigation is treated as its own experience.
 */
export function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [collectionOpen, setCollectionOpen] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const { openEnquiry } = useEnquiry();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const frame = useRef<number | null>(null);

  useEffect(() => {
    setMenuOpen(false);
    setCollectionOpen(false);
  }, [pathname]);

  useEffect(() => {
    const sample = () => {
      frame.current = null;
      setScrolled(window.scrollY > 40);
      // Ignore the header itself when sampling the section beneath it.
      const stack = document.elementsFromPoint(24, 44) as HTMLElement[];
      const owner = stack
        .filter((el) => !el.closest("header"))
        .map((el) => el.closest<HTMLElement>("[data-nav-theme]"))
        .find(Boolean);
      setTheme((owner?.dataset["navTheme"] as "light" | "dark") ?? "dark");
    };
    const onScroll = () => {
      if (frame.current === null) frame.current = requestAnimationFrame(sample);
    };
    sample();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const light = theme === "light" && !menuOpen;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[80] transition-[background-color,color,border-color] duration-500",
          // Mobile / tablet: solid ink band, always legible.
          "bg-ink text-background xl:bg-transparent",
          light ? "xl:text-background" : "xl:text-foreground",
          scrolled && !menuOpen && !light
            ? "xl:border-b xl:border-border xl:bg-background/92 xl:backdrop-blur-md"
            : "border-b border-transparent",
          menuOpen && "bg-transparent text-background xl:text-foreground",
        )}
      >
        <div className="mx-auto grid max-w-[1600px] grid-cols-[3.25rem_minmax(0,1fr)_3.25rem] items-center gap-3 px-4 py-3 sm:px-6 xl:flex xl:justify-between xl:gap-6 xl:px-12 xl:py-4">
          {/* Mobile menu trigger (left) */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="-ml-1 flex h-12 w-12 items-center justify-center xl:hidden"
          >
            <span className="relative block h-3.5 w-7">
              <span
                className={cn(
                  "absolute left-0 block h-px bg-current transition-all duration-[600ms] [transition-timing-function:var(--ease-editorial)]",
                  menuOpen ? "top-1.5 w-full rotate-45" : "top-0 w-full",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 block h-px bg-current transition-all duration-[600ms] [transition-timing-function:var(--ease-editorial)]",
                  menuOpen ? "top-1.5 w-full -rotate-45" : "top-3.5 w-3/4",
                )}
              />
            </span>
          </button>

          <Link
            to="/"
            aria-label={`${site.name} — home`}
            className="flex shrink-0 items-center justify-center xl:justify-start"
          >
            <img
              src={site.logo}
              alt={`${site.name} logo`}
              width={220}
              height={220}
              className={cn(
                "h-12 w-auto max-w-[190px] object-contain brightness-0 invert transition-[filter] duration-500 sm:h-14 xl:h-[4.5rem] xl:max-w-[230px] 2xl:h-20",
                light ? "xl:brightness-0 xl:invert" : "xl:brightness-100 xl:invert-0",
              )}
            />
            <span className="sr-only">{site.name}</span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-5 xl:flex 2xl:gap-7">
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="eyebrow line-link whitespace-nowrap text-[0.68rem] tracking-[0.18em] opacity-90 transition-opacity hover:opacity-100 2xl:text-[0.75rem] 2xl:tracking-[0.22em]"
                activeProps={{ className: "opacity-100" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-4">
            <button
              type="button"
              onClick={() => setCollectionOpen((v) => !v)}
              className="eyebrow hidden items-center gap-2 whitespace-nowrap text-[0.68rem] tracking-[0.18em] opacity-90 transition-opacity hover:opacity-100 xl:inline-flex 2xl:text-[0.75rem]"
              aria-expanded={collectionOpen}
            >
              Destinations
              <span aria-hidden className={cn("transition-transform duration-500", collectionOpen && "rotate-180")}>
                ⌄
              </span>
            </button>
            <button
              type="button"
              onClick={() => openEnquiry()}
              className="eyebrow hidden whitespace-nowrap border-b border-current pb-1 text-[0.68rem] tracking-[0.18em] transition-opacity hover:opacity-70 xl:inline-block 2xl:text-[0.75rem]"
            >
              Plan your safari
            </button>
          </div>
        </div>

        {/* Desktop collection navigation */}
        <div
          className={cn(
            "hidden overflow-hidden border-border bg-background text-foreground transition-[max-height,opacity] duration-[600ms] xl:block",
            collectionOpen ? "max-h-[520px] border-t opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="mx-auto grid max-w-[1600px] grid-cols-[1fr_1fr_460px] gap-12 px-12 py-12">
            <div>
              <p className="eyebrow text-muted-foreground">By destination</p>
              <ul className="mt-6 space-y-3">
                {destinations.map((d) => (
                  <li key={d.slug}>
                    <Link
                      to="/destinations"
                      hash={d.slug}
                      onMouseEnter={() => setPreview(d.image)}
                      onMouseLeave={() => setPreview(null)}
                      className="display-md line-link inline-block text-[1.4rem] leading-tight text-foreground/80 transition-colors hover:text-foreground"
                    >
                      {d.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow text-muted-foreground">By journey</p>
              <ul className="mt-6 space-y-3">
                {safaris.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to="/safaris/$slug"
                      params={{ slug: s.slug }}
                      onMouseEnter={() => setPreview(s.hero)}
                      onMouseLeave={() => setPreview(null)}
                      className="display-md line-link inline-block text-[1.4rem] leading-tight text-foreground/80 transition-colors hover:text-foreground"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
              {preview ? (
                <img src={preview} alt="" className="h-full w-full animate-[page-in_600ms_ease-out] object-cover" />
              ) : (
                <div className="flex h-full items-end p-6">
                  <p className="lede text-muted-foreground">
                    Kenya, Tanzania and the Indian Ocean coast.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} onEnquire={() => { setMenuOpen(false); openEnquiry(); }} />

      {/* Persistent booking bar (mobile / tablet) — mirrors the reference's fixed CTA */}
      <div className="fixed inset-x-0 bottom-0 z-[75] border-t border-background/15 bg-ink text-background xl:hidden">
        <button
          type="button"
          onClick={() => openEnquiry()}
          className="flex w-full items-center justify-center gap-4 py-4"
        >
          <span aria-hidden className="block h-5 w-0.5 bg-current" />
          <span className="font-display text-[1.6rem] leading-none font-light">Plan your safari</span>
        </button>
      </div>
    </>
  );
}

function Accordion({ title, children, index = 0 }: { title: string; children: React.ReactNode; index?: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-background/15" style={{ transitionDelay: `${index * 60}ms` }}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="display-md text-[1.6rem] leading-none">{title}</span>
        <span aria-hidden className={cn("text-xl transition-transform duration-500 [transition-timing-function:var(--ease-editorial)]", open && "rotate-45")}>
          +
        </span>
      </button>
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-[600ms] [transition-timing-function:var(--ease-editorial)]",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="pb-6">{children}</div>
        </div>
      </div>
    </div>
  );
}

function MobileMenu({
  open,
  onClose,
  onEnquire,
}: {
  open: boolean;
  onClose: () => void;
  onEnquire: () => void;
}) {
  return (
    <div
      aria-hidden={!open}
      className={cn(
        "fixed inset-0 z-[70] bg-ink text-background transition-[opacity,clip-path] duration-[700ms] [transition-timing-function:var(--ease-editorial)] xl:hidden",
        open
          ? "pointer-events-auto opacity-100 [clip-path:inset(0_0_0%_0)]"
          : "pointer-events-none opacity-0 [clip-path:inset(0_0_100%_0)]",
      )}
    >
      <div
        className="no-scrollbar h-full overflow-y-auto px-5 pb-28 pt-24 sm:px-8"
        data-visible={open}
      >
        <nav aria-label="Mobile" className="stagger flex flex-col" data-visible={open}>
          {navigation.slice(0, 2).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={onClose}
              className="display-md border-b border-background/15 py-5 text-[1.9rem] leading-none"
            >
              {item.label}
            </Link>
          ))}

          <Accordion title="Destinations">
            <ul className="space-y-3">
              {destinations.map((d) => (
                <li key={d.slug}>
                  <Link to="/destinations" hash={d.slug} onClick={onClose} className="text-base text-background/70">
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Accordion>

          <Accordion title="Safaris">
            <ul className="space-y-3">
              {safaris.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/safaris/$slug"
                    params={{ slug: s.slug }}
                    onClick={onClose}
                    className="text-base text-background/70"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Accordion>

          {navigation.slice(2).filter((n) => n.to !== "/destinations").map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={onClose}
              className="display-md border-b border-background/15 py-5 text-[1.9rem] leading-none"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-12 space-y-5">
          <button type="button" onClick={onEnquire} className="bar-link">
            Plan your safari
          </button>
          <div className="flex flex-col gap-3 pt-2 text-sm text-background/65">
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="line-link w-fit">
              WhatsApp {site.whatsapp.display}
            </a>
            {site.phones.map((p, i) => (
              <a key={p} href={`tel:${site.phoneLinks[i]}`} className="line-link w-fit">
                {p}
              </a>
            ))}
            <a href={`mailto:${site.email}`} className="line-link w-fit">
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
