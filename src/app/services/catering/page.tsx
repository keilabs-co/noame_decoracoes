"use client";

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

/**
 * CATERING Service Page
 */
export default function CateringPage() {
  const selectionImages = [
    "/media/services/catering/photos/selection_Images/IMG_0002.JPG",
    "/media/services/catering/photos/selection_Images/IMG_0003.JPG",
    "/media/services/catering/photos/selection_Images/IMG_1093.JPG",
    "/media/services/catering/photos/selection_Images/IMG_1096.JPG"
  ];

  const marqueeImages = [
    "/media/services/catering/photos/marquee_Images/catering_cover.JPG",
    "/media/services/catering/photos/marquee_Images/IMG_1152.JPG",
    "/media/services/catering/photos/marquee_Images/IMG_6594.JPG",
    "/media/services/catering/photos/marquee_Images/IMG_6595.JPG",
    "/media/services/catering/photos/marquee_Images/IMG_7691.JPG",
    "/media/services/catering/photos/marquee_Images/IMG_7693.JPG",
    "/media/services/catering/photos/marquee_Images/IMG_1096.JPG",
    "/media/services/catering/photos/marquee_Images/IMG_8896.JPG"
  ];

  const moreThanDecorSections = [
    {
      title: "Narrativa Gourmet",
      description: "As nossas criações culinárias são concebidas para refletir o tema do seu evento, utilizando os melhores ingredientes para criar uma viagem sensorial inesquecível.",
      image: "/media/services/catering/photos/more_Than_Decor/IMG_8899.JPG"
    },
    {
      title: "Serviço Impecável",
      description: "A nossa equipa profissional garante que cada convidado se sinta honrado, proporcionando um serviço perfeito que corresponde à sofisticação da sua visão.",
      image: "/media/services/catering/photos/more_Than_Decor/IMG_8900.JPG"
    }
  ];

  return (
    <ServiceDetailTemplate
      title="Catering"
      subtitle="Sabores Requintados e Apresentação Impecável"
      heroVideo="https://assets.mixkit.co/videos/preview/mixkit-chef-plating-a-gourmet-dish-in-slow-motion-4422-large.mp4"
      introHeading="Um Santuário Culinário"
      introText="Acreditamos que uma comida excepcional é uma parte sagrada de qualquer celebração. Os nossos serviços de catering combinam o artesanato tradicional com técnicas culinárias modernas."
      selectionImages={selectionImages}
      moreThanDecorSections={moreThanDecorSections}
      marqueeImages={marqueeImages}
    />
  );
}
