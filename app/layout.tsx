import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";

export const metadata: Metadata = {
  title: "Shapioso",
  description: "Your digital partner",
  icons: [{ rel: "icon", url: "/logo.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className="h-full overflow-hidden antialiased">
      <body className="h-full overflow-hidden bg-canvas font-sans text-body">
        <SmoothScroll>
          <Navbar />
          <div className="pt-[60px] md:pt-[75px]">
            {children}
          </div>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
