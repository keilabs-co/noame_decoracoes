"use client";

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

/**
 * FESTAS (Parties & Celebrations) Service Page
 */
export default function FestasPage() {
  const selectionImages = [
    "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/154147/pexels-photo-154147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/167635/pexels-photo-167635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ];

  const marqueeImages = [
    "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/154147/pexels-photo-154147.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/167635/pexels-photo-167635.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2324423/pexels-photo-2324423.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1389460/pexels-photo-1389460.jpeg?auto=compress&cs=tinysrgb&w=600"
  ];

  const moreThanDecorSections = [
    {
      title: "Atmosfera Vibrante",
      description: "Os nossos elementos estruturais e de iluminação são curados para criar um ambiente dinâmico que celebra a vida e a energia.",
      image: "https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Celebrações Marcantes",
      description: "Cada marco é uma oportunidade para a grandeza. Garantimos que os seus momentos marcantes sejam assinalados com distinção artística.",
      image: "https://images.pexels.com/photos/1389460/pexels-photo-1389460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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