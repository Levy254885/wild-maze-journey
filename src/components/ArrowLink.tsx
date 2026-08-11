import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import type { ComponentProps, ReactNode } from "react";

function Arrow() {
  return (
    <svg width="18" height="8" viewBox="0 0 18 8" fill="none" aria-hidden="true">
      <path d="M0 4h16M13 1l3 3-3 3" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

type ArrowLinkProps = {
  children: ReactNode;
  className?: string;
  params?: Record<string, string>;
} & Omit<ComponentProps<typeof Link>, "children" | "className" | "params">;

/** Understated editorial link with a nudging arrow. */
export function ArrowLink({ children, className, ...props }: ArrowLinkProps) {
  const linkProps = props as ComponentProps<typeof Link>;
  return (
    <Link {...linkProps} className={cn("arrow-link", className)}>
      <span>{children}</span>
      <Arrow />
    </Link>
  );
}

export function ArrowButton({
  children,
  className,
  ...props
}: { children: ReactNode } & ComponentProps<"button">) {
  return (
    <button type="button" {...props} className={cn("arrow-link", className)}>
      <span>{children}</span>
      <Arrow />
    </button>
  );
}

export function ArrowAnchor({
  children,
  className,
  ...props
}: { children: ReactNode } & ComponentProps<"a">) {
  return (
    <a {...props} className={cn("arrow-link", className)}>
      <span>{children}</span>
      <Arrow />
    </a>
  );
}
