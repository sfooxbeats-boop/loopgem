import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn, CountUp } from "@/components/Animate";
import Marquee from "@/components/Marquee";

export const metadata: Metadata = {
  title: "About — LoopGem",
  description:
    "LoopGem is built by Soufiane Remdane (Sfooxbeats) — a music producer dedicated to teaching other producers how to actually get paid online.",
};

const milestones = [
  { year: "2018", t: "Bedroom studio, no clients", d: "Got serious about producing in a tiny bedroom in Casablanca. Watched every YouTube tutorial that existed." },
  { year: "2019", t: "First beat sold online", d: "Joined Fiverr, BeatStars, SoundCloud. Sold my first beat for $25. Made every mistake possible." },
  { year: "2020", t: "Launched mixing services", d: "Realized 'mixing' converted easier than 'beats'. Added it as a service. Order volume tripled in 4 months." },
  { year: "2021", t: "Hundreds of orders delivered", d: "Stopped dropping prices to compete. Started selling outcomes. Repeat clients pushed me top-rated." },
  { year: "2022", t: "Released first course", d: "After 200 DMs asking 'how' — wrote the first PDF. Sold 80 copies the first month." },
  { year: "2023", t: "Launched LoopGem", d: "Brought everything under one roof — beats, services, courses, coaching." },
  { year: "2026", t: "$127k+ · 2,019 orders · 982 clients", d: "8 years on Fiverr, 5.0 average rating. Now spending more time teaching than producing." },
];

