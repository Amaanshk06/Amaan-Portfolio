"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Clock, Mail, MapPin, Sparkles } from "lucide-react";
import { personalData } from "@/data/personalData";
import {
  LinkedInIcon,
  InstagramIcon,
  FacebookIcon,
  GithubIcon,
} from "@/components/ui/SocialIcons";

interface FullscreenNavOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FullscreenNavOverlay({ isOpen, onClose }: FullscreenNavOverlayProps) {
  const pathname = usePathname();
  const [time, setTime] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Prevent body scroll and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const navLinks = [
    { label: "HOME", href: "/", count: "01" },
    { label: "WORK", href: "/work", count: "02" },
    { label: "SERVICES", href: "/services", count: "03" },
    { label: "ABOUT", href: "/about", count: "04" },
    { label: "CONTACT", href: "/contact", count: "05" },
  ];

  // Primary Backdrop Curtain Reveal Variants
  const backdropVariants = {
    closed: {
      clipPath: "inset(0% 0% 100% 0%)",
      transition: {
        duration: 0.55,
        ease: [0.76, 0, 0.24, 1] as const,
        when: "afterChildren" as const,
      },
    },
    open: {
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1] as const,
        when: "beforeChildren" as const,
      },
    },
  };

  // Orange accent secondary curtain for cinematic layered reveal
  const accentCurtainVariants = {
    closed: {
      clipPath: "inset(0% 0% 100% 0%)",
      transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] as const },
    },
    open: {
      clipPath: "inset(0% 0% 0% 0%)",
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const listVariants = {
    open: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.15,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.04,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    closed: {
      y: 60,
      opacity: 0,
      rotateX: -20,
      transition: { duration: 0.35, ease: [0.76, 0, 0.24, 1] as const },
    },
    open: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Layer 1: Orange Accent Sweep Curtain */}
          <motion.div
            key="accent-curtain"
            initial="closed"
            animate="open"
            exit="closed"
            variants={accentCurtainVariants}
            className="fixed inset-0 z-[99] bg-[#eb5424] pointer-events-none"
          />

          {/* Layer 2: Main Dark Fullscreen Overlay Canvas */}
          <motion.div
            key="main-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Fullscreen Navigation Menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={backdropVariants}
            className="fixed inset-0 z-[100] bg-[#070707] text-white flex flex-col justify-between p-4 sm:p-8 md:p-10 select-none overflow-y-auto"
          >
            {/* Ambient Background Glow Orb */}
            <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#eb5424]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Top Bar with entrance animation */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-between border-b border-white/10 pb-4 w-full max-w-7xl mx-auto shrink-0 relative z-10"
            >
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#eb5424]" />
                <span className="font-mono text-xs uppercase tracking-widest text-white/70">
                  MENU
                </span>
              </div>

              <motion.button
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                onClick={onClose}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/20 hover:border-[#eb5424] flex items-center justify-center text-white hover:text-[#eb5424] hover:bg-white/5 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#eb5424]"
                aria-label="Close Menu"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* Center Content: Two Columns on Desktop */}
            <div className="w-full max-w-7xl mx-auto my-auto py-4 sm:py-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              {/* Left Column: Massive Kinetic Masked Links */}
              <motion.nav variants={listVariants} className="lg:col-span-7">
                <ul className="flex flex-col gap-1 sm:gap-2">
                  {navLinks.map((item, index) => {
                    const isActive =
                      item.href === "/"
                        ? pathname === "/"
                        : pathname === item.href;
                    const isHovered = hoveredIndex === index;

                    return (
                      <motion.li
                        key={item.label}
                        variants={itemVariants}
                        className="overflow-hidden py-1"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="group flex items-center gap-4 text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight transition-all duration-300 relative inline-flex font-sans"
                        >
                          <span
                            className={`font-mono text-xs sm:text-sm transition-all duration-300 ${
                              isHovered || isActive
                                ? "text-[#eb5424] translate-x-1"
                                : "text-white/30"
                            }`}
                          >
                            {item.count}
                          </span>

                          <span
                            className={`transition-all duration-300 transform ${
                              isHovered
                                ? "translate-x-3 text-[#eb5424]"
                                : isActive
                                ? "text-[#eb5424]"
                                : "text-white/70 group-hover:text-white"
                            }`}
                          >
                            {item.label}
                          </span>

                          <ArrowUpRight
                            className={`w-5 h-5 sm:w-8 sm:h-8 text-[#eb5424] transition-all duration-300 ${
                              isHovered || isActive
                                ? "opacity-100 translate-x-1 -translate-y-1 scale-110"
                                : "opacity-0"
                            }`}
                          />
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.nav>

              {/* Right Column: Properly Aligned Information Panel */}
              <motion.div
                initial={{ opacity: 0, x: 50, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ delay: 0.25, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-5 flex flex-col gap-4 sm:gap-5 p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-white/[0.04] border border-white/10 shadow-2xl max-w-md w-full ml-auto backdrop-blur-md"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1.5 text-[#eb5424]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span className="font-mono text-xs font-bold uppercase tracking-widest">
                      CURRENT AVAILABILITY
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-sans text-white/80 leading-relaxed">
                    Available for freelance contracts, full-stack Next.js applications, and bespoke digital design systems.
                  </p>
                </div>

                <div className="space-y-2.5 pt-3 border-t border-white/10 font-mono text-xs text-white/70">
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-3.5 h-3.5 text-[#eb5424]" />
                    <span>
                      MUMBAI (IST):{" "}
                      <strong className="text-white tracking-wider" suppressHydrationWarning>
                        {time || "17:40:00"}
                      </strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-3.5 h-3.5 text-[#eb5424]" />
                    <span>Thane, Maharashtra, IN</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-3.5 h-3.5 text-[#eb5424]" />
                    <a
                      href={`mailto:${personalData.email}`}
                      className="text-white hover:text-[#eb5424] transition-colors underline decoration-white/30"
                    >
                      {personalData.email}
                    </a>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mb-2.5">
                    SOCIAL DIRECTORY
                  </span>
                  <div className="flex flex-wrap gap-2 font-mono text-xs">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={personalData.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-[#eb5424] hover:text-white transition-all text-white border border-white/10 group"
                    >
                      <LinkedInIcon className="w-3 h-3 text-white/90 group-hover:text-white transition-colors" />
                      <span>LINKEDIN</span>
                      <span className="text-white/40 group-hover:text-white text-[10px]">↗</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={personalData.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-[#eb5424] hover:text-white transition-all text-white border border-white/10 group"
                    >
                      <InstagramIcon className="w-3 h-3 text-white/90 group-hover:text-white transition-colors" />
                      <span>INSTAGRAM</span>
                      <span className="text-white/40 group-hover:text-white text-[10px]">↗</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={personalData.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-[#eb5424] hover:text-white transition-all text-white border border-white/10 group"
                    >
                      <FacebookIcon className="w-3 h-3 text-white/90 group-hover:text-white transition-colors" />
                      <span>FACEBOOK</span>
                      <span className="text-white/40 group-hover:text-white text-[10px]">↗</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={personalData.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-[#eb5424] hover:text-white transition-all text-white border border-white/10 group"
                    >
                      <GithubIcon className="w-3 h-3 text-white/90 group-hover:text-white transition-colors" />
                      <span>GITHUB</span>
                      <span className="text-white/40 group-hover:text-white text-[10px]">↗</span>
                    </motion.a>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        href="/contact"
                        onClick={onClose}
                        className="inline-block px-3 py-1.5 rounded-lg bg-[#eb5424] text-white hover:bg-[#d64516] transition-all font-bold shadow-md"
                      >
                        BOOK A CALL ↗
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Footer with animated entrance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="border-t border-white/10 pt-4 flex items-center justify-center text-center font-mono text-xs text-white/50 w-full max-w-7xl mx-auto shrink-0 relative z-10"
            >
              <span>© 2026 {personalData.name}. All Rights Reserved.</span>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
