import { Poppins } from "next/font/google";
// import TopBar from "@/components/TopBar";
import "../styles/Main.scss";

const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* <nav>
          <div>
            <TopBar />
          </div>
        </nav> */}
        <div>{children}</div>
      </body>
    </html>
  );
}
