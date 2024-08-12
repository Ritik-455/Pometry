import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import BackToTopButton from "@/components/common/BackToTopButton";
import React from "react";

export const metadata: Metadata = {
  title: "Pometry",
  description: "Realtime graph analytics at scale",
  metadataBase: new URL("https://pometry-01.vercel.app"),
  openGraph: {
    title: "Pometry",
    description: "Realtime graph analytics at scale",
    images: "/home-meta-img.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  );
}
