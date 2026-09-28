'use client';

import Link from 'next/link';
import { useEffect, useState, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Home, LogOut, Menu, X } from 'lucide-react';
import { LogoMark } from '@/components/logo';
import { products } from '@/lib/products';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { signOut } from '@/app/(login)/actions';
import { useRouter, usePathname } from 'next/navigation';
import { User } from '@/lib/db/schema';
import useSWR, { mutate } from 'swr';
import { Footer } from '@/components/footer';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/productos', label: 'Producto', children: products },
  { href: '/pricing', label: 'Precios' },
  { href: '/contact', label: 'Contacto' }
];

function ProductMenu({ active }: { active: boolean }) {
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
        Producto
        <ChevronDown className="h-4 w-4" />
      </button>
    );
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className={triggerClass}>
        Producto
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

function UserMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: user } = useSWR<User>('/api/user', fetcher);
  const router = useRouter();

  async function handleSignOut() {
    await signOut();
    mutate('/api/user');
    router.push('/');
  }

  if (!user) {
    return (
      <Button asChild className="rounded-full">
        <Link href="/contact">Agendar demo</Link>
      </Button>
    );
  }

  return (
    <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <DropdownMenuTrigger>
        <Avatar className="cursor-pointer size-9">
          <AvatarImage alt={user.name || ''} />
          <AvatarFallback>
            {user.email
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="flex flex-col gap-1">
        <DropdownMenuItem className="cursor-pointer">
          <Link href="/dashboard" className="flex w-full items-center">
            <Home className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
          </Link>
        </DropdownMenuItem>
        <form action={handleSignOut} className="w-full">
          <button type="submit" className="flex w-full">
            <DropdownMenuItem className="w-full flex-1 cursor-pointer">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Sign out</span>
            </DropdownMenuItem>
          </button>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
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
          <Suspense fallback={<div className="h-9" />}>
            <UserMenu />
          </Suspense>
        </div>

        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setIsNavOpen((open) => !open)}
          aria-label="Abrir menú"
        >
          {isNavOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isNavOpen && (
        <nav className="md:hidden border-t border-gray-200 px-4 py-4 space-y-3 bg-white">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.href} className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  {link.label}
                </p>
                {link.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setIsNavOpen(false)}
                    className={`block pl-3 text-base font-medium ${
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
                className={`block text-base font-medium ${
                  pathname === link.href ? 'text-emerald-600' : 'text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <div className="pt-2">
            <Suspense fallback={<div className="h-9" />}>
              <UserMenu />
            </Suspense>
          </div>
        </nav>
      )}
    </header>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </section>
  );
}
