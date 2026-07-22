"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Briefcase, Globe, CheckCircle2, ThumbsUp, Award, Sparkles } from "lucide-react";
import { FloatingCards } from "@/components/FloatingCards";
import { Elements3D } from "@/components/Elements3D";
import { SocialLinks } from "@/components/SocialLinks";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import { useMagnetic } from "@/hooks/useMagnetic";

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { icon: Briefcase, value: "10+", label: "Years Experience" },
    { icon: Globe, value: "64+", label: "Completed Projects" },
    { icon: CheckCircle2, value: "151+", label: "Happy Projects" },
    { icon: ThumbsUp, value: "151+", label: "Client Satisfaction" },
    { icon: Award, value: "98%", label: "Client Satisfaction" },
];

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    const { ref: btnRef, magneticProps: btnProps } = useMagnetic<HTMLAnchorElement>(0.25);

    useEffect(() => {
        if (!containerRef.current || !imageRef.current) return;

        const ctx = gsap.context(() => {
            // Smooth scroll parallax on text only
            if (textRef.current) {
                gsap.to(textRef.current, {
                    y: -25,
                    opacity: 0.7,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: 1,
                    },
                });
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="hero" className="relative min-h-screen pt-20 flex flex-col justify-between overflow-hidden">

            <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center pt-8 z-20">

                {/* Floating Cards Layer */}
                <FloatingCards />

                {/* 3D Floating Elements Layer */}
                <Elements3D />

                {/* TOP BIG TYPOGRAPHY & PERSON IMAGE COMPOSITION */}
                <div className="relative w-full flex flex-col items-center justify-center">

                    {/* ORANGE/GOLD ACCENT SHAPE BEHIND DEVELOPER WITH GLOW (z-0) */}
                    <motion.div
                        animate={{
                            rotate: [-12, -8, -12],
                            scale: [1, 1.03, 1],
                        }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute left-[15%] sm:left-[22%] md:left-[26%] top-[25%] sm:top-[28%] w-28 h-28 sm:w-40 sm:h-40 md:w-52 md:h-52 bg-gradient-to-br from-[#D9A520] to-[#b8860b] rounded-[2.5rem] shadow-[0_20px_50px_rgba(217,165,32,0.4)] opacity-95 z-0 border border-white/30"
                    />

                    {/* CIRCULAR BADGE ROTATING IN BACKGROUND (z-0) */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-[8%] left-[22%] sm:left-[28%] w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-[#111111]/15 flex items-center justify-center p-2 hidden sm:flex z-0"
                    >
                        <div className="w-full h-full rounded-full border border-dashed border-[#D9A520] flex items-center justify-center text-[8px] font-mono uppercase tracking-widest text-[#111111]/60">
                            <Sparkles className="w-4 h-4 text-[#D9A520]" />
                        </div>
                    </motion.div>

                    {/* FIRST LINE: "I'M FULL STACK" (Solid text - placed behind developer image) */}
                    <div ref={textRef} className="absolute inset-0 flex flex-col justify-center items-center select-none z-5 pointer-events-none">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="pb-10 font-syne font-black text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] tracking-tight uppercase leading-none text-[#111111] whitespace-nowrap drop-shadow-sm -mb-8 sm:-mb-12 md:-mb-16"
                        >
                            I&apos;M FULL STACK
                        </motion.h1>

                        <div className="h-20 sm:h-28 md:h-36" />
                    </div>

                    {/* CENTERED DEVELOPER PROFILE IMAGE (STATIONARY - NO UPWARD MOVEMENT ON HOVER OR MOUSE MOVE) */}
                    <motion.div
                        ref={imageRef}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10 w-full max-w-[320px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[520px] flex justify-center items-end"
                    >
                        <div className="relative group w-full h-full flex justify-center">
                            <Image
                                src="/HeroSectionProfilePIc.png"
                                alt="Hassan Full Stack Developer"
                                width={650}
                                height={750}
                                priority
                                className="object-contain filter drop-shadow-[0_25px_35px_rgba(17,17,17,0.25)] grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                            />
                        </div>
                    </motion.div>

                    {/* SECOND LINE: "DEVELOPER" (Outlined stroke text) */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center select-none z-20 pointer-events-none">
                        <div className="h-16 sm:h-24 md:h-32" />

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                            className="pt-15 font-syne font-black text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] tracking-tight uppercase leading-none text-outline  whitespace-nowrap"
                        >
                            DEVELOPER
                        </motion.h1>
                    </div>

                </div>

            </div>


        </section>
    );
}