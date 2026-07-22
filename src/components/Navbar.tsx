"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useMagnetic } from "@/hooks/useMagnetic";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const { ref: cvBtnRef, magneticProps: cvBtnProps } = useMagnetic<HTMLAnchorElement>(0.2);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -79% 0px", // Triggers when a section crosses the upper part of the viewport
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const matchingLink = navLinks.find(link => link.href === `#${id}`);
          if (matchingLink) {
            setActiveTab(matchingLink.name);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const section = document.getElementById(link.href.substring(1));
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "py-3 bg-[#F7F3EC]/80 backdrop-blur-md border-b border-[#111111]/5 shadow-sm"
        : "py-6 bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="group flex items-center gap-2 relative z-10">
          <div className="w-10 h-10 rounded-full bg-[#111111] text-[#F7F3EC] flex items-center justify-center font-bold text-lg tracking-tighter group-hover:scale-105 transition-transform duration-300 shadow-md">
            H<span className="text-[#D9A520]">.</span>
          </div>
          <div className="flex flex-col">
            <span className="font-syne font-bold text-base tracking-wider text-[#111111] uppercase leading-none">
              HASSAN
            </span>
            <span className="text-[10px] tracking-widest text-[#111111]/60 font-mono uppercase">
              Developer
            </span>
          </div>
        </a>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#111111]/5 backdrop-blur-md p-1.5 rounded-full border border-[#111111]/10">
          {navLinks.map((link) => {
            const isActive = activeTab === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveTab(link.name)}
                className={`relative px-5 py-2 text-xs font-semibold uppercase tracking-widest transition-colors duration-300 rounded-full ${isActive ? "text-[#F7F3EC]" : "text-[#111111]/70 hover:text-[#111111]"
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#111111] rounded-full -z-10 shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Download CV CTA */}
        <div className="flex items-center gap-3">
          <motion.a
            ref={cvBtnRef}
            {...cvBtnProps}
            href="/Muhammad_Hassan.pdf"
            download="Muhammad_Hassan.pdf"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111111] text-[#F7F3EC] text-xs uppercase font-semibold tracking-wider overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#D9A520] to-[#b38515] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            <span>Download CV</span>
            <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform duration-300" />
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
}
