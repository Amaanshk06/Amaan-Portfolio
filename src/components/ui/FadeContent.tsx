"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  if (!(window as unknown as { ScrollTrigger?: typeof ScrollTrigger }).ScrollTrigger) {
    (window as unknown as { ScrollTrigger: typeof ScrollTrigger }).ScrollTrigger = ScrollTrigger;
  }
}

export type FadeEffect =
  | "fade"
  | "focus"
  | "develop"
  | "dissolve"
  | "mist"
  | "pixel"
  | "blur-to-focus";

export interface FadeContentProps {
  children: React.ReactNode;
  className?: string;
  effect?: FadeEffect;
  duration?: number;
  delay?: number;
  ease?: string;
  blur?: number | boolean;
  stagger?: number;
  staggerFrom?: "start" | "center" | "end" | "edges" | "random";
  threshold?: number;
  trigger?: "scroll" | "mount";
  once?: boolean;
  scrub?: boolean | number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  initialOpacity?: number;
  as?: React.ElementType;
}

export function FadeContent({
  children,
  className = "",
  effect = "fade",
  duration = 1.0,
  delay = 0,
  ease = "power2.out",
  blur = 10,
  stagger = 0,
  staggerFrom = "start",
  threshold = 0.15,
  trigger = "scroll",
  once = false,
  scrub = false,
  direction = "up",
  distance = 24,
  initialOpacity = 0,
  as: Component = "div",
}: FadeContentProps) {
  const containerRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (!containerRef.current || typeof window === "undefined") return;

      const element = containerRef.current;

      // Determine animation targets
      const childElements = Array.from(element.children) as HTMLElement[];
      let targets: HTMLElement[] = [element];

      if (stagger > 0 && childElements.length > 1) {
        targets = childElements;
      } else if (
        stagger > 0 &&
        childElements.length === 1 &&
        childElements[0].children.length > 1
      ) {
        targets = Array.from(childElements[0].children) as HTMLElement[];
      }

      // Calculate numeric blur amount
      const blurAmount =
        typeof blur === "number" ? blur : blur ? 10 : 0;

      // Directional translation
      let xOffset = 0;
      let yOffset = 0;
      if (direction === "up") yOffset = distance;
      else if (direction === "down") yOffset = -distance;
      else if (direction === "left") xOffset = distance;
      else if (direction === "right") xOffset = -distance;

      // Define from/to configurations per effect
      let fromVars: gsap.TweenVars = {
        opacity: initialOpacity,
        x: xOffset,
        y: yOffset,
        willChange: "opacity, transform, filter",
      };

      let toVars: gsap.TweenVars = {
        opacity: 1,
        x: 0,
        y: 0,
        duration,
        delay,
        ease,
        clearProps: "willChange",
      };

      if (effect === "focus" || effect === "blur-to-focus") {
        fromVars = {
          ...fromVars,
          filter: `blur(${blurAmount || 10}px)`,
          scale: 0.99,
          y: yOffset * 0.7,
        };
        toVars = {
          ...toVars,
          filter: "blur(0px)",
          scale: 1,
          y: 0,
        };
      } else if (effect === "develop") {
        fromVars = {
          ...fromVars,
          filter: `contrast(140%) brightness(130%) blur(${Math.min(blurAmount || 6, 8)}px)`,
          scale: 0.98,
          y: yOffset * 0.6,
        };
        toVars = {
          ...toVars,
          filter: "contrast(100%) brightness(100%) blur(0px)",
          scale: 1,
          y: 0,
        };
      } else if (effect === "mist") {
        fromVars = {
          ...fromVars,
          filter: `blur(${blurAmount || 14}px) brightness(120%)`,
          y: Math.max(yOffset, 16),
        };
        toVars = {
          ...toVars,
          filter: "blur(0px) brightness(100%)",
          y: 0,
        };
      } else if (effect === "dissolve") {
        fromVars = {
          ...fromVars,
          filter: `blur(${blurAmount || 6}px)`,
          letterSpacing: "0.03em",
        };
        toVars = {
          ...toVars,
          filter: "blur(0px)",
          letterSpacing: "normal",
        };
      } else if (effect === "pixel") {
        fromVars = {
          ...fromVars,
          scale: 0.96,
          y: yOffset * 0.7,
        };
        toVars = {
          ...toVars,
          scale: 1,
          y: 0,
        };
      }

      // Stagger configuration if multiple targets
      if (stagger > 0 && targets.length > 1) {
        toVars.stagger = {
          each: stagger,
          from: staggerFrom,
        };
      }

      // ScrollTrigger or Mount trigger
      if (trigger === "scroll") {
        toVars.scrollTrigger = {
          trigger: element,
          start: `top ${Math.round((1 - threshold) * 100)}%`,
          once,
          scrub: scrub ? (typeof scrub === "number" ? scrub : 1) : false,
          toggleActions: once
            ? "play none none none"
            : "play none none reverse",
        };
      }

      // Execute GSAP animation
      gsap.fromTo(targets, fromVars, toVars);
    },
    { scope: containerRef, dependencies: [effect, duration, delay, threshold, once, trigger] }
  );

  return (
    <Component ref={containerRef} className={className}>
      {children}
    </Component>
  );
}

export default FadeContent;
