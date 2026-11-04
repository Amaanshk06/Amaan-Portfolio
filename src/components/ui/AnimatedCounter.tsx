"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  delay?: number;
  className?: string;
}

export function AnimatedCounter({
  from = 0,
  to,
  duration = 1.8,
  prefix = "",
  suffix = "",
  delay = 0,
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!isInView) {
      hasAnimatedRef.current = false;
      setCount(from);
      return;
    }

    if (hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const timeoutId = setTimeout(() => {
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        // Ease-out expo
        const easeOutProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentCount = Math.round(from + (to - from) * easeOutProgress);
        setCount(currentCount);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step);
        }
      };

      animationFrameId = requestAnimationFrame(step);
    }, delay * 1000);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, from, to, duration, delay]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
