"use client";

import { useState, FormEvent, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, Calendar, Sparkles, MessageSquare, ArrowLeft } from "lucide-react";
import confetti from "canvas-confetti";
import { PortfolioHeader } from "@/components/ui/PortfolioHeader";
import { MassiveFooter } from "@/components/ui/MassiveFooter";
import { MaskedText } from "@/components/ui/MaskedText";
import { BlurReveal } from "@/components/ui/BlurReveal";
import { FadeContent } from "@/components/ui/FadeContent";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { personalData } from "@/data/personalData";
import {
  LinkedInIcon,
  InstagramIcon,
  FacebookIcon,
  GithubIcon,
} from "@/components/ui/SocialIcons";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const initialPlan = searchParams.get("plan") || "";
  const initialService = searchParams.get("service") || "Web & Frontend Architecture";

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    service: initialService,
    budget: initialPlan ? initialPlan : "₹8,000 onwards (Landing Page Website)",
    message: initialPlan ? `Interested in booking the ${initialPlan} plan.` : "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
            source: "Contact Page",
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
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#eb5424", "#ffffff", "#27c93f"],
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      {/* Left Column: Contact Details & SLA Info */}
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="lg:col-span-5 flex flex-col space-y-6 text-center lg:text-left items-center lg:items-start"
      >
        <div>
          <h2 className="text-2xl sm:text-3xl font-black uppercase font-sans tracking-tight text-white mb-3 sm:mb-4">
            LET&apos;S TALK ARCHITECTURE.
          </h2>
          <p className="text-sm text-gray-300 font-sans leading-relaxed">
            Whether you are looking to launch an MVP from scratch, transition to Next.js 15, or redesign your digital storefront, I am available to help plan and engineer your vision.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="space-y-3 sm:space-y-3.5 font-mono text-xs w-full text-left">
          <a
            href={`mailto:${personalData.email}`}
            className="flex items-center gap-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#eb5424] hover:bg-white/[0.08] transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#eb5424]/10 border border-[#eb5424]/20 flex items-center justify-center text-[#eb5424] group-hover:scale-110 transition-transform">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <span className="text-gray-400 block text-[10px] uppercase">DIRECT EMAIL</span>
              <span className="text-white font-bold group-hover:text-[#eb5424] transition-colors text-sm">
                {personalData.email}
              </span>
            </div>
          </a>

          <div className="flex items-center gap-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="text-gray-400 block text-[10px] uppercase">LOCATION</span>
              <span className="text-white font-bold text-sm">Thane, Maharashtra, India</span>
            </div>
          </div>
        </div>

        {/* Socials Box */}
        <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/10 w-full text-left">
          <span className="font-mono text-[11px] text-gray-400 uppercase tracking-widest block mb-3">
            FIND ME ONLINE
          </span>
          <div className="flex flex-wrap gap-2.5 font-mono text-xs">
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-[#eb5424] hover:text-white transition-all text-white border border-white/10 group"
            >
              <LinkedInIcon className="w-3.5 h-3.5 text-white/90 group-hover:text-white transition-colors" />
              <span>LINKEDIN</span>
              <span className="text-gray-400 group-hover:text-white">↗</span>
            </a>
            <a
              href={personalData.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-[#eb5424] hover:text-white transition-all text-white border border-white/10 group"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-white/90 group-hover:text-white transition-colors" />
              <span>INSTAGRAM</span>
              <span className="text-gray-400 group-hover:text-white">↗</span>
            </a>
            <a
              href={personalData.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-[#eb5424] hover:text-white transition-all text-white border border-white/10 group"
            >
              <FacebookIcon className="w-3.5 h-3.5 text-white/90 group-hover:text-white transition-colors" />
              <span>FACEBOOK</span>
              <span className="text-gray-400 group-hover:text-white">↗</span>
            </a>
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-[#eb5424] hover:text-white transition-all text-white border border-white/10 group"
            >
              <GithubIcon className="w-3.5 h-3.5 text-white/90 group-hover:text-white transition-colors" />
              <span>GITHUB</span>
              <span className="text-gray-400 group-hover:text-white">↗</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Right Column: Full Interactive Contact Form */}
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="lg:col-span-7 p-4 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl bg-white/[0.03] border border-white/15 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
      >
        {/* Top Registration Mark - Centered Confidential Project Brief */}
        <div className="flex items-center justify-center pb-3 sm:pb-3.5 mb-3.5 sm:mb-5 border-b border-white/10 text-xs font-mono text-center">
          <span className="text-[#eb5424] flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" /> CONFIDENTIAL PROJECT BRIEF
          </span>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-12 sm:py-16 text-center space-y-4"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black font-sans uppercase text-white">
              Inquiry Dispatched!
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 font-sans max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{formState.name}</strong>. I will personally review your project scope and schedule a preliminary consultation within 12 hours.
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
              Submit Another Message
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
              <div>
                <label className="block font-mono text-[10px] sm:text-[11px] text-gray-400 uppercase tracking-widest mb-1 sm:mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Jordan Lee"
                  className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-lg sm:rounded-xl bg-black/60 border border-white/15 text-white placeholder-white/30 text-xs font-sans focus:outline-none focus:border-[#eb5424] focus:ring-1 focus:ring-[#eb5424] transition-all"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] sm:text-[11px] text-gray-400 uppercase tracking-widest mb-1 sm:mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="jordan@venture.com"
                  className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-lg sm:rounded-xl bg-black/60 border border-white/15 text-white placeholder-white/30 text-xs font-sans focus:outline-none focus:border-[#eb5424] focus:ring-1 focus:ring-[#eb5424] transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
              <div>
                <label className="block font-mono text-[10px] sm:text-[11px] text-gray-400 uppercase tracking-widest mb-1 sm:mb-1.5">
                  Requested Service
                </label>
                <select
                  value={formState.service}
                  onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                  className="w-full px-2.5 py-2 sm:px-3.5 sm:py-2.5 rounded-lg sm:rounded-xl bg-black/60 border border-white/15 text-white text-[11px] sm:text-xs font-sans focus:outline-none focus:border-[#eb5424] focus:ring-1 focus:ring-[#eb5424] transition-all cursor-pointer truncate"
                >
                  <option className="bg-[#111]">Web &amp; Frontend Architecture</option>
                  <option className="bg-[#111]">Performance &amp; 3D WebGL</option>
                  <option className="bg-[#111]">Custom Ecommerce</option>
                  <option className="bg-[#111]">Monthly Retainer Partnership</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-[10px] sm:text-[11px] text-gray-400 uppercase tracking-widest mb-1 sm:mb-1.5">
                  Estimated Budget
                </label>
                <select
                  value={formState.budget}
                  onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                  className="w-full px-2.5 py-2 sm:px-3.5 sm:py-2.5 rounded-lg sm:rounded-xl bg-black/60 border border-white/15 text-white text-[11px] sm:text-xs font-sans focus:outline-none focus:border-[#eb5424] focus:ring-1 focus:ring-[#eb5424] transition-all cursor-pointer truncate"
                >
                  <option className="bg-[#111]">₹8,000 onwards (Landing Page Website)</option>
                  <option className="bg-[#111]">₹15,000 onwards (Multi-Page Business Website)</option>
                  <option className="bg-[#111]">₹25,000 – ₹30,000 (E-Commerce Website)</option>
                  <option className="bg-[#111]">₹5,000 – ₹8,000 / Month (Monthly Maintenance)</option>
                  <option className="bg-[#111]">Custom Architecture / Enterprise Scope</option>
                  {initialPlan && <option className="bg-[#111]">Selected Plan: {initialPlan}</option>}
                </select>
              </div>
            </div>

            <div>
              <label className="block font-mono text-[10px] sm:text-[11px] text-gray-400 uppercase tracking-widest mb-1 sm:mb-1.5">
                Project Scope, Goals &amp; Launch Date *
              </label>
              <textarea
                required
                rows={3}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Describe your tech stack, target timeline, features..."
                className="w-full px-3 py-2 sm:px-3.5 sm:py-2 rounded-lg sm:rounded-xl bg-black/60 border border-white/15 text-white placeholder-white/30 text-xs font-sans focus:outline-none focus:border-[#eb5424] focus:ring-1 focus:ring-[#eb5424] transition-all resize-none"
              />
            </div>

            {/* Submit Button Centered */}
            <div className="flex justify-center pt-2 sm:pt-3">
              <MagneticButton strength={0.2}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 sm:px-12 py-2.5 sm:py-3.5 rounded-xl bg-[#eb5424] hover:bg-[#f04c1a] text-white font-mono text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-xl hover:shadow-[0_0_25px_rgba(235,84,36,0.4)] disabled:opacity-50 cursor-pointer"
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
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#070707] text-white font-sans selection:bg-[#eb5424] selection:text-white relative overflow-x-hidden">
      <PortfolioHeader />

      {/* Hero Header with Oversized Typography */}
      <section className="pt-8 sm:pt-12 pb-16 relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left">
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
              * DIRECT INQUIRY &amp; CONSULTATION
            </span>
          </div>

          <FadeContent effect="focus" duration={1.2} blur={10} trigger="mount" delay={0.2}>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-white font-sans leading-[0.9] mb-8 text-center sm:text-left">
              CONTACT ME.
            </h1>
          </FadeContent>

          <FadeContent effect="fade" duration={1.0} trigger="mount" delay={0.35}>
            <p className="text-base sm:text-xl text-gray-300 font-sans max-w-3xl leading-relaxed text-center sm:text-left">
              Ready to bring high-performance animations, clean Next.js architecture, and modern visual polish to your digital product? Let&apos;s discuss timeline and scope.
            </p>
          </FadeContent>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-8 sm:py-12 max-w-7xl mx-auto px-6 sm:px-12">
        <Suspense fallback={<div className="text-center py-20 font-mono text-xs text-gray-400">Loading form...</div>}>
          <ContactFormInner />
        </Suspense>
      </section>

      <MassiveFooter />
    </div>
  );
}
