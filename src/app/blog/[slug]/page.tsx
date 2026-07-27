import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "../posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found | LoopGem" };

  const url = `https://www.loopgem.com/blog/${post.slug}`;
  return {
    title: post.metaTitle,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.metaTitle,
      description: post.description,
      url,
      siteName: "LoopGem",
      type: "article",
      publishedTime: post.date,
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const url = `https://www.loopgem.com/blog/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "Soufiane Remdane",
      alternateName: "Sfooxbeats",
    },
    publisher: {
      "@type": "Organization",
      name: "LoopGem",
      url: "https://www.loopgem.com",
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.loopgem.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.loopgem.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article style={{ padding: "72px 0 96px", position: "relative" }}>
        <div className="glow-radial" aria-hidden="true" />
        <div
          className="container-lg"
          style={{ position: "relative", maxWidth: 760 }}
        >
          {/* Breadcrumb */}
          <nav
            style={{
              display: "flex",
              gap: 8,
              alignItems: "center",
              fontSize: 13,
              color: "var(--fg-dim)",
              marginBottom: 28,
            }}
          >
            <Link href="/" style={{ color: "var(--fg-muted)" }}>
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog" style={{ color: "var(--fg-muted)" }}>
              Blog
            </Link>
          </nav>

          <div
            className="h-eyebrow"
            style={{ color: "var(--accent)", marginBottom: 16 }}
          >
            {post.readingMinutes} min read
          </div>

          <h1
            className="font-display"
            style={{
              fontSize: "clamp(36px, 5.5vw, 60px)",
              lineHeight: 1.02,
              margin: "0 0 28px",
              paddingBottom: "0.04em",
            }}
          >
            {post.title}
          </h1>

          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <div
            style={{
              marginTop: 56,
              border: "1px solid var(--border-strong)",
              background: "var(--bg-2)",
              borderRadius: "var(--radius-lg)",
              padding: "36px 32px",
            }}
          >
            <h2
              className="font-display"
              style={{ fontSize: 28, margin: "0 0 12px", lineHeight: 1.05 }}
            >
              Want the full system?
            </h2>
            <p
              style={{
                color: "var(--fg-muted)",
                fontSize: 16,
                lineHeight: 1.6,
                margin: "0 0 20px",
              }}
            >
              These guides are the free version. The courses are the full
              step-by-step system: gig setup, scripts, and pricing maps that
              generated $127k+ in real orders.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/courses" className="btn btn-primary">
                Browse the courses →
              </Link>
              <Link href="/booking" className="btn btn-ghost">
                Book a 1-on-1 call
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
