// src/components/ErrorGate.tsx
'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Dev-only helper – if the URL contains “?error=1” it throws once
 * so that the app renders the global 500 page.
 */
export default function ErrorGate() {
  const params = useSearchParams();
  const shouldThrow = params?.get('error') === '1';

  useEffect(() => {
    if (shouldThrow) {
      // eslint-disable-next-line no-throw-literal
      throw new Error('Intentional test error via ?error=1');
    }
  }, [shouldThrow]);

  return null; // renders nothing
}
