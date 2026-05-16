import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Custom Beat — LoopGem",
  description: "Get a beat made from scratch by Sfooxbeats. $250 exclusive — MP3, WAV, stems, and an exclusive contract. Send your requirements and we'll get back to you.",
};

const whatsIncluded = [
  { icon: "🎵", title: "MP3 (320kbps)", desc: "High-quality MP3 for streaming and sharing." },
  { icon: "🎚️", title: "WAV (24-bit)", desc: "Uncompressed studio-quality file for recording." },
  { icon: "🎛️", title: "All Stems", desc: "Every individual track — 808, drums, melody, FX." },
  { icon: "📄", title: "Exclusive Contract PDF", desc: "Auto-generated with your name, stage name, and address. Legally binding." },
  { icon: "🔒", title: "Full Exclusive Rights", desc: "Beat is yours alone — removed from all platforms permanently." },
  { icon: "♾️", title: "Unlimited Commercial Use", desc: "Streams, sales, sync, radio, performances — no limits." },
];

const process = [
  { step: "01", title: "Send Your Requirements", desc: "Email Sfooxbeats@gmail.com with your genre, mood, BPM range, key preference, and reference tracks." },
  { step: "02", title: "Get a Response", desc: "Sfooxbeats reviews your request and confirms within 24–48 hours." },
  { step: "03", title: "Beat Is Built", desc: "Your beat is crafted from scratch based on your exact vision." },
  { step: "04", title: "Pay & Receive Files", desc: "Once the beat is ready, complete payment — MP3, WAV, stems, and your contract are delivered instantly." },
];

export default function CustomBeat() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-[#7a7a7a] mb-10">
        <Link href="/services" className="hover:text-[#c9a84c] transition-colors duration-150">Services</Link>
        <span>/</span>
        <span className="text-[#ededed]">Custom Beat</span>
      </div>

      {/* Header */}
      <div className="max-w-3xl mb-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#c9a84c] mb-2">Made From Scratch</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Custom <span className="text-gold-gradient">Beat</span>
        </h1>
        <p className="text-[#a0a0a0] text-lg leading-relaxed">
          No browsing through a store hoping something fits. Tell Sfooxbeats exactly what you need — genre, mood, tempo, references — and get a beat built specifically for you.
        </p>
      </div>

      {/* Price banner */}
      <div className="border border-[#c9a84c] rounded-2xl bg-[#111111] glow-gold p-8 mb-16 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-sm text-[#7a7a7a] mb-1">Flat exclusive price — no tiers, no upsells.</p>
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold text-gold-gradient">$250</span>
            <span className="text-[#7a7a7a] text-sm">/ beat</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {["MP3 + WAV + Stems", "Exclusive contract", "Full commercial rights", "Beat never resold"].map((tag) => (
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

      {/* What to include in your request */}
      <section className="border border-[#2a2a2a] rounded-2xl bg-[#111111] p-10 mb-16">
        <h2 className="text-xl font-bold mb-6">What to Include in Your <span className="text-gold-gradient">Request</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: "Genre", example: "e.g. Trap, R&B, Afrobeats, Drill, Hip-Hop" },
            { label: "Mood / Vibe", example: "e.g. dark, emotional, aggressive, smooth, bouncy" },
            { label: "BPM Range", example: "e.g. 140–150 BPM, or 'slow'" },
            { label: "Key Preference", example: "e.g. C minor, F major, or 'no preference'" },
            { label: "Reference Tracks", example: "Songs that have the energy or feel you're going for" },
            { label: "Any Specific Sounds", example: "e.g. guitar, piano, 808 heavy, melodic, sample-based" },
          ].map((item) => (
            <div key={item.label} className="border border-[#2a2a2a] rounded-lg p-4">
              <p className="text-sm font-semibold text-[#ededed] mb-0.5">{item.label}</p>
              <p className="text-xs text-[#7a7a7a]">{item.example}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="border border-[#c9a84c]/20 rounded-2xl bg-[#c9a84c]/5 p-10 text-center">
        <h2 className="text-2xl font-bold mb-3">
          Ready to Start? <span className="text-gold-gradient">Send Your Request.</span>
        </h2>
        <p className="text-[#a0a0a0] text-sm mb-8 max-w-md mx-auto">
          Email Sfooxbeats directly with your requirements. We&apos;ll confirm within 24–48 hours and get to work.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:Sfooxbeats@gmail.com?subject=Custom Beat Request"
            className="px-8 py-3.5 rounded-md bg-[#c9a84c] text-[#0a0a0a] font-semibold hover:bg-[#e5c97e] transition-colors duration-150"
          >
            Email Your Requirements
          </a>
          <Link
            href="/contact?subject=Custom Beat Request"
            className="px-8 py-3.5 rounded-md border border-[#2a2a2a] text-[#ededed] font-semibold hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors duration-150"
          >
            Use the Contact Form
          </Link>
        </div>
        <p className="text-xs text-[#7a7a7a] mt-6">
          Payment is collected after the beat is built and you&apos;re happy with it.
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
