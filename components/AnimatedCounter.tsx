"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
  label: string;
}

export default function AnimatedCounter({
  target,
  suffix = "",
  decimals = 0,
  duration = 2000,
  label,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration]);

  const display = decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toString();

  return (
    <div>
      <span className="text-teal-400 font-semibold text-lg tabular-nums">
        {display}{suffix}
      </span>
      <p className="text-[10px] text-zinc-600 mt-0.5">{label}</p>
    </div>
  );
}
