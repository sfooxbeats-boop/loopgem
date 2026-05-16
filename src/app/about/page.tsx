import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — LoopGem",
  description: "LoopGem is built by Soufiane Remdane, known as Sfooxbeats — a music producer dedicated to quality sound and real producer education.",
};

const milestones = [
  { year: "2018", event: "Started making beats — bedroom studio, big dreams" },
  { year: "2019", event: "First beats sold online, first real clients" },
  { year: "2020", event: "Launched professional mixing & mastering services" },
  { year: "2021", event: "200+ clients served, placements across multiple genres" },
  { year: "2022", event: "Released first producer course — real income strategies" },
  { year: "2023", event: "Launched LoopGem as a full brand and platform" },
  { year: "2024+", event: "500+ beats, 50+ artists, fully exclusive catalog" },
];

const values = [
  {
    title: "Exclusive Only",
    desc: "Every beat sold is yours alone — removed from the store the moment you purchase. No shared licenses, no grey areas.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: "Professional Quality",
    desc: "Every beat, mix, and kit is crafted with the same standard as major-label production — no shortcuts.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: "Real Education",
    desc: "The courses teach what actually works — built from years of real experience making money as an independent producer.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero */}
      <div className="max-w-3xl mb-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#c9a84c] mb-2">The Producer Behind LoopGem</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">
          Soufiane Remdane
        </h1>
        <p className="text-xl text-[#c9a84c] font-semibold mb-6">aka Sfooxbeats</p>
        <p className="text-[#a0a0a0] text-lg leading-relaxed mb-5">
          LoopGem is the home of Sfooxbeats — a music producer who started in a bedroom and built a full production service brand from scratch.
        </p>
        <p className="text-[#a0a0a0] leading-relaxed mb-5">
          Every beat in the store was crafted personally. Every mix and master is handled with attention to detail. Every course is built from real experience — not theory. The goal from day one has always been simple: give artists and producers access to professional-quality work and honest education, without the gatekeeping.
        </p>
        <p className="text-[#a0a0a0] leading-relaxed">
          LoopGem operates on one rule — exclusive only. When you buy a beat here, it&apos;s yours alone. You get the files, the contract, and the confidence that no one else is rapping over the same track.
        </p>
      </div>

      {/* Values */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8">
          How We <span className="text-gold-gradient">Operate</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className="border border-[#2a2a2a] rounded-xl bg-[#111111] p-6">
              <div className="w-11 h-11 rounded-lg bg-[#c9a84c]/10 text-[#c9a84c] flex items-center justify-center mb-4">
                {v.icon}
              </div>
              <h3 className="font-bold mb-2">{v.title}</h3>
              <p className="text-sm text-[#7a7a7a] leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-10">
          The <span className="text-gold-gradient">Journey</span>
        </h2>
        <div className="relative pl-6 border-l border-[#2a2a2a] space-y-8">
          {milestones.map((m) => (
            <div key={m.year} className="relative">
              <div className="absolute -left-[25px] w-4 h-4 rounded-full border-2 border-[#c9a84c] bg-[#0a0a0a]" />
              <p className="text-xs font-bold text-[#c9a84c] mb-1">{m.year}</p>
              <p className="text-sm text-[#a0a0a0]">{m.event}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="border border-[#2a2a2a] rounded-2xl bg-[#111111] p-10 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "500+", label: "Beats Produced" },
            { value: "200+", label: "Happy Clients" },
            { value: "50+", label: "Artists Served" },
            { value: "100%", label: "Exclusive Sales" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-bold text-gold-gradient">{s.value}</p>
              <p className="text-sm text-[#7a7a7a] mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Work <span className="text-gold-gradient">Together?</span>
        </h2>
        <p className="text-[#a0a0a0] mb-6 max-w-md mx-auto">
          Whether you need an exclusive beat, a mix, a course, or a direct conversation — reach out.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-7 py-3 rounded-md bg-[#c9a84c] text-[#0a0a0a] font-semibold hover:bg-[#e5c97e] transition-colors duration-150"
          >
            Get in Touch
          </Link>
          <Link
            href="/booking"
            className="px-7 py-3 rounded-md border border-[#2a2a2a] text-[#ededed] font-semibold hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors duration-150"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </div>
  );
}
