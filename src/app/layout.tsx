import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserratFont = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Refyul",
  description:
    "Refyul provides an on-demand logistics platform for the delivery of fuel and cooking gas in Nigeria, connecting customers directly with licensed stations via a mobile application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${interFont.variable} ${montserratFont.variable} antialiased`}
      >
        <Navbar />
        <main className="font-inter">{children}</main>
      </body>
    </html>
  );
}
