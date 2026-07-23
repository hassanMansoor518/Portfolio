"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

export function CustomCursor() {
  // ── Raw mouse position (dot follows instantly) ──────────────
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // ── Spring-smoothed position for ring (light trail) ─────────
  const ringX = useSpring(mouseX, { stiffness: 600, damping: 40, mass: 0.2 });
  const ringY = useSpring(mouseY, { stiffness: 600, damping: 40, mass: 0.2 });

  // ── Motion values for cursor state (no useState = no re-renders)
  const isHover  = useMotionValue(0); // 0 → default, 1 → hover
  const isClick  = useMotionValue(0); // 0 → default, 1 → click
  const isText   = useMotionValue(0); // 0 → default, 1 → text input
  const visible  = useMotionValue(0);

  // ── Derive sizes & colours from motion values ────────────────
  // Dot
  const dotScale  = useTransform([isHover, isClick, isText], ([h, c, t]) =>
    t ? 0 : c ? 0.5 : h ? 0.6 : 1
  );
  const dotH      = useTransform(isText, [0, 1], [8, 22]);
  const dotW      = useTransform(isText, [0, 1], [8, 2]);
  const dotColor  = useTransform(isClick, [0, 1], ["#D9A520", "#FF581A"]);

  // Ring
  const ringScale = useTransform([isHover, isClick], ([h, c]) =>
    c ? 0.7 : h ? 1.45 : 1
  );
  const ringBorder = useTransform(
    [isHover, isClick],
    ([h, c]) => (c ? "rgba(255,88,26,0.9)" : h ? "rgba(217,165,32,0.9)" : "rgba(217,165,32,0.55)")
  );
  const ringBg = useTransform(
    [isHover, isClick],
    ([h, c]) => (c ? "rgba(255,88,26,0.08)" : h ? "rgba(217,165,32,0.07)" : "transparent")
  );

  // Track hover state in a ref so the mousemove handler never stales
  const hoverRef = useRef(false);

  useEffect(() => {
    // ── Mouse move — only sets motion values, no setState ───────
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      visible.set(1);
    };

    const onLeave = () => visible.set(0);
    const onEnter = () => visible.set(1);

    // ── Detect interactive elements ──────────────────────────────
    const onMoveDetect = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = !!target.closest(
        "a, button, [role='button'], [data-cursor='hover'], label, select"
      );
      const isInputEl = !!target.closest("input, textarea");

      if (isInputEl) {
        isText.set(1); isHover.set(0);
      } else if (isInteractive) {
        isHover.set(1); isText.set(0);
      } else {
        isHover.set(0); isText.set(0);
      }
    };

    const onDown = () => isClick.set(1);
    const onUp   = () => isClick.set(0);

    window.addEventListener("mousemove",  onMove,         { passive: true });
    window.addEventListener("mousemove",  onMoveDetect,   { passive: true });
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseenter", onEnter);
    window.addEventListener("mousedown",  onDown,         { passive: true });
    window.addEventListener("mouseup",    onUp,           { passive: true });

    return () => {
      window.removeEventListener("mousemove",  onMove);
      window.removeEventListener("mousemove",  onMoveDetect);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mousedown",  onDown);
      window.removeEventListener("mouseup",    onUp);
    };
  }, [mouseX, mouseY, visible, isHover, isClick, isText]);

  const cursorOpacity = useTransform(
    [visible, isText],
    ([v, t]) => (t ? 0 : v)
  );

  return (
    <>
      {/* Hide native cursor globally except inside inputs and textareas */}
      <style>{`
        * { cursor: none !important; }
        input, textarea, select, [contenteditable="true"] { cursor: text !important; }
        button, a, [role="button"] { cursor: pointer !important; }
      `}</style>

      {/* ── Outer ring (spring trail) ─────────────────────────── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width:  36,
          height: 36,
          scale:       ringScale,
          borderColor: ringBorder,
          backgroundColor: ringBg,
          opacity: cursorOpacity,
          willChange: "transform",
        }}
      />

      {/* ── Inner dot (instant) ───────────────────────────────── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          width:  dotW,
          height: dotH,
          scale:  dotScale,
          backgroundColor: dotColor,
          opacity: cursorOpacity,
          willChange: "transform",
          borderRadius: useTransform(isText, [0, 1], ["50%", "2px"]),
        }}
      />
    </>
  );
}

export default CustomCursor;
