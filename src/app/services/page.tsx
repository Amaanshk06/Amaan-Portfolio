"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
  const [activeTab, setActiveTab] = useState(0);

  const capabilities = [
    {
      id: "frontend-architecture",
      num: "01",
      icon: Code2,
      tabLabel: "WEB & FRONTEND",
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
      tabLabel: "MOTION & WEBGL",
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
      tabLabel: "COMMERCE & CMS",
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
      tabLabel: "PERFORMANCE RESCUE",
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
      image: "/services/service_frontend_architecture.jpg",
      urlSlug: "performance-overhaul",
    },
  ];

  const currentCap = capabilities[activeTab];

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
              * CAPABILITIES &amp; ENGINEERING METHODOLOGY
            </span>
          </div>

          <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-white font-sans leading-[0.9] mb-8 text-center sm:text-left">
            <MaskedText text="SERVICES." delay={0.1} stagger={0.08} />
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/15 max-w-5xl text-left">
            <p className="text-base sm:text-xl text-gray-300 font-sans leading-relaxed">
              Bespoke digital engineering services tailored for high-growth startups, ambitious founders, and enterprise brands that require precision, speed, and distinct visual identity.
            </p>
            <div className="flex flex-col justify-between items-center sm:items-start">
              <p className="text-xs sm:text-sm text-gray-400 font-mono leading-relaxed">
                Every service engagement includes full source-code ownership, 98+ Core Web Vitals guarantees, and post-launch technical warranty.
              </p>
              <div className="pt-4">
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

      {/* RARE & EXCELLENT SECTION 1: Interactive Capability Console & Architecture Studio */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-6 sm:px-12 relative overflow-hidden">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#eb5424]">
              * INTERACTIVE ENGINEERING LAB
            </span>
          </div>
          <BlurReveal duration={0.8} yOffset={24}>
            <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-black uppercase tracking-tight text-[#0a0a0a] font-sans leading-[1.08] text-center">
              CORE OFFERINGS &amp; <span className="text-gray-400">SPECIFICATIONS.</span>
            </h2>
          </BlurReveal>
          <p className="text-xs sm:text-sm font-sans font-medium uppercase tracking-wider text-gray-500 mt-4 max-w-xl mx-auto leading-relaxed text-center">
            SELECT A CAPABILITY TO INSPECT ARCHITECTURAL DELIVERABLES, BENCHMARK TARGETS, AND EXECUTION METRICS.
          </p>
        </div>

        {/* Interactive Console Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 max-w-4xl mx-auto">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            const isActive = activeTab === idx;

            return (
              <button
                key={cap.id}
                onClick={() => setActiveTab(idx)}
                className={`px-4 sm:px-6 py-3 rounded-2xl font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2.5 cursor-pointer ${
                  isActive
                    ? "bg-[#0a0a0a] text-white shadow-xl scale-102 border border-black"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-600 border border-gray-200"
                }`}
              >
                <span className={isActive ? "text-[#eb5424]" : "text-gray-400"}>
                  {cap.num} //
                </span>
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#eb5424]" : "text-gray-500"}`} />
                <span>{cap.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Active Console Showcase Stage with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCap.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-12 rounded-3xl bg-[#fcfcfc] border border-gray-200 shadow-2xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Technical Blueprint Details (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div>
                  {/* Top Bar with Number & Turnaround SLA */}
                  <div className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-black text-[#eb5424] px-3 py-1 rounded bg-[#eb5424]/10 border border-[#eb5424]/20">
                        SPEC // {currentCap.num}
                      </span>
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-gray-500">
                        {currentCap.subtitle}
                      </span>
                    </div>
                    <span className="font-mono text-xs font-bold text-gray-900 bg-gray-100 px-3 py-1 rounded-full border border-gray-200 flex items-center gap-1.5 shrink-0">
                      <Clock className="w-3.5 h-3.5 text-[#eb5424]" />
                      SLA: {currentCap.turnaround}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-black uppercase font-sans tracking-tight text-gray-950 mb-3 leading-tight">
                    {currentCap.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed mb-6">
                    {currentCap.description}
                  </p>

                  {/* Benchmark Performance HUD (3 live metric cards) */}
                  <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-2xl bg-white border border-gray-200 shadow-2xs">
                    {currentCap.metrics.map((m) => (
                      <div key={m.label} className="text-center">
                        <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block mb-0.5">
                          {m.label}
                        </span>
                        <span className="font-sans font-black text-base sm:text-lg text-gray-950">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Core Deliverables Checklist */}
                  <div className="space-y-2.5 mb-6">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-2">
                      TECHNICAL DELIVERABLES INCLUDED:
                    </span>
                    {currentCap.deliverables.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-xs text-gray-800 font-sans">
                        <span className="w-4 h-4 rounded-full bg-[#eb5424] text-white flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </span>
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {currentCap.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-gray-100 border border-gray-200 font-mono text-[11px] font-medium text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-6 border-t border-gray-200 flex items-center justify-between">
                  <MagneticButton strength={0.25}>
                    <Link
                      href={`/contact?service=${encodeURIComponent(currentCap.title)}`}
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-black hover:bg-[#eb5424] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md group"
                    >
                      <span>BOOK THIS SPECIFICATION</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </MagneticButton>

                  <span className="font-mono text-xs text-gray-400">
                    ESTIMATED LAUNCH: 14 DAYS
                  </span>
                </div>
              </div>

              {/* Right Column: Visual Terminal Showcase (5 cols) */}
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden bg-gray-950 border border-gray-800 shadow-2xl flex flex-col justify-between group">
                {/* Browser Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#111] border-b border-white/10 text-xs font-mono text-white/50">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[10px] text-gray-400 font-mono truncate">
                    https://amaan-shaikh.dev/{currentCap.urlSlug}
                  </span>
                  <span className="text-[10px] text-[#eb5424] font-bold">READY</span>
                </div>

                {/* High-Resolution Technical Image */}
                <div className="relative w-full aspect-[16/11] overflow-hidden bg-black">
                  <Image
                    src={currentCap.image}
                    alt={currentCap.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Floating Overlay Badge */}
                  <div className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between">
                    <div>
                      <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-[#eb5424] block mb-0.5">
                        ARCHITECTURAL SPECIFICATION // 2026
                      </span>
                      <h4 className="text-sm sm:text-base font-black uppercase font-sans tracking-tight">
                        {currentCap.title}
                      </h4>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-[#eb5424] text-[10px] font-mono text-white font-bold shrink-0">
                      LIVE SPEC
                    </span>
                  </div>
                </div>

                {/* Terminal Footer Console */}
                <div className="p-4 bg-[#0a0a0a] border-t border-white/10 font-mono text-[11px] text-gray-400 flex items-center justify-between">
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    STATUS: ALL SYSTEMS NOMINAL
                  </span>
                  <span>BUILD_ID: 2026.04</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* RARE & EXCELLENT SECTION 2: Why Clients Choose An Independent Architect vs Traditional Agencies */}
      <section className="py-20 sm:py-28 bg-[#070707] text-white border-t border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#eb5424] block mb-3">
              * THE ARCHITECTURAL ADVANTAGE
            </span>
            <BlurReveal duration={0.8} yOffset={24}>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-sans leading-tight">
                WHY WORK WITH AN <span className="text-gray-400">INDEPENDENT ARCHITECT.</span>
              </h2>
            </BlurReveal>
            <p className="text-xs sm:text-sm font-sans font-medium uppercase tracking-wider text-gray-400 mt-4 max-w-xl mx-auto leading-relaxed text-center">
              A RADICAL COMPARISON BETWEEN BLOATED AGENCIES, UNRELIABLE FREELANCERS, AND DIRECT FULL-OWNERSHIP ENGINEERING.
            </p>
          </div>

          {/* High-Fidelity Comparison Table */}
          <div className="overflow-x-auto rounded-3xl border border-white/15 bg-white/[0.02] backdrop-blur-xl shadow-2xl">
            <table className="w-full text-left font-sans border-collapse">
              <thead>
                <tr className="border-b border-white/15 bg-white/[0.04] text-xs font-mono uppercase tracking-wider">
                  <th className="py-5 px-6 text-gray-400">ENGINEERING CRITERIA</th>
                  <th className="py-5 px-6 text-[#eb5424] font-bold bg-[#eb5424]/10 border-x border-white/10">
                    ★ AMAAN SHAIKH (SOLO ARCHITECT)
                  </th>
                  <th className="py-5 px-6 text-gray-400">TRADITIONAL DESIGN AGENCIES</th>
                  <th className="py-5 px-6 text-gray-400">STANDARD MARKETPLACE FREELANCERS</th>
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
      <section className="py-24 sm:py-32 max-w-7xl mx-auto px-6 sm:px-12 relative overflow-hidden">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#eb5424]">
              * CONTRACTUAL CERTAINTY
            </span>
          </div>
          <BlurReveal duration={0.8} yOffset={24}>
            <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-black uppercase tracking-tight text-[#0a0a0a] font-sans leading-[1.08] text-center">
              FOUR STANDARDS <span className="text-gray-400">GUARANTEED.</span>
            </h2>
          </BlurReveal>
          <p className="text-xs sm:text-sm font-sans font-medium uppercase tracking-wider text-gray-500 mt-4 max-w-xl mx-auto leading-relaxed text-center">
            EVERY SERVICE CONTRACT IS BACKED BY TANGIBLE TECHNICAL AND INTELLECTUAL PROPERTY GUARANTEES.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((g) => (
            <TiltCard key={g.num} tiltIntensity={5} className="h-full">
              <div className="p-8 rounded-3xl bg-[#fcfcfc] border border-gray-200 hover:border-[#eb5424] transition-all duration-300 shadow-md hover:shadow-xl h-full flex flex-col justify-between group">
                <div>
                  <span className="font-mono text-xs font-black text-[#eb5424] px-2.5 py-1 rounded bg-[#eb5424]/10 mb-6 inline-block">
                    {g.num} // GUARANTEE
                  </span>
                  <h3 className="font-sans font-black text-lg uppercase text-gray-950 mb-3 group-hover:text-[#eb5424] transition-colors leading-tight">
                    {g.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                    {g.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between font-mono text-[10px] text-gray-400">
                  <span>✦ 100% INCLUDED</span>
                  <span className="text-gray-900 font-bold">VERIFIED</span>
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
