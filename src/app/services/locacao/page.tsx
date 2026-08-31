"use client";

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

/**
 * LOCAÇÃO (Rentals) Service Page
 */
export default function LocacaoPage() {
  const selectionImages = [
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589728/IMG_8876.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589728/IMG_8877.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589728/IMG_8878.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589728/IMG_8879.jpg"
  ];

  const marqueeImages = [
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589716/lococao_cover.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589716/IMG_8880.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589716/IMG_8881.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589716/IMG_8883.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589716/IMG_8884.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589716/IMG_8885.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589716/IMG_8887.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589716/IMG_8888.jpg"
  ];

  const moreThanDecorSections = [
    {
      title: "Curadoria e Coleção",
      description: "Nossa biblioteca de aluguer é composta por peças de mobiliário exclusivas que representam o melhor do design moderno e clássico.",
      image: "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589703/IMG_8889.jpg"
    },
    {
      title: "Logística de Assinatura",
      description: "Cada item é entregue e manuseado com extremo cuidado, garantindo que o seu espaço pareça impecável de todos os ângulos.",
      image: "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589728/IMG_8877.JPG"
    }
  ];

  return (
    <ServiceDetailTemplate
      title="Locação"
      subtitle="A Coleção do Sofisticado"
      heroVideo="https://res.cloudinary.com/tpwhg02l/video/upload/v1787589710/hero_locacao.mov"
      heroImage="https://res.cloudinary.com/tpwhg02l/image/upload/v1787589716/lococao_cover.JPG"
      introHeading="Uma Narrativa de Design"
      introText="O mobiliário exclusivo é mais do que utilidade — é uma escolha narrativa. Nossa coleção de aluguer é curada para adicionar um toque de elegância divina à visão arquitetónica do seu evento."
      selectionImages={selectionImages}
      moreThanDecorSections={moreThanDecorSections}
      marqueeImages={marqueeImages}
    />
  );
}
