"use client";

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

/**
 * FORMAÇÕES (Graduations & Formals) Service Page
 */
export default function FormacoesPage() {
  const selectionImages = [
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589691/IMG_0390.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589691/IMG_0426.jpg",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589691/IMG_0480.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589691/IMG_0502.JPG"
  ];

  const marqueeImages = [
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589695/formacoes_cover.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589695/IMG_0391.jpg",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589695/IMG_0393.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589695/IMG_0395.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589695/IMG_0396.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589695/IMG_0397.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589695/IMG_0398.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589695/IMG_0404.JPG"
  ];

  const moreThanDecorSections = [
    {
      title: "Prestígio Académico",
      description: "Honramos a importância e o trabalho árduo da jornada académica, projetando ambientes que refletem as conquistas e o legado.",
      image: "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589678/IMG_0407.jpg"
    },
    {
      title: "Tradições Majestosas",
      description: "Os nossos designs de eventos formais estão enraizados na tradição, incorporando um toque moderno para uma experiência verdadeiramente sofisticada.",
      image: "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589687/IMG_0598.jpg"
    }
  ];

  return (
    <ServiceDetailTemplate
      title="Formações"
      subtitle="Honrando Conquistas e Dedicação"
      heroVideo="https://res.cloudinary.com/tpwhg02l/video/upload/v1787589692/hero_formacoes.mov"
      heroImage="https://res.cloudinary.com/tpwhg02l/image/upload/v1787589695/formacoes_cover.JPG"
      introHeading="Um Santuário de Conhecimento"
      introText="Os marcos académicos são capítulos sagrados da vida. Projetamos graduações formais que celebram os resultados da perseverança e do crescimento colectivo."
      selectionImages={selectionImages}
      moreThanDecorSections={moreThanDecorSections}
      marqueeImages={marqueeImages}
    />
  );
}
