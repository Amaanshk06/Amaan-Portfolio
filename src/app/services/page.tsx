"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowLeft,
  Check,
  Sparkles,
  Layers,
  ShieldCheck,
  Zap,
  Gauge,
  Code2,
  ShoppingBag,
  Cpu,
  Clock,
  CheckCircle2,
  XCircle,
  TrendingUp,
  Award,
  Terminal,
} from "lucide-react";
import { PortfolioHeader } from "@/components/ui/PortfolioHeader";
import { MassiveFooter } from "@/components/ui/MassiveFooter";
import { BlurReveal } from "@/components/ui/BlurReveal";
import { FadeContent } from "@/components/ui/FadeContent";
import { MaskedText } from "@/components/ui/MaskedText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TiltCard } from "@/components/ui/TiltCard";

export default function ServicesPage() {

  const capabilities = [
    {
      id: "frontend-architecture",
      num: "01",
      icon: Code2,
      title: "WEB & FRONTEND ARCHITECTURE",
      subtitle: "Enterprise Next.js 15 & Full-Stack Interfaces",
      description:
        "Building scalable, type-safe web applications from scratch. Leveraging Next.js 15 App Router, React 19 concurrent features, and modular component architectures engineered for sub-second page loads and zero layout shifts.",
      metrics: [
        { label: "TTFB / SPEED", value: "< 250ms" },
        { label: "TYPE COVERAGE", value: "100% TS" },
        { label: "CORE WEB VITALS", value: "98+ SCORE" },
      ],
      deliverables: [
        "Complete Next.js 15 App Router production codebase",
        "Strict TypeScript component design system & state store",
        "Responsive grid architectures across mobile, tablet & desktop",
        "Automated SEO metadata, Open Graph cards & JSON-LD schema",
        "CI/CD zero-downtime deployment setup on Vercel or cloud",
      ],
      tags: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Server Actions", "REST/GraphQL"],
      turnaround: "1–3 WEEKS",
      image: "/services/service_frontend_architecture.jpg",
      urlSlug: "frontend-architecture",
    },
    {
      id: "webgl-motion",
      num: "02",
      icon: Zap,
      title: "PERFORMANCE & WEBGL EXPERIENCES",
      subtitle: "Fluid Physics-Driven Animation & 3D Web",
      description:
        "Elevating brand perception through tactile physics, smooth scroll-linked choreographies, and hardware-accelerated 3D WebGL scenes. Combining Framer Motion and GSAP ScrollTrigger to produce silky-smooth 60 FPS interactions.",
      metrics: [
        { label: "RENDER RATE", value: "60 FPS" },
        { label: "GPU SPEED", value: "HARDWARE" },
        { label: "LAYOUT SHIFT", value: "CLS: 0.00" },
      ],
      deliverables: [
        "Three.js WebGL canvas interactive scenes & GLSL shaders",
        "Scroll-driven bidirectional parallax and timeline scrubbing",
        "Tactile cursor magnetism, hover spring physics & fluid cards",
        "GPU-accelerated clip-path masks & masked kinetic typography",
        "Graceful mobile fallbacks for low-power and reduced-motion",
      ],
      tags: ["Three.js", "Framer Motion", "GSAP ScrollTrigger", "GLSL Shaders", "Hardware Accel", "Physics Easing"],
      turnaround: "2–3 WEEKS",
      image: "/services/service_webgl_performance.jpg",
      urlSlug: "webgl-motion",
    },
    {
      id: "ecommerce-cms",
      num: "03",
      icon: ShoppingBag,
      title: "HIGH-CONVERTING E-COMMERCE & STOREFRONTS",
      subtitle: "Shopify Liquid 2.0 & Headless Digital Commerce",
      description:
        "Architecting bespoke digital storefronts designed to maximize conversions, build brand authority, and handle high traffic surges. Specialized in custom Shopify themes, dynamic slide-out cart drawers, and product bundle builders.",
      metrics: [
        { label: "CHECKOUT FLOW", value: "INSTANT" },
        { label: "AVG AOV LIFT", value: "+34%" },
        { label: "VENDOR LOCK-IN", value: "0% OPEN" },
      ],
      deliverables: [
        "Custom Shopify 2.0 section-based liquid storefront theme",
        "Dynamic product bundle builder & interactive customizer",
        "Slide-out AJAX cart drawer with upsells & free shipping bar",
        "Payment gateway setup (Stripe, Razorpay, UPI) & security audits",
        "Complete non-technical store management video walkthroughs",
      ],
      tags: ["Shopify Liquid", "AJAX Cart API", "Custom Themes", "WordPress ACF", "Headless CMS", "Conversion Rate"],
      turnaround: "2–4 WEEKS",
      image: "/services/service_ecommerce_platform.jpg",
      urlSlug: "ecommerce-storefronts",
    },
    {
      id: "performance-audits",
      num: "04",
      icon: Gauge,
      title: "PERFORMANCE OVERHAUL & WEB VITALS",
      subtitle: "Transforming Slow Websites into Instant Machines",
      description:
        "Diagnosing and eliminating bottlenecks that kill user engagement and search engine rankings. Reducing script bloat, optimizing asset payloads, and restructuring DOM hierarchies to guarantee 98+ Google Lighthouse scores.",
      metrics: [
        { label: "LIGHTHOUSE", value: "98-100" },
        { label: "PAYLOAD REDUCTION", value: "-65%" },
        { label: "FIRST PAINT", value: "< 0.8s" },
      ],
      deliverables: [
        "Full Core Web Vitals diagnostic audit & bottleneck report",
        "JavaScript bundle splitting, tree-shaking & deferred loading",
        "Modern AVIF/WebP image compression & responsive picture tags",
        "CSS pruning & elimination of render-blocking script chains",
        "Before-and-after performance benchmarking verification",
      ],
      tags: ["Core Web Vitals", "Lighthouse 98+", "Bundle Splitting", "Cache Optimization", "SEO Speed", "Zero Jank"],
      turnaround: "1–2 WEEKS",
      image: "/services/service_code_workstation_clean.jpg",
      urlSlug: "performance-overhaul",
    },
  ];

  const comparisonRows = [
    {
      metric: "DELIVERY SPEED",
      amaan: "1–3 Weeks Average",
      agency: "3–6 Months Typical",
      freelancer: "Unpredictable / Delayed",
    },
    {
      metric: "ENGINEERING STACK",
      amaan: "Next.js 15, React 19, Strict TypeScript",
      agency: "Legacy Templates / Bloated CMS",
      freelancer: "Basic WordPress or generic builders",
    },
    {
      metric: "COMMUNICATION",
      amaan: "Direct access to engineer · Zero middleman",
      agency: "Account managers & slow ticket chains",
      freelancer: "Ghosting risk · Irregular check-ins",
    },
    {
      metric: "PERFORMANCE SCORE",
      amaan: "98+ Google Lighthouse Guaranteed",
      agency: "40–60 Average (Ignored)",
      freelancer: "Not tested or measured",
    },
    {
      metric: "CODE OWNERSHIP",
      amaan: "100% Full GitHub repository transfer",
      agency: "Vendor lock-in · Monthly licensing fees",
      freelancer: "Unorganized zip archives",
    },
    {
      metric: "POST-LAUNCH WARRANTY",
      amaan: "30 Days included warranty support",
      agency: "Expensive hourly change orders",
      freelancer: "Charges for every single bug fix",
    },
  ];

  const guarantees = [
    {
      num: "01",
      title: "98+ CORE WEB VITALS GUARANTEE",
      desc: "Every website I engineer is audited to achieve sub-second load times and high Google rankings. If it doesn't meet the target, I optimize it for free.",
    },
    {
      num: "02",
      title: "100% IP & CODE OWNERSHIP",
      desc: "You own every single line of code, asset, and component. Full GitHub repository transfer upon delivery with zero recurring platform lock-in.",
    },
    {
      num: "03",
      title: "60 FPS ZERO-JANK MOTION",
      desc: "All animations utilize hardware-accelerated transforms and physics curves. Seamless, tactile interaction on mobile without draining device battery.",
    },
    {
      num: "04",
      title: "30-DAY TECHNICAL WARRANTY",
      desc: "Peace of mind included with every deployment. Dedicated 30-day post-launch support for refinements, minor adjustments, and bug fixes.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#0a0a0a] font-sans selection:bg-[#eb5424] selection:text-white relative overflow-x-hidden">
      {/* Hero Header with Oversized Page Heading & Integrated Header */}
      <section className="bg-[#070707] text-white relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />

        <PortfolioHeader />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-8 sm:pt-16 pb-16 sm:pb-20 relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left">
          {/* Back to Home Link */}
          <div className="mb-6 sm:mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-[#eb5424] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>BACK TO HOMEPAGE</span>
            </Link>
          </div>

          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 justify-center sm:justify-start">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#eb5424]">
              * CAPABILITIES &amp; ENGINEERING METHODOLOGY
            </span>
          </div>

          <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-white font-sans leading-[0.9] mb-6 sm:mb-8 text-center sm:text-left">
            <MaskedText text="SERVICES." delay={0.1} stagger={0.08} />
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-6 sm:pt-8 border-t border-white/15 max-w-5xl text-left">
            <p className="text-sm sm:text-lg lg:text-xl text-gray-300 font-sans leading-relaxed">
              Bespoke digital engineering services tailored for high-growth startups, ambitious founders, and enterprise brands that require precision, speed, and distinct visual identity.
            </p>
            <div className="flex flex-col justify-between items-center sm:items-start gap-4">
              <p className="text-xs sm:text-sm text-gray-400 font-mono leading-relaxed text-center sm:text-left">
                Every service engagement includes full source-code ownership, 98+ Core Web Vitals guarantees, and post-launch technical warranty.
              </p>
              <div>
                <MagneticButton strength={0.25}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#eb5424] hover:bg-[#f04c1a] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-xl"
                  >
                    <span>START A PROJECT</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREMIUM EDITORIAL SECTION 1: Core Offerings & Architectural Specifications */}
      <section className="py-14 sm:py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative overflow-hidden">
        {/* 1. Redesigned Editorial Section Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-8 sm:mb-12">
          {/* Eyebrow Label */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 mb-3.5 sm:mb-4 px-3 py-1 rounded-full bg-[#eb5424]/10 border border-[#eb5424]/20"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#eb5424]" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#eb5424]">
              WHAT I BUILD
            </span>
          </motion.div>

          {/* Oversized Section Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[76px] font-black uppercase tracking-tight font-sans leading-[0.98] text-center break-words my-2"
          >
            <span className="text-[#0a0a0a] block sm:inline">CORE OFFERINGS &amp; </span>
            <span className="text-gray-400 block sm:inline">SPECIFICATIONS.</span>
          </motion.h2>

          {/* Controlled Width Supporting Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs sm:text-sm font-sans font-medium uppercase tracking-wider text-gray-500 mt-3 sm:mt-5 leading-relaxed max-w-2xl mx-auto text-center"
          >
            ARCHITECTURAL DELIVERABLES, BENCHMARK TARGETS, AND PRODUCTION SPECIFICATIONS ACROSS CORE DISCIPLINES.
          </motion.p>
        </div>

        {/* 2. Capability Detail Cards (Alternating Zig-Zag on Desktop, Image-First on Mobile) */}
        <div className="space-y-8 sm:space-y-12 lg:space-y-14 max-w-6xl mx-auto w-full">
          {capabilities.map((cap, idx) => {
            const isCardLeft = idx % 2 === 0; // Desktop: Row 1 & 3: Content Left, Image Right | Row 2 & 4: Image Left, Content Right
            const Icon = cap.icon;

            return (
              <motion.div
                key={cap.id}
                id={`capability-${cap.id}`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full rounded-2xl sm:rounded-3xl bg-[#fcfcfc] border border-gray-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.04),0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300 overflow-hidden relative group"
              >
                {/* Subtle Top Accent Line */}
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#eb5424] to-transparent opacity-70 group-hover:opacity-100 transition-opacity" />

                <div className="p-4 sm:p-6 lg:p-8 xl:p-9">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-7 lg:gap-8 xl:gap-10 items-center w-full">
                    
                    {/* CONTENT / SPECIFICATIONS COLUMN (order-2 on Mobile, lg:order-1/2 on Desktop) */}
                    <div
                      className={`w-full lg:col-span-7 flex flex-col justify-between order-2 ${
                        isCardLeft ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      {/* Header row: Spec badge + Subtitle + SLA badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2.5 pb-3 mb-3 border-b border-gray-100 w-full">
                        <div className="flex flex-wrap items-center gap-2 min-w-0">
                          <span className="font-mono text-[11px] font-black text-[#eb5424] px-2 py-0.5 rounded-md bg-[#eb5424]/10 border border-[#eb5424]/20 inline-flex items-center gap-1.5 shrink-0">
                            <Icon className="w-3 h-3 text-[#eb5424]" />
                            SPEC // {cap.num}
                          </span>
                          <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-500 break-words">
                            {cap.subtitle}
                          </span>
                        </div>

                        <div className="font-mono text-[10px] font-bold text-gray-700 bg-white px-2.5 py-0.5 rounded-full border border-gray-200 shadow-2xs flex items-center gap-1 shrink-0 self-start sm:self-auto">
                          <Clock className="w-3 h-3 text-[#eb5424]" />
                          <span>SLA: {cap.turnaround}</span>
                        </div>
                      </div>

                      {/* Large Bold Capability Heading */}
                      <h3 className="text-lg sm:text-2xl lg:text-[23px] font-black uppercase font-sans tracking-tight text-[#0a0a0a] leading-tight mb-2 break-words">
                        {cap.title}
                      </h3>

                      {/* Supporting Description with comfortable line height */}
                      <p className="text-xs sm:text-[13px] text-gray-600 font-sans leading-relaxed mb-3.5 max-w-xl">
                        {cap.description}
                      </p>

                      {/* Benchmark Performance HUD (Compact 3-col metrics) */}
                      <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-3.5 p-2 rounded-xl bg-[#f7f7f8] border border-gray-200/70 w-full">
                        {cap.metrics.map((m) => (
                          <div key={m.label} className="text-center px-0.5 py-0.5 min-w-0">
                            <span className="font-mono text-[8px] sm:text-[9px] text-gray-400 uppercase tracking-wider block mb-0.5 truncate">
                              {m.label}
                            </span>
                            <span className="font-sans font-black text-xs sm:text-sm text-gray-950 truncate block">
                              {m.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Key Deliverables (Compact 2-column checklist) */}
                      <div className="mb-4 w-full">
                        <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-gray-400 block mb-1.5">
                          ARCHITECTURAL DELIVERABLES:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-2 w-full">
                          {cap.deliverables.map((item) => (
                            <div key={item} className="flex items-start gap-1.5 text-xs text-gray-800 font-sans leading-snug">
                              <span className="w-3.5 h-3.5 rounded-full bg-[#eb5424] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                                <Check className="w-2 h-2" />
                              </span>
                              <span className="text-[11px] sm:text-xs leading-tight break-words">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Row: Tech stack tags + CTA Button */}
                      <div className="pt-3 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 w-full">
                        <div className="flex flex-wrap gap-1 sm:gap-1.5 max-w-md">
                          {cap.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded-md bg-white border border-gray-200/90 font-mono text-[10px] text-gray-700 shadow-2xs hover:border-[#eb5424] hover:text-[#eb5424] transition-colors cursor-default"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="w-full sm:w-auto shrink-0">
                          <MagneticButton strength={0.2} className="w-full sm:w-auto">
                            <Link
                              href={`/contact?service=${encodeURIComponent(cap.title)}`}
                              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0a0a0a] hover:bg-[#eb5424] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-sm group/btn text-center"
                            >
                              <span>BOOK SPEC</span>
                              <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                            </Link>
                          </MagneticButton>
                        </div>
                      </div>
                    </div>

                    {/* VISUAL PRESENTATION COLUMN (order-1 on Mobile, lg:order-1/2 on Desktop) */}
                    <div
                      className={`w-full lg:col-span-5 order-1 ${
                        isCardLeft ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <TiltCard tiltIntensity={3} className="w-full">
                        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-gray-950 border border-gray-800 shadow-xl flex flex-col justify-between group/tilt w-full">
                          {/* Browser Mockup Window Chrome Header */}
                          <div className="flex items-center justify-between px-3 py-2 bg-[#111] border-b border-white/10 text-xs font-mono text-white/50 w-full">
                            <div className="flex items-center gap-1.5 shrink-0">
                              <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                              <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                              <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
                            </div>
                            <span className="text-[9px] sm:text-[10px] text-gray-400 font-mono truncate px-1 max-w-[150px] sm:max-w-none">
                              https://amaan-shaikh.dev/{cap.urlSlug}
                            </span>
                            <span className="text-[9px] sm:text-[10px] text-[#eb5424] font-bold flex items-center gap-1 shrink-0">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#eb5424]" />
                              READY
                            </span>
                          </div>

                          {/* Clean Framed Visual Image with Consistent Aspect Ratio */}
                          <div className="relative w-full aspect-[16/10] overflow-hidden bg-black max-h-[220px] sm:max-h-[250px] lg:max-h-[275px]">
                            <Image
                              src={cap.image}
                              alt={cap.title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover/tilt:scale-105"
                              sizes="(max-width: 1024px) 100vw, 40vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                            {/* Architectural Overlay Title & Badge */}
                            <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white flex items-end justify-between z-10 pointer-events-none">
                              <div className="min-w-0 pr-2">
                                <span className="font-mono text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-[#eb5424] block mb-0.5">
                                  SPEC // {cap.num}
                                </span>
                                <h4 className="text-xs sm:text-sm font-black uppercase font-sans tracking-tight truncate">
                                  {cap.title}
                                </h4>
                              </div>
                              <span className="px-2 py-0.5 rounded bg-[#eb5424] text-[8px] sm:text-[9px] font-mono text-white font-bold shrink-0 shadow-sm">
                                PREVIEW
                              </span>
                            </div>
                          </div>

                          {/* Restrained Telemetry Console Bar */}
                          <div className="px-3 py-1.5 sm:py-2 bg-[#080808] border-t border-white/10 font-mono text-[9px] sm:text-[10px] flex items-center justify-between text-gray-400 w-full">
                            <span className="text-emerald-400 flex items-center gap-1 font-bold shrink-0">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                              SYSTEMS OK
                            </span>
                            <span className="text-white/40 truncate text-right pl-2">
                              &gt; audit --target={cap.urlSlug}
                            </span>
                          </div>
                        </div>
                      </TiltCard>
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* RARE & EXCELLENT SECTION 2: Why Clients Choose An Independent Architect vs Traditional Agencies */}
      <section className="py-16 sm:py-24 lg:py-28 bg-[#070707] text-white border-t border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#eb5424] block mb-3">
              * THE ARCHITECTURAL ADVANTAGE
            </span>
            <BlurReveal duration={0.8} yOffset={24}>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white font-sans leading-tight">
                WHY WORK WITH AN <span className="text-gray-400">INDEPENDENT ARCHITECT.</span>
              </h2>
            </BlurReveal>
            <p className="text-xs sm:text-sm font-sans font-medium uppercase tracking-wider text-gray-400 mt-3 sm:mt-4 max-w-xl mx-auto leading-relaxed text-center">
              A RADICAL COMPARISON BETWEEN BLOATED AGENCIES, UNRELIABLE FREELANCERS, AND DIRECT FULL-OWNERSHIP ENGINEERING.
            </p>
          </div>

          {/* MOBILE RESPONSIVE COMPARISON VIEW (< md) - 2-Column Grid on Mobile */}
          <div className="md:hidden grid grid-cols-2 gap-2.5 sm:gap-3 w-full">
            {comparisonRows.map((row, idx) => (
              <div
                key={row.metric}
                className="rounded-xl border border-white/12 bg-white/[0.03] p-2.5 sm:p-3 space-y-2 backdrop-blur-md shadow-lg w-full flex flex-col justify-between"
              >
                {/* Metric Title & Order */}
                <div className="flex items-center justify-between border-b border-white/10 pb-1.5 sm:pb-2">
                  <span className="font-mono text-[10px] sm:text-[11px] font-bold text-gray-200 uppercase tracking-wider truncate pr-1">
                    {row.metric}
                  </span>
                  <span className="font-mono text-[8px] sm:text-[9px] text-[#eb5424] font-bold shrink-0">
                    0{idx + 1}
                  </span>
                </div>

                {/* 1. Amaan Shaikh (Highlighted Solo Architect Card) */}
                <div className="rounded-lg bg-[#eb5424]/10 border border-[#eb5424]/40 p-2 flex items-start gap-1.5">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#eb5424] shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <span className="font-mono text-[8px] font-bold uppercase text-[#eb5424] block leading-tight mb-0.5 truncate">
                      ★ AMAAN (SOLO)
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-bold text-white leading-tight block break-words">
                      {row.amaan}
                    </span>
                  </div>
                </div>

                {/* 2. Traditional Agencies & Freelancers Underneath */}
                <div className="grid grid-cols-1 gap-1.5 pt-0.5">
                  <div className="rounded-md bg-white/[0.02] border border-white/5 p-1.5 flex items-start gap-1">
                    <XCircle className="w-2.5 h-2.5 text-gray-500 shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <span className="font-mono text-[7px] sm:text-[8px] uppercase tracking-wider text-gray-400 block leading-tight">
                        Agencies
                      </span>
                      <p className="text-[9px] sm:text-[10px] text-gray-300 leading-tight break-words">{row.agency}</p>
                    </div>
                  </div>

                  <div className="rounded-md bg-white/[0.02] border border-white/5 p-1.5 flex items-start gap-1">
                    <XCircle className="w-2.5 h-2.5 text-gray-500 shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <span className="font-mono text-[7px] sm:text-[8px] uppercase tracking-wider text-gray-400 block leading-tight">
                        Freelancers
                      </span>
                      <p className="text-[9px] sm:text-[10px] text-gray-300 leading-tight break-words">{row.freelancer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* DESKTOP & TABLET COMPARISON TABLE (md:block) with min-w-[760px] */}
          <div className="hidden md:block overflow-x-auto rounded-3xl border border-white/15 bg-white/[0.02] backdrop-blur-xl shadow-2xl">
            <table className="w-full min-w-[760px] text-left font-sans border-collapse">
              <thead>
                <tr className="border-b border-white/15 bg-white/[0.04] text-xs font-mono uppercase tracking-wider">
                  <th className="py-5 px-6 text-gray-400 w-1/4">ENGINEERING CRITERIA</th>
                  <th className="py-5 px-6 text-[#eb5424] font-bold bg-[#eb5424]/10 border-x border-white/10 w-1/3">
                    ★ AMAAN SHAIKH (SOLO ARCHITECT)
                  </th>
                  <th className="py-5 px-6 text-gray-400 w-1/4">TRADITIONAL DESIGN AGENCIES</th>
                  <th className="py-5 px-6 text-gray-400 w-1/4">STANDARD MARKETPLACE FREELANCERS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-xs sm:text-sm">
                {comparisonRows.map((row, idx) => (
                  <tr key={row.metric} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4.5 px-6 font-mono text-xs text-gray-300 font-bold tracking-wide">
                      {row.metric}
                    </td>
                    <td className="py-4.5 px-6 font-bold text-white bg-[#eb5424]/[0.06] border-x border-white/10">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#eb5424] shrink-0" />
                        <span>{row.amaan}</span>
                      </div>
                    </td>
                    <td className="py-4.5 px-6 text-gray-400 font-normal">
                      <div className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-gray-600 shrink-0" />
                        <span>{row.agency}</span>
                      </div>
                    </td>
                    <td className="py-4.5 px-6 text-gray-400 font-normal">
                      <div className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-gray-600 shrink-0" />
                        <span>{row.freelancer}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* RARE & EXCELLENT SECTION 3: The 4 Non-Negotiable Engineering Guarantees */}
      <section className="py-16 sm:py-24 lg:py-32 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative overflow-hidden">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#eb5424]">
              * CONTRACTUAL CERTAINTY
            </span>
          </div>
          <BlurReveal duration={0.8} yOffset={24}>
            <h2 className="text-2xl sm:text-4xl lg:text-[52px] font-black uppercase tracking-tight text-[#0a0a0a] font-sans leading-[1.08] text-center">
              FOUR STANDARDS <span className="text-gray-400">GUARANTEED.</span>
            </h2>
          </BlurReveal>
          <p className="text-xs sm:text-sm font-sans font-medium uppercase tracking-wider text-gray-500 mt-3 sm:mt-4 max-w-xl mx-auto leading-relaxed text-center">
            EVERY SERVICE CONTRACT IS BACKED BY TANGIBLE TECHNICAL AND INTELLECTUAL PROPERTY GUARANTEES.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {guarantees.map((g) => (
            <TiltCard key={g.num} tiltIntensity={5} className="h-full">
              <div className="p-3.5 sm:p-7 lg:p-8 rounded-xl sm:rounded-3xl bg-[#fcfcfc] border border-gray-200 hover:border-[#eb5424] transition-all duration-300 shadow-sm hover:shadow-xl h-full flex flex-col justify-between group">
                <div>
                  <span className="font-mono text-[9px] sm:text-xs font-black text-[#eb5424] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-[#eb5424]/10 mb-2.5 sm:mb-6 inline-block">
                    {g.num} // GUARANTEE
                  </span>
                  <h3 className="font-sans font-black text-xs sm:text-base lg:text-lg uppercase text-gray-950 mb-1.5 sm:mb-3 group-hover:text-[#eb5424] transition-colors leading-tight">
                    {g.title}
                  </h3>
                  <p className="text-[11px] sm:text-sm text-gray-600 font-sans leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {g.desc}
                  </p>
                </div>
                <div className="pt-3 sm:pt-6 mt-3 sm:mt-6 border-t border-gray-100 flex items-center justify-between font-mono text-[9px] sm:text-[10px] text-gray-400">
                  <span className="truncate pr-1">✦ 100% INCLUDED</span>
                  <span className="text-gray-900 font-bold shrink-0">VERIFIED</span>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-20 bg-gray-50 border-t border-gray-200 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <BlurReveal duration={0.8} yOffset={24}>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black font-sans mb-4">
              READY TO ELEVATE YOUR WEB PRESENCE?
            </h2>
          </BlurReveal>
          <p className="text-sm sm:text-base text-gray-600 font-sans mb-8">
            Let&apos;s map out your architecture, timeline, and deliverables with zero obligation.
          </p>
          <MagneticButton strength={0.3}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#eb5424] hover:bg-[#f04c1a] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-xl"
            >
              <span>SCHEDULE A TECHNICAL CONSULTATION</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </MagneticButton>
        </div>
      </section>

      <MassiveFooter />
    </div>
  );
}
