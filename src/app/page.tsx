"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { FramerHero } from "@/components/sections/FramerHero";
import { BrandsMarquee } from "@/components/sections/BrandsMarquee";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FramerWork } from "@/components/sections/FramerWork";
import { DevelopmentProcessSection } from "@/components/sections/DevelopmentProcessSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FramerContact } from "@/components/sections/FramerContact";
import { MassiveFooter } from "@/components/ui/MassiveFooter";
import { AmbientFramer3D } from "@/components/3d/AmbientFramer3D";
import { WordPreloader } from "@/components/ui/WordPreloader";
import { personalData } from "@/data/personalData";

export default function Home() {
  const [isPreloaderComplete, setIsPreloaderComplete] = useState(false);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalData.name,
    jobTitle: personalData.title,
    email: personalData.email,
    sameAs: [
      personalData.github,
      personalData.linkedin,
      personalData.instagram,
      personalData.facebook,
    ],
    description: personalData.heroDescription,
    knowsAbout: personalData.primarySkills,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Kinetic Typewriter Preloader with Smooth Crossfade Reveal */}
      <WordPreloader onComplete={() => setIsPreloaderComplete(true)} />

      <div
        style={{
          opacity: isPreloaderComplete ? 1 : 0,
          pointerEvents: isPreloaderComplete ? "auto" : "none",
          transition: "opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className="min-h-screen bg-white text-[#0a0a0a] font-sans selection:bg-[#eb5424] selection:text-white relative overflow-x-hidden"
      >
        {/* Fullscreen Ambient 3D Three.js WebGL Canvas across the whole site */}
        <AmbientFramer3D />

        {/* Main Content Flow - Classical Sequences with Cinematic Animations */}
        <main className="flex flex-col relative z-20">
          <FramerHero startAnimation={isPreloaderComplete} />
          <BrandsMarquee />
          <ImpactSection />
          <ServicesSection />
          <FramerWork />
          <DevelopmentProcessSection />
          <ReviewsSection />
          <AchievementsSection />
          <PricingSection />
          <FaqSection />
          <FramerContact />
        </main>

        {/* Massive Kinetic Footer */}
        <MassiveFooter />
      </div>
    </>
  );
}
