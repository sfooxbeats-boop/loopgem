import Link from "next/link";

const services = [
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
      </svg>
    ),
    title: "Custom Beats",
    desc: "Trap, drill, R&B, Afrobeats — exclusive and non-exclusive licenses available.",
    href: "/beat-store",
    cta: "Browse Beats",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
    title: "Mixing & Mastering",
    desc: "Radio-ready sound. Professional mixing and mastering that brings your vision to life.",
    href: "/services",
    cta: "View Packages",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
      </svg>
    ),
    title: "Custom Drum Kits",
    desc: "Hand-crafted sample packs and drum kits built for modern production.",
    href: "/drum-kits",
    cta: "Shop Kits",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: "Producer Courses",
    desc: "Learn how to make money as a music producer — from zero to full-time income.",
    href: "/courses",
    cta: "Enroll Now",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "1-on-1 Coaching",
    desc: "Private video call sessions — get direct feedback, mentorship, and strategy.",
    href: "/booking",
    cta: "Book a Session",
  },
];

const stats = [
  { value: "500+", label: "Beats Sold" },
  { value: "200+", label: "Clients Served" },
  { value: "50+", label: "Artists Worked With" },
  { value: "5★", label: "Average Rating" },
];

const testimonials = [
  {
    quote: "LoopGem completely transformed my sound. The mixing quality is insane for the price.",
    author: "Jay Morrow",
    role: "Independent Artist",
  },
  {
    quote: "I bought the producer course and made back the investment in my first month. Game changer.",
    author: "DeeMarkez",
    role: "Music Producer",
  },
  {
    quote: "The drum kit had exactly the punchy 808s I was looking for. Will be buying again.",
    author: "Kira Voss",
    role: "Beatmaker",
  },
];

const featuredBeats = [
  { title: "Midnight Drip", genre: "Trap", bpm: 140, price: "$29.99" },
  { title: "Golden Hour", genre: "R&B / Soul", bpm: 88, price: "$24.99" },
  { title: "Wave Check", genre: "Drill", bpm: 145, price: "$34.99" },
];

// Deterministic bar heights to avoid hydration mismatch
const waveHeights = [
  45, 72, 38, 85, 55, 30, 90, 60, 42, 78,
  50, 65, 35, 88, 52, 40, 75, 58, 48, 82,
  44, 70, 36, 87, 53, 32, 92, 62, 46, 80,
  51, 68, 37, 84, 56, 41, 77, 59, 47, 83,
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[88vh] flex items-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c9a84c]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#c9a84c]/4 rounded-full blur-3xl" />
        </div>
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#c9a84c]/30 bg-[#c9a84c]/5 text-[#c9a84c] text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
            Premium Music Production Services
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
            Your Sound.{" "}
            <span className="text-gold-gradient">Elevated.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-[#a0a0a0] leading-relaxed mb-10">
            Custom beats, professional mixing &amp; mastering, exclusive drum kits, and real producer education — everything you need to build your music career.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/beat-store"
              className="px-8 py-3.5 rounded-md bg-[#c9a84c] text-[#0a0a0a] font-semibold text-base hover:bg-[#e5c97e] transition-colors duration-150"
            >
              Browse Beats
            </Link>
            <Link
              href="/services"
              className="px-8 py-3.5 rounded-md border border-[#2a2a2a] text-[#ededed] font-semibold text-base hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors duration-150"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-[#2a2a2a] bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-gold-gradient">{s.value}</p>
                <p className="text-sm text-[#7a7a7a] mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything You Need to{" "}
              <span className="text-gold-gradient">Level Up</span>
            </h2>
            <p className="text-[#a0a0a0] max-w-xl mx-auto">
              From buying your first beat to launching a full-time music career — LoopGem has you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="card-hover border border-[#2a2a2a] rounded-xl bg-[#111111] p-6 flex flex-col"
              >
                <div className="w-12 h-12 rounded-lg bg-[#c9a84c]/10 text-[#c9a84c] flex items-center justify-center mb-4">
                  {s.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-[#7a7a7a] leading-relaxed flex-1">{s.desc}</p>
                <Link
                  href={s.href}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[#c9a84c] hover:text-[#e5c97e] transition-colors duration-150"
                >
                  {s.cta}
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured beats teaser */}
      <section className="py-20 bg-[#111111] border-y border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-1">
                <span className="text-gold-gradient">Featured</span> Beats
              </h2>
              <p className="text-sm text-[#7a7a7a]">Handpicked from the store — ready to license today.</p>
            </div>
            <Link
              href="/beat-store"
              className="shrink-0 px-5 py-2.5 border border-[#c9a84c] text-[#c9a84c] rounded-md text-sm font-semibold hover:bg-[#c9a84c] hover:text-[#0a0a0a] transition-colors duration-150"
            >
              View All Beats
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredBeats.map((beat) => (
              <div
                key={beat.title}
                className="card-hover border border-[#2a2a2a] rounded-xl bg-[#161616] p-5"
              >
                <div className="h-14 flex items-end gap-0.5 mb-4">
                  {waveHeights.map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-[#c9a84c]/30 rounded-sm"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-semibold text-sm">{beat.title}</p>
                    <p className="text-xs text-[#7a7a7a] mt-0.5">
                      {beat.genre} · {beat.bpm} BPM
                    </p>
                  </div>
                  <span className="text-[#c9a84c] font-bold text-sm shrink-0">{beat.price}</span>
                </div>
                <Link
                  href="/beat-store"
                  className="mt-4 w-full block text-center py-2 rounded-md border border-[#2a2a2a] text-xs font-medium text-[#a0a0a0] hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors duration-150"
                >
                  License This Beat
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What <span className="text-gold-gradient">Artists Say</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="border border-[#2a2a2a] rounded-xl bg-[#111111] p-6"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="14" height="14" fill="#c9a84c" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-[#a0a0a0] leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="text-sm font-semibold">{t.author}</p>
                  <p className="text-xs text-[#7a7a7a]">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="py-20 bg-[#111111] border-t border-[#2a2a2a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Start?{" "}
            <span className="text-gold-gradient">Let&apos;s Build.</span>
          </h2>
          <p className="text-[#a0a0a0] mb-8 text-lg">
            Book a 1-on-1 call, grab a beat, or enroll in the course — your next level is one click away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="px-8 py-3.5 rounded-md bg-[#c9a84c] text-[#0a0a0a] font-semibold hover:bg-[#e5c97e] transition-colors duration-150"
            >
              Book a Call
            </Link>
            <Link
              href="/courses"
              className="px-8 py-3.5 rounded-md border border-[#2a2a2a] text-[#ededed] font-semibold hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors duration-150"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
