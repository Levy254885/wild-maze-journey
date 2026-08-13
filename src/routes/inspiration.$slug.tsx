import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ArrowLink } from "@/components/ArrowLink";
import { articles } from "@/data/articles";

export const Route = createFileRoute("/inspiration/$slug")({
  loader: ({ params }) => {
    const article = articles.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article not found — WildMaze Safaris" }, { name: "robots", content: "noindex" }] };
    }
    const { article } = loaderData;
    return {
      meta: [
        { title: `${article.title} — WildMaze Safaris` },
        { name: "description", content: article.excerpt },
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/inspiration/${article.slug}` },
      ],
      links: [{ rel: "canonical", href: `/inspiration/${article.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.excerpt,
            datePublished: article.date,
          }),
        },
      ],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  return (
    <>
      <PageHero eyebrow={`${article.category} — ${article.readingTime}`} title={article.title} image={article.image} />
      <section data-nav-theme="dark" className="bg-background px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1400px] grid gap-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1.4fr)] lg:gap-24">
          <Reveal>
            <p className="eyebrow text-muted-foreground">
              {new Date(article.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
            </p>
          </Reveal>
          <div>
            <Reveal><p className="lede text-muted-foreground">{article.excerpt}</p></Reveal>
            <div className="mt-10 max-w-2xl space-y-6 text-sm leading-relaxed text-muted-foreground">
              {article.body.map((p: string, i: number) => <p key={i}>{p}</p>)}
            </div>
            <ArrowLink to="/inspiration" className="mt-12">Back to the journal</ArrowLink>
          </div>
        </div>
      </section>
    </>
  );
}
