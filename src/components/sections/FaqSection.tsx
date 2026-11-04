"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { Plus } from "lucide-react";
import { FadeContent } from "@/components/ui/FadeContent";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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

  const faqs = [
    {
      num: "1.",
      question: "WHAT SERVICES DO YOU OFFER?",
      answer:
        "I specialize in high-performance full-stack web applications using Next.js 15, React 19, TypeScript, bespoke Shopify Liquid 2.0 themes, custom WordPress architectures, and interactive 3D WebGL experiences with Three.js and Framer Motion.",
    },
    {
      num: "2.",
      question: "WHAT IS YOUR TYPICAL DESIGN PROCESS FROM START TO FINISH?",
      answer:
        "My workflow spans technical discovery and wireframing, interactive UI prototyping in Figma, high-speed component architecture in Next.js, cross-browser responsive audits, and rigorous Core Web Vitals optimization to guarantee 98+ Lighthouse performance scores.",
    },
    {
      num: "3.",
      question: "WILL I BE INVOLVED IN THE DESIGN PROCESS ALONG THE WAY?",
      answer:
        "Yes, absolutely. I work closely with founders and creative leads through milestone previews, shared Figma workspaces, staging URL deployments, and weekly progress updates to ensure your strategic vision is realized accurately.",
    },
    {
      num: "4.",
      question: "WHAT FILES & DELIVERABLES WILL I RECEIVE WHEN COMPLETE?",
      answer:
        "You receive complete production-ready source code with full repository ownership, typed component systems, deployment pipeline automation (Vercel/Cloudflare), SEO metadata configurations, and comprehensive CMS video walkthroughs for your team.",
    },
    {
      num: "5.",
      question: "DO YOU OFFER REVISIONS AFTER THE DESIGNS ARE DELIVERED?",
      answer:
        "Yes! Every project includes a post-launch warranty period covering bug fixes, responsive adjustments, and client handover support to guarantee flawless stability in live production environments.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={containerRef}
      id="faq"
      className="py-24 sm:py-32 bg-white text-[#0a0a0a] relative z-20 overflow-hidden select-none border-b border-gray-100"
    >
      {/* Precision Blueprint Grid */}
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

      {/* Giant Translucent Watermark matching Reference */}
      <motion.div
        style={{ x: xWatermark }}
        className="absolute top-4 sm:-top-10 left-0 pointer-events-none select-none opacity-[0.035] text-[18vw] font-black uppercase tracking-tighter leading-none font-sans z-0 whitespace-nowrap"
      >
        QUESTIONS
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center gap-2 mb-3 justify-center lg:justify-start">
              <span className="w-2 h-2 rounded-full bg-[#eb5424]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#eb5424]">
                FAQ
              </span>
            </div>

            <FadeContent effect="focus" duration={1.2} blur={10} threshold={0.15}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black uppercase tracking-tight text-[#0a0a0a] font-sans leading-[1.08] mb-6 text-center lg:text-left">
                FREQUENT
                <br />
                <span className="text-gray-400">QUESTIONS.</span>
              </h2>
            </FadeContent>

            <FadeContent effect="fade" duration={1.0} delay={0.15} threshold={0.15}>
              <p className="text-xs sm:text-sm font-sans font-medium uppercase tracking-wider text-gray-500 max-w-md leading-relaxed text-center lg:text-left">
                COMMON QUESTIONS REGARDING PROJECT TIMELINES, TECHNOLOGY STACK, DELIVERABLES, AND CLIENT COLLABORATION.
              </p>
            </FadeContent>
          </div>

          {/* Right Column: Classic Numbered Accordion List */}
          <FadeContent
            effect="focus"
            duration={0.85}
            ease="power2.out"
            stagger={0.08}
            threshold={0.15}
            trigger="scroll"
            once={true}
            className="lg:col-span-7 divide-y divide-gray-200 border-t border-b border-gray-200 my-auto"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={faq.question} className="py-6 sm:py-8 transition-colors">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between gap-6 text-left cursor-pointer group focus-visible:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold font-sans text-[#0a0a0a] group-hover:text-[#eb5424] transition-colors uppercase tracking-tight leading-snug">
                        {faq.num} {faq.question}
                      </h3>
                    </div>

                    {/* Circular Plus Icon with 45deg rotation */}
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-300 group-hover:border-black flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-black text-white border-black rotate-45"
                          : "bg-white text-gray-600"
                      }`}
                    >
                      <Plus className="w-4 h-4 transition-transform" />
                    </div>
                  </button>

                  {/* Expanding Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed pt-4 pl-4 sm:pl-6 border-l-2 border-[#eb5424] mt-4">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </FadeContent>
        </div>
      </div>
    </section>
  );
}
