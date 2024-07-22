import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "News Headlines",
  description: "Top 5 Headlines app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="mt-5 mx-5 max-w-md bg-white rounded-xl shadow-md overflow-hidden md:max-w-5xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <h1 className="px-5 text-2xl font-mono  text-slate-500 text-center mt-10 max-h-lg"><a href="/">News Headlines</a></h1>
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Top 5 Headlines</div>
            <div className="mt-2">
              {children}
            </div>
          </div>
        </div>
      </div>
      </body>
    </html>
  );
}
