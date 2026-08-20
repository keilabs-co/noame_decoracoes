"use client";

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

/**
 * FESTAS (Parties & Celebrations) Service Page
 */
export default function FestasPage() {
  const selectionImages = [
    "/media/services/festas/photos/selection_Images/ABDQ9605.JPG",
    "/media/services/festas/photos/selection_Images/ACXO2170.JPG",
    "/media/services/festas/photos/selection_Images/GKZI4087.JPG",
    "/media/services/festas/photos/selection_Images/IMG_1116.JPG"
  ];

  const marqueeImages = [
    "/media/services/festas/photos/marquee_Images/parties_cover.JPG",
    "/media/services/festas/photos/marquee_Images/ABDQ9605.JPG",
    "/media/services/festas/photos/marquee_Images/ACXO2170.JPG",
    "/media/services/festas/photos/marquee_Images/GKZI4087.JPG",
    "/media/services/festas/photos/marquee_Images/IMG_1116.JPG",
    "/media/services/festas/photos/marquee_Images/IMG_1156.JPG",
    "/media/services/festas/photos/marquee_Images/IMG_1158.JPG",
    "/media/services/festas/photos/marquee_Images/parties_cover.JPG"
  ];

  const moreThanDecorSections = [
    {
      title: "Atmosfera Vibrante",
      description: "Os nossos elementos estruturais e de iluminação são curados para criar um ambiente dinâmico que celebra a vida e a energia.",
      image: "/media/services/festas/photos/more_Than_Decor/IMG_1156.JPG"
    },
    {
      title: "Celebrações Marcantes",
      description: "Cada marco é uma oportunidade para a grandeza. Garantimos que os seus momentos marcantes sejam assinalados com distinção artística.",
      image: "/media/services/festas/photos/more_Than_Decor/IMG_1158.JPG"
    }
  ];

  return (
    <ServiceDetailTemplate
      title="Festas"
      subtitle="A Alegria da Celebração Partilhada"
      heroVideo="https://assets.mixkit.co/videos/preview/mixkit-party-crowd-dancing-with-hands-in-the-air-4412-large.mp4"
      introHeading="Uma Obra-Prima Colectiva"
      introText="Os encontros sociais são ligações humanas sagradas. Transformamos celebrações em ambientes artísticos onde a alegria e a sofisticação se encontram."
      selectionImages={selectionImages}
      moreThanDecorSections={moreThanDecorSections}
      marqueeImages={marqueeImages}
    />
  );
}