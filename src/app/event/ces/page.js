import EventCESPage from "@/components/pages/EventCESPage";

const description =
  "Meet Webkorps at CES to explore custom software, mobile, AI/ML, and cloud solutions that accelerate your business.";

export const metadata = {
  title: "Webkorps at CES | Technology Solutions Partner",
  description,
  openGraph: {
    title: "Webkorps at CES | Technology Solutions Partner",
    description,
    url: "https://www.webkorps.com/event/ces",
    type: "website",
  },
  alternates: { canonical: "https://www.webkorps.com/event/ces" },
};

export default function Page() {
  return <EventCESPage />;
}
