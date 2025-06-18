"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({ error }: { error: Error }) {
  // Log the error to the console once on mount
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="flex h-screen items-center justify-center bg-red-50">
        <div className="text-center">
          <h1 className="mb-2 text-4xl font-bold text-red-600">
            Something went wrong
          </h1>
          <p className="mb-6 text-gray-700">Please try again later.</p>

          {/* Use <Link> for internal navigation */}
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
