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
1. **Video** — `VideoBlock` shows YouTube thumbnail (auto-fetched from `i.ytimg.com/vi/{id}/maxresdefault.jpg`) with small red play button centered. Caption overlay hidden under 720px. Default video ID `aN1IN7rYNE4` (Sfooxbeats intro).
2. **CTAs** — Get Course + Book a Call, right next to the video.
3. **Hero headline** — "Sell beats. Sell services. Stop guessing." with **2×2 grid** of animated stat tiles: **$127k** generated · **2,019** orders delivered · **982** unique clients · **5.0** average rating.
4. **Marquee** — scrolling ticker
5. **Problem section** — 4 numbered cards
6. **Solution callout** — red-tinted CTA card
7. **Marquee** (second)
8. **Proof screenshots** — 10 overlapping Fiverr review cards, staggered angles, hover to bring to front
9. **Stats strip** — 5.0 rating / 982 clients / 24h delivery / 8 yrs on Fiverr
10. **Courses** — 3 stacked horizontal course rows (cover left, copy middle, price + CTA right)
11. **Coaching** — 3 session cards
12. **Marquee** (third)
13. **Final CTA**

### Real Sfooxbeats stats (use these everywhere)
- **On Fiverr since 2018** (top-rated since 2020) — 8 years as of 2026
- **$127k+** generated
- **2,019** orders delivered
- **982** unique clients
- **5.0** average rating

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
| `src/components/Navbar.tsx` | Sticky, mobile drawer. Uses `.btn-primary` (red) for CTA. Links: Home, Courses, 1-on-1 Coaching, About. **No L logo mark** — just the "LoopGem" wordmark in Archivo Black. |
| `src/components/Footer.tsx` | Links, Instagram, email, Book a Call CTA. Wordmark only (no L mark). |
| `src/components/SmoothScroll.tsx` | Lenis smooth scroll — mounted in `layout.tsx` |
| `src/components/Animate.tsx` | `FadeIn`, `StaggerChildren`, `StaggerItem`, `ScaleIn`, `CountUp`. `FadeIn` and `CountUp` use the safe-reveal pattern: default visible + IntersectionObserver + 700ms fallback timer (prevents content from being stuck hidden in iframe/preview contexts). `CountUp` API: `to`, `prefix`, `suffix`, `decimals`. |
| `src/components/Marquee.tsx` | Scrolling ticker with red `✦` separators. Archivo Black 28px uppercase, slight negative tracking. Props: `items?: string[]`, `accent?: boolean`. CSS-only animation (no motion). |
| `src/components/VideoBlock.tsx` | YouTube facade: shows `i.ytimg.com/vi/{videoId}/maxresdefault.jpg` thumbnail (falls back to `hqdefault.jpg`) with centered red play button + bottom caption overlay (caption hidden under 720px). Props: `videoId?` (default `aN1IN7rYNE4`), `title?`, `duration?`. Play button size: `clamp(44px, 5vw, 72px)`. |
| `src/types/paypal.d.ts` | Ambient global PayPal types — no `export {}` |

## Critical Rules
- **Import animations from `"motion/react"`** — NOT `"framer-motion"` (package was migrated)
- **Never pass functions as props from Server → Client Components.** Use `successMessage: string` for server pages.
- **Tailwind v4 — no config file.** All tokens in `@theme {}` in `src/app/globals.css`.
- **PayPal SDK loads once per page** — checks for `script[data-paypal-sdk]` before injecting.
- **Resend must be lazy-init** — `new Resend(key)` inside the POST handler, never at module top level.
- **next.config.mjs must keep `outputFileTracingRoot`** — removing it breaks Vercel builds.
- **Proof images** live in `public/proof/` named `r1.jpeg`–`r10.jpeg` (no spaces in filenames — spaces break Vercel).
- **Scroll-reveal animations** must default to visible OR have a JS timeout fallback (700ms) — iframe contexts can block IntersectionObserver, causing all content to stay hidden. See design prototype `loopgem-design/shared.jsx` for the safe pattern.

