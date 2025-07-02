import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { CartProvider } from "./contexts/CartContext";
import CartSidebar from "./components/CardSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "EthnicWear – Traditional Indian Clothing Online | Sarees, Lehengas, Kurtas & More",
  description:
    "EthnicWear is your destination for an extensive collection of handcrafted Indian ethnic wear for women, men and kids - lehengas, sarees, kurtas and more! We offer free delivery and easy returns.",
  icons: {
    icon: "/favicon.png", // Path to your favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CartProvider>
          <Header />
          {children}
          <Footer />
          <CartSidebar />
        </CartProvider>
      </body>
    </html>
  );
}
