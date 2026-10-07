import { Check, Plus } from 'lucide-react';
import { CtaBanner, SectionHeading } from '@/components/marketing';
import { SavingsCalculator } from './savings-calculator';
import { QuoteForm } from '@/components/quote-form';
import { getDict } from '@/lib/i18n/server';

export default async function PricingPage() {
  const { pricing: t } = await getDict();

  return (
    <main className="bg-white">
      <section className="bg-dieline border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14 sm:pt-24 sm:pb-16">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-gray-600">
            {t.eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            {t.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
            {t.introBefore}{' '}
            <span className="whitespace-nowrap">{t.introPrice}</span>{' '}
            {t.introAfter}
          </p>
          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            {t.highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Check className="h-4 w-4 text-emerald-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="cotizar" className="bg-flutes py-16 sm:py-20 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <QuoteForm />
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-10 lg:col-span-5 lg:sticky lg:top-24">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              {t.factorsTitle}
            </h2>
            <p className="mt-3 text-gray-300">{t.factorsIntro}</p>
            <ul className="mt-8 space-y-6">
              {t.factors.map(({ title, description }) => (
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

      <section className="bg-kraft py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={t.calcTitle}
            subtitle={t.calcSubtitle}
          />
          <SavingsCalculator />
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={t.processEyebrow}
            title={t.processTitle}
            subtitle={t.processSubtitle}
          />
          <ol className="grid gap-6 md:grid-cols-3">
            {t.steps.map(({ title, description }, i) => (
              <li
                key={title}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-card sm:p-8"
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

      <section className="bg-kraft py-14 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-gray-600">FAQ</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:mt-4 sm:text-5xl">
              {t.faqTitle}
            </h2>
          </div>
          <div className="divide-y divide-gray-200 border-b border-gray-200 lg:col-span-8">
            {t.faqs.map(({ question, answer }) => (
              <details key={question} className="group py-5 first:pt-0 sm:py-7">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-lg font-semibold sm:gap-6 text-gray-900 sm:text-xl [&::-webkit-details-marker]:hidden">
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
        title={t.ctaTitle}
        subtitle={t.ctaSubtitle}
        href="#cotizar"
        label={t.ctaLabel}
      />
    </main>
  );
}
