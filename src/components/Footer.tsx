"use client"; // Necessário se houver interatividade futura, mas mantido por consistência

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full liquid-glass-card mt-24 py-12 px-6 rounded-t-3xl border border-t-white/20 border-x-0 border-b-0 rounded-b-none bg-background/50">
      
      {/* Grid principal do footer: 1 coluna no mobile, 3 colunas em telas médias (md) ou maiores */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* ==========================================
            SEÇÃO 1: LOGO DINÂMICA E DESCRIÇÃO
        ========================================== */}
        <div>
          <Link href="/" className="inline-block mb-4">
            {/* Logo Tema Claro. Usando Tailwind CSS puro para alternância rápida (sem flicker) */}
            <img 
              src="/logo/noame_logo_lighttheme.png" 
              alt="NOAME Logo" 
              className="h-10 w-auto block dark:hidden object-contain"
            />
            {/* Logo Tema Escuro. Escondida por padrão. */}
            <img 
              src="/logo/noame_logo_darktheme.png" 
              alt="NOAME Logo" 
              className="h-10 w-auto hidden dark:block object-contain"
            />
          </Link>
          <p className="text-foreground/70 flex-grow max-w-sm mb-6">
            Serviços profissionais de decoração de eventos para casamentos e todas as ocasiões especiais. Criando celebrações inesquecíveis.
          </p>
        </div>

        {/* ==========================================
            SEÇÃO 2: LINKS DE NAVEGAÇÃO
        ========================================== */}
        <div className="flex flex-col space-y-3">
          <h3 className="font-bold text-lg mb-2">Navegação</h3>
          <Link href="/" className="hover:text-gold transition-colors">Início</Link>
          <Link href="/services" className="hover:text-gold transition-colors">Serviços</Link>
          <Link href="/about" className="hover:text-gold transition-colors">Sobre Nós</Link>
          {/*<Link href="/portfolio" className="hover:text-gold transition-colors">Portfólio</Link>*/}
        </div>

        {/* ==========================================
            SEÇÃO 3: INFORMAÇÕES DE CONTACTO
        ========================================== */}
        <div className="flex flex-col space-y-3">
          <h3 className="font-bold text-lg mb-2">Contacte-nos</h3>
          
          <a href="https://maps.app.goo.gl/7MdkdAVm3SApQdbm9" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors flex items-start gap-2">
            <span>📍</span>
            Av. do Trabalho, Maputo
          </a>
          <a href="tel:+258842229892" className="hover:text-gold transition-colors flex items-center gap-2">
            <span>📞</span>
            +258 84 222 9892
          </a>
         {/* <a href="mailto:eventgramusa@gmail.com" className="hover:text-gold transition-colors flex items-center gap-2">
            <span>✉️</span>
            eventgramusa@gmail.com
          </a>*/}
        </div>
      </div>
      
      {/* ==========================================
            SEÇÃO 4: REDES SOCIAIS E COPYRIGHT
      ========================================== */}
      <div className="max-w-7xl mx-auto mt-12 flex flex-wrap justify-center gap-6 text-sm font-semibold tracking-wide">
          <a href="https://www.tiktok.com/@noame_decoracoeseservico?is_from_webapp=1&sender_device=pc" className="hover:text-gold transition-colors flex items-center gap-2">TikTok</a>
          {/* Abertura da rede social em nova aba com práticas de segurança de rel */}
          <a href="https://www.instagram.com/noame_decoracoeseservicos" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors flex items-center gap-2">Instagram</a>
      </div>
      
      {/* Dynamic Date garante que o ano está sempre atualizado */}
      <div className="mt-8 pt-8 border-t border-black/5 dark:border-white/10 text-center text-sm text-foreground/50">
        © {new Date().getFullYear()} NOAME. Criando Celebrações Inesquecíveis.
      </div>
    </footer>
  );
}