import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "WebSecur | Secure digital foundations", template: "%s | WebSecur" },
  description: "Premium websites, secure hosting, SSL certificates and practical cyber security for ambitious businesses.",
  keywords: ["web development", "SSL certificates", "secure hosting", "cyber security", "Morocco"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
