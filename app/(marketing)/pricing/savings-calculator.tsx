'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n/client';

// Same figures shown on the homepage.
const FREIGHT_SAVINGS = 0.18;

export function SavingsCalculator() {
  const { dict } = useI18n();
  const t = dict.calculator;
  const formatNumber = (n: number) =>
    new Intl.NumberFormat(t.numberLocale, { maximumFractionDigits: 0 }).format(n);
  const [orders, setOrders] = useState(10000);
  const [avgFreight, setAvgFreight] = useState(6);

  const monthly = orders * avgFreight * FREIGHT_SAVINGS;

  return (
    <div className="grid gap-8 rounded-xl border border-gray-200 bg-white p-6 sm:p-8 lg:grid-cols-2">
      <div className="space-y-8">
        <div>
          <div className="flex items-baseline justify-between">
            <label htmlFor="orders" className="text-sm font-medium text-gray-700">
              {t.orders}
            </label>
            <span className="font-mono text-lg font-semibold text-gray-900">
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
            className="mt-3 h-8 w-full accent-[var(--color-action)]"
          />
          <div className="mt-1 flex justify-between text-xs text-gray-400">
            <span>{formatNumber(1000)}</span>
            <span>{formatNumber(100000)}</span>
          </div>
        </div>

        <div>
          <label htmlFor="freight" className="text-sm font-medium text-gray-700">
            {t.avgFreight}
          </label>
          <div className="mt-2 flex items-center rounded-lg border border-gray-300 bg-white transition-colors focus-within:border-emerald-500 focus-within:ring-4 focus-within:ring-emerald-100">
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

      <div className="bg-flutes flex flex-col justify-between rounded-xl p-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-emerald-300">
            {t.estimated}
          </p>
          <p className="mt-3 font-mono text-3xl font-semibold tracking-tight text-emerald-200 sm:text-4xl">
            ${formatNumber(monthly)}
            <span className="text-base font-normal text-emerald-50/60">{t.perMonth}</span>
          </p>
          <p className="mt-2 font-mono text-sm text-emerald-50/80">
            ${formatNumber(monthly * 12)} {t.perYear}
          </p>
        </div>
        <div className="mt-6 border-t border-dashed border-white/15 pt-4">
          <p className="text-xs text-emerald-50/60">
            {t.disclaimer.replace('{pct}', String(FREIGHT_SAVINGS * 100))}
          </p>
        </div>
      </div>
    </div>
  );
}
