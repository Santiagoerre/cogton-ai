import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const ctaTones = {
  green:
    'bg-gradient-to-b from-emerald-500 to-emerald-600 text-white shadow-md shadow-emerald-900/15 ring-1 ring-inset ring-white/15 hover:from-emerald-600 hover:to-emerald-700 focus-visible:ring-4 focus-visible:ring-emerald-200',
  white:
    'bg-gradient-to-b from-white to-emerald-50 text-emerald-800 shadow-md shadow-emerald-900/15 hover:to-emerald-100 focus-visible:ring-4 focus-visible:ring-white/50'
};

const arrowTones = {
  green: 'bg-white/15 text-white group-hover:bg-white/25',
  white: 'bg-emerald-600/10 text-emerald-700 group-hover:bg-emerald-600/15'
};

type CtaTone = keyof typeof ctaTones;

/** Shared look for primary CTAs: label on the left, arrow in a tile on the right. */
export function ctaClassName(tone: CtaTone = 'green', className?: string) {
  return cn(
    'group inline-flex h-14 w-full shrink-0 items-center justify-between gap-8 rounded-2xl pl-6 pr-2 text-lg font-semibold whitespace-nowrap transition-colors outline-none sm:w-auto',
    ctaTones[tone],
    className
  );
}

export function CtaArrow({ tone = 'green' }: { tone?: CtaTone }) {
  return (
    <span
      className={cn(
        'flex h-10 w-10 items-center justify-center rounded-xl transition-colors',
        arrowTones[tone]
      )}
    >
      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
    </span>
  );
}

export function CtaLink({
  href,
  children,
  tone = 'green',
  className
}: {
  href: string;
  children: React.ReactNode;
  tone?: CtaTone;
  className?: string;
}) {
  return (
    <Link href={href} className={ctaClassName(tone, className)}>
      {children}
      <CtaArrow tone={tone} />
    </Link>
  );
}

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
    <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-12">
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-emerald-600 sm:text-sm">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base text-gray-500 sm:text-lg">{subtitle}</p>}
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
    <section className="py-14 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-emerald-600 px-6 py-8 sm:flex-row sm:px-8 sm:py-10 sm:items-center sm:px-12">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
            <p className="mt-2 text-emerald-50">{subtitle}</p>
          </div>
          <CtaLink href={href} tone="white">
            {label}
          </CtaLink>
        </div>
      </div>
    </section>
  );
}

export function ResultsSection({
  eyebrow,
  title,
  results
}: {
  eyebrow: string;
  title: string;
  results: string[];
}) {
  return (
    <section className="bg-gray-950 py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {results.map((result) => (
            <li
              key={result}
              className="flex gap-3 rounded-xl border border-gray-800 bg-gray-900/60 p-4 sm:p-5 text-gray-100"
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
  visual,
  demoLabel,
  pricingLabel
}: {
  product: string;
  title: string;
  intro: string;
  visual: React.ReactNode;
  demoLabel: string;
  pricingLabel: string;
}) {
  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14 sm:pt-24 sm:pb-16 grid gap-10 sm:gap-12 lg:grid-cols-12 lg:items-center">
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
            <CtaLink href="/pricing#cotizar">{demoLabel}</CtaLink>
            <Link
              href="/pricing"
              className="inline-flex h-14 w-full items-center justify-center rounded-2xl border border-gray-300 bg-white px-6 text-lg font-semibold text-gray-900 transition-colors outline-none hover:border-gray-400 hover:bg-gray-50 focus-visible:ring-4 focus-visible:ring-emerald-100 sm:w-auto"
            >
              {pricingLabel}
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5">{visual}</div>
      </div>
    </section>
  );
}
