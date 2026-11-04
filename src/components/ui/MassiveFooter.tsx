"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { personalData } from "@/data/personalData";
import { MagneticButton } from "./MagneticButton";
import {
  LinkedInIcon,
  InstagramIcon,
  FacebookIcon,
  GithubIcon,
} from "./SocialIcons";

export function MassiveFooter() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
    restDelta: 0.001,
  });

  const scaleBrand = useTransform(smoothProgress, [0, 1], [0.94, 1]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 4000);
  };

  return (
    <footer
      ref={containerRef}
      className="bg-white text-[#0a0a0a] pt-20 sm:pt-28 relative z-20 overflow-hidden border-t border-gray-100 select-none"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-gray-200">
          {/* Top Left: Bio & Direct Contact */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base sm:text-xl font-medium text-gray-700 max-w-xl font-sans leading-relaxed">
              Focused on crafting clean and intuitive experiences that blend creativity, usability, and functionality to help brands connect better with their users.
            </p>

            <div className="space-y-1 font-sans">
              <div className="font-mono text-xs text-gray-400 uppercase tracking-wider">
                Direct Contact
              </div>
              <a
                href={`mailto:${personalData.email}`}
                className="text-lg sm:text-2xl font-black text-[#0a0a0a] hover:text-[#eb5424] transition-colors font-sans block"
              >
                {personalData.email}
              </a>
            </div>
          </div>

          {/* Top Right: Newsletter Subscription Box */}
          <div className="lg:col-span-5 bg-gray-50/80 p-6 sm:p-8 rounded-2xl border border-gray-200/80">
            <h4 className="font-sans font-bold text-base text-gray-900 mb-3">
              Developer Newsletter
            </h4>
            <p className="font-sans text-xs text-gray-500 mb-4 leading-relaxed">
              Subscribe to receive occasional engineering insights, UI architecture experiments, and case studies.
            </p>

            {subscribed ? (
              <div className="p-3 bg-green-50 border border-green-200 rounded-xl text-green-700 font-mono text-xs font-semibold text-center">
                Subscribed successfully! Thank you.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#eb5424] font-sans"
                />
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#0a0a0a] hover:bg-black text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  SUBSCRIBE
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Row: Navigation Columns + Massive Brand Wordmark */}
        <div className="py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          {/* Navigation Columns */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8 font-sans text-xs sm:text-sm">
            {/* Col 1 */}
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-gray-400 block mb-4">
                Pages &amp; Slices
              </span>
              <ul className="space-y-2.5 font-medium text-gray-700">
                <li>
                  <Link href="/" className="hover:text-[#eb5424] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="hover:text-[#eb5424] transition-colors">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-[#eb5424] transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#eb5424] transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/#pricing" className="hover:text-[#eb5424] transition-colors">
                    Pricing Plans
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#eb5424] transition-colors">
                    Contact Form
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 2 */}
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-gray-400 block mb-4">
                Connect
              </span>
              <ul className="space-y-2.5 font-medium text-gray-700">
                <li>
                  <a
                    href={personalData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-[#eb5424] transition-colors group"
                  >
                    <LinkedInIcon className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#eb5424] transition-colors" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 text-gray-400 group-hover:text-[#eb5424]" />
                  </a>
                </li>
                <li>
                  <a
                    href={personalData.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-[#eb5424] transition-colors group"
                  >
                    <InstagramIcon className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#eb5424] transition-colors" />
                    <span>Instagram</span>
                    <ArrowUpRight className="w-3 h-3 text-gray-400 group-hover:text-[#eb5424]" />
                  </a>
                </li>
                <li>
                  <a
                    href={personalData.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-[#eb5424] transition-colors group"
                  >
                    <FacebookIcon className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#eb5424] transition-colors" />
                    <span>Facebook</span>
                    <ArrowUpRight className="w-3 h-3 text-gray-400 group-hover:text-[#eb5424]" />
                  </a>
                </li>
                <li>
                  <a
                    href={personalData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-[#eb5424] transition-colors group"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#eb5424] transition-colors" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3 text-gray-400 group-hover:text-[#eb5424]" />
                  </a>
                </li>
                <li className="pt-1">
                  <a
                    href={`mailto:${personalData.email}`}
                    className="inline-flex items-center gap-1.5 hover:text-[#eb5424] transition-colors font-semibold"
                  >
                    <span>Email Inquiries</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Massive Wordmark */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end overflow-hidden py-2 w-full text-center lg:text-right">
            <motion.div
              style={{ scale: scaleBrand }}
              className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[10rem] font-black uppercase tracking-tight text-[#0a0a0a] font-sans leading-[0.9] pb-3 cursor-default hover:text-[#eb5424] transition-colors duration-500 select-none whitespace-nowrap text-center lg:text-right"
            >
              AMAAN<span className="text-[0.4em] align-super ml-1 text-[#eb5424]">®</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Sleek Black Bottom Strip with Back to Homepage */}
      <div className="bg-[#0a0a0a] text-white py-4 px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left font-mono text-[11px] text-gray-400 tracking-wider">
        <span>Copyright &amp; Design by Amaan Shaikh - 2026. All Rights Reserved.</span>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-white/70 hover:text-[#eb5424] transition-colors font-bold uppercase tracking-wider"
        >
          <span>← BACK TO HOMEPAGE</span>
        </Link>
      </div>
    </footer>
  );
}
