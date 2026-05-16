import type { Metadata } from "next";
import PayPalButton from "@/components/PayPalButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book a Session — LoopGem",
  description: "Book a private 1-on-1 video call with LoopGem for music production mentorship, beat feedback, and strategy.",
};

const sessions = [
  {
    id: "s1",
    name: "Quick Fire",
    duration: "30 minutes",
    price: 49.99,
    perks: [
      "Beat or track feedback",
      "Specific question answers",
      "Mix review & tips",
      "Recorded session (on request)",
    ],
    best: "First-timers & quick questions",
    highlight: false,
  },
  {
    id: "s2",
    name: "Deep Dive",
    duration: "60 minutes",
    price: 89.99,
    perks: [
      "Full project or career review",
      "Custom action plan",
      "Brand & positioning feedback",
      "Beat & marketing critique",
      "Recorded session",
      "Follow-up summary email",
    ],
    best: "Producers serious about growth",
    highlight: true,
  },
  {
    id: "s3",
    name: "Mentorship Pack",
    duration: "4 × 60 min (monthly)",
    price: 299.99,
    perks: [
      "4 weekly 60-min calls",
      "Accountability check-ins",
      "Unlimited email support",
      "Custom growth roadmap",
      "All sessions recorded",
      "Priority response time",
    ],
    best: "Producers committed to transformation",
    highlight: false,
  },
];

export default function Booking() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#c9a84c] mb-2">1-on-1 Sessions</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Book a{" "}
          <span className="text-gold-gradient">Video Call</span>
        </h1>
        <p className="text-[#a0a0a0] max-w-2xl mx-auto">
          Get direct access — real talk, real feedback, real strategy. No templates, no generic advice. Just what you specifically need.
        </p>
      </div>

      {/* Session cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {sessions.map((s) => (
          <div
            key={s.id}
            className={`relative flex flex-col rounded-xl border p-6 ${
              s.highlight ? "border-[#c9a84c] glow-gold" : "border-[#2a2a2a]"
            } bg-[#111111]`}
          >
            {s.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#c9a84c] text-[#0a0a0a] text-xs font-bold">
                Most Popular
              </div>
            )}

            <div className="mb-4">
              <h2 className="text-xl font-bold mb-0.5">{s.name}</h2>
              <p className="text-xs text-[#c9a84c] font-medium">{s.duration}</p>
            </div>

            <div className="mb-5">
              <span className="text-3xl font-bold text-gold-gradient">${s.price.toFixed(2)}</span>
            </div>

            <p className="text-xs text-[#7a7a7a] mb-4">Best for: {s.best}</p>

            <ul className="space-y-2 flex-1 mb-6">
              {s.perks.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-[#a0a0a0]">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#c9a84c" strokeWidth={2} className="shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {p}
                </li>
              ))}
            </ul>

            <PayPalButton
              amount={s.price.toFixed(2)}
              description={`LoopGem Coaching: ${s.name} (${s.duration})`}
              successMessage="Booking confirmed! We'll send a scheduling link to your email within 24 hours."
            />
          </div>
        ))}
      </div>

      {/* How it works */}
      <section className="border border-[#2a2a2a] rounded-2xl bg-[#111111] p-10 mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">
          How It <span className="text-gold-gradient">Works</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { step: "1", title: "Pick a Session", desc: "Choose the plan that fits your goals and budget." },
            { step: "2", title: "Complete Payment", desc: "Secure checkout via PayPal. No subscription required." },
            { step: "3", title: "Get Your Link", desc: "Receive a scheduling email within 24 hours." },
            { step: "4", title: "Join the Call", desc: "Hop on Zoom or Google Meet and let's get to work." },
          ].map((s) => (
            <div key={s.step} className="text-center">
              <div className="w-10 h-10 rounded-full border border-[#c9a84c] text-[#c9a84c] font-bold text-sm flex items-center justify-center mx-auto mb-3">
                {s.step}
              </div>
              <h3 className="font-semibold text-sm mb-1">{s.title}</h3>
              <p className="text-xs text-[#7a7a7a]">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">
          Common <span className="text-gold-gradient">Questions</span>
        </h2>
        <div className="space-y-4">
          {[
            {
              q: "What platform do we use for calls?",
              a: "Zoom or Google Meet — your choice. The link is sent after booking.",
            },
            {
              q: "Can I get a refund if I can't make it?",
              a: "Yes. Cancel at least 24 hours before and receive a full refund or rescheduling.",
            },
            {
              q: "What should I prepare before the call?",
              a: "Send any tracks, links, or questions in advance via email so we can dive straight in.",
            },
            {
              q: "Are sessions recorded?",
              a: "Yes — recordings are available on request for the Deep Dive and Mentorship Pack.",
            },
          ].map((faq) => (
            <details
              key={faq.q}
              className="group border border-[#2a2a2a] rounded-xl bg-[#111111] overflow-hidden"
            >
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none text-sm font-semibold">
                {faq.q}
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="group-open:rotate-180 transition-transform duration-200 shrink-0"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-6 pb-5 text-sm text-[#a0a0a0] border-t border-[#2a2a2a] pt-4">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <div className="border border-[#c9a84c]/20 rounded-xl bg-[#c9a84c]/5 p-8 text-center">
        <h2 className="text-xl font-bold mb-2">Not sure which session is right for you?</h2>
        <p className="text-[#a0a0a0] text-sm mb-5">Send a message and we'll help you pick.</p>
        <Link
          href="/contact"
          className="inline-block px-6 py-3 rounded-md border border-[#c9a84c] text-[#c9a84c] font-semibold text-sm hover:bg-[#c9a84c] hover:text-[#0a0a0a] transition-colors duration-150"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
