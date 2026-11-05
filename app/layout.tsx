import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const parkinsans = localFont({
  src: "../public/fonts/parkinsans-regular.ttf",
  weight: "400",
  variable: "--font-parkinsans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OneLife Communications & Events Company | Lusaka, Zambia",
  description:
    "One strategic partner. Every discipline your challenge needs. 14 years of regional execution across brand, events, and trade intelligence.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${parkinsans.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
