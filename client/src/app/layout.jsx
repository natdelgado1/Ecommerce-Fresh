"use client";
import "./globals.css";
import TopHeader from "@/components/TopHeader/TopHeader";
import Footer from "@/components/Footer/Footer";
import { CartProvider } from "@/contexts/CartContext";
import { UserProvider } from "@/contexts/UserContext";
import "tw-elements-react/dist/css/tw-elements-react.min.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} >
        <UserProvider>
          <CartProvider>
            <div className="min-h-screen bg-[#FFF5E1]">
            <TopHeader />
            <div className="container mx-auto px-4 py-8">
            {children}
            </div>
            <Footer />
          </div>
          </CartProvider>
        </UserProvider>
      </body>
    </html>
  );
}
