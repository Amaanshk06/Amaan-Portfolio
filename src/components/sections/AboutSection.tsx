"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, Code, Laptop, Sparkles, Terminal } from "lucide-react";
import { BlurReveal } from "@/components/ui/BlurReveal";
import { MaskedText } from "@/components/ui/MaskedText";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function AboutSection() {
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

  const xWatermark = useTransform(smoothProgress, [0, 1], [-100, 100]);
  const xGallery = useTransform(smoothProgress, [0, 1], [40, -40]);
  const yParallax1 = useTransform(smoothProgress, [0, 1], [30, -30]);
  const yParallax2 = useTransform(smoothProgress, [0, 1], [-25, 25]);

  const galleryImages = [
    {
      src: "/services/service_code_workstation_clean.jpg",
      title: "Clean Architecture",
      subtitle: "TypeScript & Next.js 15",
    },
    {
      src: "/services/service_collab_clean.jpg",
      title: "Fluid Physics",
      subtitle: "Three.js WebGL & Framer Motion",
    },
    {
      src: "/services/service_pod_clean.jpg",
      title: "Design Systems",
      subtitle: "Tailwind CSS & Token Ramps",
    },
    {
      src: "/services/service_studio_interior.jpg",
      title: "Conversion Craft",
      subtitle: "Shopify Liquid & Headless CMS",
    },
  ];

  return (
    <section
      ref={containerRef}
      id="about-studio"
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
        className="absolute top-4 sm:-top-10 left-0 pointer-events-none select-none opacity-[0.03] text-[18vw] font-black uppercase tracking-tighter leading-none font-sans z-0 whitespace-nowrap"
      >
        STUDIO
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">
        {/* Top Tag */}
        <div className="mb-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#eb5424]" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#eb5424]">
              * DEVELOPER PHILOSOPHY
            </span>
          </div>
        </div>

        {/* Blur-to-Sharp Typography Brand Statement Line by Line */}
        <div className="mb-16 sm:mb-24 max-w-5xl">
          <BlurReveal duration={0.85} yOffset={28}>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#0a0a0a] font-sans leading-[1.15]">
              WE COMBINE RIGOROUS FULL-STACK ENGINEERING WITH DELIBERATE ART DIRECTION TO BUILD EXPERIENCES THAT STAND OUT.
            </h2>
          </BlurReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 pt-10 border-t border-gray-200">
            <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
              I believe modern websites should not choose between visual beauty and raw speed. By treating code architecture as a creative discipline, every transition, scroll interaction, and database query is fine-tuned to serve the end user.
            </p>
            <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
              Based in Thane, Maharashtra, I collaborate with founders, creative directors, and fast-growing brands across the globe to turn ambitious digital concepts into scalable, high-converting reality.
            </p>
          </div>
        </div>

        {/* Horizontal Image Gallery Reveal with Clip-Path & Parallax */}
        <div className="relative overflow-hidden pt-4 pb-8">
          <motion.div
            style={{ x: xGallery }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {galleryImages.map((img, i) => {
              const isEven = i % 2 === 1;

              return (
                <motion.div
                  key={img.title}
                  style={{ y: isEven ? yParallax1 : yParallax2 }}
                  initial={{
                    opacity: 0,
                    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
                    scale: 0.94,
                  }}
                  whileInView={{
                    opacity: 1,
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                    scale: 1,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group relative rounded-3xl overflow-hidden aspect-[4/5] bg-gray-100 border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-500"
                >
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Floating Metadata */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#eb5424] block mb-1">
                      {img.subtitle}
                    </span>
                    <h3 className="text-lg font-black uppercase font-sans tracking-tight">
                      {img.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
