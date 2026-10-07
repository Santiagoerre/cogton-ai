import { getDict } from '@/lib/i18n/server';

const attributeYs = [88, 136, 184, 232];

const mailerPath =
  'M395 180 Q394 180 394 182 V196 Q394 198 396 198 H414 Q416 198 416 196 V182 Q416 180 414 180 H408 L405 176 H398 Z';

export async function PackagingFlowIllustration() {
  const { visuals } = await getDict();
  const t = visuals.flow;
  const attributes = attributeYs.map((y, i) => ({ label: t.attributes[i], y }));
  const savings = [
    { value: '-31%', label: t.volume, x: 208, w: 112 },
    { value: '-18%', label: t.freight, x: 328, w: 96 },
    { value: '1', label: t.boxPerOrder, x: 432, w: 142 }
  ];

  return (
    <svg
      viewBox="16 32 582 390"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      role="img"
      aria-label={t.alt}
    >
      <defs>
        <marker id="pf-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 Z" fill="#B8862B" />
        </marker>
      </defs>

      {/* ---------- Your operation ---------- */}
      <text x="80" y="66" textAnchor="middle" fontSize="11.5" fontWeight="600" letterSpacing="1.5" fill="#6F6552">
        {t.yourOperation}
      </text>
      <g stroke="#433C31" strokeWidth="1.5" strokeLinejoin="round">
        <path d="M40 105 L80 85 L120 105 L80 125 Z" fill="#FBF8F3" />
        <path d="M40 105 L80 125 L80 170 L40 150 Z" fill="#E3DCCF" />
        <path d="M80 125 L120 105 L120 150 L80 170 Z" fill="#EFE9DF" />
        <path d="M92 145 L110 136 L110 157 L92 166 Z" fill="white" />
        <path d="M92 151 L110 142 M92 157 L110 148 M92 163 L110 154" strokeWidth="1" />
      </g>
      <rect x="25" y="188" width="110" height="36" rx="10" fill="white" stroke="#D0C6B5" />
      <text x="80" y="211" textAnchor="middle" fontSize="15" fontWeight="600" fill="#221F19">
        {t.yourWms}
      </text>

      {/* WMS -> attribute rows */}
      {attributes.map(({ y }) => (
        <path
          key={y}
          d={`M135 206 C 172 206, 170 ${y + 19}, 208 ${y + 19}`}
          stroke="#339466"
          strokeWidth="1.5"
          className="pf-flow"
        />
      ))}

      {/* ---------- AI analysis panel ---------- */}
      <rect x="190" y="40" width="400" height="250" rx="16" fill="#EEF6F1" stroke="#B4DCC3" />
      <text x="208" y="71" fontSize="14" fontWeight="700" fill="#1D6245">
        {t.analysis}
      </text>
      <rect x="480" y="54" width="94" height="24" rx="12" fill="white" stroke="#86C6A0" />
      <circle cx="494" cy="66" r="4" fill="#339466" />
      <text x="503" y="70.5" fontSize="12.5" fontWeight="600" fill="#194E39">
        Cogton AI
      </text>

      {attributes.map(({ label, y }, i) => (
        <g key={label}>
          <rect x="208" y={y} width="130" height="38" rx="9" fill="white" stroke="#D5EBDD" />
          <rect
            x="208"
            y={y}
            width="130"
            height="38"
            rx="9"
            fill="#F2F8F4"
            stroke="#339466"
            strokeWidth="1.5"
            className="pf-attr"
            style={{ animationDelay: `${i * 0.45}s` }}
          />
          <circle
            cx="224"
            cy={y + 19}
            r="4"
            fill="#339466"
            className="pf-pulse"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
          <text x="234" y={y + 24} fontSize="14" fontWeight="600" fill="#221F19">
            {label}
          </text>
          {/* attribute rows -> recommendation */}
          <path
            d={`M338 ${y + 19} C 356 ${y + 19}, 352 179, 370 179`}
            stroke="#86C6A0"
            strokeWidth="1.2"
          />
        </g>
      ))}

      {/* recommendation card */}
      <rect x="370" y="88" width="204" height="182" rx="12" fill="white" stroke="#D5EBDD" />
      <text x="386" y="111" fontSize="11" fontWeight="700" letterSpacing="1" fill="#6F6552">
        {t.recommended}
      </text>

      {/* box (not selected) */}
      <g opacity="0.45">
        <rect x="382" y="122" width="180" height="38" rx="8" fill="#FBF8F3" stroke="#E3DCCF" />
        <rect x="394" y="132" width="22" height="18" rx="2" stroke="#6F6552" strokeWidth="1.4" />
        <path d="M394 137 H416 M405 132 V150" stroke="#6F6552" strokeWidth="1" />
        <text x="426" y="146" fontSize="14" fill="#433C31">{t.box}</text>
      </g>

      {/* poly mailer: neutral until the recommendation lands */}
      <g opacity="0.45">
        <rect x="382" y="168" width="180" height="40" rx="8" fill="#FBF8F3" stroke="#E3DCCF" />
        <path d={mailerPath} stroke="#6F6552" strokeWidth="1.4" strokeLinejoin="round" />
        <text x="426" y="193" fontSize="14" fill="#433C31">{t.mailer}</text>
      </g>
      <g className="pf-pick">
        <rect x="382" y="168" width="180" height="40" rx="8" fill="#EEF6F1" stroke="#339466" strokeWidth="1.5" />
        <path d={mailerPath} stroke="#237A53" strokeWidth="1.4" strokeLinejoin="round" fill="white" />
        <text x="426" y="193" fontSize="14" fontWeight="700" fill="#194E39">
          {t.mailer}
        </text>
      </g>
      <g className="pf-check">
        <circle cx="544" cy="188" r="9" fill="#339466" />
        <path d="M539.5 188 L542.5 191 L548.5 185" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* padded envelope (not selected) */}
      <g opacity="0.45">
        <rect x="382" y="216" width="180" height="38" rx="8" fill="#FBF8F3" stroke="#E3DCCF" />
        <rect x="394" y="227" width="22" height="16" rx="2" stroke="#6F6552" strokeWidth="1.4" />
        <path d="M394 228 L405 236 L416 228" stroke="#6F6552" strokeWidth="1" />
        <text x="426" y="240" fontSize="14" fill="#433C31">{t.padded}</text>
      </g>

      {/* ---------- Savings panel ---------- */}
      <rect x="190" y="310" width="400" height="104" rx="16" fill="#FBF5E7" stroke="#EBD7A4" />
      <text x="208" y="339" fontSize="14" fontWeight="700" fill="#8A6420">
        {t.savingsTitle}
      </text>
      {savings.map(({ value, label, x, w }) => (
        <g key={label}>
          <rect x={x} y="352" width={w} height="42" rx="9" fill="white" stroke="#EBD7A4" />
          <text x={x + 10} y="378.5" fontSize="13.5" fill="#433C31">
            <tspan fontSize="16" fontWeight="700" fill="#8A6420">{value}</tspan>
            <tspan dx="4">{label}</tspan>
          </text>
        </g>
      ))}

      {/* savings -> back to WMS */}
      <path
        d="M190 362 C 120 362, 80 310, 80 232"
        stroke="#B8862B"
        strokeWidth="1.5"
        className="pf-flow"
        markerEnd="url(#pf-arrow)"
      />
    </svg>
  );
}
