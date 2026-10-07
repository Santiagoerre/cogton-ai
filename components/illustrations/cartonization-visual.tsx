import { getDict } from '@/lib/i18n/server';

// Isometric mock of a packed order: box wireframe with items placed inside.

const S = 14;
const COS = 0.866;

type Vec = [number, number, number];

const iso = ([x, y, z]: Vec) =>
  `${((x - y) * COS * S).toFixed(1)},${((x + y) * 0.5 * S - z * S).toFixed(1)}`;

const poly = (pts: Vec[]) => pts.map(iso).join(' ');

function Cuboid({
  at: [x, y, z],
  size: [w, d, h],
  colors
}: {
  at: Vec;
  size: Vec;
  colors: [string, string, string];
}) {
  const [top, right, left] = colors;
  return (
    <g stroke="white" strokeWidth="1" strokeLinejoin="round">
      <polygon fill={left} points={poly([[x, y + d, z], [x + w, y + d, z], [x + w, y + d, z + h], [x, y + d, z + h]])} />
      <polygon fill={right} points={poly([[x + w, y, z], [x + w, y + d, z], [x + w, y + d, z + h], [x + w, y, z + h]])} />
      <polygon fill={top} points={poly([[x, y, z + h], [x + w, y, z + h], [x + w, y + d, z + h], [x, y + d, z + h]])} />
    </g>
  );
}

const BOX: Vec = [10, 8, 6];

// Sorted back to front.
const items: { at: Vec; size: Vec; colors: [string, string, string] }[] = [
  { at: [0, 0, 0], size: [6, 8, 3], colors: ['#B4DCC3', '#57AD7E', '#86C6A0'] },
  { at: [0, 0, 3], size: [5, 4, 2], colors: ['#EBD7A4', '#B8862B', '#D0A44E'] },
  { at: [6, 0, 0], size: [4, 4, 4], colors: ['#CAD6E2', '#5B7896', '#7E97B0'] },
  { at: [6, 4, 0], size: [4, 4, 2], colors: ['#B4DCC3', '#339466', '#57AD7E'] }
];

export async function CartonizationVisual({ compact = false }: { compact?: boolean }) {
  const { visuals: t } = await getDict();
  const [W, D, H] = BOX;
  return (
    <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-gray-200">
      <div className="flex items-center justify-between text-sm">
        <span className="font-semibold text-gray-900">{t.order}</span>
        <span className="text-gray-500">{t.items}</span>
      </div>
      <svg
        viewBox="-115 -100 250 240"
        className={`mx-auto my-4 w-full ${compact ? 'max-w-64' : 'max-w-sm'}`}
        role="img"
        aria-label={t.cartonAlt}
      >
        {/* back edges of the box */}
        <g stroke="#A89D88" strokeWidth="1.2" strokeDasharray="4 4" fill="none">
          <polyline points={poly([[0, D, 0], [0, 0, 0], [W, 0, 0]])} />
          <polyline points={poly([[0, 0, 0], [0, 0, H]])} />
        </g>
        {items.map((item, i) => (
          <Cuboid key={i} {...item} />
        ))}
        {/* front edges of the box */}
        <g stroke="#433C31" strokeWidth="1.5" fill="none" strokeLinejoin="round">
          <polygon points={poly([[0, 0, H], [W, 0, H], [W, D, H], [0, D, H]])} />
          <polyline points={poly([[W, 0, H], [W, 0, 0], [W, D, 0], [0, D, 0], [0, D, H]])} />
          <polyline points={poly([[W, D, 0], [W, D, H]])} />
        </g>
      </svg>
      <div className="flex flex-wrap gap-2 text-xs font-medium">
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 ring-1 ring-emerald-200">
          {t.boxChip}
        </span>
        <span className="rounded-full bg-gray-50 px-3 py-1 text-gray-700 ring-1 ring-gray-200">
          {t.fillChip}
        </span>
        <span className="rounded-full bg-amber-50 px-3 py-1 text-amber-700 ring-1 ring-amber-200">
          {t.thisSideUp}
        </span>
      </div>
    </div>
  );
}
