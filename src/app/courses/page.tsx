import type { Metadata } from "next";
import CoursePayPalButton from "@/components/CoursePayPalButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Courses — LoopGem",
  description: "PDF courses on how to sell beats and music services on Fiverr. Real strategies from Sfooxbeats.",
};

const courses = [
  {
    id: "c1",
    n: "01",
    title: "Fiverr Beat Seller Blueprint",
    tagline: "Zero to consistent orders on Fiverr — even with no reviews.",
    price: 27,
    originalPrice: 47,
    pages: 45,
    chapters: 8,
    badge: "Best Seller",
    highlight: true,
    description: "Everything you need to set up a high-converting Fiverr beat selling gig, rank in search, and get your first paying clients — even with zero reviews.",
    whatYouLearn: [
      "How to set up your Fiverr profile the right way",
      "Writing a gig title & description that ranks and converts",
      "Pricing your beats correctly for Fiverr buyers",
      "Choosing the right tags and keywords to get found",
      "How to get your first 5-star review fast",
      "Upselling exclusive licenses to Fiverr clients",
      "How to respond to buyers and close orders",
      "Scaling from 1 order to consistent weekly income",
    ],
    chapters_list: [
      "Chapter 1: Why Fiverr Works for Beat Sellers",
      "Chapter 2: Setting Up a Winning Profile",
      "Chapter 3: Creating Gigs That Rank",
      "Chapter 4: Pricing & Package Strategy",
      "Chapter 5: Getting Your First Orders",
      "Chapter 6: Delivering & Getting 5-Star Reviews",
      "Chapter 7: Upselling & Increasing Order Value",
      "Chapter 8: Scaling to Consistent Income",
    ],
  },
  {
    id: "c2",
    n: "02",
    title: "Sell Music Services on Fiverr",
    tagline: "Build a freelance business around mixing, mastering & production.",
    price: 27,
    originalPrice: 47,
    pages: 40,
    chapters: 7,
    badge: null,
    highlight: false,
    description: "A step-by-step PDF on building a Fiverr business around mixing, mastering, and music production services — and turning one-time clients into repeat buyers.",
    whatYouLearn: [
      "How to position yourself as a mixing & mastering expert",
      "Setting up gigs for mixing, mastering & beat production",
      "What to include in your packages to stand out",
      "How to communicate with clients professionally",
      "Delivering files and handling revision requests",
      "Getting repeat clients and referrals",
      "Expanding beyond Fiverr to other platforms",
    ],
    chapters_list: [
      "Chapter 1: The Opportunity in Music Services Freelancing",
      "Chapter 2: Your Niche & Positioning",
      "Chapter 3: Building Your Fiverr Service Gigs",
      "Chapter 4: Pricing Your Services Right",
      "Chapter 5: Client Communication & Delivery",
      "Chapter 6: Reviews, Retention & Referrals",
      "Chapter 7: Growing Beyond Fiverr",
    ],
  },
  {
    id: "c3",
    n: "03",
    title: "Full Freelance Music Producer Playbook",
    tagline: "Every income stream. Every platform. One complete PDF.",
    price: 47,
    originalPrice: 97,
    pages: 80,
    chapters: 12,
    badge: "Best Value",
    highlight: false,
    description: "The complete playbook combining beat selling, music services, and digital products across Fiverr, Beatstars, and beyond. Everything in one PDF.",
    whatYouLearn: [
      "Selling beats on Fiverr, Beatstars & your own site",
      "Offering mixing, mastering & production as services",
      "How to juggle multiple income streams as a producer",
      "Building a personal brand that attracts clients",
      "Social media strategy for Fiverr profile growth",
      "Contracts, licensing & protecting your work",
      "Going from side income to full-time producer",
      "Scaling with automation and systems",
    ],
    chapters_list: [
      "Chapter 1: Building Your Producer Business from Scratch",
      "Chapter 2: The Three Income Streams",
      "Chapter 3: Fiverr Setup for All Three Streams",
      "Chapter 4: Beatstars & Other Beat Platforms",
      "Chapter 5: Personal Brand & Online Presence",
      "Chapter 6: Social Media That Drives Sales",
      "Chapter 7: Pricing Everything You Offer",
      "Chapter 8: Closing Clients & Handling Orders",
      "Chapter 9: Contracts & Protecting Your Work",
      "Chapter 10: Scaling to Full-Time Income",
      "Chapter 11: Long-Term Growth & Automation",
      "Chapter 12: Building Recurring Income",
    ],
  },
];

