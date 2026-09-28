import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Calendar } from 'lucide-react';

const CONTACT_EMAIL = 'info@cogton.com';

export default function ContactPage() {
  return (
    <main className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl">
          Hablemos
        </h1>
        <p className="mt-4 text-lg text-gray-500">
          Contanos sobre tu operación y te mostramos cuánto podrías ahorrar
          en embalaje con Cogton AI.
        </p>
      </div>

      <div className="mt-12 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="rounded-xl border border-gray-200 p-6 text-center hover:border-emerald-600 transition-colors"
          >
            <Mail className="h-6 w-6 mx-auto text-emerald-600" />
            <h3 className="mt-4 font-medium text-gray-900">Email</h3>
            <p className="mt-1 text-sm text-gray-500">{CONTACT_EMAIL}</p>
          </a>

          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-gray-200 p-6 text-center hover:border-emerald-600 transition-colors"
          >
            <Calendar className="h-6 w-6 mx-auto text-emerald-600" />
            <h3 className="mt-4 font-medium text-gray-900">Agendar demo</h3>
            <p className="mt-1 text-sm text-gray-500">Reservá un horario</p>
          </a>

          <a
            href="https://www.linkedin.com/company/cogton/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-gray-200 p-6 text-center hover:border-emerald-600 transition-colors"
          >
            <Linkedin className="h-6 w-6 mx-auto text-emerald-600" />
            <h3 className="mt-4 font-medium text-gray-900">LinkedIn</h3>
            <p className="mt-1 text-sm text-gray-500">Seguinos</p>
          </a>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500">
            ¿Preferís que te escribamos nosotros?
          </p>
          <a href={`mailto:${CONTACT_EMAIL}?subject=Demo%20Cogton%20AI`}>
            <Button size="lg" className="mt-4 rounded-full">
              Escribinos por email
            </Button>
          </a>
        </div>
      </div>
    </main>
  );
}
