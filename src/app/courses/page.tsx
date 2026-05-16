import type { Metadata } from "next";
import PayPalButton from "@/components/PayPalButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Courses — LoopGem",
  description: "Learn how to make money as a music producer. Real strategies, real results.",
};

const courses = [
  {
    id: "c1",
    title: "Producer Playbook: Zero to Income",
    tagline: "The complete A–Z guide to making money as a producer",
    price: 97,
    originalPrice: 197,
    modules: 8,
    lessons: 42,
    hours: 12,
    level: "Beginner → Advanced",
    badge: "Best Seller",
    highlights: [
      "How to price your beats and services",
      "Building a brand that attracts clients",
      "Selling beats online — Beatstars, your own site, and more",
      "Landing sync placements and licensing deals",
      "Email marketing for producers",
      "Social media strategy (no dancing required)",
      "Scaling to $5k/month and beyond",
      "Community access + live Q&A calls",
    ],
    modules_list: [
      "Module 1: The Producer Mindset",
      "Module 2: Building Your Sound & Brand",
      "Module 3: Beat Selling Platforms Deep Dive",
      "Module 4: Pricing & Licensing Strategies",
      "Module 5: Marketing Without an Audience",
      "Module 6: Social Media That Converts",
      "Module 7: Scaling Your Income Streams",
      "Module 8: Advanced Strategies & Automation",
    ],
  },
  {
    id: "c2",
    title: "Mixing Masterclass",
    tagline: "Professional mixing from scratch — your home studio, radio-ready results",
    price: 67,
    originalPrice: 127,
    modules: 6,
    lessons: 28,
    hours: 8,
    level: "Beginner → Intermediate",
    badge: null,
    highlights: [
      "EQ, compression, and dynamics explained simply",
      "Building a cohesive mix from session to bounce",
      "Vocal mixing and tuning deep dive",
      "Reference tracks and metering",
      "Drum mixing fundamentals",
      "Final mix checklist",
    ],
    modules_list: [
      "Module 1: The Signal Chain",
      "Module 2: EQ & Frequency Management",
      "Module 3: Compression & Dynamics",
      "Module 4: Effects — Reverb, Delay & More",
      "Module 5: Mixing Vocals",
      "Module 6: The Final Mix",
    ],
  },
  {
    id: "c3",
    title: "Beat Selling Accelerator",
    tagline: "Go from making beats to getting paid — fast",
    price: 47,
    originalPrice: 97,
    modules: 4,
    lessons: 18,
    hours: 5,
    level: "Any level",
    badge: "Quick Start",
    highlights: [
      "Set up your Beatstars or Airbit store",
      "Tagging, SEO, and discoverability",
      "Writing beat descriptions that convert",
      "TikTok & Instagram strategy for beat sales",
      "Email list building from day one",
      "Free vs. paid beats strategy",
    ],
    modules_list: [
      "Module 1: Store Setup & Optimization",
      "Module 2: Tagging & SEO",
      "Module 3: Content That Sells",
      "Module 4: Growing & Monetizing Your Audience",
    ],
  },
];

export default function Courses() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#c9a84c] mb-2">Education</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Producer{" "}
          <span className="text-gold-gradient">Courses</span>
        </h1>
        <p className="text-[#a0a0a0] max-w-2xl mx-auto">
          Real strategies from a working producer. No fluff, no theory — just the things that actually make you money.
        </p>
      </div>

      {/* Courses */}
      <div className="flex flex-col gap-10">
        {courses.map((course, idx) => (
          <div
            key={course.id}
            className={`border rounded-2xl overflow-hidden ${idx === 0 ? "border-[#c9a84c]" : "border-[#2a2a2a]"}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Left: info */}
              <div className="lg:col-span-2 bg-[#111111] p-8">
                <div className="flex items-center gap-3 mb-3">
                  {course.badge && (
                    <span className="px-2.5 py-0.5 rounded-full bg-[#c9a84c] text-[#0a0a0a] text-xs font-bold">
                      {course.badge}
                    </span>
                  )}
                  <span className="text-xs text-[#7a7a7a]">{course.level}</span>
                </div>

                <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
                <p className="text-[#a0a0a0] text-sm mb-5">{course.tagline}</p>

                {/* Stats */}
                <div className="flex flex-wrap gap-5 mb-6">
                  {[
                    { label: "Modules", value: course.modules },
                    { label: "Lessons", value: course.lessons },
                    { label: "Hours", value: `${course.hours}h` },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <p className="text-xl font-bold text-[#c9a84c]">{s.value}</p>
                      <p className="text-xs text-[#7a7a7a]">{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* What you'll learn */}
                <h3 className="text-sm font-semibold mb-3 text-[#ededed]">What you&apos;ll learn</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {course.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-xs text-[#a0a0a0]">
                      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#c9a84c" strokeWidth={2} className="shrink-0 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Module list */}
                <details className="group">
                  <summary className="cursor-pointer text-xs font-semibold text-[#c9a84c] hover:text-[#e5c97e] transition-colors duration-150 list-none flex items-center gap-1">
                    <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="group-open:rotate-90 transition-transform duration-150">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    View all {course.modules} modules
                  </summary>
                  <ul className="mt-3 space-y-1.5 pl-4 border-l border-[#2a2a2a]">
                    {course.modules_list.map((m) => (
                      <li key={m} className="text-xs text-[#7a7a7a]">{m}</li>
                    ))}
                  </ul>
                </details>
              </div>

              {/* Right: purchase */}
              <div className="bg-[#0f0f0f] border-t lg:border-t-0 lg:border-l border-[#2a2a2a] p-8 flex flex-col justify-center">
                <div className="mb-6 text-center">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold text-gold-gradient">${course.price}</span>
                    <span className="text-[#7a7a7a] line-through text-sm">${course.originalPrice}</span>
                  </div>
                  <p className="text-xs text-[#c9a84c] mt-1">
                    Save ${course.originalPrice - course.price} — limited time
                  </p>
                </div>

                <ul className="space-y-2 mb-6">
                  {["Lifetime access", "All future updates free", "30-day money-back guarantee"].map((p) => (
                    <li key={p} className="flex items-center gap-2 text-xs text-[#7a7a7a]">
                      <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="#c9a84c" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>

                <PayPalButton
                  amount={course.price.toFixed(2)}
                  description={`LoopGem Course: ${course.title}`}
                  successMessage="Enrolled! You'll receive access details by email shortly."
                />

                <p className="text-center text-xs text-[#7a7a7a] mt-4">
                  Questions?{" "}
                  <Link href="/contact" className="text-[#c9a84c] hover:underline">
                    Contact us
                  </Link>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 1-on-1 upsell */}
      <div className="mt-16 border border-[#c9a84c]/20 rounded-xl bg-[#c9a84c]/5 p-8 text-center">
        <h2 className="text-xl font-bold mb-2">Want Personalized Guidance?</h2>
        <p className="text-[#a0a0a0] text-sm mb-5">
          Book a 1-on-1 video call and get direct feedback on your music, brand, or business.
        </p>
        <Link
          href="/booking"
          className="inline-block px-6 py-3 rounded-md bg-[#c9a84c] text-[#0a0a0a] font-semibold text-sm hover:bg-[#e5c97e] transition-colors duration-150"
        >
          Book a Coaching Session
        </Link>
      </div>
    </div>
  );
}
