'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { LogoMark } from '@/components/logo';
import { localizeProducts } from '@/lib/products';
import { LanguageToggle } from '@/components/language-toggle';
import { DEMO_BOOKING_URL } from '@/lib/contact';
import { useDict } from '@/lib/i18n/client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { usePathname } from 'next/navigation';
import { Footer } from '@/components/footer';

function useNavLinks() {
  const { header, products } = useDict();
  return [
    { href: '/', label: header.home },
    { href: '/productos', label: header.product, children: localizeProducts(products) },
    { href: '/pricing', label: header.pricing },
    { href: '/contact', label: header.contact }
  ];
}

function ProductMenu({ active }: { active: boolean }) {
  const { header, products: productTexts } = useDict();
  const products = localizeProducts(productTexts);
  // Radix generates ids that differ between server and client here, so the
  // interactive menu only renders after mount (same look before that).
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const triggerClass = `flex items-center gap-1 text-base font-medium outline-none transition-colors ${
    active ? 'text-emerald-600' : 'text-gray-700 hover:text-gray-900'
  }`;

  if (!mounted) {
    return (
      <button type="button" className={triggerClass}>
        {header.product}
        <ChevronDown className="h-4 w-4" />
      </button>
    );
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className={triggerClass}>
        {header.product}
        <ChevronDown className="h-4 w-4 transition-transform [[data-state=open]>&]:rotate-180" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" sideOffset={12} className="w-80 p-2">
        {products.map((product) => (
          <DropdownMenuItem key={product.href} asChild className="cursor-pointer rounded-lg p-3">
            <Link href={product.href} className="flex flex-col items-start gap-1">
              <span className="font-semibold text-gray-900">{product.name}</span>
              <span className="text-sm text-gray-500">{product.tagline}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function DemoButton({ className = '' }: { className?: string }) {
  const { header } = useDict();
  return (
    <a
      href={DEMO_BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex h-10 items-center justify-center rounded-xl bg-gradient-to-b from-emerald-500 to-emerald-600 px-4 text-sm font-semibold text-white shadow-md shadow-emerald-900/15 ring-1 ring-inset ring-white/15 transition-colors outline-none hover:from-emerald-600 hover:to-emerald-700 focus-visible:ring-4 focus-visible:ring-emerald-200 ${className}`}
    >
      {header.bookDemo}
    </a>
  );
}

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();
  const navLinks = useNavLinks();
  const { header } = useDict();

  // Close the mobile menu whenever the route changes.
  useEffect(() => setIsNavOpen(false), [pathname]);

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <LogoMark className="h-7 w-7" />
          <span className="ml-2 text-xl font-semibold text-gray-900">
            Cogton AI
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) =>
            link.children ? (
              <ProductMenu
                key={link.href}
                active={pathname.startsWith(link.href)}
              />
            ) : (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base font-medium transition-colors ${
                pathname === link.href
                  ? 'text-emerald-600'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              {link.label}
            </Link>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <LanguageToggle />
          <DemoButton />
        </div>

        <button
          type="button"
          className="md:hidden -mr-2 p-2 text-gray-700"
          onClick={() => setIsNavOpen((open) => !open)}
          aria-label={isNavOpen ? header.closeMenu : header.openMenu}
          aria-expanded={isNavOpen}
          aria-controls="mobile-nav"
        >
          {isNavOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isNavOpen && (
        <nav
          id="mobile-nav"
          className="md:hidden border-t border-gray-200 px-4 pt-2 pb-4 bg-white max-h-[calc(100dvh-65px)] overflow-y-auto"
        >
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.href} className="py-2">
                <p className="py-1 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  {link.label}
                </p>
                {link.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setIsNavOpen(false)}
                    className={`block py-2.5 pl-3 text-base font-medium ${
                      pathname === child.href ? 'text-emerald-600' : 'text-gray-700'
                    }`}
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsNavOpen(false)}
                className={`block py-2.5 text-base font-medium ${
                  pathname === link.href ? 'text-emerald-600' : 'text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <div className="flex items-center gap-3 pt-3">
            <LanguageToggle />
            <DemoButton className="flex-1" />
          </div>
        </nav>
      )}
    </header>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <section className="flex flex-col min-h-screen">
      <Header />
      {/* Keyed by route so the enter animation replays on every navigation. */}
      <div key={pathname} className="page-enter flex-1">
        {children}
      </div>
      <Footer />
    </section>
  );
}
