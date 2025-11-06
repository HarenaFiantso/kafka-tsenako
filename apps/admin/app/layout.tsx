import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Tsenako | Admin Dashboard",
  description: "Dashboard of the Tsenako application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className} antialiased`}>{children}</body>
    </html>
  );
}
