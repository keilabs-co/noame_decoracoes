"use client";

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

/**
 * CASAMENTOS (Wedding Design) Service Page
 * Content is in English as requested.
 * All media can be swapped by replacing the URLs below.
 */
export default function CasamentosPage() {
  const selectionImages = [
    "https://images.pexels.com/photos/169189/pexels-photo-169189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3356748/pexels-photo-3356748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ];

  const marqueeImages = [
    "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/169189/pexels-photo-169189.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3356748/pexels-photo-3356748.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2253844/pexels-photo-2253844.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1785493/pexels-photo-1785493.jpeg?auto=compress&cs=tinysrgb&w=600"
  ];

  const moreThanDecorSections = [
    {
      title: "Curadoria Floral Artística",
      description: "Não fornecemos apenas flores; fazemos a curadoria de arte viva que emoldura a sua história de amor com elegância e beleza natural inigualáveis.",
      image: "https://images.pexels.com/photos/169189/pexels-photo-169189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Iluminação Atmosférica",
      description: "Desde caminhos suaves iluminados por velas até grandes destaques arquitetônicos, o nosso design de iluminação cria o ambiente perfeito para a sua união.",
      image: "https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
