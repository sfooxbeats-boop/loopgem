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

## Home Page Structure — logic lives in `src/app/HomeClient.tsx` ("use client")
`src/app/page.tsx` itself is a thin Server Component (metadata only) — see "SEO" section below. See "Page structure" above under design system for the actual layout.

## SEO

**Architecture:** every route is split into a Server Component `page.tsx` (metadata export only) + a `*Client.tsx` sibling holding all interactive content:

| Route | Server wrapper | Client component |
|---|---|---|
| `/` | `src/app/page.tsx` | `src/app/HomeClient.tsx` |
| `/courses` | `src/app/courses/page.tsx` | `src/app/courses/CoursesClient.tsx` |
| `/booking` | `src/app/booking/page.tsx` | `src/app/booking/BookingClient.tsx` |
| `/contact` | `src/app/contact/page.tsx` | `src/app/contact/ContactClient.tsx` |
| `/pricing-calculator` | `src/app/pricing-calculator/page.tsx` | `src/app/pricing-calculator/PricingCalculatorClient.tsx` |
| `/about` | already a Server Component with its own metadata — no split needed |

**Why:** before this split, `page.tsx` for 5 of 6 routes had `"use client"` at the top, which means Next.js could not run their `export const metadata` — every page silently inherited the root layout's title. Google saw the identical title/description on the homepage, courses, booking, contact, and pricing calculator. This is the single most important rule to preserve: **never put `"use client"` back on a `page.tsx` file.**

**Per-page metadata (title, description, OG, canonical)** — targets the keyword clusters below:
- `/` — "How to Sell Beats on Fiverr — Courses & Coaching | LoopGem"
- `/courses` — "How to Sell Beats on Fiverr — PDF Courses | LoopGem"
- `/booking` — "1-on-1 Music Producer Coaching — Book a Call | LoopGem"
- `/pricing-calculator` — "Beat Pricing Calculator — How Much to Charge on Fiverr | LoopGem"
- `/contact` — "Contact Sfooxbeats — LoopGem"
- `/about` — "About — LoopGem"

**Target keyword clusters** (no live Ahrefs/SEMrush data connected — these are directional, verify before heavy content investment):
1. Sell beats on Fiverr → `/courses`, `/`
2. Sell music production services on Fiverr → `/courses`
3. Freelance music producer income → `/courses`
4. Music producer coaching → `/booking`
5. Beat pricing calculator → `/pricing-calculator` (near-exact match to the tool itself)
6. Branded — sfooxbeats, loopgem → `/about`, `/`
7. (Future, not yet built) beginner producer / how to start selling beats → candidate for a blog if one is ever added

**Structured data (JSON-LD):**
- `Organization` schema — sitewide, in `layout.tsx`
- `FAQPage` schema — `src/app/booking/page.tsx` (mirrors the FAQ content in `BookingClient.tsx` — **if the FAQ copy changes, update both places**)
- `Course` schema (×3) — `src/app/courses/page.tsx` (mirrors `coursesList` in `CoursesClient.tsx` — **if course price/title changes, update both places**)

**Sitemap + robots:** `src/app/sitemap.ts` and `src/app/robots.ts` (Next.js native `MetadataRoute` — no manual XML). Redirect-only routes (`/beat-store`, `/drum-kits`, `/services`) are excluded from the sitemap and disallowed in robots.txt to avoid wasting crawl budget.

**OG image:** root layout now sets `/sfooxbeats-studio.png` as `og:image` + Twitter Card image (previously unset — link previews on WhatsApp/Instagram showed nothing).

