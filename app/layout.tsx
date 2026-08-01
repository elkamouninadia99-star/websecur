import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://proguardweb.com";
const siteName = "ProGuard Web";
const description = "ProGuard Web builds premium websites, secure hosting infrastructure, SSL implementation and cybersecurity solutions for modern businesses.";

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#07111f",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ProGuard Web | Premium Website Development & Cyber Security",
    template: "%s | ProGuard Web",
  },
  description,
  applicationName: siteName,
  keywords: ["website development", "SSL certificates", "cybersecurity", "website maintenance", "performance optimization", "secure hosting", "Morocco"],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "technology",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/favicon.ico", type: "image/x-icon" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName,
    title: "ProGuard Web | Premium Website Development & Cyber Security",
    description,
    images: [{ url: "/Image/cyber-shield.png", alt: "ProGuard Web cyber security shield" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ProGuard Web | Premium Website Development & Cyber Security",
    description,
    images: [{ url: "/Image/cyber-shield.png", alt: "ProGuard Web cyber security shield" }],
  },
  appleWebApp: { capable: true, statusBarStyle: "black-translucent", title: siteName },
  formatDetection: { email: false, address: false, telephone: false },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      url: siteUrl,
      logo: `${siteUrl}/Image/cyber-shield.png`,
      description,
      email: "contact@proguardweb.com",
      sameAs: ["https://linkedin.com", "https://github.com"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteName,
      url: siteUrl,
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: siteName,
      url: siteUrl,
      image: `${siteUrl}/Image/cyber-shield.png`,
      description,
      email: "contact@proguardweb.com",
      telephone: "+212600000000",
      areaServed: "Worldwide",
      serviceType: ["Website Development", "SSL Certificates", "Cybersecurity", "Website Maintenance", "Performance Optimization"],
      parentOrganization: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "ProGuard Web | Premium Website Development & Cyber Security",
      description,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#service` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></body></html>;
}
