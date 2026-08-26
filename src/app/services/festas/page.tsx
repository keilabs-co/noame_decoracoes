"use client";

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

/**
 * FESTAS (Parties & Celebrations) Service Page
 */
export default function FestasPage() {
  const selectionImages = [
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589766/ABDQ9605.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589766/ACXO2170.jpg",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589766/GKZI4087.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589766/IMG_1116.JPG"
  ];

  const marqueeImages = [
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589759/image0(1).jpeg",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589759/ABDQ9605.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589759/ACXO2170.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589759/GKZI4087.jpg",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589759/IMG_1116.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589759/IMG_1156.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589759/image4.jpeg",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589759/image2(1).jpeg"
  ];

  const moreThanDecorSections = [
    {
      title: "Atmosfera Vibrante",
      description: "Os nossos elementos estruturais e de iluminação são curados para criar um ambiente dinâmico que celebra a vida e a energia.",
      image: "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589759/image4.jpeg"
    },
    {
      title: "Celebrações Marcantes",
      description: "Cada marco é uma oportunidade para a grandeza. Garantimos que os seus momentos marcantes sejam assinalados com distinção artística.",
      image: "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589756/IMG_1158.jpg"
    }
  ];

  return (
    <ServiceDetailTemplate
      title="Festas"
      subtitle="A Alegria da Celebração Partilhada"
      heroVideo="https://res.cloudinary.com/tpwhg02l/video/upload/v1787589765/hero_festas.mov"
      heroImage="https://res.cloudinary.com/tpwhg02l/image/upload/v1787589762/IMG_1156.jpg"
      introHeading="Uma Obra-Prima Colectiva"
      introText="Os encontros sociais são ligações humanas sagradas. Transformamos celebrações em ambientes artísticos onde a alegria e a sofisticação se encontram."
      selectionImages={selectionImages}
      moreThanDecorSections={moreThanDecorSections}
      marqueeImages={marqueeImages}
    />
  );
}