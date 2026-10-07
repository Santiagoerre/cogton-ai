import { DEMO_BOOKING_URL } from '@/lib/contact';
import {
  ArrowRight,
  Check,
  FileSpreadsheet,
  Leaf,
  ShoppingCart
} from 'lucide-react';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import { PackagingFlowIllustration } from '@/components/illustrations/packaging-flow';
import { CartonizationVisual } from '@/components/illustrations/cartonization-visual';
import { CatalogueVisual } from '@/components/illustrations/catalogue-visual';
import {
  MeasureIcon,
  OptimizeIcon,
  SaveIcon
} from '@/components/illustrations/step-icons';
import { CtaBanner, CtaLink, Eyebrow, SectionHeading } from '@/components/marketing';
import { Marquee } from '@/components/marquee';
import { getDict } from '@/lib/i18n/server';
import { localizeProducts } from '@/lib/products';

// Official logos, saved in /public/logos. `h` sets the display height so
// wide wordmarks and square tiles read at a similar visual weight.
const wmsPlatforms = [
  { name: 'SAP', logo: 'sap.svg', h: 'h-9' },
  { name: 'Oracle', logo: 'oracle.svg', h: 'h-5' },
  { name: 'Manhattan Associates', logo: 'manhattan.svg', h: 'h-5' },
  { name: 'Blue Yonder', logo: 'blueyonder.png', h: 'h-6' },
  { name: 'Infor', logo: 'infor.png', h: 'h-10' },
  { name: 'Körber', logo: 'korber.svg', h: 'h-10' },
  { name: 'Microsoft Dynamics 365', logo: 'd365.svg', h: 'h-8', label: 'Dynamics 365' },
  { name: 'NetSuite', logo: 'netsuite.svg', h: 'h-10' },
  { name: 'Odoo', logo: 'odoo.png', h: 'h-8' },
  { name: 'Deposco', logo: 'deposco.png', h: 'h-7' },
  { name: 'ShipHero', logo: 'shiphero.svg', h: 'h-9' },
  { name: 'Logiwa', logo: 'logiwa.png', h: 'h-8' }
];

const productMeta = [
  { href: '/productos/cartonizacion', visual: <CartonizationVisual compact /> },
  { href: '/productos/catalogo', visual: <CatalogueVisual /> }
];

const stepIcons = [<MeasureIcon key="m" />, <OptimizeIcon key="o" />, <SaveIcon key="s" />];
const reasonIcons = [ShoppingCart, FileSpreadsheet, Leaf];

