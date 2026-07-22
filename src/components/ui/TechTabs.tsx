import React from "react";
import { motion } from "framer-motion";
import { TechCategory } from "@/data/techStack";

interface TechTabsProps {
  categories: TechCategory[];
  activeCategory: TechCategory;
  onCategoryChange: (category: TechCategory) => void;
}

export function TechTabs({ categories, activeCategory, onCategoryChange }: TechTabsProps) {
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className="relative px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-full border transition-colors duration-200 cursor-pointer focus:outline-none"
            style={{
              borderColor: isActive ? "#FF581A" : "#EBE6DD",
              color: isActive ? "#FFFFFF" : "#111111",
              backgroundColor: isActive ? "#FF581A" : "#FFFFFF",
            }}
          >
            {/* Smooth transition indicator using layoutId */}
            {isActive && (
              <motion.div
                layoutId="activeTechTab"
                className="absolute inset-0 bg-[#FF581A] rounded-full -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </button>
        );
      })}
    </div>
  );
}
