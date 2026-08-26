import type { Metadata } from "next";
import Script from "next/script";
import { Syne, Sora, Montserrat } from "next/font/google";
import "./globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-SE1W53DZSK";

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

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-brand",
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
  keywords: [
    "Hapyzo Technologies",
    "Hapyzo",
    "web development",
    "mobile apps",
    "SaaS",
    "Property Manager",
    "Speaklo",
  ],
  authors: [{ name: "Hapyzo Technologies", url: "https://www.hapyzo.com" }],
  creator: "Hapyzo Technologies",
  publisher: "Hapyzo Technologies",
  alternates: {
    canonical: "https://www.hapyzo.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Hapyzo Technologies | Websites, Apps & SaaS Products",
    description:
      "World-class digital products — websites, apps, and SaaS — built by Hapyzo Technologies.",
    url: "https://www.hapyzo.com",
    siteName: "Hapyzo Technologies",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hapyzo Technologies | Websites, Apps & SaaS Products",
    description:
      "Websites, mobile apps, and SaaS products built by Hapyzo Technologies.",
  },
  icons: {
    icon: [
      { url: "/favicon-48.png", type: "image/png", sizes: "48x48" },
      { url: "/icon-96.png", type: "image/png", sizes: "96x96" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hapyzo Technologies",
    url: "https://www.hapyzo.com",
    logo: "https://www.hapyzo.com/icon-512.png",
    sameAs: ["https://www.hapyzo.com"],
  };

  return (
    <html lang="en">
      <body className={`${syne.variable} ${sora.variable} ${montserrat.variable}`}>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <div className="site-bg" aria-hidden />
        <div className="site-grid" aria-hidden />
        <div className="noise" aria-hidden />
        {children}
      </body>
    </html>
  );
}
