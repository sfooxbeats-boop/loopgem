export interface BlogPost {
  slug: string;
  title: string; // <title> tag + H1
  metaTitle: string; // SEO title (may differ slightly from on-page H1)
  description: string; // meta description
  primaryKeyword: string;
  excerpt: string; // shown on listing card
  date: string; // ISO
  readingMinutes: number;
  /** Article body as HTML. First-party static content, rendered via
   * dangerouslySetInnerHTML inside the .prose container. */
  content: string;
}

// Newest first. Order here = order on the /blog listing.
export const posts: BlogPost[] = [
  {
    slug: "how-to-sell-beats-online",
    title: "How to Sell Beats Online in 2026 (A Producer's Real Playbook)",
    metaTitle: "How to Sell Beats Online in 2026 — Real Producer Playbook",
    description:
      "A step-by-step guide to selling beats online as a music producer — where to sell, how to price, how to get your first buyers, and how to turn it into real income.",
    primaryKeyword: "how to sell beats online",
    excerpt:
      "Where to sell, how to price, and how to actually get buyers — the exact system I used to sell $127k+ of beats and services as a producer nobody knew.",
    date: "2026-07-24",
    readingMinutes: 11,
    content: `
<p>Almost every producer I talk to has the same problem. It's not the beats. The beats are good. It's that nobody is buying them — and no one ever explained how selling actually works.</p>
<p>I've sold over <strong>$127,000</strong> of beats and music services online across 2,019 orders, starting from a bedroom in Casablanca with zero followers. This is the real playbook for how to sell beats online in 2026 — not theory, not "post more and stay consistent," but the actual mechanics.</p>

<h2>1. Decide what you're really selling</h2>
<p>Here's the mindset shift that changed everything for me: <strong>buyers don't buy beats, they buy outcomes.</strong> An artist doesn't want "a trap beat in G minor." They want a finished song that gets them streams, that impresses their friends, that moves their career forward.</p>
<p>When you sell a beat, you're selling one of three things:</p>
<ul>
<li><strong>A lease</strong> — the artist can use the beat, you keep ownership and can sell it again.</li>
<li><strong>An exclusive</strong> — the artist owns it outright, you can't resell. Higher price.</li>
<li><strong>A service</strong> — custom production, mixing, mastering. This is where the real money is, and almost nobody talks about it.</li>
</ul>
<p>Most producers only sell leases and wonder why they're stuck at $20 orders. The producers making real money sell all three.</p>

<h2>2. Pick where to sell (and don't spread yourself thin)</h2>
<p>You have more options than ever, but they are not equal:</p>
<ul>
<li><strong>Fiverr</strong> — buyers come to you with money in hand. Best place to start because you don't need an audience. (This is where I built most of my income.)</li>
<li><strong>BeatStars / Airbit</strong> — great storefronts, but you have to drive your own traffic. Better once you have an audience.</li>
<li><strong>Your own site</strong> — highest margin, zero fees, full control — but the hardest to get traffic to early on.</li>
<li><strong>Instagram / YouTube / TikTok</strong> — not stores, but the top of your funnel. They send people to the stores above.</li>
</ul>
<p>My honest advice: <strong>start on a marketplace where buyers already are</strong> (Fiverr), get your first 20–30 orders and reviews, then expand to platforms where you own the relationship. Trying to launch your own beat store on day one is how most producers burn out with zero sales.</p>

<h2>3. Price so you actually make money</h2>
<p>The single biggest mistake: pricing at $5–$20 to "compete." You can't win a race to the bottom, and cheap prices signal cheap quality. Use a simple three-tier structure instead:</p>
<ul>
<li><strong>Basic</strong> — lease, tagged or MP3. Your entry point.</li>
<li><strong>Standard</strong> — untagged WAV + stems. Most buyers land here.</li>
<li><strong>Premium</strong> — exclusive rights or full custom production.</li>
</ul>
<p>If you want to skip the guesswork, I built a <a href="/pricing-calculator">free beat pricing calculator</a> that shows you exactly what to charge per tier and how many orders you need to hit an income goal.</p>

<h2>4. Get your first buyers</h2>
<p>No audience? Good — you don't need one to start. Here's the order of operations:</p>
<ol>
<li><strong>Set up one strong storefront</strong> (a Fiverr gig or a clean beat store) with a clear title, real samples, and pricing tiers.</li>
<li><strong>Respond to buyer requests / briefs</strong> — on Fiverr, buyers literally post what they need. A good 5-line response wins orders with zero followers.</li>
<li><strong>Do outreach</strong> — DM artists on SoundCloud and Instagram who are clearly active but have low-quality beats. Offer something specific.</li>
<li><strong>Over-deliver on the first few</strong> — your first reviews are worth more than the money. They're what makes the next 100 orders come to you.</li>
</ol>

<h2>5. Turn one-time buyers into repeat income</h2>
<p>The producers who make a living don't chase new buyers forever — they turn a $30 buyer into a $300 client. After every delivery: ask for a review, offer a small "next time" discount, and follow up in 5–7 days. Roughly a third of my income came from repeat clients I earned this way.</p>

<h2>The shortcut</h2>
<p>Everything above is the free version, and it works. If you want the exact gig setup, the copy-paste scripts, the pricing maps by genre, and the 90-day plan I used to go from zero to a full-time income, that's what my <a href="/courses">producer courses</a> are — the whole system, written down. Or if you'd rather I look at your specific setup and tell you what to fix, <a href="/booking">book a 1-on-1 call</a>.</p>
<p>Selling beats online isn't luck and it isn't about being the most talented producer in the world. It's a system. Build the system, and the orders come.</p>
`,
  },
  {
    slug: "how-much-to-charge-for-beats",
    title: "How Much Should You Charge for Beats? (2026 Pricing Guide)",
    metaTitle: "How Much to Charge for Beats — 2026 Pricing Guide",
    description:
      "How much to charge for beats in 2026 — lease vs exclusive pricing, what beginners should charge, and a free calculator to set your tiers and hit your income goal.",
    primaryKeyword: "how much to charge for beats",
    excerpt:
      "Lease vs exclusive, beginner vs pro, and the three-tier structure that stops you leaving money on the table. Includes a free pricing calculator.",
    date: "2026-07-24",
    readingMinutes: 9,
    content: `
<p>"How much should I charge for my beats?" is the question I get more than any other. The honest answer is: more than you think — but with a structure that gives buyers a reason to pay more.</p>
<p>Here's how to price beats in 2026 without either scaring buyers away or working for free.</p>

<h2>Lease vs exclusive: know the difference</h2>
<p>Your price depends entirely on what the buyer is actually getting:</p>
<ul>
<li><strong>Non-exclusive lease</strong> — the buyer can use the beat, but you keep ownership and can sell it to others. Lower price, sold many times.</li>
<li><strong>Exclusive rights</strong> — the buyer owns the beat, you remove it from sale. Much higher price because you can only sell it once.</li>
</ul>
<p>A single beat can earn you far more through many leases than one exclusive — but exclusives are where big single paydays come from. You want both on the menu.</p>

<h2>What beginners should charge</h2>
<p>If you're just starting with few or no reviews, don't price at $5 — it signals low quality and traps you. A realistic starting structure:</p>
<ul>
<li><strong>Basic lease (MP3):</strong> $20–$30</li>
<li><strong>Standard lease (WAV + stems):</strong> $40–$60</li>
<li><strong>Exclusive / custom:</strong> $150+</li>
</ul>
<p>As your reviews and reputation grow, every one of these numbers goes up. I started around here and raised prices steadily as demand grew — the key is raising them <em>without</em> losing your existing clients (there's a specific way to do that).</p>

<h2>The three-tier structure that prints money</h2>
<p>Never offer a single price. Always offer three tiers, because the middle tier becomes your anchor and the top tier makes the middle look reasonable:</p>
<ol>
<li><strong>Basic</strong> — the entry point that gets people in the door.</li>
<li><strong>Standard</strong> — your best value, where most buyers land. Price this as your real target.</li>
<li><strong>Premium</strong> — exclusive or full production. Even if few buy it, it makes the Standard tier feel like a deal.</li>
</ol>

<h2>Don't forget platform fees</h2>
<p>If you sell on a marketplace like Fiverr, remember they take a cut (Fiverr takes 20%). A $50 order nets you $40. Price with the fee in mind so your take-home actually matches your goal.</p>

<h2>Use the free calculator</h2>
<p>Instead of guessing, I built a <a href="/pricing-calculator">free beat pricing calculator</a>. Plug in your tiers and it shows your take-home after fees, projects your monthly revenue, and tells you exactly how many orders you need to hit a specific income goal. It's the same tool I reference in my courses.</p>

<h2>The bottom line</h2>
<p>Charge based on <strong>outcomes and rights</strong>, not on how long the beat took you. Use three tiers. Raise prices as your proof grows. If you want the full genre-by-genre pricing maps and the exact scripts for raising prices without losing clients, that's inside my <a href="/courses">producer courses</a>.</p>
`,
  },
  {
    slug: "beatstars-vs-fiverr",
    title: "BeatStars vs Fiverr: Where Should You Sell Your Beats in 2026?",
    metaTitle: "BeatStars vs Fiverr — Where to Sell Beats in 2026",
    description:
      "BeatStars vs Fiverr compared for producers: traffic, fees, buyer intent, and which one is better for selling beats when you're starting with no audience.",
    primaryKeyword: "beatstars vs fiverr",
    excerpt:
      "Two very different ways to sell beats. One brings buyers to you; the other makes you bring the buyers. Here's which to pick based on where you are.",
    date: "2026-07-24",
    readingMinutes: 8,
    content: `
<p>BeatStars and Fiverr both let you sell beats online, but they work in almost opposite ways. Picking the wrong one for your situation is why a lot of producers grind for months with nothing to show. Here's the honest comparison.</p>

<h2>The core difference: who brings the buyers?</h2>
<p>This is the whole thing in one sentence:</p>
<ul>
<li><strong>Fiverr brings buyers to you.</strong> People land on Fiverr already looking to spend money, search for a producer, and order. You don't need an audience.</li>
<li><strong>BeatStars makes you bring the buyers.</strong> It's a beautiful storefront, but it's <em>your</em> job to drive traffic to it from YouTube, Instagram, and TikTok.</li>
</ul>

<h2>Fiverr: pros and cons</h2>
<p><strong>Pros:</strong> Built-in buyer traffic, buyers with high purchase intent, a review system that compounds, and "buyer requests" where clients literally post what they need. Best possible place to get your first orders with zero following.</p>
<p><strong>Cons:</strong> 20% fee, more competition on-platform, and you don't own the customer relationship (Fiverr does).</p>

<h2>BeatStars: pros and cons</h2>
<p><strong>Pros:</strong> Professional storefront, lower fees on Pro plans, built for beat licensing specifically, and you build your own brand and audience.</p>
<p><strong>Cons:</strong> Almost no organic traffic — if you can't drive visitors, your store just sits there. Much harder when you're starting from zero.</p>

<h2>Which should you choose?</h2>
<p>Here's my straight answer after doing both:</p>
<ul>
<li><strong>No audience yet?</strong> Start with <strong>Fiverr.</strong> You need buyers now, and Fiverr has them. Get to 20–30 orders and a strong rating first.</li>
<li><strong>Already have an audience</strong> (YouTube subs, an IG following that engages)? <strong>BeatStars</strong> lets you monetize them at higher margin.</li>
<li><strong>Best of all:</strong> use both. Fiverr for cold buyers who find you, BeatStars for the audience you're building. They feed each other.</li>
</ul>

<h2>The mistake to avoid</h2>
<p>Don't pour months into a BeatStars store with no traffic plan, decide "selling beats doesn't work," and quit. It works — you just picked the platform that requires an audience before you had one.</p>

<p>I built most of my $127k+ on Fiverr precisely because it solved the traffic problem for me while I was a nobody. If you want the exact Fiverr gig setup, pricing, and scripts that made it work, that's my <a href="/courses">Fiverr-focused courses</a> — or <a href="/booking">book a call</a> and I'll tell you which platform fits your situation.</p>
`,
  },
  {
    slug: "how-to-sell-your-first-beat",
    title: "How to Sell Your First Beat (Even With No Followers)",
    metaTitle: "How to Sell Your First Beat — Beginner's Guide (No Audience)",
    description:
      "A beginner's guide to selling your first beat with no audience: setting up, finding buyers, pricing, and delivering so your first sale leads to many more.",
    primaryKeyword: "how to sell your first beat",
    excerpt:
      "No followers, no reviews, no idea where to start? Here's the exact path from zero to your first paid beat — and why the first sale is the hardest.",
    date: "2026-07-24",
    readingMinutes: 8,
    content: `
<p>The first beat sale is the hardest one you'll ever make. Not because it's technically difficult — because you have zero proof, zero reviews, and zero audience. Once you break that seal, the rest gets dramatically easier. Here's exactly how to get there.</p>

<h2>Step 1: You don't need an audience — you need a storefront where buyers already are</h2>
<p>Forget "build a following first." That takes years. Instead, go where people are already shopping for beats with money in hand. For a total beginner, that means a marketplace like <strong>Fiverr</strong>, where buyers search and order directly. No followers required.</p>

<h2>Step 2: Set up one strong offer</h2>
<p>You don't need ten gigs or a huge catalog. You need <strong>one clean, convincing offer</strong>:</p>
<ul>
<li>A clear title that says exactly what you make ("I will produce a custom trap beat for you").</li>
<li>2–3 of your <em>best</em> samples — not your whole hard drive.</li>
<li>Three simple pricing tiers (see our <a href="/blog/how-much-to-charge-for-beats">beat pricing guide</a>).</li>
</ul>

<h2>Step 3: Go get the first order (don't wait for it)</h2>
<p>Beginners make the mistake of setting up a store and waiting. Instead, go find the buyer:</p>
<ul>
<li><strong>Answer buyer requests</strong> — on Fiverr, buyers post exactly what they need. A specific, confident 5-line reply beats a big portfolio.</li>
<li><strong>DM active artists</strong> on SoundCloud/Instagram who are clearly making music but using weak beats. Offer something specific and low-risk.</li>
<li><strong>Tap your network</strong> — the first sale can absolutely come from someone who already knows you make beats.</li>
</ul>

<h2>Step 4: Over-deliver on that first one</h2>
<p>Your first order is not about the money — it's about the <strong>review</strong>. A single 5-star review is what turns a dead storefront into one buyers trust. Deliver fast, communicate well, throw in a small extra, and politely ask for feedback.</p>

<h2>Step 5: Turn one sale into a system</h2>
<p>Once you've got that first review, the exact same steps compound. Two reviews get you more orders than one, five get you more than two. This is the moment most producers quit right before — don't.</p>

<h2>Your next move</h2>
<p>If you want the beginner path spelled out step by step — the gig setup, the buyer-request template that landed my first orders, and pricing — start with the <a href="/courses">Fiverr Beat Seller Blueprint</a>. It's built specifically for producers with zero or inconsistent orders. And when you're ready to grow beyond the first sale, the rest of the <a href="/courses">courses</a> take it from there.</p>
`,
  },
  {
    slug: "how-to-promote-your-beats",
    title: "How to Promote Your Beats and Actually Get Clients",
    metaTitle: "How to Promote Your Beats — Get Clients Without Ads",
    description:
      "How to promote your beats as a producer: the content that drives beat sales, using Instagram and YouTube the right way, and turning attention into paying clients.",
    primaryKeyword: "how to promote your beats",
    excerpt:
      "Posting beats into the void doesn't sell them. Here's how to promote your beats so attention actually turns into orders — no ad budget required.",
    date: "2026-07-24",
    readingMinutes: 9,
    content: `
<p>Most producers "promote" their beats by posting a clip into the void and hoping. Then they conclude marketing doesn't work. The problem isn't marketing — it's that random posting isn't a strategy. Here's how to promote beats so attention actually becomes income.</p>

<h2>First: promotion sends people somewhere. Where?</h2>
<p>Before you post anything, you need a destination — a store or gig that's ready to convert. Promotion without a place to buy is just noise. Get your <a href="/blog/how-to-sell-beats-online">selling setup</a> right first, then drive traffic to it.</p>

<h2>The content that actually sells beats</h2>
<p>Not all posts are equal. The ones that convert do one of three jobs:</p>
<ul>
<li><strong>Show the beat in use</strong> — a snippet with an artist (or your own hook) over it beats a raw loop every time. Buyers need to imagine a song.</li>
<li><strong>Show the outcome</strong> — before/after, "made this in 10 minutes," a client's finished track. Proof sells.</li>
<li><strong>Show you're open for business</strong> — an actual call to action. "Beats in bio," "DM for custom." You'd be amazed how many producers never say this.</li>
</ul>

<h2>Platform by platform</h2>
<ul>
<li><strong>Instagram Reels / TikTok</strong> — short, hooky clips. Best for reach. Keep them under 15 seconds and lead with the drop.</li>
<li><strong>YouTube</strong> — "type beat" SEO still works. Title beats like the artists people search for. This is long-term traffic that keeps selling while you sleep.</li>
<li><strong>SoundCloud</strong> — still a great place to reach artists directly and DM them.</li>
</ul>

<h2>The highest-ROI "promotion" nobody counts</h2>
<p>Direct outreach. Ten thoughtful DMs to active artists who need beats will out-convert a hundred random posts. It feels slower, but it's the fastest path to your first clients — because you're talking to buyers, not an algorithm.</p>

<h2>Turn attention into repeat clients</h2>
<p>Getting a client once is marketing. Keeping them is where the money is. After a sale: deliver hard, ask for a review, follow up in a week. A promoted post that leads to one $30 sale is fine; a client who comes back four times is a business.</p>

<h2>Go deeper</h2>
<p>Promotion is one piece of a bigger machine — offer, pricing, delivery, retention. My <a href="/courses">Full Freelance Music Producer Playbook</a> includes a 30-day content plan built specifically to drive beat sales (no dancing required), plus the outreach scripts that land clients. Or <a href="/booking">book a 1-on-1 call</a> and we'll build your promotion plan around your genre and strengths.</p>
`,
  },
  {
    slug: "how-to-make-money-as-a-music-producer",
    title: "How to Make Money as a Music Producer (7 Real Income Streams)",
    metaTitle: "How to Make Money as a Music Producer — 7 Real Ways",
    description:
      "How to make money as a music producer in 2026: seven real income streams beyond selling beats, from services to licensing, ranked by how fast they pay.",
    primaryKeyword: "how to make money as a music producer",
    excerpt:
      "Selling beats is one income stream — there are at least seven. Here's the full map, ranked by how quickly each one actually pays, from a producer who's done it.",
    date: "2026-07-24",
    readingMinutes: 10,
    content: `
<p>"Making money as a music producer" almost always gets reduced to "sell beats." But beats are just one of several income streams — and honestly not always the fastest to pay. Here are seven real ways producers make money, ranked roughly by how quickly you can start earning from each.</p>

<h2>1. Selling production services (fastest to real money)</h2>
<p>This is the one most producers sleep on. Mixing, mastering, custom production, and ghost production are <strong>services</strong> people actively pay for right now. My order volume tripled the moment I added services alongside beats — "mixing" converts easier than "beats" because the buyer already has a song and a clear need. If you want money soonest, start here.</p>

<h2>2. Selling beats (leases + exclusives)</h2>
<p>The classic. Lease the same beat many times, sell exclusives for bigger single paydays. Reliable once your storefront and reviews are established. See our full guide on <a href="/blog/how-to-sell-beats-online">how to sell beats online</a>.</p>

<h2>3. Custom / commissioned work</h2>
<p>An artist hires you to produce something specific for them. Higher ticket than a lease, and it often turns into a repeat relationship — which is where the real money lives.</p>

<h2>4. Selling sample packs and drum kits</h2>
<p>Package your sounds once, sell them infinitely. It takes upfront work and some audience to move volume, but it's genuinely passive once it's live.</p>

<h2>5. Teaching and coaching</h2>
<p>Once you can do the thing, people will pay you to show them how. Courses, coaching calls, and tutorials scale in a way client work can't — you're selling knowledge, not hours. (It's exactly what LoopGem is.)</p>

<h2>6. Licensing and sync</h2>
<p>Getting your music into videos, ads, games, and film. Payouts can be large, but it's slower and more relationship-driven. A long-term play, not a this-month play.</p>

<h2>7. Royalties and publishing</h2>
<p>Producing for artists who release commercially and collecting your share. The most "industry" path, the slowest to pay, but potentially the largest ceiling.</p>

<h2>How to actually sequence these</h2>
<p>Don't try to do all seven at once. Here's the order that works:</p>
<ol>
<li>Start with <strong>services + beats</strong> on a marketplace to get cash flow now.</li>
<li>Add <strong>custom work</strong> and turn buyers into repeat clients.</li>
<li>Layer in <strong>sample packs</strong> and <strong>teaching</strong> once you have proof and an audience.</li>
<li>Pursue <strong>licensing</strong> and <strong>royalties</strong> as long-term upside.</li>
</ol>

<h2>Where to start today</h2>
<p>The fastest, most reliable income for most producers is streams #1 and #2 — services and beats — sold somewhere buyers already are. That's the whole focus of my <a href="/courses">producer courses</a>: turning your skills into orders in weeks, not years. If you want a personalized plan for which streams fit you, <a href="/booking">book a 1-on-1 call</a>.</p>
`,
  },
];

export function getAllPosts(): BlogPost[] {
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}
