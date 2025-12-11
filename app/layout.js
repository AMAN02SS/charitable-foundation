import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Helping Hands Foundation",
  description: "This website is a crowd-funding platform for needy people",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[radial-gradient(circle,rgba(245,247,247,1)_0%,rgba(158,237,255,1)_100%)] bg-no-repeat bg-cover h-full`}
      >
        <SessionWrapper>
          <Navbar />
          <div className="min-h-[100vh]">{children}</div>
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
