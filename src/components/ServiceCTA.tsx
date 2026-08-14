"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCTAProps {
  title: string;
}

export default function ServiceCTA({ title }: ServiceCTAProps) {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="liquid-glass border border-white/20 rounded-3xl p-12 md:p-24 text-center space-y-12 overflow-hidden relative group"
      >
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gold/5 blur-3xl rounded-full -z-10 transition-all duration-700 group-hover:bg-gold/10" />

        <div className="space-y-4">
          <p className="text-gold tracking-[0.4em] uppercase text-sm font-bold">Começar</p>
          <h2 className="font-serif text-4xl md:text-7xl font-bold uppercase tracking-tight">Interessado no nosso serviço de {title}?</h2>
        </div>
        
        <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto font-sans leading-relaxed">
          Contacte a nossa equipa especializada hoje para começar a planejar o seu próximo evento profissional e sofisticado.
        </p>

        <Link 
          href="/contact"
          className="inline-flex items-center gap-3 px-12 py-5 bg-gold text-white rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-all duration-300 shadow-xl shadow-gold/20"
        >
          Reservar Agora
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </section>
  );
}
