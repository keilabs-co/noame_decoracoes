"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { submitContactForm } from "@/app/contact/actions";

/**
 * Componente de Formulário de Contato
 * Replicando exatamente a funcionalidade e campos da Eventgram USA.
 * 
 * DESIGN: Liquid Glass, elegante, minimalista, com acentos em Sage Green (#5F6F52).
 */
export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);



  // Lista de origens (como ouviram sobre nós)

  const referralSources = [
    "Instagram",
    "Facebook",
    "Busca no Google",
    "Amigo/Indicação",
    "Zola",
    "The Knot",
    "Outro",
  ];

  const additionalServices = [
    { id: "catering", label: "Catering" },
    { id: "assessoria", label: "Assessoria" },
    { id: "staff", label: "Staff" },
    { id: "aluguer_espaco", label: "Aluguer de espaço" },
    { id: "buffet", label: "Buffet" },
    { id: "fotografia", label: "Fotografia" },
    { id: "bar", label: "Bar" },
  ];

  /**
   * Função para lidar com o envio do formulário.
   * Utiliza a Server Action submitContactForm por baixo dos panos.
   */
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    const formData = new FormData(e.currentTarget);
    const result = await submitContactForm(formData);

    setIsSubmitting(false);
    if (result.success) {
      setMessage({ type: "success", text: result.message });
      (e.target as HTMLFormElement).reset(); // Limpa o formulário em caso de sucesso
    } else {
      setMessage({ type: "error", text: result.message });
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full max-w-4xl mx-auto p-8 liquid-glass-card border border-white/20 rounded-3xl shadow-2xl overflow-hidden mb-20"
    >
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* NOME COMPLETO */}
        <div className="flex flex-col gap-2">
          <label htmlFor="fullName" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Nome Completo <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Seu nome"
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all outline-hidden text-foreground"
          />
        </div>

        {/* E-MAIL */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            E-mail <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="email"
            name="email"
            id="email"
            placeholder="seu@email.com"
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all outline-hidden text-foreground"
          />
        </div>

        {/* TELEFONE */}
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Telefone <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="tel"
            name="phone"
            id="phone"
            placeholder="+351 000 000 000"
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all outline-hidden text-foreground"
          />
        </div>

        {/* TIPO DE EVENTO (Agora input de texto) */}
        <div className="flex flex-col gap-2">
          <label htmlFor="eventType" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Tipo de Evento <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="text"
            name="eventType"
            id="eventType"
            placeholder="Ex: Casamento, Aniversário..."
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all outline-hidden text-foreground"
          />
        </div>

        {/* DATA DO EVENTO */}
        <div className="flex flex-col gap-2">
          <label htmlFor="eventTime" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
             Horário do Evento <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="text"
            name="eventTime"
            id="eventTime"
            placeholder="Ex: 15:00 ou Período da tarde"
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all outline-hidden text-foreground"
          />
        </div>

        {/* TEMA / PALETA */}
        <div className="flex flex-col gap-2">
          <label htmlFor="theme" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
             Tema e/ou Paleta de Cores <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="text"
            name="theme"
            id="theme"
            placeholder="Ex: Minimalista Gold & White"
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all outline-hidden text-foreground"
          />
        </div>

        {/* LOCALIZAÇÃO (VENUES) */}
        <div className="flex flex-col gap-2">
          <label htmlFor="location" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Local do Evento <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="text"
            name="location"
            id="location"
            placeholder="Ex: Quinta de Sant'Ana"
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all outline-hidden text-foreground"
          />
        </div>

        {/* DATA DO EVENTO */}
        <div className="flex flex-col gap-2">
          <label htmlFor="eventDate" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Data do Evento <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="date"
            name="eventDate"
            id="eventDate"
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all outline-hidden text-foreground cursor-pointer"
          />
        </div>

        {/* ORÇAMENTO APROXIMADO */}
        <div className="flex flex-col gap-2">
          <label htmlFor="budget" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Orçamento Aproximado <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="text"
            name="budget"
            id="budget"
            placeholder="Ex: €2,000 – €5,000"
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all outline-hidden text-foreground"
          />
        </div>

        {/* QUANTIDADE DE CONVIDADOS */}
        <div className="flex flex-col gap-2">
          <label htmlFor="guestCount" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Nº Aproximado de Convidados
          </label>
          <input
            type="text"
            name="guestCount"
            id="guestCount"
            placeholder="Ex: 150"
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all outline-hidden text-foreground"
          />
        </div>

        {/* SERVIÇOS ADICIONAIS */}
        <div className="flex flex-col gap-4 md:col-span-2 py-4">
          <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Serviços Adicionais
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {additionalServices.map((service) => (
              <label key={service.id} className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <input
                    type="checkbox"
                    name="additionalServices"
                    value={service.label}
                    className="appearance-none w-5 h-5 rounded border border-white/20 bg-white/5 checked:bg-[#d4af37] checked:border-[#d4af37] transition-all cursor-pointer"
                  />
                  <svg className="absolute w-3 h-3 text-black pointer-events-none opacity-0 group-has-[:checked]:opacity-100 transition-opacity" viewBox="0 0 172 172"><g fill="none" strokeWidth="none" strokeMiterlimit="10" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="currentColor"><path d="M145.43359,32.40365l-84.03906,84.15039l-34.83073,-34.83073l-11.45052,11.45052l46.28125,46.28125l95.48958,-95.60091z"></path></g></g></svg>
                </div>
                <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors">{service.label}</span>
              </label>
            ))}
          </div>
          <p className="text-[10px] text-muted-foreground italic">Estamos sempre adicionando novos serviços. Se precisar de algo não listado, descreva abaixo.</p>
        </div>

        {/* SOBRE O EVENTO (TEXTAREA) */}
        <div className="flex flex-col gap-2 md:col-span-2">
          <label htmlFor="about" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Conte-nos mais sobre o seu evento
          </label>
          <textarea
            name="about"
            id="about"
            rows={4}
            placeholder="Descreva detalhes como preferência de decoração, expectativas, etc..."
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all outline-hidden text-foreground resize-none"
          ></textarea>
        </div>

        {/* UPLOAD DE REFERÊNCIAS */}
        <div className="flex flex-col gap-2 md:col-span-2">
          <label htmlFor="references" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Imagens de Referência (Opcional)
          </label>
          <div className="relative group">
            <input
              type="file"
              name="references"
              id="references"
              multiple
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const label = document.getElementById('file-label');
                if (label && e.target.files?.length) {
                  label.innerText = `${e.target.files.length} arquivo(s) selecionado(s)`;
                }
              }}
            />
            <label 
              htmlFor="references"
              className="flex items-center justify-center w-full p-8 border-2 border-dashed border-white/10 rounded-2xl bg-white/5 cursor-pointer hover:border-[#d4af37]/50 hover:bg-[#d4af37]/5 transition-all group"
            >
              <div className="text-center">
                <svg className="w-8 h-8 mx-auto mb-2 text-muted-foreground group-hover:text-[#d4af37] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <p id="file-label" className="text-sm text-foreground/60">Arraste imagens ou clique para selecionar fotos de referência</p>
                <p className="text-[10px] text-muted-foreground mt-1 uppercase tracking-widest">PNG, JPG até 5MB</p>
              </div>
            </label>
          </div>
        </div>

        {/* COMO OUVIU SOBRE NÓS */}
        <div className="flex flex-col gap-2 md:col-span-2">
          <label htmlFor="referral" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Como ouviu falar da NOAME?
          </label>
          <select
            name="referral"
            id="referral"
            defaultValue=""
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all outline-hidden text-foreground cursor-pointer"
          >
            <option value="">Por favor, selecione uma opção</option>
            {referralSources.map((source) => (
              <option key={source} value={source} className="bg-background text-foreground">{source}</option>
            ))}
          </select>
        </div>

        {/* FEEDBACK DE STATUS (ERRO/SUCESSO) */}
        {message && (
          <div className={`md:col-span-2 p-4 rounded-xl ${message.type === "success" ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-400"}`}>
            {message.text}
          </div>
        )}

        {/* BOTÃO DE SUBMISSÃO */}
        <div className="md:col-span-2 mt-4">
          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full py-4 rounded-full bg-[#d4af37] text-white font-bold tracking-widest uppercase hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#d4af37]/20"
          >
            {isSubmitting ? (
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            ) : (
              "✦ SOLICITAR RESERVA"
            )}
          </button>
        </div>

      </form>
    </motion.div>
  );
}
