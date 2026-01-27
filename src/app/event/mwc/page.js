import EventMWCPage from "@/components/pages/EventMWCPage";

const description =
  "Visit Webkorps at MWC to learn how our mobile, IoT, and cloud engineering teams build scalable digital products.";

export const metadata = {
  title: "Webkorps at MWC | Mobile & Cloud Engineering Partner",
  description,
  openGraph: {
    title: "Webkorps at MWC | Mobile & Cloud Engineering Partner",
    description,
    url: "https://www.webkorps.com/event/mwc",
    type: "website",
  },
  alternates: { canonical: "https://www.webkorps.com/event/mwc" },
};

export default function Page() {
  return <EventMWCPage />;
}
