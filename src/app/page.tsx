"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";

export default function Home() {
  const stats = [
    { value: "7+", label: "Anos de Experiência" },
    { value: "500+", label: "Eventos Decorados" },
    { value: "50+", label: "Espaços Estilizados" },
    { value: "100%", label: "Satisfação dos Clientes" },
  ];

  const services = [
    { title: "Serviços Corporativos", link: "/services/corporativos", img: "/media/services/corporativos/photos/corporative_cover.JPG" },
    { title: "Casamentos", link: "/services/casamentos",img: "/media/services/casamentos/photos/wedding_cover.JPG" },
    { title: "Formações", link: "/services/formacoes", img: "/media/services/formacoes/photos/formacoes_cover.JPG" },
    { title: "Catering", link: "/services/catering", img: "/media/services/catering/photos/catering_cover.JPG" },
    { title: "Locação de espaço", link: "/services/locacao", img: "/media/services/locacao/photos/lococao_cover.JPG" },
    { title: "Festas particulares", link: "/services/festas", img: "/media/services/festas/photos/parties_cover.JPG" },
  ];

  const masterpieces = [
    { title: "Casamentos Elegantes", img: "/media/services/casamentos/photos/wedding_cover.JPG" },
    { title: "Catering & Gastronomia", img: "/media/services/catering/photos/catering_cover.JPG" },
    { title: "Eventos Corporativos", img: "/media/services/corporativos/photos/corporative_cover.JPG" },
    { title: "Festas & Celebrações", img: "/media/services/festas/photos/parties_cover.JPG" },
    { title: "Formações & Graduações", img: "/media/services/formacoes/photos/formacoes_cover.JPG" },
    { title: "Locação de Equipamentos", img: "/media/services/locacao/photos/lococao_cover.JPG" }
  ];

  const howItWorks = [
    { title: "Descoberta e Direção", desc: "Começamos com uma conversa focada para entender seu evento, local e visão de design." },
    { title: "Design e Curadoria", desc: "Nossos designers traduzem suas ideias em um conceito de decoração coeso. Paletas de cores, texturas e florais." },
    { title: "Preparação e Coordenação", desc: "Coordenamos de perto com os locais e fornecedores relevantes para alinhar os requisitos de montagem." },
    { title: "Instalação e Suporte", desc: "No dia do evento, nossa equipe gerencia a instalação completa da decoração e o estilo." }
  ];

  const testimonials = [
    { name: "Sarah & Michael", text: "A NOAME transformou nossa visão em uma realidade que superou todas as expectativas. Seus detalhes e talento tornaram o dia do nosso casamento absolutamente mágico." },
    { name: "James & Robert", text: "Desde a primeira consulta até a última dança, a equipe foi excepcional. Profissional, graciosa, e eles tornaram o processo de planejamento uma alegria." },
    { name: "Jennifer & David", text: "A melhor decisão que tomamos. Nossos convidados não param de falar sobre a decoração. Obrigado por tornar nosso dia inesquecível!" },
    { name: "Emily & Alex", text: "Montagem absolutamente deslumbrante. Eles capturaram exatamente o que queríamos e fizeram todo o local parecer espetacular. Altamente recomendado!" }
  ];

  const locations = [
    "New Jersey", "New York", "Pennsylvania", "Connecticut", "Delaware", "Atlanta", "Illinois", "Maryland", "Texas"
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* HERO SECTION - VIDEO BACKGROUND AREA */}
      <section className="relative w-full min-h-[70vh] md:min-h-[80vh] flex flex-col items-center justify-center overflow-hidden px-4 md:px-8 pt-20 pb-16">
        {/* PROGRESSIVE BACKGROUND VIDEO */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          {/* PLACEHOLDER VIDEO - CHANGE URL LATER */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            crossOrigin="anonymous"
            src="https://videos.pexels.com/video-files/3103138/3103138-uhd_2560_1440_25fps.mp4"
            className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-20 text-center w-full max-w-5xl"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-lg leading-tight"
          >
            Um Destino Completo <br/> Para <span className="text-gold text-gold-gradient italic">Todos os Seus Eventos</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow font-light"
          >
            Desenhamos experiências intemporais com decoração elegante, detalhes refinados e execução impecável.
          </motion.p>
        </motion.div>
      </section>

      {/* STATS & CTA AREA - SOLID BACKGROUND */}
      <section className="relative z-20 bg-background py-16 px-4 md:px-8 -mt-8 md:-mt-12 rounded-t-[40px] md:rounded-t-[80px]">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          {/* STATS CARDS */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-4xl mb-12"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="liquid-glass border border-white/10 rounded-2xl p-4 md:p-6 text-center shadow-lg">
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-gold mb-1">{stat.value}</h3>
                <p className="text-xs md:text-sm text-foreground/70 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* CONTACT BUTTON */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link 
              href="/contact" 
              className="inline-block px-10 py-4 text-sm md:text-base rounded-full bg-gold text-black font-semibold hover:bg-gold-light transition-all shadow-xl hover:shadow-gold/20"
            >
              Contacte-nos
            </Link>
          </motion.div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full text-center">
        <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-gold mb-4">Quem Somos</h2>
        <h3 className="font-serif text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
          Desenhamos Sonhos, <span className="italic text-gold">Criamos Memórias</span>
        </h3>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-16 leading-relaxed">
          Cada grande evento começa com uma visão. Com mais de 7 anos de experiência como decoradores premium de eventos e casamentos, a NOAME traduz essa visão em ambientes elegantes e personalizados. De festas particulares íntimas e casamentos grandiosos a produções corporativas de grande escala.
        </p>

        {/* DYNAMIC SERVICE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <Link href={service.link} key={idx} className={`group block relative h-[400px] rounded-3xl overflow-hidden cursor-pointer ${idx >= 3 ? 'lg:col-span-1' : ''}`}>
              {/* IMAGE BACKGROUND */}
              <Image
                alt={service.title}
                fill
                priority={idx < 3} 
                quality={80} 
                src={service.img}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h4 className="font-serif text-3xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{service.title}</h4>
                <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Clique para explorar →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PORTFOLIO / MASTERPIECES */}
      <section className="py-24 bg-foreground/5 relative w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-gold mb-4">Casamentos e Eventos Reais</h2>
            <h3 className="font-serif text-4xl md:text-5xl font-bold">Nossas Últimas Obras-Primas</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {masterpieces.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative h-[450px] rounded-2xl overflow-hidden shadow-xl"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h4 className="font-serif text-2xl font-bold text-white mb-2">{item.title}</h4>
                  <div className="w-12 h-1 bg-gold transition-all duration-300 group-hover:w-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-gold mb-4">Como Funciona</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold">Da primeira conversa à revelação final</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorks.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Connector line for desktop */}
              {idx < howItWorks.length - 1 && (
                <div className="hidden lg:block absolute top-[40px] left-[60%] w-full h-[1px] border-t-2 border-dashed border-gold/30" />
              )}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex flex-col items-center text-center relative z-10"
              >
                <div className="w-20 h-20 rounded-full bg-foreground text-background flex items-center justify-center font-serif text-3xl font-bold mb-6 border-4 border-gold shadow-lg">
                  {idx + 1}
                </div>
                <h4 className="font-serif text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-foreground/70">{step.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-foreground/5 relative w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-gold mb-4">Amor dos Clientes</h2>
            <h3 className="font-serif text-4xl md:text-5xl font-bold">Palavras Gentis dos Nossos Clientes</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testi, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="liquid-glass-card p-8 relative"
              >
                <div className="text-gold mb-6">
                  <Star className="inline-block w-5 h-5 fill-current" />
                  <Star className="inline-block w-5 h-5 fill-current" />
                  <Star className="inline-block w-5 h-5 fill-current" />
                  <Star className="inline-block w-5 h-5 fill-current" />
                  <Star className="inline-block w-5 h-5 fill-current" />
                </div>
                <p className="text-foreground/80 italic mb-8 relative z-10">&quot;{testi.text}&quot;</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-foreground/20 overflow-hidden relative">
                     {/* PLACEHOLDER AVATAR */}
                     <Image src={`https://i.pravatar.cc/150?img=${idx + 10}`} alt={testi.name} fill className="object-cover" />
                  </div>
                  <h5 className="font-bold text-sm">{testi.name}</h5>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHERE WE CREATE MAGIC (MARQUEE) */}
      <section className="py-16 w-full overflow-hidden border-y border-foreground/10 bg-background">
        <div className="text-center mb-10 px-6">
          <h3 className="font-serif text-4xl font-bold">Onde Criamos Magia</h3>
          <p className="text-foreground/70 mt-2">Atendendo clientes em diversas regiões</p>
        </div>
        
        <div className="relative flex overflow-x-hidden group">
          <div className="py-4 animate-marquee whitespace-nowrap flex items-center">
            {[...locations, ...locations, ...locations].map((loc, idx) => (
              <span key={idx} className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-foreground/5 to-foreground/20 stroke-text px-10">
                {loc}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CELEBRATE IN STYLE - FINAL CTA */}
      <section className="relative py-32 px-6 w-full flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069"
          alt="Celebrate Events"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/70" />
        
        <div className="relative z-10 text-center max-w-3xl mx-auto liquid-glass-card p-10 md:p-16 border border-white/10">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">Celebre com Estilo</h2>
          <p className="text-white/80 text-lg mb-10">
            Cada evento merece um cenário criado com coração, intenção e alegria. Se você está pronto para celebrar este momento especial, adoraríamos dar vida à sua visão.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-8 py-4 rounded-full bg-gold text-black font-semibold hover:bg-gold-light transition-colors w-full sm:w-auto"
            >
              Reserve seu Evento
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-4 rounded-full border border-white/50 text-white font-semibold hover:bg-white/10 transition-colors w-full sm:w-auto"
            >
              Contacte-nos
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
}