import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Luffer Anime",
  description: "Website to see information about anime",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <ClerkProvider>
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </ClerkProvider>
      </body>
    </html>
  );
}
