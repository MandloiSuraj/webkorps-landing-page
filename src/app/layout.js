import "./globals.css";
import { Inter, Quicksand } from "next/font/google";
import Providers from "@/components/Providers";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const quicksand = Quicksand({ subsets: ["latin"], variable: "--font-quicksand" });

export const metadata = {
  metadataBase: new URL("https://www.webkorps.com"),
  title: {
    default: "Webkorps | IT Services & Solutions Company",
    template: "%s | Webkorps",
  },
  description:
    "Webkorps delivers custom software, mobile, web, cloud, AI/ML, and blockchain solutions for global brands.",
  verification: {
    google: "UYGl-610C-xxgbUA64D62tgIc04PplOM1Stxc7uHjMs",
    yandex: "362c2b802785831e",
    me: ["a6c31e2df43e57f54cb465e8f9c434e8"], // Using Pinterest-style or other verification
  },
  other: {
    "p:domain_verify": "a6c31e2df43e57f54cb465e8f9c434e8",
  },
  openGraph: {
    title: "Webkorps | IT Services & Solutions Company",
    description:
      "Webkorps delivers custom software, mobile, web, cloud, AI/ML, and blockchain solutions for global brands.",
    url: "https://www.webkorps.com",
    siteName: "Webkorps",
    type: "website",
    images: [
      {
        url: "https://webkorps-app.s3.us-east-1.amazonaws.com/it-solutions-and-it-services-provider.webp",
        width: 1200,
        height: 630,
        alt: "Webkorps IT Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@webkorps",
    title: "Webkorps | IT Services & Solutions Company",
    description:
      "Webkorps delivers custom software, mobile, web, cloud, AI/ML, and blockchain solutions for global brands.",
    images: ["https://webkorps-app.s3.us-east-1.amazonaws.com/it-solutions-and-it-services-provider.webp"],
  },
  alternates: {
    canonical: "https://www.webkorps.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="image"
          href="https://webkorps-app.s3.us-east-1.amazonaws.com/webkorps-logo.png"
        />
        {/* Google Tag Manager */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0VLYW27JZ9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments) }
            gtag('js', new Date());
            gtag('config', 'G-0VLYW27JZ9');
          `}
        </Script>
        {/* Clarity Tracking Code */}
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c, l, a, r, i, t, y) {
                c[a] = c[a] || function() {
                    (c[a].q = c[a].q || []).push(arguments);
                };
                t = l.createElement(r);
                t.async = 1;
                t.src = "https://www.clarity.ms/tag/" + i;
                y = l.getElementsByTagName(r)[0];
                y.parentNode.insertBefore(t, y);
            })(window, document, "clarity", "script", "pbakgwazg1");
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${quicksand.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
