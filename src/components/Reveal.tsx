import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, visible };
}

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
}

/** Text/content reveal: subtle fade + rise on entering the viewport. */
export function Reveal({ children, className, delay = 0, as: Tag = "div" }: RevealProps) {
  const { ref, visible } = useInView<HTMLDivElement>();
  return (
    <Tag
      ref={ref}
      data-visible={visible}
      className={cn("reveal", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/**
 * Masked line reveal — each line slides up from behind its own clip box.
 * Pass a string (split on \n) or an array of lines.
 */
export function MaskText({
  children,
  className,
  as: Tag = "p",
  delay = 0,
  step = 90,
}: {
  children: string | string[];
  className?: string;
  as?: ElementType;
  delay?: number;
  step?: number;
}) {
  const { ref, visible } = useInView<HTMLDivElement>(0.2);
  const lines = Array.isArray(children) ? children : children.split("\n");

  return (
    <Tag ref={ref} className={className}>
      {lines.map((line, i) => (
        <span
          key={`${line}-${i}`}
          className="mask-line"
          data-visible={visible}
          style={{ ["--reveal-delay" as string]: `${delay + i * step}ms` }}
        >
          <span>{line}</span>
        </span>
      ))}
    </Tag>
  );
}

/** Staggered entrance for a group of sibling elements. */
export function Stagger({ children, className, as: Tag = "div" }: RevealProps) {
  const { ref, visible } = useInView<HTMLDivElement>(0.15);
  return (
    <Tag ref={ref} data-visible={visible} className={cn("stagger", className)}>
      {children}
    </Tag>
  );
}


interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
}

/** Image reveal: container clips open while the image settles from 1.06 → 1. */
export function ImageReveal({
  src,
  alt,
  className,
  imgClassName,
  priority = false,
  sizes = "100vw",
}: ImageRevealProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      data-visible="true"
      className={cn("reveal-clip relative overflow-hidden bg-secondary", className)}
    >
      {failed ? (
        <div className="flex h-full w-full items-center justify-center bg-secondary">
          <span className="eyebrow text-muted-foreground">Image unavailable</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onError={() => setFailed(true)}
          className={cn("h-full w-full object-cover", imgClassName)}
        />
      )}
    </div>
  );
}
