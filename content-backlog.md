# LoopGem Blog — Content Backlog

Queue for the **weekly auto-draft agent**. Each week the agent picks the **top unchecked topic**, writes a full post, opens a PR, and (once merged) checks it off here.

## How the agent uses this file
1. Read this list top-to-bottom. Find the first topic whose box is **unchecked** AND whose slug is **not already** in `src/app/blog/posts.ts`.
2. Write that post following the exact format/quality of existing posts in `posts.ts` (700–1200 words, real tactical advice matching Sfooxbeats' voice, `<h2>`/`<p>`/`<ul>`/`<ol>` HTML in `content`, internal links to `/courses`, `/booking`, `/pricing-calculator`, and 1–2 relevant `/blog/<slug>` cross-links).
3. Append the new post object to the **top** of the `posts` array (newest first).
4. Create a branch `blog/<slug>`, commit, push, open a PR titled `New blog post: <title>`.
5. Check the box here in the same PR.

**Quality rules (non-negotiable — protects the domain from Google spam penalties):**
- One post per run. Never batch.
- Genuinely useful, specific, first-hand-sounding. No filler, no keyword stuffing.
- If every topic below is done, open an issue/PR note saying the backlog is empty instead of inventing low-value posts.

## Published (do not repeat)
- [x] how-to-sell-beats-online
- [x] how-much-to-charge-for-beats
- [x] beatstars-vs-fiverr
- [x] how-to-sell-your-first-beat
- [x] how-to-promote-your-beats
- [x] how-to-make-money-as-a-music-producer

## Queue (write in this order)
- [ ] **how-to-sell-beats-on-instagram** — primary kw: "how to sell beats on instagram"
- [ ] **how-much-to-charge-for-mixing** — primary kw: "how much to charge for mixing a song"
- [ ] **exclusive-vs-lease-beats** — primary kw: "exclusive vs lease beats"
- [ ] **fiverr-gig-for-music-producers** — primary kw: "fiverr gig for music producers"
- [ ] **why-your-beats-arent-selling** — primary kw: "why my beats aren't selling"
- [ ] **best-places-to-sell-beats-online** — primary kw: "best places to sell beats online"
- [ ] **how-to-sell-beats-on-your-own-website** — primary kw: "sell beats on your own website"
- [ ] **how-to-sell-type-beats-on-youtube** — primary kw: "how to sell type beats on youtube"
- [ ] **how-to-become-a-freelance-music-producer** — primary kw: "how to become a freelance music producer"
- [ ] **beat-licensing-explained** — primary kw: "beat licensing explained"
- [ ] **how-to-get-mixing-and-mastering-clients** — primary kw: "how to get mixing clients"
- [ ] **how-to-sell-beats-with-no-audience** — primary kw: "how to sell beats with no following"
- [ ] **how-much-do-music-producers-make** — primary kw: "how much do music producers make"
- [ ] **cold-dm-templates-for-producers** — primary kw: "how to dm artists to sell beats"
- [ ] **90-day-plan-to-full-time-producer** — primary kw: "how to become a full time music producer"

## Ideas parking lot (promote into the queue as needed)
- how to sell drum kits / sample packs
- best DAW for selling beats (careful: low commercial fit)
- how to price custom production
- how to handle beat revisions / difficult clients
- how to get repeat beat clients
