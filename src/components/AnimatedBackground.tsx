"use client";

import { motion } from "framer-motion";
import { useMouseParallax } from "@/hooks/useMouseParallax";

export function AnimatedBackground() {
  const parallax = useMouseParallax(0.03);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay z-10" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(#111111 1px, transparent 1px)`,
          backgroundSize: `32px 32px`
        }}
      />

      {/* Large Blurred Gradient Blob - Top Left Gold */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 30, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          transform: `translate3d(${parallax.x * 2}px, ${parallax.y * 2}px, 0)`,
        }}
        className="absolute -top-[15%] -left-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-gradient-to-br from-[#D9A520]/25 via-[#D9A520]/10 to-transparent rounded-full blur-[120px]"
      />

      {/* Large Blurred Blob - Bottom Right Navy */}
      <motion.div
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 40, -20, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          transform: `translate3d(${-parallax.x * 1.5}px, ${-parallax.y * 1.5}px, 0)`,
        }}
        className="absolute -bottom-[10%] -right-[5%] w-[45vw] h-[45vw] max-w-[550px] max-h-[550px] bg-gradient-to-tl from-[#1F2E4A]/15 via-[#1F2E4A]/5 to-transparent rounded-full blur-[130px]"
      />

      {/* Center Subtle Gold Radial Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full blur-[140px] opacity-40"
        style={{
          background: `radial-gradient(circle, rgba(217, 165, 32, 0.15) 0%, rgba(247, 243, 236, 0) 70%)`,
        }}
      />

      {/* Floating Decorative Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-[#D9A520]/40 blur-[1px]"
          style={{
            top: `${15 + i * 14}%`,
            left: `${10 + (i * 17) % 80}%`,
          }}
          animate={{
            y: [-15, 15, -15],
            opacity: [0.3, 0.7, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
}
