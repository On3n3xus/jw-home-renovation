import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const siteUrl = "https://jwhomereno.com";

export const metadata: Metadata = {
  title: "JW Home Renovation | Quality Home Improvement in Twin Cities",
  description:
    "JW Home Renovation delivers expert home improvements in the Twin Cities and surrounding suburbs. Kitchens, bathrooms, loft conversions, extensions, and more.",
  keywords: [
    "home renovation",
    "Twin Cities",
    "Minneapolis",
    "Saint Paul",
    "kitchen remodel",
    "bathroom renovation",
    "home improvement",
    "contractor",
  ],
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    title: "JW Home Renovation | Quality Home Improvement",
    description:
      "Expert home improvements in the Twin Cities. Kitchens, bathrooms, extensions, and more — quality craftsmanship you can trust.",
    url: siteUrl,
    siteName: "JW Home Renovation",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/kitchen_renovation.png",
        width: 1200,
        height: 630,
        alt: "JW Home Renovation — Modern kitchen remodel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JW Home Renovation | Quality Home Improvement",
    description:
      "Expert home improvements in the Twin Cities. Kitchens, bathrooms, extensions, and more.",
    images: ["/images/kitchen_renovation.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "JW Home Renovation",
  url: siteUrl,
  telephone: "(612) 845-6852",
  email: "whomereno@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Brooklyn Center",
    addressRegion: "MN",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: { "@type": "GeoCoordinates", latitude: 44.9778, longitude: -93.2650 },
    geoRadius: "50000",
  },
  description:
    "Expert home improvements in the Twin Cities and surrounding suburbs. Kitchens, bathrooms, loft conversions, extensions, restorations, and external works.",
  priceRange: "$$",
  image: `${siteUrl}/images/kitchen_renovation.png`,
  sameAs: ["https://www.instagram.com/jwhomerenovationsllc/"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
