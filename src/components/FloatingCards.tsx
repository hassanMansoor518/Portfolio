"use client";

import { motion } from "framer-motion";
import { Briefcase, Code, Award, Users, Terminal, Atom, Server, Layers } from "lucide-react";
import { useMouseParallax } from "@/hooks/useMouseParallax";

const cards = [
  {
    id: 1,
    title: "MERN",
    subtitle: "Stack",
    icon: Terminal,
    techIcon: Code,
    techName: "React",
    position: "top-[15%] left-[2%] md:left-[4%] lg:left-[6%]",
    floatDelay: 0,
  },
  {
    id: 2,
    title: "Next js",
    subtitle: "Developer",
    icon: Atom,
    techIcon: Server,
    techName: "Node.js",
    position: "top-[58%] left-[2%] md:left-[5%] lg:left-[7%]",
    floatDelay: 1.5,
  },
  {
    id: 3,
    title: "Full Stack",
    subtitle: "Developer",
    icon: Layers,
    techIcon: Terminal,
    techName: "Next.js",
    position: "top-[20%] right-[2%] md:right-[4%] lg:right-[6%]",
    floatDelay: 0.8,
  },
  {
    id: 4,
    title: "Certified",
    subtitle: "React.js",
    icon: Award,
    techIcon: Code,
    techName: "TypeScript",
    position: "top-[64%] right-[2%] md:right-[5%] lg:right-[7%]",
    floatDelay: 2.2,
  },
];

export function FloatingCards() {
  const parallax = useMouseParallax(0.04);

  return (
    <div className="absolute inset-0 pointer-events-none z-30">
      {cards.map((card) => {
        const Icon = card.icon;
        const TechIcon = card.techIcon;

        return (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + card.id * 0.15, duration: 0.8, ease: "easeOut" }}
            className={`absolute ${card.position} pointer-events-auto hidden md:block`}
            style={{
              transform: `translate3d(${parallax.x * (card.id % 2 === 0 ? 1 : -1)}px, ${parallax.y * (card.id % 2 === 0 ? 1 : -1)}px, 0)`,
            }}
          >
            <motion.div
              animate={{
                y: [-6, 6, -6],
                rotate: [card.id % 2 === 0 ? -1 : 1, card.id % 2 === 0 ? 1 : -1, card.id % 2 === 0 ? -1 : 1],
              }}
              transition={{
                duration: 5 + card.id,
                repeat: Infinity,
                ease: "easeInOut",
                delay: card.floatDelay,
              }}
              whileHover={{ scale: 1.08, y: -10 }}
              className="backdrop-blur-xl bg-white/70 border border-white/80 p-3.5 md:p-4 rounded-2xl shadow-[0_15px_35px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_45px_-5px_rgba(217,165,32,0.3)] hover:border-[#D9A520]/50 transition-all duration-300 flex items-center gap-3.5 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#111111] to-[#1F2E4A] text-[#D9A520] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex flex-col pr-1">
                <span className="font-syne font-bold text-sm tracking-tight text-[#111111]">
                  {card.title}
                </span>
                <span className="text-[11px] font-medium text-[#111111]/70 tracking-wide uppercase">
                  {card.subtitle}
                </span>
              </div>
              <div className="pl-2 border-l border-[#111111]/10 flex items-center gap-1 text-[10px] font-mono text-[#D9A520] uppercase">
                <TechIcon className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
