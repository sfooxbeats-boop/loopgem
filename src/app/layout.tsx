import type { Metadata } from "next";
import { Archivo_Black, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: ["400"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "LoopGem — Sell beats. Sell services. Stop guessing.",
    template: "%s",
  },
  description:
    "Real producer education from Sfooxbeats. PDF courses and 1-on-1 coaching that teach you how to turn beats, mixes and production into freelance income — on Fiverr and beyond.",
  metadataBase: new URL("https://loopgem.com"),
  openGraph: {
    title: "LoopGem — Sell beats. Sell services. Stop guessing.",
    description:
      "PDF courses and 1-on-1 coaching for music producers who want to actually get paid online.",
    url: "https://loopgem.com",
    siteName: "LoopGem",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LoopGem — Sell beats. Sell services. Stop guessing.",
    description:
      "PDF courses and 1-on-1 coaching for music producers who want to actually get paid online.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LoopGem",
  alternateName: "Sfooxbeats",
  url: "https://loopgem.com",
  logo: "https://loopgem.com/cover-c1.png",
  founder: {
    "@type": "Person",
    name: "Soufiane Remdane",
    alternateName: "Sfooxbeats",
  },
  sameAs: ["https://instagram.com/Sfoox_beats"],
  description:
    "Real producer education from Sfooxbeats. Courses and 1-on-1 coaching that teach music producers how to sell beats, mixing, and production services online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // GA4 Measurement ID. Not a secret (it ships in the public page HTML),
  // so it's committed as the default; an env var can still override it.
  const gaId = process.env.NEXT_PUBLIC_GA_ID ?? "G-S89ZX3WCP9";
  return (
    <html
      lang="en"
      className={`${archivoBlack.variable} ${manrope.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <div className="grain" aria-hidden="true" />
        <SmoothScroll />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
