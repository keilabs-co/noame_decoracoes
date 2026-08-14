"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface SectionContent {
  title: string;
  description: string;
  image: string;
}

interface ServiceMoreThanDecorProps {
  sections: SectionContent[];
}

export default function ServiceMoreThanDecor({ sections }: ServiceMoreThanDecorProps) {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto space-y-32">
      <div className="text-center mb-16">
        <p className="text-gold tracking-[0.4em] uppercase text-xs font-bold mb-4 font-sans">Além das Expectativas</p>
        <h2 className="font-serif text-4xl md:text-6xl font-bold uppercase tracking-tight">Mais do que apenas Decoração</h2>
      </div>

      {sections.map((section, idx) => (
        <div 
          key={idx}
          className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12 md:gap-24`}
        >
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 aspect-[4/3] relative rounded-3xl overflow-hidden shadow-2xl group"
          >
            <Image
              src={section.image}
              alt={section.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 space-y-6 text-center md:text-left"
          >
            <h3 className="font-serif text-3xl md:text-5xl font-bold uppercase tracking-tight">
              {section.title}
            </h3>
            <p className="text-lg text-foreground/70 leading-relaxed font-sans">
              {section.description}
            </p>
          </motion.div>
        </div>
      ))}
    </section>
  );
}
