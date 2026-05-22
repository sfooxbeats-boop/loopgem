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
- **Barlow Condensed** (Google Font) — display headings via `--font-barlow` CSS variable

## Environment Variables
| Key | Status |
|---|---|
| `NEXT_PUBLIC_PAYPAL_CLIENT_ID` | ✅ Set in `.env.local` + Vercel |
| `RESEND_API_KEY` | ⏳ Placeholder in `.env.local` — needs real key added to Vercel |
| `NEXT_PUBLIC_SITE_URL` | ⏳ Needs adding to Vercel (`https://loopgem.vercel.app`) |

Never commit `.env.local` — covered by `.gitignore`.

## Brand & Design System
- Website: **LoopGem** (loopgem.com)
- Producer: **Sfooxbeats** (Soufiane Remdane)
- Email: Sfooxbeats@gmail.com
- Instagram: @Sfoox_beats
- Background: `#000000` (pure black)
- Gold accent: `#c9a84c`
- Display font: Barlow Condensed (bold, uppercase headings) via `style={{ fontFamily: "var(--font-barlow)" }}`
- Body font: Geist Sans

### CSS Utilities (`globals.css`)
- `.text-gold-gradient` — gold gradient text
- `.btn-gold` — pill-shaped gold filled button (use this everywhere for primary CTAs)
- `.btn-outline` — pill-shaped outlined button for secondary CTAs
- `.grain` — animated film grain overlay (applied in `layout.tsx` as `<div className="grain">`)
- `.card-hover` — hover lift effect

## Home Page Structure (`src/app/page.tsx`) — "use client"
The home page is a VSL-style conversion page. Structure top to bottom:
1. **Video** — YouTube embed is the VERY FIRST thing (no hero text above it). `pt-24` accounts for navbar.
2. **CTAs** — Get Course + Book a Call below video
3. **Marquee** — scrolling ticker
4. **Problem section** — "Do You Recognize Yourself in These?" — 4 pain point cards
5. **Solution block** — rounded card with gold border
6. **Marquee** (second)
7. **Proof screenshots** — 10 real Fiverr screenshots in overlapping collage (`/public/proof/r1.jpeg`–`r10.jpeg`)
   - Desktop: absolute positioned, staggered angles, hover to bring to front
   - Mobile: same collage layout with tap-to-pop animation (state: `activeMobile`)
8. **Stats strip**
9. **Testimonials** — 9 real Fiverr reviews with score breakdown (communication/quality/value)
10. **Courses** — 3 course cards
11. **Coaching** — 3 session options with pricing
12. **Marquee** (third)
13. **Final CTA**

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
| `/courses` | 3 PDF courses — CoursePayPalButton + Resend auto-delivery |
| `/booking` | 1-on-1 coaching sessions — 3 pricing tiers + how it works + FAQ |
| `/about` | Soufiane Remdane / Sfooxbeats story |
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
| `src/components/Navbar.tsx` | Sticky, mobile hamburger. Uses `.btn-gold` for CTA. Links: Courses, 1-on-1 Coaching, About, Contact |
| `src/components/Footer.tsx` | Links, Instagram, email, Book a Call CTA |
| `src/components/SmoothScroll.tsx` | Lenis smooth scroll — mounted in `layout.tsx` |
| `src/components/Animate.tsx` | `FadeIn`, `StaggerChildren`, `StaggerItem`, `ScaleIn`, `CountUp` — all use `motion/react` |
| `src/components/Marquee.tsx` | Scrolling ticker with gold `✦` separators — uses `motion/react` |
| `src/types/paypal.d.ts` | Ambient global PayPal types — no `export {}` |

## Critical Rules
- **Import animations from `"motion/react"`** — NOT `"framer-motion"` (package was migrated)
- **Never pass functions as props from Server → Client Components.** Use `successMessage: string` for server pages.
- **Tailwind v4 — no config file.** All tokens in `@theme {}` in `src/app/globals.css`.
- **PayPal SDK loads once per page** — checks for `script[data-paypal-sdk]` before injecting.
- **Resend must be lazy-init** — `new Resend(key)` inside the POST handler, never at module top level.
- **next.config.mjs must keep `outputFileTracingRoot`** — removing it breaks Vercel builds.
- **Proof images** live in `public/proof/` named `r1.jpeg`–`r10.jpeg` (no spaces in filenames — spaces break Vercel).

## ⚠️ Pending Tasks

### 1. Upload PDF course files
When the 3 PDFs are ready, upload to `public/downloads/` with these exact names:
- `course-fiverr-beat-seller-blueprint.pdf`
- `course-sell-music-services-fiverr.pdf`
- `course-full-freelance-music-producer-playbook.pdf`

Then: `git add . && git commit -m "add course PDFs" && git push`

### 2. Add Resend API key to Vercel
- Free account at resend.com → API Keys → Create Key
- Vercel: loopgem project → Settings → Environment Variables:
  - `RESEND_API_KEY` = key from Resend
  - `NEXT_PUBLIC_SITE_URL` = `https://loopgem.vercel.app`
- Trigger a redeploy after adding

### 3. Link loopgem.com domain to Vercel
- Vercel → loopgem project → Settings → Domains → Add `loopgem.com`
- Update DNS at domain registrar to point to Vercel

### 4. Wire up contact form (Formspree)
- Free account at formspree.io → create form → copy form ID
- Replace `YOUR_FORM_ID` in `src/app/contact/page.tsx`
- Push to GitHub

### 5. Add more proof screenshots (optional)
- Save images to `public/proof/` as `r11.jpeg`, `r12.jpeg` etc. (no spaces in filenames)
- Add entries to `proofScreenshots` array at top of `src/app/page.tsx`
- Add matching position object to both desktop and mobile collage arrays

## Deploy Checklist
```bash
npm run build    # must pass clean before pushing
git add .
git commit -m "your message"
git push         # Vercel auto-deploys
```
