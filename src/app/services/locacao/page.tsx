"use client";

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

/**
 * LOCAÇÃO (Rentals) Service Page
 */
export default function LocacaoPage() {
  const selectionImages = [
    "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ];

  const marqueeImages = [
    "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=600"
  ];

  const moreThanDecorSections = [
    {
      title: "Curadoria e Coleção",
      description: "Nossa biblioteca de aluguer é composta por peças de mobiliário exclusivas que representam o melhor do design moderno e clássico.",
      image: "https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Logística de Assinatura",
      description: "Cada item é entregue e manuseado com extremo cuidado, garantindo que o seu espaço pareça impecável de todos os ângulos.",
      image: "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <ServiceDetailTemplate
      title="Locação"
      subtitle="A Coleção do Sofisticado"
      heroVideo="https://assets.mixkit.co/videos/preview/mixkit-top-shot-of-a-person-writing-in-a-notebook-4437-large.mp4"
      introHeading="Uma Narrativa de Design"
      introText="O mobiliário exclusivo é mais do que utilidade — é uma escolha narrativa. Nossa coleção de aluguer é curada para adicionar um toque de elegância divina à visão arquitetónica do seu evento."
      selectionImages={selectionImages}
      moreThanDecorSections={moreThanDecorSections}
      marqueeImages={marqueeImages}
    />
  );
}
