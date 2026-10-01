'use client';

import { useState } from 'react';
import { CONSENT_COOKIE, LOCALE_COOKIE } from '@/lib/i18n/config';
import { useI18n } from '@/lib/i18n/client';
import { LanguageToggle } from '@/components/language-toggle';

const YEAR = 60 * 60 * 24 * 365;

/** Shown once, on the first visit: pick a language and answer the cookie notice. */
export function WelcomeDialog({ initiallyOpen }: { initiallyOpen: boolean }) {
  const { locale, dict } = useI18n();
  const [open, setOpen] = useState(initiallyOpen);
  const t = dict.welcome;

  if (!open) return null;

  function answer(choice: 'all' | 'essential') {
    document.cookie = `${CONSENT_COOKIE}=${choice}; path=/; max-age=${YEAR}; samesite=lax`;
    document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=${YEAR}; samesite=lax`;
    setOpen(false);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-gray-950/50 p-4 sm:items-center">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="welcome-title"
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-gray-200 sm:p-8"
      >
        <h2 id="welcome-title" className="text-2xl font-bold text-gray-900">
          {t.title}
        </h2>

        <p className="mt-6 text-sm font-medium text-gray-700">{t.languageLabel}</p>
        <LanguageToggle className="mt-2" />

        <p className="mt-6 text-sm leading-relaxed text-gray-600">{t.cookies}</p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row-reverse">
          <button
            type="button"
            onClick={() => answer('all')}
            className="h-11 shrink-0 sm:flex-1 cursor-pointer rounded-xl bg-gradient-to-b from-emerald-500 to-emerald-600 px-4 text-sm font-semibold text-white shadow-md shadow-emerald-900/15 outline-none hover:from-emerald-600 hover:to-emerald-700 focus-visible:ring-4 focus-visible:ring-emerald-200"
          >
            {t.accept}
          </button>
          <button
            type="button"
            onClick={() => answer('essential')}
            className="h-11 shrink-0 sm:flex-1 cursor-pointer rounded-xl border border-gray-300 bg-white px-4 text-sm font-semibold text-gray-900 outline-none hover:bg-gray-50 focus-visible:ring-4 focus-visible:ring-emerald-100"
          >
            {t.essential}
          </button>
        </div>
      </div>
    </div>
  );
}
