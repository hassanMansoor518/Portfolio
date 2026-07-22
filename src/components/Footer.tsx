"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUp, Heart, ArrowRight, Globe, Share2, Layers, Camera } from "lucide-react";
import { useMagnetic } from "@/hooks/useMagnetic";

const footerLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/hassanMansoor518", icon: Globe },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Share2 },
  { name: "Portfolio", href: "#", icon: Layers },
];

const marqueeItems = [
  "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS",
  "PostgreSQL", "MongoDB", "Figma", "UI/UX", "Framer Motion",
];

function SocialBtn({ item }: { item: typeof socialLinks[0] }) {
  const { ref, magneticProps } = useMagnetic<HTMLAnchorElement>(0.35);
  const Icon = item.icon;
  return (
    <motion.a
      ref={ref}
      {...magneticProps}
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={item.name}
      whileHover={{ y: -3 }}
      className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-[#D9A520] text-neutral-400 hover:text-[#D9A520] flex items-center justify-center transition-colors duration-300"
    >
      <Icon className="w-3.5 h-3.5" />
    </motion.a>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { ref: topBtnRef, magneticProps: topBtnProps } = useMagnetic<HTMLButtonElement>(0.3);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="w-full bg-[#111111] text-[#F7F3EC] relative z-30 overflow-hidden">

      {/* ── TOP CTA BAND ─────────────────────────────────────── */}
      <div className="border-b border-neutral-900 px-6 md:px-12 py-20 relative overflow-hidden">
        {/* Gold glow blob */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D9A520]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 relative z-10">
          {/* Big headline */}
          <div className="flex-1">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#D9A520] mb-4"
            >
              ✦ Open to new projects
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-syne font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight uppercase leading-[0.95] text-white"
            >
              Let&apos;s Work<br />
              <span className="text-outline">Together.</span>
            </motion.h2>
          </div>

          {/* CTA button + email */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start lg:items-end gap-5"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#D9A520] text-[#111111] text-xs font-mono font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 shadow-[0_8px_30px_rgba(217,165,32,0.3)]"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
            <a
              href="mailto:hassanmansoor518@gmail.com"
              className="text-xs font-mono text-neutral-500 hover:text-[#D9A520] transition-colors duration-200 tracking-wider"
            >
              hassanmansoor518@gmail.com
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── SCROLLING MARQUEE STRIP ──────────────────────────── */}
      <div className="border-b border-neutral-900 py-4 overflow-hidden">
        <div className="flex animate-[marquee_25s_linear_infinite] whitespace-nowrap w-max gap-0">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-6 px-6 text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-600">
              <span>{item}</span>
              <span className="text-[#D9A520]">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── MAIN FOOTER GRID ─────────────────────────────────── */}
      <div className="px-6 md:px-12 pt-16 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-900">

            {/* Brand Block — 5 cols */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col gap-8"
            >
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center font-syne font-black text-lg text-white">
                  H<span className="text-[#D9A520]">.</span>
                </div>
                <div>
                  <p className="font-syne font-bold text-base tracking-wider uppercase text-white leading-none">Hassan</p>
                  <p className="text-[9px] font-mono tracking-[0.25em] uppercase text-neutral-500 mt-0.5">Full Stack Developer</p>
                </div>
              </div>

              {/* Tagline */}
              <p className="text-xs text-neutral-400 leading-relaxed max-w-xs">
                MERN Stack Developer focused on building and shipping production-ready web applications. From concept to deployment — let&apos;s bring your vision to life.
              </p>

              {/* Availability badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-400">
                  Available for work
                </span>
              </div>

              {/* Socials */}
              <div className="flex items-center gap-2.5">
                {socialLinks.map((s) => <SocialBtn key={s.name} item={s} />)}
              </div>
            </motion.div>

            {/* Spacer — 1 col */}
            <div className="hidden lg:block lg:col-span-1" />

            {/* Navigation — 3 cols */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-3 flex flex-col gap-6"
            >
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">Navigation</p>
              <ul className="space-y-3">
                {footerLinks.map((link, i) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                  >
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors duration-200 font-medium"
                    >
                      <span className="w-0 group-hover:w-4 h-px bg-[#D9A520] transition-all duration-300 overflow-hidden" />
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Back to Top — 3 cols */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3 flex flex-col items-start lg:items-end justify-between gap-8"
            >
              <div className="flex flex-col items-start lg:items-end gap-3">
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">Back to Top</p>
                <button
                  ref={topBtnRef}
                  {...topBtnProps}
                  onClick={scrollToTop}
                  aria-label="Back to Top"
                  className="group relative w-14 h-14 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-[#D9A520] hover:bg-[#D9A520] text-[#D9A520] hover:text-[#111111] flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg"
                >
                  <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" />
                </button>
              </div>

              {/* Stack badge */}
              <div className="flex flex-col items-start lg:items-end gap-2">
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">Built With</p>
                <div className="flex flex-wrap gap-2 justify-start lg:justify-end">
                  {["Next.js", "TypeScript", "Tailwind"].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>

          {/* ── BOTTOM BAR ─────────────────────────────────────── */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-600">
              &copy; {currentYear} Hassan Mansoor. All rights reserved.
            </p>
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-600">
              <span>Designed &amp; built with</span>
              <Heart className="w-3 h-3 text-[#D9A520] fill-[#D9A520]" />
              <span>in Karachi, Pakistan</span>
            </div>
          </div>

        </div>
      </div>

      {/* ── GIANT BACKGROUND WATERMARK ───────────────────────── */}
      <div
        aria-hidden
        className="absolute bottom-0 left-1/2 -translate-x-1/2 select-none pointer-events-none z-0 overflow-hidden w-full flex justify-center"
      >
        <span
          className="font-syne font-black uppercase leading-none text-[22vw] tracking-tighter text-transparent"
          style={{ WebkitTextStroke: "1px rgba(255,255,255,0.025)" }}
        >
          HASSAN
        </span>
      </div>

      {/* Add marquee keyframe via style tag */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
