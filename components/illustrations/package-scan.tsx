export function PackageScanIllustration() {
  return (
    <svg
      viewBox="0 0 520 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <defs>
        <linearGradient id="ps-mailer" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#ecfdf5" />
        </linearGradient>
      </defs>

      {/* backdrop */}
      <ellipse cx="260" cy="190" rx="250" ry="170" fill="#ecfdf5" />

      {/* product */}
      <g>
        <rect x="55" y="155" width="70" height="70" rx="10" fill="white" stroke="#9ca3af" strokeWidth="2" strokeDasharray="4 4" />
        <circle cx="90" cy="190" r="10" fill="#d1d5db" />

        {/* fragile badge */}
        <g transform="translate(28, 118)">
          <circle r="15" fill="white" stroke="#f59e0b" strokeWidth="2" />
          <path d="M0 -7 L6 6 H-6 Z" stroke="#f59e0b" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
          <circle cx="0" cy="3" r="1.2" fill="#f59e0b" />
        </g>

        {/* flexible badge */}
        <g transform="translate(28, 262)">
          <circle r="15" fill="white" stroke="#10b981" strokeWidth="2" />
          <path d="M-7 3 Q -3 -6 0 3 T 7 3" stroke="#10b981" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        </g>

        {/* weight badge */}
        <g transform="translate(140, 128)">
          <circle r="15" fill="white" stroke="#6366f1" strokeWidth="2" />
          <path d="M0 -6 V6 M-6 -3 H6" stroke="#6366f1" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M-6 -3 L-8 5 H8 L6 -3" stroke="#6366f1" strokeWidth="1.4" fill="none" strokeLinejoin="round" />
        </g>
      </g>

      {/* connector product -> AI */}
      <path d="M132 190 H206" stroke="#10b981" strokeWidth="2" strokeDasharray="2 6" strokeLinecap="round" />

      {/* AI node */}
      <g transform="translate(232, 190)">
        <circle r="34" fill="#10b981" />
        <rect x="-11" y="-11" width="22" height="22" rx="4" fill="none" stroke="white" strokeWidth="2" />
        <circle cx="0" cy="0" r="3.5" fill="white" />
        <path d="M-11 -5 H-17 M-11 5 H-17 M11 -5 H17 M11 5 H17 M-5 -11 V-17 M5 -11 V-17 M-5 11 V17 M5 11 V17" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
      </g>

      {/* fan lines to 3 packaging options */}
      <path d="M262 175 L360 110" stroke="#d1d5db" strokeWidth="2" strokeDasharray="2 6" />
      <path d="M266 190 H345" stroke="#10b981" strokeWidth="2.5" />
      <path d="M262 205 L360 275" stroke="#d1d5db" strokeWidth="2" strokeDasharray="2 6" />

      {/* option 1: box (not selected) */}
      <g opacity="0.45" transform="translate(360, 78)">
        <rect x="0" y="0" width="68" height="56" rx="6" fill="white" stroke="#9ca3af" strokeWidth="2" />
        <path d="M0 16 H68 M34 0 V56" stroke="#9ca3af" strokeWidth="1.4" />
      </g>

      {/* option 2: poly mailer bag (selected) */}
      <g transform="translate(350, 162)">
        <path
          d="M4 12 Q0 12 0 20 V52 Q0 60 8 60 H72 Q80 60 80 52 V20 Q80 12 72 12 H44 L36 0 H12 Z"
          fill="url(#ps-mailer)"
          stroke="#10b981"
          strokeWidth="2.5"
        />
        <path d="M12 12 L20 24 H60 L68 12" stroke="#10b981" strokeWidth="1.4" opacity="0.5" fill="none" />
      </g>
      <circle cx="440" cy="160" r="18" fill="#10b981" />
      <path d="M431 160 L437 166 L450 152" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* option 3: padded envelope (not selected) */}
      <g opacity="0.45" transform="translate(360, 258)">
        <rect x="0" y="6" width="68" height="46" rx="6" fill="white" stroke="#9ca3af" strokeWidth="2" />
        <path d="M0 6 L34 30 L68 6" stroke="#9ca3af" strokeWidth="1.6" fill="none" />
        <circle cx="18" cy="36" r="2" fill="#9ca3af" />
        <circle cx="34" cy="40" r="2" fill="#9ca3af" />
        <circle cx="50" cy="36" r="2" fill="#9ca3af" />
      </g>

      {/* floating accents */}
      <circle cx="150" cy="90" r="4" fill="#10b981" opacity="0.4" />
      <circle cx="470" cy="230" r="3" fill="#10b981" opacity="0.5" />
    </svg>
  );
}
