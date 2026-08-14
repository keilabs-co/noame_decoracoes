"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import ImageModal from "@/components/ImageModal";

/**
 * DiagonalMarquee Component
 * Creates an infinite sliding effect with images.
 */
interface DiagonalMarqueeProps {
  images: string[];
}

export default function DiagonalMarquee({ images }: DiagonalMarqueeProps) {
  // --- STATE FOR LIGHTBOX ---
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Triple the images to ensure seamless looping
  const duplicatedImages = [...images, ...images, ...images];

  return (
    <section className="relative h-[300px] md:h-[450px] w-full overflow-hidden flex items-center justify-center py-12">
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      
      {/* Rotate the entire container to create a diagonal effect */}
      <div className="flex flex-col gap-4 rotate-[-12deg] scale-125">
        
        {/* ROW 1 - Moving Left to Right */}
        <div className="flex gap-4 items-center">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-4 whitespace-nowrap"
          >
            {duplicatedImages.map((img, i) => (
              <div 
                key={i} 
                className="w-[150px] h-[100px] md:w-[280px] md:h-[180px] relative shrink-0 transition-all duration-700 rounded-2xl overflow-hidden shadow-lg border border-white/10 cursor-pointer group"
                onClick={() => setSelectedImage(img)}
              >
                {/* 
                  // IMAGE REPLACEMENT: 
                  // These images come from the 'marqueeImages' array in the page.tsx file.
                */}
                <Image
                  src={img}
                  alt={`Marquee image ${i}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* ROW 2 - Moving Right to Left */}
        <div className="flex gap-4 items-center">
          <motion.div
            animate={{ x: [-1000, 0] }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-4 whitespace-nowrap"
          >
            {duplicatedImages.map((img, i) => (
              <div 
                key={i} 
                className="w-[150px] h-[100px] md:w-[280px] md:h-[180px] relative shrink-0 transition-all duration-700 rounded-2xl overflow-hidden shadow-lg border border-white/10 cursor-pointer group"
                onClick={() => setSelectedImage(img)}
              >
                <Image
                  src={img}
                  alt={`Marquee image ${i}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </motion.div>
        </div>
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
