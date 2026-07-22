import type { Metadata } from "next";
import PricingCalculatorClient from "./PricingCalculatorClient";

export const metadata: Metadata = {
  title: "Beat Pricing Calculator — How Much to Charge on Fiverr | LoopGem",
  description:
    "Free calculator: figure out your Fiverr package pricing, project your monthly revenue, and see how many orders you need to hit your income goal.",
  alternates: { canonical: "https://loopgem.com/pricing-calculator" },
  openGraph: {
    title: "Beat Pricing Calculator — How Much to Charge on Fiverr | LoopGem",
    description:
      "Free calculator: figure out your Fiverr package pricing, project your monthly revenue, and see how many orders you need to hit your income goal.",
    url: "https://loopgem.com/pricing-calculator",
    siteName: "LoopGem",
    type: "website",
  },
};

export default function PricingCalculatorPage() {
  return <PricingCalculatorClient />;
}
