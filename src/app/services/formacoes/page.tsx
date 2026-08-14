"use client";

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

/**
 * FORMAÇÕES (Graduations & Formals) Service Page
 */
export default function FormacoesPage() {
  const selectionImages = [
    "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/2513989/pexels-photo-2513989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/7942548/pexels-photo-7942548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ];

  const marqueeImages = [
    "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2513989/pexels-photo-2513989.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/7942548/pexels-photo-7942548.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1184672/pexels-photo-1184672.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/356065/pexels-photo-356065.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2070487/pexels-photo-2070487.jpeg?auto=compress&cs=tinysrgb&w=600"
  ];

  const moreThanDecorSections = [
    {
      title: "Prestígio Académico",
      description: "Honramos a importância e o trabalho árduo da jornada académica, projetando ambientes que refletem as conquistas e o legado.",
      image: "https://images.pexels.com/photos/1184672/pexels-photo-1184672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Tradições Majestosas",
      description: "Os nossos designs de eventos formais estão enraizados na tradição, incorporando um toque moderno para uma experiência verdadeiramente sofisticada.",
      image: "https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
