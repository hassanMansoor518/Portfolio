import React from "react";
import { motion } from "framer-motion";
import { ProjectCategory } from "@/data/projects";

interface ProjectFiltersProps {
  categories: ProjectCategory[];
  activeCategory: ProjectCategory;
  onCategoryChange: (category: ProjectCategory) => void;
}

export function ProjectFilters({ categories, activeCategory, onCategoryChange }: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className="relative px-4 py-2 text-xs font-semibold rounded-full transition-colors duration-200 cursor-pointer focus:outline-none"
            style={{
              color: isActive ? "#FFFFFF" : "#555555",
              backgroundColor: isActive ? "#FF581A" : "#ECE9E2",
            }}
          >
            {/* Animated pill background container using layoutId */}
            {isActive && (
              <motion.div
                layoutId="activeProjectPill"
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
