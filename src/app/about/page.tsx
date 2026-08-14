"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Layout, PenTool, Sparkles } from "lucide-react";

export default function About() {
  const team = [
    { name: "Jojo Kottarakkara", role: "Fundador e Designer Líder", img: "https://eventgramusa.com/images/jojo-k.jpg" },
    { name: "Dany Sam", role: "Líder de Operações", img: "https://eventgramusa.com/images/image-1-t.webp" },
    { name: "Albert Jose", role: "Estrategista Criativo", img: "https://eventgramusa.com/images/image-2-t.webp" },
    { name: "Jithu Job", role: "Coordenador de Produção", img: "https://eventgramusa.com/images/image-3-t.webp" },
  ];

  const philosophy = [
    {
      title: "Design de Eventos",
      icon: <Layout className="w-8 h-8 text-gold" />,
      desc: "Somos especialistas em projetar decorações que definem a atmosfera da sua celebração. Desde composições florais e estilização de palco até iluminação e design espacial, nosso trabalho foca na criação de ambientes coesos que elevam toda a experiência do evento.",
    },
    {
      title: "Execução de Design",
      icon: <PenTool className="w-8 h-8 text-gold" />,
      desc: "Colaboramos estreitamente com planejadores, locais e famílias para garantir que cada design reflita a visão do cliente, mantendo uma estética refinada. Nossa experiência abrange casamentos, celebrações privadas e eventos com curadoria onde a decoração desempenha um papel central na narrativa.",
    },
    {
      title: "Estilização Personalizada",
      icon: <Sparkles className="w-8 h-8 text-gold" />,
      desc: "Em vez de seguir modelos, abordamos cada projeto como um design personalizado — adaptado ao espaço, à ocasião e às pessoas celebradas. Criamos ambientes que são tão únicos quanto os momentos que contêm.",
    },
  ];

  const locations = [
    "New Jersey", "New York", "Pennsylvania", "Connecticut", "Delaware", "Atlanta", "Illinois", "Maryland", "Texas"
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" as const }
  };

  return (
    <div className="flex flex-col w-full overflow-hidden bg-background">
      {/* HERO SECTION */}
      <section className="relative w-full h-[70vh] flex flex-col items-center justify-center overflow-hidden">
        <Image
          src="https://eventgramusa.com/images/about1img.png"
          alt="About NOAME"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 text-center px-4 max-w-4xl"
        >
          <h1 className="font-serif text-4xl md:text-7xl font-bold text-white mb-6 drop-shadow-xl leading-tight">
            Onde as Celebrações se Tornam <br/> <span className="italic text-gold">Memórias Duradouras</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/90 font-light max-w-3xl mx-auto">
            Na NOAME, criamos decorações de casamentos e eventos que refletem tradição, emoção e as histórias que mais importam.
          </p>
        </motion.div>
      </section>

      {/* OUR STORY */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            {...fadeInUp}
            className="grid grid-cols-2 gap-4 h-[500px] md:h-[700px]"
          >
            <div className="relative rounded-3xl overflow-hidden mt-12 mb-4">
              <Image 
                src="https://eventgramusa.com/images/image-about-1.webp"
                alt="Story 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative rounded-3xl overflow-hidden mb-12 mt-4 shadow-2xl">
              <Image 
                src="https://eventgramusa.com/images/image-about-2.webp"
                alt="Story 2"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div 
            {...fadeInUp}
            className="space-y-8"
          >
            <div className="space-y-4">
               <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-gold">Nossa História</h3>
               <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight uppercase">Um Legado de <br/> Celebração</h2>
            </div>
            <div className="space-y-6 text-foreground/80 text-lg leading-relaxed font-light">
              <p>
                A NOAME foi construída sobre uma base de celebração, família e tradição. Com mais de 35 anos de experiência enraizada em um negócio de eventos liderado pela família, as celebrações sempre fizeram parte da nossa vida cotidiana.
              </p>
              <p>
                Estar cercado por casamentos, tradições e encontros culturais moldou nosso entendimento do que realmente torna um evento especial. Essa paixão continua a definir a NOAME hoje.
              </p>
              <p>
                Seja a celebração grande ou íntima, nossa abordagem permanece profundamente pessoal e intencional. Cada evento que assumimos é moldado por essa crença — abordado com cuidado, criatividade e respeito pela história que representa.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOUNDER'S MESSAGE */}
      <section className="py-24 bg-foreground/5 w-full">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            {...fadeInUp}
            className="space-y-8 order-2 lg:order-1"
          >
             <div className="space-y-4">
                <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-gold">Mensagem do Fundador</h3>
                <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight uppercase">Criando Memórias,<br/>Um Detalhe de Cada Vez</h2>
             </div>
             <div className="space-y-6 text-foreground/80 leading-relaxed font-light text-lg">
                <p>
                   A jornada da NOAME tomou forma quando essa base inicial foi levada para o exterior. Em 2019, a marca começou com uma intenção simples — apoiar celebrações comunitárias e culturais com o mesmo cuidado, disciplina e respeito aprendidos ao longo dos anos.
                </p>
                <p>
                   No momento de sua fundação, a NOAME estava entre as primeiras empresas de gestão de eventos de serviço completo atendendo à comunidade com foco em qualidade e confiança.
                </p>
                <p>
                   O que começou como um pequeno esforço cresceu constantemente através da confiança e do boca a boca. O crescimento nunca mudou a forma como trabalhamos — ele aguçou nosso foco na criação de ambientes que parecem compostos e emocionalmente ressonantes.
                </p>
             </div>
             <div className="pt-4 border-t border-gold/20">
                <h4 className="font-serif text-2xl font-bold text-gold">Jojo Kottarakkara</h4>
                <p className="text-sm uppercase tracking-widest text-foreground/50 mt-1">Fundador, NOAME</p>
             </div>
          </motion.div>

          <motion.div 
            {...fadeInUp}
            className="relative h-[500px] md:h-[650px] rounded-full overflow-hidden border-8 border-white/50 dark:border-black/50 shadow-2xl order-1 lg:order-2"
          >
            <Image 
              src="https://eventgramusa.com/images/jojo-k.jpg" 
              alt="Jojo Kottarakkara" 
              fill 
              className="object-cover scale-105 hover:scale-110 transition-transform duration-1000"
            />
          </motion.div>
        </div>
      </section>

      {/* PHILOSOPHY / WHAT WE CREATE */}
      <section className="py-32 px-6 max-w-7xl mx-auto w-full">
         <div className="text-center mb-20">
            <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-gold mb-4">Nossa Filosofia</h3>
            <h2 className="font-serif text-4xl md:text-5xl font-bold uppercase">O que Criamos</h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophy.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.8 }}
                className="liquid-glass-card p-10 flex flex-col items-center text-center hover:scale-105 transition-transform duration-500"
              >
                <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mb-8 border border-gold/20">
                   {item.icon}
                </div>
                <h3 className="font-serif text-2xl font-bold mb-6 text-gold uppercase tracking-wider">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
         </div>
      </section>

      {/* BEHIND THE DESIGN (Vision vs Reality) */}
      <section className="py-24 bg-foreground/5 w-full">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
               <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-gold mb-4">Do Conceito à Criação</h3>
               <h2 className="font-serif text-4xl md:text-5xl font-bold uppercase">Por Trás do Design</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 h-auto">
               <motion.div {...fadeInUp} className="space-y-6">
                  <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-xl grayscale hover:grayscale-0 transition-all duration-700">
                    <Image src="https://eventgramusa.com/images/image-ret.webp" fill alt="Vision" className="object-cover" />
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-serif font-bold text-gold uppercase tracking-widest">A Visão</h4>
                    <p className="text-foreground/60 text-sm mt-1 italic">Esboços e Moodboards</p>
                  </div>
               </motion.div>

               <motion.div {...fadeInUp} className="space-y-6 md:mt-24">
                  <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-xl border-4 border-gold/20">
                    <Image src="https://eventgramusa.com/images/imagereescs.webp" fill alt="Reality" className="object-cover" />
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-serif font-bold text-gold uppercase tracking-widest">A Realidade</h4>
                    <p className="text-foreground/60 text-sm mt-1 italic">Execução no Local</p>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* THE FAMILY / TEAM */}
      <section className="py-32 px-6 max-w-7xl mx-auto w-full">
         <div className="text-center mb-16">
            <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-gold mb-4">Conheça a Equipe</h3>
            <h2 className="font-serif text-4xl md:text-5xl font-bold uppercase">A Família NOAME</h2>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {team.map((member, idx) => (
              <motion.div 
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="group text-center"
              >
                <div className="relative w-full h-115 aspect-[4/5] rounded-2xl overflow-hidden mb-6 shadow-lg">
                   <Image 
                     src={member.img} 
                     alt={member.name} 
                     fill 
                     className="object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h4 className="font-serif text-2xl font-bold uppercase tracking-wide">{member.name}</h4>
                <p className="text-gold text-sm font-bold uppercase tracking-[0.2em] mt-2">{member.role}</p>
              </motion.div>
            ))}
         </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-32 px-6 w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/80 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069"
          alt="Celebrate Events"
          fill
          className="object-cover object-center grayscale opacity-40"
        />
        
        <motion.div 
          {...fadeInUp}
          className="relative z-20 text-center max-w-4xl liquid-glass-card p-10 md:p-20 border border-white/10"
        >
          <h2 className="font-serif text-4xl md:text-7xl font-bold text-white mb-8 uppercase leading-tight">Celebre <br/> com <span className="text-gold italic">Estilo</span></h2>
          <p className="text-white/80 text-xl mb-12 font-light leading-relaxed">
            Cada evento merece um cenário criado com coração, intenção e alegria. Se você está pronto para celebrar este momento especial, adoraríamos dar vida à sua visão.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="/contact" 
              className="px-12 py-5 rounded-full bg-gold text-black font-bold uppercase tracking-widest hover:bg-gold-light transition-all transform hover:scale-105 w-full sm:w-auto"
            >
              Reserve seu Evento
            </Link>
            <Link 
              href="/contact" 
              className="px-12 py-5 rounded-full border-2 border-white/50 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-all transform hover:scale-105 w-full sm:w-auto"
            >
              Contacte-nos
            </Link>
          </div>
        </motion.div>
      </section>
      
    </div>
  );
}
