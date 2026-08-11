import { ImageReveal } from "./Reveal";

/**
 * Cinematic page opening.
 * `video` is optional — when a client video is supplied it plays muted/looped
 * inline over the poster image, which remains the graceful fallback.
 */
export function PageHero({
  eyebrow,
  title,
  location,
  image,
  video,
  height = "tall",
  children,
}: {
  eyebrow?: string;
  title: string;
  location?: string;
  image: string;
  video?: string;
  height?: "tall" | "full";
  children?: React.ReactNode;
}) {
  return (
    <section
      data-nav-theme="light"
      className={`relative flex w-full items-end overflow-hidden bg-ink ${
        height === "full" ? "h-[100svh]" : "h-[72svh] min-h-[460px] lg:h-[86svh]"
      }`}
    >
      <img
        src={image}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="ken-burns absolute inset-0 h-full w-full object-cover"
      />
      {video ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={video}
          poster={image}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/15 to-ink/25" />

      <div className="relative z-10 w-full px-5 pb-14 text-background sm:px-8 lg:px-12 lg:pb-20">
        <div className="mx-auto max-w-[1400px]">
          {eyebrow ? <p className="eyebrow opacity-80">{eyebrow}</p> : null}
          <h1 className="display-xl mt-5 max-w-[16ch]">{title}</h1>
          {location ? <p className="eyebrow mt-6 opacity-80">{location}</p> : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}

/** Full-bleed editorial image band with parallax-free, restrained reveal. */
export function ImageBand({
  src,
  alt,
  caption,
  aspect = "aspect-[16/9]",
}: {
  src: string;
  alt: string;
  caption?: string;
  aspect?: string;
}) {
  return (
    <section data-nav-theme="dark" className="px-0 py-16 lg:py-24">
      <ImageReveal src={src} alt={alt} className={`w-full ${aspect}`} />
      {caption ? (
        <p className="mx-auto mt-5 max-w-[1400px] px-5 text-xs text-muted-foreground sm:px-8 lg:px-12">
          {caption}
        </p>
      ) : null}
    </section>
  );
}
