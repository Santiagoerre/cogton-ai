import type { Metadata } from 'next';
import {
  ArrowUp,
  Box,
  Boxes,
  FileSpreadsheet,
  Gauge,
  GlassWater,
  Layers,
  MoveDiagonal,
  Plug,
  StretchHorizontal,
  Truck
} from 'lucide-react';
import {
  CtaBanner,
  ProductHero,
  ResultsSection,
  SectionHeading
} from '@/components/marketing';
import { CartonizationVisual } from '@/components/illustrations/cartonization-visual';

export const metadata: Metadata = {
  title: 'Cogton Cartonización — La caja correcta para cada pedido'
};

const steps = [
  {
    title: 'Tus datos',
    description:
      'Dimensiones de los productos, reglas de manejo y las cajas disponibles en la estación de empaque.'
  },
  {
    title: 'Cálculo en tiempo real',
    description:
      'Para cada pedido, Cogton calcula la mejor configuración y recomienda la caja o el sobre que envía menos aire al menor costo.'
  },
  {
    title: 'Vista 3D para el empacador',
    description:
      'El equipo de empaque ve una vista 3D clara de cómo entran los productos, sin tener que adivinar.'
  }
];

const constraints = [
  { icon: ArrowUp, label: 'Este lado arriba' },
  { icon: GlassWater, label: 'Frágil' },
  { icon: Layers, label: 'Límites de aplastamiento y apilado' },
  { icon: MoveDiagonal, label: 'Ítems largos en diagonal' },
  { icon: StretchHorizontal, label: 'Sobres planos para productos delgados' }
];

const goals = [
  {
    icon: Truck,
    title: 'Menor costo de envío',
    description: 'Minimiza flete y cargos por peso dimensional en cada pedido.'
  },
  {
    icon: Box,
    title: 'Menos cajas',
    description: 'Consolida el pedido en la menor cantidad de bultos posible.'
  },
  {
    icon: Gauge,
    title: 'Mayor tasa de llenado',
    description: 'Aprovecha al máximo el volumen de cada caja y reduce el relleno.'
  }
];

const results = [
  'Menos flete y menores cargos por peso dimensional',
  'Menos material de embalaje',
  'Empaque más rápido',
  'Costo de envío conocido antes de despachar'
];

export default function CartonizationPage() {
  return (
    <main className="bg-white">
      <ProductHero
        product="Cogton Cartonización"
        title="La caja correcta para cada pedido."
        intro="Cogton Cartonización calcula en tiempo real la mejor configuración de empaque para cada pedido. Recomienda la caja o el sobre que envía menos aire al menor costo, y le muestra al empacador una vista 3D clara de cómo entran los productos."
        visual={<CartonizationVisual />}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Cómo funciona"
            title="De los datos del pedido a la caja ideal"
          />
          <ol className="grid gap-6 md:grid-cols-3">
            {steps.map(({ title, description }, i) => (
              <li key={title} className="rounded-2xl border border-gray-200 bg-white p-8">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-300 bg-white text-lg font-semibold text-gray-900 shadow-md shadow-emerald-100">
                  {i + 1}
                </span>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{title}</h3>
                <p className="mt-4 leading-relaxed text-gray-600">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Restricciones reales"
            title="Respeta cómo se manejan tus productos"
            subtitle="El motor tiene en cuenta las reglas que tu equipo aplica todos los días."
          />
          <ul className="flex flex-wrap justify-center gap-3">
            {constraints.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-3 font-medium text-gray-800"
              >
                <Icon className="h-5 w-5 text-emerald-600" />
                {label}
              </li>
            ))}
          </ul>

          <h3 className="mt-16 text-center text-xl font-semibold text-gray-900">
            Elegí qué optimizar
          </h3>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {goals.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl border border-gray-200 bg-white p-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="mt-5 text-lg font-semibold text-gray-900">{title}</h4>
                <p className="mt-2 text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Integración"
            title="Con o sin integración"
            subtitle="Empezá como mejor te quede y sumá la integración cuando quieras."
          />
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 p-8">
              <Plug className="h-6 w-6 text-emerald-600" />
              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                API con tu WMS o ERP
              </h3>
              <p className="mt-2 text-gray-600">
                Se conecta a cualquier WMS o ERP por API y devuelve la
                recomendación para cada pedido en tiempo real.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-8">
              <FileSpreadsheet className="h-6 w-6 text-emerald-600" />
              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                Archivos CSV
              </h3>
              <p className="mt-2 text-gray-600">
                Funciona a partir de archivos CSV, sin ninguna integración, para
                arrancar desde el primer día.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ResultsSection title="Lo que ganás con cada pedido" results={results} />

      <CtaBanner
        title="Probalo con tus pedidos"
        subtitle="Te mostramos qué caja elegiría Cogton para tus pedidos reales."
        href="/pricing#cotizar"
        label="Solicitar demo"
      />
    </main>
  );
}