export default async function HomePage() {
  const { home: t, common, products: productTexts } = await getDict();
  const products = localizeProducts(productTexts);
  const productCards = productMeta.map((meta, i) => ({
    ...meta,
    ...products[i],
    ...t.productCards[i]
  }));
  const steps = t.steps.map((step, i) => ({ ...step, icon: stepIcons[i] }));
  const reasons = t.reasons.map((reason, i) => ({ ...reason, icon: reasonIcons[i] }));

  return (
    <main className="bg-white">
      <section className="bg-dieline relative isolate overflow-hidden py-14 sm:py-20 lg:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[58%] -z-10 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-emerald-200/30 blur-3xl lg:left-[74%] lg:top-1/2 lg:h-[36rem] lg:w-[36rem] lg:-translate-y-1/2"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="md:max-w-2xl lg:col-span-6">
              <Eyebrow className="reveal">{t.heroEyebrow}</Eyebrow>
              <h1
                className="reveal mt-6 text-4xl font-extrabold leading-[1.02] text-gray-900 sm:text-5xl md:text-6xl lg:text-[3.1rem] xl:text-[3.6rem]"
                style={{ '--i': 1 } as CSSProperties}
              >
                {t.heroTitle}{' '}
                <span className="tape">{t.heroHighlight}</span>
              </h1>
              <p
                className="reveal mt-6 text-lg leading-relaxed text-gray-600 sm:mt-8 sm:text-xl lg:max-w-lg"
                style={{ '--i': 2 } as CSSProperties}
              >
                {t.heroBody}
              </p>
              <div className="reveal mt-10 flex flex-col gap-3 sm:flex-row" style={{ '--i': 3 } as CSSProperties}>
                <CtaLink href={DEMO_BOOKING_URL}>{common.demoRequest}</CtaLink>
              </div>
            </div>
            <div
              className="reveal mt-14 mr-2 sm:mr-0 lg:mt-0 lg:col-span-6 lg:ml-auto lg:w-full lg:max-w-[600px]"
              style={{ '--i': 4 } as CSSProperties}
            >
              <div className="crop-marks">
                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sheet-lg">
                  <div className="flex items-center gap-1.5 border-b border-gray-200 bg-gray-50 px-4 py-2.5 font-mono text-[0.65rem] uppercase tracking-[0.16em]">
                    <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                    <span className="ml-3 truncate text-gray-500">
                      {t.windowTitle}
                    </span>
                    <span className="ml-auto flex items-center gap-1.5 text-emerald-700">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                      </span>
                      {t.live}
                    </span>
                  </div>
                  <div className="p-1.5 sm:p-4">
                    <PackagingFlowIllustration />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 sm:py-10 bg-white border-y border-gray-200">
        <Eyebrow className="mb-4 justify-center sm:mb-6">{t.integratesWith}</Eyebrow>
        <Marquee duration={60}>
          {wmsPlatforms.map(({ name, logo, h, label }) => (
            <span
              key={name}
              className="mx-6 flex items-center gap-2 opacity-60 grayscale sepia-[.25] sm:mx-10"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/logos/${logo}`}
                alt={label ? '' : name}
                height={40}
                loading="lazy"
                className={`${h} w-auto max-w-none`}
              />
              {label && (
                <span className="text-base font-semibold text-gray-700 whitespace-nowrap">
                  {label}
                </span>
              )}
            </span>
          ))}
        </Marquee>
      </section>

      <section id="productos" className="bg-kraft py-14 sm:py-20 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={t.productsEyebrow}
            title={t.productsTitle}
            subtitle={t.productsSubtitle}
          />
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
            {productCards.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="hover-lift shadow-card group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white"
              >
                <div className="bg-dieline flex items-center border-b border-dashed border-gray-300 px-4 pt-6 pb-2 sm:px-10 sm:pt-8 lg:h-[26rem]">
                  <div className="mx-auto w-full max-w-md">{product.visual}</div>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-10">
                  <Eyebrow>{product.label}</Eyebrow>
                  <h3 className="mt-4 text-xl font-extrabold text-gray-900 sm:text-2xl">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-lg font-medium text-gray-700">
                    {product.tagline}
                  </p>
                  <p className="mt-4 leading-relaxed text-gray-600">
                    {product.description}
                  </p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {product.points.map((point) => (
                      <li key={point} className="flex gap-3 text-gray-700">
                        <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-8 inline-flex items-center self-start border-b-2 border-action/30 pb-0.5 font-semibold text-action transition-colors group-hover:border-action">
                    {common.learnMore}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={t.howEyebrow}
            title={t.howTitle}
            subtitle={t.howSubtitle}
          />
          <ol className="grid border-y border-gray-300 sm:grid-cols-3 sm:divide-x sm:divide-dashed sm:divide-gray-300">
            {steps.map(({ icon, title, description }, i) => (
              <li key={title} className="relative border-b border-dashed border-gray-300 py-8 last:border-b-0 sm:border-b-0 sm:px-8 sm:first:pl-0 sm:last:pr-0">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-5xl font-light leading-none text-gray-300">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="[&_svg]:mx-0">{icon}</div>
                </div>
                <h3 className="mt-6 text-lg font-bold text-gray-900">
                  {/* The big index already numbers the step. */}
                  {title.replace(/^\d+\.\s*/, '')}
                </h3>
                <p className="mt-2 max-w-xs text-gray-600">
                  {description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-kraft py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={t.whyEyebrow}
            title={t.whyTitle}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {reasons.map(({ icon: Icon, title, description }) => (
              <div key={title} className="hover-lift shadow-card rounded-xl border border-gray-200 bg-white p-6 sm:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-gray-900">{title}</h3>
                <p className="mt-2 text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title={t.ctaTitle}
        subtitle={t.ctaSubtitle}
        href={DEMO_BOOKING_URL}
        label={common.demoRequest}
      />
    </main>
  );
}
