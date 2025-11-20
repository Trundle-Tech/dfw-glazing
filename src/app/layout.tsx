import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DFW Glazing Inc. | Commercial Glass Installation Since 2004",
  description: "DFW Glazing offers commercial glass installation services including storefront, curtainwall, aluminum windows & doors, and automatic sliding doors throughout the Dallas-Fort Worth area.",
  keywords: "glass,glazing,dfw glazing,windows,storefront,curtainwall,glass companies,glass subcontractor,fort worth,dallas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
