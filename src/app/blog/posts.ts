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
    slug: "how-to-sell-beats-on-instagram",
    title: "How to Sell Beats on Instagram (Without Buying Followers)",
    metaTitle: "How to Sell Beats on Instagram: A Producer's Guide",
    description:
      "How to sell beats on Instagram as a producer: the content that converts, how to set up your profile, and how to turn followers into paying beat clients.",
    primaryKeyword: "how to sell beats on instagram",
    excerpt:
      "Instagram can sell beats for you, but posting loops into the void won't. Set up a profile that converts, post what buyers respond to, and move the sale to the DMs.",
    date: "2026-07-24",
    readingMinutes: 9,
    content: `
<p>Instagram is one of the best free tools a producer has for selling beats, and one of the most wasted. You post a loop, get four likes, and decide Instagram doesn't work. The platform works fine. Your approach is the problem.</p>
<p>I sold over $127k of beats and services using the same principles below. No fake followers, no dancing, no ad budget.</p>

<h2>Treat Instagram as the top of your funnel</h2>
<p>Most producers treat Instagram like a store. It works better as the top of your funnel. Its job is to get the right people to notice you and take one step closer: a DM, a profile visit, a click to your store. Once you post with that goal, your content changes.</p>

<h2>Set up your profile to convert</h2>
<p>Fix the page a buyer lands on before you post anything. In five seconds it should answer two questions: what you do, and how to buy.</p>
<ul>
<li><strong>Name field:</strong> put "Beats" or "Music Producer" next to your name. Instagram search reads this field, not your bio.</li>
<li><strong>Bio:</strong> one line on who you help ("Beats &amp; mixing for indie artists") and one call to action ("DM 'BEAT' for custom work").</li>
<li><strong>Link:</strong> send it to a page that sells, your beat store or a <a href="/booking">booking page</a>, not your SoundCloud homepage.</li>
<li><strong>Pinned posts:</strong> pin your three best beat-in-use clips so new visitors hear your level first.</li>
</ul>

<h2>The content that converts</h2>
<p>Random loops don't sell. Three types of post do:</p>
<ol>
<li><strong>Beat-in-use clips:</strong> the beat with a hook, a rough vocal, or an artist over it. Buyers need to hear a finished song, not a raw loop. This format converts best.</li>
<li><strong>Proof and outcomes:</strong> a client's finished track, a time-lapse of you making a beat, a screenshot of a happy buyer. Proof lowers the risk of buying from you.</li>
<li><strong>Open-for-business posts:</strong> a direct offer, like "Two custom beat slots open this week, DM to claim." Most producers never tell people they can buy.</li>
</ol>
<p>Reels drive your reach. Keep them under 15 seconds, lead with the drop, and add one line of on-screen text so they work on mute. For the full breakdown across platforms, read <a href="/blog/how-to-promote-your-beats">how to promote your beats</a>.</p>

<h2>Move the sale to the DMs</h2>
<p>The sale rarely happens in the comments. It happens in the DMs. You get there two ways:</p>
<ul>
<li><strong>Inbound:</strong> your call to action ("DM 'BEAT'") pulls interested people in. Reply fast, ask one question about their project, then send a price.</li>
<li><strong>Outbound:</strong> find active artists in your genre using weak beats. Send a specific, low-pressure message: compliment something real, then offer something concrete. Ten thoughtful DMs beat a hundred random posts.</li>
</ul>
<p>Outreach is the fastest path to your first sales when your following is small. You talk to buyers instead of waiting on an algorithm.</p>

<h2>You don't need a big following</h2>
<p>You do not need 10k followers to sell beats. You need a few hundred of the right people who make music, plus a profile that converts them. I've seen producers with 400 engaged followers out-earn producers with 40k bought ones. Buying followers hurts you: it kills your engagement rate, so Instagram shows your posts to fewer real people.</p>

<h2>Point the traffic somewhere that closes</h2>
<p>Instagram gets attention. Your store or gig closes the sale. If that destination is weak, the attention leaks away. Dial in your pricing and offer first. Our guide on <a href="/blog/how-to-sell-beats-online">how to sell beats online</a> and the <a href="/pricing-calculator">free pricing calculator</a> cover that.</p>

<h2>The bigger system</h2>
<p>Instagram is one channel feeding a bigger machine: offer, pricing, delivery, retention. My <a href="/courses">producer courses</a> include a 30-day content plan built to drive beat sales and the DM scripts that land clients. You can also <a href="/booking">book a 1-on-1 call</a> and we'll build your Instagram-to-sales flow around your genre.</p>
<p>Post with intent, build a profile that converts, and move real conversations to the DMs. Do that for a few months and Instagram becomes a client pipeline instead of a vanity feed.</p>
`,
  },
  {
    slug: "how-to-sell-beats-online",
    title: "How to Sell Beats Online in 2026 (A Producer's Real Playbook)",
    metaTitle: "How to Sell Beats Online in 2026: Producer Playbook",
    description:
      "A step-by-step guide to selling beats online as a music producer: where to sell, how to price, get your first buyers, and turn it into real income.",
    primaryKeyword: "how to sell beats online",
    excerpt:
      "Where to sell, how to price, and how to get buyers. The system I used to sell $127k+ of beats and services as a producer nobody knew.",
    date: "2026-07-24",
    readingMinutes: 11,
    content: `
<p>Almost every producer I talk to has the same problem, and it isn't the beats. The beats are good. Nobody buys them because no one explained how selling works.</p>
<p>I've sold over <strong>$127,000</strong> of beats and music services across 2,019 orders, starting from a bedroom in Casablanca with zero followers. This is how selling beats online works in 2026: the mechanics, not "post more and stay consistent."</p>

<h2>1. Decide what you're selling</h2>
<p>One shift changed my income: buyers don't buy beats, they buy outcomes. An artist doesn't want a trap beat in G minor. They want a finished song that earns streams and moves their career forward.</p>
<p>When you sell a beat, you sell one of three things:</p>
<ul>
<li><strong>A lease:</strong> the artist uses the beat, you keep ownership and sell it again.</li>
<li><strong>An exclusive:</strong> the artist owns it outright and you can't resell. Higher price.</li>
<li><strong>A service:</strong> custom production, mixing, or mastering. Most producers ignore this, and it holds the most money.</li>
</ul>
<p>Most producers sell only leases and stay stuck at $20 orders. The ones earning a living sell all three.</p>

<h2>2. Pick where to sell (and don't spread yourself thin)</h2>
<p>You have plenty of options, and they aren't equal:</p>
<ul>
<li><strong>Fiverr:</strong> buyers come to you with money in hand. The best place to start, because you don't need an audience. I built most of my income here.</li>
<li><strong>BeatStars and Airbit:</strong> strong storefronts, but you drive your own traffic. Better once you have an audience.</li>
<li><strong>Your own site:</strong> highest margin, zero fees, full control, and the hardest to get traffic to early on.</li>
<li><strong>Instagram, YouTube, TikTok:</strong> not stores, but the top of your funnel. They send people to the stores above.</li>
</ul>
<p>Start on a marketplace where buyers already are, like Fiverr. Get your first 20 to 30 orders and reviews, then expand to platforms where you own the relationship. Launching your own beat store on day one is how most producers burn out with zero sales.</p>

<h2>3. Price so you make money</h2>
<p>The biggest mistake is pricing at $5 to $20 to compete. You can't win a race to the bottom, and cheap prices signal cheap quality. Use a three-tier structure:</p>
<ul>
<li><strong>Basic:</strong> a tagged or MP3 lease. Your entry point.</li>
<li><strong>Standard:</strong> untagged WAV plus stems. Most buyers land here.</li>
<li><strong>Premium:</strong> exclusive rights or full custom production.</li>
</ul>
<p>To skip the guesswork, I built a <a href="/pricing-calculator">free beat pricing calculator</a>. It shows what to charge per tier and how many orders you need to hit an income goal.</p>

<h2>4. Get your first buyers</h2>
<p>No audience? You don't need one to start. Work in this order:</p>
<ol>
<li><strong>Set up one strong storefront</strong> (a Fiverr gig or a clean beat store) with a clear title, real samples, and pricing tiers.</li>
<li><strong>Respond to buyer requests.</strong> On Fiverr, buyers post what they need. A tight five-line response wins orders with zero followers.</li>
<li><strong>Do outreach.</strong> DM active artists on SoundCloud and Instagram who use weak beats, and offer something specific.</li>
<li><strong>Over-deliver on the first few.</strong> Your first reviews are worth more than the money, because they bring the next hundred orders to you.</li>
</ol>

<h2>5. Turn one-time buyers into repeat income</h2>
<p>Producers who make a living stop chasing new buyers and turn a $30 buyer into a $300 client. After every delivery, ask for a review, offer a small next-time discount, and follow up within a week. About a third of my income came from repeat clients I earned this way.</p>

<h2>The shortcut</h2>
<p>Everything above is the free version, and it works. My <a href="/courses">producer courses</a> hold the rest: the gig setup, the copy-paste scripts, the pricing maps by genre, and the 90-day plan I used to reach a full-time income. If you'd rather I look at your setup and tell you what to fix, <a href="/booking">book a 1-on-1 call</a>.</p>
<p>Selling beats online isn't luck, and it doesn't go to the most talented producer. It runs on a system. Build the system and the orders follow.</p>
`,
  },
  {
    slug: "how-much-to-charge-for-beats",
    title: "How Much Should You Charge for Beats? (2026 Pricing Guide)",
    metaTitle: "How Much to Charge for Beats: 2026 Pricing Guide",
    description:
      "How much to charge for beats in 2026: lease vs exclusive pricing, what beginners should charge, and a free calculator to set your tiers and hit your income goal.",
    primaryKeyword: "how much to charge for beats",
    excerpt:
      "Lease vs exclusive, beginner vs pro, and the three-tier structure that stops you leaving money on the table. Includes a free pricing calculator.",
    date: "2026-07-24",
    readingMinutes: 9,
    content: `
<p>"How much should I charge for my beats?" is the question I get most. The answer: more than you think, with a structure that gives buyers a reason to pay more.</p>
<p>Price your beats in 2026 without scaring buyers away or working for free.</p>

<h2>Lease vs exclusive: know the difference</h2>
<p>Your price depends on what the buyer gets:</p>
<ul>
<li><strong>Non-exclusive lease:</strong> the buyer uses the beat, you keep ownership and sell it to others. Lower price, sold many times.</li>
<li><strong>Exclusive rights:</strong> the buyer owns the beat and you remove it from sale. Higher price, because you sell it once.</li>
</ul>
<p>One beat earns more through many leases than a single exclusive. Exclusives bring the big one-time paydays. Keep both on the menu.</p>

<h2>What beginners should charge</h2>
<p>If you're starting with few or no reviews, skip the $5 price. It signals low quality and traps you. A realistic starting structure:</p>
<ul>
<li><strong>Basic lease (MP3):</strong> $20 to $30</li>
<li><strong>Standard lease (WAV + stems):</strong> $40 to $60</li>
<li><strong>Exclusive or custom:</strong> $150+</li>
</ul>
<p>As your reviews and reputation grow, every number goes up. I started near these figures and raised prices as demand grew. The trick is raising them without losing your existing clients, and there's a specific way to do that.</p>

<h2>The three-tier structure that prints money</h2>
<p>Never offer a single price. Offer three tiers. The middle tier anchors the buyer, and the top tier makes the middle look reasonable:</p>
<ol>
<li><strong>Basic:</strong> the entry point that gets people in the door.</li>
<li><strong>Standard:</strong> your best value, where most buyers land. Set this as your target price.</li>
<li><strong>Premium:</strong> exclusive or full production. Few buy it, and it makes Standard feel like a deal.</li>
</ol>

<h2>Don't forget platform fees</h2>
<p>If you sell on a marketplace like Fiverr, it takes a cut. Fiverr keeps 20%, so a $50 order nets you $40. Price with the fee in mind so your take-home matches your goal.</p>

<h2>Use the free calculator</h2>
<p>Instead of guessing, use the <a href="/pricing-calculator">free beat pricing calculator</a> I built. Plug in your tiers and it shows your take-home after fees, projects your monthly revenue, and tells you how many orders you need to hit an income goal. It's the same tool I reference in my courses.</p>

<h2>The bottom line</h2>
<p>Charge based on <strong>outcomes and rights</strong>, not on how long the beat took you. Use three tiers, and raise prices as your proof grows. The genre-by-genre pricing maps and the scripts for raising prices without losing clients live in my <a href="/courses">producer courses</a>.</p>
`,
  },
  {
    slug: "beatstars-vs-fiverr",
    title: "BeatStars vs Fiverr: Where Should You Sell Your Beats in 2026?",
    metaTitle: "BeatStars vs Fiverr: Where to Sell Beats in 2026",
    description:
      "BeatStars vs Fiverr compared for producers: traffic, fees, buyer intent, and which one is better for selling beats when you're starting with no audience.",
    primaryKeyword: "beatstars vs fiverr",
    excerpt:
      "Two very different ways to sell beats. One brings buyers to you, the other makes you bring them. Which to pick depends on where you are.",
    date: "2026-07-24",
    readingMinutes: 8,
    content: `
<p>BeatStars and Fiverr both let you sell beats online, and they work in opposite ways. Pick the wrong one for your situation and you grind for months with nothing to show. Compare them like this.</p>

<h2>The core difference is who brings the buyers</h2>
<p>One sentence captures it:</p>
<ul>
<li><strong>Fiverr brings buyers to you.</strong> People land on Fiverr already looking to spend money, search for a producer, and order. You don't need an audience.</li>
<li><strong>BeatStars makes you bring the buyers.</strong> The storefront looks great, and driving traffic to it from YouTube, Instagram, and TikTok is your job.</li>
</ul>

<h2>Fiverr: pros and cons</h2>
<p><strong>Pros:</strong> built-in buyer traffic, high purchase intent, a review system that compounds, and buyer requests where clients post what they need. The best place to get your first orders with zero following.</p>
<p><strong>Cons:</strong> a 20% fee, more competition on-platform, and you don't own the customer relationship. Fiverr does.</p>

<h2>BeatStars: pros and cons</h2>
<p><strong>Pros:</strong> a professional storefront, lower fees on Pro plans, built for beat licensing, and you grow your own brand and audience.</p>
<p><strong>Cons:</strong> almost no organic traffic. If you can't drive visitors, your store sits empty. Much harder from zero.</p>

<h2>Which one to choose</h2>
<p>My answer after doing both:</p>
<ul>
<li><strong>No audience yet?</strong> Start with <strong>Fiverr.</strong> You need buyers now, and Fiverr has them. Get to 20 to 30 orders and a strong rating first.</li>
<li><strong>Already have an audience</strong> (YouTube subs, an IG following that engages)? <strong>BeatStars</strong> lets you monetize them at higher margin.</li>
<li><strong>Best of all:</strong> use both. Fiverr for cold buyers who find you, BeatStars for the audience you're building. They feed each other.</li>
</ul>

<h2>The mistake to avoid</h2>
<p>Don't pour months into a BeatStars store with no traffic plan, decide selling beats doesn't work, and quit. It works. You picked the platform that needs an audience before you had one.</p>

<p>I built most of my $127k+ on Fiverr because it solved the traffic problem while I was a nobody. The Fiverr gig setup, pricing, and scripts that made it work are in my <a href="/courses">courses</a>. You can also <a href="/booking">book a call</a> and I'll tell you which platform fits your situation.</p>
`,
  },
  {
    slug: "how-to-sell-your-first-beat",
    title: "How to Sell Your First Beat (Even With No Followers)",
    metaTitle: "How to Sell Your First Beat: Beginner's Guide",
    description:
      "A beginner's guide to selling your first beat with no audience: setting up, finding buyers, pricing, and delivering so your first sale leads to many more.",
    primaryKeyword: "how to sell your first beat",
    excerpt:
      "No followers, no reviews, no idea where to start? The path from zero to your first paid beat, and why that first sale is the hardest.",
    date: "2026-07-24",
    readingMinutes: 8,
    content: `
<p>The first beat sale is the hardest one you'll make. The difficulty isn't technical. You have zero proof, zero reviews, and zero audience. Break that seal and the rest gets easier. Start here.</p>

<h2>Step 1: Skip the audience, go where buyers already are</h2>
<p>Forget building a following first. That takes years. Go where people already shop for beats with money in hand. For a beginner, that means a marketplace like <strong>Fiverr</strong>, where buyers search and order. No followers required.</p>

<h2>Step 2: Set up one strong offer</h2>
<p>You don't need ten gigs or a huge catalog. You need <strong>one clean, convincing offer</strong>:</p>
<ul>
<li>A clear title that names what you make, like "I will produce a custom trap beat for you".</li>
<li>Two or three of your <em>best</em> samples, not your whole hard drive.</li>
<li>Three pricing tiers. See our <a href="/blog/how-much-to-charge-for-beats">beat pricing guide</a>.</li>
</ul>

<h2>Step 3: Go get the first order (don't wait for it)</h2>
<p>Most beginners set up a store and wait. Go find the buyer instead:</p>
<ul>
<li><strong>Answer buyer requests.</strong> On Fiverr, buyers post what they need. A specific, confident five-line reply beats a big portfolio.</li>
<li><strong>DM active artists</strong> on SoundCloud and Instagram who make music with weak beats. Offer something specific and low-risk.</li>
<li><strong>Tap your network.</strong> Your first sale can come from someone who already knows you make beats.</li>
</ul>

<h2>Step 4: Over-deliver on that first one</h2>
<p>Your first order matters for the review, not the money. One 5-star review turns a dead storefront into one buyers trust. Deliver fast, communicate well, add a small extra, and ask for feedback.</p>

<h2>Step 5: Turn one sale into a system</h2>
<p>Once you have that first review, the same steps compound. Two reviews pull more orders than one, five more than two. Most producers quit right before this point. Don't.</p>

<h2>Your next move</h2>
<p>For the beginner path step by step, the gig setup, the buyer-request template that landed my first orders, and pricing, start with the <a href="/courses">Fiverr Beat Seller Blueprint</a>. It's built for producers with zero or inconsistent orders. When you're ready to grow past the first sale, the rest of the <a href="/courses">courses</a> take over.</p>
`,
  },
  {
    slug: "how-to-promote-your-beats",
    title: "How to Promote Your Beats and Get Real Clients",
    metaTitle: "How to Promote Your Beats: Get Clients Without Ads",
    description:
      "How to promote your beats as a producer: the content that drives beat sales, using Instagram and YouTube the right way, and turning attention into paying clients.",
    primaryKeyword: "how to promote your beats",
    excerpt:
      "Posting beats into the void doesn't sell them. Promote your beats so attention turns into orders, no ad budget required.",
    date: "2026-07-24",
    readingMinutes: 9,
    content: `
<p>Most producers promote their beats by posting a clip into the void and hoping. Then they decide marketing doesn't work. Marketing works fine. Random posting isn't a strategy. Promote your beats so attention becomes income.</p>

<h2>Promotion needs a destination</h2>
<p>Before you post, you need a destination: a store or gig ready to convert. Promotion without a place to buy is noise. Get your <a href="/blog/how-to-sell-beats-online">selling setup</a> right first, then drive traffic to it.</p>

<h2>The content that sells beats</h2>
<p>The posts that convert do one of three jobs:</p>
<ul>
<li><strong>Show the beat in use.</strong> A snippet with an artist or your own hook over it beats a raw loop. Buyers need to hear a song.</li>
<li><strong>Show the outcome.</strong> A before and after, a quick build, a client's finished track. Proof sells.</li>
<li><strong>Show you're open for business.</strong> A direct call to action: "Beats in bio," "DM for custom." Most producers never say this.</li>
</ul>

<h2>Platform by platform</h2>
<ul>
<li><strong>Instagram Reels and TikTok:</strong> short, hooky clips for reach. Keep them under 15 seconds and lead with the drop.</li>
<li><strong>YouTube:</strong> type-beat SEO still works. Title beats after the artists people search for. This traffic keeps selling while you sleep.</li>
<li><strong>SoundCloud:</strong> still a good place to reach artists and DM them.</li>
</ul>

<h2>The promotion most producers skip</h2>
<p>Direct outreach. Ten thoughtful DMs to active artists who need beats out-convert a hundred random posts. It feels slower, and it's the fastest path to your first clients, because you talk to buyers instead of an algorithm.</p>

<h2>Turn attention into repeat clients</h2>
<p>Getting a client once is marketing. Keeping them holds the money. After a sale, deliver hard, ask for a review, and follow up within a week. A post that leads to one $30 sale is fine. A client who returns four times is a business.</p>

<h2>Go deeper</h2>
<p>Promotion is one piece of a bigger machine: offer, pricing, delivery, retention. My <a href="/courses">Full Freelance Music Producer Playbook</a> includes a 30-day content plan built to drive beat sales, no dancing required, plus the outreach scripts that land clients. You can also <a href="/booking">book a 1-on-1 call</a> and we'll build your promotion plan around your genre and strengths.</p>
`,
  },
  {
    slug: "how-to-make-money-as-a-music-producer",
    title: "How to Make Money as a Music Producer (7 Real Income Streams)",
    metaTitle: "How to Make Money as a Music Producer: 7 Real Ways",
    description:
      "How to make money as a music producer in 2026: seven real income streams beyond selling beats, from services to licensing, ranked by how fast they pay.",
    primaryKeyword: "how to make money as a music producer",
    excerpt:
      "Selling beats is one income stream. There are at least seven. The full map, ranked by how fast each pays, from a producer who's done it.",
    date: "2026-07-24",
    readingMinutes: 10,
    content: `
<p>Making money as a music producer gets reduced to "sell beats." Beats are one income stream of several, and not the fastest to pay. Here are seven ways producers make money, ranked by how fast you can start earning from each.</p>

<h2>1. Selling production services (fastest to real money)</h2>
<p>Most producers sleep on this one. Mixing, mastering, custom production, and ghost production are <strong>services</strong> people pay for now. My order volume tripled the month I added services alongside beats. Mixing converts easier than beats, because the buyer already has a song and a clear need. For money soonest, start here.</p>

<h2>2. Selling beats (leases and exclusives)</h2>
<p>The classic. Lease the same beat many times, sell exclusives for bigger single paydays. Reliable once your storefront and reviews are set. See our full guide on <a href="/blog/how-to-sell-beats-online">how to sell beats online</a>.</p>

<h2>3. Custom and commissioned work</h2>
<p>An artist hires you to produce something specific. Higher ticket than a lease, and it often turns into a repeat relationship, where the real money lives.</p>

<h2>4. Selling sample packs and drum kits</h2>
<p>Package your sounds once and sell them for years. It takes upfront work and some audience to move volume, and it's close to passive once it's live.</p>

<h2>5. Teaching and coaching</h2>
<p>Once you can do the work, people pay you to show them how. Courses, coaching calls, and tutorials scale in a way client work can't, because you sell knowledge, not hours. It's what LoopGem is.</p>

<h2>6. Licensing and sync</h2>
<p>Getting your music into videos, ads, games, and film. Payouts can be large, and the work is slower and more relationship-driven. A long-term play, not a this-month one.</p>

<h2>7. Royalties and publishing</h2>
<p>Producing for artists who release commercially and collecting your share. The most industry-facing path, the slowest to pay, with the largest ceiling.</p>

<h2>How to sequence these</h2>
<p>Don't chase all seven at once. Work in this order:</p>
<ol>
<li>Start with <strong>services and beats</strong> on a marketplace to get cash flow now.</li>
<li>Add <strong>custom work</strong> and turn buyers into repeat clients.</li>
<li>Layer in <strong>sample packs</strong> and <strong>teaching</strong> once you have proof and an audience.</li>
<li>Pursue <strong>licensing</strong> and <strong>royalties</strong> as long-term upside.</li>
</ol>

<h2>Where to start today</h2>
<p>The fastest, most reliable income for most producers is streams #1 and #2, services and beats, sold where buyers already are. That's the focus of my <a href="/courses">producer courses</a>: turning your skills into orders in weeks, not years. For a personalized plan on which streams fit you, <a href="/booking">book a 1-on-1 call</a>.</p>
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
