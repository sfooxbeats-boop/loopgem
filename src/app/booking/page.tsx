"use client";

import { useState } from "react";
import { FadeIn } from "@/components/Animate";
import Marquee from "@/components/Marquee";
import PayPalButton from "@/components/PayPalButton";

const tiers = [
  {
    id: "starter",
    name: "Starter Session",
    duration: "30 min",
    price: 49.99,
    desc: "One focused call. We audit your Fiverr profile, fix the obvious leaks, and leave you with a 30-day plan you can start tomorrow.",
    includes: [
      "Full profile + gig audit",
      "Pricing tier feedback",
      "Top 3 things to change this week",
      "Written recap delivered post-call",
    ],
  },
  {
    id: "sales",
    name: "Sales Strategy Call",
    duration: "60 min",
    price: 89.99,
    desc: "We map your 90-day strategy. Pricing, positioning, gig overhaul, outreach scripts — calibrated for YOUR genre and where you are now.",
    includes: [
      "Everything in Starter, plus:",
      "90-day strategy map",
      "Outreach script bundle (DM + Buyer Requests)",
      "Gig rewrite suggestions on the call",
      "Follow-up email within 48h",
    ],
    featured: true,
  },
  {
    id: "blueprint",
    name: "Freelancer Blueprint",
    duration: "4 × 60 min",
    price: 299.99,
    desc: "Four weekly calls. We rebuild your profile, land your first paying clients, install a retention system, and keep accountability week-to-week.",
    includes: [
      "Week 1 — Profile + gig rebuild",
      "Week 2 — First-client outreach push",
      "Week 3 — Pricing ladder + upsell scripts",
      "Week 4 — Retention + content rhythm",
      "Voice-note support between calls",
    ],
  },
];

const howItWorks = [
  { n: "01", t: "Book + pay", d: "Pick the call type that matches where you're stuck. Pay securely. You're locked in." },
  { n: "02", t: "Pre-call form", d: "You get a short form to fill in — Fiverr profile link, genre, what you've tried, what is broken." },
  { n: "03", t: "The call", d: "We get on Zoom. No fluff. Screen share, walk through your profile, and rebuild it live." },
  { n: "04", t: "The recap", d: "You get a written summary, links, and homework within 48h. So nothing gets lost." },
];

const bookingFaqs = [
  { q: "How is this different from the PDF courses?", a: "The courses are the system, written down. The calls are me applying that system to YOUR profile, YOUR genre, YOUR pricing. If you can implement on your own, the courses are enough. If you want a human to look at your stuff and tell you what to do, that is what the calls are for." },
  { q: "Do you have a refund policy?", a: "If after your call you genuinely feel it did not help, email me within 7 days and I will refund the call in full. No drama. (Has not happened yet.)" },
  { q: "Do I need to be on Fiverr already?", a: "No. About 30% of the producers I coach are starting from scratch. We will set up your profile from zero on the call." },
  { q: "What if I sell beats on a different platform?", a: "Most of the system carries over — BeatStars, Airbit, Soundee, your own site. We will adapt to whichever platform you actually want to sell on." },
  { q: "Can I bring my own questions?", a: "Yes. The 30-min Starter is mostly me auditing your profile. The 60-min Strategy call splits time between audit + your specific questions. The Blueprint is fully shaped around what you bring." },
  { q: "What if I am a complete beginner producer?", a: "These calls are about SELLING, not about how to mix a 808 or arrange a song. If you have not yet got beats you are willing to charge for, start with FL Studio or YouTube tutorials, then come back." },
];

