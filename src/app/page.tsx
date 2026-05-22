"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/Animate";
import Marquee from "@/components/Marquee";

// ─── Replace src with real paths once screenshots are ready ───────────────────
const proofScreenshots = [
  { label: "Fiverr Sales Dashboard", src: null },
  { label: "Order Notifications",    src: null },
  { label: "Monthly Earnings",       src: null },
  { label: "5-Star Client Reviews",  src: null },
  { label: "Beatstars Revenue",      src: null },
  { label: "Payment History",        src: null },
];
// ─────────────────────────────────────────────────────────────────────────────

const problems = [
  {
    icon: "🎵",
    title: "Your Fiverr profile is set up but gets zero orders",
    desc: "You've filled everything in but clients scroll straight past you. You don't know why.",
  },
  {
    icon: "💸",
    title: "You're giving your music away too cheap — or for free",
    desc: "Artists lowball you and you say yes because you don't have a better option yet.",
  },
  {
    icon: "🔍",
    title: "No clients for mixing or production services",
    desc: "You know you're good but you can't figure out how to get people to pay you for it.",
  },
  {
    icon: "📱",
    title: "You don't know what to post or how to market yourself",
    desc: "You post here and there but nothing converts. No strategy, no consistency, no results.",
  },
];

const testimonials = [
  { quote: "I bought the Fiverr Blueprint and landed my first order within 3 weeks. The gig setup advice alone was worth 10x the price.", author: "DeeMarkez", role: "Music Producer · Fiverr", metric: "First order in 3 weeks" },
  { quote: "The coaching call changed everything. Soufiane broke down exactly what I was doing wrong. I doubled my prices after that call.", author: "Jay Morrow", role: "Mixing Engineer", metric: "2× price increase" },
  { quote: "Went from 0 to $1,200/month on Fiverr in 2 months following the playbook. Step by step, no fluff.", author: "Kira Voss", role: "Beatmaker & Producer", metric: "$1,200/mo in 2 months" },
];

const courses = [
  { id: "c1", title: "Fiverr Beat Seller Blueprint", price: 27, originalPrice: 47, pages: 45, badge: "Best Seller" },
  { id: "c2", title: "Sell Music Services on Fiverr", price: 27, originalPrice: 47, pages: 40, badge: null },
  { id: "c3", title: "Full Freelance Music Producer Playbook", price: 47, originalPrice: 97, pages: 80, badge: "Best Value" },
];

const platforms = ["Fiverr", "Beatstars", "PayPal", "Instagram", "YouTube", "Gumroad"];

