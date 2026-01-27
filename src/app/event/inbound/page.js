import EventInboundPage from "@/components/pages/EventInboundPage";

const description =
  "Join Webkorps at Inbound to explore digital transformation through AI/ML, cloud, and custom software solutions.";

export const metadata = {
  title: "Webkorps at Inbound | Digital Transformation Partner",
  description,
  openGraph: {
    title: "Webkorps at Inbound | Digital Transformation Partner",
    description,
    url: "https://www.webkorps.com/event/inbound",
    type: "website",
  },
  alternates: { canonical: "https://www.webkorps.com/event/inbound" },
};

export default function Page() {
  return <EventInboundPage />;
}
