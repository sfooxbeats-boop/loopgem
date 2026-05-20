import Link from "next/link";

const links = [
  { href: "/courses", label: "Courses" },
  { href: "/booking", label: "1-on-1 Coaching" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <span
              className="text-3xl font-black uppercase tracking-tight text-gold-gradient"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              LoopGem
            </span>
            <p className="text-sm text-[#555] leading-relaxed max-w-xs mt-4">
              Helping music producers turn their skills into a real business — through proven courses and 1-on-1 coaching.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://instagram.com/Sfoox_beats"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-[#555] hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors duration-150"
              >
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-[#555] hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors duration-150"
              >
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] mb-5">Navigation</h3>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-[#555] hover:text-white transition-colors duration-150">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] mb-5">Get in Touch</h3>
            <a
              href="mailto:Sfooxbeats@gmail.com"
              className="text-sm text-[#555] hover:text-[#c9a84c] transition-colors duration-150 block mb-2"
            >
              Sfooxbeats@gmail.com
            </a>
            <p className="text-xs text-[#333] mb-6">Response within 24 hours</p>
            <Link
              href="/booking"
              className="inline-block px-5 py-2.5 text-sm font-bold bg-[#c9a84c] text-black hover:bg-[#e5c97e] transition-colors duration-150"
            >
              Book a 1-on-1 Call
            </Link>
          </div>

        </div>

        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#333]">
            &copy; {new Date().getFullYear()} LoopGem. All rights reserved.
          </p>
          <p className="text-xs text-[#333]">Built by Sfooxbeats · loopgem.com</p>
        </div>
      </div>
    </footer>
  );
}
