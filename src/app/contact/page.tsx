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
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
      {/* Left Column: Contact Details & SLA Info */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="lg:col-span-5 flex flex-col justify-between h-full space-y-8"
      >
        <div>
          <h2 className="text-2xl sm:text-3xl font-black uppercase font-sans tracking-tight text-white mb-4">
            LET&apos;S TALK ARCHITECTURE.
          </h2>
          <p className="text-sm text-gray-300 font-sans leading-relaxed">
            Whether you are looking to launch an MVP from scratch, transition to Next.js 15, or redesign your digital storefront, I am available to help plan and engineer your vision.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="space-y-4 font-mono text-xs">
          <a
            href={`mailto:${personalData.email}`}
            className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#eb5424] hover:bg-white/[0.08] transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#eb5424]/10 border border-[#eb5424]/20 flex items-center justify-center text-[#eb5424] group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-gray-400 block text-[10px] uppercase">DIRECT EMAIL</span>
              <span className="text-white font-bold group-hover:text-[#eb5424] transition-colors text-sm">
                {personalData.email}
              </span>
            </div>
          </a>

          <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.04] border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-gray-400 block text-[10px] uppercase">LOCATION</span>
              <span className="text-white font-bold text-sm">Thane, Maharashtra, India</span>
            </div>
          </div>
        </div>

        {/* Socials Box */}
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
          <span className="font-mono text-[11px] text-gray-400 uppercase tracking-widest block mb-4">
            FIND ME ONLINE
          </span>
          <div className="flex flex-wrap gap-2.5 font-mono text-xs">
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-[#eb5424] hover:text-white transition-all text-white border border-white/10 group"
            >
              <LinkedInIcon className="w-4 h-4 text-white/90 group-hover:text-white transition-colors" />
              <span>LINKEDIN</span>
              <span className="text-gray-400 group-hover:text-white">↗</span>
            </a>
            <a
              href={personalData.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-[#eb5424] hover:text-white transition-all text-white border border-white/10 group"
            >
              <InstagramIcon className="w-4 h-4 text-white/90 group-hover:text-white transition-colors" />
              <span>INSTAGRAM</span>
              <span className="text-gray-400 group-hover:text-white">↗</span>
            </a>
            <a
              href={personalData.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-[#eb5424] hover:text-white transition-all text-white border border-white/10 group"
            >
              <FacebookIcon className="w-4 h-4 text-white/90 group-hover:text-white transition-colors" />
              <span>FACEBOOK</span>
              <span className="text-gray-400 group-hover:text-white">↗</span>
            </a>
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-[#eb5424] hover:text-white transition-all text-white border border-white/10 group"
            >
              <GithubIcon className="w-4 h-4 text-white/90 group-hover:text-white transition-colors" />
              <span>GITHUB</span>
              <span className="text-gray-400 group-hover:text-white">↗</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Right Column: Full Interactive Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-white/[0.03] border border-white/15 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
      >
        {/* Top Registration Mark - Centered Confidential Project Brief */}
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
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-mono text-[11px] text-gray-400 uppercase tracking-widest mb-2">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Jordan Lee"
                  className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 text-white placeholder-white/30 text-xs font-sans focus:outline-none focus:border-[#eb5424] focus:ring-1 focus:ring-[#eb5424] transition-all"
                />
              </div>

              <div>
                <label className="block font-mono text-[11px] text-gray-400 uppercase tracking-widest mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="jordan@venture.com"
                  className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 text-white placeholder-white/30 text-xs font-sans focus:outline-none focus:border-[#eb5424] focus:ring-1 focus:ring-[#eb5424] transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-mono text-[11px] text-gray-400 uppercase tracking-widest mb-2">
                  Requested Service
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

              <div>
                <label className="block font-mono text-[11px] text-gray-400 uppercase tracking-widest mb-2">
                  Estimated Budget
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
                  {initialPlan && <option className="bg-[#111]">Selected Plan: {initialPlan}</option>}
                </select>
              </div>
            </div>

            <div>
              <label className="block font-mono text-[11px] text-gray-400 uppercase tracking-widest mb-2">
                Project Scope, Goals &amp; Launch Date *
              </label>
              <textarea
                required
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Describe your current tech stack, target timeline, features, and visual style..."
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
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-12">
        <Suspense fallback={<div className="text-center py-20 font-mono text-xs text-gray-400">Loading form...</div>}>
          <ContactFormInner />
        </Suspense>
      </section>

      <MassiveFooter />
    </div>
  );
}
