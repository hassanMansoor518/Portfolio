"use client";

import { useRef, MouseEvent } from "react";

export function useMagnetic<T extends HTMLElement = HTMLElement>(strength: number = 0.3) {
  const ref = useRef<T | null>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = (e.clientX - centerX) * strength;
    const distanceY = (e.clientY - centerY) * strength;

    ref.current.style.transform = `translate3d(${distanceX}px, ${distanceY}px, 0px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = `translate3d(0px, 0px, 0px)`;
    ref.current.style.transition = "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)";
  };

  const handleMouseEnter = () => {
    if (!ref.current) return;
    ref.current.style.transition = "none";
  };

  return {
    ref,
    magneticProps: {
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      onMouseEnter: handleMouseEnter,
    },
  };
}
