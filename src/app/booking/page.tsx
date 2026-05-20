import type { Metadata } from "next";
import PayPalButton from "@/components/PayPalButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "1-on-1 Coaching — LoopGem",
  description: "Book a 1-on-1 coaching call with Sfooxbeats. Learn how to sell beats and music services as a freelance music producer.",
};

const sessions = [
  {
    id: "s1",
    name: "Starter Session",
    duration: "30 minutes",
    price: 49.99,
    best: "Producers just starting to sell",
    highlight: false,
    perks: [
      "How to price your beats & services",
      "Best platforms to start selling on",
      "Setting up your first profile or store",
      "Q&A — bring your exact questions",
      "Recorded session on request",
    ],
  },
  {
    id: "s2",
    name: "Sales Strategy Call",
    duration: "60 minutes",
    price: 89.99,
    best: "Producers ready to scale",
    highlight: true,
    perks: [
      "Full breakdown of your setup & gaps",
      "Pricing strategy for all your services",
      "How to attract mixing, beat & production clients",
      "Social media & content plan that converts",
      "How to close deals via DM and email",
      "Recorded session + written action plan",
    ],
  },
  {
    id: "s3",
    name: "Freelancer Blueprint",
    duration: "4 × 60 min (monthly)",
    price: 299.99,
    best: "Producers building a real income",
    highlight: false,
    perks: [
      "4 weekly calls — full freelance build",
      "Beat selling, services & brand strategy",
      "Online presence & profile setup",
      "How to get recurring clients & retainers",
      "Contracts, licensing & protecting your work",
      "Unlimited email support between sessions",
      "All sessions recorded",
    ],
  },
];

const steps = [
  { n: "01", title: "Pick a Session", desc: "Choose the plan that fits where you are and where you want to go." },
  { n: "02", title: "Complete Payment", desc: "Secure checkout via PayPal or card. No subscription, no commitment." },
  { n: "03", title: "Get Your Link", desc: "You'll receive a scheduling email within 24 hours to pick your time." },
  { n: "04", title: "Show Up & Learn", desc: "Join on Zoom or Google Meet. Come with questions — leave with a plan." },
];

const faqs = [
  { q: "What platform do we use?", a: "Zoom or Google Meet — your choice. The link is sent to your email after booking." },
  { q: "What will I actually learn?", a: "How to sell beats, mixing services, and music products online — pricing, platforms, getting clients, social media strategy, and closing deals." },
  { q: "Do I need to already be making money?", a: "No. The Starter Session is built for producers who haven't sold yet and want a clear starting point." },
  { q: "What should I prepare before the call?", a: "Send your current setup — links to your profiles or any questions in advance — so we can get straight into it." },
  { q: "Can I get a refund?", a: "Yes. Cancel at least 24 hours before and receive a full refund or rescheduling at no cost." },
  { q: "Are sessions recorded?", a: "Yes — recordings available on request for the Sales Strategy Call and Freelancer Blueprint." },
];

export default function Booking() {
  return (
    <div className="bg-[#080808] min-h-screen">

      {/* ── HEADER ── */}
      <div className="border-b border-white/5 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c9a84c] mb-3">1-on-1 Coaching</p>
          <h1
            className="text-6xl sm:text-8xl font-black uppercase tracking-tight leading-none mb-5"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Book a Call
          </h1>
          <p className="text-[#666] text-base max-w-xl">
            Direct, personalised coaching from Sfooxbeats — no theory, no fluff. Learn exactly what to do to start getting paid as a music producer.
          </p>
        </div>
      </div>

      {/* ── PRICING CARDS ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
          {sessions.map((s) => (
            <div
              key={s.id}
              className={`relative flex flex-col p-8 border transition-colors duration-200 ${
                s.highlight
                  ? "border-[#c9a84c]/60 bg-[#c9a84c]/5"
                  : "border-white/5 bg-[#0f0f0f]"
              }`}
            >
              {s.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-[#c9a84c] text-black text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <p className="text-[10px] uppercase tracking-[0.2em] text-[#c9a84c] mb-2">{s.duration}</p>
              <h2
                className="text-2xl font-black uppercase tracking-tight mb-1"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                {s.name}
              </h2>
              <p className="text-xs text-[#444] mb-5">Best for: {s.best}</p>

              <div className="mb-7">
                <span
                  className="text-5xl font-black"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  ${s.price.toFixed(2)}
                </span>
              </div>

              <ul className="space-y-2.5 flex-1 mb-8">
                {s.perks.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-[#777]">
                    <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="#c9a84c" strokeWidth={2.5} className="shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>

              <PayPalButton
                amount={s.price.toFixed(2)}
                description={`LoopGem Coaching: ${s.name} (${s.duration})`}
                successMessage="Booking confirmed! You'll receive a scheduling link within 24 hours."
              />
            </div>
          ))}
        </div>

        {/* ── HOW IT WORKS ── */}
        <div className="border border-white/5 bg-[#0f0f0f] p-10 mb-16">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c9a84c] mb-2">Simple Process</p>
            <h2
              className="text-4xl font-black uppercase tracking-tight"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              How It Works
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.n}>
                <div
                  className="text-6xl font-black leading-none mb-3"
                  style={{ fontFamily: "var(--font-barlow)", color: "#c9a84c", opacity: 0.15 }}
                >
                  {s.n}
                </div>
                <h3
                  className="text-lg font-black uppercase tracking-tight mb-2"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {s.title}
                </h3>
                <p className="text-xs text-[#555] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── FAQ ── */}
        <div className="mb-16">
          <div className="mb-8">
            <h2
              className="text-4xl font-black uppercase tracking-tight"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              FAQ
            </h2>
          </div>
          <div className="divide-y divide-white/5">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer list-none text-sm font-semibold text-white hover:text-[#c9a84c] transition-colors">
                  {faq.q}
                  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="shrink-0 group-open:rotate-180 transition-transform duration-200 text-[#444]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <p className="mt-3 text-sm text-[#666] leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* ── COURSES UPSELL ── */}
        <div className="border border-[#c9a84c]/20 bg-[#c9a84c]/5 p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] mb-2">Prefer self-paced learning?</p>
            <h2
              className="text-3xl font-black uppercase tracking-tight mb-1"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Browse PDF Courses
            </h2>
            <p className="text-[#666] text-sm">From $27 — yours forever, read at your own pace.</p>
          </div>
          <Link
            href="/courses"
            className="shrink-0 px-8 py-3.5 border border-[#c9a84c] text-[#c9a84c] font-black text-sm uppercase tracking-widest hover:bg-[#c9a84c] hover:text-black transition-colors"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            View Courses
          </Link>
        </div>

      </div>
    </div>
  );
}
