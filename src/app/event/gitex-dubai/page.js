import EventGitexPage from "@/components/pages/EventGitexPage";

const description =
  "Meet Webkorps at GITEX Dubai to discover enterprise-grade software, cloud, AI/ML, and blockchain solutions.";

export const metadata = {
  title: "Webkorps at GITEX Dubai | Enterprise IT Partner",
  description,
  openGraph: {
    title: "Webkorps at GITEX Dubai | Enterprise IT Partner",
    description,
    url: "https://www.webkorps.com/event/gitex-dubai",
    type: "website",
  },
  alternates: { canonical: "https://www.webkorps.com/event/gitex-dubai" },
};

export default function Page() {
  return <EventGitexPage />;
}
