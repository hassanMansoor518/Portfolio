"use client";

import { useLenis } from "@/hooks/useLenis";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import About from "@/components/About";
import { TechStack } from "@/components/sections/TechStack";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";

export default function Home() {
  // Initialize Lenis smooth scroll
  useLenis();

  return (
    <main className="relative bg-[#F7F3EC] text-[#111111] min-h-screen overflow-hidden">
      {/* Dynamic Background Effects */}
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <FeaturedProjects />
    </main>
  );
}
