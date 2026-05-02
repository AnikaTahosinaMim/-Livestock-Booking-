import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import { Toaster } from "react-hot-toast";
import "animate.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Livestock Booking",
  description: "Perfect Quranbani Animals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable}  h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>
        <main className="container mx-auto">
          {children}
          <Toaster />
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
