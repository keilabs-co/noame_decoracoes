"use client";

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

/**
 * CORPORATIVOS (Corporate Events) Service Page
 */
export default function CorporativosPage() {
  const selectionImages = [
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589749/IMG_2902.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589749/IMG_2903.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589749/IMG_2904.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589749/IMG_2914.jpg"
  ];

  const marqueeImages = [
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589744/corporative_cover.jpg",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589744/IMG_2906.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589744/IMG_2908.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589744/IMG_2912.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589744/IMG_2907.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589744/IMG_2905.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589744/IMG_2932.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589744/IMG_2909.JPG"
  ];

  const moreThanDecorSections = [
    {
      title: "Design de Experiência Estratégico",
      description: "Alinhamos cada detalhe com a missão da sua marca, criando ambientes que fomentam a inovação e o prestígio profissional.",
      image: "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589731/IMG_2911.jpg"
    },
    {
      title: "Coordenação de Prestígio",
      description: "A nossa gestão perfeita garante uma atmosfera profissional que deixa uma impressão duradoura nos principais parceiros da sua organização.",
      image: "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589717/IMG_8854.jpg"
    }
  ];

  return (
    <ServiceDetailTemplate
      title="Corporativos"
      subtitle="Excelência no Branding Ambiental"
      heroVideo="https://res.cloudinary.com/tpwhg02l/video/upload/v1787589727/hero_corporativos.mov"
      heroImage="https://res.cloudinary.com/tpwhg02l/image/upload/v1787589744/corporative_cover.jpg"
      introHeading="Uma Obra-Prima do Profissionalismo"
      introText="A narrativa sagrada da sua marca merece ser contada através de um design espacial sofisticado que inspire excelência e compromisso."
      selectionImages={selectionImages}
      moreThanDecorSections={moreThanDecorSections}
      marqueeImages={marqueeImages}
    />
  );
}
