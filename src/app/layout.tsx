import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import Chatbot from "@/components/Chatbot";
import Highlighter from "@/components/Highlighter";

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
        <Highlighter />
        <Header />
        {children}
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
