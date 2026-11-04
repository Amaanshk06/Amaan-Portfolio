"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowLeft, Sparkles, Filter } from "lucide-react";
import { PortfolioHeader } from "@/components/ui/PortfolioHeader";
import { MassiveFooter } from "@/components/ui/MassiveFooter";
import { FadeContent } from "@/components/ui/FadeContent";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { projectsData } from "@/data/projectsData";

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: `All Projects (${projectsData.length.toString().padStart(2, "0")})` },
    { id: "hospitality", label: "Hospitality & Travel" },
    { id: "ecommerce", label: "Ecommerce & Tech" },
    { id: "healthcare", label: "Healthcare & Dental" },
    { id: "commercial", label: "Commercial & Construction" },
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "hospitality")
      return (
        p.category.toLowerCase().includes("travel") ||
        p.category.toLowerCase().includes("hospitality")
      );
    if (activeCategory === "ecommerce")
      return (
        p.category.toLowerCase().includes("ecommerce") ||
        p.category.toLowerCase().includes("fragrance") ||
        p.category.toLowerCase().includes("food") ||
        p.category.toLowerCase().includes("electronics") ||
        p.category.toLowerCase().includes("hardware") ||
        p.category.toLowerCase().includes("refurbished")
      );
    if (activeCategory === "healthcare")
      return (
        p.category.toLowerCase().includes("healthcare") ||
        p.category.toLowerCase().includes("beauty") ||
        p.category.toLowerCase().includes("clinic") ||
        p.category.toLowerCase().includes("hospital") ||
        p.category.toLowerCase().includes("dental") ||
        p.category.toLowerCase().includes("psychiatry") ||
        p.category.toLowerCase().includes("wellness")
      );
    if (activeCategory === "commercial")
      return (
        p.category.toLowerCase().includes("commercial") ||
        p.category.toLowerCase().includes("real estate") ||
        p.category.toLowerCase().includes("construction") ||
        p.category.toLowerCase().includes("architecture")
      );
    return true;
  });

  return (
    <div className="min-h-screen bg-white text-[#0a0a0a] font-sans selection:bg-[#eb5424] selection:text-white relative overflow-x-hidden">
      {/* Dark Architectural Header Section */}
      <section className="bg-[#070707] text-white relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />

        <PortfolioHeader />

        <div className="max-w-7xl mx-auto px-6 sm:px-12 pt-10 sm:pt-16 pb-20 relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left">
          {/* Back to Home Link */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-[#eb5424] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>BACK TO HOMEPAGE</span>
            </Link>
          </div>

          <div className="inline-flex items-center gap-2 mb-6 justify-center sm:justify-start">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#eb5424]">
              * PRODUCTION PORTFOLIO // 2026
            </span>
          </div>

          <FadeContent effect="focus" duration={1.2} blur={10} trigger="mount" delay={0.2}>
            <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-white font-sans leading-[0.9] mb-8 text-center sm:text-left">
              SELECTED WORK.
            </h1>
          </FadeContent>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/15 max-w-5xl text-left">
            <FadeContent effect="mist" duration={1.2} blur={12} delay={0.3} trigger="mount">
              <p className="text-base sm:text-xl text-gray-300 font-sans leading-relaxed">
                A comprehensive archive of production web applications, bespoke e-commerce storefronts, and healthcare platforms engineered for high performance and visual distinction.
              </p>
            </FadeContent>
            <FadeContent effect="fade" duration={1.0} delay={0.4} trigger="mount">
              <p className="text-xs sm:text-sm text-gray-400 font-mono leading-relaxed">
                Every launch features custom UI architecture, Next.js 15, TypeScript, Lighthouse 98+ scores, and responsive precision across all modern viewports.
              </p>
            </FadeContent>
          </div>
        </div>
      </section>

      {/* Main Work Grid Section with Interactive Category Filter */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-6 sm:px-12">
        {/* Interactive Category Filter Pills */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-14 pb-8 border-b border-gray-100">
          <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-gray-500">
            <Filter className="w-4 h-4 text-[#eb5424]" />
            <span>FILTER BY SPECIALTY:</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <MagneticButton key={cat.id} strength={0.15}>
                <button
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    activeCategory === cat.id
                      ? "bg-[#eb5424] text-white shadow-md shadow-[#eb5424]/20"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200/80"
                  }`}
                >
                  {cat.label}
                </button>
              </MagneticButton>
            ))}
          </div>
        </div>

        {/* 3-Column Grid Showing All Filtered Projects */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
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
                  className="group flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-[#fcfcfc] border border-gray-200/80 hover:border-[#eb5424] p-5 sm:p-6 shadow-sm hover:shadow-2xl transition-all duration-400 h-full"
                >
                  <div>
                    {/* Clean Aligned Image Container with Clip-Path Reveal */}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative w-full mb-4"
                      aria-label={`Open live site for ${project.title}`}
                    >
                      <motion.div
                        initial={{ clipPath: "inset(6% 0% 6% 0% round 1rem)" }}
                        whileInView={{ clipPath: "inset(0% 0% 0% 0% round 1rem)" }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100 shadow-inner"
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300" />

                        {/* Top Right External Arrow */}
                        <div className="absolute top-3.5 right-3.5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 backdrop-blur-md text-black flex items-center justify-center shadow-md group-hover:bg-[#eb5424] group-hover:text-white transition-all duration-300">
                          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>

                        {/* Category Overlay Pill */}
                        <div className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white font-mono text-[10px] font-bold uppercase tracking-wider">
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
                        <h3 className="text-base sm:text-lg lg:text-xl font-black uppercase font-sans tracking-tight text-gray-950 group-hover:text-[#eb5424] transition-colors leading-tight mb-2">
                          {project.title}
                        </h3>
                      </a>

                      <p className="text-xs sm:text-[13px] text-gray-600 font-sans leading-relaxed line-clamp-2 mb-3.5">
                        {project.description}
                      </p>

                      {/* Tags Row */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-md bg-gray-100 text-[10px] sm:text-[11px] font-mono text-gray-700 border border-gray-200/80"
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
                    className="mt-auto pt-3.5 border-t border-gray-100 flex items-center justify-between font-mono text-[11px]"
                  >
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-[#eb5424] group-hover:text-black transition-colors"
                    >
                      <span>LAUNCH PROJECT</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    <span className="text-gray-400">
                      ORDER // {project.displayOrder.toString().padStart(2, "0")}
                    </span>
                  </FadeContent>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black font-sans mb-4">
            HAVE A PROJECT IN MIND?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-sans mb-8">
            Let&apos;s build a fast, high-converting digital platform that elevates your brand and outpaces the competition.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <MagneticButton strength={0.3}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#eb5424] hover:bg-[#f04c1a] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-xl"
              >
                <span>TRANSMIT A BRIEF</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </MagneticButton>

            <MagneticButton strength={0.2}>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white border border-gray-200 text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-gray-100 transition-all"
              >
                <span>RETURN HOME</span>
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>

      <MassiveFooter />
    </div>
  );
}
