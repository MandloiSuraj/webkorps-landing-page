"use client";

import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "@/Utility/AuthContext";

export default function Providers({ children }) {
  return (
    <HelmetProvider>
      <AuthProvider>{children}</AuthProvider>
    </HelmetProvider>
  );
}
