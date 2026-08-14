"use client";

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

/**
 * CORPORATIVOS (Corporate Events) Service Page
 */
export default function CorporativosPage() {
  const selectionImages = [
    "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1181438/pexels-photo-1181438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ];

  const marqueeImages = [
    "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1181438/pexels-photo-1181438.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2101030/pexels-photo-2101030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=600"
  ];

  const moreThanDecorSections = [
    {
      title: "Design de Experiência Estratégico",
      description: "Alinhamos cada detalhe com a missão da sua marca, criando ambientes que fomentam a inovação e o prestígio profissional.",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Coordenação de Prestígio",
      description: "A nossa gestão perfeita garante uma atmosfera profissional que deixa uma impressão duradoura nos principais parceiros da sua organização.",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
