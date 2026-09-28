import { Fragment, type CSSProperties, type ReactNode } from 'react';

export function Marquee({
  children,
  duration = 40,
  repeat = 1
}: {
  children: ReactNode;
  duration?: number;
  /** Repeat the content within each half so short lists still fill wide screens. */
  repeat?: number;
}) {
  const content = Array.from({ length: repeat }, (_, i) => (
    <Fragment key={i}>{children}</Fragment>
  ));
  return (
    <div className="marquee relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className="marquee-track flex w-max"
        style={{ '--marquee-duration': `${duration}s` } as CSSProperties}
      >
        <div className="flex shrink-0 items-center">{content}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {content}
        </div>
      </div>
    </div>
  );
}
