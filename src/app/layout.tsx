import "./globals.css";
import "animate.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer/Footer";
import { Suspense } from "react";
import Loading from "./loading";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="noScroll">
        <Suspense fallback={<Loading />}>
          <Header />
          {children}
          <Footer />
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
