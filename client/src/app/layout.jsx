"use client";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import TopHeader from "@/components/TopHeader/TopHeader";
import Footer from "@/components/Footer/Footer";
import { CartProvider } from "@/contexts/CartContext";
import { UserProvider } from "@/contexts/UserContext";
import "tw-elements-react/dist/css/tw-elements-react.min.css";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`${roboto.className} subpixel-antialiased bg-[#ffffff] h-full`}>
        <UserProvider>
          <CartProvider>
            <TopHeader />
            {children}
            <Footer />
          </CartProvider>
        </UserProvider>
      </body>
    </html>
  );
}
