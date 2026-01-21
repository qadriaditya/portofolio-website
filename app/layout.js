import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageTransitionWrapper from "./components/PageTransitionWrapper";
import SplashScreen from "./components/SplashScreen";
import BackgroundMusic from "./components/BackgroundMusic";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Qadri Aditya  | Portfolio",
  description:
    "Front-end developer and UI/UX designer creating pixel-perfect experiences that convert. Specializing in React, Next.js, and modern web technologies.",
  keywords:
    "Frontend Developer, UI/UX Designer, React, Next.js, Web Development, Digital Design",
  authors: [{ name: "Qadri Aditya" }],
  openGraph: {
    title: "Qadri Aditya Portfolio",
    description:
      "Creating pixel-perfect digital experiences that drive results. Explore my portfolio.",
    type: "website",
    url: "https://yourportfolio.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Qadri Aditya Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qadri Aditya Portfolio",
    description: "Creating pixel-perfect digital experiences that convert.",
    images: ["/og-image.png"],
  },
  icons: [
    { rel: "icon", url: "/Logo.png", sizes: "32x32", type: "image/png" },
    { rel: "icon", url: "/Logo.png", sizes: "16x16", type: "image/png" },
    { rel: "shortcut icon", url: "/Logo.png" },
    { rel: "apple-touch-icon", url: "/Logo.png" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Explicit link tags can help browsers pick up the PNG favicon immediately */}
        <link rel="icon" href="/Logo.png" sizes="32x32" />
        <link rel="icon" href="/Logo.png" sizes="16x16" />
        <link rel="shortcut icon" href="/Logo.png" />
        <link rel="apple-touch-icon" href="/Logo.png" />
      </head>
      <body
        className={`min-h-screen transition-all duration-700 ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SplashScreen />
        <BackgroundMusic />
        <PageTransitionWrapper>{children}</PageTransitionWrapper>
      </body>
    </html>
  );
}
