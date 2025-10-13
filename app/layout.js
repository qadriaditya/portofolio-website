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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen transition-all duration-700 ${geistSans.variable} ${geistMono.variable} antialiased inverted`}
      >
        <PageTransitionWrapper>{children}</PageTransitionWrapper>
      </body>
    </html>
  );
}