## ✅ Recently Completed
- **Crimson-on-bone design** ported from `loopgem-design/` prototype into Next.js (palette, fonts, components, all 4 pages)
- **Real Sfooxbeats stats** wired everywhere ($127k, 2,019 orders, 982 clients, since 2018)
- **Real intro video** (`aN1IN7rYNE4`) wired into `VideoBlock` — shows YouTube thumbnail + small centered play button
- **L logo mark removed** from navbar + footer (just "LoopGem" wordmark)
- **Course 01 PDF pipeline built** — see "PDF generation pipeline" below
- **Pricing calculator** built at `/pricing-calculator` (3 tabs: package pricing, revenue projector, income goal). Publicly accessible, no login. Linked from PDF page 27 as clickable yellow hyperlink.
- **Sfooxbeats studio photo** added to About page (`public/sfooxbeats-studio.png`) at natural landscape ratio
- **Coaching tier cards** equal height fixed on booking + home pages (`.grid-3-1 .reveal { height: 100% }`)
- **Canva design** (`DAHKvBnPMUo`) — PDF imported, styled dark green `#1B3520` bg + white text + yellow `#FFD700` accents. Text colors fixed on pages 1–29 via API. Pages 30–54 need manual Ctrl+A → white in Canva.
- **Sparse pages fixed** in Canva (pages 6, 8, 10, 14, 24) — content spread to fill full page height via API. Pages 18 and 44 still need manual fix in Canva (Ctrl+A → scale/spread elements).

## 📄 PDF generation pipeline

Lives at `C:\Users\KATANA\Downloads\loopgem-pdf\` (outside the loopgem repo).

```
loopgem-pdf/
├── source.html                            # raw course HTML (with .screenshot placeholders)
├── build.html                             # processed (auto-generated by convert.js)
├── convert.js                             # puppeteer-based HTML → PDF builder
├── screenshots/                           # real PNG/JPG files referenced by filename
└── fiverr-beat-seller-blueprint.pdf       # output
```

**How to rebuild:**
```bash
cd /c/Users/KATANA/Downloads/loopgem-pdf
node convert.js
```

**Critical notes:**
- Uses **system Chrome** at `C:\Program Files\Google\Chrome\Application\chrome.exe`. The bundled Chromium download failed (`ENOSPC: no space left on device`) so `convert.js` points puppeteer at the user's installed Chrome via `executablePath`. Do NOT switch back to bundled Chromium without freeing disk space.
- Screenshots referenced by `.screenshot-file` divs in source.html are matched **by filename** — must match exactly (case-sensitive). `Packages.png` ≠ `packages.png`, `Thumbnail_3.jpg` is `.jpg` not `.png`, `delivery_message_.png` has a trailing underscore, etc.
- If a screenshot file is missing, `convert.js` leaves a placeholder box in the PDF (doesn't fail).
- Pairs/triples like `brief_exemple.png + exemple_of_brief_responding.png — caption` render side-by-side in a `.screenshot-pair` grid.
- The vision tool can't extract image bytes from chat attachments — user has to manually save each screenshot to `screenshots/` with the right filename.

**Course 01 status:**
- Puppeteer PDF: `C:\Users\KATANA\Downloads\loopgem-pdf\fiverr-beat-seller-blueprint.pdf` (4.7MB, 12 screenshots wired)
- Canva design: `DAHKvBnPMUo` — dark green theme, text colors fixed pages 1-29, sparse pages 6/8/10/14/24 fixed
- Pricing calculator link on page 27 → clickable yellow hyperlink → `https://loopgem.vercel.app/pricing-calculator`
- **Still to do in Canva manually:** pages 30-54 text color (Ctrl+A → white each page), pages 18 + 44 layout fix

## ⚠️ Pending Tasks

### 1. Course 01 PDF — finish & ship
- [ ] Fix pages 18, 44 in Canva (Ctrl+A → spread elements to fill page)
- [ ] Fix pages 30–54 text color in Canva (select each page → Ctrl+A → change text to white)
- [ ] Export final PDF from Canva
- [ ] Copy to `loopgem/public/downloads/course-fiverr-beat-seller-blueprint.pdf`, commit, push

### 2. Write Courses 02 + 03
- [ ] Course 02 — **"Sell Music Services on Fiverr"** ($27, 40 pages) — draft in claude.ai using same brief template, same screenshot pipeline
- [ ] Course 03 — **"Full Freelance Music Producer Playbook"** ($47, 80 pages) — bundle of 01+02 plus outreach/content/retention modules

### 2. Upload final PDFs to repo
When each PDF is finalised, copy from `C:\Users\KATANA\Downloads\loopgem-pdf\` to `loopgem/public/downloads/` with these EXACT filenames:
- `course-fiverr-beat-seller-blueprint.pdf`
- `course-sell-music-services-fiverr.pdf`
- `course-full-freelance-music-producer-playbook.pdf`

Then: `git add public/downloads && git commit -m "add course PDF" && git push`

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
