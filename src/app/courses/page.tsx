"use client";

import { useState } from "react";
import Link from "next/link";
import { FadeIn } from "@/components/Animate";
import Marquee from "@/components/Marquee";
import CoursePayPalButton from "@/components/CoursePayPalButton";

const coursesList = [
  {
    id: "c1",
    badge: "Course 01",
    tag: "For: producers with zero Fiverr orders",
    title: "Fiverr Beat Seller Blueprint",
    sub: "The exact gig setup, pricing tiers, and keyword strategy that took me from invisible to top-rated.",
    price: 27,
    delivery: "Instant PDF · Delivered by email",
    modules: [
      { n: "01", t: "Profile that screams pro", d: "Bio, tags, portfolio order, audio samples — what wins, what kills you." },
      { n: "02", t: "Gig anatomy that ranks", d: "Titles, search-friendly tags, packaging tiers, FAQs, gallery order." },
      { n: "03", t: "Pricing tiers that convert", d: "Why $5 kills you and the exact 3-tier model that doubles orders." },
      { n: "04", t: "Buyer-request automation", d: "The 5-line message template that converts cold buyer requests into clients." },
      { n: "05", t: "Delivery + 5-star reviews", d: "Communication scripts, revision boundaries, getting tips and repeat orders." },
    ],
    bullets: [
      "45-page tactical PDF (no fluff)",
      "Templates for gig copy + buyer-request DMs",
      "Pricing calculator (Numbers / Sheets compatible)",
      "Lifetime updates — free",
    ],
  },
  {
    id: "c2",
    badge: "Course 02",
    tag: "For: mixing / mastering / vocal tuning sellers",
    title: "Sell Music Services on Fiverr",
    sub: "Position mixing, mastering, vocal tuning and custom production as premium services worth $80+ a session — not $15.",
    price: 27,
    delivery: "Instant PDF · Delivered by email",
    modules: [
      { n: "01", t: "Service positioning", d: "Stop selling 'mixing' — start selling outcomes. The exact reframes that lift prices 3x." },
      { n: "02", t: "Sample pack pricing maps", d: "How to price mixing, mastering, vocal tuning, and stem mastering by genre." },
      { n: "03", t: "Client onboarding scripts", d: "Pre-purchase questions, briefing template, file-format checklist, project tracker." },
      { n: "04", t: "The 'reference track' close", d: "How the way you talk about reference tracks pre-sells the upsell." },
      { n: "05", t: "Reviews that resell themselves", d: "Wording your delivery so 70%+ of clients leave a 5-star + come back." },
    ],
    bullets: [
      "40-page service-seller playbook",
      "Onboarding form + brief template",
      "Genre-by-genre price ranges (hip-hop, R&B, afrobeats, pop)",
      "Lifetime updates — free",
    ],
  },
  {
    id: "c3",
    badge: "Course 03 · Bundle",
    tag: "For: producers going full-time",
    title: "Full Freelance Music Producer Playbook",
    sub: "The complete system: beats + services + marketing + retention. Built for producers who want this to replace the day job — not just be a side hustle.",
    price: 47,
    featured: true,
    delivery: "Instant PDF · Delivered by email",
    modules: [
      { n: "01", t: "Everything in 01 + 02", d: "Both courses, fully bundled, with cross-course frameworks for selling beats AND services from one profile." },
      { n: "02", t: "Outreach + cold-DM system", d: "How to land your first 10 paying clients off-platform — Instagram, SoundCloud, YouTube." },
      { n: "03", t: "Content engine for producers", d: "A 30-day content calendar for IG/TikTok that drives Fiverr traffic. No dancing required." },
      { n: "04", t: "Retention + ascension ladder", d: "Turning $30 buyers into $300 clients into $3k clients. The 4-step ladder." },
      { n: "05", t: "The 90-day income runway", d: "A week-by-week 90-day plan from 'current you' to 'first $1k month'." },
    ],
    bullets: [
      "Both PDFs (01 + 02) + Playbook PDF",
      "90-day step-by-step roadmap",
      "Notion workspace template",
      "Priority email support for 30 days",
      "Lifetime updates — free",
    ],
  },
];

