"use client";

import { useMemo } from "react";

export default function Sparkles({ count = 22 }: { count?: number }) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 2 + Math.random() * 3,
        duration: 2.5 + Math.random() * 3.5,
        delay: Math.random() * 4
      })),
    [count]
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((dot) => (
        <span
          key={dot.id}
          className="sparkle"
          style={{
            left: `${dot.left}%`,
            top: `${dot.top}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            animationDuration: `${dot.duration}s`,
            animationDelay: `${dot.delay}s`
          }}
        />
      ))}
    </div>
  );
}
