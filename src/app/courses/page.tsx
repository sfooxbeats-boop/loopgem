import type { Metadata } from "next";
import CoursesClient from "./CoursesClient";

const courseSchemas = [
  {
    title: "Fiverr Beat Seller Blueprint",
    description:
      "The exact gig setup, pricing tiers, scripts, and routines used to generate $127k across 2,019 Fiverr orders.",
    price: "27",
  },
  {
    title: "Sell Music Services on Fiverr",
    description:
      "How to position mixing, mastering, and production as premium services and move from $63 to $200+ average order value.",
    price: "27",
  },
  {
    title: "Full Freelance Music Producer Playbook",
    description:
      "The complete system: beats + services + marketing + retention, for producers going full-time on Fiverr.",
    price: "47",
  },
].map((c) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  name: c.title,
  description: c.description,
  provider: {
    "@type": "Organization",
    name: "LoopGem",
    sameAs: "https://loopgem.com",
  },
  offers: {
    "@type": "Offer",
    price: c.price,
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: "https://loopgem.com/courses",
  },
}));

export const metadata: Metadata = {
  title: "How to Sell Beats on Fiverr — PDF Courses | LoopGem",
  description:
    "3 PDF courses that teach you how to sell beats, mixing, and production services on Fiverr. Built from $127k+ in real orders, not theory. Instant delivery.",
  alternates: { canonical: "https://loopgem.com/courses" },
  openGraph: {
    title: "How to Sell Beats on Fiverr — PDF Courses | LoopGem",
    description:
      "3 PDF courses that teach you how to sell beats, mixing, and production services on Fiverr. Built from $127k+ in real orders.",
    url: "https://loopgem.com/courses",
    siteName: "LoopGem",
    type: "website",
  },
};

export default function CoursesPage() {
  return (
    <>
      {courseSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <CoursesClient />
    </>
  );
}
