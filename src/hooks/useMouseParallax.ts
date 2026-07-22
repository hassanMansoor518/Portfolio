"use client";

import { useState, useEffect } from "react";

export function useMouseParallax(sensitivity: number = 0.05) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) * sensitivity;
      const y = (e.clientY - innerHeight / 2) * sensitivity;
      setPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [sensitivity]);

  return position;
}
