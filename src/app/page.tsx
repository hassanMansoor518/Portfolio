"use client";

import { useLenis } from "@/hooks/useLenis";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import About from "@/components/About";
import { TechStack } from "@/components/sections/TechStack";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";

export default function Home() {
  // Initialize Lenis smooth scroll
  useLenis();

  return (
    <main className="relative bg-[#F7F3EC] text-[#111111] min-h-screen overflow-hidden">
      {/* Custom Cursor */}
      <CustomCursor />
      {/* Dynamic Background Effects */}
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <FeaturedProjects />
      <Contact />
      <Footer />
    </main>
  );
}
