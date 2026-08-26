"use client";

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function CasamentosPage() {
  const selectionImages = [
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589675/IMG_1079.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589675/IMG_1099.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589675/IMG_5301.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589675/IMG_4447.jpg"
  ];

  const marqueeImages = [
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589674/wedding_cover.jpg",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589674/IMG_1087.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589674/IMG_1089.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589674/IMG_4419.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589674/IMG_4441.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589674/IMG_1092.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589674/IMG_5298.JPG",
    "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589674/IMG_5299.JPG"
  ];

  const moreThanDecorSections = [
    {
      title: "Curadoria Floral Artística",
      description: "Não fornecemos apenas flores; fazemos a curadoria de arte viva que emoldura a sua história de amor com elegância e beleza natural inigualáveis.",
      image: "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589662/IMG_4420.jpg"
    },
    {
      title: "Iluminação Atmosférica",
      description: "Desde caminhos suaves iluminados por velas até grandes destaques arquitetônicos, o nosso design de iluminação cria o ambiente perfeito para a sua união.",
      image: "https://res.cloudinary.com/tpwhg02l/image/upload/v1787589662/IMG_4454.jpg"
    }
  ];

  return (
    <ServiceDetailTemplate
      title="Casamentos"
      subtitle="A Arte da União Sagrada"
      heroVideo="https://res.cloudinary.com/tpwhg02l/video/upload/v1787589657/hero_casamento.mov"
      heroImage="https://res.cloudinary.com/tpwhg02l/image/upload/v1787589674/wedding_cover.jpg"
      introHeading="Uma Celebração Divina do Amor"
      introText="Cada casamento é uma obra-prima única. Somos especialistas em transformar espaços em cenários sagrados deslumbrantes que honram a importância e a beleza do seu compromisso."
      selectionImages={selectionImages}
      moreThanDecorSections={moreThanDecorSections}
      marqueeImages={marqueeImages}
    />
  );
}
