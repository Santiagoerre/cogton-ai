import {
  ArrowRight,
  Check,
  FileSpreadsheet,
  Leaf,
  ShoppingCart
} from 'lucide-react';
import Link from 'next/link';
import { PackagingFlowIllustration } from '@/components/illustrations/packaging-flow';
import { CartonizationVisual } from '@/components/illustrations/cartonization-visual';
import { CatalogueVisual } from '@/components/illustrations/catalogue-visual';
import {
  MeasureIcon,
  OptimizeIcon,
  SaveIcon
} from '@/components/illustrations/step-icons';
import { CtaBanner, CtaLink, SectionHeading } from '@/components/marketing';
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
      <section className="relative isolate overflow-hidden py-14 sm:py-20 lg:py-24">
        {/* dot grid that fades out, plus a soft glow behind the diagram */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_80%_45%_at_50%_75%,black,transparent)] lg:[mask-image:radial-gradient(ellipse_55%_70%_at_72%_50%,black,transparent)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[58%] -z-10 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-emerald-200/20 blur-3xl lg:left-[72%] lg:top-1/2 lg:h-[38rem] lg:w-[38rem] lg:-translate-y-1/2"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl lg:text-[2.75rem] lg:leading-[1.08] xl:text-[3.25rem]">
                {t.heroTitle}
                <span className="block text-emerald-600">{t.heroHighlight}</span>
              </h1>
              <p className="mt-4 text-lg text-gray-500 sm:mt-6 sm:text-xl lg:max-w-lg">
                {t.heroBody}
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 flex flex-col sm:flex-row gap-3 sm:justify-center lg:justify-start">
                <CtaLink href="/pricing#cotizar">{common.demoRequest}</CtaLink>
              </div>
            </div>
            <div className="-mx-2 mt-10 sm:mx-0 sm:mt-12 lg:mt-0 lg:col-span-6 lg:ml-auto lg:w-full lg:max-w-[600px]">
              <div className="overflow-hidden rounded-2xl bg-white/90 shadow-2xl shadow-emerald-900/10 ring-1 ring-gray-900/5 backdrop-blur">
                <div className="flex items-center gap-1.5 border-b border-gray-100 px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-gray-200" />
                  <span className="h-2.5 w-2.5 rounded-full bg-gray-200" />
                  <span className="h-2.5 w-2.5 rounded-full bg-gray-200" />
                  <span className="ml-3 truncate text-xs font-medium text-gray-500">
                    {t.windowTitle}
                  </span>
                  <span className="ml-auto flex items-center gap-1.5 text-xs font-medium text-emerald-700">
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
      </section>

      <section className="py-6 sm:py-10 bg-white border-y border-gray-100">
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-gray-400 sm:mb-6">
          {t.integratesWith}
        </p>
        <Marquee duration={60}>
          {wmsPlatforms.map(({ name, logo, h, label }) => (
            <span
              key={name}
              className="mx-6 flex items-center gap-2 opacity-70 grayscale sm:mx-10"
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

      <section id="productos" className="bg-gray-50 py-14 sm:py-20 scroll-mt-16">
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
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow hover:shadow-xl hover:shadow-gray-200/70"
              >
                <div className="flex items-center bg-gradient-to-b from-emerald-50 to-white px-4 pt-6 pb-2 sm:px-10 sm:pt-8 lg:h-[26rem]">
                  <div className="mx-auto w-full max-w-md">{product.visual}</div>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-10">
                  <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                    {product.label}
                  </p>
                  <h3 className="mt-3 text-xl font-bold text-gray-900 sm:text-2xl">
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
                  <span className="mt-8 inline-flex items-center font-semibold text-emerald-700">
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
          <div className="grid gap-8 sm:gap-10 sm:grid-cols-3 relative">
            <div
              className="hidden sm:block absolute top-7 left-[16.5%] right-[16.5%] border-t-2 border-dashed border-emerald-200"
              aria-hidden
            />
            {steps.map(({ icon, title, description }) => (
              <div key={title} className="relative text-center">
                {icon}
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {title}
                </h3>
                <p className="mx-auto mt-2 max-w-xs text-sm text-gray-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={t.whyEyebrow}
            title={t.whyTitle}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {reasons.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-600 text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title={t.ctaTitle}
        subtitle={t.ctaSubtitle}
        href="/pricing#cotizar"
        label={common.demoRequest}
      />
    </main>
  );
}
