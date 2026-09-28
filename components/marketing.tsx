import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function SectionHeading({
  eyebrow,
  title,
  subtitle
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-600">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-lg text-gray-500">{subtitle}</p>}
    </div>
  );
}

export function CtaBanner({
  title,
  subtitle,
  href,
  label
}: {
  title: string;
  subtitle: string;
  href: string;
  label: string;
}) {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-emerald-600 px-8 py-10 sm:flex-row sm:items-center sm:px-12">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
            <p className="mt-2 text-emerald-50">{subtitle}</p>
          </div>
          <Link href={href} className="flex-shrink-0">
            <Button
              size="lg"
              className="rounded-full bg-white text-base text-emerald-700 hover:bg-emerald-50"
            >
              {label}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ResultsSection({
  title,
  results
}: {
  title: string;
  results: string[];
}) {
  return (
    <section className="bg-gray-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
            Resultados
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {results.map((result) => (
            <li
              key={result}
              className="flex gap-3 rounded-xl border border-gray-800 bg-gray-900/60 p-5 text-gray-100"
            >
              <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" />
              {result}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ProductHero({
  product,
  title,
  intro,
  visual
}: {
  product: string;
  title: string;
  intro: string;
  visual: React.ReactNode;
}) {
  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
            {product}
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            {intro}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/pricing#cotizar">
              <Button size="lg" className="w-full rounded-full text-base sm:w-auto">
                Solicitar demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button
                size="lg"
                variant="outline"
                className="w-full rounded-full text-base sm:w-auto"
              >
                Ver precios
              </Button>
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5">{visual}</div>
      </div>
    </section>
  );
}
