"use client";

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

/**
 * CASAMENTOS (Wedding Design) Service Page
 * Content is in English as requested.
 * All media can be swapped by replacing the URLs below.
 */
export default function CasamentosPage() {
  const selectionImages = [
    "/media/services/casamentos/photos/IMG_1079.JPG",
    "/media/services/casamentos/photos/IMG_1080.JPG",
    "/media/services/casamentos/photos/IMG_1081.JPG",
    "/media/services/casamentos/photos/IMG_1083.JPG"
  ];

  const marqueeImages = [
    "/media/services/casamentos/photos/wedding_cover.JPG",
    "/media/services/casamentos/photos/IMG_1087.JPG",
    "/media/services/casamentos/photos/IMG_1089.JPG",
    "/media/services/casamentos/photos/IMG_1091.JPG",
    "/media/services/casamentos/photos/IMG_1092.JPG",
    "/media/services/casamentos/photos/IMG_1094.JPG",
    "/media/services/casamentos/photos/IMG_1095.JPG",
    "/media/services/casamentos/photos/IMG_4419.JPG"
  ];

  const moreThanDecorSections = [
    {
      title: "Curadoria Floral Artística",
      description: "Não fornecemos apenas flores; fazemos a curadoria de arte viva que emoldura a sua história de amor com elegância e beleza natural inigualáveis.",
      image: "/media/services/casamentos/photos/IMG_4420.JPG"
    },
    {
      title: "Iluminação Atmosférica",
      description: "Desde caminhos suaves iluminados por velas até grandes destaques arquitetônicos, o nosso design de iluminação cria o ambiente perfeito para a sua união.",
      image: "/media/services/casamentos/photos/IMG_4422.JPG"
    }
  ];

  return (
    <ServiceDetailTemplate
      title="Casamentos"
      subtitle="A Arte da União Sagrada"
      heroVideo="https://assets.mixkit.co/videos/preview/mixkit-wedding-couple-walking-in-front-of-a-castle-4416-large.mp4"
      introHeading="Uma Celebração Divina do Amor"
      introText="Cada casamento é uma obra-prima única. Somos especialistas em transformar espaços em cenários sagrados deslumbrantes que honram a importância e a beleza do seu compromisso."
      selectionImages={selectionImages}
      moreThanDecorSections={moreThanDecorSections}
      marqueeImages={marqueeImages}
    />
  );
}
