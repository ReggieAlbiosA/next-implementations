import "@/styles/globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="min-h-[68px] flex items-center justify-center shadow-[0px_1px_4px_rgba(0,0,0,0.25)] sticky top-0 z-50">
          <nav>
            <ul className="flex gap-x-[20px]">
              <li><Link href="/"><a>Home</a></Link></li>
              <li><Link href="/blogpost"><a>Blog Post</a></Link></li>
            </ul>
          </nav>
        </header>

        <main className="flex flex-col items-center justify-center pt-6">{children}</main>
        

        <footer></footer>
      </body>
    </html>
  );
}


