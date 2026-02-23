import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"; // ✅ Correct position

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MatchHalf",
  description: "Find meaningful connections with intelligent matchmaking",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          min-h-screen
          bg-[#0b1023]
          text-white
          antialiased
        `}
      >
        {/* ✅ Global Navbar */}
        <Navbar />

        {/* Page Content */}
        {children}
      </body>
    </html>
  );
}