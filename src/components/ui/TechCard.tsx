import React from "react";
import { motion } from "framer-motion";
import { TechItem } from "@/data/techStack";
import { TechIcons } from "./TechIcons";

interface TechCardProps {
  item: TechItem;
  index: number;
}

export function TechCard({ item, index }: TechCardProps) {
  const IconComponent = TechIcons[item.icon as keyof typeof TechIcons] || null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.02, ease: "easeOut" }}
      className="flex flex-col items-center gap-3 group cursor-pointer"
    >
      {/* Icon Card Box */}
      <div 
        className="w-16 h-16 sm:w-20 sm:h-20 bg-white border border-[#EBE6DD] rounded-2xl flex items-center justify-center transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.02)] group-hover:shadow-[0_12px_20px_-8px_rgba(0,0,0,0.08)] group-hover:-translate-y-1.5 group-hover:scale-[1.04] group-hover:border-[#FF581A]/30"
      >
        <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
          {IconComponent ? (
            <IconComponent size={48} className="w-full h-full object-contain" />
          ) : (
            <div className="w-full h-full rounded bg-gray-50 flex items-center justify-center font-bold text-gray-400 text-sm">
              {item.name.charAt(0)}
            </div>
          )}
        </div>
      </div>
      
      {/* Label Text below the box */}
      <span className="font-sans font-bold text-[10px] sm:text-xs text-[#111111]/80 group-hover:text-[#FF581A] transition-colors duration-300 text-center tracking-tight">
        {item.name}
      </span>
    </motion.div>
  );
}
