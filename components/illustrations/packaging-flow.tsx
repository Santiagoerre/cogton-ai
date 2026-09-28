const attributes = [
  { label: 'Dimensiones', y: 88 },
  { label: 'Peso', y: 136 },
  { label: 'Fragilidad', y: 184 },
  { label: 'Flexibilidad', y: 232 }
];

const savings = [
  { value: '-31%', label: 'volumen', x: 208, w: 112 },
  { value: '-18%', label: 'flete', x: 328, w: 96 },
  { value: '1', label: 'caja por pedido', x: 432, w: 142 }
];

const mailerPath =
  'M395 180 Q394 180 394 182 V196 Q394 198 396 198 H414 Q416 198 416 196 V182 Q416 180 414 180 H408 L405 176 H398 Z';

export function PackagingFlowIllustration() {
  return (
    <svg
      viewBox="16 32 582 390"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      role="img"
      aria-label="Tu WMS envía cada producto a Cogton AI, que analiza dimensiones, peso, fragilidad y flexibilidad, recomienda el embalaje correcto y devuelve el ahorro por envío."
    >
      <style>{`
        .pf-flow { stroke-dasharray: 4 5; animation: pf-flow 1.2s linear infinite; }
        .pf-pulse { animation: pf-pulse 2.4s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
        @keyframes pf-flow { to { stroke-dashoffset: -18; } }
        @keyframes pf-pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.35; transform: scale(0.7); } }
        /* Story on an 8s loop: attributes light up, then the mailer gets picked. */
        .pf-attr, .pf-pick, .pf-check { animation-duration: 8s; animation-iteration-count: infinite; animation-timing-function: ease-out; }
        .pf-attr { animation-name: pf-attr; }
        .pf-pick { animation-name: pf-pick; }
        .pf-check { animation-name: pf-check; transform-box: fill-box; transform-origin: center; }
        @keyframes pf-attr { 0% { opacity: 0; } 5%, 80% { opacity: 1; } 88%, 100% { opacity: 0; } }
        @keyframes pf-pick { 0%, 30% { opacity: 0; } 36%, 84% { opacity: 1; } 92%, 100% { opacity: 0; } }
        @keyframes pf-check {
          0%, 34% { opacity: 0; transform: scale(0.4); }
          40% { opacity: 1; transform: scale(1.15); }
          44%, 84% { opacity: 1; transform: scale(1); }
          92%, 100% { opacity: 0; transform: scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .pf-flow, .pf-pulse { animation: none; }
          .pf-attr, .pf-pick, .pf-check { animation: none; opacity: 1; transform: none; }
        }
      `}</style>
      <defs>
        <marker id="pf-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 Z" fill="#f59e0b" />
        </marker>
      </defs>

      {/* ---------- Your operation ---------- */}
      <text x="80" y="66" textAnchor="middle" fontSize="11.5" fontWeight="600" letterSpacing="1.5" fill="#6b7280">
        TU OPERACIÓN
      </text>
      <g stroke="#374151" strokeWidth="1.5" strokeLinejoin="round">
        <path d="M40 105 L80 85 L120 105 L80 125 Z" fill="#f9fafb" />
        <path d="M40 105 L80 125 L80 170 L40 150 Z" fill="#e5e7eb" />
        <path d="M80 125 L120 105 L120 150 L80 170 Z" fill="#f3f4f6" />
        <path d="M92 145 L110 136 L110 157 L92 166 Z" fill="white" />
        <path d="M92 151 L110 142 M92 157 L110 148 M92 163 L110 154" strokeWidth="1" />
      </g>
      <rect x="25" y="188" width="110" height="36" rx="10" fill="white" stroke="#d1d5db" />
      <text x="80" y="211" textAnchor="middle" fontSize="15" fontWeight="600" fill="#111827">
        Tu WMS
      </text>

      {/* WMS -> attribute rows */}
      {attributes.map(({ y }) => (
        <path
          key={y}
          d={`M135 206 C 172 206, 170 ${y + 19}, 208 ${y + 19}`}
          stroke="#10b981"
          strokeWidth="1.5"
          className="pf-flow"
        />
      ))}

      {/* ---------- AI analysis panel ---------- */}
      <rect x="190" y="40" width="400" height="250" rx="16" fill="#ecfdf5" stroke="#a7f3d0" />
      <text x="208" y="71" fontSize="14" fontWeight="700" fill="#047857">
        Análisis de producto con IA
      </text>
      <rect x="480" y="54" width="94" height="24" rx="12" fill="white" stroke="#6ee7b7" />
      <circle cx="494" cy="66" r="4" fill="#10b981" />
      <text x="503" y="70.5" fontSize="12.5" fontWeight="600" fill="#065f46">
        Cogton AI
      </text>

      {attributes.map(({ label, y }, i) => (
        <g key={label}>
          <rect x="208" y={y} width="130" height="38" rx="9" fill="white" stroke="#d1fae5" />
          <rect
            x="208"
            y={y}
            width="130"
            height="38"
            rx="9"
            fill="#f0fdf4"
            stroke="#10b981"
            strokeWidth="1.5"
            className="pf-attr"
            style={{ animationDelay: `${i * 0.45}s` }}
          />
          <circle
            cx="224"
            cy={y + 19}
            r="4"
            fill="#10b981"
            className="pf-pulse"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
          <text x="234" y={y + 24} fontSize="14" fontWeight="600" fill="#111827">
            {label}
          </text>
          {/* attribute rows -> recommendation */}
          <path
            d={`M338 ${y + 19} C 356 ${y + 19}, 352 179, 370 179`}
            stroke="#6ee7b7"
            strokeWidth="1.2"
          />
        </g>
      ))}

      {/* recommendation card */}
      <rect x="370" y="88" width="204" height="182" rx="12" fill="white" stroke="#d1fae5" />
      <text x="386" y="111" fontSize="11" fontWeight="700" letterSpacing="1" fill="#6b7280">
        EMBALAJE RECOMENDADO
      </text>

      {/* box (not selected) */}
      <g opacity="0.45">
        <rect x="382" y="122" width="180" height="38" rx="8" fill="#f9fafb" stroke="#e5e7eb" />
        <rect x="394" y="132" width="22" height="18" rx="2" stroke="#6b7280" strokeWidth="1.4" />
        <path d="M394 137 H416 M405 132 V150" stroke="#6b7280" strokeWidth="1" />
        <text x="426" y="146" fontSize="14" fill="#374151">Caja</text>
      </g>

      {/* poly mailer: neutral until the recommendation lands */}
      <g opacity="0.45">
        <rect x="382" y="168" width="180" height="40" rx="8" fill="#f9fafb" stroke="#e5e7eb" />
        <path d={mailerPath} stroke="#6b7280" strokeWidth="1.4" strokeLinejoin="round" />
        <text x="426" y="193" fontSize="14" fill="#374151">Bolsa mailer</text>
      </g>
      <g className="pf-pick">
        <rect x="382" y="168" width="180" height="40" rx="8" fill="#ecfdf5" stroke="#10b981" strokeWidth="1.5" />
        <path d={mailerPath} stroke="#059669" strokeWidth="1.4" strokeLinejoin="round" fill="white" />
        <text x="426" y="193" fontSize="14" fontWeight="700" fill="#065f46">
          Bolsa mailer
        </text>
      </g>
      <g className="pf-check">
        <circle cx="544" cy="188" r="9" fill="#10b981" />
        <path d="M539.5 188 L542.5 191 L548.5 185" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* padded envelope (not selected) */}
      <g opacity="0.45">
        <rect x="382" y="216" width="180" height="38" rx="8" fill="#f9fafb" stroke="#e5e7eb" />
        <rect x="394" y="227" width="22" height="16" rx="2" stroke="#6b7280" strokeWidth="1.4" />
        <path d="M394 228 L405 236 L416 228" stroke="#6b7280" strokeWidth="1" />
        <text x="426" y="240" fontSize="14" fill="#374151">Sobre acolchado</text>
      </g>

      {/* ---------- Savings panel ---------- */}
      <rect x="190" y="310" width="400" height="104" rx="16" fill="#fffbeb" stroke="#fde68a" />
      <text x="208" y="339" fontSize="14" fontWeight="700" fill="#b45309">
        Ahorro en cada envío
      </text>
      {savings.map(({ value, label, x, w }) => (
        <g key={label}>
          <rect x={x} y="352" width={w} height="42" rx="9" fill="white" stroke="#fde68a" />
          <text x={x + 10} y="378.5" fontSize="13.5" fill="#374151">
            <tspan fontSize="16" fontWeight="700" fill="#b45309">{value}</tspan>
            <tspan dx="4">{label}</tspan>
          </text>
        </g>
      ))}

      {/* savings -> back to WMS */}
      <path
        d="M190 362 C 120 362, 80 310, 80 232"
        stroke="#f59e0b"
        strokeWidth="1.5"
        className="pf-flow"
        markerEnd="url(#pf-arrow)"
      />
    </svg>
  );
}
