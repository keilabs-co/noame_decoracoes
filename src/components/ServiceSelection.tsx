"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import ImageModal from "@/components/ImageModal";

/**
 * ServiceSelection Component - Bento Grid Gallery
 * This section displays highlight images for the specific service.
 */
interface ServiceSelectionProps {
  title: string;
  images: string[];
}

export default function ServiceSelection({ title, images }: ServiceSelectionProps) {
  // --- STATE FOR LIGHTBOX (FULL SCREEN VIEW) ---
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Default images in case the provided array is empty or too short.
  // // EDIT HERE: If you want to change default placeholders, edit the URLs below.
  const defaultImages = [
    "https://images.pexels.com/photos/169189/pexels-photo-169189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3356748/pexels-photo-3356748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ];

  // Helper to get image at index or fallback to default
  const getImg = (idx: number) => images[idx] || defaultImages[idx];

  return (
    <section className="py-24 md:py-32 px-4 md:px-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-16 md:mb-24">
        <p className="text-gold tracking-[0.4em] uppercase text-[10px] md:text-xs font-bold mb-4">A Seleção</p>
        <h2 className="font-serif text-3xl md:text-7xl font-bold uppercase tracking-tight">
          Nossa Seleção de <span className="text-gold">{title}</span>
        </h2>
      </div>

      {/* 
          BENTO GRID LAYOUT 
          // DESIGN NOTE: grid-cols-6 is maintained on mobile for consistent premium aesthetic.
          // Height is slightly reduced on small screens to prevent excessive scrolling.
      */}
      <div className="grid grid-cols-6 grid-rows-2 gap-3 md:gap-4 h-[600px] md:h-[900px]">
        
        {/* LARGE VERTICAL IMAGE (Occupies leftmost half) */}
        {/* // REPLACEMENT: images[0] */}
        <motion.div
           initial={{ opacity: 0, scale: 0.98 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="col-span-3 row-span-2 relative overflow-hidden rounded-2xl md:rounded-3xl group cursor-pointer"
           onClick={() => setSelectedImage(getImg(0))}
        >
          <Image
            src={getImg(0)}
            alt={`${title} selection 1`}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700" />
        </motion.div>

        {/* TOP RIGHT HORIZONTAL IMAGE */}
        {/* // REPLACEMENT: images[1] */}
        <motion.div
           initial={{ opacity: 0, scale: 0.98 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.1 }}
           className="col-span-3 row-span-1 relative overflow-hidden rounded-2xl md:rounded-3xl group cursor-pointer"
           onClick={() => setSelectedImage(getImg(1))}
        >
          <Image
            src={getImg(1)}
            alt={`${title} selection 2`}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700" />
        </motion.div>

        {/* BOTTOM SMALL SQUARE IMAGE */}
        {/* // REPLACEMENT: images[2] */}
        <motion.div
           initial={{ opacity: 0, scale: 0.98 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl md:rounded-3xl group cursor-pointer"
           onClick={() => setSelectedImage(getImg(2))}
        >
          <Image
            src={getImg(2)}
            alt={`${title} selection 3`}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700" />
        </motion.div>

        {/* BOTTOM RIGHT HORIZONTAL (STRETCHED) IMAGE */}
        {/* // REPLACEMENT: images[3] */}
        <motion.div
           initial={{ opacity: 0, scale: 0.98 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.3 }}
           className="col-span-2 row-span-1 relative overflow-hidden rounded-2xl md:rounded-3xl group cursor-pointer"
           onClick={() => setSelectedImage(getImg(3))}
        >
          <Image
            src={getImg(3)}
            alt={`${title} selection 4`}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700" />
        </motion.div>
      </div>

      {/* FULL SCREEN IMAGE MODAL */}
      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage || ""}
      />
    </section>
  );
}
