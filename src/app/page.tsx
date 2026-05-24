"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FadeIn, CountUp } from "@/components/Animate";
import Marquee from "@/components/Marquee";
import VideoBlock from "@/components/VideoBlock";

const proofScreenshots = [
  "/proof/r1.jpeg",
  "/proof/r2.jpeg",
  "/proof/r3.jpeg",
  "/proof/r4.jpeg",
  "/proof/r5.jpeg",
  "/proof/r6.jpeg",
  "/proof/r7.jpeg",
  "/proof/r8.jpeg",
  "/proof/r9.jpeg",
  "/proof/r10.jpeg",
];

const homeProblems = [
  { n: "01", t: "Your Fiverr profile is set up but gets zero orders", d: "You filled everything in. Clients scroll past you. You don't know why." },
  { n: "02", t: "You're giving your music away too cheap — or for free", d: "Artists lowball you and you say yes because you don't have a better option yet." },
  { n: "03", t: "No clients for mixing or production services", d: "You know you're good but you can't figure out how to get people to pay you for it." },
  { n: "04", t: "You don't know what to post or how to market yourself", d: "You post here and there but nothing converts. No strategy, no consistency, no results." },
];

const homeCourses = [
  {
    id: "fiverr",
    badge: "01 / Beat Selling",
    title: "Fiverr Beat Seller Blueprint",
    desc: "The exact gig setup, pricing tiers, keywords, and outreach scripts that took me from zero orders to a top-rated beat seller.",
    bullets: ["Gig anatomy that actually ranks", "Pricing tiers that convert", "Buyer-request templates"],
    price: 27,
    tag: "PDF Course",
  },
  {
    id: "services",
    badge: "02 / Music Services",
    title: "Sell Music Services on Fiverr",
    desc: "How to position mixing, mastering, vocal tuning, and custom production as premium services — and get clients to choose you over cheaper sellers.",
    bullets: ["Service positioning frameworks", "Sample-pack pricing maps", "Client onboarding scripts"],
    price: 27,
    tag: "PDF Course",
  },
  {
    id: "playbook",
    badge: "03 / Bundle",
    title: "Full Freelance Music Producer Playbook",
    desc: "The complete system. Beats + services + marketing + retention. Built for producers who want this to actually replace their day job.",
    bullets: ["Everything in 01 + 02", "Outreach + marketing system", "Long-term retention playbook"],
    price: 47,
    tag: "Bundle · Best Value",
    featured: true,
  },
];

const homeCoaching = [
  { name: "Starter Session", duration: "30 min", price: 49.99, desc: "A single focused call. Audit your profile, fix what's broken, leave with a 30-day plan." },
  { name: "Sales Strategy Call", duration: "60 min", price: 89.99, desc: "Deep-dive on pricing, positioning and outreach. We map out your next 90 days together.", featured: true },
  { name: "Freelancer Blueprint", duration: "4 × 60 min", price: 299.99, desc: "Four weekly calls. Profile rebuild, first paying clients, retention system, ongoing accountability." },
];

const homeTestimonials = [
  { name: "herecomesfriday", stars: 5, quote: "He and his crew did an amazing job designing the beats. They fit my song ideas perfectly!", scores: { c: 5.0, q: 5.0, v: 5.0 } },
  { name: "lvn_strng", stars: 5, quote: "Amazing production quality. The delivery and time frame were amazing. Fulfilled my custom order perfectly.", scores: { c: 5.0, q: 5.0, v: 4.0 } },
  { name: "Arella", stars: 5, quote: "Great custom beat made for my song in less than 24 hours. I recommend!", scores: { c: 5.0, q: 5.0, v: 5.0 } },
  { name: "Tony L", stars: 5, quote: "Great job! Will be back for the next project.", scores: { c: 5.0, q: 5.0, v: 5.0 } },
  { name: "pcronin20", stars: 5, quote: "Once again, a great experience. Thanks!", scores: { c: 5.0, q: 5.0, v: 5.0 } },
  { name: "bullygraphics", stars: 5, quote: "He listened to what I wanted and delivered!", scores: { c: 5.0, q: 5.0, v: 5.0 } },
  { name: "Pascal Gebert", stars: 5, quote: "Another good experience — thank you so much!", scores: { c: 5.0, q: 5.0, v: 5.0 } },
  { name: "antoniodela", stars: 5, quote: "Top top top 👌", scores: { c: 5.0, q: 5.0, v: 5.0 } },
  { name: "marioalvz", stars: 5, quote: "Producer goes above and beyond. Worth every cent.", scores: { c: 5.0, q: 5.0, v: 5.0 } },
  { name: "dnkbk", stars: 5, quote: "Communication 10/10, mix sounded label-ready.", scores: { c: 5.0, q: 5.0, v: 5.0 } },
];

