'use client';

import { useState } from 'react';

// Same figures shown on the homepage.
const FREIGHT_SAVINGS = 0.18;

const formatNumber = (n: number) =>
  new Intl.NumberFormat('es-AR', { maximumFractionDigits: 0 }).format(n);

export function SavingsCalculator() {
  const [orders, setOrders] = useState(10000);
  const [avgFreight, setAvgFreight] = useState(6);

  const monthly = orders * avgFreight * FREIGHT_SAVINGS;

  return (
    <div className="grid gap-8 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 lg:grid-cols-2">
      <div className="space-y-8">
        <div>
          <div className="flex items-baseline justify-between">
            <label htmlFor="orders" className="text-sm font-medium text-gray-700">
              Envíos por mes
            </label>
            <span className="text-lg font-semibold text-gray-900">
              {formatNumber(orders)}
            </span>
          </div>
          <input
            id="orders"
            type="range"
            min={1000}
            max={100000}
            step={1000}
            value={orders}
            onChange={(e) => setOrders(Number(e.target.value))}
            className="mt-3 h-8 w-full accent-emerald-600"
          />
          <div className="mt-1 flex justify-between text-xs text-gray-400">
            <span>1.000</span>
            <span>100.000</span>
          </div>
        </div>

        <div>
          <label htmlFor="freight" className="text-sm font-medium text-gray-700">
            Costo promedio de flete por envío
          </label>
          <div className="mt-2 flex items-center rounded-lg border border-gray-200 focus-within:border-emerald-500">
            <span className="pl-3 text-gray-500">$</span>
            <input
              id="freight"
              type="number"
              inputMode="decimal"
              min={0}
              step={0.5}
              value={avgFreight}
              onChange={(e) => setAvgFreight(Math.max(0, Number(e.target.value)))}
              className="w-full bg-transparent px-2 py-3 text-base text-gray-900 outline-none"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between rounded-xl bg-emerald-50 p-6">
        <div>
          <p className="text-sm font-medium text-emerald-800">
            Ahorro estimado en flete
          </p>
          <p className="mt-2 text-3xl font-bold text-emerald-700 sm:text-4xl">
            ${formatNumber(monthly)}
            <span className="text-lg font-medium text-emerald-800"> / mes</span>
          </p>
          <p className="mt-1 text-gray-600">
            ${formatNumber(monthly * 12)} por año
          </p>
        </div>
        <div className="mt-6 border-t border-emerald-100 pt-4">
          <p className="text-xs text-gray-500">
            Estimación basada en una reducción promedio del{' '}
            {FREIGHT_SAVINGS * 100}% en el costo de flete. El ahorro real
            depende de tu catálogo y tu tarifa de transporte; lo calculamos
            con tus datos en el caso de negocio.
          </p>
        </div>
      </div>
    </div>
  );
}
