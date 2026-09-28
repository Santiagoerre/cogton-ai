'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CONTACT_EMAIL = 'info@cogton.com';

const goals = [
  'Tipo de embalaje',
  'Tamaño de caja',
  'Costo de flete',
  'Material y relleno'
];

const inputClass =
  'mt-2 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder:text-gray-400 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100';

export function QuoteForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = `${data.get('firstName')} ${data.get('lastName')}`.trim();
    const body = [
      `Nombre: ${name}`,
      `Email: ${data.get('email')}`,
      `Empresa: ${data.get('company')}`,
      `Quiere optimizar: ${data.getAll('goals').join(', ') || '—'}`,
      '',
      `${data.get('message') || ''}`
    ].join('\n');
    const subject = `Cotización Cogton AI — ${data.get('company') || name}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-6 shadow-xl shadow-gray-200/60 ring-1 ring-gray-200 sm:p-10"
    >
      <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
        Contanos sobre tu operación
      </h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <label className="block text-sm font-medium text-gray-900">
          Nombre
          <input name="firstName" required placeholder="Juan" className={inputClass} />
        </label>
        <label className="block text-sm font-medium text-gray-900">
          Apellido
          <input name="lastName" required placeholder="Pérez" className={inputClass} />
        </label>
        <label className="block text-sm font-medium text-gray-900">
          Email laboral
          <input
            name="email"
            type="email"
            required
            placeholder="juan@tuempresa.com"
            className={inputClass}
          />
        </label>
        <label className="block text-sm font-medium text-gray-900">
          Empresa
          <input name="company" placeholder="Tu empresa" className={inputClass} />
        </label>
      </div>

      <fieldset className="mt-6">
        <legend className="text-sm font-medium text-gray-900">
          ¿Qué querés optimizar?
        </legend>
        <div className="mt-2 grid gap-3 sm:grid-cols-2">
          {goals.map((goal) => (
            <label
              key={goal}
              className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 px-4 py-3.5 text-gray-900 transition-colors hover:border-emerald-300 has-[:checked]:border-emerald-500 has-[:checked]:bg-emerald-50"
            >
              <input
                type="checkbox"
                name="goals"
                value={goal}
                className="h-4 w-4 accent-emerald-600"
              />
              {goal}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="mt-6 block text-sm font-medium text-gray-900">
        ¿Algo más que quieras contarnos?
        <textarea
          name="message"
          rows={3}
          placeholder="Despachamos 20.000 pedidos por mes con 6 tamaños de caja. Usamos SAP EWM."
          className={inputClass}
        />
      </label>

      <label className="mt-6 flex items-start gap-3 text-sm text-gray-600">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 h-4 w-4 flex-shrink-0 accent-emerald-600"
        />
        Acepto que Cogton AI guarde y procese mis datos para contactarme.
      </label>

      <Button type="submit" size="lg" className="mt-8 w-full rounded-full text-base sm:w-auto">
        Agendar una llamada
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </form>
  );
}
