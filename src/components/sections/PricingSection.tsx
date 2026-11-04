"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { Check, ArrowUpRight, ShieldCheck, Sparkles, ShoppingBag, Globe, Layout } from "lucide-react";
import { FadeContent } from "@/components/ui/FadeContent";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TiltCard } from "@/components/ui/TiltCard";

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"project" | "maintenance">("project");
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

  // CATEGORY 1: PROJECT-BASED PRICING
  const projectPlans = [
    {
      packageNumber: "PACKAGE 01",
      name: "LANDING PAGE WEBSITE",
      badge: "SINGLE PAGE",
      pricePrefix: "STARTING AT",
      price: "₹8,000",
      period: "onwards",
      costType: "One-time project",
      description:
        "A professional, responsive landing page designed to showcase a business, service or product.",
      features: [
        "Single-page website",
        "Responsive desktop and mobile design",
        "Modern UI/UX",
        "Contact or enquiry form",
        "Basic animations and interactions",
        "Performance optimization",
      ],
      featured: false,
      isEcommerce: false,
      ctaText: "GET STARTED",
      icon: Layout,
    },
    {
      packageNumber: "PACKAGE 02",
      name: "MULTI-PAGE WEBSITE",
      badge: "BUSINESS PRESENCE",
      pricePrefix: "STARTING AT",
      price: "₹15,000",
      period: "onwards",
      costType: "One-time project",
      description:
        "A complete multi-page business website for brands and businesses that need a professional online presence.",
      features: [
        "5–8 website pages",
        "Professional custom design",
        "Responsive layouts",
        "Smooth animations and interactions",
        "Contact and enquiry forms",
        "Navigation and page integration",
        "Basic SEO setup",
      ],
      featured: false,
      isEcommerce: false,
      ctaText: "GET STARTED",
      icon: Globe,
    },
    {
      packageNumber: "PACKAGE 03",
      name: "E-COMMERCE WEBSITE",
      badge: "STORE ARCHITECTURE",
      pricePrefix: "STARTING AT",
      price: "₹25,000",
      period: "onwards",
      costType: "Typical range: ₹25,000 – ₹30,000",
      description:
        "A fully functional online shopping website designed to showcase products and manage online sales.",
      features: [
        "Complete e-commerce website",
        "Product listing and product details",
        "Shopping cart functionality",
        "Checkout integration",
        "Payment gateway integration",
        "Responsive design",
        "Order management functionality",
      ],
      featured: true,
      isEcommerce: true,
      ctaText: "REQUEST A QUOTE",
      icon: ShoppingBag,
    },
  ];

  // CATEGORY 2: MONTHLY WEBSITE MAINTENANCE PRICING
  const maintenancePlans = [
    {
      packageNumber: "PLAN 01",
      name: "LANDING PAGE MAINTENANCE",
      badge: "ESSENTIAL CARE",
      pricePrefix: "STARTING AT",
      price: "₹5,000",
      period: "/ Month",
      costType: "Recurring monthly cost",
      description:
        "Keep your single-page landing site secure, up to date, and continuously performing at high speed.",
      features: [
        "Basic website updates",
        "Content and image changes",
        "Performance monitoring",
        "Routine maintenance",
        "Basic technical support",
      ],
      featured: false,
      isEcommerce: false,
      ctaText: "REQUEST A QUOTE",
      icon: Layout,
    },
    {
      packageNumber: "PLAN 02",
      name: "BUSINESS WEBSITE MAINTENANCE",
      badge: "CONTINUOUS SUPPORT",
      pricePrefix: "STARTING AT",
      price: "₹6,000",
      period: "/ Month",
      costType: "Recurring monthly cost",
      description:
        "Ongoing technical maintenance and regular content updates for growing multi-page business websites.",
      features: [
        "Regular content updates",
        "Page and image updates",
        "Website performance monitoring",
        "Routine technical maintenance",
        "Basic security checks",
        "Technical support",
      ],
      featured: false,
      isEcommerce: false,
      ctaText: "REQUEST A QUOTE",
      icon: Globe,
    },
    {
      packageNumber: "PLAN 03",
      name: "E-COMMERCE MAINTENANCE",
      badge: "STORE OPTIMIZATION",
      pricePrefix: "STARTING AT",
      price: "₹8,000",
      period: "/ Month",
      costType: "Recurring monthly cost",
      description:
        "Priority store maintenance, payment and cart checkups, product updates, and continuous security monitoring.",
      features: [
        "Product and content updates",
        "Website performance monitoring",
        "Routine technical maintenance",
        "E-commerce functionality checks",
        "Basic security monitoring",
        "Technical support",
      ],
      featured: true,
      isEcommerce: true,
      ctaText: "REQUEST A QUOTE",
      icon: ShoppingBag,
    },
  ];

  const activePlans = billingCycle === "project" ? projectPlans : maintenancePlans;

  return (
    <section
      ref={containerRef}
      id="pricing"
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
        PRICING
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header Centered with Black and Grey Theme */}
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#eb5424]">
              * TRANSPARENT INVESTMENT
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
              {billingCycle === "project" ? (
                <>
                  <div>PROJECT DEVELOPMENT</div>
                  <div className="text-gray-400">PRICING &amp; PACKAGES.</div>
                </>
              ) : (
                <>
                  <div>MONTHLY WEBSITE</div>
                  <div className="text-gray-400">MAINTENANCE PRICING.</div>
                </>
              )}
            </h2>
          </FadeContent>

          <FadeContent effect="fade" duration={1.0} delay={0.15} threshold={0.15}>
            <p className="text-xs sm:text-sm font-sans font-medium uppercase tracking-wider text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed text-center">
              {billingCycle === "project"
                ? "HIGH-IMPACT WEB DEVELOPMENT PACKAGES FROM HIGH-CONVERTING LANDING PAGES TO FULL-SCALE E-COMMERCE PLATFORMS."
                : "KEEP YOUR WEBSITE UPDATED, SECURE, OPTIMIZED AND RUNNING SMOOTHLY WITH ONGOING MAINTENANCE AND TECHNICAL SUPPORT."}
            </p>
          </FadeContent>

          {/* Interactive Pricing Toggle Switcher */}
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-gray-100 border border-gray-200 mt-8 shadow-inner">
            <button
              onClick={() => setBillingCycle("project")}
              className={`px-6 py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                billingCycle === "project"
                  ? "bg-black text-white shadow-md"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              Project Pricing
            </button>
            <button
              onClick={() => setBillingCycle("maintenance")}
              className={`px-6 py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                billingCycle === "maintenance"
                  ? "bg-black text-white shadow-md"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              Monthly Maintenance
            </button>
          </div>
        </div>

        {/* 3 Balanced Pricing Cards with Smooth Transitions & Subtle Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <AnimatePresence mode="wait">
            {activePlans.map((plan, index) => {
              const IconComponent = plan.icon;

              return (
                <motion.div
                  key={`${billingCycle}-${plan.name}`}
                  initial={{ opacity: 0, y: 35, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.15 }}
                  exit={{ opacity: 0, y: -20, scale: 0.96 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`h-full flex flex-col ${
                    plan.isEcommerce
                      ? "order-2 lg:order-2 z-10"
                      : plan.packageNumber.includes("01")
                      ? "order-1 lg:order-1"
                      : "order-3 lg:order-3"
                  }`}
                >
                  <TiltCard tiltIntensity={4} className="h-full flex flex-col flex-1">
                    <div
                      className={`rounded-3xl p-7 sm:p-9 flex flex-col justify-between h-full transition-all duration-300 shadow-md ${
                        plan.featured
                          ? "bg-[#0d0d0d] text-white border-2 border-[#eb5424] shadow-2xl relative"
                          : "bg-[#fcfcfc] text-[#0a0a0a] border border-gray-200 hover:border-black"
                      }`}
                    >
                      {/* Centered Black E-Commerce Badge (Part 4 #9) */}
                      {plan.isEcommerce && (
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1 rounded-full bg-black text-white font-mono text-[11px] font-bold uppercase tracking-widest border border-white/25 shadow-[0_4px_16px_rgba(0,0,0,0.6)] z-20">
                          E-COMMERCE
                        </div>
                      )}

                      <div>
                        {/* Plan Header: Package ID & Icon */}
                        <div className="flex items-center justify-between mb-4">
                          <span
                            className={`font-mono text-xs font-bold uppercase tracking-wider ${
                              plan.featured ? "text-[#eb5424]" : "text-gray-500"
                            }`}
                          >
                            {plan.packageNumber} // {plan.badge}
                          </span>
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                              plan.featured
                                ? "bg-white/10 text-[#eb5424]"
                                : "bg-black/5 text-gray-700"
                            }`}
                          >
                            <IconComponent className="w-4 h-4" />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight font-sans mb-3 leading-snug">
                          {plan.name}
                        </h3>

                        {/* Description */}
                        <p
                          className={`text-xs sm:text-sm font-sans leading-relaxed mb-6 min-h-[44px] ${
                            plan.featured ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {plan.description}
                        </p>

                        {/* Price Block */}
                        <div className="mb-6 pb-6 border-b border-gray-200/40">
                          <div className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#eb5424] mb-1">
                            {plan.pricePrefix}
                          </div>
                          <div className="flex items-baseline gap-2 flex-wrap">
                            <span className="text-3xl sm:text-4xl font-black font-sans tracking-tight">
                              {plan.price}
                            </span>
                            <span
                              className={`font-mono text-xs ${
                                plan.featured ? "text-gray-400" : "text-gray-500"
                              }`}
                            >
                              {plan.period}
                            </span>
                          </div>
                          <div className="font-mono text-[11px] text-gray-400 mt-1">
                            {plan.costType}
                          </div>
                        </div>

                        {/* Features List */}
                        <div className="mb-8">
                          <span
                            className={`font-mono text-[10px] font-bold uppercase tracking-widest block mb-3.5 ${
                              plan.featured ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            PACKAGE DELIVERABLES:
                          </span>
                          <ul className="space-y-3 font-sans text-xs sm:text-sm">
                            {plan.features.map((feat) => (
                              <li key={feat} className="flex items-start gap-3">
                                <span
                                  className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                                    plan.featured
                                      ? "bg-[#eb5424] text-white"
                                      : "bg-black text-white"
                                  }`}
                                >
                                  <Check className="w-2.5 h-2.5" />
                                </span>
                                <span
                                  className={
                                    plan.featured ? "text-gray-300" : "text-gray-700"
                                  }
                                >
                                  {feat}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <MagneticButton strength={0.25} className="w-full mt-auto">
                        <Link
                          href={`/contact?plan=${encodeURIComponent(plan.name)}`}
                          className={`w-full py-4 rounded-xl font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md group ${
                            plan.featured
                              ? "bg-[#eb5424] hover:bg-[#f04c1a] text-white"
                              : "bg-black hover:bg-[#eb5424] text-white"
                          }`}
                        >
                          <span>{plan.ctaText}</span>
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                      </MagneticButton>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Professional Scope Note */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="font-mono text-xs text-gray-500 uppercase tracking-wider max-w-2xl">
            * Final project quotations depend on scope, functionality and customization requirements. Custom feature architectures available upon request.
          </p>
          <Link
            href="/contact"
            className="font-mono text-xs font-bold text-[#eb5424] hover:text-black uppercase tracking-wider flex items-center gap-1.5 transition-colors shrink-0"
          >
            <span>DISCUSS BESPOKE SCOPE</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
