"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    name: "Sarah & David",
    service: "Decoração de Casamento",
    text: "A NOAME transformou nosso casamento em um sonho. Cada detalhe foi mais do que poderíamos imaginar. Serviço de classe mundial!",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop",
    clientLove: "Sentimo-nos muito ouvidos e compreendidos durante todo o processo de design."
  },
  {
    name: "Corporate Galore",
    service: "Eventos Corporativos",
    text: "A sofisticação que a NOAME trouxe à nossa gala anual foi inigualável. Nossos clientes ainda estão falando da decoração.",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop",
    clientLove: "Execução perfeita e gosto impecável."
  },
  {
    name: "Família Miller",
    service: "Festas Privadas",
    text: "Nossa festa de aniversário foi mágica graças ao gênio criativo desta equipe. Eles realmente se importam com a visão do cliente.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    clientLove: "A atmosfera era exatamente o que queríamos — íntima mas grandiosa."
  },
  {
    name: "Grace & Michael",
    service: "Casamentos",
    text: "Tudo estava perfeito. Os detalhes em ouro e a sensação de vidro líquido realmente fizeram nosso evento se destacar de tudo o que já vimos.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    clientLove: "Profissionalismo e criatividade no seu melhor."
  },
  {
    name: "Emily & Alex",
    service: "Casamentos no Jardim",
    text: "O tema do jardim botânico foi de tirar o fôlego. A NOAME tem um olho para a natureza e a elegância que é verdadeiramente único e inspirador.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
    clientLove: "Uma abordagem refrescante e orgânica ao luxo."
  },
  {
    name: "TechSummit 2024",
    service: "Conferências de Tecnologia",
    text: "Profissional, pontual e futurista. As instalações de LED e a estética moderna foram o destaque da nossa conferência internacional.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
    clientLove: "Fluxos de trabalho eficientes e um resultado final deslumbrante."
  },
  {
    name: "15 Anos da Livia",
    service: "Celebrações",
    text: "A festa da minha filha pareceu um conto de fadas ganhando vida. Obrigado por fazê-la se sentir como uma princesa no seu dia especial!",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2070&auto=format&fit=crop",
    clientLove: "O dia mais mágico da vida dela até agora."
  },
  {
    name: "Gala Henderson",
    service: "Eventos Beneficentes",
    text: "Elegância e graça absolutas. A atenção aos detalhes nas mesas e na decoração geral foi soberba e muito elogiada pelos nossos convidados.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop",
    clientLove: "Gosto excepcional que elevou nossa causa."
  }
];

export default function TestemunhosPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <header className="mb-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-5xl md:text-7xl font-bold mb-6 uppercase tracking-tighter"
        >
          Testemunhos
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gold tracking-[0.4em] uppercase text-xs font-bold"
        >
          Amor e Histórias dos Clientes
        </motion.p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (idx % 2) * 0.1, duration: 0.6 }}
            className="liquid-glass border border-white/10 overflow-hidden flex flex-col md:flex-row h-full group"
          >
            <div className="w-full md:w-1/3 h-64 md:h-auto relative overflow-hidden">
              <Image
                src={t.image}
                alt={t.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="p-8 md:p-10 flex-1 flex flex-col justify-center bg-background/40">
              <span className="text-gold text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                {t.service}
              </span>
              <p className="font-serif text-lg md:text-xl italic mb-8 leading-relaxed text-foreground/90">
                "{t.text}"
              </p>
              <div>
                <h4 className="font-bold text-base uppercase tracking-widest">{t.name}</h4>
                <p className="text-foreground/40 text-xs mt-2 uppercase tracking-wider">{t.clientLove}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <section className="mt-40 text-center py-24 border-t border-white/5">
        <h3 className="font-serif text-4xl md:text-5xl mb-12">Pronto para criar sua própria história?</h3>
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-14 py-5 bg-gold text-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-gold-light transition-all shadow-xl shadow-gold/10 cursor-pointer"
          >
            Contacte-nos
          </motion.button>
        </Link>
      </section>
    </div>
  );
}
