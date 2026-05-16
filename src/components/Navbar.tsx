"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/beat-store", label: "Beat Store" },
  { href: "/services", label: "Services" },
  { href: "/drum-kits", label: "Drum Kits" },
  { href: "/courses", label: "Courses" },
  { href: "/booking", label: "Book a Call" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#2a2a2a] bg-[#0a0a0a]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex flex-col leading-none shrink-0">
            <span className="text-xl font-bold tracking-tight text-gold-gradient">LoopGem</span>
            <span className="text-[9px] uppercase tracking-widest text-[#7a7a7a]">by Sfooxbeats</span>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm transition-colors duration-150 ${
                  pathname === l.href ? "text-[#c9a84c]" : "text-[#a0a0a0] hover:text-[#ededed]"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/beat-store"
              className="ml-2 px-4 py-2 text-sm font-semibold rounded-md bg-[#c9a84c] text-[#0a0a0a] hover:bg-[#e5c97e] transition-colors duration-150"
            >
              Shop Now
            </Link>
          </div>

          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-[#ededed] transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#ededed] transition-all duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#ededed] transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[#2a2a2a] bg-[#111111] px-4 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`text-sm py-2 transition-colors duration-150 ${
                pathname === l.href ? "text-[#c9a84c]" : "text-[#a0a0a0] hover:text-[#ededed]"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/beat-store"
            onClick={() => setOpen(false)}
            className="mt-1 px-4 py-2 text-sm font-semibold rounded-md bg-[#c9a84c] text-[#0a0a0a] hover:bg-[#e5c97e] text-center transition-colors duration-150"
          >
            Shop Now
          </Link>
        </div>
      )}
    </nav>
  );
}
