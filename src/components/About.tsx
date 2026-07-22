"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Briefcase, Globe, CheckCircle2, ThumbsUp, Award, Sparkles } from "lucide-react";
import { SocialLinks } from "@/components/SocialLinks";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import { useMagnetic } from "@/hooks/useMagnetic";

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { icon: Briefcase, value: "MERN", label: "Stack Developer" },
    { icon: Globe, value: "3+", label: "Production Apps" },
    { icon: CheckCircle2, value: "15+", label: "REST APIs Built" },
    { icon: ThumbsUp, value: "24/7", label: "Learning & Coding" },
    { icon: Award, value: "2025", label: "BanoQabil Certified" },
];
function About() {
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
        <div id="about" className="w-full bg-[#111111] text-[#F7F3EC] z-30 relative">

            <div className="w-full overflow-hidden leading-none">
                <svg
                    viewBox="0 0 1440 90"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full block"
                    preserveAspectRatio="none"
                    style={{ height: "90px" }}
                >
                    {/* Cream-side filler so there's no gap */}
                    <polygon points="0,90 1440,0 1440,90" fill="#111111" />
                </svg>
            </div >

            <div className="py-16 px-6 md:px-12">

                {/* Subtle Radial Background Glow inside Dark Section */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#D9A520]/10 via-transparent to-transparent pointer-events-none" />

                <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">

                    {/* Main Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="font-syne font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight text-white mb-5 leading-tight"
                    >
                        Crafting Digital Experiences <br className="hidden sm:inline" />
                        That Make an Impact
                    </motion.h2>

                    {/* Subtitle Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-2xl text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed mb-14"
                    >
                        MERN Stack Developer with hands-on experience building and shipping production-ready web apps, including a multi-tenant AI SaaS platform, a collaborative dev-tools product, and a live food delivery app. Currently pursuing a BS in Software Engineering at Sindh Madressatul Islam University.
                    </motion.p>

                    {/* 5-Column Interactive Statistics Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 pt-4 pb-14 border-b border-neutral-800/80"
                    >
                        {stats.map((stat, i) => {
                            const Icon = stat.icon;
                            return (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -4, scale: 1.02 }}
                                    className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-md hover:border-[#D9A520]/40 transition-all duration-300 flex items-center gap-3.5 justify-center sm:justify-start text-left shadow-md group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-[#D9A520] group-hover:bg-[#D9A520] group-hover:text-[#111111] transition-colors duration-300 shrink-0">
                                        <Icon className="w-4 h-4" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-syne font-bold text-lg sm:text-xl text-[#F7F3EC] leading-none group-hover:text-[#D9A520] transition-colors">
                                            {stat.value}
                                        </span>
                                        <span className="text-[10px] text-neutral-400 font-medium uppercase tracking-wider mt-1 leading-tight">
                                            {stat.label}
                                        </span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* Center CTA Button "MORE ABOUT ME ->" */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        className="pt-10"
                    >
                        <motion.a
                            ref={btnRef}
                            {...btnProps}
                            href="#about"
                            className="group relative inline-flex items-center gap-3 px-9 py-4 rounded-full border border-[#D9A520]/70 text-xs font-mono font-semibold uppercase tracking-widest text-[#D9A520] bg-neutral-950/80 hover:bg-[#D9A520] hover:text-[#111111] transition-all duration-300 shadow-[0_10px_30px_rgba(217,165,32,0.15)] hover:shadow-[0_15px_40px_rgba(217,165,32,0.35)]"
                        >
                            <span>MORE ABOUT ME</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                        </motion.a>
                    </motion.div>

                    {/* Social Links & Scroll Indicator Footer */}
                    <div className="w-full flex justify-between items-center mt-14 pt-8 border-t border-neutral-900">
                        <SocialLinks />
                        <ScrollIndicator />
                    </div>

                </div>
            </div>
        </div>

    )
}

export default About;