"use client";

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

/**
 * CATERING Service Page
 */
export default function CateringPage() {
  const selectionImages = [
    "https://images.pexels.com/photos/5441450/pexels-photo-5441450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ];

  const marqueeImages = [
    "https://images.pexels.com/photos/5441450/pexels-photo-5441450.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3356748/pexels-photo-3356748.jpeg?auto=compress&cs=tinysrgb&w=600"
  ];

  const moreThanDecorSections = [
    {
      title: "Narrativa Gourmet",
      description: "As nossas criações culinárias são concebidas para refletir o tema do seu evento, utilizando os melhores ingredientes para criar uma viagem sensorial inesquecível.",
      image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Serviço Impecável",
      description: "A nossa equipa profissional garante que cada convidado se sinta honrado, proporcionando um serviço perfeito que corresponde à sofisticação da sua visão.",
      image: "https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
