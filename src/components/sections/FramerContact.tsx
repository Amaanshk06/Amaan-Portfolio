"use client";

import { useState, useRef, FormEvent } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin, Send, CheckCircle2, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { BlurReveal } from "@/components/ui/BlurReveal";
import { FadeContent } from "@/components/ui/FadeContent";
import { personalData } from "@/data/personalData";
import { MagneticButton } from "@/components/ui/MagneticButton";
import {
  LinkedInIcon,
  InstagramIcon,
  FacebookIcon,
  GithubIcon,
} from "@/components/ui/SocialIcons";

export function FramerContact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    service: "Web & Frontend Architecture",
    budget: "₹8,000 onwards (Landing Page Website)",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
  const yBg = useTransform(smoothProgress, [0, 1], [-40, 40]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email) return;

    setIsSubmitting(true);
    const endpoint = personalData.googleScriptUrl;

    if (endpoint) {
      try {
        await fetch(endpoint, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formState,
            source: "Homepage Contact Section",
          }),
        });
      } catch (err) {
        console.error("Submission error:", err);
      }
    } else {
      await new Promise((resolve) => setTimeout(resolve, 600));
    }

    setIsSubmitting(false);
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#eb5424", "#ffffff", "#27c93f"],
    });
  };

  return (
    <section
      ref={containerRef}
      id="contact"
      className="py-24 sm:py-32 bg-[#070707] text-white relative z-20 overflow-hidden select-none"
    >
      {/* Background Precision Blueprint Grid */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #fff 1px, transparent 1px),
              linear-gradient(to bottom, #fff 1px, transparent 1px)
            `,
            backgroundSize: "clamp(120px, 20vw, 220px) clamp(120px, 20vw, 220px)",
          }}
        />
        <div className="absolute top-12 left-8 text-white/20 text-sm font-mono">+</div>
        <div className="absolute top-12 right-8 text-white/20 text-sm font-mono">+</div>
        <div className="absolute bottom-12 left-8 text-white/20 text-sm font-mono">+</div>
        <div className="absolute bottom-12 right-8 text-white/20 text-sm font-mono">+</div>
      </motion.div>

      {/* Giant Translucent Watermark with Kinetic Scroll Drift */}
      <motion.div
        style={{ x: xWatermark }}
        className="absolute top-4 sm:-top-10 left-0 pointer-events-none select-none opacity-[0.03] text-[18vw] font-black uppercase tracking-tighter leading-none font-sans z-0 text-white whitespace-nowrap"
      >
        CONTACT
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left Column: Heading & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between h-full text-center lg:text-left items-center lg:items-start"
          >
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="inline-flex items-center gap-2 mb-4 justify-center lg:justify-start">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#eb5424]">
                  * INITIATE A PROJECT
                </span>
              </div>

              <FadeContent
                effect="focus"
                duration={1.2}
                ease="power2.out"
                blur={10}
                stagger={0.12}
                threshold={0.15}
                trigger="scroll"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black uppercase tracking-tight text-white font-sans leading-[1.08] mb-6 text-center lg:text-left">
                  <div>LET&apos;S BUILD SOMETHING</div>
                  <div className="text-gray-400">TIMELESS.</div>
                </h2>
              </FadeContent>

              <FadeContent effect="fade" duration={1.0} delay={0.2} threshold={0.15}>
                <p className="text-sm sm:text-base text-gray-400 font-sans leading-relaxed mb-8 text-center lg:text-left">
                  Have a new web application, high-converting storefront, or complex animation challenge in mind? Drop a note below and let&apos;s engineer something unforgettable.
                </p>
              </FadeContent>
            </div>

            {/* Direct Contact Cards - Bottom aligned flush with inquiry form */}
            <FadeContent
              effect="fade"
              duration={0.9}
              stagger={0.1}
              delay={0.3}
              threshold={0.15}
              className="space-y-4 pt-6 border-t border-white/10 font-mono text-xs mt-auto w-full text-left"
            >
              <a
                href={`mailto:${personalData.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#eb5424] hover:bg-white/[0.06] transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#eb5424]/10 border border-[#eb5424]/20 flex items-center justify-center text-[#eb5424] group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase">DIRECT EMAIL</span>
                  <span className="text-white font-bold group-hover:text-[#eb5424] transition-colors">
                    {personalData.email}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase">HEADQUARTERS</span>
                  <span className="text-white font-bold">Thane, Maharashtra, India</span>
                </div>
              </div>

              {/* Socials Box */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block mb-3">
                  FIND ME ONLINE
                </span>
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  <a
                    href={personalData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-[#eb5424] hover:text-white transition-all text-white border border-white/10 group"
                  >
                    <LinkedInIcon className="w-3.5 h-3.5 text-white/90 group-hover:text-white transition-colors" />
                    <span>LINKEDIN</span>
                    <span className="text-gray-400 group-hover:text-white text-[10px]">↗</span>
                  </a>
                  <a
                    href={personalData.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-[#eb5424] hover:text-white transition-all text-white border border-white/10 group"
                  >
                    <InstagramIcon className="w-3.5 h-3.5 text-white/90 group-hover:text-white transition-colors" />
                    <span>INSTAGRAM</span>
                    <span className="text-gray-400 group-hover:text-white text-[10px]">↗</span>
                  </a>
                  <a
                    href={personalData.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-[#eb5424] hover:text-white transition-all text-white border border-white/10 group"
                  >
                    <FacebookIcon className="w-3.5 h-3.5 text-white/90 group-hover:text-white transition-colors" />
                    <span>FACEBOOK</span>
                    <span className="text-gray-400 group-hover:text-white text-[10px]">↗</span>
                  </a>
                  <a
                    href={personalData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-[#eb5424] hover:text-white transition-all text-white border border-white/10 group"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-white/90 group-hover:text-white transition-colors" />
                    <span>GITHUB</span>
                    <span className="text-gray-400 group-hover:text-white text-[10px]">↗</span>
                  </a>
                </div>
              </div>
            </FadeContent>
          </motion.div>

          {/* Right Column: Interactive Contact Form with Slide-In */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-white/[0.03] border border-white/15 backdrop-blur-2xl shadow-2xl relative overflow-hidden flex flex-col justify-between h-full"
          >
            {/* Top Registration Mark - Centered Confidential Project Brief, response time removed */}
            <div className="flex items-center justify-center pb-6 mb-8 border-b border-white/10 text-xs font-mono text-center">
              <span className="text-[#eb5424] flex items-center justify-center gap-2">
                <Sparkles className="w-3.5 h-3.5" /> CONFIDENTIAL PROJECT BRIEF
              </span>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black font-sans uppercase text-white">
                  Message Transmitted Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 font-sans max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formState.name}</strong>. I will review your project requirements and respond within 12 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({
                      name: "",
                      email: "",
                      service: "Web & Frontend Architecture",
                      budget: "₹35,000 - ₹75,000",
                      message: "",
                    });
                  }}
                  className="mt-6 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white text-white hover:text-black font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div>
                    <label className="block font-mono text-[11px] text-gray-400 uppercase tracking-widest mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 text-white placeholder-white/30 text-xs font-sans focus:outline-none focus:border-[#eb5424] focus:ring-1 focus:ring-[#eb5424] transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block font-mono text-[11px] text-gray-400 uppercase tracking-widest mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 text-white placeholder-white/30 text-xs font-sans focus:outline-none focus:border-[#eb5424] focus:ring-1 focus:ring-[#eb5424] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Service Dropdown */}
                  <div>
                    <label className="block font-mono text-[11px] text-gray-400 uppercase tracking-widest mb-2">
                      Service Category
                    </label>
                    <select
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 text-white text-xs font-sans focus:outline-none focus:border-[#eb5424] focus:ring-1 focus:ring-[#eb5424] transition-all cursor-pointer"
                    >
                      <option className="bg-[#111]">Web &amp; Frontend Architecture</option>
                      <option className="bg-[#111]">Performance &amp; 3D WebGL</option>
                      <option className="bg-[#111]">Custom Ecommerce</option>
                      <option className="bg-[#111]">Monthly Retainer Partnership</option>
                    </select>
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <label className="block font-mono text-[11px] text-gray-400 uppercase tracking-widest mb-2">
                      Project Budget
                    </label>
                    <select
                      value={formState.budget}
                      onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 text-white text-xs font-sans focus:outline-none focus:border-[#eb5424] focus:ring-1 focus:ring-[#eb5424] transition-all cursor-pointer"
                    >
                      <option className="bg-[#111]">₹8,000 onwards (Landing Page Website)</option>
                      <option className="bg-[#111]">₹15,000 onwards (Multi-Page Business Website)</option>
                      <option className="bg-[#111]">₹25,000 – ₹30,000 (E-Commerce Website)</option>
                      <option className="bg-[#111]">₹5,000 – ₹8,000 / Month (Monthly Maintenance)</option>
                      <option className="bg-[#111]">Custom Architecture / Enterprise Scope</option>
                    </select>
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block font-mono text-[11px] text-gray-400 uppercase tracking-widest mb-2">
                    Project Overview &amp; Goals *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your product, timeline, and goals..."
                    className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 text-white placeholder-white/30 text-xs font-sans focus:outline-none focus:border-[#eb5424] focus:ring-1 focus:ring-[#eb5424] transition-all resize-none"
                  />
                </div>

                {/* Submit Button Centered */}
                <div className="flex justify-center pt-2">
                  <MagneticButton strength={0.2}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-10 sm:px-14 py-4 rounded-xl bg-[#eb5424] hover:bg-[#f04c1a] text-white font-mono text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-xl hover:shadow-[0_0_25px_rgba(235,84,36,0.4)] disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>SUBMITTING...</span>
                      ) : (
                        <>
                          <span>SUBMIT</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </MagneticButton>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
