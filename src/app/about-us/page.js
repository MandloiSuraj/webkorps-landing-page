import AboutPage from "@/components/pages/AboutPage";

const description =
  "Leading IT solutions provider with 8+ years of experience, offering custom software, web and mobile app development, IT consulting, and digital transformation services to drive business growth and efficiency.";

export const metadata = {
  title: "About Webkorps | Best IT Solutions and IT Services Provider",
  description,
  openGraph: {
    title: "About Webkorps | Best IT Solutions and IT Services Provider",
    description,
    url: "https://www.webkorps.com/about-us",
    type: "website",
    images: [
      {
        url: "https://webkorps-app.s3.us-east-1.amazonaws.com/about-webkorps.webp",
        width: 1200,
        height: 630,
        alt: "About Webkorps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Webkorps | Best IT Solutions and IT Services Provider",
    description,
    images: ["https://webkorps-app.s3.us-east-1.amazonaws.com/about-webkorps.webp"],
  },
  alternates: { canonical: "https://www.webkorps.com/about-us" },
};

export default function Page() {
  return <AboutPage />;
}
