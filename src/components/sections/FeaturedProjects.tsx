import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projectCategories, projects, ProjectCategory } from "@/data/projects";
import { ProjectFilters } from "../ui/ProjectFilters";
import { ProjectCard } from "../ui/ProjectCard";

export function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  return (
    <section id="featured-projects" className="w-full py-16 px-6 md:px-12 bg-[#F7F3EC] relative z-20 border-t border-[#EBE6DD]">
      <div className="max-w-7xl mx-auto">
        {/* Header container */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          {/* Left Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-syne font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#111111] uppercase">
              Featured Projects
            </h2>
          </motion.div>

          {/* Right Link */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/projects"
              className="group flex items-center gap-1.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#111111] hover:text-[#FF581A] transition-colors duration-200"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>

        {/* Filter Pills container */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <ProjectFilters
            categories={projectCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </motion.div>

        {/* Projects Cards Grid */}
        <div className="min-h-[400px]">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20, scale: 0.95 }}
                  transition={{
                    type: "spring",
                    stiffness: 450,
                    damping: 35,
                    opacity: { duration: 0.25 },
                  }}
                  className="h-full"
                >
                  <ProjectCard project={project} index={index} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default FeaturedProjects;
