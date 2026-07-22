import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "How to Sell Beats on Fiverr — Courses & Coaching | LoopGem",
  description:
    "Sfooxbeats — Top-Rated on Fiverr since 2018, $127k+ generated, 2,019 orders. Real courses and 1-on-1 coaching that teach producers how to sell beats, mixing, and music services online.",
  alternates: { canonical: "https://loopgem.com" },
  openGraph: {
    title: "How to Sell Beats on Fiverr — Courses & Coaching | LoopGem",
    description:
      "Sfooxbeats — Top-Rated on Fiverr since 2018, $127k+ generated, 2,019 orders. Real courses and 1-on-1 coaching for music producers.",
    url: "https://loopgem.com",
    siteName: "LoopGem",
    type: "website",
  },
};

export default function HomePage() {
  return <HomeClient />;
}
