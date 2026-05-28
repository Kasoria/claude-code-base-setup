import type { Metadata } from "next";

// ============================================================
// SITE CONFIG
// Claude Code will replace these values from your Blueprint
// ============================================================
export const siteConfig = {
  name: "Your Name",
  tagline: "Your one-line value proposition",
  url: "https://yoursite.com", // no trailing slash
  locale: "en_US",
  twitterHandle: "@yourhandle", // optional, remove if unused
  defaultOgImage: "/og-image.png", // place a 1200×630px image in /public
};

// ============================================================
// generateMeta()
// Use this on every page instead of writing metadata manually.
//
// Usage:
//   export const metadata = generateMeta({
//     title: "About",
//     description: "Your about page description.",
//     path: "/about",
//   });
// ============================================================
export function generateMeta({
  title,
  description,
  path = "",
  ogImage,
  noIndex = false,
}: {
  title?: string;
  description: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const image = ogImage ?? siteConfig.defaultOgImage;
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.tagline}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      ...(siteConfig.twitterHandle && {
        creator: siteConfig.twitterHandle,
        site: siteConfig.twitterHandle,
      }),
    },
  };
}
