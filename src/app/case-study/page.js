import CaseStudyPage from "@/components/pages/CaseStudyPage";

const description =
  "Explore Webkorps case studies showcasing successful software development, mobile app, web, and cloud solutions delivered across industries.";

export const metadata = {
  title: "Case Studies | Webkorps Success Stories",
  description,
  openGraph: {
    title: "Case Studies | Webkorps Success Stories",
    description,
    url: "https://www.webkorps.com/case-study",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | Webkorps Success Stories",
    description,
  },
  alternates: { canonical: "https://www.webkorps.com/case-study" },
};

export default function Page() {
  return <CaseStudyPage />;
}
