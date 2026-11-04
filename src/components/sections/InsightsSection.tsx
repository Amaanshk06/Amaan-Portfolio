"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import { BlurReveal } from "@/components/ui/BlurReveal";
import { articlesData } from "@/data/articlesData";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function InsightsSection() {
  const [visibleCount, setVisibleCount] = useState(3);
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

  const displayedArticles = articlesData.slice(0, visibleCount);

  return (
    <section
      ref={containerRef}
      id="insights"
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
        INSIGHTS
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#eb5424]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#eb5424]">
                * TECHNICAL WRITING &amp; THINKING
              </span>
            </div>

            <BlurReveal duration={0.8} yOffset={24}>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[#0a0a0a] font-sans leading-tight">
                INSIGHTS &amp; ESSAYS.
              </h2>
            </BlurReveal>
          </div>

          <MagneticButton strength={0.25}>
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gray-100 hover:bg-black hover:text-white text-gray-900 font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 group shadow-sm border border-gray-200"
            >
              <span>BROWSE ALL ARTICLES</span>
              <ArrowUpRight className="w-4 h-4 text-[#eb5424] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </MagneticButton>
        </div>

        {/* Asymmetric Editorial Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12">
          {displayedArticles.map((article, index) => {
            const isFeatured = index === 0;
            const colSpan = isFeatured ? "md:col-span-12 lg:col-span-8" : "md:col-span-6 lg:col-span-4";

            return (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`${colSpan} group flex flex-col justify-between`}
              >
                <Link
                  href={`/articles/${article.slug}`}
                  className="block relative w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 border border-gray-200 group-hover:border-[#eb5424] transition-all duration-500 shadow-sm group-hover:shadow-xl mb-6"
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />

                  {/* Category Pill on Image */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white font-mono text-[10px] font-bold uppercase tracking-widest">
                    {article.category}
                  </div>
                </Link>

                {/* Article Metadata & Heading */}
                <div>
                  <div className="flex items-center gap-4 text-xs font-mono text-gray-400 mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#eb5424]" />
                      {article.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#eb5424]" />
                      {article.readTime}
                    </span>
                  </div>

                  <Link href={`/articles/${article.slug}`}>
                    <h3 className="text-xl sm:text-2xl font-black uppercase font-sans tracking-tight text-gray-950 group-hover:text-[#eb5424] transition-colors leading-tight mb-3">
                      {article.title}
                    </h3>
                  </Link>

                  <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed line-clamp-2 mb-4">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href={`/articles/${article.slug}`}
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#eb5424] group-hover:text-black transition-colors"
                  >
                    <span>READ ARTICLE</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  <span className="font-mono text-xs text-gray-400">
                    BY {article.author.name}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