export default function BookingPage() {
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <>
      {/* Hero */}
      <section style={{ padding: "88px 0 56px", position: "relative" }}>
        <div className="glow-radial" aria-hidden="true" />
        <div className="container-lg" style={{ position: "relative", zIndex: 1 }}>
          <FadeIn>
            <div className="section-label" style={{ marginBottom: 24 }}>
              1-on-1 coaching
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
              Get me on a call.
              <br />
              <span className="text-gold-gradient">Fix what&apos;s broken.</span>
            </h1>
          </FadeIn>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 1fr",
              gap: 56,
              alignItems: "end",
            }}
            className="booking-hero-grid"
          >
            <FadeIn delay={0.14}>
              <p
                style={{
                  color: "var(--fg-muted)",
                  fontSize: 18,
                  lineHeight: 1.6,
                  maxWidth: 620,
                  margin: 0,
                }}
              >
                Pick a session length. Tell me what&apos;s broken. We hop on Zoom and rebuild your
                profile, pricing and outreach in real time. No &ldquo;frameworks&rdquo; — just
                direct work on your gigs.
              </p>
            </FadeIn>
            <FadeIn delay={0.22}>
              <div style={{ display: "flex", gap: 22, flexWrap: "wrap" }}>
                <Mini label="Sessions" value="3" />
                <Mini label="Format" value="Zoom" />
                <Mini label="Recap" value="Written" />
                <Mini label="Spots / wk" value="6" />
              </div>
            </FadeIn>
          </div>
          <style>{`
            @media (max-width: 880px) {
              .booking-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
            }
          `}</style>
        </div>
      </section>

      <Marquee
        items={[
          "6 spots a week",
          "Zoom · 30 / 60 / 4×60 min",
          "7-day refund policy",
          "No upsells — just the call",
        ]}
      />

      {/* Tiers */}
      <section style={{ padding: "88px 0" }}>
        <div className="container-lg">
          <SectionHeader
            eyebrow="Pick your call"
            title="Three formats. Pick yours."
            sub="Short audit, deep strategy, or the full 4-week rebuild. Same producer on the other side of the call either way."
          />
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}
            className="grid-3-1"
          >
            {tiers.map((t, i) => (
              <FadeIn key={t.id} delay={i * 0.09}>
                <div className={`coach-card ${t.featured ? "featured" : ""}`}>
                  {t.featured && (
                    <span
                      className="chip chip-accent"
                      style={{ position: "absolute", top: 18, right: 18 }}
                    >
                      Most picked
                    </span>
                  )}
                  <div className="h-eyebrow" style={{ color: "var(--accent)", marginBottom: 8 }}>
                    {t.duration}
                  </div>
                  <h3
                    className="font-display"
                    style={{ fontSize: 30, margin: "0 0 10px", lineHeight: 1 }}
                  >
                    {t.name}
                  </h3>
                  <p
                    style={{
                      color: "var(--fg-muted)",
                      fontSize: 14.5,
                      lineHeight: 1.55,
                      margin: "0 0 18px",
                    }}
                  >
                    {t.desc}
                  </p>
                  <div style={{ display: "grid", gap: 8, marginBottom: 22 }}>
                    {t.includes.map((b, idx) => (
                      <div key={idx} className="module-item" style={{ fontSize: 13.5 }}>
                        <span className="module-bullet">✓</span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                  <div className="price" style={{ marginTop: "auto", marginBottom: 14 }}>
                    ${Math.floor(t.price)}
                    <span className="price-cents">
                      .{String(Math.round((t.price % 1) * 100)).padStart(2, "0")}
                    </span>
                  </div>
                  <PayPalButton
                    amount={t.price.toFixed(2)}
                    description={`LoopGem Coaching: ${t.name} (${t.duration})`}
                    successMessage="Booking confirmed! You'll receive a scheduling link within 24 hours."
                  />
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

      {/* How it works */}
      <section style={{ padding: "0 0 120px" }}>
        <div className="container-lg">
          <SectionHeader
            eyebrow="How it works"
            title="From clicking 'book' to working on your gigs."
            sub="No mystery. Four steps. Most producers go from booking to call inside a week."
          />
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}
            className="grid-4-2"
          >
            {howItWorks.map((s, i) => (
              <FadeIn key={s.n} delay={i * 0.08}>
                <div className="problem-card" style={{ height: "100%" }}>
                  <span className="problem-num">{s.n}</span>
                  <h3
                    className="font-display"
                    style={{ fontSize: 22, margin: "0 0 10px", lineHeight: 1.05 }}
                  >
                    {s.t}
                  </h3>
                  <p
                    style={{
                      color: "var(--fg-muted)",
                      fontSize: 14,
                      lineHeight: 1.55,
                      margin: 0,
                    }}
                  >
                    {s.d}
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

      {/* FAQ */}
      <section style={{ padding: "0 0 120px" }}>
        <div className="container-lg" style={{ maxWidth: 880 }}>
          <SectionHeader eyebrow="FAQ" title="Questions before booking?" align="left" />
          <FadeIn>
            <div>
              {bookingFaqs.map((f, i) => (
                <div
                  key={i}
                  className="faq-item"
                  data-open={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                >
                  <div className="faq-q">
                    <span>{f.q}</span>
                    <span className="faq-icon">+</span>
                  </div>
                  <div className="faq-a">
                    <p style={{ margin: 0, lineHeight: 1.65, fontSize: 15.5 }}>{f.a}</p>
                  </div>
                </div>
              ))}
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
  sub,
  align = "left",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  sub?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      style={{
        textAlign: align,
        margin: align === "center" ? "0 auto 56px" : "0 0 56px",
        maxWidth: 720,
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

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ minWidth: 88 }}>
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
