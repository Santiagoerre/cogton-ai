import { Check, Plus } from 'lucide-react';
import { CtaBanner, SectionHeading } from '@/components/marketing';
import { SavingsCalculator } from './savings-calculator';
import { QuoteForm } from './quote-form';

const pricingFactors = [
  {
    title: 'Volumen.',
    description:
      'Cuántos envíos pasan por Cogton AI. Más volumen, menor costo por envío.'
  },
  {
    title: 'Almacenes.',
    description: 'En cuántos sitios usás Cogton AI.'
  },
  {
    title: 'Catálogo de embalaje.',
    description: 'Qué cajas, bolsas mailer y sobres acolchados usás hoy.'
  },
  {
    title: 'Integración.',
    description:
      'Cómo nos conectamos a tus sistemas: API, tu WMS / ERP o carga de archivos.'
  }
];

const steps = [
  {
    title: 'Llamada',
    description:
      'Demo de Cogton AI con tus productos y repaso de los datos que necesitamos para simular tu caso de negocio.'
  },
  {
    title: 'Caso de negocio',
    description:
      'Simulamos el ahorro sobre tus pedidos reales y volvemos con los números y el precio.'
  },
  {
    title: 'Piloto',
    description:
      'Medimos el ahorro en tu almacén, contra tu operación actual, antes de extenderlo al resto.'
  }
];

const faqs = [
  {
    question: '¿Mi WMS no hace esto ya?',
    answer:
      'La mayoría de los WMS asignan el embalaje con reglas fijas o lo dejan a criterio del operario. Cogton AI analiza los atributos de cada producto — fragilidad, flexibilidad, peso y dimensiones — y elige el tipo y tamaño de embalaje correcto para cada pedido.'
  },
  {
    question: '¿Qué cambia en mi WMS y en el almacén?',
    answer:
      'Tu WMS sigue igual: solo recibe la recomendación de embalaje de cada pedido. En el almacén, el equipo de empaque sabe qué caja, bolsa mailer o sobre usar, sin tener que adivinar.'
  },
  {
    question: '¿Cuáles son las opciones de integración?',
    answer:
      'Nos conectamos por API, directamente con tu WMS / ERP o mediante carga de archivos. Lo definimos juntos en la primera llamada según tus sistemas.'
  },
  {
    question: '¿Qué datos necesitan para empezar?',
    answer:
      'Tu catálogo de productos (dimensiones y peso), los embalajes que usás hoy y un historial de pedidos. Con eso armamos la simulación.'
  },
  {
    question: '¿Cómo se calcula el ahorro?',
    answer:
      'Comparamos el embalaje que usás hoy con el que recomienda Cogton AI para los mismos pedidos: material, volumen cúbico y costo de flete.'
  },
  {
    question: '¿Puedo probarlo antes de contratar?',
    answer:
      'Sí. Arrancamos con un caso de negocio sobre tus datos y un piloto en tu almacén, para que veas el ahorro antes de extenderlo.'
  }
];

const highlights = [
  'Sin reemplazar tu WMS',
  'Caso de negocio con tus datos',
  'Piloto antes de escalar'
];

export default function PricingPage() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
            Precios
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            ROI desde el primer envío
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
            Pagás centavos por cada pedido y ahorrás hasta un 18% en flete.
            Desde <span className="whitespace-nowrap">$80 / mes</span> para
            optimizar tu embalaje con IA.
          </p>
          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Check className="h-4 w-4 text-emerald-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="cotizar" className="bg-gray-950 py-16 sm:py-20 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <QuoteForm />
          </div>
          <div className="rounded-2xl border border-gray-800 bg-gray-900/60 p-8 sm:p-10 lg:col-span-5 lg:sticky lg:top-24">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Cómo se define tu precio
            </h2>
            <p className="mt-3 text-gray-300">Cuatro cosas definen tu precio.</p>
            <ul className="mt-8 space-y-6">
              {pricingFactors.map(({ title, description }) => (
                <li key={title} className="flex gap-4">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-400" />
                  <p className="text-gray-100 leading-relaxed">
                    <span className="font-semibold text-white">{title}</span>{' '}
                    {description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="¿Cuánto podrías ahorrar?"
            subtitle="Mové el volumen y cargá tu costo de flete promedio."
          />
          <SavingsCalculator />
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Proceso"
            title="Cómo empezamos"
            subtitle="De la primera llamada al piloto en tu almacén, en tres pasos."
          />
          <ol className="grid gap-6 md:grid-cols-3">
            {steps.map(({ title, description }, i) => (
              <li
                key={title}
                className="rounded-2xl border border-gray-200 bg-white p-8"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-300 bg-white text-lg font-semibold text-gray-900 shadow-md shadow-emerald-100">
                  {i + 1}
                </span>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {title}
                </h3>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold text-emerald-600">FAQ</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              ¿Preguntas?
            </h2>
          </div>
          <div className="divide-y divide-gray-200 border-b border-gray-200 lg:col-span-8">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="group py-7 first:pt-0">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-semibold text-gray-900 sm:text-xl [&::-webkit-details-marker]:hidden">
                  {question}
                  <Plus className="mt-1 h-5 w-5 flex-shrink-0 text-gray-700 transition-transform duration-200 group-open:rotate-45" />
                </summary>
                <p className="mt-4 max-w-2xl leading-relaxed text-gray-600">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Calculemos tu ahorro real"
        subtitle="Armamos el caso de negocio con tus pedidos."
        href="#cotizar"
        label="Agendar una llamada"
      />
    </main>
  );
}
