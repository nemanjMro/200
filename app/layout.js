import "./globals.css";
import { Poppins } from "next/font/google";
import AuthProvider from "@/providers/AuthProvider";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";

// const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Spin Logic free game casino",
  description: "Play for fun, no real money free games!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" text-white">
      <body className={`${poppins.variable} font-sans text-white bg-[#131419]`}>
        <AuthProvider>
          <nav className="flex flex-col items-center h-20 fixed left-0 top-0 z-20 w-full">
            <div className="w-full h-full">
              <TopBar />
            </div>
          </nav>
          <div className="flex items-center justify-center w-full  bg-[#131419] mt-20">
            {children}
          </div>
        </AuthProvider>
        <Footer />
      </body>
    </html>
  );
}
