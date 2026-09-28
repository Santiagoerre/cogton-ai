import Link from 'next/link';
import { LogoMark } from '@/components/logo';
import { products } from '@/lib/products';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center">
              <LogoMark className="h-7 w-7" />
              <span className="ml-2 text-lg font-semibold text-gray-900">
                Cogton AI
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              Optimización de embalaje impulsada por IA para operadores 3PL y
              e-commerce.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Producto
            </h3>
            <ul className="mt-4 space-y-3">
              {products.map((product) => (
                <li key={product.href}>
                  <Link href={product.href} className="text-sm text-gray-500 hover:text-gray-900">
                    {product.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/pricing" className="text-sm text-gray-500 hover:text-gray-900">
                  Precios
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Empresa
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/contact" className="text-sm text-gray-500 hover:text-gray-900">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Cuenta
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/sign-up" className="text-sm text-gray-500 hover:text-gray-900">
                  Crear cuenta
                </Link>
              </li>
              <li>
                <Link href="/sign-in" className="text-sm text-gray-500 hover:text-gray-900">
                  Iniciar sesión
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-8">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Cogton AI. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
