"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { PortfolioHeader } from "@/components/ui/PortfolioHeader";
import { MaskedText } from "@/components/ui/MaskedText";
import { TiltCard } from "@/components/ui/TiltCard";
import { FadeContent } from "@/components/ui/FadeContent";

interface FramerHeroProps {
  startAnimation?: boolean;
}

export function FramerHero({ startAnimation = true }: FramerHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll-linked parallax tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Parallax transformations for scroll up and down
  const yCharacter = useTransform(smoothProgress, [0, 1], [0, 160]);
  const scaleCharacter = useTransform(smoothProgress, [0, 1], [1, 0.92]);
  const xWatermark = useTransform(smoothProgress, [0, 1], [0, 120]);
  const opacityWatermark = useTransform(smoothProgress, [0, 0.85], [0.15, 0.02]);
  const opacityForeground = useTransform(smoothProgress, [0, 0.85], [1, 0.2]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen bg-[#eb5424] text-white overflow-hidden flex flex-col justify-between select-none"
    >
      {/* Background Precision Blueprint Grid & Crosshairs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.25) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.25) 1px, transparent 1px)
            `,
            backgroundSize: "clamp(100px, 16vw, 180px) clamp(100px, 16vw, 180px)",
          }}
        />

        {/* Precision Crosshairs (+) */}
        <div className="absolute top-28 left-8 text-white/30 text-sm font-mono">+</div>
        <div className="absolute top-28 right-8 text-white/30 text-sm font-mono">+</div>
        <div className="absolute top-1/2 left-12 text-white/20 text-sm font-mono">+</div>
        <div className="absolute top-1/2 right-12 text-white/20 text-sm font-mono">+</div>
        <div className="absolute bottom-28 left-8 text-white/30 text-sm font-mono">+</div>
        <div className="absolute bottom-28 right-8 text-white/30 text-sm font-mono">+</div>
      </div>

      {/* TOP HEADER */}
      <PortfolioHeader />

      {/* OVERSIZED BACKGROUND WATERMARK TYPOGRAPHY - CENTER ALIGNED */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <motion.div
          style={{ opacity: opacityWatermark }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={startAnimation ? { opacity: 0.15, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full text-center font-black tracking-tighter uppercase font-sans text-[22vw] leading-none text-white"
        >
          AMAAN
        </motion.div>
      </div>

      {/* HERO CENTER CHARACTER WITH CLIP-PATH & SCALE REVEAL */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none z-10 overflow-hidden">
        <motion.div
          initial={{
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
            opacity: 0,
            scale: 0.9,
            y: 80,
          }}
          animate={
            startAnimation
              ? {
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }
              : {}
          }
          transition={{ duration: 1.15, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-[300px] sm:w-[540px] md:w-[680px] lg:w-[820px] xl:w-[900px] h-[55vh] sm:h-[75vh] md:h-[82vh] max-h-[860px] mb-8 sm:mb-0"
        >
          <motion.div
            style={{ y: yCharacter, scale: scaleCharacter }}
            className="relative w-full h-full"
          >
            <Image
              src="/amaan-cartoon-big.png"
              alt="Amaan Shaikh Frontend Engineer"
              fill
              sizes="(max-width: 768px) 100vw, 900px"
              className="object-contain object-bottom drop-shadow-[0_25px_45px_rgba(0,0,0,0.45)]"
              priority
              unoptimized
            />
          </motion.div>
        </motion.div>
      </div>

      {/* FOREGROUND CONTENT LAYER (Z-20) */}
      <motion.div
        style={{ opacity: opacityForeground }}
        className="relative z-20 max-w-7xl mx-auto w-full px-6 sm:px-12 flex-1 flex flex-col justify-between pt-4 pb-8 sm:pb-10"
      >
        {/* Top/Mid Row: Statement Quote & Floating Code Card */}
        <div className="flex items-start justify-between gap-6 w-full mt-2 sm:mt-4">
          {/* Middle Left Statement Quote with FadeContent */}
          <FadeContent
            effect="fade"
            duration={1.1}
            ease="power2.out"
            trigger="mount"
            delay={0.35}
            className="hidden sm:block max-w-[320px] md:max-w-md pointer-events-auto"
          >
            <div className="text-white/60 font-mono text-sm mb-2 font-light">
              +
            </div>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white leading-relaxed font-sans drop-shadow-sm">
              I BUILD HIGH-PERFORMANCE WEB APPLICATIONS AND USER-CENTERED EXPERIENCES THAT ARE SIMPLE, SMART, AND IMPACTFUL.
            </p>
          </FadeContent>

          {/* Top Right: Code Studio Card */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={startAnimation ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 50, scale: 0.95 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[200px] xs:max-w-[220px] sm:max-w-[320px] pointer-events-auto ml-auto"
          >
            <TiltCard tiltIntensity={4}>
              <div className="rounded-xl sm:rounded-2xl bg-black/85 backdrop-blur-xl p-2.5 sm:p-5 border border-white/20 shadow-2xl">
                {/* Titlebar */}
                <div className="flex items-center justify-between pb-1.5 mb-1.5 sm:pb-3 sm:mb-3 border-b border-white/10 text-white/60 font-mono text-[9px] sm:text-[10px]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <span className="text-white/80 font-bold uppercase tracking-widest flex items-center gap-1 text-[8px] sm:text-[10px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    dev.config.ts
                  </span>
                </div>

                {/* Code snippets */}
                <div className="font-mono text-[9px] sm:text-[11px] space-y-0.5 sm:space-y-1.5 leading-relaxed">
                  <div className="text-gray-400">
                    // Full-Stack Web Architecture
                  </div>
                  <div className="text-gray-400">
                    <span className="text-[#eb5424]">const</span> dev = &#123;
                  </div>
                  <div className="pl-2 sm:pl-3 text-white/90">
                    name: <span className="text-emerald-400">&quot;Amaan&quot;</span>,
                  </div>
                  <div className="pl-2 sm:pl-3 text-white/90">
                    role: <span className="text-amber-400">&quot;Web Dev&quot;</span>,
                  </div>
                  <div className="pl-2 sm:pl-3 text-white/90">
                    stack: [<span className="text-sky-300">&quot;Next.js&quot;</span>, <span className="text-sky-300">&quot;TS&quot;</span>],
                  </div>
                  <div className="pl-2 sm:pl-3 text-white/90">
                    status: <span className="text-emerald-400">&quot;Ready&quot;</span>
                  </div>
                  <div className="text-gray-400">&#125;;</div>
                </div>

                {/* Card footer pill */}
                <div className="mt-1.5 pt-1.5 sm:mt-3 sm:pt-3 border-t border-white/10 flex items-center justify-between text-[8px] sm:text-[10px] font-mono text-gray-400">
                  <span>&gt; _ * DEVTOOLS</span>
                  <span>/TypeScript</span>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
