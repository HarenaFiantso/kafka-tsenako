import type { Metadata } from "next";
import { ReactNode } from "react";
import { Raleway } from "next/font/google";

import { Footer, Navbar } from "@/components";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Tsenako",
  description: "Client side of the Tsenako application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className} antialiased`}>
        <main className="mx-auto p-4 sm:px-0 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
