import { cookies, headers } from 'next/headers';
import {
  CONSENT_COOKIE,
  defaultLocale,
  isLocale,
  LOCALE_COOKIE,
  type Locale
} from './config';
import { en } from './en';
import { es } from './es';

const dictionaries = { es, en };

export async function getLocale(): Promise<Locale> {
  const value = (await cookies()).get(LOCALE_COOKIE)?.value;
  if (isLocale(value)) return value;

  // First visit: follow the browser language.
  const accepted = (await headers()).get('accept-language')?.toLowerCase() ?? '';
  const preferred = accepted.split(',')[0]?.trim().slice(0, 2);
  return isLocale(preferred) ? preferred : defaultLocale;
}

export async function getDict() {
  return dictionaries[await getLocale()];
}

/** True until the visitor has answered the welcome (language + cookies) dialog. */
export async function needsWelcome() {
  return !(await cookies()).has(CONSENT_COOKIE);
}
