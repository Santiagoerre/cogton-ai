import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Cogton AI — Optimización de Embalaje con IA',
  description:
    'Cogton AI ayuda a operadores 3PL y e-commerce a reducir costos de embalaje y desperdicio con optimización impulsada por inteligencia artificial.'
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff'
};

const manrope = Manrope({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`bg-white dark:bg-gray-950 text-black dark:text-white ${manrope.className}`}
    >
      <body className="min-h-[100dvh] bg-gray-50">
        {children}
      </body>
    </html>
  );
}
