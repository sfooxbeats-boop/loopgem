"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/Animate";

// ─── REPLACE these with real screenshot image paths once you have them ───────
// Put your images in /public/proof/ and update src to e.g. "/proof/fiverr-sales.png"
const proofScreenshots = [
  { label: "Fiverr Sales Dashboard", src: null },
  { label: "Order Notifications",    src: null },
  { label: "Monthly Earnings",       src: null },
  { label: "5-Star Client Reviews",  src: null },
  { label: "Beatstars Revenue",      src: null },
  { label: "Payment History",        src: null },
];
// ─────────────────────────────────────────────────────────────────────────────

const testimonials = [
  { quote: "I bought the Fiverr Blueprint and landed my first order within 3 weeks. The gig setup advice alone was worth 10x the price.", author: "DeeMarkez", role: "Music Producer, Fiverr", metric: "First order in 3 weeks" },
  { quote: "The coaching call changed everything. Soufiane broke down exactly what I was doing wrong. I doubled my prices after that call.", author: "Jay Morrow", role: "Mixing Engineer", metric: "2× price increase" },
  { quote: "Went from 0 to $1,200/month on Fiverr in 2 months following the playbook. Step by step, no fluff.", author: "Kira Voss", role: "Beatmaker & Producer", metric: "$1,200/mo in 2 months" },
];

const courses = [
  { id: "c1", title: "Fiverr Beat Seller Blueprint", price: 27, originalPrice: 47, pages: 45, badge: "Best Seller" },
  { id: "c2", title: "Sell Music Services on Fiverr", price: 27, originalPrice: 47, pages: 40, badge: null },
  { id: "c3", title: "Full Freelance Music Producer Playbook", price: 47, originalPrice: 97, pages: 80, badge: "Best Value" },
];

