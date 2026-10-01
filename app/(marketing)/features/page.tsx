import { CtaLink } from '@/components/marketing';
import { getDict } from '@/lib/i18n/server';
import {
  PackageSearch,
  LineChart,
  Boxes,
  Ruler,
  Truck,
  Leaf
} from 'lucide-react';

const featureIcons = [Ruler, PackageSearch, Boxes, Truck, LineChart, Leaf];

export default async function FeaturesPage() {
  const { features: t, common } = await getDict();
  const features = t.items.map((item, i) => ({ ...item, icon: featureIcons[i] }));

  return (
    <main>
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl">
            {t.title}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            {t.subtitle}
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
                {t.ctaTitle}
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                {t.ctaBody}
              </p>
            </div>
            <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
              <CtaLink href="/contact">{common.demoRequest}</CtaLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
