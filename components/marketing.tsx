import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import { DEMO_BOOKING_URL } from '@/lib/contact';
import { cn } from '@/lib/utils';

// Every converting action uses the reserved action color, on light or dark
// surfaces alike, so the eye learns one thing: orange = next step.
const ctaTones = {
  light:
    'bg-action text-white shadow-press hover:bg-action-hover focus-visible:ring-4 focus-visible:ring-action/25',
  dark:
    'bg-action text-white shadow-press hover:bg-action-hover focus-visible:ring-4 focus-visible:ring-white/40'
};

const arrowTone = 'bg-white/15 text-white group-hover:bg-white/25';

type CtaTone = keyof typeof ctaTones;

/** Shared look for primary CTAs: label on the left, arrow in a tile on the right. */
export function ctaClassName(tone: CtaTone = 'light', className?: string) {
  return cn(
    'group inline-flex h-14 w-full shrink-0 items-center justify-between gap-8 rounded-xl pl-6 pr-2 text-lg font-semibold whitespace-nowrap outline-none sm:w-auto',
    ctaTones[tone],
    className
  );
}

export function CtaArrow() {
  return (
    <span
      className={cn(
        'flex h-10 w-10 items-center justify-center rounded-lg transition-colors',
        arrowTone
      )}
    >
      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
    </span>
  );
}

export function CtaLink({
  href,
  children,
  tone = 'light',
  className
}: {
  href: string;
  children: React.ReactNode;
  tone?: CtaTone;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={ctaClassName(tone, className)}
      {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
      <CtaArrow />
    </Link>
  );
}

/** Mono "label" line used above headings: a pine tick, then the text. */
export function Eyebrow({
  children,
  className,
  dark = false
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <p
      className={cn(
        'flex items-center gap-2.5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.18em] sm:text-xs',
        dark ? 'text-emerald-300' : 'text-gray-600',
        className
      )}
    >
      <span className={cn('h-2 w-2 shrink-0 rounded-[2px]', dark ? 'bg-emerald-300' : 'bg-emerald-500')} aria-hidden />
      {children}
    </p>
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
    <div className="mb-10 grid gap-4 border-t border-gray-300 pt-5 sm:mb-14 lg:grid-cols-12 lg:gap-10">
      <div className="lg:col-span-7">
        {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-base leading-relaxed text-gray-600 sm:text-lg lg:col-span-5 lg:self-end">
          {subtitle}
        </p>
      )}
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* A shipping label: ink body, perforated tear line, mono routing strip. */}
        <div className="bg-flutes shadow-sheet-pine overflow-hidden rounded-2xl">
          <div className="flex items-center justify-between gap-4 border-b border-dashed border-white/15 px-6 py-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-gray-400 sm:px-12">
            <span>Cogton AI</span>
            <span aria-hidden className="hidden sm:inline">▮▮▯▮▯▯▮▮▮▯▮▯▮▮▯▯▮</span>
            <span className="text-emerald-300">Priority</span>
          </div>
          <div className="flex flex-col items-start justify-between gap-8 px-6 py-10 sm:px-12 sm:py-14 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">{title}</h2>
              <p className="mt-3 text-lg text-emerald-50/80">{subtitle}</p>
            </div>
            <CtaLink href={href} tone="dark">
              {label}
            </CtaLink>
          </div>
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
    <section className="bg-flutes py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <Eyebrow dark>{eyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {results.map((result) => (
            <li
              key={result}
              className="flex gap-3 rounded-md border border-white/10 bg-white/5 p-4 sm:p-5 text-gray-100"
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
    <section className="bg-dieline border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14 sm:pt-24 sm:pb-16 grid gap-10 sm:gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <Eyebrow className="reveal">{product}</Eyebrow>
          <h1 className="reveal mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl" style={{ '--i': 1 } as React.CSSProperties}>
            {title}
          </h1>
          <p className="reveal mt-6 max-w-2xl text-lg leading-relaxed text-gray-600" style={{ '--i': 2 } as React.CSSProperties}>
            {intro}
          </p>
          <div className="reveal mt-10 flex flex-col gap-4 sm:flex-row" style={{ '--i': 3 } as React.CSSProperties}>
            <CtaLink href={DEMO_BOOKING_URL}>{demoLabel}</CtaLink>
            <Link
              href="/pricing"
              className="inline-flex h-14 w-full items-center justify-center rounded-xl border border-gray-300 bg-white px-6 text-lg font-semibold text-gray-900 transition-colors outline-none hover:border-gray-400 hover:bg-gray-50 focus-visible:ring-4 focus-visible:ring-emerald-200 sm:w-auto"
            >
              {pricingLabel}
            </Link>
          </div>
        </div>
        <div className="reveal crop-marks lg:col-span-5" style={{ '--i': 4 } as React.CSSProperties}>{visual}</div>
      </div>
    </section>
  );
}
