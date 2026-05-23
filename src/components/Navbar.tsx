"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/booking", label: "1-on-1 Coaching" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="lg-nav">
        <div className="container-lg lg-nav-inner">
          <Link href="/" className="lg-logo">
            <span className="lg-logo-mark">L</span>
            <span>LoopGem</span>
          </Link>

          <div className="lg-nav-links desktop">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`lg-nav-link ${pathname === l.href ? "active" : ""}`}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/booking" className="btn btn-primary btn-sm">
              Book a call <span aria-hidden="true">→</span>
            </Link>
          </div>

          <button
            className="lg-nav-mobile-toggle btn btn-ghost btn-sm"
            onClick={() => setOpen(true)}
            style={{ padding: "8px 12px" }}
            aria-label="Open menu"
          >
            Menu
          </button>
        </div>
      </nav>

      <div className={`mobile-drawer ${open ? "open" : ""}`}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 48,
          }}
        >
          <span className="lg-logo">
            <span className="lg-logo-mark">L</span>LoopGem
          </span>
          <button className="btn btn-ghost btn-sm" onClick={() => setOpen(false)}>
            Close
          </button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                background: "none",
                border: "none",
                textAlign: "left",
                padding: "20px 0",
                borderBottom: "1px solid var(--border)",
                fontFamily: "var(--font-archivo-black), sans-serif",
                fontWeight: 800,
                fontSize: 32,
                textTransform: "uppercase",
                letterSpacing: "0.01em",
                color: pathname === l.href ? "var(--accent)" : "var(--fg)",
                textDecoration: "none",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/booking"
            onClick={() => setOpen(false)}
            className="btn btn-primary"
            style={{ marginTop: 28 }}
          >
            Book a call →
          </Link>
        </div>
      </div>
    </>
  );
}
