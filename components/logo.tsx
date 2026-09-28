// Cogton mark: a sheet folded in a zigzag, black on one side and white on the
// other. Panels are drawn back to front so each fold overlaps the one below.
const DARK = '#0a0a0a';
const LIGHT = '#e5e7eb';

const panels: { points: string; fill: string }[] = [
  { points: '72,705 530,440 975,725 525,995', fill: DARK },
  { points: '72,495 530,230 975,725 525,995', fill: LIGHT },
  { points: '72,495 530,230 975,505 525,775', fill: DARK },
  { points: '72,295 530,30 975,505 525,775', fill: LIGHT },
  { points: '72,295 530,30 975,285 525,555', fill: DARK }
];

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="60 20 930 985"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {panels.map(({ points, fill }) => (
        <polygon
          key={points}
          points={points}
          fill={fill}
          stroke={fill === LIGHT ? '#d1d5db' : DARK}
          strokeWidth="6"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  );
}
