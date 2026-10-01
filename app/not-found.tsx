import Link from 'next/link';
import { LogoMark } from '@/components/logo';
import { getDict } from '@/lib/i18n/server';

export default async function NotFound() {
  const { notFound: t } = await getDict();

  return (
    <div className="flex items-center justify-center min-h-[100dvh]">
      <div className="max-w-md space-y-8 p-4 text-center">
        <div className="flex justify-center">
          <LogoMark className="size-14" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
          {t.title}
        </h1>
        <p className="text-base text-gray-500">
          {t.body}
        </p>
        <Link
          href="/"
          className="max-w-48 mx-auto flex justify-center py-2 px-4 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600"
        >
          {t.back}
        </Link>
      </div>
    </div>
  );
}
