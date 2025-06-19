'use client';

import Link from 'next/link';
import { Suspense } from 'react';

function NotFoundContent() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#2B2F4A] text-[#F5F5F5] p-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 font-[Montserrat]">
        Lost in the Citadel
      </h1>
      <p className="text-lg max-w-xl mb-6 text-[#F5F5F5]/80">
        The page you&apos;re looking for doesn&apos;t exist—or it&apos;s deep in the shadows.
      </p>
      <Link
        href="/"
        className="bg-[#FF6F3C] px-6 py-3 rounded-md text-white font-semibold hover:opacity-90 transition"
      >
        Return Home
      </Link>
    </main>
  );
}

export default function NotFound() {
  return (
    <Suspense fallback={<div className="text-center text-[#F5F5F5] p-6">Loading...</div>}>
      <NotFoundContent />
    </Suspense>
  );
}
