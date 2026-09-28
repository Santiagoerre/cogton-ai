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
  { at: [0, 0, 0], size: [6, 8, 3], colors: ['#a7f3d0', '#34d399', '#6ee7b7'] },
  { at: [0, 0, 3], size: [5, 4, 2], colors: ['#fde68a', '#f59e0b', '#fbbf24'] },
  { at: [6, 0, 0], size: [4, 4, 4], colors: ['#c7d2fe', '#6366f1', '#818cf8'] },
  { at: [6, 4, 0], size: [4, 4, 2], colors: ['#a7f3d0', '#10b981', '#34d399'] }
];

export function CartonizationVisual({ compact = false }: { compact?: boolean }) {
  const [W, D, H] = BOX;
  return (
    <div className="rounded-2xl bg-white p-6 shadow-xl shadow-gray-200/60 ring-1 ring-gray-200">
      <div className="flex items-center justify-between text-sm">
        <span className="font-semibold text-gray-900">Pedido #10482</span>
        <span className="text-gray-500">4 ítems</span>
      </div>
      <svg
        viewBox="-115 -100 250 240"
        className={`mx-auto my-4 w-full ${compact ? 'max-w-64' : 'max-w-sm'}`}
        role="img"
        aria-label="Vista 3D de cuatro productos acomodados dentro de una caja"
      >
        {/* back edges of the box */}
        <g stroke="#9ca3af" strokeWidth="1.2" strokeDasharray="4 4" fill="none">
          <polyline points={poly([[0, D, 0], [0, 0, 0], [W, 0, 0]])} />
          <polyline points={poly([[0, 0, 0], [0, 0, H]])} />
        </g>
        {items.map((item, i) => (
          <Cuboid key={i} {...item} />
        ))}
        {/* front edges of the box */}
        <g stroke="#374151" strokeWidth="1.5" fill="none" strokeLinejoin="round">
          <polygon points={poly([[0, 0, H], [W, 0, H], [W, D, H], [0, D, H]])} />
          <polyline points={poly([[W, 0, H], [W, 0, 0], [W, D, 0], [0, D, 0], [0, D, H]])} />
          <polyline points={poly([[W, D, 0], [W, D, H]])} />
        </g>
      </svg>
      <div className="flex flex-wrap gap-2 text-xs font-medium">
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 ring-1 ring-emerald-200">
          Caja M · 30 × 24 × 18 cm
        </span>
        <span className="rounded-full bg-gray-50 px-3 py-1 text-gray-700 ring-1 ring-gray-200">
          86% de llenado
        </span>
        <span className="rounded-full bg-amber-50 px-3 py-1 text-amber-700 ring-1 ring-amber-200">
          Este lado arriba
        </span>
      </div>
    </div>
  );
}
