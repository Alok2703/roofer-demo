import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { DemoBanner } from "@/components/common/demo-banner";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/navigation/navbar";
import { StickyContactBar } from "@/components/navigation/sticky-contact-bar";
import { siteConfig } from "@/content/site.config";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.business.name} — ${siteConfig.business.area}`,
    template: `%s — ${siteConfig.business.name}`,
  },
  description: siteConfig.hero.supportingText,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${jakarta.variable}`}>
      {/* pb-14 reserves the future 56px sticky action bar slot on mobile (Bible §14) */}
      <body className="pb-14 lg:pb-0">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-6 focus:py-3 focus:text-ink focus:shadow-lg"
        >
          Skip to content
        </a>
        <DemoBanner />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <StickyContactBar />
      </body>
    </html>
  );
}
