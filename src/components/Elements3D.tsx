"use client";

import { motion } from "framer-motion";
import { useMouseParallax } from "@/hooks/useMouseParallax";

export function Elements3D() {
  const parallax = useMouseParallax(0.05);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* ─── GLASS CUBE — top-right ─────────────────────────────────── */}
      <motion.div
        animate={{ rotateY: [0, 360], rotateX: [15, -15, 15], y: [-8, 8, -8] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          perspective: "600px",
          transformStyle: "preserve-3d",
          transform: `translate3d(${-parallax.x * 1.6}px, ${-parallax.y * 1.6}px, 0)`,
        }}
        className="absolute top-[6%] sm:top-[8%] right-[4%] sm:right-[8%] w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 block z-30 opacity-80 sm:opacity-100"
      >
        {/* Cube faces */}
        {[
          "rotateY(0deg) translateZ(24px) sm:translateZ(32px) lg:translateZ(40px)",
          "rotateY(90deg) translateZ(24px) sm:translateZ(32px) lg:translateZ(40px)",
          "rotateY(180deg) translateZ(24px) sm:translateZ(32px) lg:translateZ(40px)",
          "rotateY(-90deg) translateZ(24px) sm:translateZ(32px) lg:translateZ(40px)",
          "rotateX(90deg) translateZ(24px) sm:translateZ(32px) lg:translateZ(40px)",
          "rotateX(-90deg) translateZ(24px) sm:translateZ(32px) lg:translateZ(40px)",
        ].map((transform, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-lg sm:rounded-xl border border-white/60 bg-white/15 backdrop-blur-md"
            style={{ transform }}
          />
        ))}
        {/* Gold glow overlay */}
        <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#D9A520]/30 to-transparent blur-sm" />
      </motion.div>

      {/* ─── FLOATING GOLD TORUS RING — bottom-left ──────────────────── */}
      <motion.div
        animate={{ rotateZ: [0, 360] }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        style={{
          perspective: "800px",
          transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0)`,
        }}
        className="absolute bottom-[20%] sm:bottom-[24%] left-[3%] sm:left-[6%] w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 block z-30 opacity-75 sm:opacity-100"
      >
        <motion.div
          animate={{ rotateX: [60, 80, 60] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full rounded-full border-[6px] sm:border-[8px] lg:border-[10px] border-[#D9A520]/60 shadow-[0_0_20px_rgba(217,165,32,0.4)]"
        />
      </motion.div>

      {/* ─── GLOWING GOLD ORB — top-center ───────────────────────────── */}
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ transform: `translate3d(${parallax.x * 0.8}px, ${parallax.y * 0.8}px, 0)` }}
        className="absolute top-[8%] left-[48%] w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-full bg-[#D9A520] shadow-[0_0_20px_6px_rgba(217,165,32,0.6)] z-30 block"
      />

      {/* ─── SMALL DARK PILL — right-center ──────────────────────────── */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotateZ: [0, 15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        style={{ transform: `translate3d(${-parallax.x}px, ${-parallax.y}px, 0)` }}
        className="absolute top-[50%] sm:top-[55%] right-[3%] sm:right-[7%] w-3 h-8 sm:w-4 sm:h-10 rounded-full bg-gradient-to-b from-[#111111] to-[#1F2E4A] border border-[#D9A520]/30 shadow-lg block z-30"
      />

      {/* ─── WIREFRAME SPHERE CIRCLE — bottom-right ──────────────────── */}
      <motion.div
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ transform: `translate3d(${-parallax.x * 1.4}px, ${-parallax.y * 1.4}px, 0)` }}
        className="absolute bottom-[10%] sm:bottom-[12%] right-[5%] sm:right-[10%] w-14 h-14 sm:w-20 sm:h-20 rounded-full border-2 border-dashed border-[#D9A520]/50 block z-30 opacity-70 sm:opacity-100"
      >
        <div className="absolute top-1/2 left-0 right-0 border-t border-dashed border-[#D9A520]/30 -translate-y-1/2" />
        <div className="absolute top-0 bottom-0 left-1/2 border-l border-dashed border-[#D9A520]/30 -translate-x-1/2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#D9A520] shadow-[0_0_10px_rgba(217,165,32,0.8)]" />
      </motion.div>

      {/* ─── FLOATING PARTICLES strip ────────────────────────────────── */}
      {[
        { top: "25%", left: "4%", delay: 0 },
        { top: "65%", left: "5%", delay: 1.2 },
        { top: "48%", right: "4%", delay: 0.6 },
        { top: "18%", right: "15%", delay: 1.8 },
      ].map((pos, i) => (
        <motion.div
          key={i}
          animate={{ y: [-6, 6, -6], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 4 + i * 0.7, repeat: Infinity, ease: "easeInOut", delay: pos.delay }}
          style={pos as React.CSSProperties}
          className="absolute w-1.5 h-1.5 rounded-full bg-[#D9A520] shadow-[0_0_8px_rgba(217,165,32,0.7)] z-20 block"
        />
      ))}
    </div>
  );
}

export default Elements3D;
