import LoginPage from "@/components/pages/LoginPage";

export const metadata = {
  title: "Admin Login | Webkorps",
  description: "Secure login for Webkorps admin users.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: { canonical: "https://www.webkorps.com/login" },
};

export default function Page() {
  return <LoginPage />;
}
