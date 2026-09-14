import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import "./globals.css";

// Display face: headings, eyebrows, buttons and nav. The design uses
// Outfit Light 300 through Black 900, so load the variable axis.
const outfit = Outfit({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-outfit",
  display: "swap",
});

// Body face: paragraphs and lists. The design uses DM Sans Regular and
// Medium at optical size 14, so include the opsz axis.
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: "variable",
  axes: ["opsz"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Cube Accountants | Chartered Accountants in Manchester",
    template: "%s | Cube Accountants",
  },
  description:
    "Cube Accountants offers a personal and professional service, advising clients on a range of financial solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Font variables go on <html> so the @theme font tokens in globals.css
  // resolve at :root for every element, including body itself.
  return (
    <html lang="en-GB" className={`${outfit.variable} ${dmSans.variable}`}>
      <head>
        {/* Keep scroll-reveal content visible when JavaScript is unavailable. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