export default function Courses() {
  return (
    <div className="bg-[#080808] min-h-screen">

      {/* Header */}
      <div className="border-b border-white/[0.04] py-20 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-sm font-black text-[#c9a84c]" style={{ fontFamily: "var(--font-barlow)" }}>PDF</span>
            <div className="w-8 h-px bg-[#c9a84c]/30" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#444]">Guides</span>
          </div>
          <h1 className="font-black uppercase leading-none tracking-tight mb-5"
            style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(60px, 9vw, 120px)" }}>
            Courses
          </h1>
          <p className="text-[#555] text-sm max-w-md">
            Step-by-step guides written from real experience. No theory — just the exact strategies that work.
          </p>
        </div>
      </div>

      {/* Trust bar */}
      <div className="border-b border-white/[0.04] bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-5 flex flex-wrap gap-x-10 gap-y-2">
          {["PDF — read on any device", "Instant delivery after payment", "Yours forever", "30-day money-back guarantee"].map((f) => (
            <div key={f} className="flex items-center gap-2 text-[11px] text-[#333]">
              <svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="#c9a84c" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              {f}
            </div>
          ))}
        </div>
      </div>

      {/* Course list */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 space-y-px">
        {courses.map((course) => (
          <div key={course.id} className={`border-l-2 ${course.highlight ? "border-[#c9a84c]" : "border-white/[0.04]"}`}>
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Left: info */}
              <div className="lg:col-span-2 bg-[#0a0a0a] hover:bg-[#0d0d0d] transition-colors p-8 sm:p-12">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="text-xs font-black text-[#2a2a2a]" style={{ fontFamily: "var(--font-barlow)" }}>{course.n}</span>
                  {course.badge && (
                    <span className="px-2.5 py-0.5 bg-[#c9a84c] text-black text-[9px] font-black uppercase tracking-widest">{course.badge}</span>
                  )}
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#2a2a2a]">{course.pages} pages · {course.chapters} chapters</span>
                </div>

                <h2 className="font-black uppercase tracking-tight leading-none mb-3"
                  style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(28px, 3.5vw, 48px)" }}>
                  {course.title}
                </h2>
                <p className="text-[11px] uppercase tracking-[0.15em] text-[#c9a84c] mb-6">{course.tagline}</p>
                <p className="text-sm text-[#555] leading-relaxed mb-8 max-w-lg">{course.description}</p>

                <p className="text-[10px] uppercase tracking-[0.2em] text-[#c9a84c] mb-4">What&apos;s Inside</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                  {course.whatYouLearn.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#555]">
                      <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="#c9a84c" strokeWidth={2.5} className="shrink-0 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <details className="group">
                  <summary className="cursor-pointer text-[11px] font-bold uppercase tracking-[0.15em] text-[#333] hover:text-[#c9a84c] transition-colors list-none flex items-center gap-2">
                    <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} className="group-open:rotate-90 transition-transform duration-150">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    View {course.chapters} chapters
                  </summary>
                  <ul className="mt-4 space-y-1.5 pl-4 border-l border-white/[0.04]">
                    {course.chapters_list.map((c) => (
                      <li key={c} className="text-xs text-[#333]">{c}</li>
                    ))}
                  </ul>
                </details>
              </div>

              {/* Right: checkout */}
              <div className="bg-[#050505] border-t lg:border-t-0 lg:border-l border-white/[0.04] p-8 sm:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="font-black text-gold-gradient" style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(48px, 5vw, 64px)" }}>
                      ${course.price}
                    </span>
                    <span className="text-[#2a2a2a] line-through text-sm">${course.originalPrice}</span>
                  </div>
                  <p className="text-[11px] text-[#c9a84c] font-bold uppercase tracking-widest">Save ${course.originalPrice - course.price}</p>
                </div>

                <ul className="space-y-2.5 mb-8">
                  {["PDF delivered to your email", "Read on any device", "Yours forever", "30-day money-back guarantee"].map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-xs text-[#444]">
                      <svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="#c9a84c" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>

                <CoursePayPalButton amount={course.price.toFixed(2)} courseId={course.id} courseName={course.title} />

                <p className="text-center text-xs text-[#2a2a2a] mt-4">
                  Questions?{" "}
                  <Link href="/contact" className="text-[#c9a84c] hover:underline">Contact us</Link>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Coaching upsell */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-24">
        <div className="border border-[#c9a84c]/15 bg-[#c9a84c]/4 p-10 sm:p-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#c9a84c] mb-2">Prefer personalised help?</p>
            <h2 className="font-black uppercase tracking-tight leading-none"
              style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(32px, 4vw, 52px)" }}>
              Book a 1-on-1 Coaching Call
            </h2>
          </div>
          <Link href="/booking"
            className="shrink-0 px-8 py-3.5 bg-[#c9a84c] text-black font-black text-xs uppercase tracking-[0.2em] hover:bg-[#f0d070] transition-colors whitespace-nowrap"
            style={{ fontFamily: "var(--font-barlow)" }}>
            Book a Session
          </Link>
        </div>
      </div>

    </div>
  );
}
