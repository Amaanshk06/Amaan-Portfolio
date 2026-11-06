"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BlurReveal } from "@/components/ui/BlurReveal";
import { FadeContent } from "@/components/ui/FadeContent";
import { TiltCard } from "@/components/ui/TiltCard";

export function DevelopmentProcessSection() {
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

  const xWatermark = useTransform(smoothProgress, [0, 1], [-80, 80]);

  const steps = [
    {
      num: "01",
      iconType: "star",
      title: "PROTOTYPING",
      desc: "Understanding user needs, conversion goals, and technical architecture foundation through comprehensive UX analysis.",
      deliverable: "Tech Spec & Component Map",
    },
    {
      num: "02",
      iconType: "tick",
      title: "WIREFRAMING",
      desc: "Creating component hierarchy and structured wireframes to visualize interactions and state transitions before code.",
      deliverable: "Interactive Layout Prototypes",
    },
    {
      num: "03",
      iconType: "clover",
      title: "UI & FULL-STACK",
      desc: "Designing clean, modern, high-performance interfaces with Next.js 15, TypeScript, Tailwind CSS, and fluid animations.",
      deliverable: "Production Next.js Codebase",
    },
    {
      num: "04",
      iconType: "accent",
      title: "OPTIMIZATION & SHIP",
      desc: "Refining the build through rigorous QA, Lighthouse 98+ audits, SEO tags, and CI/CD testing to ensure flawless delivery.",
      deliverable: "Live Launch & Warranty Support",
    },
  ];

  return (
    <section
      ref={containerRef}
      id="process"
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
        className="absolute top-4 sm:-top-10 left-0 pointer-events-none select-none opacity-[0.03] text-[18vw] font-black uppercase tracking-tighter leading-none font-sans z-0 whitespace-nowrap"
      >
        PROCESS
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Heading Centered with Black and Grey Theme */}
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-10 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#eb5424]">
              * DEVELOPMENT ROADMAP
            </span>
          </div>

          <div className="flex flex-col items-center">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black uppercase tracking-tight text-[#0a0a0a] font-sans leading-[1.08] text-center"
            >
              DESIGN PROCESS
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black uppercase tracking-tight text-gray-400 font-sans leading-[1.08] text-center"
            >
              THAT WORKS.
            </motion.h2>
          </div>

          <FadeContent effect="fade" duration={0.8} delay={0.15} threshold={0.1} once={true}>
            <p className="text-xs sm:text-sm font-sans font-medium uppercase tracking-wider text-gray-500 mt-3 sm:mt-5 max-w-xl mx-auto leading-relaxed text-center">
              A DISCIPLINED ENGINEERING METHODOLOGY ENGINEERED FOR SPEED, STABILITY, AND PIXEL-PERFECT RESPONSIVENESS.
            </p>
          </FadeContent>
        </div>

        {/* 4 Black Process Cards in a 2-Column Grid on Mobile, 4-Column on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 25, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <TiltCard tiltIntensity={6} className="h-full">
                <div className="p-3.5 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#0d0d0d] text-white flex flex-col justify-between h-full border border-white/10 hover:border-[#eb5424]/80 transition-all duration-300 shadow-xl group">
                  {/* Top Bar with Number & Icon */}
                  <div>
                    <div className="flex items-center justify-between mb-3 sm:mb-8">
                      <span className="font-mono text-[10px] sm:text-xs font-black text-[#eb5424] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-[#eb5424]/10 border border-[#eb5424]/20">
                        {step.num}
                      </span>

                      <div className="text-sm sm:text-base">
                        {step.iconType === "star" && (
                          <span className="text-[#eb5424] text-base sm:text-xl font-black">✦</span>
                        )}
                        {step.iconType === "tick" && (
                          <span className="inline-block w-1 sm:w-1.5 h-3.5 sm:h-5 bg-[#eb5424] rounded-full" />
                        )}
                        {step.iconType === "clover" && (
                          <span className="text-[#eb5424] text-base sm:text-xl font-black">✤</span>
                        )}
                        {step.iconType === "accent" && (
                          <span className="inline-block w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#eb5424] shadow-[0_0_10px_#eb5424]" />
                        )}
                      </div>
                    </div>

                    <h3 className="text-xs sm:text-lg lg:text-xl font-black uppercase tracking-tight text-white font-sans group-hover:text-[#eb5424] transition-colors mb-1.5 sm:mb-3">
                      {step.title}
                    </h3>

                    <p className="text-[11px] sm:text-sm text-gray-400 font-sans leading-relaxed line-clamp-3 sm:line-clamp-none">
                      {step.desc}
                    </p>
                  </div>

                  {/* Bottom Deliverable Tag */}
                  <div className="pt-3 sm:pt-6 mt-3 sm:mt-6 border-t border-white/10">
                    <span className="font-mono text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-widest block mb-0.5 sm:mb-1">
                      DELIVERABLE:
                    </span>
                    <span className="font-mono text-[10px] sm:text-xs text-white/90 font-medium line-clamp-1 sm:line-clamp-none">
                      {step.deliverable}
                    </span>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
