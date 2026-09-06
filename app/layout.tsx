import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = "https://proguardweb.com";
const siteName = "ProGuard Web";
const title = "ProGuard Web | Premium Web Development & Website Security";
const description = "ProGuard Web builds premium, high-performance websites and provides SSL, security, maintenance, and optimization services for businesses worldwide.";
const ogImage = `${siteUrl}/og-image.jpg`;
const googleAnalyticsId = "G-R207GL2RWR";

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#03101d",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: siteName,
  keywords: ["web development", "website security", "SSL installation", "website maintenance", "performance optimization", "high-performance websites", "website optimization", "cybersecurity services"],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "technology",
  alternates: { canonical: siteUrl },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title,
    description,
    images: [{ url: ogImage, width: 1200, height: 630, alt: "ProGuard Web website security and web development" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
  appleWebApp: { capable: true, statusBarStyle: "black-translucent", title: siteName },
  formatDetection: { email: false, address: false, telephone: false },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#localbusiness`,
  name: siteName,
  url: siteUrl,
  description,
  email: "contact@proguardweb.com",
  telephone: "+212625727351",
  areaServed: "Worldwide",
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "ProGuard Web services",
    itemListElement: ["Website Development", "Website Security", "SSL Installation", "Website Maintenance", "Performance Optimization"].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />{process.env.NODE_ENV === "production" && <><Script src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`} strategy="afterInteractive" /><Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag("js", new Date()); gtag("config", "${googleAnalyticsId}");`}</Script></>}</body></html>;
}
