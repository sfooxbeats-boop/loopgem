import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LoopGem — Premium Beats, Mixing & Mastering, Courses",
  description:
    "Buy custom beats, professional mixing & mastering, drum kits, producer courses, and book 1-on-1 coaching sessions at LoopGem.",
  metadataBase: new URL("https://loopgem.com"),
  openGraph: {
    title: "LoopGem — Premium Beats, Mixing & Mastering, Courses",
    description:
      "Buy custom beats, professional mixing & mastering, drum kits, producer courses, and book 1-on-1 coaching sessions.",
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
    <html lang="en" className={`${geistSans.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-[#ededed] antialiased">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