**Blog (added 2026-07-24):** SEO content hub at `/blog` — the main lever for ranking beyond the core pages.
- `src/app/blog/posts.ts` — all posts as TS data. Each = `{slug, title, metaTitle, description, primaryKeyword, excerpt, date, readingMinutes, content}`. `content` is a first-party HTML string rendered via `dangerouslySetInnerHTML` into the `.prose` container (no MDX/markdown deps). **To add a post:** append an object to the `posts` array — listing, `[slug]` route, sitemap, and static generation all pick it up automatically.
- `src/app/blog/page.tsx` — listing (Server Component, `Blog` JSON-LD).
- `src/app/blog/[slug]/page.tsx` — async Server Component; `generateStaticParams` + `generateMetadata` that **awaits `params`** (Next 16 makes `params` a Promise — do NOT destructure it synchronously); emits `BlogPosting` + `BreadcrumbList` JSON-LD. All posts prerender as SSG.
- `.prose` article typography lives in `globals.css` (headings, lists, links, blockquote).
- Cross-links between posts must use the full `/blog/<slug>` path. Posts link out to `/courses`, `/booking`, `/pricing-calculator`.
- 6 launch posts target: how-to-sell-beats-online, how-much-to-charge-for-beats, beatstars-vs-fiverr, how-to-sell-your-first-beat, how-to-promote-your-beats, how-to-make-money-as-a-music-producer.
- **Writing quality — always apply the `stop-slop` skill** (installed at `~/.claude/skills/stop-slop/`) when writing/editing any blog post: cut adverbs + filler, active voice, be specific, vary rhythm, **no em dashes**, no "not X but Y" contrasts, no rhetorical-question setups. Score ≥35/50 (Directness/Rhythm/Trust/Authenticity/Density) before publishing. The weekly auto-publish task embeds these rules. All existing posts have been run through the skill (no em dashes, adverbs, or "not X but Y" patterns) — keep new posts to the same standard.

**Not yet done:** verify Google Search Console ownership + submit sitemap; get backlinks (Fiverr profile, IG bio, YouTube descriptions) — the real ranking bottleneck for a new domain; convert raw `<img>` tags to `next/image` for automatic WebP/AVIF + CLS prevention.

## Products & Pricing
| Product | Price | Payment Flow |
|---|---|---|
| PDF Course — Fiverr Beat Seller Blueprint | $27 | PayPal/card → Resend auto-delivers PDF by email |
| PDF Course — Sell Music Services on Fiverr | $27 | PayPal/card → Resend auto-delivers PDF by email |
| PDF Course — Full Freelance Music Producer Playbook | $47 | PayPal/card → Resend auto-delivers PDF by email |
| 1-on-1 Coaching — Starter Session (30 min) | $49.99 | PayPal/card → Cal.com inline scheduler appears (cal.com/sfooxbeats/starter-30min) |
| 1-on-1 Coaching — Sales Strategy Call (60 min) | $89.99 | PayPal/card → Cal.com inline scheduler appears (cal.com/sfooxbeats/strategy-60min) |
| 1-on-1 Coaching — Freelancer Blueprint (4×60 min) | $299.99 | PayPal/card → Cal.com inline scheduler appears (cal.com/sfooxbeats/blueprint-60min) |

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
| `src/components/PayPalButton.tsx` | Generic PayPal + card checkout. Props: `amount`, `description`, `successMessage` (string), `onPaid` (fn — client only), `calLink` (optional, e.g. `"sfooxbeats/starter-30min"` — after successful payment, embeds Cal.com inline scheduler in a 720px iframe so client can pick a time immediately) |
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
- **next.config.mjs must keep `outputFileTracingRoot`** — removing it breaks Vercel builds. (Top-level only now — the duplicate `experimental.outputFileTracingRoot` was removed since Next 16 deprecated it there.)
- **Page metadata pattern (SEO)** — every route under `src/app/*/page.tsx` MUST be a thin Server Component that only exports `metadata` and renders a `*Client.tsx` component. All interactive content (state, hooks) lives in `[Route]Client.tsx` with `"use client"`. **Never put `"use client"` back on a `page.tsx` file** — it silently kills that page's unique `<title>`/meta description (this was the #1 SEO bug on the site before the 2026-07 SEO pass: 5 of 6 pages shared one identical title).
- **Proof images** live in `public/proof/` named `r1.jpeg`–`r10.jpeg` (no spaces in filenames — spaces break Vercel).
- **Scroll-reveal animations** must default to visible OR have a JS timeout fallback (700ms) — iframe contexts can block IntersectionObserver, causing all content to stay hidden. See design prototype `loopgem-design/shared.jsx` for the safe pattern.

