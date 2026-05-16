@AGENTS.md

# LoopGem — Project Overview

Music production services website for **Soufiane Remdane (Sfooxbeats)** at **loopgem.com**.

## Repository
- **GitHub:** https://github.com/sfooxbeats-boop/loopgem
- **Branch:** main
- **Deployment:** Vercel (connect repo at vercel.com — env var required)

## Stack
- **Next.js 16** (App Router, Turbopack) — see AGENTS.md for breaking changes
- **Tailwind CSS v4** — configured via `@theme` block in `globals.css`, NO `tailwind.config.ts`
- **TypeScript**
- **PayPal JS SDK** — client-side script injection in `PayPalButton.tsx`
- **jsPDF** — client-side exclusive contract PDF generation in `BeatCard.tsx`

## Environment Variables
| Key | Where |
|---|---|
| `NEXT_PUBLIC_PAYPAL_CLIENT_ID` | `.env.local` locally, Vercel dashboard in production |

Never commit `.env.local` — it is covered by `.gitignore`.

## Brand
- Website: **LoopGem** (loopgem.com)
- Producer: **Sfooxbeats** (Soufiane Remdane)
- Email: Sfooxbeats@gmail.com
- Instagram: @Sfoox_beats
- Theme: dark (`#0a0a0a` bg) + gold (`#c9a84c` accent)
- Custom CSS utilities in `globals.css`: `.text-gold-gradient`, `.glow-gold`, `.card-hover`

## Services & Pricing
| Service | Price | Payment flow |
|---|---|---|
| Exclusive Beat (store) | $250 | PayPal/card on site — contract PDF auto-generated |
| Custom Beat (made to order) | $250 | Client emails requirements → built → paid on delivery |
| Mixing & Mastering | $500 | PayPal/card on site → client emails stems |
| Custom Drum Kit / Sound Kit | $250 (up to 300 sounds) | Client emails requirements → built → paid on delivery |
| 1-on-1 Coaching 30 min | $49.99 | PayPal/card on site |
| 1-on-1 Coaching 60 min | $89.99 | PayPal/card on site |
| Mentorship Pack 4×60 min | $299.99 | PayPal/card on site |

## Routes
| Route | Description |
|---|---|
| `/` | Home — hero, stats, services grid, featured beats, testimonials |
| `/beat-store` | 6 beats at $250 exclusive each — contract form + PayPal |
| `/services` | Hub — 3 clickable service cards |
| `/services/mixing-mastering` | Full detail + PayPal checkout |
| `/services/custom-beat` | Detail + email request flow (no upfront payment) |
| `/services/custom-drum-kit` | Detail + email request flow (no upfront payment) |
| `/courses` | 3 producer courses — PayPal enrollment |
| `/booking` | 1-on-1 video call sessions — PayPal |
| `/drum-kits` | Pre-made drum kits store — PayPal |
| `/about` | Soufiane Remdane / Sfooxbeats story, timeline, values |
| `/contact` | Contact form — needs Formspree ID (see below) |

## Key Components
| File | Notes |
|---|---|
| `src/components/PayPalButton.tsx` | Client component. Props: `amount`, `description`, `successMessage` (string), `onPaid` (fn — only between client components, never from server pages). Renders PayPal + debit/credit card buttons. |
| `src/components/BeatCard.tsx` | Client component. 3-step flow: idle → form (legal name, stage name, address) → payment → done + PDF download. Uses jsPDF for contract. |
| `src/components/Navbar.tsx` | Sticky nav, mobile hamburger. Shows "LoopGem / by Sfooxbeats". |
| `src/components/Footer.tsx` | Links, Instagram (@Sfoox_beats), email (Sfooxbeats@gmail.com). |

## Known TODOs
- **Contact form:** Replace `YOUR_FORM_ID` in `src/app/contact/page.tsx` with real Formspree ID (formspree.io — free, points to Sfooxbeats@gmail.com)
- **Beat audio previews:** Add MP3 files to `public/audio/` and set `audioSrc` on each beat in `src/app/beat-store/page.tsx`
- **Domain:** Point loopgem.com to Vercel after deployment

## Critical Rules
- **Server → Client function props are forbidden.** Use `successMessage: string` when calling `PayPalButton` from server pages. Only use `onPaid: () => void` between client components (e.g. inside `BeatCard`).
- **Tailwind v4 has no config file.** All custom tokens live in the `@theme {}` block inside `src/app/globals.css`.
- **PayPal script loads once per page.** The component checks for `script[data-paypal-sdk]` before injecting to avoid duplicates.

## Deploy Checklist
1. `npm run build` — must pass with no errors
2. Push to GitHub (`git push`)
3. Vercel picks up the push and auto-deploys
4. Set `NEXT_PUBLIC_PAYPAL_CLIENT_ID` in Vercel dashboard → Environment Variables
5. Add custom domain `loopgem.com` in Vercel → Domains
