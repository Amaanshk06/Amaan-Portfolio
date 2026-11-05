"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { FadeContent } from "@/components/ui/FadeContent";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function ReviewsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

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

  const reviews = [
    {
      id: 1,
      tag: "E-COMMERCE & NEXT.JS",
      quote:
        "Amaan engineered our online gifting platform from scratch. The checkout speed, fluid animations, and mobile product customizer tripled our festive conversion rates across Mumbai.",
      clientName: "Shreemay Purohit",
      clientRole: "Founder & Director",
      company: "Fruitilicious Gifting (Mumbai)",
      initials: "SP",
      avatarBg: "bg-[#eb5424]",
    },
    {
      id: 2,
      tag: "HEALTHCARE PLATFORM",
      quote:
        "Our patients love the clean, modern appointment portal. The mobile performance is blazing fast, and the visual hierarchy reflects our clinical precision with absolute perfection.",
      clientName: "Dr. Sayali Mahajan",
      clientRole: "Lead Dermatologist & Founder",
      company: "Sayskin Aesthetic Clinic (Seawoods)",
      initials: "SM",
      avatarBg: "bg-[#e11d48]",
    },
    {
      id: 3,
      tag: "ENTERPRISE PORTAL",
      quote:
        "Working with Amaan was completely seamless. He restructured our multi-department hospital portal, making critical doctor rosters and emergency workflows accessible 24/7 without lag.",
      clientName: "Arun Ramraj Yadav",
      clientRole: "Managing Director",
      company: "Frisson Multispeciality Hospital",
      initials: "AY",
      avatarBg: "bg-[#2563eb]",
    },
    {
      id: 4,
      tag: "LUXURY HOSPITALITY",
      quote:
        "Our luxury villa rental marketplace required complex filtering and silky-smooth animations. Amaan executed our vision flawlessly with high performance and great communication throughout.",
      clientName: "Sanjay Patel",
      clientRole: "Founder & Operations Lead",
      company: "Travel Villas of Goa",
      initials: "SP",
      avatarBg: "bg-[#0d9488]",
    },
    {
      id: 5,
      tag: "SHOPIFY STOREFRONT",
      quote:
        "The custom Shopify bundle builder and fragrance theme enhancements Amaan built drove an immediate 34% increase in our average order value. Clean code and super fast delivery.",
      clientName: "Alisha Merchant",
      clientRole: "Brand Director",
      company: "Auras Fragrances",
      initials: "AM",
      avatarBg: "bg-[#7c3aed]",
    },
  ];

  return (
    <section
      ref={containerRef}
      id="reviews"
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

      {/* Giant Translucent Watermark with Kinetic Scroll Drift */}
      <motion.div
        style={{ x: xWatermark }}
        className="absolute top-4 sm:-top-10 left-0 pointer-events-none select-none opacity-[0.03] text-[18vw] font-black uppercase tracking-tighter leading-none font-sans z-0 whitespace-nowrap"
      >
        REVIEWS
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">
        {/* Editorial Section Header: Heading on Left, Supporting paragraph & controls on Right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 sm:mb-16 items-center text-center md:items-start md:text-left">
          <div className="max-w-xl flex flex-col items-center md:items-start text-center md:text-left">
            <div className="inline-flex items-center gap-2 mb-3 justify-center md:justify-start">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#eb5424]">
                * CLIENT FEEDBACK
              </span>
            </div>

            <FadeContent effect="focus" duration={1.2} blur={10} threshold={0.15}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black uppercase tracking-tight text-[#0a0a0a] font-sans leading-[1.08] text-center md:text-left">
                <div>WHAT MY CLIENTS</div>
                <div className="text-gray-400">SAY ABOUT WORK.</div>
              </h2>
            </FadeContent>
          </div>

          <div className="max-w-md flex flex-col items-center md:items-end justify-between gap-5 text-center md:text-right">
            <FadeContent effect="fade" duration={1.0} delay={0.15} threshold={0.15}>
              <p className="text-xs sm:text-sm font-sans font-medium uppercase tracking-wider text-gray-500 leading-relaxed text-center md:text-right">
                CREATING THOUGHTFUL AND HIGH-PERFORMANCE WEB SYSTEMS THAT HELP BRANDS GROW, ACCELERATE SPEED, AND DRIVE CONVERSIONS.
              </p>
            </FadeContent>

            {/* Custom Navigation Arrows - Desktop Only (on mobile placed below pagination dots) */}
            <div className="hidden md:flex items-center gap-3 pt-1 md:justify-start">
              <button
                onClick={() => swiperInstance?.slidePrev()}
                className="custom-prev w-11 h-11 rounded-full border border-gray-200 hover:border-black flex items-center justify-center text-gray-700 hover:text-black hover:bg-gray-50 transition-all cursor-pointer focus-visible:outline-none shadow-sm active:scale-95"
                aria-label="Previous Reviews"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => swiperInstance?.slideNext()}
                className="custom-next w-11 h-11 rounded-full border border-gray-200 hover:border-black flex items-center justify-center text-gray-700 hover:text-black hover:bg-gray-50 transition-all cursor-pointer focus-visible:outline-none shadow-sm active:scale-95"
                aria-label="Next Reviews"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Swiper.js Infinite Horizontal Testimonial Carousel */}
        {/* Carousel Container - Exactly 3 Cards in View, 1 Card Sweep Per Transition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative testimonial-swiper-wrapper overflow-hidden rounded-3xl"
        >
          <Swiper
            onSwiper={setSwiperInstance}
            modules={[Autoplay, Navigation, Pagination]}
            loop={true}
            grabCursor={true}
            speed={650}
            autoplay={{
              delay: 3800,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={24}
            slidesPerView={1}
            slidesPerGroup={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                slidesPerGroup: 1,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                slidesPerGroup: 1,
                spaceBetween: 28,
              },
            }}
            pagination={{
              clickable: true,
              el: ".testimonial-pagination",
              bulletClass: "inline-block w-2.5 h-2.5 rounded-full bg-gray-200 transition-all duration-300 mx-1 cursor-pointer",
              bulletActiveClass: "!w-8 !bg-[#eb5424] !rounded-full shadow-sm",
            }}
            className="pb-10 overflow-hidden"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id} className="h-auto">
                <div className="h-full min-h-[340px] rounded-3xl p-7 sm:p-8 bg-[#fcfcfc] border border-gray-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-[#eb5424] transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    {/* Top Row: Stars + Category Pill */}
                    <div className="flex items-center justify-between gap-2 mb-6">
                      <div className="flex items-center gap-1 text-[#eb5424]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#eb5424] text-[#eb5424]" />
                        ))}
                      </div>

                      <span className="px-3 py-1 rounded-full bg-gray-100 border border-gray-200/60 text-[10px] font-mono font-bold uppercase tracking-wider text-gray-600">
                        {review.tag}
                      </span>
                    </div>

                    {/* Quote Text */}
                    <p className="text-xs sm:text-sm text-gray-700 font-sans leading-relaxed mb-6 font-normal">
                      &ldquo;{review.quote}&rdquo;
                    </p>
                  </div>

                  {/* Author Row with Decorative Plus Indicator */}
                  <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-11 h-11 rounded-full ${review.avatarBg} text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 shadow-sm`}
                      >
                        {review.initials}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold font-sans text-gray-950 leading-tight">
                          {review.clientName}
                        </h3>
                        <p className="text-xs text-gray-400 font-sans mt-0.5">
                          {review.clientRole}
                        </p>
                        <p className="text-[11px] text-[#eb5424] font-medium font-sans">
                          {review.company}
                        </p>
                      </div>
                    </div>

                    <span className="text-gray-300 font-mono text-sm group-hover:text-[#eb5424] transition-colors">
                      +
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Centered Pagination Indicators */}
          <div className="testimonial-pagination flex items-center justify-center mt-8 gap-1" />

          {/* Mobile Navigation Arrows - Placed bottom of the orange dots */}
          <div className="flex md:hidden items-center justify-center gap-4 mt-6">
            <button
              onClick={() => swiperInstance?.slidePrev()}
              className="custom-prev w-11 h-11 rounded-full border border-gray-200 hover:border-black flex items-center justify-center text-gray-700 hover:text-black hover:bg-gray-50 transition-all cursor-pointer focus-visible:outline-none shadow-sm active:scale-95 bg-white"
              aria-label="Previous Reviews"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => swiperInstance?.slideNext()}
              className="custom-next w-11 h-11 rounded-full border border-gray-200 hover:border-black flex items-center justify-center text-gray-700 hover:text-black hover:bg-gray-50 transition-all cursor-pointer focus-visible:outline-none shadow-sm active:scale-95 bg-white"
              aria-label="Next Reviews"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
