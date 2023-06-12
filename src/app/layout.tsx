import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "Otávio Portfolio",
  description: "Website to tell about my works and career",
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: "800"

})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 bg-black">
        <div className={`${poppins.className} text-white`}>
          <Navbar />
          <main className="mb-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
