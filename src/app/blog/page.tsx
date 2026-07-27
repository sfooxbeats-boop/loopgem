import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "./posts";

export const metadata: Metadata = {
  title: "Blog — How to Sell Beats & Make Money as a Producer | LoopGem",
  description:
    "Real, no-fluff guides on selling beats online, pricing your work, promoting your music, and making money as a music producer — from a top-rated seller.",
  alternates: { canonical: "https://www.loopgem.com/blog" },
  openGraph: {
    title: "Blog — How to Sell Beats & Make Money as a Producer | LoopGem",
    description:
      "Real, no-fluff guides on selling beats online, pricing your work, and making money as a music producer.",
    url: "https://www.loopgem.com/blog",
    siteName: "LoopGem",
    type: "website",
    images: ["/opengraph-image"],
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "LoopGem Blog",
  description:
    "Guides on selling beats online, pricing, promotion, and making money as a music producer.",
  url: "https://www.loopgem.com/blog",
  publisher: { "@type": "Organization", name: "LoopGem" },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <section style={{ padding: "88px 0 64px", position: "relative" }}>
        <div className="glow-radial" aria-hidden="true" />
        <div className="container-lg" style={{ position: "relative" }}>
          <div className="section-label" style={{ marginBottom: 24 }}>
            The Blog
          </div>
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(48px, 8vw, 104px)",
              lineHeight: 0.95,
              margin: "0 0 24px",
              maxWidth: 1000,
              paddingBottom: "0.08em",
            }}
          >
            Sell beats. Get paid.{" "}
            <span className="text-gold-gradient">Learn how.</span>
          </h1>
          <p
            style={{
              color: "var(--fg-muted)",
              fontSize: 18,
              lineHeight: 1.6,
              maxWidth: 620,
              margin: 0,
            }}
          >
            No-fluff guides on selling beats online, pricing your work, promoting
            your music, and turning production into real income — written from
            $127k+ of actual orders, not theory.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 0 120px" }}>
        <div className="container-lg">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: 24,
            }}
          >
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card"
                style={{
                  padding: 32,
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  background: "var(--bg-2)",
                  textDecoration: "none",
                  color: "var(--fg)",
                  height: "100%",
                }}
              >
                <div
                  className="h-eyebrow"
                  style={{ color: "var(--accent)" }}
                >
                  {post.readingMinutes} min read
                </div>
                <h2
                  className="font-display"
                  style={{
                    fontSize: "clamp(22px, 2.4vw, 28px)",
                    lineHeight: 1.05,
                    margin: 0,
                  }}
                >
                  {post.title}
                </h2>
                <p
                  style={{
                    color: "var(--fg-muted)",
                    fontSize: 15,
                    lineHeight: 1.6,
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {post.excerpt}
                </p>
                <span
                  style={{
                    color: "var(--accent)",
                    fontWeight: 700,
                    fontSize: 14,
                    marginTop: 4,
                  }}
                >
                  Read the guide →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
