"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projectsData } from "@/data/projectsData";
import { BlurReveal } from "@/components/ui/BlurReveal";
import { FadeContent } from "@/components/ui/FadeContent";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function FramerWork() {
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

  // Kinetic horizontal scroll drift for watermark
  const xWatermark = useTransform(smoothProgress, [0, 1], [100, -100]);

  // Home page showcases first 4 production projects (4th hidden on desktop for balanced 3-col desktop and 2-col mobile)
  const featuredProjects = projectsData.slice(0, 4);

  return (
    <section
      ref={containerRef}
      id="work"
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

      {/* Giant Translucent Watermark with Kinetic Scroll Drift */}
      <motion.div
        style={{ x: xWatermark }}
        className="absolute top-4 sm:-top-10 right-0 pointer-events-none select-none opacity-[0.03] text-[18vw] font-black uppercase tracking-tighter leading-none font-sans z-0 whitespace-nowrap"
      >
        PROJECTS
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header Centered with Black and Grey Theme */}
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#eb5424]">
              * SELECTED CLIENT ARCHITECTURE
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
              WORK THAT <span className="text-gray-400">DELIVERS.</span>
            </h2>
          </FadeContent>

          <FadeContent effect="fade" duration={1.0} delay={0.15} threshold={0.15}>
            <p className="text-xs sm:text-sm font-sans font-medium uppercase tracking-wider text-gray-500 max-w-lg mx-auto leading-relaxed mt-4 text-center">
              EVERY PROJECT REPRESENTS A VERIFIED PRODUCTION LAUNCH WITH BESPOKE UX DESIGN, HIGH-SPEED PERFORMANCE, AND RESPONSIVE FRONTEND PRECISION.
            </p>
          </FadeContent>
        </div>

        {/* Professionally Aligned Balanced Grid (2-column on mobile, 3-column on desktop) */}
        <motion.div layout className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {featuredProjects.map((project, idx) => {
              const xOffset = idx % 2 === 0 ? -28 : 28;

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, x: xOffset, y: 35, scale: 0.96 }}
                  whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.15 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: (idx % 3) * 0.09, ease: [0.16, 1, 0.3, 1] }}
                  className={`group flex flex-col justify-between rounded-xl sm:rounded-3xl bg-[#fcfcfc] border border-gray-200/80 hover:border-[#eb5424] p-3 sm:p-6 shadow-sm hover:shadow-2xl transition-all duration-400 h-full ${
                    idx === 3 ? "lg:hidden" : ""
                  }`}
                >
                  <div>
                    {/* Clean Aligned Image Container with Clip-Path Reveal */}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative w-full mb-2.5 sm:mb-4"
                      aria-label={`Open live site for ${project.title}`}
                    >
                      <motion.div
                        initial={{ clipPath: "inset(6% 0% 6% 0% round 0.75rem)" }}
                        whileInView={{ clipPath: "inset(0% 0% 0% 0% round 0.75rem)" }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full aspect-[16/10] rounded-lg sm:rounded-2xl overflow-hidden bg-gray-100 shadow-inner"
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                          sizes="(max-width: 768px) 50vw, 33vw"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300" />

                        {/* Top Right External Arrow */}
                        <div className="absolute top-2 right-2 sm:top-3.5 sm:right-3.5 w-6 h-6 sm:w-9 sm:h-9 rounded-full bg-white/90 backdrop-blur-md text-black flex items-center justify-center shadow-md group-hover:bg-[#eb5424] group-hover:text-white transition-all duration-300">
                          <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>

                        {/* Category Overlay Pill */}
                        <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white font-mono text-[8px] sm:text-[10px] font-bold uppercase tracking-wider">
                          {project.shortCategory || project.category}
                        </div>
                      </motion.div>
                    </a>

                    {/* Title & Description with FadeContent */}
                    <FadeContent
                      effect="fade"
                      duration={0.8}
                      ease="power2.out"
                      stagger={0.06}
                      threshold={0.15}
                      trigger="scroll"
                      once={false}
                    >
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <h3 className="text-xs sm:text-lg lg:text-xl font-black uppercase font-sans tracking-tight text-gray-950 group-hover:text-[#eb5424] transition-colors leading-tight mb-1 sm:mb-2 line-clamp-1 sm:line-clamp-none">
                          {project.title}
                        </h3>
                      </a>

                      <p className="text-[11px] sm:text-[13px] text-gray-600 font-sans leading-relaxed line-clamp-2 mb-2 sm:mb-3.5 hidden xs:block">
                        {project.description}
                      </p>

                      {/* Tags Row */}
                      <div className="flex flex-wrap gap-1 mb-2.5 sm:mb-5">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-1.5 py-0.5 rounded bg-gray-100 text-[9px] sm:text-[11px] font-mono text-gray-700 border border-gray-200/80"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </FadeContent>
                  </div>

                  {/* Bottom Row - Consistent Alignment */}
                  <FadeContent
                    effect="fade"
                    duration={0.8}
                    ease="power2.out"
                    threshold={0.15}
                    trigger="scroll"
                    once={false}
                    delay={0.1}
                    className="mt-auto pt-2.5 sm:pt-3.5 border-t border-gray-100 flex items-center justify-between font-mono text-[10px] sm:text-[11px]"
                  >
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-bold uppercase tracking-wider text-[#eb5424] group-hover:text-black transition-colors"
                    >
                      <span className="hidden sm:inline">LAUNCH PROJECT</span>
                      <span className="sm:hidden">LAUNCH</span>
                      <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </a>

                    <span className="text-gray-400 text-[9px] sm:text-[11px]">
                      {project.displayOrder.toString().padStart(2, "0")}
                    </span>
                  </FadeContent>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Prominent View More Projects CTA Button Redirecting to /work */}
        <div className="mt-14 sm:mt-16 flex justify-center">
          <MagneticButton strength={0.3}>
            <Link
              href="/work"
              className="inline-flex items-center gap-3 px-8 sm:px-12 py-4 rounded-2xl bg-black hover:bg-[#eb5424] text-white font-mono text-xs font-black uppercase tracking-widest transition-all duration-300 shadow-xl hover:shadow-[0_10px_30px_rgba(235,84,36,0.35)] group"
            >
              <span>VIEW MORE PROJECTS</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Link>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
