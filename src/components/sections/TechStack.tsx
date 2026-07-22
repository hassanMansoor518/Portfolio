import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { techCategories, techStack, TechCategory } from "@/data/techStack";
import { TechTabs } from "../ui/TechTabs";
import { TechCard } from "../ui/TechCard";

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState<TechCategory>("Frontend");

  const filteredTech = techStack.filter((tech) => tech.category === activeCategory);

  return (
    <section id="tech-stack" className="w-full py-16 px-6 md:px-12 bg-[#F7F3EC] relative z-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Heading and Tabs */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-[#EBE6DD] pb-8">
          <div>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FF581A]">
              My Tech Stack
            </span>
          </div>
          <div>
            <TechTabs
              categories={techCategories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>
        </div>

        {/* Technology Cards Grid */}
        <div className="min-h-[280px]">
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4 sm:gap-5"
          >
            <AnimatePresence mode="popLayout">
              {filteredTech.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 35,
                    opacity: { duration: 0.2 },
                  }}
                >
                  <TechCard item={tech} index={index} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default TechStack;
