"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  /** A statistic such as "500+", "120M" or "98%": the leading digits animate, the rest is kept as a suffix. */
  value: string;
  className?: string;
  duration?: number;
};

export function CountUp({ value, className, duration = 1400 }: CountUpProps) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : value;
  const animatable = match !== null;

  const ref = useRef<HTMLSpanElement>(null);
  // Render the final value on the server and for users who never scroll here.
  const [current, setCurrent] = useState(target);

  useEffect(() => {
    const element = ref.current;
    if (!element || !animatable) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCurrent(Math.round(target * eased));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        setCurrent(0);
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, duration, animatable]);

  return (
    <span ref={ref} className={className}>
      {current}
      {suffix}
    </span>
  );
}
