"use client";

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

/**
 * FORMAÇÕES (Graduations & Formals) Service Page
 */
export default function FormacoesPage() {
  const selectionImages = [
    "/media/services/formacoes/photos/IMG_0383.JPG",
    "/media/services/formacoes/photos/IMG_0386.JPG",
    "/media/services/formacoes/photos/IMG_0388.JPG",
    "/media/services/formacoes/photos/IMG_0390.JPG"
  ];

  const marqueeImages = [
    "/media/services/formacoes/photos/formacoes_cover.JPG",
    "/media/services/formacoes/photos/IMG_0391.JPG",
    "/media/services/formacoes/photos/IMG_0393.JPG",
    "/media/services/formacoes/photos/IMG_0395.JPG",
    "/media/services/formacoes/photos/IMG_0396.JPG",
    "/media/services/formacoes/photos/IMG_0397.JPG",
    "/media/services/formacoes/photos/IMG_0398.JPG",
    "/media/services/formacoes/photos/IMG_0404.JPG"
  ];

  const moreThanDecorSections = [
    {
      title: "Prestígio Académico",
      description: "Honramos a importância e o trabalho árduo da jornada académica, projetando ambientes que refletem as conquistas e o legado.",
      image: "/media/services/formacoes/photos/IMG_0407.JPG"
    },
    {
      title: "Tradições Majestosas",
      description: "Os nossos designs de eventos formais estão enraizados na tradição, incorporando um toque moderno para uma experiência verdadeiramente sofisticada.",
      image: "/media/services/formacoes/photos/IMG_0409.JPG"
    }
  ];

  return (
    <ServiceDetailTemplate
      title="Formações"
      subtitle="Honrando Conquistas e Dedicação"
      heroVideo="https://assets.mixkit.co/videos/preview/mixkit-graduation-caps-thrown-in-the-air-4436-large.mp4"
      introHeading="Um Santuário de Conhecimento"
      introText="Os marcos académicos são capítulos sagrados da vida. Projetamos graduações formais que celebram os resultados da perseverança e do crescimento colectivo."
      selectionImages={selectionImages}
      moreThanDecorSections={moreThanDecorSections}
      marqueeImages={marqueeImages}
    />
  );
}
