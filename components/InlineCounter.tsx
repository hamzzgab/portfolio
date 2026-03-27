"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface InlineCounterProps {
  target: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
}

export default function InlineCounter({
  target,
  suffix = "",
  decimals = 0,
  duration = 1500,
}: InlineCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!isInView || started.current) return;
    started.current = true;

    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  const display = decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toString();

  return (
    <span ref={ref} className="text-zinc-200 font-medium tabular-nums">
      {display}{suffix}
    </span>
  );
}
