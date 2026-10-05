import { ImageResponse } from 'next/og';

// Link preview card for LinkedIn, X, Slack, etc. Crawlers send no locale
// cookie, so the card uses the default (Spanish) copy.
export const alt = 'Cogton AI — El embalaje correcto, automáticamente';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const DARK = '#0a0a0a';
const LIGHT = '#e5e7eb';

// Same zigzag mark as components/logo.tsx.
const panels: { points: string; fill: string }[] = [
  { points: '72,705 530,440 975,725 525,995', fill: DARK },
  { points: '72,495 530,230 975,725 525,995', fill: LIGHT },
  { points: '72,495 530,230 975,505 525,775', fill: DARK },
  { points: '72,295 530,30 975,505 525,775', fill: LIGHT },
  { points: '72,295 530,30 975,285 525,555', fill: DARK }
];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: '#ffffff',
          color: DARK
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <svg width="64" height="68" viewBox="60 20 930 985">
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
          <div style={{ fontSize: 40, fontWeight: 700 }}>Cogton AI</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.1 }}>
            El embalaje correcto,
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.1,
              color: '#059669'
            }}
          >
            automáticamente
          </div>
          <div
            style={{
              marginTop: 32,
              fontSize: 32,
              lineHeight: 1.4,
              color: '#4b5563',
              maxWidth: 900
            }}
          >
            La caja justa para cada pedido y el embalaje ideal para cada
            producto. Conectado a tu WMS.
          </div>
        </div>

        <div style={{ fontSize: 26, color: '#6b7280' }}>ai.cogton.com</div>
      </div>
    ),
    size
  );
}
