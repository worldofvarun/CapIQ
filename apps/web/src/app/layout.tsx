import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CapIQ - Intelligent Media Organization for macOS",
  description: "AI-powered photo & video organization tool for macOS. Automate sorting, labeling, and categorization of large media libraries for photographers and videographers.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "CapIQ - Intelligent Media Organization for macOS",
    description: "Streamline your media workflow with AI-powered organization and categorization for photographers & videographers.",
    url: "https://capiq.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
