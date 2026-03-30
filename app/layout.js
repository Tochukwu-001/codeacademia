import { Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const merriWeather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"]
})

export const metadata = {
  title: "Codeacademia | Learn tech fast",
  description: "Connect and learn with other tech enthusiasts",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${merriWeather.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
