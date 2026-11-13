"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DecryptedText from "@/components/ui/DecryptedText";

interface WordPreloaderProps {
  onComplete?: () => void;
}

export function WordPreloader({ onComplete }: WordPreloaderProps) {
  const [mounted, setMounted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [step, setStep] = useState(1); // 1 = Brand Name, 2 = Tagline

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll while preloader is active
  useEffect(() => {
    if (!isFinished) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [isFinished]);

  // Skip handler (click, ESC, or Space)
  const handleSkip = () => {
    setIsFinished(true);
    if (onComplete) onComplete();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.code === "Space") handleSkip();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Coordinated Preloader Lifecycle matching decryption durations
  useEffect(() => {
    if (isFinished) return;

    // Check for test/preview override query params (?preloader=hold)
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("preloader") === "hold") {
        setStep(2);
        return;
      }
    }

    // STEP 2 – INTRODUCTORY TEXT: Reveal introductory tagline
    const step2Timer = setTimeout(() => {
      setStep(2);
    }, 450);

    // STEP 3 – COMPLETION: Smoothly transition into main website
    const exitTimer = setTimeout(() => {
      setIsFinished(true);
      if (onComplete) onComplete();
    }, 2200);

    return () => {
      clearTimeout(step2Timer);
      clearTimeout(exitTimer);
    };
  }, [isFinished, onComplete]);

  if (isFinished) return null;

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="decrypted-preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.75,
              ease: [0.4, 0, 0.2, 1],
            },
          }}
          onClick={handleSkip}
          className="fixed inset-0 z-[99999] bg-[#000000] text-white flex flex-col items-center justify-between p-6 sm:p-12 select-none cursor-pointer"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            backgroundColor: "#000000",
          }}
        >
          {/* Top Bar: Minimal system label & ESC indicator */}
          <div className="w-full flex items-center justify-between text-white/30 text-[10px] sm:text-xs font-mono">
            <span className="tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#eb5424] animate-pulse" />
              SYSTEM_BOOT // 2026
            </span>
            <span className="tracking-widest hover:text-white/60 transition-colors">
              ESC TO SKIP
            </span>
          </div>

          {/* Center Stage: Cinematic Decrypted Typography */}
          <div className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl px-4 text-center">
            {/* STEP 1 – BRAND NAME: Decrypts first, one character at a time */}
            <div className="flex flex-col items-center justify-center leading-[0.88] select-none text-center mb-6">
              <div className="text-[15vw] sm:text-[12vw] md:text-[9vw] font-black tracking-tight uppercase font-sans text-[#eb5424] drop-shadow-[0_10px_45px_rgba(235,84,36,0.35)]">
                <DecryptedText
                  text="AMAAN"
                  speed={38}
                  maxIterations={10}
                  sequential={true}
                  revealDirection="start"
                  useOriginalCharsOnly={false}
                  characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*+-_<>/"
                  className="text-[#eb5424]"
                  encryptedClassName="text-[#eb5424]/60"
                  scrambleColor="#eb5424"
                  animateOn="view"
                  effect="scramble"
                  loop={false}
                />
              </div>

              <div className="text-[15vw] sm:text-[12vw] md:text-[9vw] font-black tracking-tight uppercase font-sans text-[#eb5424] drop-shadow-[0_10px_45px_rgba(235,84,36,0.35)] flex items-center justify-center">
                <DecryptedText
                  text="SHAIKH®"
                  speed={38}
                  maxIterations={10}
                  sequential={true}
                  revealDirection="start"
                  useOriginalCharsOnly={false}
                  characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*+-_<>/"
                  className="text-[#eb5424]"
                  encryptedClassName="text-[#eb5424]/60"
                  scrambleColor="#eb5424"
                  animateOn="view"
                  effect="scramble"
                  loop={false}
                />
              </div>
            </div>

            {/* STEP 2 – INTRODUCTORY TEXT: Tagline reveals sequentially */}
            <div className="h-8 flex items-center justify-center">
              {step >= 2 && (
                <div className="text-xs sm:text-sm md:text-base font-mono uppercase tracking-[0.25em] text-white/90 font-medium">
                  <DecryptedText
                    text="CREATIVE DEVELOPER"
                    speed={30}
                    maxIterations={8}
                    sequential={true}
                    revealDirection="start"
                    useOriginalCharsOnly={false}
                    characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*+-_<>/"
                    className="text-white/90"
                    encryptedClassName="text-[#eb5424]"
                    scrambleColor="#eb5424"
                    animateOn="view"
                    effect="scramble"
                    loop={false}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Minimal Bottom Bar */}
          <div className="w-full flex items-center justify-between text-white/20 text-[10px] sm:text-xs font-mono">
            <span>©2026 // AMAAN SHAIKH</span>
            <span className="text-[#eb5424]/60 tracking-wider">CLICK ANYWHERE TO ENTER</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
