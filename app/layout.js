import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageTransitionWrapper from "./components/PageTransitionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Portfolio",
  description: "Portfolio with smooth animated background",
  icons: [
    { rel: "icon", url: "/images/Logo.png", sizes: "32x32", type: "image/png" },
    { rel: "icon", url: "/images/Logo.png", sizes: "16x16", type: "image/png" },
    { rel: "shortcut icon", url: "/images/Logo.png" },
    { rel: "apple-touch-icon", url: "/images/Logo.png" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Explicit link tags can help browsers pick up the PNG favicon immediately */}
        <link rel="icon" href="/images/Logo.png" sizes="32x32" />
        <link rel="icon" href="/images/Logo.png" sizes="16x16" />
        <link rel="shortcut icon" href="/images/Logo.png" />
        <link rel="apple-touch-icon" href="/images/Logo.png" />
      </head>
      <body
        className={`min-h-screen transition-all duration-700 ${geistSans.variable} ${geistMono.variable} antialiased inverted`}
      >
        <PageTransitionWrapper>{children}</PageTransitionWrapper>
      </body>
    </html>
  );
}