const proofPositions = [
  { left: "50%", top: "50%", rot: -8, w: 280, z: 5 },
  { left: "22%", top: "34%", rot: -14, w: 270, z: 2 },
  { left: "78%", top: "36%", rot: 12, w: 270, z: 3 },
  { left: "14%", top: "66%", rot: 6, w: 250, z: 1 },
  { left: "86%", top: "68%", rot: -10, w: 250, z: 4 },
  { left: "35%", top: "22%", rot: -4, w: 230, z: 6 },
  { left: "64%", top: "22%", rot: 10, w: 230, z: 7 },
  { left: "32%", top: "76%", rot: 14, w: 240, z: 8 },
  { left: "68%", top: "78%", rot: -8, w: 240, z: 9 },
  { left: "50%", top: "20%", rot: 4, w: 220, z: 10 },
];

const proofPositionsMobile = [
  { left: "50%", top: "50%", rot: -6, w: 150, z: 10 },
  { left: "28%", top: "30%", rot: -12, w: 135, z: 5 },
  { left: "72%", top: "32%", rot: 10, w: 135, z: 6 },
  { left: "20%", top: "72%", rot: 6, w: 125, z: 4 },
  { left: "80%", top: "74%", rot: -8, w: 125, z: 3 },
  { left: "50%", top: "16%", rot: 2, w: 120, z: 8 },
  { left: "32%", top: "52%", rot: -3, w: 120, z: 7 },
  { left: "68%", top: "54%", rot: 8, w: 120, z: 9 },
  { left: "35%", top: "88%", rot: 12, w: 115, z: 2 },
  { left: "65%", top: "90%", rot: -10, w: 115, z: 1 },
];

