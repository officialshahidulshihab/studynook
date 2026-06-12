import {
  Geist,
  Geist_Mono,
  Playfair_Display,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const playFair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});
const plusJakerta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "StudyNook",
    template: "%s | StudyNook",
  },
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html
        lang="en"
        
        className={`${playFair.variable} ${plusJakerta.variable}  h-full antialiased`}
      >
        <body className="min-h-full flex flex-col" suppressHydrationWarning>
          <Navbar></Navbar>
          <main className="">{children}</main>
          <Footer></Footer>
          <ToastContainer />
        </body>
      </html>
    </ThemeProvider>
  );
}
