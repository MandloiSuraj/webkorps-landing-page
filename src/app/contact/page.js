import ContactPage from "@/components/pages/ContactPage";

const description =
  "Get in touch with Webkorps for custom software, mobile app, web, cloud, AI/ML, and blockchain solutions tailored to your business needs.";

export const metadata = {
  title: "Contact Webkorps | Custom IT Solutions Partner",
  description,
  openGraph: {
    title: "Contact Webkorps | Custom IT Solutions Partner",
    description,
    url: "https://www.webkorps.com/contact",
    type: "website",
    images: [
      {
        url: "https://webkorps-app.s3.us-east-1.amazonaws.com/webkorps-contact-us.webp",
        width: 1200,
        height: 630,
        alt: "Contact Webkorps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Webkorps | Custom IT Solutions Partner",
    description,
    images: ["https://webkorps-app.s3.us-east-1.amazonaws.com/webkorps-contact-us.webp"],
  },
  alternates: { canonical: "https://www.webkorps.com/contact" },
};

export default function Page() {
  return <ContactPage />;
}
