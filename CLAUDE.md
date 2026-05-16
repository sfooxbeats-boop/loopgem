@AGENTS.md

# LoopGem — Project Overview

Music production services website for **Soufiane Remdane (Sfooxbeats)** at **loopgem.com**.

## Stack
- **Next.js 16** (App Router, Turbopack) — see AGENTS.md for breaking changes
- **Tailwind CSS v4** — configured via `@theme` block in `globals.css`, NOT a `tailwind.config.ts`
- **TypeScript**
- **PayPal JS SDK** — client-side, loaded via script injection in `PayPalButton.tsx`

## Environment Variables
- `NEXT_PUBLIC_PAYPAL_CLIENT_ID` — live PayPal client ID (in `.env.local`, never commit)

## Brand
- Website brand: **LoopGem** (domain: loopgem.com)
- Producer: **Sfooxbeats** (Soufiane Remdane)
- Email: Sfooxbeats@gmail.com
- Instagram: @Sfoox_beats
- Theme: dark (`#0a0a0a` bg) + gold (`#c9a84c` accent)
- Custom CSS utilities: `.text-gold-gradient`, `.glow-gold`, `.card-hover`

## Services & Pricing
| Service | Price | Notes |
|---|---|---|
| Exclusive Beat | $250 | MP3 + WAV + stems + exclusive contract PDF auto-generated |
| Custom Beat (made to order) | $250 | Client emails requirements, paid after delivery |
| Mixing & Mastering | $500 | Unlimited stems, unlimited revisions |
| Custom Drum Kit / Sound Kit | $250 | Up to 300 sounds, 24-bit WAV |
| 1-on-1 Coaching (30 min) | $49.99 | |
| 1-on-1 Coaching (60 min) | $89.99 | |
| Mentorship Pack (4×60 min) | $299.99 | |

## Pages / Routes
| Route | Description |
|---|---|
| `/` | Home — hero, stats, services, featured beats, testimonials |
| `/beat-store` | Beat store — 6 beats, $250 exclusive each, contract form + PayPal |
| `/services` | Services hub — 3 clickable cards |
| `/services/mixing-mastering` | Mixing & mastering detail + PayPal |
| `/services/custom-beat` | Custom beat request — email flow, no upfront payment |
| `/services/custom-drum-kit` | Custom drum kit request — email flow, no upfront payment |
| `/courses` | 3 producer courses with PayPal |
| `/booking` | 1-on-1 video call sessions with PayPal |
| `/drum-kits` | Pre-made drum kit store with PayPal |
| `/about` | Soufiane Remdane / Sfooxbeats story |
| `/contact` | Contact form (Formspree — needs `YOUR_FORM_ID` replaced) |

## Key Components
| File | Notes |
|---|---|
| `src/components/PayPalButton.tsx` | Client component. Props: `amount`, `description`, `successMessage` (string), `onPaid` (fn — only pass from other client components). Renders PayPal + Card buttons. |
| `src/components/BeatCard.tsx` | Client component. 3-step flow: idle → form (collect legal name, stage name, address) → payment → done. Generates contract PDF with jsPDF on success. |
| `src/components/Navbar.tsx` | Sticky, mobile hamburger menu. |
| `src/components/Footer.tsx` | Links, Instagram, email. |

## Important Rules
- **PayPal `onSuccess` as a function cannot be passed from Server Components** — use `successMessage: string` for server-rendered pages, or `onPaid: () => void` only between client components
- Tailwind v4 has no `tailwind.config.ts` — custom colors go in `globals.css` under `@theme {}`
- Contact form Formspree ID still needs to be set (`YOUR_FORM_ID` in `contact/page.tsx`)
- Beat audio previews work when `audioSrc` is set on each beat in `beat-store/page.tsx` — currently no audio files uploaded

## To Deploy
```bash
npm run build        # verify no errors first
npx vercel           # deploy via Vercel CLI
```
Or connect the GitHub repo to Vercel for automatic deployments on push.
