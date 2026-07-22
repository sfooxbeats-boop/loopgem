import type { Metadata } from "next";
import BookingClient from "./BookingClient";

const bookingFaqs = [
  { q: "How is this different from the PDF courses?", a: "The courses are the system, written down. The calls are me applying that system to YOUR profile, YOUR genre, YOUR pricing. If you can implement on your own, the courses are enough. If you want a human to look at your stuff and tell you what to do, that is what the calls are for." },
  { q: "Do you have a refund policy?", a: "If after your call you genuinely feel it did not help, email me within 7 days and I will refund the call in full. No drama." },
  { q: "Do I need to be on Fiverr already?", a: "No. About 30% of the producers I coach are starting from scratch. We will set up your profile from zero on the call." },
  { q: "What if I sell beats on a different platform?", a: "Most of the system carries over — BeatStars, Airbit, Soundee, your own site. We will adapt to whichever platform you actually want to sell on." },
  { q: "Can I bring my own questions?", a: "Yes. The 30-min Starter is mostly me auditing your profile. The 60-min Strategy call splits time between audit + your specific questions. The Blueprint is fully shaped around what you bring." },
  { q: "What if I am a complete beginner producer?", a: "These calls are about SELLING, not about how to mix a 808 or arrange a song. If you have not yet got beats you are willing to charge for, start with FL Studio or YouTube tutorials, then come back." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: bookingFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const metadata: Metadata = {
  title: "1-on-1 Music Producer Coaching — Book a Call | LoopGem",
  description:
    "Get on a call with Sfooxbeats, Top-Rated on Fiverr since 2018. We audit your profile, fix your pricing, and rebuild your outreach — live, on Zoom.",
  alternates: { canonical: "https://loopgem.com/booking" },
  openGraph: {
    title: "1-on-1 Music Producer Coaching — Book a Call | LoopGem",
    description:
      "Get on a call with Sfooxbeats, Top-Rated on Fiverr since 2018. We audit your profile, fix your pricing, and rebuild your outreach — live, on Zoom.",
    url: "https://loopgem.com/booking",
    siteName: "LoopGem",
    type: "website",
  },
};

export default function BookingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BookingClient />
    </>
  );
}
