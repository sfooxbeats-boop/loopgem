"use client";

import { useState } from "react";
import Link from "next/link";

const FIVERR_FEE = 0.8; // Fiverr takes 20%

export default function PricingCalculator() {
  // Tab state
  const [tab, setTab] = useState<"packages" | "revenue" | "goal">("packages");

  // Tab 1 — Package builder
  const [basic, setBasic] = useState(25);
  const [standard, setStandard] = useState(45);
  const [premium, setPremium] = useState(75);

  // Tab 2 — Revenue projector
  const [avgPrice, setAvgPrice] = useState(45);
  const [ordersPerWeek, setOrdersPerWeek] = useState(5);

  // Tab 3 — Goal calculator
  const [monthlyGoal, setMonthlyGoal] = useState(1000);
  const [avgOrderValue, setAvgOrderValue] = useState(45);

  // ── Derived values ──────────────────────────────────────────
  // Tab 1
  const basicNet = +(basic * FIVERR_FEE).toFixed(2);
  const standardNet = +(standard * FIVERR_FEE).toFixed(2);
  const premiumNet = +(premium * FIVERR_FEE).toFixed(2);
  const mixedMonthly = +(
    (basicNet * 4 + standardNet * 6 + premiumNet * 2) * 4
  ).toFixed(0);

  // Tab 2
  const weeklyGross = +(avgPrice * ordersPerWeek).toFixed(2);
  const weeklyNet = +(weeklyGross * FIVERR_FEE).toFixed(2);
  const monthlyGross = +(weeklyGross * 4).toFixed(2);
  const monthlyNet = +(weeklyNet * 4).toFixed(2);
  const annualNet = +(monthlyNet * 12).toFixed(0);

  // Tab 3
  const netGoal = monthlyGoal / FIVERR_FEE; // gross needed
  const ordersNeededMonth = Math.ceil(netGoal / avgOrderValue);
  const ordersNeededWeek = Math.ceil(ordersNeededMonth / 4);
  const perDayGoal = +(netGoal / 30).toFixed(2);

  const tabs = [
    { key: "packages", label: "Package Pricing" },
    { key: "revenue", label: "Revenue Projector" },
    { key: "goal", label: "Income Goal" },
  ] as const;

  return (
    <div style={{ minHeight: "100vh", padding: "72px 0 120px" }}>
      <div className="container-lg" style={{ maxWidth: 760 }}>
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>
            Free Tool · Fiverr Beat Seller Blueprint
          </div>
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(36px, 6vw, 64px)",
              lineHeight: 0.95,
              margin: "0 0 16px",
            }}
          >
            Beat Seller
            <br />
            <span style={{ color: "var(--accent)" }}>Pricing Calculator</span>
          </h1>
          <p style={{ color: "var(--fg-muted)", fontSize: 17, margin: 0 }}>
            Three tools in one. Figure out your package prices, project your
            monthly revenue, and reverse-engineer your income goals.
          </p>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            gap: 8,
            marginBottom: 32,
            borderBottom: "1px solid var(--border)",
            paddingBottom: 0,
          }}
        >
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              style={{
                background: "none",
                border: "none",
                padding: "12px 20px",
                cursor: "pointer",
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 700,
                fontSize: 14,
                color: tab === t.key ? "var(--accent)" : "var(--fg-muted)",
                borderBottom: tab === t.key
                  ? "2px solid var(--accent)"
                  : "2px solid transparent",
                marginBottom: -1,
                transition: "color 0.2s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ── TAB 1: Package Pricing ─────────────────────── */}
        {tab === "packages" && (
          <div style={{ display: "grid", gap: 24 }}>
            <p style={{ color: "var(--fg-muted)", margin: 0, fontSize: 15 }}>
              Enter your package prices below. The calculator shows what you
              actually take home after Fiverr&apos;s 20% fee.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 16,
              }}
              className="calc-grid"
            >
              {[
                { label: "Basic", val: basic, set: setBasic, hint: "MP3 only" },
                { label: "Standard", val: standard, set: setStandard, hint: "MP3 + WAV" },
                { label: "Premium", val: premium, set: setPremium, hint: "MP3 + WAV + Stems" },
              ].map((pkg) => (
                <div
                  key={pkg.label}
                  className="card"
                  style={{ padding: 24, background: "var(--bg-2)" }}
                >
                  <div
                    className="h-eyebrow"
                    style={{ color: "var(--accent)", marginBottom: 6 }}
                  >
                    {pkg.label}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "var(--fg-dim)",
                      marginBottom: 14,
                    }}
                  >
                    {pkg.hint}
                  </div>
                  <label style={{ display: "block" }}>
                    <div
                      style={{
                        fontSize: 12,
                        color: "var(--fg-muted)",
                        marginBottom: 6,
                      }}
                    >
                      Price (USD)
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <span
                        className="font-display"
                        style={{ fontSize: 22, color: "var(--fg)" }}
                      >
                        $
                      </span>
                      <input
                        type="number"
                        min={5}
                        max={9999}
                        value={pkg.val}
                        onChange={(e) => pkg.set(+e.target.value || 0)}
                        className="lg-input"
                        style={{ fontSize: 22, fontWeight: 700, padding: "8px 12px" }}
                      />
                    </div>
                  </label>
                  <div
                    style={{
                      marginTop: 16,
                      paddingTop: 16,
                      borderTop: "1px solid var(--border)",
                    }}
                  >
                    <div
                      style={{ fontSize: 12, color: "var(--fg-dim)", marginBottom: 4 }}
                    >
                      You receive
                    </div>
                    <div
                      className="font-display"
                      style={{ fontSize: 28, color: "var(--accent)" }}
                    >
                      ${(pkg.val * FIVERR_FEE).toFixed(2)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="card"
              style={{
                padding: 28,
                background: "var(--bg-2)",
                borderColor: "color-mix(in oklch, var(--accent) 30%, var(--border))",
              }}
            >
              <div className="h-eyebrow" style={{ color: "var(--accent)", marginBottom: 12 }}>
                Estimated monthly take-home
              </div>
              <div style={{ fontSize: 13, color: "var(--fg-muted)", marginBottom: 12 }}>
                Based on a realistic mix: 4 Basic + 6 Standard + 2 Premium per week
              </div>
              <div
                className="font-display"
                style={{ fontSize: 52, color: "var(--fg)", lineHeight: 1 }}
              >
                ${mixedMonthly.toLocaleString()}
                <span
                  style={{
                    fontSize: 18,
                    color: "var(--fg-muted)",
                    fontFamily: "var(--font-manrope)",
                    fontWeight: 400,
                    marginLeft: 8,
                  }}
                >
                  / month
                </span>
              </div>
              <div style={{ fontSize: 12, color: "var(--fg-dim)", marginTop: 8 }}>
                After Fiverr&apos;s 20% fee. Adjust your prices above to see how it changes.
              </div>
            </div>

            <style>{`@media(max-width:600px){.calc-grid{grid-template-columns:1fr!important;}}`}</style>
          </div>
        )}

        {/* ── TAB 2: Revenue Projector ───────────────────── */}
        {tab === "revenue" && (
          <div style={{ display: "grid", gap: 24 }}>
            <p style={{ color: "var(--fg-muted)", margin: 0, fontSize: 15 }}>
              Enter your average order value and how many orders you deliver per
              week to see what your revenue looks like.
            </p>

            <div
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
              className="calc-grid"
            >
              <div className="card" style={{ padding: 24, background: "var(--bg-2)" }}>
                <label style={{ display: "block" }}>
                  <div className="h-eyebrow" style={{ color: "var(--accent)", marginBottom: 8 }}>
                    Avg. order value ($)
                  </div>
                  <input
                    type="number"
                    min={5}
                    value={avgPrice}
                    onChange={(e) => setAvgPrice(+e.target.value || 0)}
                    className="lg-input"
                    style={{ fontSize: 22, fontWeight: 700 }}
                  />
                </label>
              </div>
              <div className="card" style={{ padding: 24, background: "var(--bg-2)" }}>
                <label style={{ display: "block" }}>
                  <div className="h-eyebrow" style={{ color: "var(--accent)", marginBottom: 8 }}>
                    Orders per week
                  </div>
                  <input
                    type="number"
                    min={1}
                    value={ordersPerWeek}
                    onChange={(e) => setOrdersPerWeek(+e.target.value || 0)}
                    className="lg-input"
                    style={{ fontSize: 22, fontWeight: 700 }}
                  />
                </label>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 16,
              }}
              className="calc-grid"
            >
              {[
                { label: "Weekly net", val: weeklyNet, sub: `$${weeklyGross} gross` },
                { label: "Monthly net", val: monthlyNet, sub: `$${monthlyGross} gross` },
                { label: "Annual net", val: annualNet, sub: "after Fiverr fees" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="stat-tile"
                  style={{ padding: "24px 20px" }}
                >
                  <span className="stat-label" style={{ marginBottom: 8, display: "block" }}>
                    {s.label}
                  </span>
                  <span
                    className="font-display"
                    style={{
                      fontSize: "clamp(28px, 4vw, 42px)",
                      color: "var(--fg)",
                      lineHeight: 1,
                      display: "block",
                      marginBottom: 6,
                    }}
                  >
                    ${Number(s.val).toLocaleString()}
                  </span>
                  <span style={{ fontSize: 12, color: "var(--fg-dim)" }}>{s.sub}</span>
                </div>
              ))}
            </div>

            <div
              className="card"
              style={{ padding: 24, background: "var(--bg-2)" }}
            >
              <div className="h-eyebrow" style={{ color: "var(--fg-dim)", marginBottom: 10 }}>
                How this compares
              </div>
              <div style={{ display: "grid", gap: 10 }}>
                {[
                  { milestone: "$1,000 / month", ordersNeeded: Math.ceil(1000 / FIVERR_FEE / avgPrice / 4) },
                  { milestone: "$3,000 / month", ordersNeeded: Math.ceil(3000 / FIVERR_FEE / avgPrice / 4) },
                  { milestone: "$5,000 / month", ordersNeeded: Math.ceil(5000 / FIVERR_FEE / avgPrice / 4) },
                ].map((m) => (
                  <div
                    key={m.milestone}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "10px 0",
                      borderBottom: "1px solid var(--border)",
                    }}
                  >
                    <span style={{ fontWeight: 600, fontSize: 15 }}>{m.milestone}</span>
                    <span
                      className="chip"
                      style={{
                        borderColor:
                          ordersPerWeek >= m.ordersNeeded
                            ? "var(--accent)"
                            : "var(--border-strong)",
                        color:
                          ordersPerWeek >= m.ordersNeeded
                            ? "var(--accent)"
                            : "var(--fg-muted)",
                      }}
                    >
                      {m.ordersNeeded} orders/week
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── TAB 3: Goal Calculator ─────────────────────── */}
        {tab === "goal" && (
          <div style={{ display: "grid", gap: 24 }}>
            <p style={{ color: "var(--fg-muted)", margin: 0, fontSize: 15 }}>
              Start with how much you want to make. Work backwards to how many
              orders you actually need per week.
            </p>

            <div
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
              className="calc-grid"
            >
              <div className="card" style={{ padding: 24, background: "var(--bg-2)" }}>
                <label style={{ display: "block" }}>
                  <div className="h-eyebrow" style={{ color: "var(--accent)", marginBottom: 8 }}>
                    Monthly income goal ($)
                  </div>
                  <input
                    type="number"
                    min={100}
                    value={monthlyGoal}
                    onChange={(e) => setMonthlyGoal(+e.target.value || 0)}
                    className="lg-input"
                    style={{ fontSize: 22, fontWeight: 700 }}
                  />
                </label>
              </div>
              <div className="card" style={{ padding: 24, background: "var(--bg-2)" }}>
                <label style={{ display: "block" }}>
                  <div className="h-eyebrow" style={{ color: "var(--accent)", marginBottom: 8 }}>
                    Your avg. order value ($)
                  </div>
                  <input
                    type="number"
                    min={5}
                    value={avgOrderValue}
                    onChange={(e) => setAvgOrderValue(+e.target.value || 0)}
                    className="lg-input"
                    style={{ fontSize: 22, fontWeight: 700 }}
                  />
                </label>
              </div>
            </div>

            <div
              className="card"
              style={{
                padding: 32,
                background: "linear-gradient(180deg, color-mix(in oklch, var(--accent) 7%, var(--bg-2)) 0%, var(--bg-2) 60%)",
                borderColor: "color-mix(in oklch, var(--accent) 35%, var(--border))",
              }}
            >
              <div className="section-label" style={{ marginBottom: 16 }}>
                To hit ${monthlyGoal.toLocaleString()}/month you need
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 24,
                  marginBottom: 24,
                }}
                className="calc-grid"
              >
                <div>
                  <div style={{ fontSize: 13, color: "var(--fg-muted)", marginBottom: 4 }}>
                    Orders per month
                  </div>
                  <div
                    className="font-display"
                    style={{ fontSize: 56, color: "var(--accent)", lineHeight: 1 }}
                  >
                    {ordersNeededMonth}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 13, color: "var(--fg-muted)", marginBottom: 4 }}>
                    Orders per week
                  </div>
                  <div
                    className="font-display"
                    style={{ fontSize: 56, color: "var(--fg)", lineHeight: 1 }}
                  >
                    {ordersNeededWeek}
                  </div>
                </div>
              </div>
              <div
                style={{
                  padding: "14px 16px",
                  background: "var(--bg-3)",
                  borderRadius: "var(--radius)",
                  fontSize: 14,
                  color: "var(--fg-muted)",
                  lineHeight: 1.6,
                }}
              >
                That means making <strong>${perDayGoal}</strong> per day gross — before
                Fiverr&apos;s cut — across all your gigs combined.
              </div>
            </div>

            <div className="card" style={{ padding: 24, background: "var(--bg-2)" }}>
              <div className="h-eyebrow" style={{ color: "var(--fg-dim)", marginBottom: 14 }}>
                Tips to hit your number faster
              </div>
              <div style={{ display: "grid", gap: 10 }}>
                {[
                  "Raise your Standard package — most buyers pick middle tier",
                  "Add a Premium package with stems + FL project file for 2–3× revenue",
                  "Set up buyer-request automation (see Module 04 of the course)",
                  "One repeat client ordering 4×/month = 4 orders you didn't have to chase",
                ].map((tip, i) => (
                  <div key={i} className="module-item">
                    <span className="module-bullet">✓</span>
                    <span style={{ fontSize: 14 }}>{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Back to courses */}
        <div
          style={{
            marginTop: 48,
            paddingTop: 32,
            borderTop: "1px solid var(--border)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
            <div style={{ fontSize: 13, color: "var(--fg-muted)", marginBottom: 4 }}>
              From the Fiverr Beat Seller Blueprint course
            </div>
            <div style={{ fontSize: 13, color: "var(--fg-dim)" }}>
              loopgem.com · Sfooxbeats
            </div>
          </div>
          <Link href="/courses" className="btn btn-primary btn-sm">
            Get the full course →
          </Link>
        </div>
      </div>
    </div>
  );
}
