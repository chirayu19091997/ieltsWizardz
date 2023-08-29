import "./globals.css";
import "animate.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer/Footer";
import { Metadata } from "next";
import Chatbot from "@/components/Chatbot/Chatbot";
import Highlighter from "@/components/Highlighter";
import { Suspense } from "react";
import Loading from "./loading";
import { Toaster } from "react-hot-toast";
import GoogleAnalytics from "@/utils/GoogleAnalytics";

export const metadata: Metadata = {
  openGraph: {
    siteName: "IELTS Wizardz",
    url: "www.ieltswizardz.com",
    title: "IELTS Wizardz",
    description:
      "Explore our study abroad education services, including IELTS, TOEFL, SAT, PTE preparation, document drafting, and admission assistance for international students. Find the perfect programs and universities for your global learning journey.",
  },
  applicationName: "IELTS Wizardz",
  title: {
    template: "%s | IELTS Wizardz",
    default: "IELTS Wizardz",
  },
  category: "education",
  keywords: [
    "study abroad",
    "education services",
    "international students",
    "IELTS preparation",
    "TOEFL preparation",
    "SAT preparation",
    "PTE preparation",
    "document drafting",
    "admission assistance",
    "study abroad programs",
    "university admissions",
    "student support",
  ],
  viewport: "width=device-width, initial-scale=1.0",
  creator: "Chirayu Agrawal",
  publisher: "Amita Garg",
  icons: "/logo.png",
  description:
    "Explore our study abroad education services, including IELTS, TOEFL, SAT, PTE preparation, document drafting, and admission assistance for international students. Find the perfect programs and universities for your global learning journey.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className="noScroll">
        <Suspense fallback={<Loading />}>
          <Highlighter />
          <Header />
          {children}
          <Footer />
          <Chatbot />
        </Suspense>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              backgroundColor: "#e66304",
              color: "#ffffff",
            },
          }}
          reverseOrder={false}
        />
      </body>
    </html>
  );
}
