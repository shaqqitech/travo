import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Providers } from "./Provider";
import ThemeChanger from "./ThemeChanger";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Travo",
  description: "Travo, A Travel Guide",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} scrollbar-hide relative`}>
        <Providers>
            <Navbar />
            {children}
          <ThemeChanger />
        </Providers>
      </body>
    </html>
  );
}
