"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/Animate";
import Marquee from "@/components/Marquee";

const proofScreenshots = [
  { label: "Fiverr Sales Dashboard", src: null, tall: true },
  { label: "Order Notifications",    src: null, tall: false },
  { label: "Monthly Earnings",       src: null, tall: false },
  { label: "5-Star Client Reviews",  src: null, tall: true },
  { label: "Beatstars Revenue",      src: null, tall: false },
  { label: "Payment History",        src: null, tall: false },
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

function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="text-sm font-black text-[#c9a84c]" style={{ fontFamily: "var(--font-barlow)" }}>{n}</span>
      <div className="w-8 h-px bg-[#c9a84c]/30" />
      <span className="text-[10px] uppercase tracking-[0.25em] text-[#444]">{label}</span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-[#080808] overflow-x-hidden">

      {/* ── 01 HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden">
        {/* Atmospheric bg */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
          style={{ background: "radial-gradient(circle at 80% 20%, rgba(201,168,76,0.06) 0%, transparent 60%)" }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(circle at 20% 80%, rgba(201,168,76,0.03) 0%, transparent 60%)" }} />
        {/* Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.018]"
          style={{ backgroundImage: "linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <SectionLabel n="01" label="Watch This First" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-black uppercase leading-[0.88] tracking-tight mb-8"
            style={{
              fontFamily: "var(--font-barlow)",
              fontSize: "clamp(64px, 10.5vw, 148px)",
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            Stop Giving<br />
            Your Music<br />
            <em className="not-italic text-gold-gradient">Away for Free</em>
          </motion.h1>

          {/* Sub row */}
          <motion.div
            className="flex flex-col lg:flex-row items-start lg:items-end gap-8 lg:gap-16"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
          >
            <p className="text-[#555] text-base leading-relaxed max-w-sm">
              Watch the video below to see exactly how I built a consistent income selling beats and music services — and how you can do the same.
            </p>
            <div className="flex flex-wrap gap-3">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link href="/courses"
                  className="inline-block px-8 py-3.5 font-black text-xs uppercase tracking-[0.2em] bg-[#c9a84c] text-black hover:bg-[#f0d070] transition-colors"
                  style={{ fontFamily: "var(--font-barlow)" }}>
                  Get the Course
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link href="/booking"
                  className="inline-block px-8 py-3.5 font-black text-xs uppercase tracking-[0.2em] border border-white/10 text-[#888] hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors"
                  style={{ fontFamily: "var(--font-barlow)" }}>
                  Book a Call
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Floating stat accents */}
          <motion.div
            className="hidden lg:flex items-center gap-10 mt-16 pt-10 border-t border-white/[0.04]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {[["200+", "Producers coached"], ["4.9★", "Average rating"], ["$27", "Starting price"], ["30 days", "Avg. first client"]].map(([v, l]) => (
              <div key={l}>
                <p className="text-2xl font-black text-[#c9a84c]" style={{ fontFamily: "var(--font-barlow)" }}>{v}</p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#333] mt-0.5">{l}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── VIDEO ── */}
      <section className="relative pb-16">
        <motion.div
          className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Video glow */}
          <div className="absolute inset-x-0 top-0 h-full pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 65%)" }} />

          <div className="relative border border-[#c9a84c]/15 shadow-[0_32px_80px_rgba(0,0,0,0.6),0_0_60px_rgba(201,168,76,0.07)]">
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

          {/* CTA below video */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link href="/courses"
                className="block px-10 py-4 font-black text-sm uppercase tracking-widest bg-[#c9a84c] text-black hover:bg-[#f0d070] transition-colors"
                style={{ fontFamily: "var(--font-barlow)" }}>
                Get the Course — From $27
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link href="/booking"
                className="block px-10 py-4 font-black text-sm uppercase tracking-widest border border-white/8 text-[#666] hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors"
                style={{ fontFamily: "var(--font-barlow)" }}>
                Book a 1-on-1 Call
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Marquee />

      {/* ── 02 PROOF ── */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <FadeIn className="mb-14">
            <SectionLabel n="02" label="Real Results" />
            <h2 className="font-black uppercase leading-none tracking-tight mb-4"
              style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(48px, 7vw, 96px)" }}>
              My Actual Sales<br />&amp; Results
            </h2>
            <p className="text-[#444] text-sm max-w-sm">
              Real screenshots from my Fiverr, Beatstars, and PayPal accounts. No fabricated numbers.
            </p>
          </FadeIn>

          {/* Asymmetric mosaic grid */}
          <StaggerChildren className="grid grid-cols-2 lg:grid-cols-3 gap-3" staggerDelay={0.07}>
            {proofScreenshots.map((shot, i) => (
              <StaggerItem key={i}>
                <motion.div
                  className="relative overflow-hidden border border-white/[0.04] bg-[#0d0d0d] group"
                  style={{ aspectRatio: shot.tall ? "3/4" : "16/10" }}
                  whileHover={{ borderColor: "rgba(201,168,76,0.25)", scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  {shot.src ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={shot.src} alt={shot.label} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#222" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 20.25h18A.75.75 0 0021.75 19.5v-15A.75.75 0 0021 3.75H3A.75.75 0 002.25 4.5v15a.75.75 0 00.75.75z" />
                      </svg>
                      <span className="text-[10px] text-[#222] uppercase tracking-widest">Add screenshot</span>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-[11px] font-bold text-white uppercase tracking-wider">{shot.label}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn delay={0.3} className="mt-6">
            <p className="text-[10px] text-[#2a2a2a] uppercase tracking-[0.2em]">All results from real accounts · No guarantees implied</p>
          </FadeIn>
        </div>
      </section>

      <Marquee speed={50} />

      {/* ── 03 IS THIS YOU ── */}
      <section className="py-28 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <SectionLabel n="03" label="Qualification" />
              <h2 className="font-black uppercase leading-none tracking-tight"
                style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(48px, 6vw, 88px)" }}>
                This Is<br />For You<br />
                <span className="text-gold-gradient">If…</span>
              </h2>
            </FadeIn>

            <StaggerChildren className="space-y-0 pt-4" staggerDelay={0.07}>
              {[
                "You make beats but don't know how to sell them consistently",
                "You've tried Fiverr but got zero orders or bad results",
                "You're tired of giving music away cheap or for free",
                "You want to turn your skills into real monthly income",
                "You don't know how to price your services or what to offer",
                "You want a mentor who's actually done it — not just theory",
              ].map((item, i) => (
                <StaggerItem key={i}>
                  <div className="flex items-start gap-5 py-5 border-b border-white/[0.04] group">
                    <span className="text-xs font-black text-[#2a2a2a] mt-0.5 shrink-0 w-6"
                      style={{ fontFamily: "var(--font-barlow)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm text-[#666] leading-relaxed group-hover:text-[#999] transition-colors duration-200">{item}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* ── 04 TESTIMONIALS ── */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <FadeIn className="mb-16">
            <SectionLabel n="04" label="Proof It Works" />
            <h2 className="font-black uppercase leading-none tracking-tight"
              style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(48px, 7vw, 96px)" }}>
              Student Results
            </h2>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.03]" staggerDelay={0.1}>
            {testimonials.map((t) => (
              <StaggerItem key={t.author}>
                <motion.div
                  className="bg-[#080808] p-10 flex flex-col h-full hover:bg-[#0a0a0a] transition-colors duration-300"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Big metric */}
                  <p className="text-5xl font-black text-[#c9a84c] mb-6 leading-none"
                    style={{ fontFamily: "var(--font-barlow)" }}>
                    {t.metric}
                  </p>
                  {/* Big quote mark */}
                  <div className="text-7xl leading-none text-[#1a1a1a] font-black mb-2 select-none"
                    style={{ fontFamily: "var(--font-barlow)" }}>"</div>
                  <p className="text-[#555] text-sm leading-relaxed flex-1 mb-8">{t.quote}</p>
                  <div className="border-t border-white/[0.05] pt-5">
                    <p className="text-sm font-bold text-[#888]">{t.author}</p>
                    <p className="text-[11px] text-[#333] uppercase tracking-wider mt-0.5">{t.role}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── 05 COURSES ── */}
      <section className="py-28 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel n="05" label="The System" />
              <h2 className="font-black uppercase leading-none tracking-tight"
                style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(48px, 7vw, 96px)" }}>
                Get the Course
              </h2>
            </div>
            <Link href="/courses"
              className="shrink-0 text-[11px] font-black uppercase tracking-[0.2em] text-[#c9a84c] hover:text-white border-b border-[#c9a84c]/30 hover:border-white pb-0.5 transition-colors">
              View All →
            </Link>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.03]" staggerDelay={0.1}>
            {courses.map((c, i) => (
              <StaggerItem key={c.id}>
                <motion.div
                  className="relative bg-[#050505] p-8 flex flex-col h-full hover:bg-[#080808] transition-colors duration-300"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  {c.badge && (
                    <div className="absolute top-8 right-8 px-2.5 py-0.5 bg-[#c9a84c] text-black text-[9px] font-black uppercase tracking-widest">
                      {c.badge}
                    </div>
                  )}
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#2a2a2a] mb-4">
                    {String(i + 1).padStart(2, "0")} · {c.pages} pages
                  </p>
                  <h3 className="text-2xl font-black uppercase tracking-tight leading-tight mb-auto pb-8"
                    style={{ fontFamily: "var(--font-barlow)" }}>
                    {c.title}
                  </h3>
                  <div className="border-t border-white/[0.04] pt-6 flex items-end justify-between">
                    <div>
                      <span className="text-4xl font-black" style={{ fontFamily: "var(--font-barlow)" }}>${c.price}</span>
                      <span className="text-xs text-[#2a2a2a] line-through ml-2">${c.originalPrice}</span>
                    </div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                      <Link href="/courses"
                        className="text-[11px] font-black uppercase tracking-[0.18em] text-[#c9a84c] hover:text-white transition-colors">
                        Get It →
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── 06 COACHING ── */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <SectionLabel n="06" label="1-on-1 Sessions" />
              <h2 className="font-black uppercase leading-none tracking-tight mb-6"
                style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(48px, 6.5vw, 88px)" }}>
                Work With<br />Me Directly
              </h2>
              <p className="text-[#555] text-sm leading-relaxed max-w-sm mb-8">
                Skip the guesswork. Book a direct video call and I&apos;ll build your entire sales strategy with you — tailored to your exact situation.
              </p>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link href="/booking"
                  className="inline-block px-10 py-4 font-black text-sm uppercase tracking-widest bg-[#c9a84c] text-black hover:bg-[#f0d070] transition-colors"
                  style={{ fontFamily: "var(--font-barlow)" }}>
                  Book a Call — From $49.99
                </Link>
              </motion.div>
            </FadeIn>

            <StaggerChildren className="space-y-0" staggerDelay={0.1}>
              {[
                { name: "Starter Session", duration: "30 min", price: "$49.99" },
                { name: "Sales Strategy Call", duration: "60 min", price: "$89.99", featured: true },
                { name: "Freelancer Blueprint", duration: "4 × 60 min", price: "$299.99" },
              ].map((s) => (
                <StaggerItem key={s.name}>
                  <Link href="/booking">
                    <motion.div
                      className={`flex items-center justify-between py-6 px-6 border-b border-white/[0.04] group cursor-pointer ${s.featured ? "bg-[#c9a84c]/4" : ""}`}
                      whileHover={{ x: 6 }}
                      transition={{ duration: 0.15 }}
                    >
                      <div>
                        <p className={`text-base font-bold ${s.featured ? "text-white" : "text-[#666] group-hover:text-white"} transition-colors`}>
                          {s.name}
                          {s.featured && <span className="ml-3 text-[9px] bg-[#c9a84c] text-black px-2 py-0.5 font-black uppercase tracking-widest">Popular</span>}
                        </p>
                        <p className="text-[11px] text-[#333] uppercase tracking-wider mt-0.5">{s.duration}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-2xl font-black text-[#c9a84c]" style={{ fontFamily: "var(--font-barlow)" }}>{s.price}</span>
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#333" strokeWidth={2} className="group-hover:stroke-[#c9a84c] transition-colors">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </motion.div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      <Marquee speed={45} />

      {/* ── FINAL CTA ── */}
      <section className="py-36 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 60%)" }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 pointer-events-none opacity-[0.015]"
          style={{ backgroundImage: "linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <FadeIn>
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#c9a84c] mb-6">Your Move</p>
            <h2 className="font-black uppercase leading-[0.88] tracking-tight mb-10"
              style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(64px, 10vw, 140px)" }}>
              Ready to Get<br />
              <span className="text-gold-gradient">Paid for Your</span><br />
              Music?
            </h2>
            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link href="/courses"
                  className="block px-12 py-4 font-black text-sm uppercase tracking-widest bg-[#c9a84c] text-black hover:bg-[#f0d070] transition-colors"
                  style={{ fontFamily: "var(--font-barlow)" }}>
                  Get the Course — From $27
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link href="/booking"
                  className="block px-12 py-4 font-black text-sm uppercase tracking-widest border border-white/8 text-[#666] hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors"
                  style={{ fontFamily: "var(--font-barlow)" }}>
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
