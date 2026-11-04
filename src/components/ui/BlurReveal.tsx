"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface BlurRevealProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  initialBlur?: number;
  yOffset?: number;
}

export function BlurReveal({
  children,
  className = "",
  duration = 0.8,
  delay = 0,
  initialBlur = 12,
  yOffset = 24,
}: BlurRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.25 });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        filter: `blur(${initialBlur}px)`,
        y: yOffset,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            }
          : {
              opacity: 0,
              filter: `blur(${initialBlur}px)`,
              y: yOffset,
            }
      }
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