## ✅ Recently Completed
- **SEO overhaul (2026-07)** — see full breakdown below under "SEO"
- **Crimson-on-bone design** ported from `loopgem-design/` prototype into Next.js (palette, fonts, components, all 4 pages)
- **Real Sfooxbeats stats** wired everywhere ($127k, 2,019 orders, 982 clients, since 2018)
- **Real intro video** — VSL wired into `VideoBlock` on homepage. Current video ID: `QcqsS62loY0` (unlisted on YouTube; unlisted videos still embed + return thumbnails fine)
- **Logo** — "Loop" black, "Gem" red (`var(--accent)`) in both Navbar + Footer
- **Pricing calculator** at `/pricing-calculator` — 3 tabs, publicly accessible, linked from PDFs
- **Studio photo** on About page (`public/sfooxbeats-studio.png`) at natural landscape ratio
- **Coaching cards** equal height on booking + home pages
- **Course covers** — `cover-c1.png`, `cover-c2.jpeg`, `cover-c3.png` in `public/`, wired into courses + home pages
- **Email delivery live** — `RESEND_API_KEY` + `NEXT_PUBLIC_SITE_URL` in Vercel. Sender `onboarding@resend.dev` (temp until `loopgem.com` verified in Resend). Buyer email redesigned to match site branding (bone bg, red accent, pill CTA).
- **All 3 course PDFs live:**
  - Course 01: `public/downloads/course-fiverr-beat-seller-blueprint.pdf` (38 pages)
  - Course 02: `public/downloads/course-sell-music-services-fiverr.pdf` (28 pages)
  - Course 03: `public/downloads/course-full-freelance-music-producer-playbook.pdf` (27 pages)
- **Course content on site** — modules, bullets, page counts updated to match exact PDF content for all 3 courses
- **Hero mini-stats** (courses + booking pages) — 4-in-a-row on desktop, 2×2 grid on mobile (`<720px`) via `.hero-mini-grid` class in globals.css
- **WhatsApp widget** — `src/components/WhatsAppButton.tsx` mounted in `layout.tsx`. Auto-opens after 2.5s on first visit (sessionStorage `wa_dismissed` prevents re-opening). Red "1" badge on FAB. Popup has red header, message bubble, green CTA → `wa.me/212694569906`. Dismisses on X click or re-click of FAB. **`.wa-widget` container is `pointer-events: none`** with children re-enabled — clicks pass through empty area so the FAB doesn't swallow clicks on elements behind it (e.g. footer Book a call button).
- **Mobile double-tap fix** — `globals.css` adds `touch-action: manipulation` to all interactive elements (buttons, links, cards, inputs) and a `@media (hover: none), (pointer: coarse)` block that disables hover transforms/state changes on touch devices. Without this, the first tap on mobile triggered the hover state and the user had to tap twice to fire the click.
- **Real client photos in hero** — `public/clients/c1.png` … `c5.png` (5 real client headshots) replace the A–E placeholder avatar circles in both hero proof rows on the homepage. 30px / 32px, `border-radius: 999px`, 2px bone-bg border, slight shadow.
- **Cal.com 1-on-1 scheduling live** — username `sfooxbeats`, availability 10:00–23:00 Africa/Casablanca, 3 free event types (Cal Video location):
  - `cal.com/sfooxbeats/starter-30min` — 30 min Starter Session
  - `cal.com/sfooxbeats/strategy-60min` — 60 min Sales Strategy Call
  - `cal.com/sfooxbeats/blueprint-60min` — 60 min Freelancer Blueprint week (booked 4× weekly)
  - Embedded inline on `/booking` after successful PayPal capture via the `PayPalButton`'s new `calLink` prop. Iframe URL: `https://cal.com/{calLink}?embed=true&layout=month_view&theme=light`, 720px tall.
- **Booking page `TEST_MODE` flag** — `src/app/booking/page.tsx` top constant. When `true`, hides prices and replaces PayPal with a direct "Book your call →" button linking out to Cal.com — useful for testing the scheduling flow without spending money. Default is `false` (paid flow).

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

**Course 01 pipeline:**
- HTML source: `C:\Users\KATANA\Downloads\loopgem-pdf\source.html` → run `node convert.js`
- Canva design: `DAHKvBnPMUo` (exported + shipped to site)
- Pricing calculator link on page 27 — clickable yellow hyperlink

