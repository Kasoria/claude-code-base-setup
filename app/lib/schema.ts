import { siteConfig } from "./metadata";

// ============================================================
// SCHEMA.ORG JSON-LD
// Injected as <script type="application/ld+json"> in the <head>
// via Next.js Script or directly in layout/page components.
//
// Claude Code will replace placeholder values from your Blueprint.
// ============================================================

// ── Person (for freelancers, coaches, consultants) ───────────
// Switch to LocalBusiness if you have a registered business.
export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Your Name",
    url: siteConfig.url,
    jobTitle: "Your Title / Role",
    description: "Your one-line bio for search engines.",
    email: "your@email.com",
    sameAs: [
      "https://linkedin.com/in/yourhandle",
      // Add Twitter, Instagram, etc. if relevant
    ],
    image: `${siteConfig.url}/photo.jpg`,
  };
}

// ── WebSite (enables Google Sitelinks search box) ───────────
export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.tagline,
  };
}

// ── Service (use on /services page, one per service) ─────────
export function serviceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Person",
      name: "Your Name",
      url: siteConfig.url,
    },
  };
}

// ── FAQPage (use on /services or dedicated FAQ page) ─────────
export function faqSchema(
  items: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

// ── BreadcrumbList ────────────────────────────────────────────
export function breadcrumbSchema(
  crumbs: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

// ── JsonLd: see components/JsonLd.tsx ────────────────────────
// Import from there, not here.
export type { }; // keeps this a module
