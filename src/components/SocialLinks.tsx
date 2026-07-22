"use client";

import { motion } from "framer-motion";
import { Globe, Share2, Layers, Camera } from "lucide-react";
import { useMagnetic } from "@/hooks/useMagnetic";

const socialLinks = [
  { name: "Github", href: "https://github.com", icon: Globe },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Share2 },
  { name: "Behance", href: "https://behance.net", icon: Layers },
  { name: "Instagram", href: "https://instagram.com", icon: Camera },
];

function SocialItem({ item, index }: { item: (typeof socialLinks)[0]; index: number }) {
  const { ref, magneticProps } = useMagnetic<HTMLAnchorElement>(0.3);
  const Icon = item.icon;

  return (
    <motion.a
      ref={ref}
      {...magneticProps}
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={item.name}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
      className="relative group p-2.5 rounded-full bg-neutral-900 border border-neutral-800 hover:border-[#D9A520] text-neutral-400 hover:text-[#D9A520] transition-colors duration-300 shadow-sm"
    >
      <Icon className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110" />
      <span className="sr-only">{item.name}</span>
    </motion.a>
  );
}

export function SocialLinks() {
  return (
    <div className="flex items-center gap-2.5">
      {socialLinks.map((item, index) => (
        <SocialItem key={item.name} item={item} index={index} />
      ))}
    </div>
  );
}
