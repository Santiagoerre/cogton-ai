'use client';

import Link from 'next/link';
import { LogoMark } from '@/components/logo';
import { localizeProducts } from '@/lib/products';
import { useDict } from '@/lib/i18n/client';

export function Footer() {
  const { footer, header, products: productTexts } = useDict();
  const products = localizeProducts(productTexts);

  return (
    <footer className="bg-flutes overflow-hidden text-emerald-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center">
              <span className="rounded-sm bg-white p-1"><LogoMark className="h-6 w-6" /></span>
              <span className="ml-2.5 text-lg font-extrabold tracking-tight text-white [font-stretch:125%] [font-variation-settings:'wdth'_125]">
                Cogton<span className="text-emerald-400">.</span>AI
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-emerald-50/60">
              {footer.blurb}
            </p>
          </div>

          <div>
            <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-emerald-300">
              {footer.product}
            </h3>
            <ul className="mt-3 space-y-1 sm:mt-4 sm:space-y-3">
              {products.map((product) => (
                <li key={product.href}>
                  <Link href={product.href} className="inline-block py-1.5 text-sm text-emerald-50/80 hover:text-white sm:py-0">
                    {product.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/pricing" className="inline-block py-1.5 text-sm text-emerald-50/80 hover:text-white sm:py-0">
                  {header.pricing}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-emerald-300">
              {footer.company}
            </h3>
            <ul className="mt-3 space-y-1 sm:mt-4 sm:space-y-3">
              <li>
                <Link href="/contact" className="inline-block py-1.5 text-sm text-emerald-50/80 hover:text-white sm:py-0">
                  {header.contact}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-dashed border-white/15 pt-6 sm:mt-12 sm:pt-8">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-emerald-50/50">
            © {new Date().getFullYear()} Cogton AI. {footer.rights}
          </p>
        </div>
      </div>
      <p
        aria-hidden
        className="pointer-events-none -mb-[0.22em] select-none text-center text-[19vw] font-extrabold leading-none tracking-tighter text-transparent [-webkit-text-stroke:1px_rgb(255_252_245/0.2)] [font-stretch:125%] [font-variation-settings:'wdth'_125]"
      >
        COGTON
      </p>
    </footer>
  );
}
