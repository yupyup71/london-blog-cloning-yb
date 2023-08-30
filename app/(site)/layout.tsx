import { getPages } from "@/sanity/sanity-utils";
import "../globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "London Blog",
  description: "Generated by Next + Sanity",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pages = await getPages();
  return (
    <html lang="en">
      <body className="max-w-4xl mx-6 py-3 md:mx-auto md:py-5">
        <main className="py-3 md:py-7">
          <header className="flex items-center justify-between">
            <Link
              href="/"
              className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg md:text-2xl font-bold"
            >
              Home
            </Link>
            <div className="flex items-center gap-5 text-xs md:text-sm text-gray-600">
              {pages.map((page) => (
                <Link
                  key={page._id}
                  href={`/${page.slug}`}
                  className="hover:underline"
                >
                  {page.title}
                </Link>
              ))}
            </div>
          </header>
        </main>
        {children}
      </body>
    </html>
  );
}
