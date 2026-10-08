"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

import ScrollAdventure from "@/components/ui/animated-scroll";
import { ArgentLoopInfiniteSlider } from "@/components/ui/argent-loop-infinite-slider";
import { HorizontalTimeline } from "@/components/ui/horizontal-timeline";
import { CertificateShowcase } from "@/components/ui/certificate-marquee";
import { GitHubShowcase } from "@/components/ui/github-showcase";

import { AboutLeadIn } from "./about/AboutLeadIn";
import { ScrollHijackSection } from "./about/ScrollHijackSection";
import { AuditFunnel } from "./about/AuditFunnel";

const fallbackImages = [
    "/journey/researchassistant2.webp",
    "/journey/aideveloperintern1.webp",
    "/journey/computernetworkpracticumassistant2.webp",
    "/journey/chiefcommittee1.webp",
    "/journey/dataentryassistant1.webp"
];

const showcaseMembers = [
    ...portfolioData.experiences.slice(0, 5).map((exp, index) => ({
        id: exp.id,
        name: exp.company,
        role: exp.position,
        description: exp.description,
        period: exp.isOngoing ? `${exp.startDate} - Present` : `${exp.startDate} - ${exp.endDate || 'Present'}`,
        image: fallbackImages[index % fallbackImages.length],
        social: exp.externalLink ? { website: Array.isArray(exp.externalLink) ? exp.externalLink[0] : exp.externalLink } : undefined
    })),
    // View more
    {
        id: 'view-more',
        name: 'View more',
        role: 'Explore all experiences',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop',
        social: { website: '/experience' }
    }
];

export default function AboutSection() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.12], [1, 0.92]);
    const opacity = useTransform(scrollYProgress, [0.03, 0.12], [1, 0]);
    const yLeadIn = useTransform(scrollYProgress, [0, 0.12], [0, -80]);

    const leadInTriggerRef = useRef(null);

    return (
        <section
            id="about"
            ref={containerRef}
            className="relative bg-background text-foreground dark:bg-black dark:text-white transition-colors duration-500"
        >
            {/* 1. STICKY PLANE - Lead-in */}
            <div className="sticky top-0 h-screen w-full flex items-center justify-center z-0 overflow-hidden pointer-events-none">
                <motion.div
                    style={{ scale, opacity, y: yLeadIn }}
                    className="relative px-4 md:px-6 w-full max-w-[1700px] mx-auto"
                    ref={leadInTriggerRef}
                >
                    <AboutLeadIn />
                </motion.div>
            </div>

            {/* 2. OVERLAY LAYER - Hijack Zone & Footer */}
            <div className="relative pointer-events-none mt-[20vh] md:mt-[20vh]">
                <div className="bg-background dark:bg-black transition-colors duration-500 pointer-events-auto relative">

                    <ScrollHijackSection />
                    <ScrollAdventure />
                    <ArgentLoopInfiniteSlider />
                    
                    <div className="-mt-[50vh] flex flex-col items-center w-full bg-background relative z-20 pt-32 pb-32">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                            className="w-full flex flex-col items-center max-w-[1700px] px-4 md:px-6"
                        >
                            <div className="mb-6 md:mb-10 text-center space-y-4">
                            </div>
                            <div className="w-full pb-0">
                                <HorizontalTimeline data={showcaseMembers.map((member) => ({
                                    title: member.id === 'view-more' ? 'Explore all experiences' : (member.role || member.name),
                                    isEnd: member.id === 'view-more',
                                    period: 'period' in member ? member.period : undefined,
                                    content: member.id === 'view-more' ? (
                                        <Link
                                            href={member.social?.website || '/experience'}
                                            className="relative flex items-center h-[140px] w-[250px] z-30"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="p-4 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(var(--primary),0.3)]">
                                                    <ArrowUpRight className="w-8 h-8 text-neutral-600 dark:text-neutral-400 transition-all duration-500 group-hover:text-primary-foreground group-hover:rotate-45 group-hover:scale-110" />
                                                </div>
                                                <span className="text-lg md:text-xl font-bold text-neutral-900 dark:text-white opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap drop-shadow-sm">
                                                    View more
                                                </span>
                                            </div>
                                        </Link>
                                    ) : (
                                        <div className="flex flex-col gap-4 w-[320px] md:w-[400px] border border-neutral-200 dark:border-neutral-800 p-6 rounded-2xl bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md shadow-xl mt-4">
                                            <div className="flex flex-col gap-2">
                                                <div className="flex flex-row items-center justify-between">
                                                    <h4 className="text-lg font-bold text-neutral-900 dark:text-white leading-tight">
                                                        {member.name}
                                                    </h4>
                                                </div>
                                            </div>

                                            {'description' in member && member.description && (
                                                <p className="text-sm font-normal text-neutral-600 dark:text-neutral-400 leading-relaxed mt-1 line-clamp-3" title={member.description}>
                                                    {member.description}
                                                </p>
                                            )}

                                            {member.social?.website && (
                                                <div className="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                                                    <Link href={member.social.website} target="_blank" className="inline-flex items-center text-xs font-bold text-primary hover:underline">
                                                        View Details →
                                                    </Link>
                                                </div>
                                            )}
                                        </div>
                                    )
                                }))} />
                            </div>
                        </motion.div>

                        {/* Certificate Showcase Section */}
                        <div className="w-full mt-8 md:mt-12">
                            <CertificateShowcase />
                        </div>

                        {/* GitHub Showcase Section */}
                        <div className="w-full mt-12 mb-8">
                            <GitHubShowcase />
                        </div>
                    </div>
                    <AuditFunnel />
                </div>
            </div>
        </section >
    );
}
