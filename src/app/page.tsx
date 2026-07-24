import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "How to Sell Beats Online — Courses for Music Producers | LoopGem",
  description:
    "Learn how to sell beats online and make money as a music producer. Courses and 1-on-1 coaching from Sfooxbeats — Top-Rated on Fiverr since 2018, $127k+ generated across 2,019 orders.",
  alternates: { canonical: "https://loopgem.com" },
  openGraph: {
    title: "How to Sell Beats Online — Courses for Music Producers | LoopGem",
    description:
      "Learn how to sell beats online and make money as a music producer. Courses and coaching from Sfooxbeats — Top-Rated on Fiverr, $127k+ generated.",
    url: "https://loopgem.com",
    siteName: "LoopGem",
    type: "website",
  },
};

export default function HomePage() {
  return <HomeClient />;
}
