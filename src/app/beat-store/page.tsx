import BeatCard from "@/components/BeatCard";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beat Store — LoopGem",
  description: "Buy exclusive beats by Sfooxbeats. Every purchase includes MP3, WAV, stems, and an exclusive contract. $250 per beat.",
};

const beats = [
  {
    id: "b1",
    title: "Midnight Drip",
    genre: "Trap",
    bpm: 140,
    key: "C# min",
    tags: ["dark", "melodic", "808s"],
    waveHeights: [45,72,38,85,55,30,90,60,42,78,50,65,35,88,52,40,75,58,48,82,44,70,36,87,53,32,92,62,46,80,51,68,37,84,56,41,77,59,47,83],
  },
  {
    id: "b2",
    title: "Golden Hour",
    genre: "R&B / Soul",
    bpm: 88,
    key: "F maj",
    tags: ["smooth", "vibes", "guitar"],
    waveHeights: [60,45,80,35,70,50,88,40,75,55,62,48,83,38,72,52,90,44,68,58,64,46,85,36,74,54,92,42,76,56,61,49,84,37,73,53,91,43,77,57],
  },
  {
    id: "b3",
    title: "Wave Check",
    genre: "Drill",
    bpm: 145,
    key: "G min",
    tags: ["hard", "drill", "sample"],
    waveHeights: [80,55,90,40,70,60,85,45,75,50,82,58,92,38,72,62,88,48,78,52,84,56,94,36,74,64,86,44,76,54,81,59,91,39,71,63,87,47,79,53],
  },
  {
    id: "b4",
    title: "Neon City",
    genre: "Afrobeats",
    bpm: 105,
    key: "D maj",
    tags: ["afro", "dancehall", "percussive"],
    waveHeights: [50,70,40,80,60,45,85,55,75,35,52,72,42,82,62,47,87,57,77,37,54,74,44,84,64,49,89,59,79,39,56,76,46,86,66,51,91,61,81,41],
  },
  {
    id: "b5",
    title: "Smoke Signal",
    genre: "Hip-Hop",
    bpm: 92,
    key: "A min",
    tags: ["boom bap", "lofi", "sample"],
    waveHeights: [40,65,35,75,50,42,80,55,70,38,45,68,32,78,52,44,83,58,73,36,48,71,34,77,54,46,85,60,74,39,50,69,33,79,53,45,82,59,72,37],
  },
  {
    id: "b6",
    title: "Ivory Keys",
    genre: "Pop / R&B",
    bpm: 96,
    key: "E maj",
    tags: ["piano", "emotional", "pop"],
    waveHeights: [55,78,42,88,62,48,82,52,72,45,57,80,40,90,64,50,84,54,74,47,59,76,44,86,66,52,88,58,78,43,61,82,46,92,68,54,90,60,80,45],
  },
];

export default function BeatStore() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#c9a84c] mb-2">Sfooxbeats</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Beat <span className="text-gold-gradient">Store</span>
        </h1>
        <p className="text-[#a0a0a0] max-w-xl">
          Every beat is sold exclusively at <span className="text-[#c9a84c] font-semibold">$250</span>. One buyer, full rights. Once it&apos;s gone, it&apos;s yours alone.
        </p>
      </div>

      {/* What's included banner */}
      <div className="border border-[#c9a84c]/20 rounded-xl bg-[#c9a84c]/5 p-5 mb-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#c9a84c] mb-3">Every purchase includes</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { icon: "🎵", label: "MP3 (320kbps)" },
            { icon: "🎚️", label: "WAV (24-bit)" },
            { icon: "🎛️", label: "Individual Stems" },
            { icon: "📄", label: "Exclusive Contract PDF" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-sm text-[#ededed]">
              <span>{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-[#7a7a7a]">
          Your contract is generated automatically with your name, stage name, and address — downloaded instantly after payment. Beat is permanently removed from the store.
        </p>
      </div>

      {/* Beat grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {beats.map((beat) => (
          <BeatCard key={beat.id} beat={beat} />
        ))}
      </div>

      {/* Custom beat request */}
      <div id="custom" className="border border-[#2a2a2a] rounded-2xl bg-[#111111] p-10">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#c9a84c] mb-2">Custom Order</p>
          <h2 className="text-2xl font-bold mb-3">
            Need a Beat Made <span className="text-gold-gradient">Just for You?</span>
          </h2>
          <p className="text-[#a0a0a0] text-sm mb-6 leading-relaxed">
            Send your requirements — genre, mood, reference tracks, BPM preference, key — and Sfooxbeats will craft an exclusive beat from scratch for <span className="text-[#c9a84c] font-semibold">$250</span>. We&apos;ll get back to you within 24–48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact?subject=Custom+Beat+Request"
              className="px-6 py-3 rounded-md bg-[#c9a84c] text-[#0a0a0a] font-semibold text-sm hover:bg-[#e5c97e] transition-colors duration-150 text-center"
            >
              Request a Custom Beat
            </Link>
            <a
              href="mailto:Sfooxbeats@gmail.com?subject=Custom Beat Request"
              className="px-6 py-3 rounded-md border border-[#2a2a2a] text-[#a0a0a0] font-semibold text-sm hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors duration-150 text-center"
            >
              Email Directly
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
