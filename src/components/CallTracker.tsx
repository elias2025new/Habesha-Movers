'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export default function CallTracker() {
  useEffect(() => {
    const handlePhoneClick = (e: MouseEvent) => {
      // Find the closest anchor tag
      const target = (e.target as Element).closest('a');
      
      // Check if it's a phone link
      if (target && target.href && target.href.startsWith('tel:')) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'phone_call_click',
          category: 'contact',
          label: target.href,
        });
      }
    };

    document.addEventListener('click', handlePhoneClick);

    return () => {
      document.removeEventListener('click', handlePhoneClick);
    };
  }, []);

  return null;
}
