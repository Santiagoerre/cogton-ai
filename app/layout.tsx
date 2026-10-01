import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import { I18nProvider } from '@/lib/i18n/client';
import { getDict, getLocale, needsWelcome } from '@/lib/i18n/server';
import { WelcomeDialog } from '@/components/welcome-dialog';

export async function generateMetadata(): Promise<Metadata> {
  const { meta } = await getDict();
  return { title: meta.title, description: meta.description };
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff'
};

const manrope = Manrope({ subsets: ['latin'] });

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const dict = await getDict();
  const showWelcome = await needsWelcome();

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={`bg-white dark:bg-gray-950 text-black dark:text-white ${manrope.className}`}
    >
      <body className="min-h-[100dvh] bg-gray-50">
        <I18nProvider locale={locale} dict={dict}>
          {children}
          <WelcomeDialog initiallyOpen={showWelcome} />
        </I18nProvider>
      </body>
    </html>
  );
}