const values = [
  { n: "01", t: "No theory", d: "Every framework was tested by me, on my own profile, with my own money. If it didn't work, it didn't make it in." },
  { n: "02", t: "No upsell trap", d: "Three courses. Three call options. That's the whole catalog. No '$2k mastermind' waiting at the end." },
  { n: "03", t: "Real receipts", d: "Every Fiverr review you see on this site is real and verifiable. No bots. No paid testimonials." },
  { n: "04", t: "Producer-first", d: "Built by a producer, for producers. Not a marketing guru who happens to know about music." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: "88px 0 32px", position: "relative" }}>
        <div className="glow-radial" aria-hidden="true" />
        <div className="container-lg" style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.7fr 1fr",
              gap: 56,
              alignItems: "end",
            }}
            className="about-hero-grid"
          >
            <div>
              <FadeIn>
                <div className="section-label" style={{ marginBottom: 24 }}>
                  About · The producer
                </div>
              </FadeIn>
              <FadeIn delay={0.06}>
                <h1
                  className="font-display"
                  style={{
                    fontSize: "clamp(48px, 8vw, 112px)",
                    lineHeight: 0.92,
                    margin: "0 0 28px",
                    paddingBottom: "0.08em",
                  }}
                >
                  Soufiane
                  <br />
                  Remdane.
                  <br />
                  <span className="text-gold-gradient">aka Sfooxbeats.</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.14}>
                <p
                  style={{
                    color: "var(--fg-muted)",
                    fontSize: 19,
                    lineHeight: 1.6,
                    maxWidth: 580,
                    margin: 0,
                  }}
                >
                  Music producer. On Fiverr since 2018, top-rated since 2020. $127k+ generated
                  across 2,019 orders for 982 unique clients — built entirely from a bedroom
                  studio. Now teaching other producers how to do the same, without the gatekeeping.
                </p>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <div style={{ borderRadius: "var(--radius-lg)", overflow: "hidden", aspectRatio: "4 / 5" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/sfooxbeats-studio.png"
                  alt="Sfooxbeats in his studio"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
                />
              </div>
            </FadeIn>
          </div>
          <style>{`
            @media (max-width: 880px) {
              .about-hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
            }
          `}</style>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: "88px 0" }}>
        <div
          className="container-lg about-story-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80 }}
        >
          <FadeIn>
            <div style={{ position: "sticky", top: 96 }}>
              <div className="section-label">The story</div>
              <h2
                className="font-display"
                style={{ fontSize: 44, lineHeight: 0.95, margin: "8px 0 0" }}
              >
                From bedroom to <span className="text-gold-gradient">top-rated.</span>
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.12}>
            <div className="prose">
              <p>
                I started producing in 2018 with a laptop and a $30 mic. The first two years were
                brutal. Every gig I posted on Fiverr got buried. Every cold DM I sent got ignored.
                I lowered my prices to $5, then to free, then to &ldquo;I&apos;ll do anything for
                a portfolio piece.&rdquo;
              </p>
              <p>
                Around 2020 something clicked. I stopped trying to &ldquo;sell beats&rdquo; and
                started selling <strong>outcomes</strong> — the song the artist actually wanted in
                their head. I rebuilt my profile around it. Orders started coming in. Then more.
                Then enough to quit doing client work I hated.
              </p>
              <p>
                Today LoopGem is the result of 7 years of figuring this out the hard way. The
                courses are the system, written down in plain language. The coaching calls are me
                applying that system to your profile, your genre, your gigs.
              </p>
              <p>
                I&apos;m not a marketing guru. I&apos;m a producer who learned how to sell —
                because if I hadn&apos;t, I&apos;d still be making free beats in that bedroom.
              </p>
            </div>
          </FadeIn>
          <style>{`
            @media (max-width: 880px) {
              .about-story-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
            }
          `}</style>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "0 0 88px" }}>
        <div className="container-lg">
          <div
            style={{
              border: "1px solid var(--border-strong)",
              background: "var(--bg-2)",
              borderRadius: "var(--radius-lg)",
              padding: "56px 48px",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 32,
            }}
            className="stats-strip"
          >
            {[
              { v: 127, prefix: "$", suffix: "k", label: "Generated on Fiverr" },
              { v: 2019, label: "Orders delivered" },
              { v: 982, label: "Unique clients" },
              { v: 5.0, dec: 1, label: "★ Average rating" },
            ].map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.08}>
                <div>
                  <div
                    className="font-display"
                    style={{
                      fontSize: "clamp(48px, 6vw, 84px)",
                      color: "var(--accent)",
                      lineHeight: 1,
                      marginBottom: 8,
                    }}
                  >
                    <CountUp
                      to={s.v}
                      prefix={s.prefix || ""}
                      suffix={s.suffix || ""}
                      decimals={s.dec || 0}
                    />
                  </div>
                  <div className="h-eyebrow" style={{ color: "var(--fg-dim)" }}>
                    {s.label}
                  </div>
                </div>
              </FadeIn>
            ))}
            <style>{`
              @media (max-width: 880px) {
                .stats-strip { grid-template-columns: repeat(2, 1fr) !important; padding: 32px !important; gap: 24px !important; }
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: "0 0 120px" }}>
        <div className="container-lg">
          <SectionHeader
            eyebrow="The road"
            title={
              <>
                Seven years. <span className="text-gold-gradient">Receipts attached.</span>
              </>
            }
          />
          <FadeIn>
            <div>
              {milestones.map((m) => (
                <div key={m.year} className="tl-row">
                  <div className="tl-year">{m.year}</div>
                  <div>
                    <div
                      className="font-display"
                      style={{ fontSize: 24, lineHeight: 1.05, marginBottom: 6 }}
                    >
                      {m.t}
                    </div>
                    <p
                      style={{
                        color: "var(--fg-muted)",
                        margin: 0,
                        fontSize: 15,
                        lineHeight: 1.6,
                        maxWidth: 720,
                      }}
                    >
                      {m.d}
                    </p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid var(--border)" }} />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "0 0 120px" }}>
        <div className="container-lg">
          <SectionHeader eyebrow="How I operate" title="Four rules. No exceptions." />
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}
            className="grid-4-2"
          >
            {values.map((v, i) => (
              <FadeIn key={v.n} delay={i * 0.08}>
                <div className="problem-card">
                  <span className="problem-num">{v.n}</span>
                  <h3
                    className="font-display"
                    style={{ fontSize: 22, margin: "0 0 10px", lineHeight: 1.05 }}
                  >
                    {v.t}
                  </h3>
                  <p
                    style={{
                      color: "var(--fg-muted)",
                      fontSize: 14,
                      lineHeight: 1.55,
                      margin: 0,
                    }}
                  >
                    {v.d}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
          <style>{`
            @media (max-width: 1024px) { .grid-4-2 { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (max-width: 560px) { .grid-4-2 { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>

      <Marquee
        items={[
          "Casablanca · Producer · 2018→",
          "Sfooxbeats · @Sfoox_beats",
          "No gatekeeping. No fluff.",
        ]}
        accent
      />

      {/* CTA */}
      <section style={{ padding: "120px 0 80px" }}>
        <div className="container-lg" style={{ textAlign: "center", maxWidth: 880 }}>
          <FadeIn>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(44px, 8vw, 96px)",
                lineHeight: 0.94,
                margin: "0 0 24px",
                paddingBottom: "0.05em",
              }}
            >
              Ready to actually <span className="text-gold-gradient">get paid?</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.08}>
            <p
              style={{
                color: "var(--fg-muted)",
                fontSize: 18,
                maxWidth: 560,
                margin: "0 auto 32px",
              }}
            >
              Start with a course. Or skip the reading and book me on Zoom.
            </p>
          </FadeIn>
          <FadeIn delay={0.16}>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/courses" className="btn btn-primary">
                See the courses
              </Link>
              <Link href="/booking" className="btn btn-ghost">
                Book a call
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

function SectionHeader({
  eyebrow,
  title,
}: {
  eyebrow?: string;
  title: React.ReactNode;
}) {
  return (
    <div style={{ margin: "0 0 56px", maxWidth: 720 }}>
      {eyebrow && (
        <FadeIn>
          <div className="section-label">{eyebrow}</div>
        </FadeIn>
      )}
      <FadeIn delay={0.08}>
        <h2 className="font-display section-h">{title}</h2>
      </FadeIn>
    </div>
  );
}
