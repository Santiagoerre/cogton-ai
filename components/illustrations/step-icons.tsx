function IconWrap({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto w-14 h-14"
    >
      <circle cx="32" cy="32" r="32" fill="#ecfdf5" />
      {children}
    </svg>
  );
}

export function MeasureIcon() {
  return (
    <IconWrap>
      <rect x="18" y="22" width="28" height="20" rx="2" stroke="#059669" strokeWidth="2.2" />
      <path d="M18 30 H46 M24 22 V42 M32 22 V42 M40 22 V42" stroke="#059669" strokeWidth="1.4" opacity="0.6" />
    </IconWrap>
  );
}

export function OptimizeIcon() {
  return (
    <IconWrap>
      <path
        d="M32 16 L44 22 V34 C44 41 38.5 46.5 32 48 C25.5 46.5 20 41 20 34 V22 L32 16Z"
        stroke="#059669"
        strokeWidth="2.2"
        fill="#d1fae5"
      />
      <path
        d="M26 32 L30.5 36.5 L39 27"
        stroke="#059669"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </IconWrap>
  );
}

export function SaveIcon() {
  return (
    <IconWrap>
      <path
        d="M20 44 L27 30 L35 38 L44 20"
        stroke="#059669"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M36 20 H44 V28" stroke="#059669" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </IconWrap>
  );
}
