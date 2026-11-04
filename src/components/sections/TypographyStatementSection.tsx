"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { MaskedText } from "@/components/ui/MaskedText";
import { BlurReveal } from "@/components/ui/BlurReveal";

export function TypographyStatementSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
    restDelta: 0.001,
  });

  // Scroll-linked scale & blur transition
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.94, 1, 1.04]);
  const blurValue = useTransform(smoothProgress, [0, 0.45, 0.8], [10, 0, 0]);
  const opacity = useTransform(smoothProgress, [0, 0.35, 0.85], [0.2, 1, 0.7]);
  const xMarquee = useTransform(smoothProgress, [0, 1], [-80, 80]);

  return (
    <section
      ref={containerRef}
      className="py-32 sm:py-44 bg-[#070707] text-white relative z-20 overflow-hidden select-none border-b border-white/10 flex items-center justify-center min-h-[70vh]"
    >
      {/* Background Precision Blueprint Grid */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #fff 1px, transparent 1px),
              linear-gradient(to bottom, #fff 1px, transparent 1px)
            `,
            backgroundSize: "clamp(120px, 20vw, 220px) clamp(120px, 20vw, 220px)",
          }}
        />
        <div className="absolute top-12 left-8 text-white/20 text-sm font-mono">+</div>
        <div className="absolute top-12 right-8 text-white/20 text-sm font-mono">+</div>
        <div className="absolute bottom-12 left-8 text-white/20 text-sm font-mono">+</div>
        <div className="absolute bottom-12 right-8 text-white/20 text-sm font-mono">+</div>
      </div>

      {/* Kinetic Translucent Drift */}
      <motion.div
        style={{ x: xMarquee }}
        className="absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none select-none opacity-[0.03] text-[24vw] font-black uppercase tracking-tighter leading-none font-sans z-0 text-center text-white"
      >
        VISION
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 text-center">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 mb-8">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#eb5424]">
            * MANIFESTO // 2026
          </span>
        </div>

        {/* Oversized Masked & Scroll-Linked Typography */}
        <motion.div
          style={{ scale, opacity }}
          className="flex flex-col items-center justify-center"
        >
          <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-4">
            {/* Line 1 */}
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%", opacity: 0, filter: "blur(12px)" }}
                whileInView={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white font-sans leading-[1.04]"
              >
                FOCUSED ON
              </motion.div>
            </div>

            {/* Line 2 */}
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%", opacity: 0, filter: "blur(12px)" }}
                whileInView={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white/40 font-sans leading-[1.04]"
              >
                DESIGN THAT
              </motion.div>
            </div>

            {/* Line 3 */}
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%", opacity: 0, filter: "blur(12px)" }}
                whileInView={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#eb5424] font-sans leading-[1.04] drop-shadow-[0_10px_35px_rgba(235,84,36,0.35)]"
              >
                DELIVERS RESULTS.
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 max-w-2xl mx-auto"
          >
            <p className="text-sm sm:text-base text-gray-400 font-sans leading-relaxed">
              Every detail matters. From the sub-pixel smoothness of scrolling physics to the microsecond responsiveness of button states, software should feel effortless, elevated, and alive.
            </p>

            <div className="flex items-center justify-center gap-6 mt-8 font-mono text-xs text-white/50">
              <span>✦ LIGHTWEIGHT ARCHITECTURE</span>
              <span>✦ ZERO JANK</span>
              <span>✦ PIXEL PERFECT</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