export default function CoursesPage() {
  const [openModules, setOpenModules] = useState<Record<string, boolean>>({ c3: true });
  const toggle = (id: string) =>
    setOpenModules((o) => ({ ...o, [id]: !o[id] }));

  return (
    <>
      {/* Hero */}
      <section style={{ padding: "88px 0 64px", position: "relative" }}>
        <div className="glow-radial" aria-hidden="true" />
        <div className="container-lg" style={{ position: "relative" }}>
          <FadeIn>
            <div className="section-label" style={{ marginBottom: 24 }}>
              Courses
            </div>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h1
              className="font-display"
              style={{
                fontSize: "clamp(56px, 9vw, 128px)",
                lineHeight: 0.95,
                margin: "0 0 28px",
                maxWidth: 1100,
                paddingBottom: "0.08em",
              }}
            >
              Read tonight.
              <br />
              <span className="text-gold-gradient">Get paid this month.</span>
            </h1>
          </FadeIn>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 1fr",
              gap: 56,
              alignItems: "end",
              marginTop: 24,
            }}
            className="courses-hero-grid"
          >
            <FadeIn delay={0.14}>
              <p
                style={{
                  color: "var(--fg-muted)",
                  fontSize: 18,
                  lineHeight: 1.6,
                  maxWidth: 640,
                  margin: 0,
                }}
              >
                Three tight PDF courses you&apos;ll actually finish. Built from $127k+ of real
                Fiverr orders, not theory. Pick one, or grab the bundle.
              </p>
            </FadeIn>
            <FadeIn delay={0.22}>
              <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
                <Mini label="Courses" value="3" />
                <Mini label="Format" value="PDF" />
                <Mini label="Delivery" value="Instant" />
                <Mini label="Updates" value="Lifetime" />
              </div>
            </FadeIn>
          </div>
          <style>{`
            @media (max-width: 880px) {
              .courses-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
            }
          `}</style>
        </div>
      </section>

      <Marquee
        items={[
          "$27 · $27 · $47",
          "PDF · Instant delivery",
          "Built from real Fiverr orders",
          "Lifetime updates included",
        ]}
      />

      {/* Course rows */}
      <section style={{ padding: "88px 0" }}>
        <div className="container-lg">
          <div style={{ display: "grid", gap: 24 }}>
            {coursesList.map((c, i) => (
              <FadeIn key={c.id} delay={i * 0.1}>
                <CourseDetailRow
                  course={c}
                  open={!!openModules[c.id]}
                  onToggle={() => toggle(c.id)}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "0 0 120px" }}>
        <div className="container-lg">
          <FadeIn>
            <div
              style={{
                border: "1px solid var(--border-strong)",
                background: "var(--bg-2)",
                borderRadius: "var(--radius-xl)",
                padding: "56px",
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: 32,
                alignItems: "center",
              }}
              className="cta-grid"
            >
              <div>
                <h2
                  className="font-display"
                  style={{
                    fontSize: "clamp(32px, 4vw, 52px)",
                    lineHeight: 1,
                    margin: "0 0 12px",
                  }}
                >
                  Still not sure?{" "}
                  <span className="text-gold-gradient">Book a 15-min intro call.</span>
                </h2>
                <p
                  style={{
                    color: "var(--fg-muted)",
                    fontSize: 17,
                    margin: 0,
                    maxWidth: 600,
                  }}
                >
                  Tell me where you&apos;re stuck. I&apos;ll tell you which course will move the
                  needle — or if a 1-on-1 makes more sense.
                </p>
              </div>
              <Link href="/booking" className="btn btn-primary">
                Book the intro call →
              </Link>
            </div>
          </FadeIn>
          <style>{`
            @media (max-width: 880px) {
              .cta-grid { grid-template-columns: 1fr !important; padding: 40px 28px !important; }
            }
          `}</style>
        </div>
      </section>
    </>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ minWidth: 92 }}>
      <div
        className="font-display"
        style={{ fontSize: 36, color: "var(--accent)", lineHeight: 1 }}
      >
        {value}
      </div>
      <div className="h-eyebrow" style={{ color: "var(--fg-dim)", marginTop: 4 }}>
        {label}
      </div>
    </div>
  );
}

