import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "Otávio Portfolio",
  description: "Website to tell about my works and career",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-800 font-bold text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
