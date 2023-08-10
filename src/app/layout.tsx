import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";

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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
