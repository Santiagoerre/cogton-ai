import { DEMO_BOOKING_URL } from '@/lib/contact';
import type { Metadata } from 'next';
import { Boxes, Check, FileCheck2, Tags } from 'lucide-react';
import {
  CtaBanner,
  ProductHero,
  ResultsSection,
  SectionHeading
} from '@/components/marketing';
import { CatalogueVisual } from '@/components/illustrations/catalogue-visual';
import { getDict } from '@/lib/i18n/server';

export async function generateMetadata(): Promise<Metadata> {
  const { catalogue } = await getDict();
  return { title: catalogue.metaTitle };
}

const levelIcons = [Tags, Boxes];

export default async function CatalogueOptimiserPage() {
  const { catalogue: t, common, products } = await getDict();

  return (
    <main className="bg-white">
      <ProductHero
        product={products[1].name}
        title={t.title}
        intro={t.intro}
        visual={<CatalogueVisual />}
        demoLabel={common.demoRequest}
        pricingLabel={common.seePricing}
      />

      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={t.levelsEyebrow}
            title={t.levelsTitle}
          />
          <div className="grid gap-6 md:grid-cols-2">
            {t.levels.map(({ label, title, description, points }, i) => {
              const Icon = levelIcons[i];
              return (
              <div key={title} className="rounded-xl border border-gray-200 p-6 sm:p-10">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-gray-500">
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
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-kraft py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-gray-600">
              {t.deliverableEyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {t.deliverableTitle}
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              {t.deliverableBody}
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {t.deliverables.map((item) => (
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

      <ResultsSection
        eyebrow={common.results}
        title={t.resultsTitle}
        results={t.results}
      />

      <CtaBanner
        title={t.ctaTitle}
        subtitle={t.ctaSubtitle}
        href={DEMO_BOOKING_URL}
        label={t.ctaLabel}
      />
    </main>
  );
}
