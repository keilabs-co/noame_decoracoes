"use client"; // Obrigatório no Next.js App Router para usar hooks do React e interatividade

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  // Hooks para gerenciamento do tema (Dark/Light Mode)
  const { setTheme, theme, systemTheme } = useTheme();
  
  // Estado para prevenir erros de "Hydration Mismatch" no Next.js.
  // Garante que a UI que depende do tema só seja renderizada após o componente ser montado no cliente.
  const [mounted, setMounted] = React.useState(false);
  
  // Estado para controlar a abertura/fechamento do menu mobile
  const [isOpen, setIsOpen] = React.useState(false);
  
  // Hook para saber em qual rota o utilizador está (útil para destacar o link ativo)
  const pathname = usePathname();

  // Sinaliza que o componente foi montado no cliente
  React.useEffect(() => setMounted(true), []);

  const links = [
    { name: "Início", href: "/" },
    { name: "Sobre Nós", href: "/about" },
    { name: "Serviços", href: "/services" },
    { name: "Portfólio", href: "/portfolio" },
    { name: "Testemunhos", href: "/testemunhos" },
  ];

  // Função auxiliar para alternar o tema, respeitando as preferências do sistema operacional
  const toggleTheme = () => {
    const current = theme === "system" ? systemTheme : theme;
    setTheme(current === "dark" ? "light" : "dark");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <div className="mx-auto max-w-7xl liquid-glass rounded-2xl flex items-center justify-between px-6 py-3 border border-white/20">
        
        {/* ==========================================
            LOGO DINÂMICA (DARK/LIGHT)
            NOTA PARA DEVS: Não use `theme === 'dark' ? imgA : imgB` aqui.
            Usar as classes do Tailwind (`dark:hidden` e `dark:block`) faz a troca via CSS.
            Isso evita o "flicker" (piscar de tela) durante o carregamento inicial (SSR).
        ========================================== */}
        <Link href="/" className="flex items-center">
          {/* Visível no Tema Claro, Oculto no Tema Escuro */}
          <img 
            src="/logo/noame_logo_lighttheme.png" 
            alt="NOAME Logo" 
            className="h-10 w-auto block dark:hidden object-contain"
          />
          {/* Oculto por padrão, Visível apenas no Tema Escuro */}
          <img 
            src="/logo/noame_logo_darktheme.png" 
            alt="NOAME Logo" 
            className="h-10 w-auto hidden dark:block object-contain"
          />
        </Link>

        {/* ==========================================
            NAVEGAÇÃO DESKTOP (Escondida em telas menores que 'md')
        ========================================== */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              // Aplica a cor 'gold' dinamicamente se a rota atual for igual ao href do link
              className={`text-sm font-medium transition-colors hover:text-gold ${
                pathname === link.href ? "text-gold" : "text-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Botão de Toggle do Tema */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {/* Só mostra o ícone correto após a montagem para evitar flicker de hidratação */}
            {mounted && (theme === "dark" || (theme === "system" && systemTheme === "dark")) ? (
              <Sun className="w-5 h-5 text-gold" />
            ) : (
              <Moon className="w-5 h-5 text-gold" />
            )}
          </button>

          <Link href="/contact" className="px-5 py-2 rounded-full bg-foreground text-background text-sm font-semibold hover:opacity-90 transition-opacity">
            Agendar Evento
          </Link>
        </div>

        {/* ==========================================
            CONTROLES MOBILE (Menu Hambúrguer e Tema)
        ========================================== */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            {mounted && (theme === "dark" || (theme === "system" && systemTheme === "dark")) ? (
              <Sun className="w-5 h-5 text-gold" />
            ) : (
              <Moon className="w-5 h-5 text-gold" />
            )}
          </button>
          
          {/* Alterna o ícone entre Hamburger (abrir) e X (fechar) */}
          <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ==========================================
            MENU DROPDOWN MOBILE (Com animação Framer Motion)
      ========================================== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[80px] left-4 right-4 liquid-glass-card p-6 flex flex-col gap-4 md:hidden border border-white/20"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)} // Fecha o menu ao clicar num link
                className={`text-lg font-medium transition-colors hover:text-gold ${
                  pathname === link.href ? "text-gold" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 px-5 py-3 rounded-xl bg-foreground text-background text-center font-semibold hover:opacity-90 transition-opacity"
            >
              Agendar Evento
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}