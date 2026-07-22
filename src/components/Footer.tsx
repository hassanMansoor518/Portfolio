"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUp, Sparkles, Heart } from "lucide-react";
import { useMagnetic } from "@/hooks/useMagnetic";
import { SocialLinks } from "@/components/SocialLinks";

const footerLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  // Magnetic back-to-top button
  const { ref: topBtnRef, magneticProps: topBtnProps } = useMagnetic<HTMLButtonElement>(0.3);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full bg-[#111111] text-[#F7F3EC] pt-20 pb-10 px-6 md:px-12 relative z-30 overflow-hidden border-t border-neutral-900">
      
      {/* Huge Decorative Watermark Background (Sleek Outline) */}
      <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 select-none pointer-events-none z-0 w-full text-center overflow-hidden h-[120px] sm:h-[180px] md:h-[220px]">
        <h1 className="font-syne font-black text-[12vw] tracking-widest text-[#F7F3EC]/[0.015] leading-none uppercase select-none border-none outline-none" style={{ WebkitTextStroke: "1px rgba(247, 243, 236, 0.03)" }}>
          HASSAN
        </h1>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-neutral-900">
          
          {/* Brand Info (5 columns) */}
          <div className="md:col-span-5 flex flex-col justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 text-[#F7F3EC] flex items-center justify-center font-bold text-base tracking-tighter">
                  H<span className="text-[#D9A520]">.</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-syne font-bold text-sm tracking-wider text-white uppercase leading-none">
                    HASSAN
                  </span>
                  <span className="text-[9px] tracking-widest text-neutral-500 font-mono uppercase mt-0.5">
                    Full Stack Developer
                  </span>
                </div>
              </div>
              <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
                Crafting exceptional, responsive, and high-performance web applications. Focused on combining clean code with state-of-the-art UI/UX.
              </p>
            </div>
            
            {/* Quick availability status */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-400">
                Available for worldwide opportunities
              </span>
            </div>
          </div>

          {/* Spacer (1 column) */}
          <div className="hidden md:block md:col-span-1" />

          {/* Quick Links Navigation (3 columns) */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider">Navigation</span>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-neutral-400 hover:text-[#D9A520] transition-colors duration-200 uppercase tracking-widest font-semibold"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Back to Top & Social Section (3 columns) */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end gap-8">
            <div className="flex flex-col items-start md:items-end gap-2.5 w-full">
              <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider">Back to Top</span>
              
              <button
                ref={topBtnRef}
                {...topBtnProps}
                onClick={scrollToTop}
                className="group relative w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 text-[#D9A520] hover:text-[#111111] hover:bg-[#D9A520] flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer"
                aria-label="Back to Top"
              >
                <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" />
              </button>
            </div>
            
            <div className="flex flex-col items-start md:items-end gap-3 w-full">
              <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider block md:hidden">Follow Me</span>
              <SocialLinks />
            </div>
          </div>
          
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-10 text-[10px] text-neutral-500 font-mono uppercase tracking-widest">
          <div>
            &copy; {currentYear} HASSAN. ALL RIGHTS RESERVED.
          </div>
          
          <div className="flex items-center gap-1.5 normal-case tracking-normal text-neutral-400">
            <span>Designed & Built with</span>
            <Heart className="w-3 h-3 text-[#D9A520] fill-[#D9A520]" />
            <span>using Next.js & Tailwind</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
