"use client";

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

/**
 * CORPORATIVOS (Corporate Events) Service Page
 */
export default function CorporativosPage() {
  const selectionImages = [
    "/media/services/corporativos/photos/selection_Images/IMG_2902.JPG",
    "/media/services/corporativos/photos/selection_Images/IMG_2903.JPG",
    "/media/services/corporativos/photos/selection_Images/IMG_2904.JPG",
    "/media/services/corporativos/photos/selection_Images/IMG_2914.JPG"
  ];

  const marqueeImages = [
    "/media/services/corporativos/photos/marquee_Images/corporative_cover.JPG",
    "/media/services/corporativos/photos/marquee_Images/IMG_2906.JPG",
    "/media/services/corporativos/photos/marquee_Images/IMG_2908.JPG",
    "/media/services/corporativos/photos/marquee_Images/IMG_2912.JPG",
    "/media/services/corporativos/photos/marquee_Images/IMG_2907.JPG",
    "/media/services/corporativos/photos/marquee_Images/IMG_2905.JPG",
    "/media/services/corporativos/photos/marquee_Images/IMG_2932.JPG",
    "/media/services/corporativos/photos/marquee_Images/IMG_2909.JPG"
  ];

  const moreThanDecorSections = [
    {
      title: "Design de Experiência Estratégico",
      description: "Alinhamos cada detalhe com a missão da sua marca, criando ambientes que fomentam a inovação e o prestígio profissional.",
      image: "/media/services/corporativos/photos/more_Than_Decor/IMG_2911.JPG"
    },
    {
      title: "Coordenação de Prestígio",
      description: "A nossa gestão perfeita garante uma atmosfera profissional que deixa uma impressão duradoura nos principais parceiros da sua organização.",
      image: "/media/services/corporativos/photos/more_Than_Decor/IMG_8854.JPG"
    }
  ];

  return (
    <ServiceDetailTemplate
      title="Corporativos"
      subtitle="Excelência no Branding Ambiental"
      heroVideo="/media/services/corporativos/video/hero_video/hero_corporativos.mov"
      heroImage="/media/services/corporativos/photos/marquee_Images/corporative_cover.JPG"
      introHeading="Uma Obra-Prima do Profissionalismo"
      introText="A narrativa sagrada da sua marca merece ser contada através de um design espacial sofisticado que inspire excelência e compromisso."
      selectionImages={selectionImages}
      moreThanDecorSections={moreThanDecorSections}
      marqueeImages={marqueeImages}
    />
  );
}
