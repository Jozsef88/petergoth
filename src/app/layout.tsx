import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import CookieConsent from "@/components/CookieConsent";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

config.autoAddCss = false;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL?.startsWith("http")
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.NEXT_PUBLIC_SITE_URL
    ? `https://${process.env.NEXT_PUBLIC_SITE_URL}`
    : "http://localhost:3000";

const siteUrl = new URL(baseUrl);
const heroImage = "/edzo.png";

const seoDescription =
  "Egészségfókuszú személyi edzés Göth Péterrel: helyes testhasználat, fokozatos terhelés, személyre szabott edzéstervek és bizalmi támogatás 40+ célcsoportnak is.";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "Göth Péter | Egészségfókuszú személyi edzés",
  description: seoDescription,
  keywords: [
    "Göth Péter",
    "személyi edző",
    "aqua trainer",
    "egészségfókuszú edzés",
    "személyi edzés Budapest",
    "Arnold Gym",
    "helyes testhasználat",
    "40+ edzés",
    "fájdalommentes mozgás",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/gp-brand.svg",
    shortcut: "/gp-brand.svg",
    apple: "/gp.png",
  },
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: "/",
    title: "Göth Péter | Egészségfókuszú személyi edzés",
    description: seoDescription,
    siteName: "Göth Péter Személyi Edző",
    images: [
      {
        url: heroImage,
        width: 1920,
        height: 1080,
        alt: "Göth Péter - Hozd formába az egészséged",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Göth Péter | Egészségfókuszú személyi edzés",
    description: seoDescription,
    images: [heroImage],
  },
  category: "fitness",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "Göth Péter Személyi Edző",
      url: siteUrl.toString(),
      inLanguage: "hu-HU",
      description: seoDescription,
    },
    {
      "@type": "Person",
      name: "Göth Péter",
      jobTitle: "Személyi edző és aqua trainer",
      description: seoDescription,
      image: new URL(heroImage, siteUrl).toString(),
      url: siteUrl.toString(),
      email: "mailto:petergoth@gmail.com",
      telephone: "+36308519156",
      sameAs: [
        "https://www.facebook.com/peter.goth.5",
        "https://www.instagram.com/peter.goth.5",
        "https://arnoldgym.hu/edzoink",
      ],
      worksFor: {
        "@type": "SportsActivityLocation",
        name: "Arnold Gym",
      },
    },
    {
      "@type": "Service",
      serviceType: "Egészségfókuszú személyi edzés",
      provider: {
        "@type": "Person",
        name: "Göth Péter",
      },
      areaServed: "Budapest",
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: siteUrl.toString(),
        telephone: "+36308519156",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className={`${inter.variable} antialiased`}>
      <body className="bg-[#0B0B0B]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
