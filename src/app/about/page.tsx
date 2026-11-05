"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Globe2, ShieldCheck, Terminal, Award, CheckCircle2, Sparkles, ArrowLeft, Cpu, Layers, Zap, Rocket, Lightbulb, Coffee } from "lucide-react";
import { PortfolioHeader } from "@/components/ui/PortfolioHeader";
import { MassiveFooter } from "@/components/ui/MassiveFooter";
import { MaskedText } from "@/components/ui/MaskedText";
import { BlurReveal } from "@/components/ui/BlurReveal";
import { FadeContent } from "@/components/ui/FadeContent";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TiltCard } from "@/components/ui/TiltCard";
import { personalData } from "@/data/personalData";

export default function AboutPage() {
  const values = [
    {
      num: "01",
      title: "SPEED IS A CORE FEATURE",
      desc: "Sub-second load times and zero layout shifts aren't afterthoughts; they define user trust and conversion rates.",
    },
    {
      num: "02",
      title: "CLEAN, TYPED CODEBASE",
      desc: "Strict TypeScript interfaces and modular components ensure architectures that scale effortlessly for years.",
    },
    {
      num: "03",
      title: "ORGANIC MOTION PHYSICS",
      desc: "Spring curves and subtle WebGL shaders give interfaces tactile weight without sacrificing responsiveness.",
    },
    {
      num: "04",
      title: "TRANSPARENT COLLABORATION",
      desc: "Clear milestones, continuous deployment previews, and direct engineering ownership on every sprint.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#0a0a0a] font-sans selection:bg-[#eb5424] selection:text-white relative overflow-x-hidden">
      {/* Hero Header with Integrated PortfolioHeader */}
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
              * BIOGRAPHY &amp; ENGINEERING FOUNDATIONS
            </span>
          </div>

          <FadeContent effect="focus" duration={1.2} blur={10} trigger="mount" delay={0.2}>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-white font-sans leading-[0.9] mb-8 text-center sm:text-left">
              ABOUT ME.
            </h1>
          </FadeContent>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/15 max-w-5xl text-left">
            <FadeContent effect="mist" duration={1.2} blur={12} delay={0.3} trigger="mount">
              <p className="text-base sm:text-xl text-gray-300 font-sans leading-relaxed">
                I&apos;m Amaan Shaikh, a frontend architect and web developer with 2 years of dedicated production experience building modern web applications, high-converting digital storefronts, and tactile animations.
              </p>
            </FadeContent>
            <FadeContent effect="fade" duration={1.0} delay={0.4} trigger="mount">
              <p className="text-xs sm:text-sm text-gray-400 font-mono leading-relaxed">
                Operating at the intersection of modern software engineering and deliberate digital aesthetics. Based in Thane, Maharashtra, shipping products globally.
              </p>
            </FadeContent>
          </div>
        </div>
      </section>

      {/* Narrative Section with Portrait & Key Milestones */}
      <section className="py-24 sm:py-32 max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-b from-[#eb5424] to-[#b83b15] shadow-2xl p-8 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between text-white/80 font-mono text-xs">
              <span>* DEV_ID // 2026</span>
              <span>IN_STUDIO</span>
            </div>

            <div className="relative w-full h-80 my-4 flex items-center justify-center">
              <Image
                src="/cartoon_hero_trans.png"
                alt="Amaan Shaikh"
                fill
                className="object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.5)]"
                priority
              />
            </div>

            <div className="text-white">
              <h2 className="text-2xl font-black font-sans uppercase">Amaan Shaikh</h2>
              <p className="font-mono text-xs text-white/80">Web Developer &amp; Frontend Architect</p>
            </div>
          </motion.div>

          {/* Narrative Story */}
          <div className="lg:col-span-7 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2 justify-center lg:justify-start">
              <span className="w-2 h-2 rounded-full bg-[#eb5424]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#eb5424]">
                * HOW I WORK
              </span>
            </div>

            <FadeContent effect="focus" duration={1.1} blur={10} threshold={0.15}>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#0a0a0a] font-sans leading-tight text-center lg:text-left">
                A DEVELOPER WHO TURNS IDEAS INTO LIVING EXPERIENCES.
              </h2>
            </FadeContent>

            <FadeContent effect="fade" duration={1.0} stagger={0.12} threshold={0.15}>
              {personalData.aboutParagraphs.map((para, i) => (
                <p key={i} className="text-base sm:text-lg text-gray-600 font-sans leading-relaxed mb-4 text-left">
                  {para}
                </p>
              ))}
            </FadeContent>

            {/* Quick Stats Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                <span className="text-2xl sm:text-3xl font-black text-[#eb5424] font-sans block">
                  2+ Years
                </span>
                <span className="text-xs text-gray-500 font-mono">Continuous Dev</span>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                <span className="text-2xl sm:text-3xl font-black text-[#0a0a0a] font-sans block">
                  12+ Apps
                </span>
                <span className="text-xs text-gray-500 font-mono">Shipped to Prod</span>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 col-span-2 sm:col-span-1">
                <span className="text-2xl sm:text-3xl font-black text-emerald-600 font-sans block">
                  98%
                </span>
                <span className="text-xs text-gray-500 font-mono">Client Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Engineering Principles */}
      <section className="py-24 bg-[#070707] text-white border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#eb5424] block mb-3">
              * ARCHITECTURAL PILLARS
            </span>
            <FadeContent effect="develop" duration={1.2} blur={6} threshold={0.15}>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white font-sans leading-tight">
                STANDARDS I <span className="text-gray-400">NEVER COMPROMISE ON.</span>
              </h2>
            </FadeContent>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val) => (
              <TiltCard key={val.num} tiltIntensity={5} className="h-full">
                <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#eb5424] transition-all h-full flex flex-col justify-between group">
                  <div>
                    <span className="font-mono text-xs font-black text-[#eb5424] px-2.5 py-1 rounded bg-[#eb5424]/10 mb-6 inline-block">
                      {val.num}
                    </span>
                    <h3 className="font-sans font-black text-lg uppercase text-white mb-3 group-hover:text-[#eb5424] transition-colors">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Chronological Production Roadmap & Milestones */}
      <section className="py-24 sm:py-32 max-w-7xl mx-auto px-6 sm:px-12 relative overflow-hidden">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#eb5424]">
              * VERIFIED PRODUCTION EVOLUTION
            </span>
          </div>
          <BlurReveal duration={0.8} yOffset={24}>
            <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-black uppercase tracking-tight text-[#0a0a0a] font-sans leading-[1.08] text-center">
              CHRONOLOGICAL <span className="text-gray-400">ENGINEERING ROADMAP.</span>
            </h2>
          </BlurReveal>
          <p className="text-xs sm:text-sm font-sans font-medium uppercase tracking-wider text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed text-center">
            A DOCUMENTED TRAJECTORY OF PRODUCTION PLATFORMS, ARCHITECTURAL ADVANCEMENTS, AND TECHNICAL MASTERY.
          </p>
        </div>

        {/* 4 Milestones Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* Milestone 01 */}
          <TiltCard tiltIntensity={4} className="h-full">
            <div className="p-8 sm:p-9 rounded-3xl bg-[#fcfcfc] text-[#0a0a0a] border border-gray-200 hover:border-[#eb5424] hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-black text-[#eb5424] px-2.5 py-1 rounded bg-[#eb5424]/10">
                      PHASE 01
                    </span>
                    <span className="font-mono text-xs font-bold text-gray-500">2024 // Q1–Q2</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-mono font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    FOUNDATIONAL
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black uppercase font-sans tracking-tight text-[#0a0a0a] mb-2 group-hover:text-[#eb5424] transition-colors">
                  VANILLA DOM ENGINES &amp; WEB STANDARDS
                </h3>
                <p className="text-xs sm:text-[13px] text-gray-600 font-sans leading-relaxed mb-5">
                  Deconstructing browser rendering lifecycles, mastering native DOM APIs, semantic markup, and responsive CSS architecture without external abstraction layers.
                </p>

                {/* Deliverable highlight */}
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 mb-5">
                  <span className="font-mono text-[10px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                    KEY PRODUCTION OUTCOME:
                  </span>
                  <p className="text-xs text-gray-900 font-sans font-medium leading-relaxed">
                    Built 5 bespoke, zero-dependency responsive portals with sub-second execution and cross-browser consistency.
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {["Vanilla JS (ES6+)", "CSS Architecture", "DOM Event Systems", "Browser Paint Pipeline"].map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-lg bg-white border border-gray-200 text-[10px] sm:text-[11px] font-mono text-gray-700 shadow-2xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-gray-200 flex items-center justify-between font-mono text-[11px]">
                <span className="text-gray-400">IMPACT METRIC</span>
                <span className="text-gray-900 font-bold">100% CORE WEB VITALS</span>
              </div>
            </div>
          </TiltCard>

          {/* Milestone 02 */}
          <TiltCard tiltIntensity={4} className="h-full">
            <div className="p-8 sm:p-9 rounded-3xl bg-[#fcfcfc] text-[#0a0a0a] border border-gray-200 hover:border-[#eb5424] hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-black text-[#eb5424] px-2.5 py-1 rounded bg-[#eb5424]/10">
                      PHASE 02
                    </span>
                    <span className="font-mono text-xs font-bold text-gray-500">2024 // Q3–Q4</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-orange-50 text-[#eb5424] border border-[#eb5424]/30 text-[10px] font-mono font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#eb5424]" />
                    COMMERCE LIVE
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black uppercase font-sans tracking-tight text-[#0a0a0a] mb-2 group-hover:text-[#eb5424] transition-colors">
                  REACT &amp; BESPOKE E-COMMERCE STOREFRONTS
                </h3>
                <p className="text-xs sm:text-[13px] text-gray-600 font-sans leading-relaxed mb-5">
                  Transitioned into component-driven development and custom Shopify Liquid 2.0 themes. Engineered interactive product customizers and dynamic AJAX cart drawers.
                </p>

                {/* Deliverable highlight */}
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 mb-5">
                  <span className="font-mono text-[10px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                    KEY PRODUCTION OUTCOME:
                  </span>
                  <p className="text-xs text-gray-900 font-sans font-medium leading-relaxed">
                    Shipped custom storefronts for Fruitilicious Gifting &amp; Auras Fragrances, driving an immediate 34% increase in average order value.
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {["React.js", "Shopify Liquid 2.0", "AJAX Cart API", "Tailwind CSS", "REST Endpoints"].map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-lg bg-white border border-gray-200 text-[10px] sm:text-[11px] font-mono text-gray-700 shadow-2xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-gray-200 flex items-center justify-between font-mono text-[11px]">
                <span className="text-gray-400">IMPACT METRIC</span>
                <span className="text-[#eb5424] font-bold">+34% AOV CONVERSION</span>
              </div>
            </div>
          </TiltCard>

          {/* Milestone 03 */}
          <TiltCard tiltIntensity={4} className="h-full">
            <div className="p-8 sm:p-9 rounded-3xl bg-[#fcfcfc] text-[#0a0a0a] border border-gray-200 hover:border-[#eb5424] hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-black text-[#eb5424] px-2.5 py-1 rounded bg-[#eb5424]/10">
                      PHASE 03
                    </span>
                    <span className="font-mono text-xs font-bold text-gray-500">2025 // FULL-YEAR</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-mono font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    ENTERPRISE PROD
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black uppercase font-sans tracking-tight text-[#0a0a0a] mb-2 group-hover:text-[#eb5424] transition-colors">
                  NEXT.JS 15 &amp; STRICT TYPESCRIPT SYSTEMS
                </h3>
                <p className="text-xs sm:text-[13px] text-gray-600 font-sans leading-relaxed mb-5">
                  Architecting full-stack web applications with Next.js App Router, React 19 server components, automated JSON-LD schemas, and enterprise TypeScript validation.
                </p>

                {/* Deliverable highlight */}
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 mb-5">
                  <span className="font-mono text-[10px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                    KEY PRODUCTION OUTCOME:
                  </span>
                  <p className="text-xs text-gray-900 font-sans font-medium leading-relaxed">
                    Engineered Frisson Multispeciality Hospital portal and Travel Villas of Goa rental marketplace for thousands of active visits.
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {["Next.js 15", "React 19", "TypeScript", "Server Actions", "Zod Validation", "SEO Automation"].map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-lg bg-white border border-gray-200 text-[10px] sm:text-[11px] font-mono text-gray-700 shadow-2xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-gray-200 flex items-center justify-between font-mono text-[11px]">
                <span className="text-gray-400">IMPACT METRIC</span>
                <span className="text-blue-600 font-bold">24/7 ZERO LAG UPTIME</span>
              </div>
            </div>
          </TiltCard>

          {/* Milestone 04 */}
          <TiltCard tiltIntensity={4} className="h-full">
            <div className="p-8 sm:p-9 rounded-3xl bg-[#0a0a0a] text-white border border-white/10 hover:border-[#eb5424] hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#eb5424]/15 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-black text-[#eb5424] px-2.5 py-1 rounded bg-[#eb5424]/20 border border-[#eb5424]/30">
                      PHASE 04
                    </span>
                    <span className="font-mono text-xs font-bold text-gray-400">2026 // CURRENT</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    ACTIVE R&amp;D
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black uppercase font-sans tracking-tight text-white mb-2 group-hover:text-[#eb5424] transition-colors">
                  HARDWARE-ACCELERATED WEBGL &amp; 3D
                </h3>
                <p className="text-xs sm:text-[13px] text-gray-300 font-sans leading-relaxed mb-5">
                  Integrating Three.js WebGL scenes, custom GLSL shaders, and Framer Motion spring physics to craft award-winning, tactile, and cinematic digital products.
                </p>

                {/* Deliverable highlight */}
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 mb-5">
                  <span className="font-mono text-[10px] font-bold text-[#eb5424] uppercase tracking-wider block mb-1">
                    KEY PRODUCTION OUTCOME:
                  </span>
                  <p className="text-xs text-gray-200 font-sans font-medium leading-relaxed">
                    Crafting fluid, interactive web architectures with sub-250ms TTFB, 60 FPS motion graphics, and 98+ Google Lighthouse scores.
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {["Three.js WebGL", "GLSL Shaders", "Framer Motion", "GSAP ScrollTrigger", "Physics Springs"].map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-lg bg-white/10 border border-white/15 text-[10px] sm:text-[11px] font-mono text-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between font-mono text-[11px]">
                <span className="text-gray-400">IMPACT METRIC</span>
                <span className="text-emerald-400 font-bold">60 FPS TACTILE MOTION</span>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* Quick Personal Snapshot Banner */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-gray-50 border border-gray-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <span className="font-mono text-[11px] text-gray-400 uppercase tracking-wider block mb-1">
              Location
            </span>
            <span className="font-sans font-bold text-sm sm:text-base text-gray-950">
              Thane, Maharashtra, India
            </span>
          </div>
          <div>
            <span className="font-mono text-[11px] text-gray-400 uppercase tracking-wider block mb-1">
              Experience
            </span>
            <span className="font-sans font-bold text-sm sm:text-base text-[#eb5424]">
              2+ Years Continuous Dev
            </span>
          </div>
          <div>
            <span className="font-mono text-[11px] text-gray-400 uppercase tracking-wider block mb-1">
              Production Record
            </span>
            <span className="font-sans font-bold text-sm sm:text-base text-gray-950">
              12+ Shipped Projects
            </span>
          </div>
          <div>
            <span className="font-mono text-[11px] text-gray-400 uppercase tracking-wider block mb-1">
              Work Philosophy
            </span>
            <span className="font-sans font-bold text-sm sm:text-base text-emerald-600">
              Zero Jank · Pure Craft
            </span>
          </div>
        </div>
      </section>

      {/* Call to Action Bar */}
      <section className="py-20 bg-gray-50 border-t border-gray-200 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <BlurReveal duration={0.8} yOffset={20}>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black font-sans mb-4">
              INTERESTED IN WORKING TOGETHER?
            </h2>
          </BlurReveal>
          <p className="text-sm sm:text-base text-gray-600 font-sans mb-8">
            Tell me about your product requirements, target launch date, and scope.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <MagneticButton strength={0.3}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#eb5424] hover:bg-[#f04c1a] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-xl"
              >
                <span>SEND A PROJECT BRIEF</span>
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
