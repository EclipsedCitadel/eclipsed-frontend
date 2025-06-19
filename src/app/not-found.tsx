'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';

function NotFoundContent() {
  const params = useSearchParams();
  const shouldThrow = params?.get('error');

  if (shouldThrow) throw new Error('Forced error for testing');

  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-6 text-gray-600">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-black px-4 py-2 text-white hover:opacity-90"
      >
        Go home
      </Link>
    </div>
  );
}

export default function NotFound() {
  return (
    <Suspense fallback={<p className="text-center mt-10">Loading...</p>}>
      <NotFoundContent />
    </Suspense>
  );
}
