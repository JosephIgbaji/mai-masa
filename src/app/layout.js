import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mai Masa",
  description: "No.1 Masa vendor in Nigeria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-4xl mx-auto">
          <div>
            <Header />
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
