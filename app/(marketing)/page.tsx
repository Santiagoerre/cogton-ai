import {
  ArrowRight,
  Check,
  FileSpreadsheet,
  Leaf,
  ShoppingCart
} from 'lucide-react';
import Link from 'next/link';
import { PackagingFlowIllustration } from '@/components/illustrations/packaging-flow';
import { CartonizationVisual } from '@/components/illustrations/cartonization-visual';
import { CatalogueVisual } from '@/components/illustrations/catalogue-visual';
import {
  MeasureIcon,
  OptimizeIcon,
  SaveIcon
} from '@/components/illustrations/step-icons';
import { CtaBanner, CtaLink, SectionHeading } from '@/components/marketing';
import { Marquee } from '@/components/marquee';

const wmsPlatforms = [
  'SAP EWM',
  'Oracle WMS Cloud',
  'Manhattan Active WM',
  'Blue Yonder',
  'Infor WMS',
  'Körber',
  'Microsoft Dynamics 365',
  'NetSuite WMS',
  'Odoo',
  'Deposco',
  'ShipHero',
  'Logiwa'
];

const productCards = [
  {
    href: '/productos/cartonizacion',
    label: 'En cada pedido',
    name: 'Cogton Cartonización',
    tagline: 'La caja correcta para cada pedido.',
    description:
      'Calcula en tiempo real la mejor configuración de empaque y recomienda la caja o el sobre que envía menos aire al menor costo.',
    points: [
      'Vista 3D para el empacador',
      'Respeta frágil, este lado arriba y límites de apilado',
      'Costo de envío conocido antes de despachar'
    ],
    visual: <CartonizationVisual compact />
  },
  {
    href: '/productos/catalogo',
    label: 'En tu catálogo',
    name: 'Cogton Optimizador de Catálogo',
    tagline: 'El embalaje correcto para cada producto.',
    description:
      'Rediseña tu embalaje desde cero: asigna el formato óptimo a cada SKU y define el set ideal de tamaños de caja.',
    points: [
      'Bolsa de papel, mailer, sobre acolchado o caja por SKU',
      'Menos tamaños de caja para comprar y almacenar',
      'Base para el cumplimiento de espacio vacío de la PPWR'
    ],
    visual: <CatalogueVisual />
  }
];

const steps = [
  {
    icon: <MeasureIcon />,
    title: '1. Rediseñamos tu catálogo',
    description:
      'El Optimizador de Catálogo asigna el embalaje correcto a cada SKU y define qué tamaños de caja tener en stock.'
  },
  {
    icon: <OptimizeIcon />,
    title: '2. Elegimos la caja de cada pedido',
    description:
      'Cartonización calcula en tiempo real la mejor opción de ese catálogo para cada pedido.'
  },
  {
    icon: <SaveIcon />,
    title: '3. Ahorrás en cada envío',
    description:
      'Menos aire, menos material y menor costo de flete y peso dimensional.'
  }
];

const reasons = [
  {
    icon: ShoppingCart,
    title: 'Basado en tus pedidos reales',
    description:
      'Trabajamos con tu historial de pedidos y tu catálogo de productos, no con supuestos ni costumbre.'
  },
  {
    icon: FileSpreadsheet,
    title: 'Con o sin integración',
    description:
      'Se conecta a cualquier WMS o ERP por API, o funciona con archivos CSV desde el primer día.'
  },
  {
    icon: Leaf,
    title: 'Listo para la PPWR',
    description:
      'Menos espacio vacío y menos material, con la base para cumplir la normativa europea de embalajes.'
  }
];

export default function HomePage() {
  return (
    <main className="bg-white">
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
                El embalaje correcto,
                <span className="block text-emerald-600">automáticamente</span>
              </h1>
              <p className="mt-4 text-lg text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                La caja justa para cada pedido y el embalaje ideal para cada
                producto. Menos cartón, relleno y flete, conectado a tu WMS.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 flex flex-col sm:flex-row gap-3 sm:justify-center lg:justify-start">
                <CtaLink href="/pricing#cotizar">Solicitar demo</CtaLink>
              </div>
            </div>
            <div className="-mx-3 mt-10 sm:mx-0 sm:mt-12 lg:mt-0 lg:col-span-6 lg:flex lg:items-center">
              <PackagingFlowIllustration />
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 sm:py-10 bg-white border-y border-gray-100">
        <Marquee duration={60}>
          {wmsPlatforms.map((name) => (
            <span
              key={name}
              className="mx-5 text-base font-semibold text-gray-400 sm:mx-8 sm:text-lg whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </Marquee>
      </section>

      <section id="productos" className="bg-gray-50 py-14 sm:py-20 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Productos"
            title="Dos formas de optimizar tu embalaje"
            subtitle="Usalos por separado o juntos: uno decide en cada pedido, el otro rediseña tu catálogo."
          />
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
            {productCards.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow hover:shadow-xl hover:shadow-gray-200/70"
              >
                <div className="flex items-center bg-gradient-to-b from-emerald-50 to-white px-4 pt-6 pb-2 sm:px-10 sm:pt-8 lg:h-[26rem]">
                  <div className="mx-auto w-full max-w-md">{product.visual}</div>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-10">
                  <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                    {product.label}
                  </p>
                  <h3 className="mt-3 text-xl font-bold text-gray-900 sm:text-2xl">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-lg font-medium text-gray-700">
                    {product.tagline}
                  </p>
                  <p className="mt-4 leading-relaxed text-gray-600">
                    {product.description}
                  </p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {product.points.map((point) => (
                      <li key={point} className="flex gap-3 text-gray-700">
                        <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-8 inline-flex items-center font-semibold text-emerald-700">
                    Conocer más
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Cómo funciona"
            title="Mejor juntos"
            subtitle="El catálogo correcto, y la caja correcta de ese catálogo en cada pedido."
          />
          <div className="grid gap-8 sm:gap-10 sm:grid-cols-3 relative">
            <div
              className="hidden sm:block absolute top-7 left-[16.5%] right-[16.5%] border-t-2 border-dashed border-emerald-200"
              aria-hidden
            />
            {steps.map(({ icon, title, description }) => (
              <div key={title} className="relative text-center">
                {icon}
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {title}
                </h3>
                <p className="mx-auto mt-2 max-w-xs text-sm text-gray-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Por qué Cogton"
            title="Diseñado para operadores 3PL y e-commerce"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {reasons.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-600 text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="¿Listo para optimizar tu embalaje?"
        subtitle="Te mostramos cuánto podrías ahorrar con tus pedidos reales."
        href="/pricing#cotizar"
        label="Solicitar demo"
      />
    </main>
  );
}
