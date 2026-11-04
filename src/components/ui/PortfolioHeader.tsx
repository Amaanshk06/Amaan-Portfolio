"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FullscreenNavOverlay } from "./FullscreenNavOverlay";
import { MagneticButton } from "./MagneticButton";

interface PortfolioHeaderProps {
  theme?: "dark" | "light";
}

export function PortfolioHeader({ theme = "dark" }: PortfolioHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isLight = theme === "light";

  const navItems = [
    { label: "Home", href: "/", id: "home" },
    { label: "About", href: "/about", id: "about" },
    { label: "Work", href: "/work", id: "work" },
    { label: "Services", href: "/services", id: "services" },
    { label: "Contact", href: "/contact", id: "contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: (typeof navItems)[0]) => {
    if (item.id === "home" && pathname === "/") {
      e.preventDefault();
      const lenis = (window as unknown as { __lenis?: { scrollTo: (target: number, opts?: object) => void } }).__lenis;
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.0 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* Header in normal document flow at the top of the page */}
      <header
        className={`relative w-full z-40 py-6 bg-transparent font-sans select-none ${
          isLight ? "text-[#0a0a0a]" : "text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
          {/* Brand Logo with Magnetic Hover */}
          <MagneticButton strength={0.3}>
            <Link
              href="/"
              className={`text-xl sm:text-2xl font-black tracking-tight flex items-center gap-0.5 group focus-visible:outline-none focus-visible:ring-2 rounded-lg px-1 transition-transform ${
                isLight
                  ? "text-[#0a0a0a] focus-visible:ring-black"
                  : "text-white focus-visible:ring-white"
              }`}
              aria-label="Amaan Shaikh - Homepage"
            >
              <span
                className={`transition-colors ${
                  isLight ? "group-hover:text-[#eb5424]" : "group-hover:text-white/80"
                }`}
              >
                Amaan
              </span>
              <span
                className={`text-xs align-super opacity-80 ${
                  isLight ? "text-[#eb5424]" : "text-white"
                }`}
              >
                ®
              </span>
            </Link>
          </MagneticButton>

          {/* Center Navigation Links - Clean text links, NO translucent background wrapper */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-xs sm:text-sm font-medium">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <MagneticButton key={item.label} strength={0.2}>
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`relative py-1 tracking-wide transition-all ${
                      isActive
                        ? isLight
                          ? "text-[#0a0a0a] font-bold"
                          : "text-white font-bold"
                        : isLight
                        ? "text-[#0a0a0a]/70 hover:text-[#0a0a0a]"
                        : "text-white/75 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavUnderline"
                        className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full ${
                          isLight ? "bg-[#eb5424]" : "bg-white"
                        }`}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </MagneticButton>
              );
            })}
          </nav>

          {/* Right Action: Clean Status Pill + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className={`hidden lg:inline-flex items-center px-4 py-1.5 rounded-full font-mono text-[11px] font-medium transition-all ${
                isLight
                  ? "bg-black/5 hover:bg-black/10 border border-black/15 text-gray-800"
                  : "bg-white/10 hover:bg-white/20 border border-white/20 text-white"
              }`}
            >
              AVAILABLE FOR WORK
            </Link>

            {/* Hamburger Button */}
            <MagneticButton strength={0.25}>
              <button
                onClick={() => setMenuOpen(true)}
                className={`w-11 h-10 flex flex-col justify-center items-end gap-1.5 cursor-pointer group p-2 rounded-xl transition-all focus-visible:outline-none focus-visible:ring-2 ${
                  isLight
                    ? "bg-black/5 hover:bg-black/10 border border-black/15 focus-visible:ring-black"
                    : "bg-white/10 hover:bg-white/20 border border-white/15 focus-visible:ring-white"
                }`}
                aria-label="Open Navigation Menu"
                aria-expanded={menuOpen}
              >
                <span
                  className={`w-6 h-[2px] group-hover:w-7 transition-all duration-300 rounded-full ${
                    isLight ? "bg-black" : "bg-white"
                  }`}
                />
                <span
                  className={`w-4 h-[2px] group-hover:w-7 transition-all duration-300 rounded-full ${
                    isLight ? "bg-black" : "bg-white"
                  }`}
                />
              </button>
            </MagneticButton>
          </div>
        </div>
      </header>

      {/* Fullscreen Navigation Modal */}
      <FullscreenNavOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
