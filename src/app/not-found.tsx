"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function NotFoundContent() {
  const searchParams = useSearchParams();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white text-center p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Page not found</h1>
      <p className="text-gray-600 mb-6">
        Sorry, the page you’re looking for doesn’t exist.
      </p>

      {/* Optional debug – only shown if ?debug=1 */}
      {searchParams.get("debug") === "1" && (
        <pre className="bg-gray-100 p-4 text-sm text-left rounded">
          {JSON.stringify(Object.fromEntries(searchParams.entries()), null, 2)}
        </pre>
      )}

      <Link
        href="/"
        className="inline-block rounded-xl bg-black px-6 py-3 text-white font-medium hover:opacity-90 transition"
      >
        Back to Home
      </Link>
    </section>
  );
}

export default function NotFound() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NotFoundContent />
    </Suspense>
  );
}
