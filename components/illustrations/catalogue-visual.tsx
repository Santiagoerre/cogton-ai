import { getDict } from '@/lib/i18n/server';

// Mock of the per-SKU packaging assignment the Catalogue Optimiser delivers.

export async function CatalogueVisual() {
  const { visuals: t } = await getDict();
  const rows = t.rows;

  return (
    <div className="rounded-2xl bg-white p-6 shadow-xl shadow-gray-200/60 ring-1 ring-gray-200">
      <div className="flex items-center justify-between text-sm">
        <span className="font-semibold text-gray-900">{t.catalogueTitle}</span>
        <span className="text-gray-500">{t.catalogueSub}</span>
      </div>
      <table className="mt-5 w-full text-left text-sm">
        <thead>
          <tr className="text-xs uppercase tracking-wider text-gray-400">
            <th className="pb-3 font-medium">{t.colProduct}</th>
            <th className="pb-3 font-medium">{t.colToday}</th>
            <th className="pb-3 font-medium">{t.colRecommended}</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {rows.map(({ sku, today, recommended, changed }) => (
            <tr key={sku}>
              <td className="py-3 pr-3 font-medium text-gray-900">{sku}</td>
              <td className="py-3 pr-3 text-gray-400">{today}</td>
              <td className="py-3">
                <span
                  className={`inline-block whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ${
                    changed
                      ? 'bg-emerald-50 text-emerald-700 ring-emerald-200'
                      : 'bg-gray-50 text-gray-600 ring-gray-200'
                  }`}
                >
                  {recommended}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
