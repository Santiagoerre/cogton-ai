export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';
export const LOCALE_COOKIE = 'locale';
export const CONSENT_COOKIE = 'cookie_consent';

export const isLocale = (value: unknown): value is Locale =>
  locales.includes(value as Locale);
