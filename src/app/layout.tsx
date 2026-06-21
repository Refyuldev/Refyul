import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Inter,
  Montserrat,
  Nunito,
  Syne,
} from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserratFont = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const nunitoFont = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const syneFont = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

const BASE_URL = "https://refyul.org";

export const metadata: Metadata = {
  title: {
    default: "Refyul — On-Demand Fuel & Gas Delivery in Lagos",
    template: "%s | Refyul",
  },
  description:
    "Refyul provides an on-demand logistics platform for the delivery of fuel and cooking gas in Nigeria, connecting customers directly with licensed stations via a mobile application.",
  metadataBase: new URL(BASE_URL),
  openGraph: {
    title: "Refyul - On-Demand Fuel & Gas Delivery in Lagos | No More Scarcity",
    description:
      "Order petrol, diesel, and cooking gas via WhatsApp. Fast 18-minute delivery across Lagos, verified vendors, and transparent pricing. Never queue for fuel again.",
    url: BASE_URL,
    siteName: "Refyul",
    images: [
      {
        url: `${BASE_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Refyul - On-Demand Fuel Delivery",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Refyul - On-Demand Fuel & Gas Delivery in Lagos",
    description:
      "Order petrol, diesel, and cooking gas via WhatsApp. Fast delivery across Lagos, verified vendors, and transparent pricing.",
    images: {
      url: `${BASE_URL}/opengraph-image.png`,
      alt: "Refyul - On-Demand Fuel Delivery",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon", rel: "icon" }],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "Refyul",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.webp`,
  description:
    "Refyul provides an on-demand logistics platform for the delivery of fuel and cooking gas in Nigeria.",
  sameAs: [
    "https://twitter.com/refyul",
    "https://instagram.com/refyul",
    "https://linkedin.com/company/refyul",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "Refyul - On-Demand Fuel Delivery",
  url: BASE_URL,
};
const TIKTOK_PIXEL_ID = "D49IHTJC77U2U4VHOJP0";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CNRZY86WLZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CNRZY86WLZ');
        `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${interFont.variable} ${montserratFont.variable} ${nunitoFont.variable} ${syneFont.variable} antialiased`}
      >
        <Script id="tiktok-pixel" strategy="beforeInteractive">
          {`
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
              var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
              ;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
              
              ttq.load('${TIKTOK_PIXEL_ID}');
              ttq.page();
            }(window, document, 'ttq');
          `}
        </Script>

        <main className="font-inter">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
