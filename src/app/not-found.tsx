'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function ComingSoonContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email'); // example use (not required)

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#2B2F4A] text-[#F5F5F5] p-6 text-center">
      <img src="/nova-animated.gif" alt="Nova" className="w-28 h-28 mb-6 rounded-full" />
      <h1 className="text-3xl md:text-5xl font-bold font-[Montserrat] mb-4">
        Eclipsed Citadel is Coming Soon
      </h1>
      <p className="text-lg max-w-xl text-[#F5F5F5]/80 mb-6">
        We’re building something powerful—AI-crafted content, delivered like clockwork.
        Launching soon. Be the first to know.
      </p>
      <form className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded-md text-black w-full flex-1"
        />
        <button
          type="submit"
          className="bg-[#FF6F3C] px-4 py-2 rounded-md text-white hover:opacity-90 transition"
        >
          Notify Me
        </button>
      </form>
    </main>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<div className="text-white text-center py-20">Loading homepage...</div>}>
      <ComingSoonContent />
    </Suspense>
  );
}