export default function Home() {
  return (
    <div className="bg-[#080808] overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative pt-16 pb-0 overflow-hidden">
        {/* Subtle grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: "linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
          {/* Headline */}
          <motion.h1
            className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase leading-none tracking-tight mb-5"
            style={{ fontFamily: "var(--font-barlow)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Stop Giving Your<br />
            <span className="text-gold-gradient">Music Away for Free</span>
          </motion.h1>

          <motion.p
            className="max-w-xl mx-auto text-base text-[#666] leading-relaxed mb-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
          >
            Watch this short video to see exactly how I built a consistent income selling beats and music services online — and how you can do the same.
          </motion.p>
        </div>

        {/* ── VIDEO ── */}
        <motion.div
          className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Glow behind video */}
          <div className="absolute inset-0 bg-[#c9a84c]/8 blur-[80px] rounded-full pointer-events-none scale-75" />

          <div className="relative border border-[#c9a84c]/20 overflow-hidden shadow-[0_0_60px_rgba(201,168,76,0.08)]">
            {/* 16:9 ratio wrapper */}
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/7n5qK_hXs_U?rel=0&modestbranding=1"
                title="Sfooxbeats — How I Sell Beats & Music Services Online"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>

        {/* CTA directly below video */}
        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/courses"
              className="block px-10 py-4 font-black text-sm uppercase tracking-widest bg-[#c9a84c] text-black hover:bg-[#e5c97e] transition-colors"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Get the Course — From $27
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/booking"
              className="block px-10 py-4 font-black text-sm uppercase tracking-widest border border-white/10 text-white hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Book a 1-on-1 Call
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom fade into next section */}
        <div className="h-16 bg-gradient-to-b from-transparent to-[#050505] pointer-events-none" />
      </section>

      {/* ── STATS STRIP ── */}
      <section className="bg-[#050505] border-y border-white/5 py-10">
        <StaggerChildren className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center" staggerDelay={0.1}>
          {[
            { value: "200+", label: "Producers Coached" },
            { value: "4.9★", label: "Average Rating" },
            { value: "$27", label: "Starting Price" },
            { value: "30 days", label: "Avg. First Client" },
          ].map((s) => (
            <StaggerItem key={s.label}>
              <p className="text-4xl font-black text-gold-gradient mb-1" style={{ fontFamily: "var(--font-barlow)" }}>{s.value}</p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-[#444]">{s.label}</p>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>

      {/* ── PROOF — MY RESULTS ── */}
      <section className="py-24 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c9a84c] mb-3">Real Results</p>
            <h2
              className="text-5xl sm:text-6xl font-black uppercase tracking-tight mb-3"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              My Actual Sales &<br />Results
            </h2>
            <p className="text-[#555] text-sm max-w-md">
              These are real screenshots from my Fiverr, Beatstars, and PayPal accounts. No fabricated numbers.
            </p>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.08}>
            {proofScreenshots.map((shot, i) => (
              <StaggerItem key={i}>
                <motion.div
                  className="relative overflow-hidden border border-white/5 bg-[#0f0f0f] group"
                  whileHover={{ borderColor: "rgba(201,168,76,0.3)", y: -3 }}
                  transition={{ duration: 0.2 }}
                  style={{ aspectRatio: "16/10" }}
                >
                  {shot.src ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img src={shot.src} alt={shot.label} className="w-full h-full object-cover" />
                  ) : (
                    /* Placeholder — replace by setting shot.src above */
                    <div className="w-full h-full flex flex-col items-center justify-center gap-3 border-2 border-dashed border-white/5">
                      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#333" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 20.25h18A.75.75 0 0021.75 19.5v-15A.75.75 0 0021 3.75H3A.75.75 0 002.25 4.5v15a.75.75 0 00.75.75z" />
                      </svg>
                      <span className="text-[11px] text-[#333] uppercase tracking-widest">Screenshot coming</span>
                    </div>
                  )}
                  {/* Label overlay */}
                  <div className="absolute bottom-0 left-0 right-0 px-4 py-2.5 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <p className="text-xs font-bold text-white uppercase tracking-wider">{shot.label}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn delay={0.2} className="mt-8 text-center">
            <p className="text-xs text-[#333] uppercase tracking-widest">All results from real accounts · No guarantees implied</p>
          </FadeIn>
        </div>
      </section>

      {/* ── WHO THIS IS FOR ── */}
      <section className="py-24 bg-[#050505] border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c9a84c] mb-3">Is This You?</p>
            <h2 className="text-5xl sm:text-6xl font-black uppercase tracking-tight" style={{ fontFamily: "var(--font-barlow)" }}>
              This Is For You If…
            </h2>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-3" staggerDelay={0.08}>
            {[
              "You make beats but don't know how to sell them consistently",
              "You've tried Fiverr but got zero orders or bad results",
              "You're tired of giving music away cheap or for free",
              "You want to turn your skills into a real monthly income",
              "You don't know how to price your services or what to offer",
              "You want a mentor who's actually done it, not just theory",
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="flex items-start gap-3 bg-[#0f0f0f] border border-white/5 px-5 py-4">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth={2.5} className="shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-sm text-[#888]">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c9a84c] mb-3">Proof It Works</p>
            <h2 className="text-5xl sm:text-6xl font-black uppercase tracking-tight" style={{ fontFamily: "var(--font-barlow)" }}>Student Results</h2>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-5" staggerDelay={0.12}>
            {testimonials.map((t) => (
              <StaggerItem key={t.author}>
                <motion.div
                  className="bg-[#0f0f0f] border border-white/5 p-8 flex flex-col h-full"
                  whileHover={{ borderColor: "rgba(201,168,76,0.2)", y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} width="12" height="12" fill="#c9a84c" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-3xl font-black text-[#c9a84c] mb-3" style={{ fontFamily: "var(--font-barlow)" }}>{t.metric}</div>
                  <p className="text-sm text-[#666] leading-relaxed flex-1 mb-6">&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <p className="text-sm font-bold text-white">{t.author}</p>
                    <p className="text-xs text-[#333]">{t.role}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── COURSES ── */}
      <section className="py-24 bg-[#050505] border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c9a84c] mb-3">The System</p>
              <h2 className="text-5xl sm:text-6xl font-black uppercase tracking-tight" style={{ fontFamily: "var(--font-barlow)" }}>Get the Course</h2>
            </div>
            <Link href="/courses" className="shrink-0 text-xs font-bold uppercase tracking-widest text-[#c9a84c] hover:text-white border-b border-[#c9a84c]/30 hover:border-white pb-0.5 transition-colors">
              View All →
            </Link>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-5" staggerDelay={0.1}>
            {courses.map((c) => (
              <StaggerItem key={c.id}>
                <motion.div
                  className={`relative bg-[#0f0f0f] border flex flex-col p-7 h-full ${c.badge === "Best Seller" ? "border-[#c9a84c]/40" : "border-white/5"}`}
                  whileHover={{ borderColor: "rgba(201,168,76,0.35)", y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  {c.badge && (
                    <div className="absolute -top-3 left-5 px-3 py-0.5 bg-[#c9a84c] text-black text-[10px] font-black uppercase tracking-widest">{c.badge}</div>
                  )}
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#444] mb-3">{c.pages} pages · PDF</p>
                  <h3 className="text-xl font-black uppercase tracking-tight leading-tight mb-4 flex-1" style={{ fontFamily: "var(--font-barlow)" }}>{c.title}</h3>
                  <div className="flex items-baseline gap-2 mb-5">
                    <span className="text-3xl font-black" style={{ fontFamily: "var(--font-barlow)" }}>${c.price}</span>
                    <span className="text-sm text-[#333] line-through">${c.originalPrice}</span>
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link href="/courses" className="block text-center py-3 text-xs font-bold uppercase tracking-widest border border-[#c9a84c]/30 text-[#c9a84c] hover:bg-[#c9a84c] hover:text-black transition-colors duration-150">
                      Get This Course
                    </Link>
                  </motion.div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── COACHING CTA ── */}
      <section className="py-24 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="border border-[#c9a84c]/20 bg-[#c9a84c]/4 p-10 sm:p-14 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c9a84c] mb-4">Prefer Personalised Help?</p>
              <h2 className="text-5xl sm:text-6xl font-black uppercase tracking-tight mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
                Work With Me<br />1-on-1
              </h2>
              <p className="text-[#666] text-base max-w-lg mx-auto mb-8">
                Skip the guesswork. Book a direct video call and I&apos;ll build your entire sales strategy with you — tailored to your exact situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link href="/booking" className="block px-10 py-4 font-black text-sm uppercase tracking-widest bg-[#c9a84c] text-black hover:bg-[#e5c97e] transition-colors" style={{ fontFamily: "var(--font-barlow)" }}>
                    Book a Call — From $49.99
                  </Link>
                </motion.div>
              </div>
              <p className="text-xs text-[#333] mt-5">30 min · 60 min · Monthly mentorship available</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-32 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, #c9a84c07 0%, transparent 65%)" }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c9a84c] mb-4">Your Move</p>
            <h2 className="text-6xl sm:text-7xl font-black uppercase tracking-tight mb-6" style={{ fontFamily: "var(--font-barlow)" }}>
              Ready to Get<br />Paid for Your Music?
            </h2>
            <p className="text-[#555] text-lg mb-10 max-w-xl mx-auto">
              Everything you need is already in you. You just need the system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link href="/courses" className="block px-10 py-4 font-black text-sm uppercase tracking-widest bg-[#c9a84c] text-black hover:bg-[#e5c97e] transition-colors" style={{ fontFamily: "var(--font-barlow)" }}>
                  Get the Course — From $27
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link href="/booking" className="block px-10 py-4 font-black text-sm uppercase tracking-widest border border-white/10 text-white hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors" style={{ fontFamily: "var(--font-barlow)" }}>
                  Book a 1-on-1 Call
                </Link>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
