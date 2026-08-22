"use client";

import ServiceHero from "@/components/ServiceHero";
import ServiceApproach from "@/components/ServiceApproach";
import ServiceSelection from "@/components/ServiceSelection";
import ServiceMoreThanDecor from "@/components/ServiceMoreThanDecor";
import ServiceCTA from "@/components/ServiceCTA";
import DiagonalMarquee from "@/components/DiagonalMarquee";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface SectionContent {
  title: string;
  description: string;
  image: string;
}

interface ServiceDetailTemplateProps {
  title: string;
  subtitle: string;
  heroVideo: string;
  heroImage?: string; 
  introHeading: string;
  introText: string;
  selectionImages: string[];
  moreThanDecorSections: SectionContent[];
  marqueeImages: string[];
}

export default function ServiceDetailTemplate({
  title,
  subtitle,
  heroVideo,
  heroImage,
  introHeading,
  introText,
  selectionImages,
  moreThanDecorSections,
  marqueeImages,
}: ServiceDetailTemplateProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="flex flex-col w-full min-h-screen bg-background">
      {/* 1. HERO SECTION */}
      <ServiceHero
        title={title}
        subtitle={subtitle}
        videoUrl={heroVideo}
        imgUrl={heroImage}
      />

      {/* 2. INTRO SECTION */}
      <section className="py-24 md:py-40 px-6 max-w-5xl mx-auto text-center space-y-12">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, ease: "easeOut" }}
           className="space-y-6"
        >
          <p className="text-gold tracking-[0.4em] uppercase text-xs font-bold font-sans">Introdução</p>
          <h2 className="font-serif text-4xl md:text-7xl font-bold uppercase tracking-tight leading-tight">
            {introHeading}
          </h2>
          <div className="w-20 h-[1px] bg-gold/50 mx-auto" />
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed font-sans max-w-3xl mx-auto">
            {introText}
          </p>
        </motion.div>
      </section>

      {/* 3. DIAGONAL MARQUEE - Immediately after Intro as requested */}
      <div className="py-12 overflow-hidden">
        <DiagonalMarquee images={marqueeImages} />
      </div>

      {/* 4. OUR APPROACH (3-STEP) */}
      <ServiceApproach />

      {/* 5. THE SELECTION (BENTO GALLERY) */}
      <ServiceSelection title={title} images={selectionImages} />

      {/* 6. MORE THAN JUST DECOR (ALTERNATING GRID) */}
      <ServiceMoreThanDecor sections={moreThanDecorSections} />

      {/* 7. CTA SECTION */}
      <ServiceCTA title={title} />
    </div>
  );
}
