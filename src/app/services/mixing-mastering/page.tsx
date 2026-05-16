import type { Metadata } from "next";
import Link from "next/link";
import PayPalButton from "@/components/PayPalButton";

export const metadata: Metadata = {
  title: "Mixing & Mastering — LoopGem",
  description: "Professional mixing and mastering by Sfooxbeats. $500 flat — unlimited stems, unlimited revisions, streaming-ready master.",
};

const deliverables = [
  { icon: "🎤", title: "Clean & Powerful Vocal Mixing", desc: "Every vocal layer balanced, de-essed, and sitting perfectly in the mix." },
  { icon: "🎚️", title: "Professional EQ & Compression", desc: "Frequency carving and dynamic control for a punchy, polished sound." },
  { icon: "🌊", title: "Reverb, Delay & Vocal Effects", desc: "Space and depth added tastefully — never muddy, always intentional." },
  { icon: "⚖️", title: "Beat & Vocal Balance", desc: "Instrumentals and vocals blended so every element hits the right level." },
  { icon: "✨", title: "Stereo Enhancement & Clarity", desc: "Width and presence that translates on headphones, speakers, and earbuds." },
  { icon: "📡", title: "Streaming-Ready Mastering", desc: "Mastered to -14 LUFS for Spotify, Apple Music, and YouTube — no clipping, full loudness." },
];

const process = [
  { step: "01", title: "Pay & Send Files", desc: "Complete payment and email your stems and vocals to Sfooxbeats@gmail.com." },
  { step: "02", title: "Mix & Master", desc: "Full mix and master completed — every element treated and balanced." },
  { step: "03", title: "Review", desc: "Receive the file. Request unlimited revisions until it's exactly right." },
  { step: "04", title: "Final Delivery", desc: "Get your streaming-ready WAV + MP3 — ready to upload anywhere." },
];

