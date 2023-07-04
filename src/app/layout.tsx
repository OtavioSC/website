import Navbar from "@/components/navbar/Navbar";
import "./globals.css";

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
      <body className="mx-auto max-w-4xl xl:max-w-5xl bg-dark min-h-screen overscroll-y-none">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
