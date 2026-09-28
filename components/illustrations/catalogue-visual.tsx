// Mock of the per-SKU packaging assignment the Catalogue Optimiser delivers.

const rows = [
  { sku: 'Remera de algodón', today: 'Caja S', recommended: 'Bolsa mailer', changed: true },
  { sku: 'Taza de cerámica', today: 'Caja S', recommended: 'Caja S', changed: false },
  { sku: 'Libro tapa blanda', today: 'Caja M', recommended: 'Sobre acolchado', changed: true },
  { sku: 'Pack de medias', today: 'Caja S', recommended: 'Bolsa de papel', changed: true },
  { sku: 'Lámpara de mesa', today: 'Caja XL', recommended: 'Caja L', changed: true }
];

export function CatalogueVisual() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-xl shadow-gray-200/60 ring-1 ring-gray-200">
      <div className="flex items-center justify-between text-sm">
        <span className="font-semibold text-gray-900">Catálogo recomendado</span>
        <span className="text-gray-500">Asignación por SKU</span>
      </div>
      <table className="mt-5 w-full text-left text-sm">
        <thead>
          <tr className="text-xs uppercase tracking-wider text-gray-400">
            <th className="pb-3 font-medium">Producto</th>
            <th className="pb-3 font-medium">Hoy</th>
            <th className="pb-3 font-medium">Recomendado</th>
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
