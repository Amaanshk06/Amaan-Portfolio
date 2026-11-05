"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useVelocity, useSpring } from "framer-motion";

export function BrandsMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });

  // Subtle horizontal offset boost on scroll
  const xOffset = useTransform(smoothVelocity, [-1000, 0, 1000], [-30, 0, 30]);

  // Amaan's actual projects from projectsData
  const projects = [
    "TRAVEL VILLAS",
    "AURAS FRAGRANCES",
    "FRUITILICIOUS GIFTING",
    "UNIQUE WELLCARE",
    "FRISSON MULTISPECIALITY HOSPITAL",
    "SAYSKIN AESTHETIC CLINIC",
    "UBERCARE BLING",
    "YOUR VCARE DENTAL",
    "UBERCARE DIAGNOSTIC",
    "DR. RAHUL BHATAMBRE",
    "DR. MATIN KIDS DENTAL",
    "MEK GRAND CENTRAL",
    "SILVERLINE CREATION",
    "TRAVEL WITH SARAH",
    "SERVIZI GALASSIA",
  ];

  return (
    <section ref={containerRef} className="py-8 sm:py-10 bg-white border-b border-gray-100 overflow-hidden relative z-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row md:items-center gap-6">
        {/* Left Label with Reversible Motion */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="shrink-0 font-mono text-[11px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest md:border-r border-gray-200 md:pr-8"
        >
          FEATURED
          <br className="hidden md:inline" /> CLIENT PROJECTS
        </motion.div>

        {/* Marquee Container with Scroll Velocity Interaction */}
        <div className="overflow-hidden relative flex-1 min-w-0 mask-fade">
          <motion.div style={{ x: xOffset }} className="w-full overflow-hidden">
            <div className="flex items-center gap-10 sm:gap-14 animate-marquee whitespace-nowrap will-change-transform">
              {[...projects, ...projects].map((projectName, idx) => (
                <div
                  key={`${projectName}-${idx}`}
                  className="flex items-center gap-2.5 text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-tight text-gray-400 hover:text-black transition-colors select-none cursor-default font-sans shrink-0 whitespace-nowrap"
                >
                  <span className="text-[#eb5424] text-xs">✦</span>
                  <span>{projectName}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
