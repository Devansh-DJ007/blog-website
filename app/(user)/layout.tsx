import Header from "@/components/Header";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Banner from "@/components/Banner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog-Website",
  description: "Created by Devansh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-full mx-36 md:mx-20 sm:mx-10">
        <Header />
        <Banner />

        {children}
      </body>
    </html>
  );
}
