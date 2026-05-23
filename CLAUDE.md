@AGENTS.md

# LoopGem — Project Overview

Music producer coaching & courses website for **Soufiane Remdane (Sfooxbeats)** at **loopgem.com**.
Focused entirely on **selling PDF courses and 1-on-1 coaching calls** teaching producers how to sell beats and music services online. Beats, drum kits, and production services have been removed.

## Repository & Deployment
- **GitHub:** https://github.com/sfooxbeats-boop/loopgem (branch: main)
- **Live site:** https://loopgem.vercel.app
- **Final domain:** loopgem.com — not yet linked to Vercel
- Vercel auto-deploys on every `git push` to main
- **Vercel config fix:** `next.config.mjs` with `outputFileTracingRoot: __dirname` — do NOT remove this or Vercel build will crash with `TypeError: The "path" argument must be of type string`

## Stack
- **Next.js 16.2.6** (App Router, Turbopack) — read AGENTS.md before touching routing or layouts
- **Tailwind CSS v4** — `@theme {}` block in `globals.css` only, NO `tailwind.config.ts`
- **TypeScript** — global PayPal types in `src/types/paypal.d.ts` (ambient, no export)
- **PayPal JS SDK** — client-side script injection, `NEXT_PUBLIC_PAYPAL_CLIENT_ID` in env
- **Resend** — server-side email, `/api/send-course` — Resend client initialised INSIDE the handler (not at module level) to prevent Vercel build crash
- **motion** (`motion/react`) — animations. Import from `"motion/react"` NOT `"framer-motion"`
- **Lenis** — smooth scroll (initialised globally in `SmoothScroll.tsx`)
- **Archivo Black** + **Manrope** — display + body via Google Fonts. JetBrains Mono for eyebrows/labels.

## Environment Variables
| Key | Status |
|---|---|
| `NEXT_PUBLIC_PAYPAL_CLIENT_ID` | ✅ Set in `.env.local` + Vercel |
| `RESEND_API_KEY` | ⏳ Placeholder in `.env.local` — needs real key added to Vercel |
| `NEXT_PUBLIC_SITE_URL` | ⏳ Needs adding to Vercel (`https://loopgem.vercel.app`) |

Never commit `.env.local` — covered by `.gitignore`.

## Brand & Design System (updated 2026)
- Website: **LoopGem** (loopgem.com)
- Producer: **Sfooxbeats** (Soufiane Remdane)
- Email: Sfooxbeats@gmail.com
- Instagram: @Sfoox_beats

### Color palette — Crimson on bone (default)
- Background: `#f7f3ea` (warm bone / cream)
- Surface 2 (cards, raised): `#ffffff` (pure white)
- Surface 3 (recessed): `#efe9da`
- Foreground: `#0c0a05` (near-black)
- Foreground muted: `rgba(12,10,5,0.62)`
- Foreground dim: `rgba(12,10,5,0.42)`
- Border: `rgba(20,17,11,0.10)`
- Border strong: `rgba(20,17,11,0.20)`
- **Accent (CTAs, highlights): `#e11d2c`** — vivid red
- Accent light: `#ef3a4a`
- Accent dark (hover): `#b8131f`
- Accent soft (tint): `rgba(225,29,44,0.10)`
- Accent foreground (text on accent fill): `#ffffff`

### Alternate palettes (exposed via Tweaks)
- **Noir gold**: black `#050505` + gold `#c9a84c` (original direction)
- **Black + red**: black `#0a0808` + red `#e11d2c` (dark variant of new direction)
- **Espresso**: warm dark `#14100c` + gold `#c9a84c`
- **Ink + gold**: deep blue-black `#07090f` + warm gold `#d2b66a`

### Typography
- **Display** (headlines, hero, marquees, stats): **Archivo Black** 400 — very heavy, slightly condensed sans. `letter-spacing: -0.02em`. Used uppercase for marquee/logo, mixed-case for headlines.
- **Body** (paragraphs, buttons, nav): **Manrope** 400/500/700/800
- **Mono / Eyebrows** (small labels, section markers, monospaced data): **JetBrains Mono** 400/500

### Component patterns
- **Pill CTA**: red fill (`#e11d2c`), white text, large red box-shadow glow. Hover → `#b8131f`. `.btn-primary`
- **Ghost button**: transparent + 1px border. Hover → red border + red text. `.btn-ghost`
- **Card surfaces**: white card on bone bg, 1px border, 24px radius. Hover → border darkens.
- **Eyebrow**: JetBrains Mono 11px, `letter-spacing: 0.14em`, uppercase, red color. Prefixed by a 28px×1px red rule (see `.section-label`).
- **Reveal animation**: scroll-triggered fade + 24px y-translate, 800ms ease-out. JS via `IntersectionObserver` with a 700ms fallback timer.

