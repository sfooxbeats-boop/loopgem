import type { Metadata } from "next";
import PayPalButton from "@/components/PayPalButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Drum Kits — LoopGem",
  description: "Custom drum kits and sample packs handcrafted for modern music production. Trap, R&B, Drill, and more.",
};

const kits = [
  {
    id: "k1",
    name: "808 Warfare",
    genre: "Trap / Drill",
    price: 19.99,
    samples: 120,
    categories: ["808s", "Hi-hats", "Snares", "Kicks", "Perc"],
    description: "Hard-hitting 808s, crisp snares, and layered hi-hats built for modern trap and drill production.",
    badge: "Best Seller",
    highlight: true,
    previewSounds: ["808 slides", "Layered snares", "Stuttered hi-hats", "Sub kicks"],
  },
  {
    id: "k2",
    name: "Soul Bounce",
    genre: "R&B / Neo Soul",
    price: 14.99,
    samples: 85,
    categories: ["Kicks", "Snares", "Claps", "Rides", "Shakers"],
    description: "Warm, soulful drums inspired by classic R&B, neo-soul, and lo-fi. Perfect for emotional records.",
    badge: null,
    highlight: false,
    previewSounds: ["Vinyl kicks", "Room snares", "Jazz rides", "Tambourines"],
  },
  {
    id: "k3",
    name: "Afro Heat",
    genre: "Afrobeats / Dancehall",
    price: 17.99,
    samples: 100,
    categories: ["Congas", "Shakers", "Kicks", "Snares", "Atmos"],
    description: "Percussive energy straight from the culture — designed for Afrobeats, Amapiano, and dancehall producers.",
    badge: "New",
    highlight: false,
    previewSounds: ["Conga rolls", "Amapiano log drum hits", "Afro shakers", "Dance kicks"],
  },
  {
    id: "k4",
    name: "UK Pressure",
    genre: "UK Drill / Grime",
    price: 17.99,
    samples: 95,
    categories: ["Dark 808s", "Snares", "Hi-hats", "Fx", "Transitions"],
    description: "Dark, gritty, and aggressive. Tailored for UK drill and grime with menacing sub bass and crisp percussion.",
    badge: null,
    highlight: false,
    previewSounds: ["Dark 808 sub hits", "Grime snare snaps", "Drill hat rolls", "Impact FX"],
  },
  {
    id: "k5",
    name: "Cinematic Sessions",
    genre: "Score / Cinematic",
    price: 24.99,
    samples: 140,
    categories: ["Orchestral perc", "Impacts", "Risers", "Booms", "Sweeps"],
    description: "Orchestral-style drums, cinematic impacts, and tension-building FX for score, lo-fi, and epic productions.",
    badge: "Premium",
    highlight: false,
    previewSounds: ["Taiko hits", "Orchestral snare rolls", "Cinematic booms", "Rise FX"],
  },
  {
    id: "k6",
    name: "The Mega Bundle",
    genre: "All Genres",
    price: 59.99,
    samples: 540,
    categories: ["All kits above", "Bonus FX pack", "MIDI patterns", "Mixer presets"],
    description: "All 5 kits + exclusive bonus content — the complete LoopGem drum library at a massive discount.",
    badge: "Save 40%",
    highlight: true,
    previewSounds: ["Everything in all 5 kits", "60 bonus FX", "25 MIDI patterns"],
  },
];

export default function DrumKits() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#c9a84c] mb-2">Sample Packs</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Drum <span className="text-gold-gradient">Kits</span>
        </h1>
        <p className="text-[#a0a0a0] max-w-2xl mx-auto">
          Handcrafted kits built for modern production. 24-bit WAV files, royalty-free, instant download after purchase.
        </p>
      </div>

      {/* Included note */}
      <div className="flex flex-wrap justify-center gap-6 mb-12 text-xs text-[#7a7a7a]">
        {["24-bit WAV files", "Royalty-free forever", "Instant download", "Works in any DAW"].map((f) => (
          <div key={f} className="flex items-center gap-1.5">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#c9a84c" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            {f}
          </div>
        ))}
      </div>

      {/* Kit grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {kits.map((kit) => (
          <div
            key={kit.id}
            className={`relative flex flex-col rounded-xl border p-6 card-hover ${
              kit.highlight ? "border-[#c9a84c]" : "border-[#2a2a2a]"
            } bg-[#111111]`}
          >
            {kit.badge && (
              <div
                className={`absolute -top-3 left-5 px-2.5 py-0.5 rounded-full text-xs font-bold ${
                  kit.highlight
                    ? "bg-[#c9a84c] text-[#0a0a0a]"
                    : "bg-[#1e1e1e] text-[#c9a84c] border border-[#c9a84c]/40"
                }`}
              >
                {kit.badge}
              </div>
            )}

            {/* Visual icon */}
            <div className="w-full h-24 bg-[#161616] rounded-lg mb-5 flex items-center justify-center border border-[#2a2a2a]">
              <div className="flex items-end gap-1 h-12">
                {[60, 80, 45, 90, 70, 50, 85, 65, 75, 55].map((h, i) => (
                  <div
                    key={i}
                    className="w-2 rounded-sm bg-[#c9a84c]/40"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            <div className="mb-2 flex items-start justify-between gap-2">
              <div>
                <h2 className="text-base font-bold">{kit.name}</h2>
                <p className="text-xs text-[#c9a84c] font-medium">{kit.genre}</p>
              </div>
              <span className="text-[#ededed] font-bold text-sm shrink-0">${kit.price.toFixed(2)}</span>
            </div>

            <p className="text-xs text-[#7a7a7a] leading-relaxed mb-4">{kit.description}</p>

            {/* Categories */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {kit.categories.map((c) => (
                <span
                  key={c}
                  className="px-2 py-0.5 rounded text-[10px] bg-[#1e1e1e] text-[#7a7a7a] border border-[#2a2a2a]"
                >
                  {c}
                </span>
              ))}
            </div>

            <p className="text-xs text-[#a0a0a0] mb-4">
              <span className="text-[#c9a84c] font-semibold">{kit.samples}</span> samples included
            </p>

            <div className="mt-auto">
              <PayPalButton
                amount={kit.price.toFixed(2)}
                description={`LoopGem Drum Kit: ${kit.name}`}
                successMessage={`Download link for "${kit.name}" will be sent to your email.`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Custom kit request */}
      <div className="mt-14 border border-[#c9a84c]/20 rounded-xl bg-[#c9a84c]/5 p-8 text-center">
        <h2 className="text-xl font-bold mb-2">Need a Custom Kit?</h2>
        <p className="text-[#a0a0a0] text-sm mb-5">
          Want a kit built to your exact sound? We create custom sample packs on request.
        </p>
        <Link
          href="/contact"
          className="inline-block px-6 py-3 rounded-md bg-[#c9a84c] text-[#0a0a0a] font-semibold text-sm hover:bg-[#e5c97e] transition-colors duration-150"
        >
          Request a Custom Kit
        </Link>
      </div>
    </div>
  );
}
