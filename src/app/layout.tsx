import type { Metadata } from "next";

import "../styles/globals.css";

import QueryProvider from "@/components/QueryProvider";
import { Providers } from "@/store/provider";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/providers/AuthProvider";

import { Exo_2 } from "next/font/google";

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-exo2",
});

export const metadata: Metadata = {
  title: "OasisAfrik Admin",
  applicationName: "OasisAfrik Admin",
  description:
    "A secure digital admin dashboard for managing OasisAfrik marketplace",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${exo2.variable}`}>
      <body>
        <Toaster />
        <Providers>
          <QueryProvider>
            <AuthProvider>{children}</AuthProvider>
          </QueryProvider>
        </Providers>
      </body>
    </html>
  );
}