### Page structure (Home — video-first VSL)
1. **Video** — 16:9 YouTube embed is the FIRST visible block (above the fold). Click-to-load facade; large red play button overlay.
2. **CTAs** — Get Course + Book a Call, right next to the video.
3. **Hero headline** — "Sell beats. Sell services. Stop guessing." with animated stat counters ($127k+ / 500+ / 5.0 / 7 years).
4. **Marquee** — scrolling ticker
5. **Problem section** — 4 numbered cards
6. **Solution callout** — red-tinted CTA card
7. **Marquee** (second)
8. **Proof screenshots** — 10 overlapping Fiverr review cards, staggered angles, hover to bring to front
9. **Stats strip**
10. **Courses** — 3 stacked horizontal course rows (cover left, copy middle, price + CTA right)
11. **Coaching** — 3 session cards
12. **Marquee** (third)
13. **Final CTA**

### CSS Utilities (`globals.css`)
- `.text-gold-gradient` — legacy classname, NOW renders as solid `var(--accent)` (red by default). Keep selector for backwards compat across pages.
- `.btn-gold` / `.btn-primary` — pill red CTA
- `.btn-outline` / `.btn-ghost` — pill outlined CTA
- `.grain` — animated film grain overlay at ~2.5% opacity (applied in `layout.tsx` as `<div className="grain">`)
- `.card-hover` — hover lift effect
- `.reveal` / `.reveal.in` — scroll-reveal classes (used by `Animate.tsx`)
- `.section-label` — small red eyebrow with leading rule

## Home Page Structure (`src/app/page.tsx`) — "use client"
See "Page structure" above under design system.

## Products & Pricing
| Product | Price | Payment Flow |
|---|---|---|
| PDF Course — Fiverr Beat Seller Blueprint | $27 | PayPal/card → Resend auto-delivers PDF by email |
| PDF Course — Sell Music Services on Fiverr | $27 | PayPal/card → Resend auto-delivers PDF by email |
| PDF Course — Full Freelance Music Producer Playbook | $47 | PayPal/card → Resend auto-delivers PDF by email |
| 1-on-1 Coaching — Starter Session (30 min) | $49.99 | PayPal/card → scheduling link sent by email within 24h |
| 1-on-1 Coaching — Sales Strategy Call (60 min) | $89.99 | PayPal/card → scheduling link sent by email within 24h |
| 1-on-1 Coaching — Freelancer Blueprint (4×60 min) | $299.99 | PayPal/card → scheduling link sent by email within 24h |

## Routes
| Route | Description |
|---|---|
| `/` | Home — video-first VSL page (see structure above) |
| `/courses` | 3 PDF courses — stacked horizontal rows, expandable modules, compare table |
| `/booking` | 1-on-1 coaching sessions — 3 pricing tiers + booking form + how-it-works + FAQ |
| `/about` | Soufiane Remdane / Sfooxbeats story + timeline + values |
| `/contact` | Contact form — Formspree (needs real ID replacing `YOUR_FORM_ID`) |
| `/api/send-course` | POST route — sends course PDF download link via Resend |
| `/beat-store` | Redirects → `/courses` |
| `/drum-kits` | Redirects → `/courses` |
| `/drum-kits/[id]` | Redirects → `/courses` |
| `/services` | Redirects → `/courses` |
| `/services/mixing-mastering` | Redirects → `/courses` |
| `/services/custom-beat` | Redirects → `/courses` |
| `/services/custom-drum-kit` | Redirects → `/courses` |

## Key Components
| File | Notes |
|---|---|
| `src/components/PayPalButton.tsx` | Generic PayPal + card checkout. Props: `amount`, `description`, `successMessage` (string), `onPaid` (fn — client only) |
| `src/components/CoursePayPalButton.tsx` | Course-specific. Captures buyer email, calls `/api/send-course`, shows states |
| `src/components/Navbar.tsx` | Sticky, mobile hamburger. Uses `.btn-primary` (red) for CTA. Links: Courses, 1-on-1 Coaching, About, Contact |
| `src/components/Footer.tsx` | Links, Instagram, email, Book a Call CTA |
| `src/components/SmoothScroll.tsx` | Lenis smooth scroll — mounted in `layout.tsx` |
| `src/components/Animate.tsx` | `FadeIn`, `StaggerChildren`, `StaggerItem`, `ScaleIn`, `CountUp` — all use `motion/react`. Must default to visible + use IO fallback (see design-direction.md note below) |
| `src/components/Marquee.tsx` | Scrolling ticker with red `✦` separators — uses `motion/react`. Archivo Black 28px uppercase, slight negative tracking. |
| `src/types/paypal.d.ts` | Ambient global PayPal types — no `export {}` |
| `src/components/VideoBlock.tsx` (planned) | YouTube facade: click-to-load 16:9 iframe with large red play button. To be added when porting new design. |