**Course 02 pipeline:**
- HTML source: `C:\Users\KATANA\Downloads\loopgem-pdf\source2.html` → run `node convert2.js`
- Canva design: `DAHLR9a5hyc` (imported, user edited + exported, shipped to site)
- 6 screenshots wired: `analytics.png`, `my_profile_.png`, `brief_exemple.png`, `exemple_of_brief_responding.png`, `delivery_message_.png`, `repeated_buyers.png` + `review_1/2.png`
- 4 inline HTML diagrams (gig anatomy, onboarding flow, revenue bar chart, delivery anatomy)

## ⚠️ Pending Tasks

> **Session paused 2026-07-22 mid-setup — resume from tasks 1 & 2 below.**

### ✅ DONE — Domain live
`loopgem.com` is connected to Vercel and live (2026-07-22). Production host is `www.loopgem.com`; apex `loopgem.com` 308-redirects to www. `NEXT_PUBLIC_SITE_URL` in Vercel updated to `https://www.loopgem.com` and redeployed. Namecheap DNS: A `@`→`216.198.79.1`, CNAME `www`→`5ee42e75a71a9c39.vercel-dns-017.com`.

### 1. Finish Resend email sender switch (IN PROGRESS — waiting on DNS)
- [x] Resend: added `loopgem.com` domain, region **eu-west-1**
- [x] Added all 4 DNS records at Namecheap (scoped to `send.` subdomain — do NOT touch the root `@` Private Email records):
  - TXT `resend._domainkey` = DKIM key
  - TXT `send` = `v=spf1 include:amazonses.com ~all`
  - MX `send` = `feedback-smtp.eu-west-1.amazonses.com` (priority 10)
  - TXT `_dmarc` = `v=DMARC1; p=none;`
- [ ] **NEXT:** wait for Resend to show all records **Verified** (was Pending when we paused)
- [ ] Then change `from: "onboarding@resend.dev"` → `courses@loopgem.com` in `src/app/api/send-course/route.ts`, build, push

### 2. Google Search Console (IN PROGRESS)
- Decided: use **Domain property** (covers apex + www + all subdomains), NOT URL prefix
- [ ] **NEXT:** enter `loopgem.com` → Google gives a TXT record → add at Namecheap (Host `@`) → Verify
- [ ] Then submit sitemap: `https://loopgem.com/sitemap.xml`
- Sitemap + robots are already live in code (`src/app/sitemap.ts`, `src/app/robots.ts`)

### 3. Wire up contact form (Formspree)
- Free account at formspree.io → create form → copy form ID
- Replace `YOUR_FORM_ID` in `src/app/contact/ContactClient.tsx` (moved here from `page.tsx` during the SEO split)
- Push to GitHub

### 4. SEO follow-ups (optional, not started)
- Convert raw `<img>` tags → `next/image` across the site for auto WebP/AVIF + CLS prevention
- After GSC indexes, review Search Console for actual keyword impressions and refine titles/descriptions

### 5. Upload final PDFs to repo (reference — all 3 currently live)
When a PDF is re-finalised, copy from `C:\Users\KATANA\Downloads\loopgem-pdf\` to `loopgem/public/downloads/` with EXACT filenames:
- `course-fiverr-beat-seller-blueprint.pdf`
- `course-sell-music-services-fiverr.pdf`
- `course-full-freelance-music-producer-playbook.pdf`

Then: `git add public/downloads && git commit -m "add course PDF" && git push`

### 5. Update homepage video
- ✅ DONE — VSL uploaded as `QcqsS62loY0` (unlisted), wired into `<VideoBlock videoId="QcqsS62loY0" />` on the homepage
- If a new video is filmed later, update the `videoId` prop in `src/app/page.tsx` and push

### 6. Add more proof screenshots (optional)
- Save images to `public/proof/` as `r11.jpeg`, `r12.jpeg` etc. (no spaces in filenames)
- Add entries to `proofScreenshots` array at top of `src/app/page.tsx`
- Add matching position object to both desktop and mobile collage arrays

## Workflow Rules
- **Always update CLAUDE.md** after every change and push to GitHub
- **Always git commit + push** after every code change — never leave edits unpushed

## Deploy Checklist
```bash
npm run build    # must pass clean before pushing
git add .
git commit -m "your message"
git push         # Vercel auto-deploys
```
