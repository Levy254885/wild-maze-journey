import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EnquiryProvider } from "@/components/EnquiryPanel";
import { site } from "@/lib/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[90vh] items-center bg-background px-5 pt-32 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-[1400px]">
        <p className="eyebrow text-muted-foreground">404</p>
        <h1 className="display-xl mt-6 max-w-[14ch]">This page has wandered off</h1>
        <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">
          The page you are looking for no longer exists, or the link has changed. Return to the
          beginning, or speak to us about planning a journey.
        </p>
        <div className="mt-10 flex flex-wrap gap-10">
          <Link to="/" className="eyebrow border-b border-foreground pb-1">Homepage</Link>
          <Link to="/safaris" className="eyebrow border-b border-foreground pb-1">Our safaris</Link>
          <Link to="/contact" className="eyebrow border-b border-foreground pb-1">Contact</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[90vh] items-center bg-background px-5 pt-32 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-[1400px]">
        <p className="eyebrow text-muted-foreground">Something went wrong</p>
        <h1 className="display-lg mt-6 max-w-[16ch]">This page didn&rsquo;t load</h1>
        <div className="mt-10 flex flex-wrap gap-10">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="eyebrow border-b border-foreground pb-1"
          >
            Try again
          </button>
          <a href="/" className="eyebrow border-b border-foreground pb-1">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "WildMaze Safaris — Luxury tailor-made safaris in Kenya & East Africa" },
      {
        name: "description",
        content:
          "WildMaze Safaris designs private, tailor-made luxury safaris across Kenya, Tanzania and the Indian Ocean coast.",
      },
      { property: "og:site_name", content: site.name },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#1b2f24" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://images.unsplash.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300&family=Jost:wght@300;400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: site.name,
          email: site.email,
          telephone: site.phoneLinks,
          areaServed: ["Kenya", "Tanzania", "East Africa"],
          url: site.base,
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <QueryClientProvider client={queryClient}>
      <EnquiryProvider>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-background focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" key={pathname} className="page-enter min-h-screen">
          <Outlet />
        </main>
        <Footer />
      </EnquiryProvider>
    </QueryClientProvider>
  );
}
