import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { personSchema, webSiteSchema } from "@/app/lib/schema";
import { siteConfig } from "@/app/lib/metadata";

// ── OPTIONAL: Cookie Consent Banner ──────────────────────────
// Claude Code will ask you whether you need a cookie banner.
// If yes, uncomment the line below to activate it. ↓
// import CookieConsentBanner from "@/components/CookieConsentBanner";

// ── Fonts: served locally by Next.js — no Google CDN request ─
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// ── Base metadata (overridden per page via generateMeta()) ────
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.tagline,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* Site-wide schema — Person + WebSite on every page */}
        <JsonLd data={personSchema()} />
        <JsonLd data={webSiteSchema()} />

        {/* Cookie Banner — uncomment import above to activate */}
        {/* <CookieConsentBanner /> */}

        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