export default function MixingMastering() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-[#7a7a7a] mb-10">
        <Link href="/services" className="hover:text-[#c9a84c] transition-colors duration-150">Services</Link>
        <span>/</span>
        <span className="text-[#ededed]">Mixing & Mastering</span>
      </div>

      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#c9a84c] mb-2">Professional Audio</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Mixing &amp; <span className="text-gold-gradient">Mastering</span>
        </h1>
        <p className="text-[#a0a0a0] max-w-2xl mx-auto text-lg">
          One service. One price. Everything done — from raw stems to a streaming-ready master.
        </p>
      </div>

      {/* Main card */}
      <div className="border border-[#c9a84c] rounded-2xl bg-[#111111] glow-gold overflow-hidden mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-10 border-b lg:border-b-0 lg:border-r border-[#2a2a2a]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-semibold mb-6">
              Full Service — Everything Included
            </div>
            <h2 className="text-2xl font-bold mb-2">Mix &amp; Master Package</h2>
            <p className="text-[#7a7a7a] text-sm mb-8">
              Send your stems. Get back a professional, radio-ready record — balanced, polished, and mastered for every streaming platform.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {deliverables.map((d) => (
                <div key={d.title} className="flex items-start gap-3">
                  <span className="text-xl shrink-0 mt-0.5">{d.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-[#ededed]">{d.title}</p>
                    <p className="text-xs text-[#7a7a7a] mt-0.5 leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {["Unlimited stems", "Unlimited revisions", "WAV + MP3 delivery", "Turnaround: 3–5 days"].map((tag) => (
                <span key={tag} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#2a2a2a] text-xs text-[#a0a0a0]">
                  <svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="#c9a84c" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="p-10 flex flex-col justify-center bg-[#0f0f0f]">
            <div className="text-center mb-8">
              <p className="text-sm text-[#7a7a7a] mb-1">One flat rate. No hidden fees.</p>
              <span className="text-6xl font-bold text-gold-gradient">$500</span>
              <p className="text-xs text-[#7a7a7a] mt-2">per song</p>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                "Full mix — vocals, beats, all layers",
                "Streaming master (Spotify, Apple Music, YouTube)",
                "Unlimited revisions — until you love it",
                "Unlimited stems — no track count limit",
                "WAV (24-bit) + MP3 (320kbps) delivered",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm text-[#a0a0a0]">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#c9a84c" strokeWidth={2} className="shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {p}
                </li>
              ))}
            </ul>
            <PayPalButton
              amount="500.00"
              description="LoopGem — Mix & Master Package (1 song)"
              successMessage="Payment confirmed! Email your stems to Sfooxbeats@gmail.com and we'll get started."
            />
            <p className="text-center text-xs text-[#7a7a7a] mt-4">
              After payment, send files to{" "}
              <a href="mailto:Sfooxbeats@gmail.com" className="text-[#c9a84c] hover:underline">Sfooxbeats@gmail.com</a>
            </p>
          </div>
        </div>
      </div>

      {/* Process */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-center mb-12">How It <span className="text-gold-gradient">Works</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((s) => (
            <div key={s.step} className="border border-[#2a2a2a] rounded-xl bg-[#111111] p-6 text-center">
              <div className="text-4xl font-bold text-gold-gradient mb-3">{s.step}</div>
              <h3 className="font-semibold text-sm mb-2">{s.title}</h3>
              <p className="text-xs text-[#7a7a7a] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What to send */}
      <section className="border border-[#2a2a2a] rounded-2xl bg-[#111111] p-10 mb-20">
        <h2 className="text-xl font-bold mb-6">What to <span className="text-gold-gradient">Send</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <p className="text-sm font-semibold mb-3 text-[#ededed]">Required</p>
            <ul className="space-y-2">
              {["All vocal tracks (lead + adlibs + harmonies)", "The beat file or individual beat stems", "Any reference track you want to match", "Notes on what vibe / sound you're going for"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[#a0a0a0]">
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#c9a84c" strokeWidth={2} className="shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold mb-3 text-[#ededed]">Preferred format</p>
            <ul className="space-y-2">
              {["WAV or AIFF files (no MP3 exports for stems)", "Files exported at the same sample rate / BPM", "Labeled clearly (e.g. Lead_Vocal.wav, 808.wav)", "Sent via Google Drive, WeTransfer, or Dropbox"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[#a0a0a0]">
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#c9a84c" strokeWidth={2} className="shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Common <span className="text-gold-gradient">Questions</span></h2>
        <div className="space-y-3">
          {[
            { q: "How many revisions do I get?", a: "Unlimited. We go back and forth until you're 100% happy with the result. No extra charges." },
            { q: "How many stems can I send?", a: "Unlimited — send everything. Drums, bass, synths, vocals, adlibs, layers — all of it." },
            { q: "What platforms will it be mastered for?", a: "Spotify, Apple Music, YouTube, and Tidal. The master will hit -14 LUFS with no clipping and full dynamic range." },
            { q: "How do I send my files after paying?", a: "Email Sfooxbeats@gmail.com with a Google Drive, WeTransfer, or Dropbox link right after payment." },
            { q: "What's the turnaround time?", a: "Typically 3–5 business days for the first version. Revisions are turned around within 24–48 hours." },
          ].map((faq) => (
            <details key={faq.q} className="group border border-[#2a2a2a] rounded-xl bg-[#111111] overflow-hidden">
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none text-sm font-semibold">
                {faq.q}
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="group-open:rotate-180 transition-transform duration-200 shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-6 pb-5 text-sm text-[#a0a0a0] border-t border-[#2a2a2a] pt-4">{faq.a}</div>
            </details>
          ))}
        </div>
      </section>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/services" className="px-6 py-3 rounded-md border border-[#2a2a2a] text-[#a0a0a0] font-semibold text-sm hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors duration-150 text-center">
          ← Back to Services
        </Link>
        <Link href="/contact" className="px-6 py-3 rounded-md border border-[#c9a84c] text-[#c9a84c] font-semibold text-sm hover:bg-[#c9a84c] hover:text-[#0a0a0a] transition-colors duration-150 text-center">
          Have a Question?
        </Link>
      </div>
    </div>
  );
}
