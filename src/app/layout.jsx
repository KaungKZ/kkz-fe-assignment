import "./globals.css";
import Providers from "@/src/components/Providers";
import { Inter } from "next/font/google";
import Cursor from "../components/Cursor";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OneNex Clone",
  description: "This is description of OneNex Clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
        suppressHydrationWarning={true}
      >
        <Cursor />
        <Navbar />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
