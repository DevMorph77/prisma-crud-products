import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  title: "Products Homepage",
  description: "Created by DevMorph777",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body >
        {children}
        <Footer/>
      </body>

    </html>
  );
}
