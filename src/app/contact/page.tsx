"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FadeIn } from "@/components/Animate";

function ContactForm() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const sub = searchParams.get("subject");
    if (sub) setForm((f) => ({ ...f, subject: decodeURIComponent(sub) }));
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ ...form, _replyto: form.email }),
    });
    setSent(true);
    setLoading(false);
  };

  const reasons = ["Course question", "1-on-1 coaching inquiry", "General question", "Other"];

  return (
    <section style={{ padding: "88px 0 120px", position: "relative" }}>
      <div className="glow-radial" aria-hidden="true" />
      <div className="container-lg" style={{ position: "relative", zIndex: 1 }}>
        <FadeIn>
          <div className="section-label" style={{ marginBottom: 24 }}>
            Get in touch
          </div>
        </FadeIn>
        <FadeIn delay={0.06}>
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(48px, 8vw, 104px)",
              lineHeight: 0.95,
              margin: "0 0 24px",
              paddingBottom: "0.08em",
            }}
          >
            Let&apos;s <span className="text-gold-gradient">talk.</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.14}>
          <p
            style={{
              color: "var(--fg-muted)",
              fontSize: 18,
              lineHeight: 1.6,
              maxWidth: 620,
              margin: "0 0 56px",
            }}
          >
            Questions, custom requests, or just want to connect — send a message and we&apos;ll get
            back to you within 24 hours.
          </p>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: 40,
          }}
          className="contact-grid"
        >
          <FadeIn>
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              <div>
                <div
                  className="h-eyebrow"
                  style={{ color: "var(--accent)", marginBottom: 14 }}
                >
                  What about?
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {reasons.map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setForm((f) => ({ ...f, subject: r }))}
                      className="lg-input"
                      style={{
                        textAlign: "left",
                        cursor: "pointer",
                        borderColor: form.subject === r ? "var(--accent)" : "var(--border-strong)",
                        color: form.subject === r ? "var(--accent)" : "var(--fg)",
                        background: form.subject === r ? "var(--accent-soft)" : "var(--bg)",
                        fontWeight: 600,
                      }}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              <div
                className="card"
                style={{ padding: 24, background: "var(--bg-2)" }}
              >
                <div
                  className="h-eyebrow"
                  style={{ color: "var(--accent)", marginBottom: 14 }}
                >
                  Or jump straight to it
                </div>
                <div style={{ display: "grid", gap: 10 }}>
                  {[
                    { label: "Browse Courses", href: "/courses" },
                    { label: "Book a 1-on-1 Call", href: "/booking" },
                    { label: "About Sfooxbeats", href: "/about" },
                  ].map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="lg-nav-link"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        color: "var(--fg)",
                      }}
                    >
                      {l.label} <span aria-hidden="true">→</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  color: "var(--fg-muted)",
                  fontSize: 13,
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 999,
                    background: "var(--accent)",
                    display: "inline-block",
                  }}
                />
                Typical response: under 24 hours
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            {sent ? (
              <div
                className="card"
                style={{
                  padding: 56,
                  textAlign: "center",
                  background: "var(--bg-2)",
                  borderColor: "color-mix(in oklch, var(--accent) 35%, var(--border))",
                }}
              >
                <div
                  className="font-display"
                  style={{ fontSize: 36, color: "var(--accent)", marginBottom: 10 }}
                >
                  Message sent!
                </div>
                <p style={{ color: "var(--fg-muted)", margin: 0 }}>
                  Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="card"
                style={{ padding: 32, display: "grid", gap: 14, background: "var(--bg-2)" }}
              >
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <Field label="Name *">
                    <input
                      className="lg-input"
                      required
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      placeholder="Your name"
                    />
                  </Field>
                  <Field label="Email *">
                    <input
                      className="lg-input"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      placeholder="you@email.com"
                    />
                  </Field>
                </div>
                <Field label="Subject">
                  <input
                    className="lg-input"
                    value={form.subject}
                    onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                    placeholder="What's this about?"
                  />
                </Field>
                <Field label="Message *">
                  <textarea
                    className="lg-input"
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    placeholder="Tell us what you need..."
                    style={{ resize: "vertical" }}
                  />
                </Field>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary"
                  style={{ width: "100%", opacity: loading ? 0.6 : 1 }}
                >
                  {loading ? "Sending..." : "Send message →"}
                </button>
                <p
                  style={{
                    color: "var(--fg-dim)",
                    fontSize: 12,
                    textAlign: "center",
                    margin: 0,
                  }}
                >
                  We don&apos;t share your information with anyone. Ever.
                </p>
              </form>
            )}
          </FadeIn>
        </div>

        <style>{`
          @media (max-width: 880px) {
            .contact-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label style={{ display: "block" }}>
      <span
        className="h-eyebrow"
        style={{ color: "var(--fg-muted)", display: "block", marginBottom: 7 }}
      >
        {label}
      </span>
      {children}
    </label>
  );
}

export default function Contact() {
  return (
    <Suspense fallback={null}>
      <ContactForm />
    </Suspense>
  );
}
