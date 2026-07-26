import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://websecur.ma"),
  title: { default: "WebSecur | Secure digital foundations", template: "%s | WebSecur" },
  description: "Premium websites, secure hosting, SSL certificates and practical cyber security for ambitious businesses.",
  keywords: ["web development", "SSL certificates", "secure hosting", "cyber security", "Morocco"],
  openGraph: { type: "website", locale: "en_US", url: "/", siteName: "WebSecur", title: "WebSecur | Secure digital foundations", description: "Premium websites, secure hosting, SSL certificates and practical cyber security." },
  twitter: { card: "summary", title: "WebSecur | Secure digital foundations", description: "Premium websites, secure hosting, SSL certificates and practical cyber security." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
