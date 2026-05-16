"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

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
    // Submits to Formspree — replace YOUR_FORM_ID with your Formspree form ID
    await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ ...form, _replyto: form.email }),
    });
    setSent(true);
    setLoading(false);
  };

  const reasons = [
    "Custom beat request",
    "Exclusive licensing inquiry",
    "Mixing / mastering project",
    "Collaboration",
    "Course question",
    "1-on-1 coaching",
    "Other",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#c9a84c] mb-2">Get in Touch</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Let&apos;s <span className="text-gold-gradient">Talk</span>
        </h1>
        <p className="text-[#a0a0a0] max-w-xl mx-auto">
          Questions, custom requests, or just want to connect — send a message and we&apos;ll get back to you within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Left info */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          {/* Quick links */}
          <div>
            <h2 className="text-sm font-semibold mb-4 text-[#ededed]">What are you reaching out about?</h2>
            <div className="flex flex-col gap-2">
              {reasons.map((r) => (
                <button
                  key={r}
                  onClick={() => setForm((f) => ({ ...f, subject: r }))}
                  className={`text-left text-sm px-4 py-2.5 rounded-lg border transition-colors duration-150 ${
                    form.subject === r
                      ? "border-[#c9a84c] bg-[#c9a84c]/5 text-[#c9a84c]"
                      : "border-[#2a2a2a] bg-[#111111] text-[#7a7a7a] hover:border-[#3a3a3a] hover:text-[#a0a0a0]"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          {/* Direct links */}
          <div className="border border-[#2a2a2a] rounded-xl bg-[#111111] p-5">
            <h2 className="text-sm font-semibold mb-4 text-[#ededed]">Or jump straight to it</h2>
            <div className="space-y-3">
              {[
                { label: "Beat Store", href: "/beat-store", icon: "🎵" },
                { label: "Services & Pricing", href: "/services", icon: "🎚️" },
                { label: "Book a 1-on-1 Call", href: "/booking", icon: "📅" },
                { label: "Producer Courses", href: "/courses", icon: "🎓" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="flex items-center gap-3 text-sm text-[#7a7a7a] hover:text-[#c9a84c] transition-colors duration-150"
                >
                  <span>{l.icon}</span>
                  {l.label}
                  <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="ml-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Response time */}
          <div className="flex items-center gap-3 text-xs text-[#7a7a7a]">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
            Typical response time: under 24 hours
          </div>
        </div>

        {/* Contact form */}
        <div className="lg:col-span-3">
          {sent ? (
            <div className="border border-[#c9a84c]/30 rounded-2xl bg-[#c9a84c]/5 p-12 text-center flex flex-col items-center justify-center h-full min-h-[400px]">
              <div className="w-14 h-14 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/40 flex items-center justify-center mb-5">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#c9a84c" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h2 className="text-xl font-bold mb-2">Message Sent!</h2>
              <p className="text-[#a0a0a0] text-sm max-w-xs">
                Thanks for reaching out. We&apos;ll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="border border-[#2a2a2a] rounded-2xl bg-[#111111] p-8 flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-[#a0a0a0] mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg bg-[#161616] border border-[#2a2a2a] text-[#ededed] text-sm placeholder-[#4a4a4a] focus:outline-none focus:border-[#c9a84c] transition-colors duration-150"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#a0a0a0] mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg bg-[#161616] border border-[#2a2a2a] text-[#ededed] text-sm placeholder-[#4a4a4a] focus:outline-none focus:border-[#c9a84c] transition-colors duration-150"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#a0a0a0] mb-2">Subject</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg bg-[#161616] border border-[#2a2a2a] text-[#ededed] text-sm placeholder-[#4a4a4a] focus:outline-none focus:border-[#c9a84c] transition-colors duration-150"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#a0a0a0] mb-2">Message *</label>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg bg-[#161616] border border-[#2a2a2a] text-[#ededed] text-sm placeholder-[#4a4a4a] focus:outline-none focus:border-[#c9a84c] transition-colors duration-150 resize-none"
                  placeholder="Tell us what you need..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-lg bg-[#c9a84c] text-[#0a0a0a] font-semibold text-sm hover:bg-[#e5c97e] disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-150"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              <p className="text-xs text-[#4a4a4a] text-center">
                We don&apos;t share your information with anyone. Ever.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <Suspense fallback={null}>
      <ContactForm />
    </Suspense>
  );
}