export default function Home() {
  return (
    <>
      {/* VIDEO (first thing) */}
      <section style={{ padding: "40px 0 24px", position: "relative" }}>
        <div className="glow-radial" aria-hidden="true" />
        <div className="container-lg" style={{ position: "relative", zIndex: 1 }}>
          <FadeIn>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                flexWrap: "wrap",
                gap: 16,
                marginBottom: 20,
              }}
            >
              <div>
                <div className="section-label" style={{ marginBottom: 12 }}>
                  Watch first · 2 min
                </div>
                <h1
                  className="font-display"
                  style={{
                    fontSize: "clamp(28px, 4vw, 44px)",
                    lineHeight: 1,
                    margin: 0,
                    paddingBottom: "0.04em",
                  }}
                >
                  How producers actually{" "}
                  <span style={{ color: "var(--accent)" }}>get paid online.</span>
                </h1>
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/courses" className="btn btn-primary">
                  Get the courses →
                </Link>
                <Link href="/booking" className="btn btn-ghost">
                  Book a 1-on-1
                </Link>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.12}>
            <VideoBlock />
          </FadeIn>
          <FadeIn delay={0.2}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginTop: 18,
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
                <div style={{ display: "flex" }}>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="avatar-ph"
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 999,
                        marginLeft: i ? -10 : 0,
                        fontSize: 9,
                      }}
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <div style={{ color: "var(--accent)", fontSize: 13 }}>
                  ★★★★★ <span style={{ color: "var(--fg-muted)" }}>5.0 · 2,019 Fiverr orders</span>
                </div>
              </div>
              <div className="h-eyebrow" style={{ color: "var(--fg-dim)" }}>
                Sfooxbeats · Producer education · Est. 2018
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* HERO */}
      <section className="hero" style={{ paddingTop: 32 }}>
        <div className="container-lg" style={{ position: "relative", zIndex: 1 }}>
          <FadeIn delay={0.06}>
            <h2 className="font-display hero-headline" style={{ margin: 0 }}>
              Sell beats.
              <br />
              Sell services.
              <br />
              <em>Stop guessing.</em>
            </h2>
          </FadeIn>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr",
              gap: 56,
              marginTop: 56,
              alignItems: "end",
            }}
            className="hero-grid"
          >
            <FadeIn delay={0.14}>
              <p className="hero-sub">
                Real producer education from Sfooxbeats. Courses and 1-on-1 coaching that teach you
                how to turn your beats, mixes, and production into a real freelance income — on
                Fiverr and beyond.
              </p>
              <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
                <Link href="/courses" className="btn btn-primary">
                  Get the courses →
                </Link>
                <Link href="/booking" className="btn btn-ghost">
                  Book a 1-on-1
                </Link>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 16,
                  marginTop: 28,
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex" }}>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="avatar-ph"
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 999,
                        marginLeft: i ? -10 : 0,
                        fontSize: 9,
                      }}
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div style={{ color: "var(--accent)", fontSize: 13 }}>
                    ★★★★★{" "}
                    <span style={{ color: "var(--fg-muted)" }}>
                      5.0 average · 2,019 Fiverr orders
                    </span>
                  </div>
                  <div className="h-eyebrow" style={{ color: "var(--fg-dim)", marginTop: 4 }}>
                    Trusted by independent producers worldwide
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.22}>
              <div className="hero-stats">
                <div className="stat-tile">
                  <span className="stat-value">
                    <CountUp to={127} prefix="$" suffix="k" />
                  </span>
                  <span className="stat-label">Generated on Fiverr</span>
                </div>
                <div className="stat-tile">
                  <span className="stat-value">
                    <CountUp to={2019} />
                  </span>
                  <span className="stat-label">Orders delivered</span>
                </div>
                <div className="stat-tile">
                  <span className="stat-value">
                    <CountUp to={982} />
                  </span>
                  <span className="stat-label">Unique clients</span>
                </div>
                <div className="stat-tile">
                  <span className="stat-value">
                    <CountUp to={5.0} decimals={1} />
                  </span>
                  <span className="stat-label">Average rating</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 880px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>

      <Marquee
        items={[
          "Built by a producer, for producers",
          "Sfooxbeats · 5.0 ★ Fiverr",
          "$27 · $47 · $89.99",
          "No fluff. No theory.",
          "Real numbers. Real clients.",
        ]}
      />

      {/* PROBLEM */}
      <section style={{ padding: "120px 0" }}>
        <div className="container-lg">
          <SectionHeader
            eyebrow="The Producer Trap"
            title={
              <>
                You don&apos;t have a <span className="text-gold-gradient">talent problem.</span>
                <br />
                You have a{" "}
                <em style={{ color: "var(--accent)", fontStyle: "normal" }}>sales</em> problem.
              </>
            }
            sub="The producers making money online aren't always the best. They're the ones who figured out how to position, price, and pitch. That gap is exactly what these courses and calls close."
          />
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}
            className="grid-4-2"
          >
            {homeProblems.map((p, i) => (
              <FadeIn key={p.n} delay={i * 0.07}>
                <div className="problem-card">
                  <span className="problem-num">{p.n}</span>
                  <h3
                    className="font-display"
                    style={{ fontSize: 24, margin: "0 0 12px", lineHeight: 1.05 }}
                  >
                    {p.t}
                  </h3>
                  <p
                    style={{
                      color: "var(--fg-muted)",
                      margin: 0,
                      fontSize: 14.5,
                      lineHeight: 1.55,
                    }}
                  >
                    {p.d}
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

      {/* SOLUTION CALLOUT */}
      <section style={{ padding: "0 0 120px" }}>
        <div className="container-lg">
          <FadeIn>
            <div
              style={{
                border: "1px solid color-mix(in oklch, var(--accent) 35%, var(--border))",
                background:
                  "linear-gradient(180deg, color-mix(in oklch, var(--accent) 7%, var(--bg-2)) 0%, var(--bg-2) 70%)",
                borderRadius: "var(--radius-xl)",
                padding: "72px 56px",
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: 48,
                alignItems: "center",
              }}
              className="cta-grid"
            >
              <div>
                <div className="section-label" style={{ marginBottom: 16 }}>
                  The fix
                </div>
                <h2
                  className="font-display"
                  style={{
                    fontSize: "clamp(36px, 5vw, 64px)",
                    lineHeight: 0.95,
                    margin: "0 0 20px",
                  }}
                >
                  A system you can copy — built on{" "}
                  <span className="text-gold-gradient">$127k+ across 2,019 real orders.</span>
                </h2>
                <p
                  style={{
                    color: "var(--fg-muted)",
                    fontSize: 17,
                    lineHeight: 1.6,
                    maxWidth: 620,
                    margin: 0,
                  }}
                >
                  No &ldquo;make $10k in a week&rdquo; promises. Just the actual gig setups, pricing
                  tiers, scripts, and routines that work. Read the PDFs. Hop on a call. Implement.
                  Get paid.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <Link href="/courses" className="btn btn-primary">
                  Start with the courses
                </Link>
                <Link href="/booking" className="btn btn-ghost">
                  Or talk to me directly
                </Link>
              </div>
            </div>
          </FadeIn>
          <style>{`
            @media (max-width: 880px) {
              .cta-grid { grid-template-columns: 1fr !important; padding: 40px 28px !important; }
            }
          `}</style>
        </div>
      </section>

      <Marquee
        items={[
          "★★★★★ 5.0 average across 2,019 orders",
          "No bots. No fakes. Just real Fiverr buyers.",
          "Top-rated seller since 2020",
        ]}
      />

      {/* PROOF */}
      <section style={{ padding: "120px 0" }}>
        <div className="container-lg">
          <SectionHeader
            eyebrow="Receipts"
            title={
              <>
                Receipts. <span className="text-gold-gradient">Not promises.</span>
              </>
            }
            sub="Every screenshot below is a real, verified Fiverr review from a paying client. Hover any card to bring it forward."
            align="center"
            max={760}
          />
          <FadeIn>
            <ProofCollage />
          </FadeIn>
        </div>
      </section>

      {/* STATS STRIP */}
      <section style={{ padding: "0 0 120px" }}>
        <div className="container-lg">
          <div
            style={{
              border: "1px solid var(--border)",
              background: "var(--bg-2)",
              borderRadius: "var(--radius-lg)",
              padding: "48px",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 32,
            }}
            className="stats-strip"
          >
            {[
              { v: "5.0", s: "★ Average rating", d: "across 2,019 orders" },
              { v: "982", s: "Unique clients", d: "since 2018" },
              { v: "24h", s: "Avg. delivery", d: "for most gigs" },
              { v: "8 yrs", s: "On Fiverr", d: "top-rated since 2020" },
            ].map((s, i) => (
              <FadeIn key={s.s} delay={i * 0.08}>
                <div>
                  <div
                    className="font-display"
                    style={{ fontSize: 60, color: "var(--accent)", lineHeight: 1, marginBottom: 8 }}
                  >
                    {s.v}
                  </div>
                  <div style={{ fontSize: 14, color: "var(--fg)", fontWeight: 600 }}>{s.s}</div>
                  <div className="h-eyebrow" style={{ color: "var(--fg-dim)", marginTop: 4 }}>
                    {s.d}
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

      {/* COURSES */}
      <section style={{ padding: "0 0 120px" }}>
        <div className="container-lg">
          <SectionHeader
            eyebrow="Courses"
            title={
              <>
                PDF courses you can read tonight.
                <br />
                <span className="text-gold-gradient">Apply tomorrow.</span>
              </>
            }
            sub="No bloated 8-hour video courses. Tight, pasteable, written PDFs you'll actually finish. Delivered to your inbox the second you check out."
          />
          <div style={{ display: "grid", gap: 18 }}>
            {homeCourses.map((c, i) => (
              <FadeIn key={c.id} delay={i * 0.09}>
                <CourseRow course={c} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* COACHING */}
      <section style={{ padding: "0 0 120px" }}>
        <div className="container-lg">
          <SectionHeader
            eyebrow="1-on-1 Coaching"
            title={<>Or get me on a call.</>}
            sub="Sometimes you don't need another PDF. You need someone who's already done it to look at YOUR profile, YOUR gigs, YOUR pricing and tell you what's wrong."
          />
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}
            className="grid-3-1"
          >
            {homeCoaching.map((co, i) => (
              <FadeIn key={co.name} delay={i * 0.09}>
                <div className={`coach-card ${co.featured ? "featured" : ""}`}>
                  {co.featured && (
                    <span
                      className="chip chip-accent"
                      style={{ position: "absolute", top: 18, right: 18 }}
                    >
                      Most picked
                    </span>
                  )}
                  <div className="h-eyebrow" style={{ color: "var(--accent)", marginBottom: 8 }}>
                    {co.duration}
                  </div>
                  <h3
                    className="font-display"
                    style={{ fontSize: 30, margin: "0 0 12px", lineHeight: 1 }}
                  >
                    {co.name}
                  </h3>
                  <p
                    style={{
                      color: "var(--fg-muted)",
                      fontSize: 14.5,
                      lineHeight: 1.55,
                      margin: "0 0 28px",
                    }}
                  >
                    {co.desc}
                  </p>
                  <div className="price" style={{ marginTop: "auto", marginBottom: 16 }}>
                    ${Math.floor(co.price)}
                    <span className="price-cents">
                      .{String(Math.round((co.price % 1) * 100)).padStart(2, "0")}
                    </span>
                  </div>
                  <Link href="/booking" className="btn btn-primary">
                    Reserve this call →
                  </Link>
                </div>
              </FadeIn>
            ))}
            <style>{`
              @media (max-width: 880px) {
                .grid-3-1 { grid-template-columns: 1fr !important; }
              }
            `}</style>
          </div>
        </div>
      </section>

      <Marquee
        items={[
          "Build the freelance income",
          "Built by a producer, for producers",
          "Sfooxbeats · LoopGem · 2026",
        ]}
        accent
      />

      {/* FINAL CTA */}
      <section style={{ padding: "140px 0 80px" }}>
        <div className="container-lg" style={{ textAlign: "center", maxWidth: 920 }}>
          <FadeIn>
            <div className="section-label" style={{ justifyContent: "center" }}>
              Start tonight
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(48px, 9vw, 120px)",
                lineHeight: 0.94,
                margin: "8px auto 28px",
                paddingBottom: "0.05em",
              }}
            >
              You can keep guessing.
              <br />
              <span className="text-gold-gradient">Or you can start.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.16}>
            <p
              style={{
                color: "var(--fg-muted)",
                fontSize: 18,
                maxWidth: 580,
                margin: "0 auto 36px",
              }}
            >
              The producers making money online started somewhere. This is somewhere.
            </p>
          </FadeIn>
          <FadeIn delay={0.22}>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/courses" className="btn btn-primary">
                Get the courses →
              </Link>
              <Link href="/booking" className="btn btn-ghost">
                Book a call
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Suppress lint for unused testimonials list — kept for collage data source */}
      <span style={{ display: "none" }}>{homeTestimonials.length}</span>
    </>
  );
}

// ── Section header ────────────────────────────────────────────
function SectionHeader({
  eyebrow,
  title,
  sub,
  align = "left",
  max = 720,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  sub?: string;
  align?: "left" | "center";
  max?: number;
}) {
  return (
    <div
      style={{
        textAlign: align,
        margin: align === "center" ? "0 auto 56px" : "0 0 56px",
        maxWidth: max,
      }}
    >
      {eyebrow && (
        <FadeIn>
          <div className="section-label">{eyebrow}</div>
        </FadeIn>
      )}
      <FadeIn delay={0.08}>
        <h2 className="font-display section-h">{title}</h2>
      </FadeIn>
      {sub && (
        <FadeIn delay={0.16}>
          <p
            style={{
              color: "var(--fg-muted)",
              fontSize: 18,
              lineHeight: 1.55,
              margin: 0,
              maxWidth: 620,
            }}
          >
            {sub}
          </p>
        </FadeIn>
      )}
    </div>
  );
}

// ── Course row ────────────────────────────────────────────────
function CourseRow({
  course,
}: {
  course: {
    id: string;
    badge: string;
    title: string;
    desc: string;
    bullets: string[];
    price: number;
    tag: string;
  };
}) {
  return (
    <div className="course-row">
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <span className="chip chip-accent">{course.tag}</span>
        </div>
        <div className="ph-img" style={{ aspectRatio: "4 / 3", borderRadius: "var(--radius)" }}>
          <span className="ph-img-label">Course cover — {course.id}</span>
        </div>
      </div>
      <div>
        <div className="h-eyebrow" style={{ color: "var(--accent)", marginBottom: 10 }}>
          {course.badge}
        </div>
        <h3
          className="font-display"
          style={{
            fontSize: "clamp(28px, 3vw, 38px)",
            margin: "0 0 12px",
            lineHeight: 1,
          }}
        >
          {course.title}
        </h3>
        <p
          style={{
            color: "var(--fg-muted)",
            fontSize: 15.5,
            lineHeight: 1.6,
            margin: "0 0 14px",
            maxWidth: 540,
          }}
        >
          {course.desc}
        </p>
        <div className="module-list">
          {course.bullets.map((b, i) => (
            <div key={i} className="module-item">
              <span className="module-bullet">✓</span>
              {b}
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          alignItems: "flex-end",
          textAlign: "right",
          minWidth: 180,
        }}
        className="course-price-col"
      >
        <div className="price">${course.price}</div>
        <span className="h-eyebrow" style={{ color: "var(--fg-dim)" }}>
          One-time · PDF
        </span>
        <Link href="/courses" className="btn btn-primary" style={{ marginTop: 12 }}>
          Get this course →
        </Link>
        <Link href="/courses" className="btn btn-ghost btn-sm" style={{ marginTop: 2 }}>
          What&apos;s inside
        </Link>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .course-price-col { align-items: flex-start !important; text-align: left !important; }
        }
      `}</style>
    </div>
  );
}

// ── Proof collage ─────────────────────────────────────────────
function ProofCollage() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 880);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  const positions = isMobile ? proofPositionsMobile : proofPositions;
  return (
    <div className="proof-canvas">
      {homeTestimonials.map((t, i) => {
        const p = positions[i % positions.length];
        const src = proofScreenshots[i];
        return (
          <div
            key={i}
            className="proof-card"
            style={{
              left: p.left,
              top: p.top,
              width: p.w,
              transform: `translate(-50%, -50%) rotate(${p.rot}deg)`,
              zIndex: p.z,
            }}
          >
            {src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={src} alt={`Fiverr review from ${t.name}`} />
            ) : (
              <ReviewCard t={t} />
            )}
          </div>
        );
      })}
    </div>
  );
}

function ReviewCard({
  t,
}: {
  t: { name: string; stars: number; quote: string; scores: { c: number; q: number; v: number } };
}) {
  return (
    <div
      style={{
        padding: "18px 18px 16px",
        background: "var(--bg-2)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 999,
            background: "linear-gradient(135deg, var(--accent), var(--accent-dark))",
            color: "var(--accent-fg)",
            display: "grid",
            placeItems: "center",
            fontWeight: 700,
            fontSize: 13,
          }}
        >
          {t.name[0].toUpperCase()}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 12.5, fontWeight: 600, color: "var(--fg)" }}>{t.name}</div>
          <div style={{ display: "flex", gap: 1, color: "var(--accent)", fontSize: 12 }}>
            {[1, 2, 3, 4, 5].map((i) => (
              <span key={i}>{i <= t.stars ? "★" : "☆"}</span>
            ))}
          </div>
        </div>
      </div>
      <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.5, color: "var(--fg-muted)" }}>
        &ldquo;{t.quote}&rdquo;
      </p>
    </div>
  );
}
