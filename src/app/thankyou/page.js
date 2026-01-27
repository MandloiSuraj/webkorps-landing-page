import ThankYouPage from "@/components/pages/ThankYouPage";

export const metadata = {
  title: "Thank You | Webkorps",
  description: "Thank you for contacting Webkorps. Our team will get back to you shortly.",
  alternates: { canonical: "https://www.webkorps.com/thankyou" },
};

export default function Page() {
  return <ThankYouPage />;
}
