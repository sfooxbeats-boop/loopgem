import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — LoopGem",
  description: "Mixing & mastering, custom beats, and custom drum kits by Sfooxbeats. Click a service to see full details and pricing.",
};

const services = [
  {
    href: "/services/mixing-mastering",
    icon: "🎚️",
    title: "Mixing & Mastering",
    price: "$500",
    unit: "per song",
    tagline: "From raw stems to a streaming-ready master.",
    highlights: [
      "Clean & powerful vocal mixing",
      "Professional EQ & compression",
      "Reverb, delay & vocal effects",
      "Beat & vocal balance",
      "Stereo enhancement & clarity",
      "Streaming-ready master (Spotify, Apple Music, YouTube)",
      "Unlimited stems · Unlimited revisions",
    ],
    badge: null,
  },
  {
    href: "/services/custom-beat",
    icon: "🎵",
    title: "Custom Beat",
    price: "$250",
    unit: "exclusive",
    tagline: "A beat made from scratch, built around your vision.",
    highlights: [
      "You send your requirements & references",
      "Sfooxbeats builds the beat from scratch",
      "MP3 + WAV + all stems delivered",
      "Exclusive contract PDF generated",
      "Beat is yours alone — never resold",
      "Response within 24–48 hours",
    ],
    badge: "Most Requested",
  },
  {
    href: "/services/custom-drum-kit",
    icon: "🥁",
    title: "Custom Drum Kit / Sound Kit",
    price: "$250",
    unit: "up to 300 sounds",
    tagline: "A bespoke sample pack built around your sound.",
    highlights: [
      "Tell us your genre, style & references",
      "Custom 808s, snares, hi-hats, kicks & percs",
      "24-bit WAV files — royalty-free",
      "Works in any DAW",
      "Up to 300 sounds delivered",
      "Response within 48–72 hours",
    ],
    badge: null,
  },
];

export default function ServicesHub() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#c9a84c] mb-2">Sfooxbeats</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          What We <span className="text-gold-gradient">Offer</span>
        </h1>
        <p className="text-[#a0a0a0] max-w-xl mx-auto">
          Three services. Click any card to see full details, pricing, and checkout.
        </p>
      </div>

      {/* Service cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="relative group flex flex-col border border-[#2a2a2a] hover:border-[#c9a84c] rounded-2xl bg-[#111111] p-7 transition-all duration-200 hover:shadow-[0_0_24px_rgba(201,168,76,0.1)] hover:-translate-y-1"
          >
            {s.badge && (
              <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-[#c9a84c] text-[#0a0a0a] text-xs font-bold">
                {s.badge}
              </div>
            )}

            {/* Icon */}
            <div className="text-4xl mb-5">{s.icon}</div>

            {/* Title + price */}
            <div className="flex items-start justify-between gap-2 mb-2">
              <h2 className="text-xl font-bold leading-tight">{s.title}</h2>
              <div className="text-right shrink-0">
                <p className="text-[#c9a84c] font-bold text-lg leading-none">{s.price}</p>
                <p className="text-[#7a7a7a] text-[10px] mt-0.5">{s.unit}</p>
              </div>
            </div>

            <p className="text-sm text-[#7a7a7a] mb-5">{s.tagline}</p>

            {/* Highlights */}
            <ul className="space-y-2 flex-1 mb-6">
              {s.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-xs text-[#a0a0a0]">
                  <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="#c9a84c" strokeWidth={2.5} className="shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {h}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex items-center gap-1.5 text-sm font-semibold text-[#c9a84c] group-hover:text-[#e5c97e] transition-colors duration-150">
              View Details
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="group-hover:translate-x-1 transition-transform duration-150">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom note */}
      <div className="mt-16 text-center">
        <p className="text-sm text-[#7a7a7a] mb-4">
          Not sure which service you need?
        </p>
        <Link
          href="/contact"
          className="inline-block px-6 py-3 rounded-md border border-[#2a2a2a] text-[#a0a0a0] font-semibold text-sm hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors duration-150"
        >
          Ask Sfooxbeats
        </Link>
      </div>
    </div>
  );
}
