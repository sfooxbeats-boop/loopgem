@AGENTS.md

# LoopGem — Project Overview

Music production services website for **Soufiane Remdane (Sfooxbeats)** at **loopgem.com**.

## Repository & Deployment
- **GitHub:** https://github.com/sfooxbeats-boop/loopgem (branch: main)
- **Live site:** https://loopgem.vercel.app
- **Final domain:** loopgem.com — not yet linked to Vercel
- Vercel auto-deploys on every `git push` to main

## Stack
- **Next.js 16** (App Router, Turbopack) — read AGENTS.md before touching routing or layouts
- **Tailwind CSS v4** — `@theme {}` block in `globals.css` only, NO `tailwind.config.ts`
- **TypeScript** — global PayPal types in `src/types/paypal.d.ts` (ambient, no export)
- **PayPal JS SDK** — client-side script injection, `NEXT_PUBLIC_PAYPAL_CLIENT_ID` in env
- **jsPDF** — client-side beat contract PDF generation inside `BeatCard.tsx`
- **Resend** — server-side email, `/api/send-course` sends course PDF download links

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
- Theme: `#0a0a0a` bg + `#c9a84c` gold accent
- CSS utilities in `globals.css`: `.text-gold-gradient`, `.glow-gold`, `.card-hover`

## Services & Pricing
| Service | Price | Payment Flow |
|---|---|---|
| Exclusive Beat | $250 | PayPal/card → jsPDF contract auto-downloaded |
| Custom Beat (made to order) | $250 | Email requirements → built → paid on delivery |
| Mixing & Mastering | $500 | PayPal/card → client emails stems to Sfooxbeats@gmail.com |
| Custom Drum Kit / Sound Kit | $250 (up to 300 sounds) | Email requirements → built → paid on delivery |
| 1-on-1 Session — 30 min | $49.99 | PayPal/card |
| 1-on-1 Session — 60 min | $89.99 | PayPal/card |
| Mentorship Pack 4×60 min | $299.99 | PayPal/card |
| PDF Course — Fiverr Beat Seller Blueprint | $27 | PayPal/card → Resend auto-delivers PDF by email |
| PDF Course — Sell Music Services on Fiverr | $27 | PayPal/card → Resend auto-delivers PDF by email |
| PDF Course — Full Freelance Music Producer Playbook | $47 | PayPal/card → Resend auto-delivers PDF by email |

## Routes
| Route | Description |
|---|---|
| `/` | Home — hero, stats, services grid, featured beats, testimonials |
| `/beat-store` | 6 beats at $250 exclusive — 3-step form + PayPal + jsPDF contract |
| `/services` | Hub page — 3 clickable service cards |
| `/services/mixing-mastering` | Full detail + PayPal checkout |
| `/services/custom-beat` | Detail + email request flow (no upfront payment) |
| `/services/custom-drum-kit` | Detail + email request flow (no upfront payment) |
| `/courses` | 3 PDF courses — CoursePayPalButton + Resend auto-delivery |
| `/booking` | 1-on-1 sessions — topic: how to sell beats & music services as freelancer |
| `/drum-kits` | Pre-made drum kits — PayPal |
| `/about` | Soufiane Remdane / Sfooxbeats story, timeline, values |
| `/contact` | Contact form — Formspree (needs real ID replacing `YOUR_FORM_ID`) |
| `/api/send-course` | POST route — sends course PDF download link via Resend |

## Key Components
| File | Notes |
|---|---|
| `src/components/PayPalButton.tsx` | Generic PayPal + card checkout. Props: `amount`, `description`, `successMessage` (string — safe from server pages), `onPaid` (fn — only between client components) |
| `src/components/CoursePayPalButton.tsx` | Course-specific. Extracts buyer email from PayPal capture, calls `/api/send-course`, shows sending/done/error states |
| `src/components/BeatCard.tsx` | 3-step: idle → form (legal name, stage name, address) → payment → PDF contract download |
| `src/components/Navbar.tsx` | Sticky, mobile hamburger. Shows "LoopGem" only (no subtitle) |
| `src/components/Footer.tsx` | Links, Instagram @Sfoox_beats, email Sfooxbeats@gmail.com, "LoopGem" only |
| `src/types/paypal.d.ts` | Ambient global types for `window.paypal` and `PayPalOrderActions` — no `export {}` |

## Critical Rules
- **Never pass functions as props from Server Components to Client Components.** Use `successMessage: string` for server pages. Only use `onPaid: () => void` between client components.
- **Tailwind v4 — no config file.** All custom tokens in `@theme {}` inside `src/app/globals.css`.
- **PayPal SDK loads once per page** — component checks for `script[data-paypal-sdk]` before injecting.
- **Global types** go in `src/types/paypal.d.ts` without `export {}` (ambient module).

## ⚠️ WHERE WE LEFT OFF — Pending Tasks

### 1. Beat store style update
User wants to restyle the beat store page. **This is next when they return.**

### 2. Upload PDF course files
When the 3 PDFs are written and ready, upload to `public/downloads/` with these exact names:
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
