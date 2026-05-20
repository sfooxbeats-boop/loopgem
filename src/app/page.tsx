"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, StaggerChildren, StaggerItem, ScaleIn } from "@/components/Animate";

const stats = [
  { value: "200+", label: "Producers Coached" },
  { value: "4.9★", label: "Average Rating" },
  { value: "$27", label: "Starting Price" },
  { value: "3", label: "PDF Courses" },
];

const benefits = [
  {
    title: "Proven Strategies",
    desc: "Every method is battle-tested — pulled from real experience selling beats and music services on Fiverr, Beatstars, and beyond.",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Step-by-Step Systems",
    desc: "No vague advice. You get exact steps — how to set up your profile, what to write, how to price, and how to close clients.",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
      </svg>
    ),
  },
  {
    title: "Direct Access",
    desc: "Book a 1-on-1 call and get personal guidance from Sfooxbeats — someone actively doing this, not just teaching theory.",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
];

const steps = [
  { n: "01", title: "Choose Your Path", desc: "Start with a PDF course to learn at your own pace, or jump into a 1-on-1 coaching call for personalised guidance." },
  { n: "02", title: "Learn the System", desc: "Follow the exact methods used to land consistent clients and sales on Fiverr, Beatstars, and direct outreach." },
  { n: "03", title: "Start Getting Paid", desc: "Apply what you learned and start landing orders. Most students get their first client within 30 days." },
];

const courses = [
  { id: "c1", title: "Fiverr Beat Seller Blueprint", desc: "Set up, rank, and get your first paying clients on Fiverr — even with zero reviews.", price: 27, originalPrice: 47, pages: 45, badge: "Best Seller", highlight: true },
  { id: "c2", title: "Sell Music Services on Fiverr", desc: "Build a Fiverr business around mixing, mastering, and production. Turn buyers into repeat clients.", price: 27, originalPrice: 47, pages: 40, badge: null, highlight: false },
  { id: "c3", title: "Full Freelance Music Producer Playbook", desc: "The complete guide — beats, services, products — across all platforms. Everything in one PDF.", price: 47, originalPrice: 97, pages: 80, badge: "Best Value", highlight: false },
];

const sessions = [
  { name: "Starter Session", duration: "30 min", price: 49.99, desc: "A clear roadmap for producers who haven't made their first sale yet.", highlight: false },
  { name: "Sales Strategy Call", duration: "60 min", price: 89.99, desc: "Full breakdown of your setup, gaps, pricing, and a step-by-step action plan.", highlight: true },
  { name: "Freelancer Blueprint", duration: "4 × 60 min", price: 299.99, desc: "A full month of weekly calls. Build your entire freelance music business.", highlight: false },
];

const testimonials = [
  { quote: "I bought the Fiverr Blueprint and landed my first order within 3 weeks. The gig setup advice alone was worth 10x the price.", author: "DeeMarkez", role: "Music Producer, Fiverr", metric: "First order in 3 weeks" },
  { quote: "The coaching call changed everything. Soufiane broke down exactly what I was doing wrong. I doubled my prices after that call.", author: "Jay Morrow", role: "Mixing Engineer", metric: "2× price increase" },
  { quote: "Went from 0 to $1,200/month on Fiverr in 2 months following the playbook. Step by step, no fluff.", author: "Kira Voss", role: "Beatmaker & Producer", metric: "$1,200/mo in 2 months" },
];

const faqs = [
  { q: "Do I need experience to start?", a: "No. The courses and the Starter Session are designed for producers at any level — even if you've never made a single sale online." },
  { q: "Are the courses PDFs or videos?", a: "All courses are detailed PDF guides you can read on any device, at your own pace. No login, no subscription — yours forever after purchase." },
  { q: "What do the coaching calls cover?", a: "Selling beats on Fiverr and Beatstars, pricing your services, getting clients through DMs and social media, setting up your profile, and building recurring income." },
  { q: "How are coaching sessions delivered?", a: "Via Zoom or Google Meet. After payment, you'll receive a scheduling link within 24 hours to pick a time that works for you." },
  { q: "Is there a refund policy?", a: "PDF courses come with a 30-day money-back guarantee. Coaching sessions are refundable if cancelled at least 24 hours before the scheduled time." },
];