## Critical Rules
- **Import animations from `"motion/react"`** — NOT `"framer-motion"` (package was migrated)
- **Never pass functions as props from Server → Client Components.** Use `successMessage: string` for server pages.
- **Tailwind v4 — no config file.** All tokens in `@theme {}` in `src/app/globals.css`.
- **PayPal SDK loads once per page** — checks for `script[data-paypal-sdk]` before injecting.
- **Resend must be lazy-init** — `new Resend(key)` inside the POST handler, never at module top level.
- **next.config.mjs must keep `outputFileTracingRoot`** — removing it breaks Vercel builds.
- **Proof images** live in `public/proof/` named `r1.jpeg`–`r10.jpeg` (no spaces in filenames — spaces break Vercel).
- **Scroll-reveal animations** must default to visible OR have a JS timeout fallback (700ms) — iframe contexts can block IntersectionObserver, causing all content to stay hidden. See design prototype `loopgem-design/shared.jsx` for the safe pattern.

## ⚠️ Pending Tasks

### 1. Port new design direction into Next.js codebase
The exploration in `loopgem-design/` (prototype HTML) has the agreed direction:
- Crimson + bone palette
- Archivo Black display + Manrope body
- Video-first home layout
- 4 fully-built pages (Home, Courses, Booking, About) to mirror

Needs:
- Update `globals.css` `@theme {}` block with new tokens (see palette above)
- Swap font imports in `layout.tsx` to Archivo Black + Manrope + JetBrains Mono
- Update `page.tsx` (home) — add VideoBlock above hero, add animated stats hero, restyle problem/proof/courses/coaching sections
- Update `courses/page.tsx` — stacked horizontal rows + expandable modules + compare table
- Update `booking/page.tsx` — 3 tier cards + booking form + how-it-works + FAQ
- Update `about/page.tsx` — story + timeline + values
- Build `VideoBlock.tsx` component (YouTube facade)
- Update `Navbar.tsx` — Archivo Black logo, Manrope nav links, red CTA
- Update `Marquee.tsx` — Archivo Black 28px items, red `✦` separators
- Update `Animate.tsx` `FadeIn` — add 700ms timeout fallback to IntersectionObserver

### 2. Upload PDF course files
When the 3 PDFs are ready, upload to `public/downloads/` with these exact names:
- `course-fiverr-beat-seller-blueprint.pdf`
- `course-sell-music-services-fiverr.pdf`
- `course-full-freelance-music-producer-playbook.pdf`

Then: `git add . && git commit -m "add course PDFs" && git push`

### 3. Add Resend API key to Vercel
- Free account at resend.com → API Keys → Create Key
- Vercel: loopgem project → Settings → Environment Variables:
  - `RESEND_API_KEY` = key from Resend
  - `NEXT_PUBLIC_SITE_URL` = `https://loopgem.vercel.app`
- Trigger a redeploy after adding

### 4. Link loopgem.com domain to Vercel
- Vercel → loopgem project → Settings → Domains → Add `loopgem.com`
- Update DNS at domain registrar to point to Vercel

### 5. Wire up contact form (Formspree)
- Free account at formspree.io → create form → copy form ID
- Replace `YOUR_FORM_ID` in `src/app/contact/page.tsx`
- Push to GitHub

### 6. Add more proof screenshots (optional)
- Save images to `public/proof/` as `r11.jpeg`, `r12.jpeg` etc. (no spaces in filenames)
- Add entries to `proofScreenshots` array at top of `src/app/page.tsx`
- Add matching position object to both desktop and mobile collage arrays

### 7. Drop in real YouTube ID for intro video
- VideoBlock currently uses a placeholder. Replace with the real Sfooxbeats intro VSL video ID once recorded.

## Deploy Checklist
```bash
npm run build    # must pass clean before pushing
git add .
git commit -m "your message"
git push         # Vercel auto-deploys
```
