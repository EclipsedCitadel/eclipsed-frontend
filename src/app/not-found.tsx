"use client";
import Link from "next/link";          // <-- add this at the top

export default function NotFound() {
  return (
    <html>
      <body className="flex h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">Page not found</h1>
          <p className="text-gray-700 mb-6">
            Sorry, we couldn’t find that page.
          </p>

          {/* GOOD: use <Link />, not <a> */}
          <Link
            href="/"
            className="rounded-lg bg-black px-4 py-2 text-white hover:opacity-90"
          >
            Go home
          </Link>
        </div>
      </body>
    </html>
  );
}
