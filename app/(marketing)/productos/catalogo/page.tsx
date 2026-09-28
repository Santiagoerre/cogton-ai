import type { Metadata } from 'next';
import { Boxes, Check, FileCheck2, Tags } from 'lucide-react';
import {
  CtaBanner,
  ProductHero,
  ResultsSection,
  SectionHeading
} from '@/components/marketing';
import { CatalogueVisual } from '@/components/illustrations/catalogue-visual';

export const metadata: Metadata = {
  title: 'Cogton Optimizador de Catálogo — El embalaje correcto para cada producto'
};

const levels = [
  {
    icon: Tags,
    label: 'Nivel 1',
    title: 'SKUs',
    description:
      'Cada producto recibe su tipo de embalaje óptimo según sus dimensiones, peso, fragilidad y valor.',
    points: [
      'Bolsa de papel, bolsa mailer, sobre acolchado o caja',
      'Detecta productos que hoy van en caja pero podrían viajar seguros en un formato más liviano y barato'
    ]
  },
  {
    icon: Boxes,
    label: 'Nivel 2',
    title: 'Cajas',
    description:
      'Analizamos tu historial de pedidos para encontrar el set ideal de tamaños de caja a tener en stock.',
    points: [
      'Cuántos tamaños necesitás y cuáles',
      'Cuánto ahorra cada cambio en material, flete y espacio vacío'
    ]
  }
];

const deliverables = [
  'Catálogo de embalaje recomendado',
  'Asignación de embalaje por SKU',
  'Caso de ahorro cuantificado',
  'Base para el cumplimiento de espacio vacío de la PPWR'
];

const results = [
  'Menos tamaños de caja para comprar y almacenar',
  'Embalaje más barato por envío',
  'Menos relleno',
  'Un catálogo basado en pedidos reales, no en costumbre'
];

export default function CatalogueOptimiserPage() {
  return (
    <main className="bg-white">
      <ProductHero
        product="Cogton Optimizador de Catálogo"
        title="El catálogo de embalaje correcto, y el embalaje correcto para cada producto."
        intro="El Optimizador de Catálogo rediseña el embalaje de tu empresa desde cero, en dos niveles: qué embalaje usa cada producto y qué tamaños de caja conviene tener en stock."
        visual={<CatalogueVisual />}
      />

      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Dos niveles"
            title="Del producto al catálogo completo"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {levels.map(({ icon: Icon, label, title, description, points }) => (
              <div key={title} className="rounded-2xl border border-gray-200 p-6 sm:p-10">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-widest text-gray-400">
                    {label}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-gray-900">{title}</h3>
                <p className="mt-3 leading-relaxed text-gray-600">{description}</p>
                <ul className="mt-6 space-y-3">
                  {points.map((point) => (
                    <li key={point} className="flex gap-3 text-gray-700">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
              Entregable
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Qué recibís
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Un catálogo de embalaje listo para implementar, con el ahorro
              calculado sobre tus propios pedidos.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {deliverables.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-gray-200 bg-white p-5 font-medium text-gray-900"
              >
                <FileCheck2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ResultsSection title="Un catálogo que ahorra en cada envío" results={results} />

      <CtaBanner
        title="Rediseñemos tu catálogo"
        subtitle="Analizamos tus pedidos y te mostramos cuánto podés ahorrar."
        href="/pricing#cotizar"
        label="Solicitar análisis"
      />
    </main>
  );
}
