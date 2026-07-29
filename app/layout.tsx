import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://proguardweb.com"),
  title: { default: "ProGuard Web | Premium Website Development & Cyber Security", template: "%s | ProGuard Web" },
  description: "ProGuard Web builds premium websites, secure hosting infrastructure, SSL implementation and cybersecurity solutions for modern businesses.",
  keywords: ["web development", "SSL certificates", "secure hosting", "cyber security", "Morocco"],
  openGraph: { type: "website", locale: "en_US", url: "/", siteName: "ProGuard Web", title: "ProGuard Web | Premium Website Development & Cyber Security", description: "ProGuard Web builds premium websites, secure hosting infrastructure, SSL implementation and cybersecurity solutions for modern businesses." },
  twitter: { card: "summary", title: "ProGuard Web | Premium Website Development & Cyber Security", description: "ProGuard Web builds premium websites, secure hosting infrastructure, SSL implementation and cybersecurity solutions for modern businesses." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
