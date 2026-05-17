import type { Metadata } from "next";
import PayPalButton from "@/components/PayPalButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Courses — LoopGem",
  description: "PDF guides on how to sell beats and music services on Fiverr and freelancing platforms. Real strategies from Sfooxbeats.",
};

const courses = [
  {
    id: "c1",
    title: "Fiverr Beat Seller Blueprint",
    tagline: "The complete guide to selling beats on Fiverr from zero to consistent orders",
    price: 27,
    originalPrice: 47,
    format: "PDF Guide",
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
    title: "Sell Music Services on Fiverr",
    tagline: "How to sell mixing, mastering, and production services as a freelancer",
    price: 27,
    originalPrice: 47,
    format: "PDF Guide",
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
    title: "The Full Freelance Music Producer Playbook",
    tagline: "Beats + services + kits — the complete freelancer guide across all platforms",
    price: 47,
    originalPrice: 97,
    format: "PDF Guide",
    pages: 80,
    chapters: 12,
    badge: "Best Value",
    highlight: false,
    description: "The complete playbook combining beat selling, music services, and drum kit sales across Fiverr, Beatstars, and beyond. Everything in one PDF.",
    whatYouLearn: [
      "Selling beats on Fiverr, Beatstars & your own site",
      "Offering mixing, mastering & production as services",
      "Selling drum kits & sound packs as digital products",
      "How to juggle multiple income streams as a producer",
      "Building a personal brand that attracts clients",
      "Social media strategy for Fiverr profile growth",
      "Contracts, licensing & protecting your work",
      "Going from side income to full-time producer",
    ],
    chapters_list: [
      "Chapter 1: Building Your Producer Business from Scratch",
      "Chapter 2: The Three Income Streams (Beats, Services, Products)",
      "Chapter 3: Fiverr Setup for All Three Streams",
      "Chapter 4: Beatstars & Other Beat Platforms",
      "Chapter 5: Selling Drum Kits & Sound Packs",
      "Chapter 6: Personal Brand & Online Presence",
      "Chapter 7: Social Media That Drives Sales",
      "Chapter 8: Pricing Everything You Offer",
      "Chapter 9: Closing Clients & Handling Orders",
      "Chapter 10: Contracts & Protecting Your Work",
      "Chapter 11: Scaling to Full-Time Income",
      "Chapter 12: Long-Term Growth & Automation",
    ],
  },
];

export default function Courses() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#c9a84c] mb-2">PDF Guides</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Producer <span className="text-gold-gradient">Courses</span>
        </h1>
        <p className="text-[#a0a0a0] max-w-2xl mx-auto">
          Step-by-step PDF guides on how to sell beats and music services on Fiverr and freelancing platforms — written by Sfooxbeats from real experience.
        </p>
      </div>

      {/* Format note */}
      <div className="flex flex-wrap justify-center gap-6 mb-14 text-xs text-[#7a7a7a]">
        {["PDF format — read anywhere", "Instant delivery after payment", "No expiry — yours forever", "Practical & straight to the point"].map((f) => (
          <div key={f} className="flex items-center gap-1.5">
            <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="#c9a84c" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            {f}
          </div>
        ))}
      </div>

      {/* Courses */}
      <div className="flex flex-col gap-10">
        {courses.map((course) => (
          <div
            key={course.id}
            className={`border rounded-2xl overflow-hidden ${course.highlight ? "border-[#c9a84c]" : "border-[#2a2a2a]"}`}
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
                  <span className="flex items-center gap-1.5 text-xs text-[#7a7a7a]">
                    <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                    {course.format} · {course.pages} pages · {course.chapters} chapters
                  </span>
                </div>

                <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
                <p className="text-[#a0a0a0] text-sm mb-5">{course.description}</p>

                {/* What you'll learn */}
                <h3 className="text-sm font-semibold mb-3 text-[#ededed]">What&apos;s inside</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {course.whatYouLearn.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-xs text-[#a0a0a0]">
                      <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="#c9a84c" strokeWidth={2} className="shrink-0 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Chapter list */}
                <details className="group">
                  <summary className="cursor-pointer text-xs font-semibold text-[#c9a84c] hover:text-[#e5c97e] transition-colors duration-150 list-none flex items-center gap-1">
                    <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="group-open:rotate-90 transition-transform duration-150">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    View all {course.chapters} chapters
                  </summary>
                  <ul className="mt-3 space-y-1.5 pl-4 border-l border-[#2a2a2a]">
                    {course.chapters_list.map((c) => (
                      <li key={c} className="text-xs text-[#7a7a7a]">{c}</li>
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
                    Save ${course.originalPrice - course.price}
                  </p>
                </div>

                <ul className="space-y-2 mb-6">
                  {["PDF delivered to your email", "Read on any device", "Yours forever — no expiry", "30-day money-back guarantee"].map((p) => (
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
                  description={`LoopGem PDF Course: ${course.title}`}
                  successMessage="Payment confirmed! Your PDF will be sent to your email within a few hours."
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
        <h2 className="text-xl font-bold mb-2">Want Personalised Help Instead?</h2>
        <p className="text-[#a0a0a0] text-sm mb-5">
          Book a 1-on-1 video call and get direct guidance on selling your beats and services as a freelancer.
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
