"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface MaskedTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
}

export function MaskedText({
  text,
  className = "",
  wordClassName = "",
  delay = 0,
  stagger = 0.04,
  duration = 0.65,
}: MaskedTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const words = text.split(" ");

  return (
    <span ref={ref} className={`inline-flex flex-wrap gap-x-[0.28em] ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em]">
          <motion.span
            initial={{ y: "115%", opacity: 0 }}
            animate={
              isInView
                ? { y: "0%", opacity: 1 }
                : { y: "115%", opacity: 0 }
            }
            transition={{
              duration,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`inline-block ${wordClassName}`}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
