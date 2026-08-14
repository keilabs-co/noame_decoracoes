"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";

const allServices = [
  {
    title: "Casamentos",
    description: "Decoração de casamento elegante e intemporal, adaptada à sua história de amor e visão única.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    href: "/services/casamentos"
  },
  {
    title: "Catering",
    description: "Experiências culinárias excepcionais e apresentações de bebidas para todas as ocasiões.",
    image: "https://images.unsplash.com/photo-1544145945-f904253d0c7b?q=80&w=1974&auto=format&fit=crop",
    href: "/services/catering"
  },
  {
    title: "Corporativos",
    description: "Design de eventos profissional e focado na marca que deixa uma impressão duradoura.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
    href: "/services/corporativos"
  },
  {
    title: "Festas",
    description: "Encontros sociais vibrantes e dinâmicos projetados para celebrar os marcos da vida.",
    image: "https://images.unsplash.com/photo-1533174000228-db3f74dce54e?q=80&w=2074&auto=format&fit=crop",
    href: "/services/festas"
  },
  {
    title: "Formações",
    description: "Eventos formais sofisticados e graduações que celebram conquistas e legado.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
    href: "/services/formacoes"
  },
  {
    title: "Locação",
    description: "Soluções premium de aluguer de eventos com mobiliário curado e itens de decoração exclusivos.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop",
    href: "/services/locacao"
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <header className="mb-24 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gold tracking-[0.4em] uppercase text-xs font-bold mb-4"
        >
          Soluções Detalhadas
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-5xl md:text-7xl font-bold uppercase tracking-tighter"
        >
          Nossos <span className="text-gold">Serviços</span>
        </motion.h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allServices.map((service, idx) => (
          <ServiceCard
            key={idx}
            title={service.title}
            description={service.description}
            image={service.image}
            href={service.href}
          />
        ))}
      </div>

      <section className="mt-40 border-t border-white/10 pt-24 text-center">
        <h2 className="font-serif text-4xl mb-8">Precisa de um Design Personalizado?</h2>
        <p className="text-foreground/60 max-w-2xl mx-auto mb-12">
          Contacte a nossa equipa especializada para adaptar um serviço especificamente às necessidades únicas do seu evento.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-10 py-4 liquid-glass border border-white/20 text-gold uppercase text-xs font-bold tracking-widest transition-all duration-300"
        >
          Solicitar Orçamento
        </motion.button>
      </section>
    </div>
  );
}
