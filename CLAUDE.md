@AGENTS.md

# LoopGem — Project Overview

Music producer coaching & courses website for **Soufiane Remdane (Sfooxbeats)** at **loopgem.com**.
The site is focused entirely on **selling PDF courses and 1-on-1 coaching calls** that teach producers how to sell beats and music services online. Beats, drum kits, and production services have been removed.

## Repository & Deployment
- **GitHub:** https://github.com/sfooxbeats-boop/loopgem (branch: main)
- **Live site:** https://loopgem.vercel.app
- **Final domain:** loopgem.com — not yet linked to Vercel
- Vercel auto-deploys on every `git push` to main

## Stack
- **Next.js 16.2.6** (App Router, Turbopack) — read AGENTS.md before touching routing or layouts
- **Tailwind CSS v4** — `@theme {}` block in `globals.css` only, NO `tailwind.config.ts`
- **TypeScript** — global PayPal types in `src/types/paypal.d.ts` (ambient, no export)
- **PayPal JS SDK** — client-side script injection, `NEXT_PUBLIC_PAYPAL_CLIENT_ID` in env
- **Resend** — server-side email, `/api/send-course` sends course PDF download links
- **Framer Motion** — animations (scroll-triggered reveals, hover effects, stagger)
- **Lenis** — smooth scroll (initialised globally in `SmoothScroll.tsx`)
- **Barlow Condensed** (Google Font) — display headings via `--font-barlow` CSS variable

## Environment Variables
| Key | Status |
|---|---|
| `NEXT_PUBLIC_PAYPAL_CLIENT_ID` | ✅ Set in `.env.local` + Vercel |
| `RESEND_API_KEY` | ⏳ Placeholder in `.env.local` — needs real key added to Vercel |
| `NEXT_PUBLIC_SITE_URL` | ⏳ Needs adding to Vercel (`https://loopgem.vercel.app`) |

Never commit `.env.local` — covered by `.gitignore`.

## Brand
- Website: **LoopGem** (loopgem.com)
- Producer: **Sfooxbeats** (Soufiane Remdane)
- Email: Sfooxbeats@gmail.com
- Instagram: @Sfoox_beats
- Background: `#080808` · Gold accent: `#c9a84c`
- Display font: Barlow Condensed (bold, uppercase headings)
- Body font: Geist Sans
- CSS utilities in `globals.css`: `.text-gold-gradient`, `.glow-gold`, `.card-hover`

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
| `/` | Home — animated hero, stats, instructor quote, benefits, how it works, courses preview, coaching preview, testimonials, FAQ, CTA |
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
| `src/components/PayPalButton.tsx` | Generic PayPal + card checkout. Props: `amount`, `description`, `successMessage` (string — safe from server pages), `onPaid` (fn — only between client components) |
| `src/components/CoursePayPalButton.tsx` | Course-specific. Extracts buyer email from PayPal capture, calls `/api/send-course`, shows sending/done/error states |
| `src/components/Navbar.tsx` | Sticky, mobile hamburger. Links: Courses, 1-on-1 Coaching, About, Contact. CTA: Book a Call |
| `src/components/Footer.tsx` | Links, Instagram @Sfoox_beats, email, Book a Call CTA |
| `src/components/SmoothScroll.tsx` | Client component — initialises Lenis smooth scroll globally (mounted in layout.tsx) |
| `src/components/Animate.tsx` | Reusable Framer Motion wrappers: `FadeIn`, `StaggerChildren`, `StaggerItem`, `ScaleIn`, `CountUp` |
| `src/types/paypal.d.ts` | Ambient global types for `window.paypal` and `PayPalOrderActions` — no `export {}` |

## Animation System (`src/components/Animate.tsx`)
- `<FadeIn direction="up|down|left|right|none" delay={0} duration={0.6}>` — fades in when scrolled into view
- `<StaggerChildren staggerDelay={0.1}>` + `<StaggerItem>` — staggered reveal for grids/lists
- `<ScaleIn delay={0}>` — scale + fade on scroll
- All use `useInView` with `once: true` — animate once, not on every scroll
- Framer Motion `whileHover` / `whileTap` used directly on `motion.div` for interactive elements

## Critical Rules
- **Never pass functions as props from Server Components to Client Components.** Use `successMessage: string` for server pages. Only use `onPaid: () => void` between client components.
- **Tailwind v4 — no config file.** All custom tokens in `@theme {}` inside `src/app/globals.css`.
- **PayPal SDK loads once per page** — component checks for `script[data-paypal-sdk]` before injecting.
- **Global types** go in `src/types/paypal.d.ts` without `export {}` (ambient module).
- **Pages with animations must be `"use client"`** — Framer Motion hooks don't work in Server Components.
- **Lenis smooth scroll** is initialised in `SmoothScroll.tsx` (client) and mounted in `layout.tsx`.

## ⚠️ Pending Tasks

### 1. Upload PDF course files
When the 3 PDFs are written and ready, upload to `public/downloads/` with these exact names:
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
- Free account at formspree.io → create form pointing to Sfooxbeats@gmail.com
- Replace `YOUR_FORM_ID` in `src/app/contact/page.tsx` with real ID
- Push to GitHub

## Deploy Checklist
```bash
npm run build    # must pass clean before pushing
git add .
git commit -m "your message"
git push         # Vercel auto-deploys
```
