'use client';

import { useEffect } from 'react';


export default function CallTracker() {
  useEffect(() => {
    const handlePhoneClick = (e: MouseEvent) => {
      // Find the closest anchor tag
      const target = (e.target as Element).closest('a');
      
      // Check if it's a phone link
      if (target && target.href && target.href.startsWith('tel:')) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).dataLayer = (window as any).dataLayer || [];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).dataLayer.push({
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