function CourseDetailRow({
  course,
  open,
  onToggle,
}: {
  course: (typeof coursesList)[number];
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="card"
      style={{
        padding: 0,
        borderColor: course.featured
          ? "color-mix(in oklch, var(--accent) 45%, var(--border))"
          : "var(--border)",
        background: course.featured
          ? "linear-gradient(180deg, color-mix(in oklch, var(--accent) 8%, var(--bg-2)) 0%, var(--bg-2) 60%)"
          : "var(--bg-2)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 260px) 1fr minmax(0, 280px)",
          gap: 32,
          padding: 36,
          alignItems: "center",
        }}
        className="course-detail-grid"
      >
        <div className="ph-img" style={{ aspectRatio: "1 / 1", borderRadius: "var(--radius)" }}>
          <span className="ph-img-label">Cover: {course.id}</span>
        </div>
        <div>
          <div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
            <span className="chip chip-accent">{course.badge}</span>
            <span className="chip">{course.tag}</span>
          </div>
          <h3
            className="font-display"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              margin: "0 0 12px",
              lineHeight: 0.95,
            }}
          >
            {course.title}
          </h3>
          <p
            style={{
              color: "var(--fg-muted)",
              fontSize: 16,
              lineHeight: 1.6,
              margin: "0 0 16px",
              maxWidth: 560,
            }}
          >
            {course.sub}
          </p>
          <div style={{ display: "grid", gap: 8 }}>
            {course.bullets.map((b, i) => (
              <div key={i} className="module-item">
                <span className="module-bullet">✓</span>
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div className="price" style={{ alignSelf: "center" }}>
            ${course.price}
          </div>
          <span
            className="h-eyebrow"
            style={{ color: "var(--fg-dim)", textAlign: "center" }}
          >
            {course.delivery}
          </span>
          <div style={{ marginTop: 8 }}>
            <CoursePayPalButton
              amount={course.price.toFixed(2)}
              courseId={course.id}
              courseName={course.title}
            />
          </div>
          <button className="btn btn-ghost btn-sm" onClick={onToggle}>
            {open ? "Hide modules" : "See the modules"}
          </button>
        </div>
      </div>
      {open && (
        <div
          style={{
            borderTop: "1px solid var(--border)",
            padding: 36,
            background: "color-mix(in oklch, var(--bg) 30%, var(--bg-2))",
          }}
        >
          <div className="h-eyebrow" style={{ color: "var(--accent)", marginBottom: 18 }}>
            What&apos;s inside
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 18,
            }}
          >
            {course.modules.map((m) => (
              <div
                key={m.n}
                style={{
                  padding: 18,
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius)",
                  background: "var(--bg)",
                }}
              >
                <div
                  className="font-display"
                  style={{
                    fontSize: 22,
                    color: "var(--accent)",
                    lineHeight: 1,
                    marginBottom: 8,
                  }}
                >
                  {m.n}
                </div>
                <div
                  className="font-display"
                  style={{ fontSize: 18, margin: "0 0 8px", lineHeight: 1.1 }}
                >
                  {m.t}
                </div>
                <p
                  style={{
                    color: "var(--fg-muted)",
                    fontSize: 13.5,
                    margin: 0,
                    lineHeight: 1.55,
                  }}
                >
                  {m.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
      <style>{`
        @media (max-width: 1024px) {
          .course-detail-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </div>
  );
}
