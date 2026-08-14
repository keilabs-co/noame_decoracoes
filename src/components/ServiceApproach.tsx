"use client";

import { motion } from "framer-motion";
import { Eye, PencilRuler, Sparkles } from "lucide-react";

const steps = [
  {
    title: "Visão e Espaço",
    description: "Começamos por compreender a sua visão espiritual e a arquitetura única do seu espaço sagrado.",
    icon: Eye,
  },
  {
    title: "Design e Estilo",
    description: "Os nossos artesãos fazem a curadoria de arranjos florais específicos e elementos decorativos que honram a santidade do ambiente.",
    icon: PencilRuler,
  },
  {
    title: "Revelação e Celebração",
    description: "A transformação final é revelada, criando uma atmosfera divina para a sua cerimónia especial.",
    icon: Sparkles,
  },
];

export default function ServiceApproach() {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-gold tracking-[0.4em] uppercase text-xs font-bold mb-4">Nosso Processo</p>
          <h2 className="font-serif text-4xl md:text-6xl font-bold uppercase tracking-tight">Nossa Abordagem</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-background border border-gold/20 flex items-center justify-center mb-8 group-hover:border-gold group-hover:scale-110 transition-all duration-500">
                <step.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4 uppercase tracking-wide">
                {step.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
