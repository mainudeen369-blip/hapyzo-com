import type { Metadata } from "next";
import { Syne, Sora } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hapyzo.com"),
  title: {
    default: "Hapyzo Technologies | Websites, Apps & SaaS Products",
    template: "%s | Hapyzo Technologies",
  },
  description:
    "Hapyzo Technologies designs and ships websites, mobile apps, web platforms, and SaaS products — Property Manager, Speaklo, and custom builds for growing businesses.",
  openGraph: {
    title: "Hapyzo Technologies",
    description:
      "World-class digital products — websites, apps, and SaaS — built by Hapyzo Technologies.",
    url: "https://www.hapyzo.com",
    siteName: "Hapyzo Technologies",
    type: "website",
  },
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${sora.variable}`}>
        <div className="site-bg" aria-hidden />
        <div className="site-grid" aria-hidden />
        <div className="noise" aria-hidden />
        {children}
      </body>
    </html>
  );
}
