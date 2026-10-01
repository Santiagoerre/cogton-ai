'use client';

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { CtaArrow, ctaClassName } from '@/components/marketing';
import { CONTACT_EMAIL } from '@/lib/contact';
import { useDict } from '@/lib/i18n/client';
import { es } from '@/lib/i18n/es';

const inputClass =
  'mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100';

const cardClass =
  'rounded-2xl bg-white p-6 shadow-xl shadow-gray-200/60 ring-1 ring-gray-200 sm:p-10';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export function QuoteForm({ title }: { title?: string }) {
  const { quoteForm: t } = useDict();
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setStatus('sending');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${data.get('firstName')} ${data.get('lastName')}`.trim(),
          email: data.get('email'),
          company: data.get('company'),
          goals: data.getAll('goals'),
          message: data.get('message'),
          website: data.get('website')
        })
      });
      setStatus(response.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className={`${cardClass} page-enter text-center`} role="status">
        <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
        <h2 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">
          {t.successTitle}
        </h2>
        <p className="mt-3 text-gray-600">{t.successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cardClass}>
      <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">{title ?? t.title}</h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <label className="block text-sm font-medium text-gray-900">
          {t.firstName}
          <input name="firstName" required placeholder={t.firstNamePlaceholder} className={inputClass} />
        </label>
        <label className="block text-sm font-medium text-gray-900">
          {t.lastName}
          <input name="lastName" required placeholder={t.lastNamePlaceholder} className={inputClass} />
        </label>
        <label className="block text-sm font-medium text-gray-900">
          {t.email}
          <input
            name="email"
            type="email"
            required
            placeholder={t.emailPlaceholder}
            className={inputClass}
          />
        </label>
        <label className="block text-sm font-medium text-gray-900">
          {t.company}
          <input name="company" placeholder={t.companyPlaceholder} className={inputClass} />
        </label>
      </div>

      {/* Honeypot: hidden from people, filled by bots. */}
      <input
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />

      <fieldset className="mt-6">
        <legend className="text-sm font-medium text-gray-900">
          {t.goalsLegend}
        </legend>
        <div className="mt-2 grid gap-3 sm:grid-cols-2">
          {t.goals.map((goal, i) => (
            <label
              key={goal}
              className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 px-4 py-3.5 text-gray-900 transition-colors hover:border-emerald-300 has-[:checked]:border-emerald-500 has-[:checked]:bg-emerald-50"
            >
              <input
                type="checkbox"
                name="goals"
                value={es.quoteForm.goals[i]}
                className="h-5 w-5 accent-emerald-600"
              />
              {goal}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="mt-6 block text-sm font-medium text-gray-900">
        {t.message}
        <textarea
          name="message"
          rows={3}
          placeholder={t.messagePlaceholder}
          className={inputClass}
        />
      </label>

      <label className="mt-6 flex cursor-pointer items-start gap-3 text-sm text-gray-600">
        <input
          type="checkbox"
          name="consent"
          required
          className="h-5 w-5 flex-shrink-0 accent-emerald-600"
        />
        {t.consent}
      </label>

      {status === 'error' && (
        <p role="alert" className="mt-6 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          {t.errorPrefix}{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold underline">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className={ctaClassName('green', 'mt-8 cursor-pointer disabled:cursor-wait disabled:opacity-70')}
      >
        {status === 'sending' ? t.sending : t.submit}
        <CtaArrow />
      </button>
    </form>
  );
}
