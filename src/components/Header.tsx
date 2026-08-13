import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { navigation, site, whatsappHref } from "@/lib/site";
import { destinations, safaris } from "@/data/safaris";
import { useEnquiry } from "./EnquiryPanel";
import { cn } from "@/lib/utils";

/**
 * Fixed overlay navigation.
 * Adapts between light and dark type by sampling whichever section sits
 * beneath it (sections opt in with data-nav-theme="light" | "dark").
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
      const el = document.elementFromPoint(24, 44);
      const owner = el?.closest<HTMLElement>("[data-nav-theme]");
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
          light ? "text-background" : "text-foreground",
          scrolled && !menuOpen && !light
            ? "border-b border-border bg-background/92 backdrop-blur-md"
            : "border-b border-transparent",
          menuOpen && "text-foreground",
        )}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-12">
          <Link to="/" aria-label={`${site.name} — home`} className="flex shrink-0 items-center gap-3">
            <img
              src={site.logo}
              alt={`${site.name} logo`}
              width={140}
              height={140}
              className={cn(
                "h-14 w-auto max-w-[210px] object-contain transition-[filter] duration-500 sm:h-16 lg:h-[4.5rem] xl:h-20",
                light && "brightness-0 invert",
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

          <div className="flex items-center gap-4">
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
              className="eyebrow hidden whitespace-nowrap border-b border-current pb-1 text-[0.68rem] tracking-[0.18em] transition-opacity hover:opacity-70 lg:inline-block 2xl:text-[0.75rem]"
            >
              Plan your safari
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="flex h-11 w-11 shrink-0 items-center justify-center xl:hidden"
            >
              <span className="relative block h-3 w-6">
                <span
                  className={cn(
                    "absolute left-0 block h-px w-full bg-current transition-transform duration-500",
                    menuOpen ? "top-1.5 rotate-45" : "top-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 block h-px w-full bg-current transition-transform duration-500",
                    menuOpen ? "top-1.5 -rotate-45" : "top-3",
                  )}
                />
              </span>
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
    </>
  );
}

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span className="eyebrow text-muted-foreground">{title}</span>
        <span aria-hidden className={cn("transition-transform duration-500", open && "rotate-45")}>
          +
        </span>
      </button>
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-[600ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]",
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
        "fixed inset-0 z-[70] bg-background transition-[opacity,transform] duration-[600ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] xl:hidden",
        open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0",
      )}
    >
      <div className="no-scrollbar h-full overflow-y-auto px-5 pb-16 pt-24 sm:px-8">
        <nav aria-label="Mobile" className="flex flex-col">
          {navigation.slice(0, 2).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={onClose}
              className="display-md border-b border-border py-4 text-[1.75rem]"
            >
              {item.label}
            </Link>
          ))}

          <Accordion title="Destinations">
            <ul className="space-y-3">
              {destinations.map((d) => (
                <li key={d.slug}>
                  <Link to="/destinations" hash={d.slug} onClick={onClose} className="display-md text-[1.35rem] text-foreground/80">
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
                    className="display-md text-[1.35rem] text-foreground/80"
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
              className="display-md border-b border-border py-4 text-[1.75rem]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-10 space-y-4">
          <button type="button" onClick={onEnquire} className="eyebrow block border-b border-foreground pb-2">
            Plan your safari
          </button>
          <div className="flex flex-col gap-3 pt-4 text-sm text-muted-foreground">
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
