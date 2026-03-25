import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart";

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata = {
  title: "PG Training | Global Academic Professional Development",
  description: "Senior Higher Education training for PhD candidates, Early-Career Academics, and Heads of Departments for over 25 years.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body>
        <CartProvider>
          {children}
          <Cart />
        </CartProvider>
      </body>
    </html>
  );
}
