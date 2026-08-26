"use client";

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

/**
 * CATERING Service Page
 */
export default function CateringPage() {
  const selectionImages = [
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589780/IMG_0002.jpg",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589780/IMG_0003.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589780/IMG_1093.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589780/IMG_1096.JPG"
  ];

  const marqueeImages = [
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589796/catering_cover.jpg",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589796/IMG_1152.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589796/IMG_6594.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589796/IMG_6595.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589796/IMG_7691.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589796/IMG_7693.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589796/IMG_1096.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589796/IMG_8896.JPG"
  ];

  const moreThanDecorSections = [
    {
      title: "Narrativa Gourmet",
      description: "As nossas criações culinárias são concebidas para refletir o tema do seu evento, utilizando os melhores ingredientes para criar uma viagem sensorial inesquecível.",
      image: "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589781/IMG_8899.jpg"
    },
    {
      title: "Serviço Impecável",
      description: "A nossa equipa profissional garante que cada convidado se sinta honrado, proporcionando um serviço perfeito que corresponde à sofisticação da sua visão.",
      image: "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589781/IMG_8900.JPG"
    }
  ];

  return (
    <ServiceDetailTemplate
      title="Catering"
      subtitle="Sabores Requintados e Apresentação Impecável"
      heroVideo="https://res.cloudinary.com/tpwhg02l/video/upload/v1787589778/hero_catering.mov"
      heroImage="https://res.cloudinary.com/tpwhg02l/image/upload/v1787589796/catering_cover.jpg"
      introHeading="Um Santuário Culinário"
      introText="Acreditamos que uma comida excepcional é uma parte sagrada de qualquer celebração. Os nossos serviços de catering combinam o artesanato tradicional com técnicas culinárias modernas."
      selectionImages={selectionImages}
      moreThanDecorSections={moreThanDecorSections}
      marqueeImages={marqueeImages}
    />
  );
}
