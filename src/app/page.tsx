'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#2B2F4A] text-[#F5F5F5] text-center p-8">
      <Image
        src="/logo.png"
        alt="Eclipsed Citadel Logo"
        width={120}
        height={120}
      />

      <h1 className="text-4xl mt-6 font-bold">The Citadel Is Rising</h1>
      <p className="text-xl mt-4 text-[#FF6F3C]">
        We’re forging something powerful for SMBs. Launching soon.
      </p>

      <Link
        href="mailto:contact@eclipsedcitadel.com"
        className="mt-6 inline-block rounded bg-[#FF6F3C] px-6 py-2 text-black font-semibold hover:opacity-90"
      >
        Contact Us
      </Link>
    </main>
  );
}
