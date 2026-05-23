import Link from "next/link";

export default function Footer() {
  return (
    <footer className="lg-footer">
      <div className="container-lg">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
            gap: 48,
            marginBottom: 64,
          }}
          className="footer-grid"
        >
          <div>
            <div className="lg-logo" style={{ marginBottom: 18 }}>
              <span>LoopGem</span>
            </div>
            <p
              style={{
                color: "var(--fg-muted)",
                fontSize: 15,
                lineHeight: 1.6,
                maxWidth: 360,
                margin: "0 0 20px",
              }}
            >
              Real producer education from Sfooxbeats. Learn how to sell beats,
              mixing, and music services online — without guessing.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a
                href="mailto:Sfooxbeats@gmail.com"
                className="chip"
                style={{ textDecoration: "none" }}
              >
                Sfooxbeats@gmail.com
              </a>
              <a
                href="https://instagram.com/Sfoox_beats"
                target="_blank"
                rel="noopener noreferrer"
                className="chip"
                style={{ textDecoration: "none" }}
              >
                @Sfoox_beats
              </a>
            </div>
          </div>
          <div>
            <div
              className="h-eyebrow"
              style={{ color: "var(--fg-dim)", marginBottom: 16 }}
            >
              Learn
            </div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "grid",
                gap: 10,
              }}
            >
              <li>
                <Link
                  href="/courses"
                  className="lg-nav-link"
                  style={{ color: "var(--fg)" }}
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/booking"
                  className="lg-nav-link"
                  style={{ color: "var(--fg)" }}
                >
                  1-on-1 Coaching
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="lg-nav-link"
                  style={{ color: "var(--fg)" }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="lg-nav-link"
                  style={{ color: "var(--fg)" }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div
              className="h-eyebrow"
              style={{ color: "var(--fg-dim)", marginBottom: 16 }}
            >
              Topics
            </div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "grid",
                gap: 10,
                color: "var(--fg-muted)",
                fontSize: 14,
              }}
            >
              <li>Selling beats on Fiverr</li>
              <li>Mixing & mastering services</li>
              <li>Music marketing</li>
              <li>Freelance pricing</li>
            </ul>
          </div>
          <div>
            <div
              className="h-eyebrow"
              style={{ color: "var(--fg-dim)", marginBottom: 16 }}
            >
              Get started
            </div>
            <Link href="/booking" className="btn btn-primary">
              Book a call →
            </Link>
            <p
              style={{
                color: "var(--fg-dim)",
                fontSize: 12,
                marginTop: 14,
              }}
            >
              Reply within 24h. Spots limited.
            </p>
          </div>
        </div>
        <div
          className="hairline"
          style={{
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
            color: "var(--fg-dim)",
            fontSize: 12.5,
          }}
        >
          <span>
            © {new Date().getFullYear()} LoopGem — Sfooxbeats (Soufiane Remdane)
          </span>
          <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
            Built for producers who actually want to get paid.
          </span>
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
          .footer-grid > div:first-child { grid-column: span 2; }
        }
      `}</style>
    </footer>
  );
}
