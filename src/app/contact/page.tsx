import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock, Sparkles, MessageCircle, Map as LucideMap } from "lucide-react";

/**
 * Componentes de Ícones de Redes Sociais Customizados
 * Lucide v1.7.0 não inclui marcas como Facebook/Instagram.
 */
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

/**
 * Página de Contato
 * 
 * Estrutura:
 * 1. Hero Section com imagem de fundo e títulos elegantes em Serif.
 * 2. Card informativo "Why Choose Eventgram?".
 * 3. Seção do Formulário com design Liquid Glass.
 * 4. Cards de Informação de Contato.
 */
export default function ContactPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      
      {/* --- SECTION 1: HERO (IMAGEM DE FUNDO E TÍTULO) --- */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Background Image com Overlay (Filtro Escuro para Leitura) */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop')",
            filter: "brightness(0.6) blur(2px)" 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-1" />

        {/* Conteúdo do Hero (Títulos e Tipografia Premium) */}
        <div className="relative z-10 max-w-4xl">
          <p className="text-gold font-bold tracking-[0.3em] uppercase text-sm mb-4">
            Let&apos;s Create Something Beautiful
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg leading-tight">
            Let&apos;s Plan Your <br className="hidden md:block" /> Celebration with NOAME
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-medium tracking-widest uppercase">
            Weddings • Engagements • Corporate • Celebrations
          </p>
        </div>
      </section>

      {/* --- SECTION 2: WHY CHOOSE & FORMULÁRIO --- */}
      <section className="relative z-20 px-4 pb-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* COLUNA: O Formulário de Contato Principal (Primeiro no Mobile) */}
        <div className="lg:col-span-8 order-1 lg:order-2">
          <ContactForm />
        </div>

        {/* COLUNA: Por que nos escolher e Informações de Contato (Segundo no Mobile) */}
        <div className="lg:col-span-4 space-y-8 order-2 lg:order-1">
          
          {/* Card "Why Choose NOAME?" (Design Liquid Glass) */}
          <div className="liquid-glass-card p-8 rounded-3xl border border-white/20 shadow-xl">
            <h3 className="font-serif text-2xl font-bold mb-6 text-gold">Why Choose NOAME?</h3>
            <ul className="space-y-4">
              {[
                { icon: <Sparkles className="w-5 h-5 text-gold" />, text: "100+ events crafted" },
                { icon: <Clock className="w-5 h-5 text-gold" />, text: "Response within 24 hours" },
                { icon: <Sparkles className="w-5 h-5 text-gold" />, text: "Bespoke décor" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground/90 font-medium">
                  {item.icon}
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cards de Contato Rápido (Email, Telefone, WhatsApp, Endereço) */}
          <div className="space-y-4">
            {/* E-mail Link */}
           {/* <a 
              href="mailto:eventgramusa@gmail.com"
              className="flex items-center gap-4 p-4 liquid-glass-card rounded-2xl border border-white/10 hover:border-gold/50 transition-colors group"
            >
              <div className="p-3 bg-gold/10 rounded-xl group-hover:bg-gold/20 transition-colors">
                <Mail className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase">Email Us</p>
                <p className="font-medium">eventgramusa@gmail.com</p>
              </div>
            </a>*/}

            {/* WhatsApp Link (Mobile First App Redirection) */}
            <a 
              href="https://wa.me/258842229892"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 liquid-glass-card rounded-2xl border border-white/10 hover:border-gold/50 transition-colors group"
            >
              <div className="p-3 bg-green-500/10 rounded-xl group-hover:bg-green-500/20 transition-colors">
                <MessageCircle className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase">WhatsApp Us</p>
                <p className="font-medium">+258 84 222 9892</p>
              </div>
            </a>

            {/* Telefone Link */}
            <a 
              href="tel:+258842229892"
              className="flex items-center gap-4 p-4 liquid-glass-card rounded-2xl border border-white/10 hover:border-gold/50 transition-colors group"
            >
              <div className="p-3 bg-gold/10 rounded-xl group-hover:bg-gold/20 transition-colors">
                <Phone className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase">Call Us</p>
                <p className="font-medium">+258 84 222 9892</p>
              </div>
            </a>

            {/* Endereço (Design Estático) */}
            <div className="flex items-center gap-4 p-4 liquid-glass-card rounded-2xl border border-white/10">
              <div className="p-3 bg-gold/10 rounded-xl">
                <MapPin className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase">Our Address</p>
                <p className="font-medium"> Av. do Trabalho, Maputo</p>
              </div>
            </div>
          </div>

          {/* Ícones de Redes Sociais no final da coluna lateral */}
          <div className="flex gap-4 px-2">
            {[InstagramIcon, FacebookIcon].map((Icon, i) => (
              <a key={i} href="#" className="p-3 liquid-glass-card rounded-full border border-white/10 hover:text-gold transition-colors">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
