import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Archivo, Martian_Mono } from 'next/font/google';
import Script from 'next/script';
import { I18nProvider } from '@/lib/i18n/client';
import { getDict, getLocale, needsWelcome } from '@/lib/i18n/server';
import { WelcomeDialog } from '@/components/welcome-dialog';

export async function generateMetadata(): Promise<Metadata> {
  const { meta } = await getDict();
  return {
    metadataBase: new URL('https://ai.cogton.com'),
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: '/',
      siteName: 'Cogton AI',
      type: 'website'
    },
    twitter: { card: 'summary_large_image' }
  };
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#fffcf5'
};

const gaId = process.env.NEXT_PUBLIC_GA_ID;

// Archivo carries a width axis: body text runs normal, headings run expanded.
const archivo = Archivo({ subsets: ['latin'], axes: ['wdth'], variable: '--font-archivo' });
const martian = Martian_Mono({ subsets: ['latin'], variable: '--font-martian' });

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
      className={`bg-white text-gray-900 font-sans ${archivo.variable} ${martian.variable}`}
    >
      <body className="min-h-[100dvh] bg-gray-50">
        <I18nProvider locale={locale} dict={dict}>
          {children}
          <WelcomeDialog initiallyOpen={showWelcome} />
        </I18nProvider>
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
