import { CtaLink } from '@/components/marketing';
import {
  PackageSearch,
  LineChart,
  Boxes,
  Ruler,
  Truck,
  Leaf
} from 'lucide-react';

const features = [
  {
    icon: Ruler,
    title: 'Análisis de atributos del producto',
    description:
      'Cogton AI no se queda en las dimensiones: con IA identifica fragilidad, flexibilidad y peso de cada SKU (por cámara, escáner o integración con tu catálogo) para entender qué tipo de embalaje necesita.'
  },
  {
    icon: PackageSearch,
    title: 'Motor de recomendación por tipo de embalaje',
    description:
      'El algoritmo empareja cada producto con el tipo correcto — caja, bolsa mailer o sobre acolchado — según sus atributos, no solo su tamaño, en segundos y para cada pedido.'
  },
  {
    icon: Boxes,
    title: 'Catálogo de embalajes configurable',
    description:
      'Cargá tu propio catálogo de cajas, sobres y materiales de relleno, con costos y disponibilidad por almacén, y dejá que el sistema elija entre tus opciones reales.'
  },
  {
    icon: Truck,
    title: 'Optimización de costo de flete',
    description:
      'Al reducir el volumen cúbico de cada envío, tus tarifas de flete dimensional bajan automáticamente — sin renegociar con tu transportista.'
  },
  {
    icon: LineChart,
    title: 'Reportes y analítica de ahorro',
    description:
      'Dashboards en tiempo real que muestran ahorro en material, volumen y flete por cliente, almacén o período, para justificar el ROI ante tu equipo.'
  },
  {
    icon: Leaf,
    title: 'Reducción de huella de embalaje',
    description:
      'Menos cartón, menos relleno y menos viajes de reposición: métricas de sostenibilidad listas para reportarle a tus clientes finales.'
  }
];

export default function FeaturesPage() {
  return (
    <main>
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl">
            Todo lo que necesitás para optimizar tu embalaje
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Desde la medición del producto hasta el reporte de ahorro final,
            Cogton AI cubre todo el proceso de decisión de embalaje.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl border border-gray-200 p-6"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-600 text-white">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-medium text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                ¿Querés ver Cogton AI con tus propios datos?
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Agendá una demo de 20 minutos y te mostramos el ahorro
                proyectado con tu volumen de envíos actual.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
              <CtaLink href="/contact">Solicitar demo</CtaLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
