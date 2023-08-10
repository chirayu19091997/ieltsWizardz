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

export const metadata: Metadata = {
  title: {
    template: "%s | IELTS Widardz",
    default: "IELTS Widardz",
  },
  category: "education",
  // description: "IELTS Widardz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
