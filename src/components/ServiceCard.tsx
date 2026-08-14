"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

export default function ServiceCard({ title, description, image, href }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-card border border-white/10 overflow-hidden flex flex-col"
    >
      <div className="relative h-72 md:h-80 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
      </div>

      <div className="p-8 flex flex-col flex-1">
        <h3 className="font-serif text-3xl font-bold mb-4 uppercase tracking-tight">
          {title}
        </h3>
        <p className="text-foreground/70 mb-8 line-clamp-3 leading-relaxed">
          {description}
        </p>
        
        <Link 
          href={href}
          className="mt-auto inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gold hover:text-white transition-colors duration-300"
        >
          View Details
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
