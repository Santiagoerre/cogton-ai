import { Mail, Linkedin, Calendar } from 'lucide-react';
import { QuoteForm } from '@/components/quote-form';
import { CONTACT_EMAIL } from '@/lib/contact';
import { getDict } from '@/lib/i18n/server';

export default async function ContactPage() {
  const { contact: t } = await getDict();

  return (
    <main className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl">
          {t.title}
        </h1>
        <p className="mt-4 text-lg text-gray-500">
          {t.subtitle}
        </p>
      </div>

      <div className="mt-10 sm:mt-12 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-3">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="rounded-xl border border-gray-200 p-6 text-center hover:border-emerald-600 transition-colors"
          >
            <Mail className="h-6 w-6 mx-auto text-emerald-600" />
            <h3 className="mt-4 font-medium text-gray-900">{t.email}</h3>
            <p className="mt-1 text-sm text-gray-500">{CONTACT_EMAIL}</p>
          </a>

          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-gray-200 p-6 text-center hover:border-emerald-600 transition-colors"
          >
            <Calendar className="h-6 w-6 mx-auto text-emerald-600" />
            <h3 className="mt-4 font-medium text-gray-900">{t.bookDemo}</h3>
            <p className="mt-1 text-sm text-gray-500">{t.bookSlot}</p>
          </a>

          <a
            href="https://www.linkedin.com/company/cogton/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-gray-200 p-6 text-center hover:border-emerald-600 transition-colors"
          >
            <Linkedin className="h-6 w-6 mx-auto text-emerald-600" />
            <h3 className="mt-4 font-medium text-gray-900">{t.linkedin}</h3>
            <p className="mt-1 text-sm text-gray-500">{t.follow}</p>
          </a>
        </div>

        <div className="mt-10 sm:mt-12">
          <QuoteForm title={t.formTitle} />
        </div>
      </div>
    </main>
  );
}
