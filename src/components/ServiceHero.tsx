"use client";

import { motion } from "framer-motion";

interface ServiceHeroProps {
  title: string;
  subtitle?: string;
  videoUrl: string;
  imgUrl?: string;
}

export default function ServiceHero({ title, subtitle, videoUrl, imgUrl }: ServiceHeroProps) {
  return (
    <section className="relative h-[85vh] md:h-[85vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Video/Image Container */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover lg:hidden"
        >
          <source src={videoUrl} type="video/mp4" />
          O seu navegador não suporta a tag de vídeo.
        </video>

        <img
          src={imgUrl}
          alt={title}
          className="hidden lg:block w-full h-full object-cover"
        />

        {/* Dark Overlay for premium feel and readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
           className="space-y-6"
        >
          {/* Breadcrumb-style subtitle (optional, but requested for fidelity) */}
          <p className="text-gold tracking-[0.4em] uppercase text-xs font-bold font-sans">
            Serviços / {title}
          </p>
          
          <h1 className="font-serif text-5xl md:text-8xl font-bold text-white uppercase tracking-tighter leading-none">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto font-sans">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>

      {/* Decorative Gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
