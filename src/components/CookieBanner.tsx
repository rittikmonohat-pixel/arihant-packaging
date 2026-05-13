'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

const STORAGE_KEY = 'ap-cookie-ack';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      // localStorage unavailable (private mode, blocked) — leave hidden.
    }
  }, []);

  const acknowledge = () => {
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // ignore — banner will reappear next visit, no PII risk.
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie notice"
      className="fixed bottom-4 left-4 right-4 z-50 sm:left-auto sm:max-w-md bg-ink-900 text-white rounded-2xl shadow-2xl p-5 border border-white/10"
    >
      <button
        type="button"
        onClick={acknowledge}
        aria-label="Dismiss cookie notice"
        className="absolute top-3 right-3 p-1 rounded text-white/70 hover:text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/40"
      >
        <X className="w-4 h-4" />
      </button>
      <p className="text-sm pr-7 leading-relaxed">
        We use cookies for basic site functionality and anonymous analytics — no advertising
        cookies, no third-party tracking. By continuing to use this site you accept this. See our{' '}
        <Link href="/privacy" className="underline hover:text-brand-200">
          Privacy Policy
        </Link>
        .
      </p>
      <button
        type="button"
        onClick={acknowledge}
        className="mt-4 px-4 py-2 rounded-lg bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Got it
      </button>
    </div>
  );
}
