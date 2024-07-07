import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "বেকারদের খাজানা",
  description: "বেকারদার খাজানা অ্যাপ এমন একটি প্ল্যাটফর্ম যেখানে যেকোনো বেকার অর্থ উপার্জনের জন্য বাস্তব জীবনের দক্ষতা শিখতে পারে।",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="relative w-full flex items-center justify-center">
          <NavBar />
          
        </div>
     
        {children}
        
        </body>
    </html>
  );
}
