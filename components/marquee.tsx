'use client';

import { Fragment, useState, type CSSProperties, type ReactNode } from 'react';
import { Pause, Play } from 'lucide-react';

export function Marquee({
  children,
  duration = 40,
  repeat = 1,
  pauseLabel,
  playLabel
}: {
  children: ReactNode;
  duration?: number;
  /** Repeat the content within each half so short lists still fill wide screens. */
  repeat?: number;
  pauseLabel: string;
  playLabel: string;
}) {
  // Moving content needs a pause control that works without a mouse.
  const [paused, setPaused] = useState(false);
  const content = Array.from({ length: repeat }, (_, i) => (
    <Fragment key={i}>{children}</Fragment>
  ));
  return (
    <div className="relative">
      <div
        data-paused={paused || undefined}
        className="marquee relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
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
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-label={paused ? playLabel : pauseLabel}
        aria-pressed={paused}
        className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-gray-500 outline-none transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:ring-2 focus-visible:ring-emerald-300 motion-reduce:hidden sm:right-4"
      >
        {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
      </button>
    </div>
  );
}
