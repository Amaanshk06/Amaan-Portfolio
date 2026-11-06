"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Asterisk, RotateCcw, Zap, Flower2 } from "lucide-react";
import { BlurReveal } from "@/components/ui/BlurReveal";
import { FadeContent } from "@/components/ui/FadeContent";
import { TiltCard } from "@/components/ui/TiltCard";

export function AchievementsSection() {
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

  const xWatermark = useTransform(smoothProgress, [0, 1], [100, -100]);

  const awards = [
    {
      icon: Asterisk,
      title: "FEATURED DEVELOPER OF THE YEAR AWARD RECIPIENT",
      achievement: "Web Excellence Awards",
      year: "2024",
      iconColor: "text-white",
    },
    {
      icon: RotateCcw,
      title: "BEST CREATIVE PORTFOLIO EXPERIENCE AWARD WINNER",
      achievement: "Digital Recognition",
      year: "2025",
      iconColor: "text-white",
    },
    {
      icon: Zap,
      title: "EXCELLENCE IN NEXT.JS & TYPESCRIPT ACHIEVEMENT",
      achievement: "Developer Spotlight",
      year: "2024",
      iconColor: "text-[#eb5424]",
    },
    {
      icon: Flower2,
      title: "MODERN WEB EXPERIENCE RECOGNITION WINNER",
      achievement: "Creative Tech Showcase",
      year: "2025",
      iconColor: "text-gray-300",
    },
  ];

  return (
    <section
      ref={containerRef}
      id="achievements"
      className="py-24 sm:py-32 bg-[#0a0a0a] text-white relative z-20 overflow-hidden select-none border-b border-white/10"
    >
      {/* Precision Blueprint Grid */}
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

      {/* Giant Translucent Watermark */}
      <motion.div
        style={{ x: xWatermark }}
        className="absolute top-4 sm:-top-10 right-0 pointer-events-none select-none opacity-[0.03] text-[18vw] font-black uppercase tracking-tighter leading-none font-sans z-0 text-white whitespace-nowrap"
      >
        AWARDS
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header Centered with Black and Grey Theme */}
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#eb5424]">
              * RECOGNITION &amp; HONORS
            </span>
          </div>

          <FadeContent effect="focus" duration={1.2} blur={10} threshold={0.15}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black uppercase tracking-tight text-white font-sans leading-[1.08] text-center">
              <div>AMAAN<span className="text-xs sm:text-sm align-super text-[#eb5424]">®</span></div>
              <div className="text-gray-400">ACHIEVEMENTS.</div>
            </h2>
          </FadeContent>
        </div>

        {/* 2x2 Clean Award Cards Grid (2-column on mobile, 2-column on desktop) */}
        <div className="grid grid-cols-2 gap-3 sm:gap-8">
          {awards.map((award, index) => {
            const IconComponent = award.icon;

            return (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <TiltCard tiltIntensity={4}>
                  <div className="rounded-xl sm:rounded-2xl p-3.5 sm:p-9 bg-[#141414] border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-between min-h-[160px] sm:min-h-[220px] shadow-xl group">
                    {/* Top Row: Icon Box + Title */}
                    <div className="flex items-start gap-2.5 sm:gap-6">
                      <div className="w-8 h-8 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <IconComponent className={`w-4 h-4 sm:w-6 sm:h-6 ${award.iconColor}`} />
                      </div>
                      <h3 className="text-xs sm:text-lg font-bold font-sans text-white uppercase tracking-tight leading-snug line-clamp-2">
                        {award.title}
                      </h3>
                    </div>

                    {/* Bottom Row: Achievement + Year */}
                    <div className="pt-3 sm:pt-6 border-t border-white/10 flex items-center justify-between text-[9px] sm:text-xs font-mono">
                      <div className="min-w-0 pr-1">
                        <span className="text-gray-500 uppercase block text-[8px] sm:text-[10px] tracking-wider truncate">
                          ACHIEVEMENT
                        </span>
                        <span className="text-white font-medium truncate block text-[10px] sm:text-xs">
                          {award.achievement}
                        </span>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-gray-500 uppercase block text-[8px] sm:text-[10px] tracking-wider">
                          YEAR
                        </span>
                        <span className="text-[#eb5424] font-bold text-[10px] sm:text-xs">
                          {award.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
