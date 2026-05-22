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
    n: "01",
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
    n: "02",
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
    n: "03",
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
  { n: "02", title: "Pay Securely", desc: "Checkout via PayPal or card. No subscription, no commitment." },
  { n: "03", title: "Get Your Link", desc: "Scheduling email arrives within 24 hours. Pick your time." },
  { n: "04", title: "Show Up & Learn", desc: "Join on Zoom or Google Meet. Come with questions, leave with a plan." },
];

const faqs = [
  { q: "What platform do we use?", a: "Zoom or Google Meet — your choice. The link is sent to your email after booking." },
  { q: "What will I actually learn?", a: "How to sell beats, mixing services, and music products online — pricing, platforms, getting clients, social media strategy, and closing deals." },
  { q: "Do I need to already be making money?", a: "No. The Starter Session is built for producers who haven't sold yet and want a clear starting point." },
  { q: "What should I prepare?", a: "Send your current setup links or questions in advance so we can skip the intro and get straight to work." },
  { q: "Can I get a refund?", a: "Yes. Cancel at least 24 hours before and receive a full refund or free rescheduling." },
  { q: "Are sessions recorded?", a: "Yes — recordings available on request for the Sales Strategy Call and Freelancer Blueprint." },
];

export default function Booking() {
  return (
    <div className="bg-[#080808] min-h-screen">

      {/* Header */}
      <div className="border-b border-white/[0.04] py-20 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-sm font-black text-[#c9a84c]" style={{ fontFamily: "var(--font-barlow)" }}>1-on-1</span>
            <div className="w-8 h-px bg-[#c9a84c]/30" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#444]">Coaching Sessions</span>
          </div>
          <h1 className="font-black uppercase leading-none tracking-tight mb-5"
            style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(60px, 9vw, 120px)" }}>
            Book a Call
          </h1>
          <p className="text-[#555] text-sm max-w-md">
            Direct, personalised coaching — no theory, no fluff. Learn exactly what to do to start getting paid as a music producer.
          </p>
        </div>
      </div>

      {/* Session cards */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.03] mb-px">
          {sessions.map((s) => (
            <div
              key={s.id}
              className={`relative flex flex-col p-10 ${s.highlight ? "bg-[#0d0d0d]" : "bg-[#080808] hover:bg-[#0a0a0a]"} transition-colors`}
            >
              {s.highlight && (
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#c9a84c]" />
              )}

              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#c9a84c] mb-1">{s.duration}</p>
                  <h2 className="font-black uppercase tracking-tight"
                    style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(22px, 2.5vw, 30px)" }}>
                    {s.name}
                  </h2>
                </div>
                {s.highlight && (
                  <span className="text-[9px] bg-[#c9a84c] text-black px-2 py-0.5 font-black uppercase tracking-widest shrink-0 mt-1">Popular</span>
                )}
              </div>

              <p className="text-[11px] text-[#333] uppercase tracking-wider mb-6">Best for: {s.best}</p>

              <ul className="space-y-2.5 flex-1 mb-8">
                {s.perks.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-[#555]">
                    <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="#c9a84c" strokeWidth={2.5} className="shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>

              <div className="border-t border-white/[0.04] pt-6">
                <p className="font-black mb-5" style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(36px, 4vw, 48px)" }}>
                  ${s.price.toFixed(2)}
                </p>
                <PayPalButton
                  amount={s.price.toFixed(2)}
                  description={`LoopGem Coaching: ${s.name} (${s.duration})`}
                  successMessage="Booking confirmed! You'll receive a scheduling link within 24 hours."
                />
              </div>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="border border-white/[0.04] bg-[#050505] p-10 sm:p-14 mb-16 mt-16">
          <div className="mb-12">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#c9a84c] mb-3">Simple Process</p>
            <h2 className="font-black uppercase tracking-tight"
              style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(36px, 5vw, 64px)" }}>
              How It Works
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((s) => (
              <div key={s.n}>
                <p className="font-black leading-none mb-4 select-none"
                  style={{ fontFamily: "var(--font-barlow)", fontSize: "72px", color: "#c9a84c", opacity: 0.1 }}>
                  {s.n}
                </p>
                <h3 className="text-lg font-black uppercase tracking-tight mb-2"
                  style={{ fontFamily: "var(--font-barlow)" }}>
                  {s.title}
                </h3>
                <p className="text-xs text-[#444] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="font-black uppercase tracking-tight mb-10"
            style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(36px, 5vw, 64px)" }}>
            FAQ
          </h2>
          <div className="divide-y divide-white/[0.04]">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer list-none text-sm font-semibold text-[#888] hover:text-white transition-colors">
                  {faq.q}
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="shrink-0 group-open:rotate-180 transition-transform duration-300 text-[#333]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <p className="mt-3 text-sm text-[#444] leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Courses upsell */}
        <div className="border border-[#c9a84c]/15 bg-[#c9a84c]/4 p-10 sm:p-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#c9a84c] mb-2">Prefer self-paced learning?</p>
            <h2 className="font-black uppercase tracking-tight leading-none"
              style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(28px, 3.5vw, 48px)" }}>
              Browse PDF Courses
            </h2>
            <p className="text-[#555] text-xs mt-2">From $27 · Yours forever · Read at your own pace</p>
          </div>
          <Link href="/courses"
            className="shrink-0 px-8 py-3.5 border border-[#c9a84c]/30 text-[#c9a84c] font-black text-xs uppercase tracking-[0.2em] hover:bg-[#c9a84c] hover:text-black hover:border-[#c9a84c] transition-colors whitespace-nowrap"
            style={{ fontFamily: "var(--font-barlow)" }}>
            View Courses
          </Link>
        </div>
      </div>
    </div>
  );
}
