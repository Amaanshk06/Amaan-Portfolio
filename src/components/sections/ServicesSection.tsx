"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { BlurReveal } from "@/components/ui/BlurReveal";
import { FadeContent } from "@/components/ui/FadeContent";
import { servicesData } from "@/data/servicesData";
import { MagneticButton } from "@/components/ui/MagneticButton";

// Register ScrollTrigger plugin with GSAP
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeStep, setActiveStep] = useState(0);

  useGSAP(
    () => {
      // Synchronize GSAP ScrollTrigger with Lenis virtual scroll
      if (typeof window !== "undefined") {
        (window as unknown as { ScrollTrigger: typeof ScrollTrigger }).ScrollTrigger = ScrollTrigger;
        const winWithLenis = window as unknown as { __lenis?: { on: (event: string, cb: () => void) => void } };
        if (winWithLenis.__lenis) {
          winWithLenis.__lenis.on("scroll", ScrollTrigger.update);
        }
      }

      const cards = cardRefs.current.filter(Boolean) as HTMLElement[];
      if (!cards || cards.length < 2 || !sectionRef.current || !pinContainerRef.current) return;

      // 1. Initial State:
      // Card 0 is in place in the center of the stack
      gsap.set(cards[0], { yPercent: 0, scale: 1, y: 0, opacity: 1, zIndex: 1 });

      // Cards 1, 2... are positioned below the presentation area until scrolled
      for (let i = 1; i < cards.length; i++) {
        gsap.set(cards[i], {
          yPercent: 115,
          scale: 1,
          y: 0,
          opacity: 1,
          zIndex: i + 1,
        });
      }

      // 2. Master ScrollTrigger Timeline:
      // Pinned presentation container with accurate pinSpacing, no hardcoded section height!
      const tl = gsap.timeline({
        scrollTrigger: {
          id: "servicesPinnedStack",
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${window.innerHeight * 2.2}`,
          pin: pinContainerRef.current,
          pinSpacing: true,
          scrub: 1.2,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const progress = self.progress;
            if (progress < 0.45) {
              setActiveStep(0);
            } else if (progress < 0.85) {
              setActiveStep(1);
            } else {
              setActiveStep(2);
            }
          },
        },
      });

      // --- TRANSITION 1: Card 2 enters and stacks on Card 1 ---
      // Card 0 moves back slightly in the stack
      tl.to(
        cards[0],
        {
          scale: 0.94,
          y: -14,
          opacity: 0.65,
          duration: 1,
          ease: "power2.inOut",
        },
        0
      );

      // Card 1 rises smoothly from below to take the exact position of Card 0
      tl.to(
        cards[1],
        {
          yPercent: 0,
          duration: 1,
          ease: "power2.inOut",
        },
        0
      );

      // Brief reading hold on Card 1
      tl.to({}, { duration: 0.25 });

      // --- TRANSITION 2: Card 3 enters and stacks on Card 2 ---
      // Card 0 recedes further backward
      tl.to(
        cards[0],
        {
          scale: 0.88,
          y: -28,
          opacity: 0.35,
          duration: 1,
          ease: "power2.inOut",
        },
        ">"
      );

      // Card 1 moves backward into the stack
      tl.to(
        cards[1],
        {
          scale: 0.94,
          y: -14,
          opacity: 0.65,
          duration: 1,
          ease: "power2.inOut",
        },
        "<"
      );

      // Card 2 rises smoothly from below to occupy the exact presentation position
      tl.to(
        cards[2],
        {
          yPercent: 0,
          duration: 1,
          ease: "power2.inOut",
        },
        "<"
      );

      // Brief final hold on Card 2 before pin releases
      tl.to({}, { duration: 0.25 });
    },
    { scope: sectionRef }
  );

  // Jump to specific card when clicking indicator pill
  const scrollToStep = (stepIndex: number) => {
    const trigger = ScrollTrigger.getById("servicesPinnedStack");
    if (!trigger) return;

    const start = trigger.start;
    const end = trigger.end;
    const targets = [0.05, 0.52, 0.92];
    const targetScroll = start + (end - start) * targets[stepIndex];

    const winWithLenis = window as unknown as { __lenis?: { scrollTo: (y: number) => void } };
    if (winWithLenis.__lenis) {
      winWithLenis.__lenis.scrollTo(targetScroll);
    } else {
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative bg-white text-[#0a0a0a] border-t border-b border-gray-100 select-none overflow-hidden"
    >
      {/* Pinned Presentation Container - Vertically Centered with Even Spacing */}
      <div
        ref={pinContainerRef}
        className="w-full h-[100dvh] max-h-[100dvh] flex flex-col justify-between py-2 sm:py-4 lg:py-5 px-3 sm:px-6 lg:px-12 relative overflow-hidden z-20"
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
          <div className="absolute top-6 left-6 text-black/20 text-sm font-mono">+</div>
          <div className="absolute top-6 right-6 text-black/20 text-sm font-mono">+</div>
          <div className="absolute bottom-6 left-6 text-black/20 text-sm font-mono">+</div>
          <div className="absolute bottom-6 right-6 text-black/20 text-sm font-mono">+</div>
        </div>

        {/* Oversized Background Watermark */}
        <div className="absolute top-4 sm:-top-6 left-0 pointer-events-none select-none opacity-[0.03] text-[16vw] font-black uppercase tracking-tighter leading-none font-sans z-0 whitespace-nowrap">
          SERVICES
        </div>

        {/* Section Header Bar - Centered with Black and Grey Theme */}
        <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col items-center text-center gap-1 sm:gap-1.5 mb-1 sm:mb-2 shrink-0">
          <div className="inline-flex items-center gap-2 mb-0.5">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#eb5424]">
              * SPECIALIZED CAPABILITIES
            </span>
          </div>
          <FadeContent effect="focus" duration={1.1} blur={10} threshold={0.15}>
            <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-[46px] font-black uppercase tracking-tight text-[#0a0a0a] font-sans leading-[1.08] text-center">
              HIGH-CALIBER <span className="text-gray-400">WEB SOLUTIONS.</span>
            </h2>
          </FadeContent>

          {/* Interactive Stacked Step Pills & Deliverables Link Centered */}
          <div className="flex items-center gap-2 mt-0.5 sm:mt-1">
            <div className="hidden sm:flex items-center gap-1 p-1 rounded-full bg-gray-100 border border-gray-200">
              {servicesData.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => scrollToStep(i)}
                  className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold transition-all duration-300 flex items-center gap-1 cursor-pointer ${
                    activeStep === i
                      ? "bg-black text-white shadow-sm"
                      : "text-gray-500 hover:text-black"
                  }`}
                  aria-label={`Jump to ${s.title}`}
                >
                  <span className={activeStep === i ? "text-[#eb5424]" : "text-gray-400"}>
                    0{i + 1}
                  </span>
                  <span className="hidden md:inline">
                    {s.title.split(" ")[0]}
                  </span>
                </button>
              ))}
            </div>

            <MagneticButton strength={0.25}>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-gray-100 hover:bg-black hover:text-white text-gray-900 font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 group shadow-sm border border-gray-200"
              >
                <span>DELIVERABLES</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#eb5424] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </MagneticButton>
          </div>
        </div>

        {/* PINNED CARD PRESENTATION AREA - Responsive & snug with rich informational data */}
        <div className="relative z-10 max-w-5xl w-full mx-auto flex-1 flex items-center justify-center my-auto min-h-[360px] sm:min-h-[420px] lg:min-h-[460px] max-h-[430px] sm:max-h-[490px] lg:max-h-[520px]">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="absolute inset-0 w-full h-full rounded-2xl sm:rounded-3xl bg-[#fcfcfc] border border-gray-200/90 shadow-[0_-8px_30px_rgba(0,0,0,0.06),0_20px_50px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col-reverse lg:grid lg:grid-cols-12 will-change-transform"
              style={{ zIndex: index + 1 }}
            >
              {/* Left Column: Specs, Description, Deliverables, Tags, Action */}
              <div className="p-3.5 sm:p-6 lg:p-7 lg:col-span-7 flex flex-col justify-between flex-1 min-h-0 overflow-hidden">
                <FadeContent
                  key={`${service.id}-${activeStep === index}`}
                  effect="focus"
                  duration={0.9}
                  blur={8}
                  stagger={0.08}
                  trigger="mount"
                >
                  {/* Service Number & Subtitle */}
                  <div className="flex items-center justify-between gap-2 mb-1 sm:mb-2">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className="font-mono text-[10px] sm:text-xs font-black text-[#eb5424] px-1.5 sm:px-2 py-0.5 rounded bg-[#eb5424]/10">
                        {service.num}
                      </span>
                      <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-500 truncate max-w-[200px] sm:max-w-none">
                        {service.subtitle}
                      </span>
                    </div>
                    <span className="hidden sm:inline-block font-mono text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                      DELIVERY: 1-3 WEEKS
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-base sm:text-xl lg:text-2xl font-black uppercase tracking-tight text-[#0a0a0a] font-sans mb-1 sm:mb-2 leading-tight">
                    {service.title}
                  </h3>

                  {/* Rich Description */}
                  <p className="text-[11px] sm:text-[13px] text-gray-600 font-sans leading-relaxed line-clamp-2 sm:line-clamp-none mb-2 sm:mb-3">
                    {service.description}
                  </p>

                  {/* Key Deliverables & Specifications Grid */}
                  <div className="my-1 sm:my-2 py-1.5 sm:py-2.5 border-t border-b border-gray-100">
                    <div className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400 mb-1 sm:mb-2">
                      KEY DELIVERABLES &amp; ARCHITECTURE
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
                      {service.deliverables.slice(0, 4).map((deliverable, dIdx) => (
                        <div key={dIdx} className={`flex items-start gap-1.5 text-xs text-gray-700 ${dIdx >= 2 ? "hidden sm:flex" : "flex"}`}>
                          <CheckCircle2 className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#eb5424] shrink-0 mt-0.5" />
                          <span className="font-sans text-[11px] sm:text-xs leading-snug">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technical Tags */}
                  <div className="hidden xs:flex flex-wrap gap-1 sm:gap-1.5 mb-1 sm:mb-2 pt-0.5 sm:pt-1">
                    {service.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-1.5 sm:px-2 py-0.5 rounded-md bg-white border border-gray-200 text-[9px] sm:text-[11px] font-mono font-medium text-gray-800 shadow-2xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </FadeContent>

                {/* Bottom Row Action */}
                <div className="pt-1.5 sm:pt-3 border-t border-gray-200/80 flex items-center justify-between mt-auto shrink-0">
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center gap-1.5 sm:gap-2 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#eb5424] hover:text-black transition-colors group"
                  >
                    <span>LEARN PROCESS &amp; SPECS</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>

                  <span className="font-mono text-[10px] sm:text-[11px] text-gray-400 uppercase">
                    CAPABILITY {index + 1} OF 3
                  </span>
                </div>
              </div>

              {/* Right Column: Visual Showcase Image (Prominent & Balanced on Mobile) */}
              <div className="lg:col-span-5 relative h-36 xs:h-40 sm:h-48 lg:h-full shrink-0 bg-gray-100 overflow-hidden group">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                {/* Corner Index Overlay */}
                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-white font-mono text-[10px] sm:text-xs font-bold">
                  {service.num} // SHOWCASE
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Progress Bar */}
        <div className="relative z-10 max-w-5xl w-full mx-auto flex items-center justify-between text-gray-400 font-mono text-[10px] sm:text-[11px] pt-1 shrink-0">
          <span>SCROLL TO UNPACK CAPABILITIES</span>
          <span>
            STACK PROGRESS: {Math.round(activeStep === 0 ? 33 : activeStep === 1 ? 66 : 100)}%
          </span>
        </div>
      </div>
    </section>
  );
}
