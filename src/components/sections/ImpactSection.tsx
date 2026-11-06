"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Star, Zap, Award, CheckCircle2, TrendingUp } from "lucide-react";
import { BlurReveal } from "@/components/ui/BlurReveal";
import { FadeContent } from "@/components/ui/FadeContent";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { TiltCard } from "@/components/ui/TiltCard";

export function ImpactSection() {
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

  // Kinetic horizontal scroll drift for watermark & parallax columns
  const xWatermark = useTransform(smoothProgress, [0, 1], [100, -100]);
  const yCol1 = useTransform(smoothProgress, [0, 1], [20, -20]);
  const yCol2 = useTransform(smoothProgress, [0, 1], [20, -20]);
  const yCol3 = useTransform(smoothProgress, [0, 1], [20, -20]);

  return (
    <section
      ref={containerRef}
      id="about"
      className="py-24 sm:py-32 bg-white text-[#0a0a0a] relative z-20 overflow-hidden select-none border-b border-gray-100"
    >
      {/* Precision Blueprint Grid & Crosshairs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: "clamp(120px, 20vw, 220px) clamp(120px, 20vw, 220px)",
          }}
        />
        <div className="absolute top-12 left-8 text-black/20 text-sm font-mono">+</div>
        <div className="absolute top-12 right-8 text-black/20 text-sm font-mono">+</div>
        <div className="absolute bottom-12 left-8 text-black/20 text-sm font-mono">+</div>
        <div className="absolute bottom-12 right-8 text-black/20 text-sm font-mono">+</div>
      </div>

      {/* Giant Translucent Watermark */}
      <motion.div
        style={{ x: xWatermark }}
        className="absolute top-4 sm:-top-10 right-0 pointer-events-none select-none opacity-[0.03] text-[18vw] font-black uppercase tracking-tighter leading-none font-sans z-0 whitespace-nowrap"
      >
        IMPACT
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">
        {/* Top Header Tag & Centered Section Heading with Black and Grey Theme */}
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#eb5424]">
              * PROVEN PRODUCTION IMPACT
            </span>
          </div>

          <FadeContent
            effect="focus"
            duration={1.2}
            ease="power2.out"
            blur={10}
            threshold={0.15}
            trigger="scroll"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black uppercase tracking-tight text-[#0a0a0a] font-sans leading-[1.08] text-center">
              <div>ENGINEERING DIGITAL PRODUCTS</div>
              <div className="text-gray-400">THAT ACCELERATE GROWTH.</div>
            </h2>
          </FadeContent>

          <FadeContent
            effect="fade"
            duration={1.0}
            ease="power2.out"
            threshold={0.15}
            trigger="scroll"
            delay={0.15}
          >
            <p className="text-xs sm:text-sm font-sans font-medium uppercase tracking-wider text-gray-500 max-w-2xl mx-auto mt-5 sm:mt-6 leading-relaxed text-center">
              I SPECIALIZE IN ARCHITECTING FAST, INTUITIVE WEB APPLICATIONS AND HIGH-CONVERTING ECOMMERCE PLATFORMS WITH CLEAN CODE AND MODERN AESTHETICS.
            </p>
          </FadeContent>
        </div>

        {/* 3 Columns Layout with Parallax */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-stretch">
          {/* Column 1: Metrics Cards with Animated Counters (4 cols) */}
          <motion.div style={{ y: yCol1 }} className="lg:col-span-4 grid grid-cols-2 lg:flex lg:flex-col gap-3 sm:gap-6 order-2 lg:order-1 h-full">
            {/* Metric 1 */}
            <TiltCard tiltIntensity={5} className="flex-1 flex flex-col h-full">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#f9fafb] border border-gray-200 hover:border-[#eb5424] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full flex-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-2 sm:mb-4">
                    <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#eb5424]">
                      * DEV EXP
                    </span>
                    <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#eb5424]" />
                  </div>
                  <div className="text-3xl sm:text-7xl font-black tracking-tight text-[#0a0a0a] font-sans mb-1.5 sm:mb-3 group-hover:text-[#eb5424] transition-colors">
                    <AnimatedCounter to={15} suffix="+" duration={1.6} delay={0.1} />
                  </div>
                  <h3 className="font-sans text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wide mb-1 leading-tight">
                    Production Shipped
                  </h3>
                </div>
                <p className="text-[10px] sm:text-xs text-gray-500 leading-relaxed font-sans mt-2 sm:mt-4 line-clamp-3 sm:line-clamp-none">
                  Creating modern, ultra-responsive web applications across hospitality, ecommerce, and corporate platforms.
                </p>
              </motion.div>
            </TiltCard>

            {/* Metric 2 */}
            <TiltCard tiltIntensity={5} className="flex-1 flex flex-col h-full">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#f9fafb] border border-gray-200 hover:border-[#eb5424] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full flex-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-2 sm:mb-4">
                    <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#eb5424]">
                      * SATISFACTION
                    </span>
                    <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#eb5424]" />
                  </div>
                  <div className="text-3xl sm:text-7xl font-black tracking-tight text-[#0a0a0a] font-sans mb-1.5 sm:mb-3 group-hover:text-[#eb5424] transition-colors">
                    <AnimatedCounter to={98} suffix="%" duration={1.8} delay={0.25} />
                  </div>
                  <h3 className="font-sans text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wide mb-1 leading-tight">
                    Client Satisfaction
                  </h3>
                </div>
                <p className="text-[10px] sm:text-xs text-gray-500 leading-relaxed font-sans mt-2 sm:mt-4 line-clamp-3 sm:line-clamp-none">
                  Delivering reliable, pixel-perfect code on deadline with continuous post-launch warranty support.
                </p>
              </motion.div>
            </TiltCard>
          </motion.div>

          {/* Column 2: Center Clients & Testimonial with Parallax (4 cols) - ALIGNED FLUSH WITH COL 1 & 3 */}
          <motion.div style={{ y: yCol2 }} className="lg:col-span-4 grid grid-cols-2 lg:flex lg:flex-col gap-3 sm:gap-6 order-3 lg:order-2 h-full">
            {/* Top: 25+ Brands Served Card */}
            <TiltCard tiltIntensity={5} className="flex-1 flex flex-col h-full">
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#f9fafb] border border-gray-200 hover:border-[#eb5424] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full flex-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-6">
                    <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#eb5424]">
                      * TRUSTED
                    </span>
                  </div>

                  {/* Avatar Stack */}
                  <div className="flex items-center -space-x-2 sm:-space-x-3 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 border-white bg-gradient-to-tr from-orange-400 to-amber-500 flex items-center justify-center text-white font-black text-[10px] sm:text-sm shadow-md">
                      SP
                    </div>
                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 border-white bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center text-white font-black text-[10px] sm:text-sm shadow-md">
                      SM
                    </div>
                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 border-white bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white font-black text-[10px] sm:text-sm shadow-md">
                      AY
                    </div>
                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 border-white bg-black text-white flex items-center justify-center font-mono font-bold text-[9px] sm:text-xs shadow-md">
                      +25
                    </div>
                  </div>

                  <div className="text-xl sm:text-3xl font-black text-[#0a0a0a] font-sans mb-1 group-hover:text-[#eb5424] transition-colors leading-tight">
                    <AnimatedCounter to={25} suffix="+ Brands" duration={1.6} delay={0.2} />
                  </div>
                </div>
                <p className="text-[10px] sm:text-xs text-gray-500 font-sans leading-relaxed line-clamp-2 sm:line-clamp-none mt-2 sm:mt-0">
                  Partnered with businesses across Mumbai, Goa, and global markets.
                </p>
              </motion.div>
            </TiltCard>

            {/* Bottom: Client Quote Card */}
            <TiltCard tiltIntensity={5} className="flex-1 flex flex-col h-full">
              <motion.div
                initial={{ opacity: 0, y: 55 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#0a0a0a] text-white flex-1 flex flex-col justify-between relative overflow-hidden shadow-xl h-full"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#eb5424]/10 rounded-full blur-2xl pointer-events-none" />

                <div>
                  <div className="flex items-center gap-0.5 sm:gap-1 text-[#eb5424] mb-2 sm:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-[11px] sm:text-sm font-sans leading-relaxed text-gray-300 italic mb-3 sm:mb-6 line-clamp-3 sm:line-clamp-none">
                    &ldquo;Amaan transformed our web portal into a fast, responsive platform.&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 pt-2.5 sm:pt-4 border-t border-white/10">
                  <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center text-[#eb5424] font-black text-[10px] sm:text-xs font-mono shrink-0">
                    AY
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[11px] sm:text-xs font-bold font-sans text-white truncate">Arun Yadav</h4>
                    <p className="text-[9px] sm:text-[11px] text-gray-400 font-mono truncate">MD, Frisson Hospital</p>
                  </div>
                </div>
              </motion.div>
            </TiltCard>
          </motion.div>

          {/* Column 3: Right Visual Character / Identity Card with Clip-Path Reveal (4 cols) - FIRST ON MOBILE */}
          <motion.div style={{ y: yCol3 }} className="lg:col-span-4 flex flex-col order-1 lg:order-3 h-full">
            <TiltCard tiltIntensity={6} className="w-full h-full flex-1 flex flex-col">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-b from-[#eb5424] to-[#c23e15] text-white p-8 flex flex-col justify-between shadow-2xl group min-h-[460px] h-full flex-1"
              >
                {/* Corner Registration Marks ⌜ ⌝ ⌞ ⌟ */}
                <div className="absolute top-4 left-4 z-10 text-xs font-mono text-white/60">⌜</div>
                <div className="absolute top-4 right-4 z-10 text-xs font-mono text-white/60">⌝</div>
                <div className="absolute bottom-4 left-4 z-10 text-xs font-mono text-white/60">⌞</div>
                <div className="absolute bottom-4 right-4 z-10 text-xs font-mono text-white/60">⌟</div>

                <div className="flex items-center justify-between relative z-10">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-white/80">
                    * DEV_ENGINEER // 2026
                  </span>
                  <Zap className="w-4 h-4 text-white" />
                </div>

                {/* Character Portrait */}
                <div className="relative w-full h-72 sm:h-80 my-4 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src="/cartoon_hero_trans.png"
                      alt="Amaan Shaikh Frontend Engineer"
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-105"
                      priority
                      unoptimized
                    />
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-black font-sans uppercase tracking-tight text-white mb-1">
                    Amaan Shaikh
                  </h3>
                  <p className="text-xs text-white/80 font-mono tracking-wide">
                    Next.js &amp; Full-Stack Web Architecture
                  </p>
                </div>
              </motion.div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
