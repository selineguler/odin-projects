import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BuildCOF",
  description: "COF structure builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100`}
      >
        {/* NAVBAR */}
        <nav className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-6 py-3 flex items-center justify-between">
          
          {/* Left: Logo / Home */}
          <Link href="/" className="text-xl font-semibold hover:opacity-80">
            BuildCOF
          </Link>

          {/* Right: Navigation Links */}
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link href="/dashboard" className="hover:text-blue-600">
              My COFs
            </Link>

            <Link href="/auth/login" className="hover:text-blue-600">
              Login
            </Link>

            <Link href="/auth/register" className="hover:text-blue-600">
              Register
            </Link>
          </div>
        </nav>

        {/* Page content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
