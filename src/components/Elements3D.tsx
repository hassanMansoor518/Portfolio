"use client";

import { motion } from "framer-motion";
import { useMouseParallax } from "@/hooks/useMouseParallax";

export function Elements3D() {
  const parallax = useMouseParallax(0.05);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* ─── GLASS CUBE — top-right ─────────────────────────────────── */}
      <motion.div
        animate={{ rotateY: [0, 360], rotateX: [15, -15, 15], y: [-10, 10, -10] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          perspective: "600px",
          transformStyle: "preserve-3d",
          transform: `translate3d(${-parallax.x * 1.6}px, ${-parallax.y * 1.6}px, 0)`,
        }}
        className="absolute top-[8%] right-[8%] w-20 h-20 hidden lg:block z-30"
      >
        {/* Cube faces */}
        {[
          "rotateY(0deg) translateZ(40px)",
          "rotateY(90deg) translateZ(40px)",
          "rotateY(180deg) translateZ(40px)",
          "rotateY(-90deg) translateZ(40px)",
          "rotateX(90deg) translateZ(40px)",
          "rotateX(-90deg) translateZ(40px)",
        ].map((transform, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-xl border border-white/50 bg-white/10 backdrop-blur-md"
            style={{ transform }}
          />
        ))}
        {/* Gold glow overlay */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#D9A520]/30 to-transparent blur-sm" />
      </motion.div>

      {/* ─── FLOATING GOLD TORUS RING — bottom-left ──────────────────── */}
      <motion.div
        animate={{ rotateZ: [0, 360] }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        style={{
          perspective: "800px",
          transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0)`,
        }}
        className="absolute bottom-[24%] left-[6%] w-24 h-24 hidden lg:block z-30"
      >
        <motion.div
          animate={{ rotateX: [60, 80, 60] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full rounded-full border-[10px] border-[#D9A520]/60 shadow-[0_0_30px_rgba(217,165,32,0.5),0_0_60px_rgba(217,165,32,0.2)]"
        />
      </motion.div>

      {/* ─── SPINNING HEXAGON — top-left ─────────────────────────────── */}


      {/* ─── GLOWING GOLD ORB — top-center ───────────────────────────── */}
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ transform: `translate3d(${parallax.x * 0.8}px, ${parallax.y * 0.8}px, 0)` }}
        className="absolute top-[10%] left-[46%] w-5 h-5 rounded-full bg-[#D9A520] shadow-[0_0_25px_8px_rgba(217,165,32,0.6)] z-30 hidden md:block"
      />

      {/* ─── SMALL DARK PILL — right-center ──────────────────────────── */}
      <motion.div
        animate={{ y: [-12, 12, -12], rotateZ: [0, 15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        style={{ transform: `translate3d(${-parallax.x}px, ${-parallax.y}px, 0)` }}
        className="absolute top-[55%] right-[7%] w-4 h-10 rounded-full bg-gradient-to-b from-[#111111] to-[#1F2E4A] border border-[#D9A520]/30 shadow-lg hidden md:block z-30"
      />

      {/* ─── WIREFRAME SPHERE CIRCLE — bottom-right ──────────────────── */}
      <motion.div
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ transform: `translate3d(${-parallax.x * 1.4}px, ${-parallax.y * 1.4}px, 0)` }}
        className="absolute bottom-[12%] right-[10%] w-20 h-20 rounded-full border-2 border-dashed border-[#D9A520]/50 hidden lg:block z-30"
      >
        <div className="absolute top-1/2 left-0 right-0 border-t border-dashed border-[#D9A520]/30 -translate-y-1/2" />
        <div className="absolute top-0 bottom-0 left-1/2 border-l border-dashed border-[#D9A520]/30 -translate-x-1/2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#D9A520] shadow-[0_0_12px_rgba(217,165,32,0.8)]" />
      </motion.div>

      {/* ─── FLOATING PARTICLES strip ────────────────────────────────── */}
      {[
        { top: "30%", left: "3%", delay: 0 },
        { top: "65%", left: "5%", delay: 1.2 },
        { top: "48%", right: "4%", delay: 0.6 },
        { top: "18%", right: "20%", delay: 1.8 },
      ].map((pos, i) => (
        <motion.div
          key={i}
          animate={{ y: [-8, 8, -8], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 4 + i * 0.7, repeat: Infinity, ease: "easeInOut", delay: pos.delay }}
          style={pos as React.CSSProperties}
          className="absolute w-2 h-2 rounded-full bg-[#D9A520]/70 shadow-[0_0_10px_rgba(217,165,32,0.7)] hidden sm:block z-30"
        />
      ))}
    </div>
  );
}
