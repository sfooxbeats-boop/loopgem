import type { Metadata } from "next";
import { Archivo_Black, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

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
  title: "LoopGem — Sell beats. Sell services. Stop guessing.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivoBlack.variable} ${manrope.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <div className="grain" aria-hidden="true" />
        <SmoothScroll />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