export default function Home() {
  return (
    <div className="bg-black overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-0 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 60%)" }} />

        <div className="relative max-w-4xl mx-auto px-6 sm:px-10 w-full text-center">
          {/* Social proof pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/8 bg-white/4 text-[11px] text-[#888] uppercase tracking-widest mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
            200+ Producers Already Inside
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-black uppercase leading-[0.9] tracking-tight mb-6 text-white"
            style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(56px, 9vw, 120px)" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Stop Giving Your<br />
            Music Away<br />
            <span className="text-gold-gradient">For Free</span>
          </motion.h1>

          <motion.p
            className="text-[#666] text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
          >
            Learn the exact system I used to build a consistent income selling beats and music services — through step-by-step courses and 1-on-1 coaching.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
          >
            <Link href="/courses" className="btn-gold">
              Get the Course — From $27 →
            </Link>
            <Link href="/booking" className="btn-outline">
              Book a 1-on-1 Call
            </Link>
          </motion.div>

          {/* Platform logos row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#333] mr-2">Sell on</span>
            {platforms.map((p) => (
              <span key={p} className="text-[12px] font-bold text-[#333] uppercase tracking-wider hover:text-[#c9a84c] transition-colors cursor-default">
                {p}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="h-20 bg-gradient-to-b from-transparent to-black pointer-events-none mt-16" />
      </section>

      {/* ── VIDEO ── */}
      <section className="pb-16">
        <motion.div
          className="max-w-4xl mx-auto px-6 sm:px-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative border border-[#c9a84c]/12 rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.8),0_0_80px_rgba(201,168,76,0.06)]">
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

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link href="/courses" className="btn-gold">
              Get the Course — From $27 →
            </Link>
            <Link href="/booking" className="btn-outline">
              Book a 1-on-1 Call
            </Link>
          </div>
        </motion.div>
      </section>

      <Marquee />

      {/* ── PROBLEM SECTION ("Tu te reconnais dans ces blocages?") ── */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <FadeIn className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#c9a84c] font-bold mb-4">Le Problème · The Problem</p>
            <h2 className="font-black uppercase leading-[0.9] tracking-tight text-white"
              style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(40px, 6vw, 80px)" }}>
              Do You Recognize<br />
              <span className="text-gold-gradient">Yourself in These?</span>
            </h2>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={0.1}>
            {problems.map((p) => (
              <StaggerItem key={p.title}>
                <motion.div
                  className="rounded-2xl bg-[#0a0a0a] border border-white/5 p-6 flex items-start gap-4 h-full"
                  whileHover={{ borderColor: "rgba(201,168,76,0.2)", y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center text-lg shrink-0">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1.5 leading-snug">{p.title}</h3>
                    <p className="text-xs text-[#555] leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── SOLUTION ── */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <FadeIn>
            <div className="rounded-3xl border border-[#c9a84c]/15 bg-[#c9a84c]/4 p-12 sm:p-16 text-center">
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#c9a84c] font-bold mb-4">La Solution · The Solution</p>
              <h2 className="font-black uppercase leading-[0.9] tracking-tight text-white mb-6"
                style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(36px, 5.5vw, 72px)" }}>
                LoopGem Fixes<br />All of This.<br />
                <span className="text-gold-gradient">A to Z.</span>
              </h2>
              <p className="text-[#666] text-sm max-w-md mx-auto mb-10 leading-relaxed">
                I&apos;ve been exactly where you are. Zero clients, zero confidence, zero system. I built the exact roadmap that took me from that to a consistent income — and I packaged it into courses and coaching so you can shortcut the process.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/courses" className="btn-gold">
                  View the Courses →
                </Link>
                <Link href="/booking" className="btn-outline">
                  Book a Call
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Marquee speed={50} />

      {/* ── PROOF — REAL RESULTS ── */}
      <section className="py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <FadeIn className="text-center mb-14">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#c9a84c] font-bold mb-4">Proof · Real Numbers</p>
            <h2 className="font-black uppercase leading-[0.9] tracking-tight text-white"
              style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(40px, 6vw, 80px)" }}>
              My Actual Sales<br />&amp; Results
            </h2>
            <p className="text-[#444] text-sm mt-4">Real screenshots · No fabricated numbers</p>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-2 lg:grid-cols-3 gap-3" staggerDelay={0.07}>
            {proofScreenshots.map((shot, i) => (
              <StaggerItem key={i}>
                <motion.div
                  className="relative overflow-hidden rounded-xl border border-white/[0.04] bg-[#0a0a0a] group"
                  style={{ aspectRatio: i % 3 === 0 ? "3/4" : "16/10" }}
                  whileHover={{ borderColor: "rgba(201,168,76,0.2)", scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  {shot.src ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={shot.src} alt={shot.label} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#1e1e1e" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 20.25h18A.75.75 0 0021.75 19.5v-15A.75.75 0 0021 3.75H3A.75.75 0 002.25 4.5v15a.75.75 0 00.75.75z" />
                      </svg>
                      <span className="text-[10px] text-[#1e1e1e] uppercase tracking-widest">Add screenshot</span>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-b-xl">
                    <p className="text-[11px] font-bold text-white uppercase tracking-wider">{shot.label}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-y border-white/[0.04] bg-[#050505] py-12">
        <StaggerChildren className="max-w-4xl mx-auto px-6 sm:px-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center" staggerDelay={0.1}>
          {[
            { value: "200+", label: "Producers Coached" },
            { value: "4.9★", label: "Average Rating" },
            { value: "$27", label: "Starting Price" },
            { value: "30 days", label: "Avg. First Client" },
          ].map((s) => (
            <StaggerItem key={s.label}>
              <p className="text-4xl font-black text-gold-gradient mb-1" style={{ fontFamily: "var(--font-barlow)" }}>{s.value}</p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-[#333]">{s.label}</p>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <FadeIn className="text-center mb-14">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#c9a84c] font-bold mb-4">Proof It Works</p>
            <h2 className="font-black uppercase leading-[0.9] tracking-tight text-white"
              style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(40px, 6vw, 80px)" }}>
              Student Results
            </h2>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-5" staggerDelay={0.12}>
            {testimonials.map((t) => (
              <StaggerItem key={t.author}>
                <motion.div
                  className="rounded-2xl bg-[#0a0a0a] border border-white/5 p-8 flex flex-col h-full"
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
                  <p className="text-4xl font-black text-[#c9a84c] mb-3" style={{ fontFamily: "var(--font-barlow)" }}>{t.metric}</p>
                  <p className="text-sm text-[#555] leading-relaxed flex-1 mb-6">&ldquo;{t.quote}&rdquo;</p>
                  <div className="border-t border-white/[0.04] pt-4">
                    <p className="text-sm font-bold text-[#888]">{t.author}</p>
                    <p className="text-[11px] text-[#333] uppercase tracking-wider mt-0.5">{t.role}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── COURSES ── */}
      <section className="py-28 bg-[#050505]">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <FadeIn className="text-center mb-14">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#c9a84c] font-bold mb-4">What&apos;s Included</p>
            <h2 className="font-black uppercase leading-[0.9] tracking-tight text-white"
              style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(40px, 6vw, 80px)" }}>
              The Courses
            </h2>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10" staggerDelay={0.1}>
            {courses.map((c) => (
              <StaggerItem key={c.id}>
                <motion.div
                  className={`relative rounded-2xl bg-[#0a0a0a] border flex flex-col p-7 h-full ${c.badge === "Best Seller" ? "border-[#c9a84c]/30" : "border-white/5"}`}
                  whileHover={{ borderColor: "rgba(201,168,76,0.3)", y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  {c.badge && (
                    <div className="absolute -top-3 left-5 px-3 py-0.5 rounded-full bg-[#c9a84c] text-black text-[10px] font-black uppercase tracking-widest">{c.badge}</div>
                  )}
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#333] mb-3">{c.pages} pages · PDF</p>
                  <h3 className="text-xl font-black uppercase tracking-tight leading-tight mb-4 flex-1 text-white"
                    style={{ fontFamily: "var(--font-barlow)" }}>{c.title}</h3>
                  <div className="flex items-baseline gap-2 mb-5">
                    <span className="text-3xl font-black text-white" style={{ fontFamily: "var(--font-barlow)" }}>${c.price}</span>
                    <span className="text-sm text-[#333] line-through">${c.originalPrice}</span>
                  </div>
                  <Link href="/courses" className="btn-gold text-sm">
                    Get This Course →
                  </Link>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── COACHING ── */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <FadeIn>
            <div className="rounded-3xl border border-[#c9a84c]/15 bg-[#c9a84c]/3 p-12 sm:p-16 text-center">
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#c9a84c] font-bold mb-4">1-on-1 Coaching</p>
              <h2 className="font-black uppercase leading-[0.9] tracking-tight text-white mb-6"
                style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(36px, 5.5vw, 72px)" }}>
                Work With Me<br />
                <span className="text-gold-gradient">Directly</span>
              </h2>
              <p className="text-[#666] text-sm max-w-md mx-auto mb-8 leading-relaxed">
                Book a direct video call and I&apos;ll build your entire sales strategy with you — tailored to your situation, your niche, your level.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                {[["30 min", "$49.99"], ["60 min", "$89.99"], ["4×60 min", "$299.99"]].map(([d, p]) => (
                  <div key={d} className="rounded-2xl border border-white/8 bg-black px-6 py-4 text-center">
                    <p className="text-lg font-black text-white" style={{ fontFamily: "var(--font-barlow)" }}>{p}</p>
                    <p className="text-[11px] text-[#444] uppercase tracking-wider">{d}</p>
                  </div>
                ))}
              </div>
              <Link href="/booking" className="btn-gold">
                Book a Session →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Marquee speed={45} />

      {/* ── FINAL CTA ── */}
      <section className="py-36 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(201,168,76,0.07) 0%, transparent 65%)" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative max-w-3xl mx-auto px-6 sm:px-10 text-center">
          <FadeIn>
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#c9a84c] font-bold mb-6">Your Move</p>
            <h2 className="font-black uppercase leading-[0.88] tracking-tight text-white mb-6"
              style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(56px, 9vw, 120px)" }}>
              Ready to Get<br />
              <span className="text-gold-gradient">Paid for Your</span><br />
              Music?
            </h2>
            <p className="text-[#555] text-base mb-10 max-w-lg mx-auto">
              Everything you need is already in you. You just need the system.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/courses" className="btn-gold">
                Get the Course — From $27 →
              </Link>
              <Link href="/booking" className="btn-outline">
                Book a 1-on-1 Call
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
