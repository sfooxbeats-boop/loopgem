import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Custom Drum Kit / Sound Kit — LoopGem",
  description: "Get a custom drum kit or sound pack built around your exact sound by Sfooxbeats. 24-bit WAV, royalty-free, any genre.",
};

const whatsIncluded = [
  { icon: "🥁", title: "Custom 808s", desc: "Tuned, layered 808s designed to your preference and genre." },
  { icon: "💥", title: "Snares & Claps", desc: "Crisp, punchy snares and claps — layered and processed." },
  { icon: "🎩", title: "Hi-hats & Cymbals", desc: "Open hats, closed hats, rides — all the pattern elements you need." },
  { icon: "🔊", title: "Kicks", desc: "Sub-heavy, punchy, or soft kicks depending on your style." },
  { icon: "🎶", title: "Percs & Extras", desc: "Shakers, congas, woodblocks, and any genre-specific percussion." },
  { icon: "🎛️", title: "Up to 300 Sounds", desc: "Studio-quality 24-bit WAV files ready to drop into any DAW. Royalty-free forever." },
];

const process = [
  { step: "01", title: "Send Your Requirements", desc: "Email Sfooxbeats with your genre, vibe, reference kits, and any specific sounds you need." },
  { step: "02", title: "Confirmation", desc: "Sfooxbeats reviews and confirms the order within 24–48 hours." },
  { step: "03", title: "Kit Is Built", desc: "Every sample is crafted and processed from scratch to match your sound." },
  { step: "04", title: "Pay & Download", desc: "Pay once the kit is ready — files delivered via download link instantly." },
];

export default function CustomDrumKit() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-[#7a7a7a] mb-10">
        <Link href="/services" className="hover:text-[#c9a84c] transition-colors duration-150">Services</Link>
        <span>/</span>
        <span className="text-[#ededed]">Custom Drum Kit / Sound Kit</span>
      </div>

      {/* Header */}
      <div className="max-w-3xl mb-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#c9a84c] mb-2">Built for Your Sound</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Custom Drum Kit <span className="text-gold-gradient">/ Sound Kit</span>
        </h1>
        <p className="text-[#a0a0a0] text-lg leading-relaxed">
          Stop scrolling through packs that almost work. Get a kit built exactly around your genre, your vibe, and your production style — by Sfooxbeats.
        </p>
      </div>

      {/* Price banner */}
      <div className="border border-[#c9a84c] rounded-2xl bg-[#111111] glow-gold p-8 mb-16 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-sm text-[#7a7a7a] mb-1">Flat rate. No royalties. Yours forever.</p>
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold text-gold-gradient">$250</span>
            <span className="text-[#7a7a7a] text-sm">/ kit</span>
          </div>
          <p className="text-xs text-[#c9a84c] mt-1">Up to 300 sounds included</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {["Up to 300 sounds", "24-bit WAV", "Royalty-free", "Any genre"].map((tag) => (
            <span key={tag} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#2a2a2a] text-xs text-[#a0a0a0]">
              <svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="#c9a84c" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* What's included */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">What&apos;s <span className="text-gold-gradient">Included</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whatsIncluded.map((item) => (
            <div key={item.title} className="border border-[#2a2a2a] rounded-xl bg-[#111111] p-5 flex items-start gap-4">
              <span className="text-2xl shrink-0">{item.icon}</span>
              <div>
                <p className="font-semibold text-sm">{item.title}</p>
                <p className="text-xs text-[#7a7a7a] mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">How It <span className="text-gold-gradient">Works</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((s) => (
            <div key={s.step} className="border border-[#2a2a2a] rounded-xl bg-[#111111] p-6">
              <div className="text-3xl font-bold text-gold-gradient mb-3">{s.step}</div>
              <h3 className="font-semibold text-sm mb-2">{s.title}</h3>
              <p className="text-xs text-[#7a7a7a] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What to include in request */}
      <section className="border border-[#2a2a2a] rounded-2xl bg-[#111111] p-10 mb-16">
        <h2 className="text-xl font-bold mb-6">What to Include in Your <span className="text-gold-gradient">Request</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: "Genre", example: "e.g. Trap, UK Drill, Afrobeats, R&B, Hip-Hop, Amapiano" },
            { label: "Vibe / Feel", example: "e.g. dark & hard, smooth, bouncy, lo-fi, cinematic" },
            { label: "Reference Kits or Artists", example: "Producers or songs whose drum sound you want to match" },
            { label: "Specific Sounds Needed", example: "e.g. 808 heavy, no 808s, include choir hits, want vinyl crackle" },
            { label: "Number of Sounds", example: "Up to 300 sounds included — let us know if you want fewer" },
            { label: "Anything Else", example: "Tuning preferences, key, any other notes" },
          ].map((item) => (
            <div key={item.label} className="border border-[#2a2a2a] rounded-lg p-4">
              <p className="text-sm font-semibold text-[#ededed] mb-0.5">{item.label}</p>
              <p className="text-xs text-[#7a7a7a]">{item.example}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pre-made kits */}
      <section className="border border-[#2a2a2a] rounded-2xl bg-[#111111] p-8 mb-16 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-bold mb-1">Prefer a ready-made kit?</h3>
          <p className="text-sm text-[#7a7a7a]">Browse the Drum Kits store for pre-built packs available for instant download.</p>
        </div>
        <Link
          href="/drum-kits"
          className="shrink-0 px-5 py-2.5 rounded-md border border-[#c9a84c] text-[#c9a84c] text-sm font-semibold hover:bg-[#c9a84c] hover:text-[#0a0a0a] transition-colors duration-150"
        >
          Browse Drum Kits
        </Link>
      </section>

      {/* CTA */}
      <div className="border border-[#c9a84c]/20 rounded-2xl bg-[#c9a84c]/5 p-10 text-center">
        <h2 className="text-2xl font-bold mb-3">
          Let&apos;s Build Your <span className="text-gold-gradient">Kit.</span>
        </h2>
        <p className="text-[#a0a0a0] text-sm mb-8 max-w-md mx-auto">
          Email Sfooxbeats with your requirements and we&apos;ll confirm and get started within 24–48 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:Sfooxbeats@gmail.com?subject=Custom Drum Kit Request"
            className="px-8 py-3.5 rounded-md bg-[#c9a84c] text-[#0a0a0a] font-semibold hover:bg-[#e5c97e] transition-colors duration-150"
          >
            Email Your Requirements
          </a>
          <Link
            href="/contact?subject=Custom Drum Kit Request"
            className="px-8 py-3.5 rounded-md border border-[#2a2a2a] text-[#ededed] font-semibold hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors duration-150"
          >
            Use the Contact Form
          </Link>
        </div>
        <p className="text-xs text-[#7a7a7a] mt-6">
          Payment is collected after the kit is built and you&apos;re satisfied with it.
        </p>
      </div>

      <div className="mt-10 text-center">
        <Link href="/services" className="text-sm text-[#7a7a7a] hover:text-[#c9a84c] transition-colors duration-150">
          ← Back to Services
        </Link>
      </div>
    </div>
  );
}
