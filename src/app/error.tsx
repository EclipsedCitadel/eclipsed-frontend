"use client";
import { useEffect } from "react";

export default function GlobalError({ error }: { error: Error }) {
  // Log the error once on mount
  useEffect(() => console.error(error), [error]);

  return (
    <html>
      <body className="flex h-screen items-center justify-center bg-red-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2 text-red-600">
            Something went wrong
          </h1>
          <p className="text-gray-700 mb-6">
            Please try again later.
          </p>
          <a href="/" className="text-indigo-600 hover:underline">
            ← Back to home
          </a>
        </div>
      </body>
    </html>
  );
}
