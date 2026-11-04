"use client";

import { useRef, ReactNode, MouseEvent } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltIntensity?: number;
  scaleHover?: number;
}

export function TiltCard({
  children,
  className = "",
  tiltIntensity = 7,
  scaleHover = 1.015,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const rotateX = useSpring(0, { stiffness: 260, damping: 25 });
  const rotateY = useSpring(0, { stiffness: 260, damping: 25 });
  const scale = useSpring(1, { stiffness: 260, damping: 25 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -tiltIntensity;
    const rotY = ((x - centerX) / centerX) * tiltIntensity;

    rotateX.set(rotX);
    rotateY.set(rotY);
    scale.set(scaleHover);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: "preserve-3d",
      }}
      className={`perspective-1000 ${className}`}
    >
      {children}
    </motion.div>
  );
}
