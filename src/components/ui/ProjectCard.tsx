import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-white rounded-xl border border-neutral-100 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 flex flex-col h-full z-10"
    >
      {/* Background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D9A520]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none" />

      {/* Aspect Ratio Image container with Overlay */}
      <div className="relative aspect-video w-full overflow-hidden bg-neutral-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          priority={index === 0}
        />

        {/* Dark Overlay that fades in on hover */}
        <div className="absolute inset-0 bg-[#111111]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 px-6 py-3 bg-white text-[#111111] text-xs font-bold uppercase tracking-widest rounded-full shadow-xl hover:bg-[#D9A520] hover:text-white flex items-center gap-2"
          >
            View Project
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Premium Category Badge */}
        <div className="absolute top-5 left-5">
          <span className="px-4 py-1.5 text-[9px] font-extrabold uppercase tracking-widest bg-white/95 backdrop-blur-md text-[#111111] rounded-full shadow-sm flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF581A] animate-pulse"></span>
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow relative bg-white z-10">

        <h3 className="font-syne font-bold text-xl sm:text-2xl text-[#111111] mb-2 group-hover:text-[#D9A520] transition-colors duration-300">
          {project.title}
        </h3>

        <p className={`text-sm text-neutral-500 font-medium leading-relaxed line-clamp-2 ${project.features && project.features.length > 0 ? 'mb-3' : 'mb-4 flex-grow'}`}>
          {project.description}
        </p>

        {/* Custom Features List */}
        {project.features && project.features.length > 0 && (
          <ul className="flex-grow space-y-1.5 mb-4">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-[12px] text-neutral-600 font-medium leading-relaxed">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D9A520] shrink-0 mt-0.5 opacity-80" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase bg-neutral-50 text-neutral-500 border border-neutral-100 rounded-lg group-hover:border-[#D9A520]/30 group-hover:bg-[#D9A520]/5 group-hover:text-[#D9A520] transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-neutral-100 mt-auto">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold text-[#111111] hover:text-[#D9A520] transition-colors duration-300 group/link"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-4 h-4 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform duration-300" />
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold text-neutral-400 hover:text-[#111111] transition-colors duration-300 group/link"
          >
            <span>Source Code</span>
            <GithubIcon className="w-4 h-4 group-hover/link:scale-110 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
