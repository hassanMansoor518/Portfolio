import React from "react";
import { motion } from "framer-motion";
import { TechItem } from "@/data/techStack";
import { TechIcons } from "./TechIcons";

interface TechCardProps {
  item: TechItem;
  index: number;
}

export function TechCard({ item, index }: TechCardProps) {
  // Retrieve the appropriate SVG icon, or a fallback icon if it doesn't exist
  const IconComponent = TechIcons[item.icon as keyof typeof TechIcons] || null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.03, ease: "easeOut" }}
      whileHover={{ y: -6, scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)" }}
      className="bg-white border border-[#EBE6DD] rounded-2xl p-5 flex flex-col items-center justify-center transition-all duration-300 select-none aspect-square group"
    >
      <div className="w-12 h-12 flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform duration-300">
        {IconComponent ? (
          <IconComponent size={40} className="w-10 h-10 object-contain" />
        ) : (
          <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center font-bold text-gray-400">
            {item.name.charAt(0)}
          </div>
        )}
      </div>
      <span className="font-sans font-semibold text-xs sm:text-sm text-[#111111] text-center">
        {item.name}
      </span>
    </motion.div>
  );
}
