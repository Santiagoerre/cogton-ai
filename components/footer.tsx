'use client';

import Link from 'next/link';
import { LogoMark } from '@/components/logo';
import { localizeProducts } from '@/lib/products';
import { useDict } from '@/lib/i18n/client';

export function Footer() {
  const { footer, header, products: productTexts } = useDict();
  const products = localizeProducts(productTexts);

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center">
              <LogoMark className="h-7 w-7" />
              <span className="ml-2 text-lg font-semibold text-gray-900">
                Cogton AI
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              {footer.blurb}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              {footer.product}
            </h3>
            <ul className="mt-3 space-y-1 sm:mt-4 sm:space-y-3">
              {products.map((product) => (
                <li key={product.href}>
                  <Link href={product.href} className="inline-block py-1.5 text-sm text-gray-500 hover:text-gray-900 sm:py-0">
                    {product.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/pricing" className="inline-block py-1.5 text-sm text-gray-500 hover:text-gray-900 sm:py-0">
                  {header.pricing}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              {footer.company}
            </h3>
            <ul className="mt-3 space-y-1 sm:mt-4 sm:space-y-3">
              <li>
                <Link href="/contact" className="inline-block py-1.5 text-sm text-gray-500 hover:text-gray-900 sm:py-0">
                  {header.contact}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-100 pt-6 sm:mt-12 sm:pt-8">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Cogton AI. {footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
