"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ScrollBlurRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export function ScrollBlurReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.75,
  yOffset = 24,
}: ScrollBlurRevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0.15,
        filter: "blur(12px)",
        y: yOffset,
      }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      }}
      viewport={{ once: false, amount: 0.25 }}
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
