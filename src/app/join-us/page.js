import JoinUsPage from "@/components/pages/JoinUsPage";

const description =
  "Explore career opportunities at Webkorps and join our team of expert developers, designers, and technologists delivering innovative IT solutions worldwide.";

export const metadata = {
  title: "Careers at Webkorps | Join Our Team",
  description,
  openGraph: {
    title: "Careers at Webkorps | Join Our Team",
    description,
    url: "https://www.webkorps.com/join-us",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Webkorps | Join Our Team",
    description,
  },
  alternates: { canonical: "https://www.webkorps.com/join-us" },
};

export default function Page() {
  return <JoinUsPage />;
}
