"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  const portfolios = [
    { title: "Decoração de Casamento", category: "Casamentos", image: "/media/services/casamentos/photos/wedding_cover.JPG" },
    { title: "Serviço de Catering Gourmet", category: "Catering", image: "/media/services/catering/photos/catering_cover.JPG" },
    { title: "Eventos Corporativos", category: "Corporativos", image: "/media/services/corporativos/photos/corporative_cover.JPG" },
    { title: "Festas Particulares", category: "Festas", image: "/media/services/festas/photos/parties_cover.JPG" },
    { title: "Graduações & Formações", category: "Formações", image: "/media/services/formacoes/photos/formacoes_cover.JPG" },
    { title: "Locação de Equipamento", category: "Locação", image: "/media/services/locacao/photos/lococao_cover.JPG" },
  ];

  return (
    <div className="flex flex-col w-full px-6 py-12 md:py-24 max-w-7xl mx-auto space-y-16">
      
      {/* HEADER SECTION */}
      <section className="text-center space-y-6">
        <h2 className="text-sm font-bold tracking-widest uppercase text-gold mb-2">Casamentos e Eventos Reais</h2>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Nossas <span className="text-gold">Últimas Obras-Primas</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto"
        >
          Um vislumbre dos cenários mágicos e ambientes únicos criados pela nossa equipe ao longo dos anos.
        </motion.p>
      </section>

      {/* GALLERY SECTION */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolios.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="group relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden liquid-glass-card border-none"
          >
            {/* EDIT GALLERY IMAGES HERE */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-gold font-bold text-sm tracking-wider uppercase mb-1">{item.category}</span>
              <h3 className="text-white text-2xl font-bold">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA SECTION */}
      <section className="text-center pt-12">
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-4 bg-foreground text-background font-bold rounded-full hover:bg-gold hover:text-black transition-colors duration-300 cursor-pointer"
          >
            Agendar um Evento
          </motion.button>
        </Link>
      </section>

    </div>
  );
}
