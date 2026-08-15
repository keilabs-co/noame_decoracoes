"use client";

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

/**
 * CORPORATIVOS (Corporate Events) Service Page
 */
export default function CorporativosPage() {
  const selectionImages = [
    "/media/services/corporativos/photos/IMG_2902.JPG",
    "/media/services/corporativos/photos/IMG_2903.JPG",
    "/media/services/corporativos/photos/IMG_2904.JPG",
    "/media/services/corporativos/photos/IMG_2905.JPG"
  ];

  const marqueeImages = [
    "/media/services/corporativos/photos/corporative_cover.JPG",
    "/media/services/corporativos/photos/IMG_2906.JPG",
    "/media/services/corporativos/photos/IMG_2907.JPG",
    "/media/services/corporativos/photos/IMG_2908.JPG",
    "/media/services/corporativos/photos/IMG_2909.JPG",
    "/media/services/corporativos/photos/IMG_2911.JPG",
    "/media/services/corporativos/photos/IMG_2912.JPG",
    "/media/services/corporativos/photos/IMG_8854.JPG"
  ];

  const moreThanDecorSections = [
    {
      title: "Design de Experiência Estratégico",
      description: "Alinhamos cada detalhe com a missão da sua marca, criando ambientes que fomentam a inovação e o prestígio profissional.",
      image: "/media/services/corporativos/photos/IMG_8857.JPG"
    },
    {
      title: "Coordenação de Prestígio",
      description: "A nossa gestão perfeita garante uma atmosfera profissional que deixa uma impressão duradoura nos principais parceiros da sua organização.",
      image: "/media/services/corporativos/photos/IMG_8858.JPG"
    }
  ];

  return (
    <ServiceDetailTemplate
      title="Corporativos"
      subtitle="Excelência no Branding Ambiental"
      heroVideo="https://assets.mixkit.co/videos/preview/mixkit-businesswoman-giving-a-presentation-12499-large.mp4"
      introHeading="Uma Obra-Prima do Profissionalismo"
      introText="A narrativa sagrada da sua marca merece ser contada através de um design espacial sofisticado que inspire excelência e compromisso."
      selectionImages={selectionImages}
      moreThanDecorSections={moreThanDecorSections}
      marqueeImages={marqueeImages}
    />
  );
}
