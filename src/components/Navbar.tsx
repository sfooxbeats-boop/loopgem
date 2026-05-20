"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/courses", label: "Courses" },
  { href: "/booking", label: "1-on-1 Coaching" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#080808]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="shrink-0">
            <span
              className="text-2xl font-black uppercase tracking-tight text-gold-gradient"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              LoopGem
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors duration-150 ${
                  pathname === l.href
                    ? "text-[#c9a84c]"
                    : "text-[#888] hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link
              href="/booking"
              className="px-5 py-2.5 text-sm font-bold bg-[#c9a84c] text-black hover:bg-[#e5c97e] transition-colors duration-150"
            >
              Book a Call
            </Link>
          </div>

          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/5 bg-[#0f0f0f] px-4 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`text-sm font-medium transition-colors duration-150 ${
                pathname === l.href ? "text-[#c9a84c]" : "text-[#888] hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/booking"
            onClick={() => setOpen(false)}
            className="mt-2 px-5 py-3 text-sm font-bold bg-[#c9a84c] text-black text-center hover:bg-[#e5c97e] transition-colors"
          >
            Book a Call
          </Link>
        </div>
      )}
    </nav>
  );
}
