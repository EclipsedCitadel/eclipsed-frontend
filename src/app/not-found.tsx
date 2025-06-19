'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function NotFoundContent() {
  const searchParams = useSearchParams();
  const triggerError = searchParams.get('error');

  if (triggerError) throw new Error('Simulated 500 error for testing.');

  return (
    <div className="text-center py-20 px-6">
      <h1 className="text-4xl font-bold mb-4">404 – Page Not Found</h1>
      <p className="text-lg text-gray-500 mb-6">
        Sorry, the page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/" className="text-white bg-[#FF6F3C] px-4 py-2 rounded hover:opacity-90">
        Back to Homepage
      </Link>
    </div>
  );
}

export default function NotFound() {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading 404 page...</div>}>
      <NotFoundContent />
    </Suspense>
  );
}
