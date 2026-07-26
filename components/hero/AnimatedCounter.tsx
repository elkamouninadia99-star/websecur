"use client";

import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  to: number;
  from?: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
}

export default function AnimatedCounter({
  to,
  from = 0,
  duration = 2000,
  decimals = 0,
  suffix = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      const value = from + (to - from) * progress;

      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [from, to, duration]);

  return (
    <span>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}