export default function Home() {
  return (
    <div className="bg-[#080808] overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-[95vh] flex items-center border-b border-white/5 overflow-hidden">
        {/* Animated background orb */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, #c9a84c08 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.022]" style={{ backgroundImage: "linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-36 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#c9a84c]/25 bg-[#c9a84c]/5 text-[#c9a84c] text-xs font-bold uppercase tracking-[0.15em] mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
            For Music Producers
          </motion.div>

          <motion.h1
            className="text-6xl sm:text-8xl lg:text-[108px] font-black uppercase leading-none tracking-tight mb-6"
            style={{ fontFamily: "var(--font-barlow)" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Turn Your Music<br />
            <span className="text-gold-gradient">Into a Business</span>
          </motion.h1>

          <motion.p
            className="max-w-2xl mx-auto text-lg text-[#666] leading-relaxed mb-10"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Learn to sell beats, attract clients, and build a consistent income as a music producer — through PDF courses and 1-on-1 coaching from someone actually doing it.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.38 }}
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link href="/courses" className="block px-8 py-4 font-bold text-sm uppercase tracking-widest bg-[#c9a84c] text-black hover:bg-[#e5c97e] transition-colors duration-150" style={{ fontFamily: "var(--font-barlow)" }}>
                Browse Courses
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link href="/booking" className="block px-8 py-4 font-bold text-sm uppercase tracking-widest border border-white/15 text-white hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors duration-150" style={{ fontFamily: "var(--font-barlow)" }}>
                Book a 1-on-1 Call
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-3 text-sm text-[#444]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            <div className="flex -space-x-1.5">
              {["#c9a84c", "#a07830", "#d4a852", "#8a6420"].map((c, i) => (
                <div key={i} className="w-7 h-7 rounded-full border-2 border-[#080808] flex items-center justify-center text-[9px] font-bold" style={{ background: c, color: "#000" }}>
                  {["D", "J", "K", "M"][i]}
                </div>
              ))}
            </div>
            <span><span className="text-white font-semibold">200+ producers</span> already enrolled</span>
            <span className="text-[#c9a84c]">★★★★★</span>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
      </section>

      {/* ── STATS ── */}
      <section className="border-b border-white/5 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center" staggerDelay={0.1}>
            {stats.map((s) => (
              <StaggerItem key={s.label}>
                <p className="text-4xl font-black text-gold-gradient mb-1" style={{ fontFamily: "var(--font-barlow)" }}>{s.value}</p>
                <p className="text-xs uppercase tracking-[0.15em] text-[#444]">{s.label}</p>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── INSTRUCTOR QUOTE ── */}
      <section className="border-b border-white/5 py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <motion.div
              className="border-l-2 border-[#c9a84c] pl-8"
              whileInView={{ borderLeftColor: ["#c9a84c44", "#c9a84c"] }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-2xl sm:text-3xl font-medium text-white leading-relaxed mb-6">
                &ldquo;I built my music business from zero on Fiverr. Now I teach other producers the exact systems I used — so they don&apos;t have to spend years figuring it out alone.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/40 flex items-center justify-center text-[#c9a84c] font-black text-sm" style={{ fontFamily: "var(--font-barlow)" }}>S</div>
                <div>
                  <p className="text-sm font-bold text-white">Soufiane Remdane</p>
                  <p className="text-xs text-[#444]">Sfooxbeats · Music Producer & Coach</p>
                </div>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="border-b border-white/5 py-24 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c9a84c] mb-3">Why LoopGem</p>
            <h2 className="text-5xl sm:text-6xl font-black uppercase tracking-tight" style={{ fontFamily: "var(--font-barlow)" }}>What Makes This Different</h2>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-5" staggerDelay={0.12}>
            {benefits.map((b) => (
              <StaggerItem key={b.title}>
                <motion.div
                  className="bg-[#0f0f0f] border border-white/5 p-8 h-full"
                  whileHover={{ borderColor: "rgba(201,168,76,0.25)", y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] mb-5">{b.icon}</div>
                  <h3 className="text-xl font-black uppercase tracking-tight mb-3" style={{ fontFamily: "var(--font-barlow)" }}>{b.title}</h3>
                  <p className="text-sm text-[#555] leading-relaxed">{b.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="border-b border-white/5 py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c9a84c] mb-3">The Process</p>
            <h2 className="text-5xl sm:text-6xl font-black uppercase tracking-tight" style={{ fontFamily: "var(--font-barlow)" }}>How It Works</h2>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-10" staggerDelay={0.15}>
            {steps.map((s) => (
              <StaggerItem key={s.n}>
                <div className="relative">
                  <motion.div
                    className="text-8xl font-black leading-none mb-4 select-none"
                    style={{ fontFamily: "var(--font-barlow)", color: "#c9a84c" }}
                    initial={{ opacity: 0.06 }}
                    whileInView={{ opacity: 0.12 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    {s.n}
                  </motion.div>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-3" style={{ fontFamily: "var(--font-barlow)" }}>{s.title}</h3>
                  <p className="text-sm text-[#555] leading-relaxed">{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── COURSES ── */}
      <section className="border-b border-white/5 py-24 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c9a84c] mb-3">PDF Guides</p>
              <h2 className="text-5xl sm:text-6xl font-black uppercase tracking-tight" style={{ fontFamily: "var(--font-barlow)" }}>Courses</h2>
            </div>
            <Link href="/courses" className="shrink-0 text-xs font-bold uppercase tracking-widest text-[#c9a84c] hover:text-white border-b border-[#c9a84c]/30 hover:border-white pb-0.5 transition-colors">
              View All →
            </Link>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-5" staggerDelay={0.1}>
            {courses.map((c) => (
              <StaggerItem key={c.id}>
                <motion.div
                  className={`relative bg-[#0f0f0f] border flex flex-col p-7 h-full ${c.highlight ? "border-[#c9a84c]/40" : "border-white/5"}`}
                  whileHover={{ borderColor: "rgba(201,168,76,0.35)", y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  {c.badge && (
                    <div className="absolute -top-3 left-5 px-3 py-0.5 bg-[#c9a84c] text-black text-[10px] font-black uppercase tracking-widest">{c.badge}</div>
                  )}
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#444] mb-3">{c.pages} pages · PDF</p>
                  <h3 className="text-xl font-black uppercase tracking-tight leading-tight mb-3 flex-1" style={{ fontFamily: "var(--font-barlow)" }}>{c.title}</h3>
                  <p className="text-sm text-[#555] leading-relaxed mb-6">{c.desc}</p>
                  <div className="flex items-baseline gap-2 mb-5">
                    <span className="text-3xl font-black" style={{ fontFamily: "var(--font-barlow)" }}>${c.price}</span>
                    <span className="text-sm text-[#333] line-through">${c.originalPrice}</span>
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link href="/courses" className="block text-center py-3 text-xs font-bold uppercase tracking-widest border border-[#c9a84c]/30 text-[#c9a84c] hover:bg-[#c9a84c] hover:text-black hover:border-[#c9a84c] transition-colors duration-150">
                      Get This Course
                    </Link>
                  </motion.div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── COACHING ── */}
      <section className="border-b border-white/5 py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c9a84c] mb-3">1-on-1 Sessions</p>
              <h2 className="text-5xl sm:text-6xl font-black uppercase tracking-tight" style={{ fontFamily: "var(--font-barlow)" }}>Coaching Calls</h2>
            </div>
            <Link href="/booking" className="shrink-0 text-xs font-bold uppercase tracking-widest text-[#c9a84c] hover:text-white border-b border-[#c9a84c]/30 hover:border-white pb-0.5 transition-colors">
              Book a Session →
            </Link>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-5" staggerDelay={0.12}>
            {sessions.map((s) => (
              <StaggerItem key={s.name}>
                <motion.div
                  className={`relative flex flex-col p-7 border h-full ${s.highlight ? "border-[#c9a84c]/50 bg-[#c9a84c]/5" : "border-white/5 bg-[#0f0f0f]"}`}
                  whileHover={{ y: -5, borderColor: s.highlight ? "rgba(201,168,76,0.7)" : "rgba(201,168,76,0.25)" }}
                  transition={{ duration: 0.2 }}
                >
                  {s.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-[#c9a84c] text-black text-[10px] font-black uppercase tracking-widest whitespace-nowrap">Most Popular</div>
                  )}
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#c9a84c] mb-2">{s.duration}</p>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-3" style={{ fontFamily: "var(--font-barlow)" }}>{s.name}</h3>
                  <p className="text-sm text-[#555] leading-relaxed flex-1 mb-6">{s.desc}</p>
                  <p className="text-4xl font-black mb-6" style={{ fontFamily: "var(--font-barlow)" }}>${s.price.toFixed(2)}</p>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link href="/booking" className={`block text-center py-3 text-xs font-bold uppercase tracking-widest transition-colors duration-150 ${s.highlight ? "bg-[#c9a84c] text-black hover:bg-[#e5c97e]" : "border border-white/10 text-white hover:border-[#c9a84c] hover:text-[#c9a84c]"}`}>
                      Book Now
                    </Link>
                  </motion.div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="border-b border-white/5 py-24 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c9a84c] mb-3">Results</p>
            <h2 className="text-5xl sm:text-6xl font-black uppercase tracking-tight" style={{ fontFamily: "var(--font-barlow)" }}>Student Stories</h2>
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

      {/* ── FAQ ── */}
      <section className="border-b border-white/5 py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c9a84c] mb-3">Questions</p>
            <h2 className="text-5xl sm:text-6xl font-black uppercase tracking-tight" style={{ fontFamily: "var(--font-barlow)" }}>FAQ</h2>
          </FadeIn>
          <StaggerChildren className="divide-y divide-white/5" staggerDelay={0.07}>
            {faqs.map((faq) => (
              <StaggerItem key={faq.q}>
                <details className="group py-5 cursor-pointer">
                  <summary className="flex items-center justify-between list-none text-sm font-semibold text-white hover:text-[#c9a84c] transition-colors">
                    {faq.q}
                    <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="shrink-0 group-open:rotate-180 transition-transform duration-300 text-[#444]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </summary>
                  <p className="mt-3 text-sm text-[#555] leading-relaxed">{faq.a}</p>
                </details>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-36 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, #c9a84c09 0%, transparent 65%)" }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: "linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c9a84c] mb-4">Get Started Today</p>
            <h2 className="text-6xl sm:text-7xl font-black uppercase tracking-tight mb-6" style={{ fontFamily: "var(--font-barlow)" }}>
              Ready to Start<br />Getting Paid?
            </h2>
            <p className="text-[#555] text-lg mb-10 max-w-xl mx-auto">
              Pick a course, book a call, or do both. Your music skills are worth more than you think.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link href="/courses" className="block px-10 py-4 font-black text-sm uppercase tracking-widest bg-[#c9a84c] text-black hover:bg-[#e5c97e] transition-colors" style={{ fontFamily: "var(--font-barlow)" }}>
                  Browse Courses — From $27
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link href="/booking" className="block px-10 py-4 font-black text-sm uppercase tracking-widest border border-white/12 text-white hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors" style={{ fontFamily: "var(--font-barlow)" }}>
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
