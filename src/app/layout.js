import "./globals.css";
import { Inter, Quicksand } from "next/font/google";
import Providers from "@/components/Providers";

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
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${quicksand.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
