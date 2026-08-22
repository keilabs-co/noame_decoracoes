"use client";

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

/**
 * LOCAÇÃO (Rentals) Service Page
 */
export default function LocacaoPage() {
  const selectionImages = [
    "/media/services/locacao/photos/selection_Images/IMG_8876.JPG",
    "/media/services/locacao/photos/selection_Images/IMG_8877.JPG",
    "/media/services/locacao/photos/selection_Images/IMG_8878.JPG",
    "/media/services/locacao/photos/selection_Images/IMG_8879.JPG"
  ];

  const marqueeImages = [
    "/media/services/locacao/photos/marquee_Images/lococao_cover.JPG",
    "/media/services/locacao/photos/marquee_Images/IMG_8880.JPG",
    "/media/services/locacao/photos/marquee_Images/IMG_8881.JPG",
    "/media/services/locacao/photos/marquee_Images/IMG_8883.JPG",
    "/media/services/locacao/photos/marquee_Images/IMG_8884.JPG",
    "/media/services/locacao/photos/marquee_Images/IMG_8885.JPG",
    "/media/services/locacao/photos/marquee_Images/IMG_8887.JPG",
    "/media/services/locacao/photos/marquee_Images/IMG_8888.JPG"
  ];

  const moreThanDecorSections = [
    {
      title: "Curadoria e Coleção",
      description: "Nossa biblioteca de aluguer é composta por peças de mobiliário exclusivas que representam o melhor do design moderno e clássico.",
      image: "/media/services/locacao/photos/more_Than_Decor/IMG_8889.JPG"
    },
    {
      title: "Logística de Assinatura",
      description: "Cada item é entregue e manuseado com extremo cuidado, garantindo que o seu espaço pareça impecável de todos os ângulos.",
      image: "/media/services/locacao/photos/more_Than_Decor/IMG_8890.JPG"
    }
  ];

  return (
    <ServiceDetailTemplate
      title="Locação"
      subtitle="A Coleção do Sofisticado"
      heroVideo="/media/services/locacao/video/hero_video/hero_locacao.mov"
      heroImage="/media/services/locacao/photos/marquee_Images/locacao_cover.JPG"
      introHeading="Uma Narrativa de Design"
      introText="O mobiliário exclusivo é mais do que utilidade — é uma escolha narrativa. Nossa coleção de aluguer é curada para adicionar um toque de elegância divina à visão arquitetónica do seu evento."
      selectionImages={selectionImages}
      moreThanDecorSections={moreThanDecorSections}
      marqueeImages={marqueeImages}
    />
  );
}
