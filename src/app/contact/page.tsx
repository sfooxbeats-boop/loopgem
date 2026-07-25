import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Sfooxbeats — LoopGem",
  description:
    "Questions about the courses or 1-on-1 coaching? Send a message and get a reply within 24 hours.",
  alternates: { canonical: "https://loopgem.com/contact" },
  openGraph: {
    title: "Contact Sfooxbeats — LoopGem",
    description: "Questions about the courses or 1-on-1 coaching? Send a message and get a reply within 24 hours.",
    url: "https://loopgem.com/contact",
    siteName: "LoopGem",
    type: "website",
    images: ["/opengraph-image"],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
