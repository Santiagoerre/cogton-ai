import { DEMO_BOOKING_URL } from '@/lib/contact';
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
import { getDict } from '@/lib/i18n/server';

export async function generateMetadata(): Promise<Metadata> {
  const { carton } = await getDict();
  return { title: carton.metaTitle };
}

const constraintIcons = [ArrowUp, GlassWater, Layers, MoveDiagonal, StretchHorizontal];
const goalIcons = [Truck, Box, Gauge];

export default async function CartonizationPage() {
  const { carton: t, common, products } = await getDict();
  const productName = products[0].name;

  return (
    <main className="bg-white">
      <ProductHero
        product={productName}
        title={t.title}
        intro={t.intro}
        visual={<CartonizationVisual />}
        demoLabel={common.demoRequest}
        pricingLabel={common.seePricing}
      />

      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={common.howItWorks}
            title={t.stepsTitle}
          />
          <ol className="grid gap-6 md:grid-cols-3">
            {t.steps.map(({ title, description }, i) => (
              <li key={title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-card sm:p-8">
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

      <section className="bg-kraft py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={t.constraintsEyebrow}
            title={t.constraintsTitle}
            subtitle={t.constraintsSubtitle}
          />
          <ul className="flex flex-wrap justify-center gap-3">
            {t.constraints.map((label, i) => {
              const Icon = constraintIcons[i];
              return (
              <li
                key={label}
                className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-3 font-medium text-gray-800"
              >
                <Icon className="h-5 w-5 text-emerald-600" />
                {label}
              </li>
              );
            })}
          </ul>

          <h3 className="mt-16 text-center text-xl font-semibold text-gray-900">
            {t.goalsTitle}
          </h3>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {t.goals.map(({ title, description }, i) => {
              const Icon = goalIcons[i];
              return (
              <div key={title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-card sm:p-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="mt-5 text-lg font-semibold text-gray-900">{title}</h4>
                <p className="mt-2 text-gray-600">{description}</p>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={t.integrationEyebrow}
            title={t.integrationTitle}
            subtitle={t.integrationSubtitle}
          />
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 p-6 sm:p-8">
              <Plug className="h-6 w-6 text-emerald-600" />
              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                {t.apiTitle}
              </h3>
              <p className="mt-2 text-gray-600">
                {t.apiBody}
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6 sm:p-8">
              <FileSpreadsheet className="h-6 w-6 text-emerald-600" />
              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                {t.csvTitle}
              </h3>
              <p className="mt-2 text-gray-600">
                {t.csvBody}
              </p>
            </div>
          </div>
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
