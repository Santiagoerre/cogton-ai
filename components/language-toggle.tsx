'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { LOCALE_COOKIE, locales, type Locale } from '@/lib/i18n/config';
import { useI18n } from '@/lib/i18n/client';

export function LanguageToggle({ className = '' }: { className?: string }) {
  const { locale, dict } = useI18n();
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  function select(next: Locale) {
    if (next === locale) return;
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
    startTransition(() => router.refresh());
  }

  return (
    <div
      role="group"
      aria-label={dict.header.switchLabel}
      aria-busy={pending}
      className={`inline-flex h-10 items-center rounded-xl border border-gray-200 bg-white p-0.5 text-sm font-semibold ${className}`}
    >
      {locales.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => select(code)}
          aria-pressed={code === locale}
          lang={code}
          className={`h-full cursor-pointer rounded-[10px] px-2.5 uppercase outline-none transition-colors focus-visible:ring-2 focus-visible:ring-emerald-300 ${
            code === locale
              ? 'bg-emerald-600 text-white'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
