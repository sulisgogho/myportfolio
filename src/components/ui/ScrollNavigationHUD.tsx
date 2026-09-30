'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ChevronUp, Code2, Sparkles, Github, Layers, Compass, Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SectionItem {
    id: string;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
}

const SECTIONS: SectionItem[] = [
    { id: 'hero', label: 'Overview', icon: Compass },
    { id: 'tech-stack', label: 'Tech Stack', icon: Code2 },
    { id: 'capabilities', label: 'Capabilities', icon: Layers },
    { id: 'projects', label: 'Creations', icon: Sparkles },
    { id: 'github-activity', label: 'GitHub', icon: Github },
    { id: 'experience', label: 'Experience', icon: Briefcase },
];

export function ScrollNavigationHUD() {
    const { scrollYProgress } = useScroll();
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 24,
        restDelta: 0.001
    });

    const [percent, setPercent] = useState(0);
    const [activeSection, setActiveSection] = useState('hero');
    const [hoveredSection, setHoveredSection] = useState<string | null>(null);

    // Transform progress to SVG stroke dash offset (circumference = 2 * pi * 15 ≈ 94.2)
    const strokeDashoffset = useTransform(smoothProgress, [0, 1], [94.2, 0]);

    // Update percentage display
    useEffect(() => {
        const unsubscribe = smoothProgress.on('change', (latest) => {
            setPercent(Math.min(100, Math.max(0, Math.round(latest * 100))));
        });
        return () => unsubscribe();
    }, [smoothProgress]);

    // Active Section Spy via Intersection Observer
    useEffect(() => {
        const observerCallback: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, {
            root: null,
            rootMargin: '-20% 0px -50% 0px',
            threshold: [0.25, 0.5]
        });

        SECTIONS.forEach((s) => {
            const el = document.getElementById(s.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <aside
            aria-label="Scroll Navigation"
            className="fixed right-5 top-1/2 -translate-y-1/2 z-[45] hidden md:flex flex-col items-center gap-4 select-none pointer-events-auto"
        >
            {/* 1. Circular Gauge Progress HUD */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative flex items-center justify-center w-12 h-12 rounded-full bg-background/80 dark:bg-card/80 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-lg group cursor-pointer"
                onClick={scrollToTop}
                title="Scroll Progress (Klik untuk ke atas)"
            >
                {/* SVG Progress Circle */}
                <svg className="w-10 h-10 -rotate-90" viewBox="0 0 36 36">
                    {/* Background track */}
                    <circle
                        cx="18"
                        cy="18"
                        r="15"
                        fill="none"
                        className="stroke-muted/40"
                        strokeWidth="2.5"
                    />
                    {/* Animated dynamic progress track */}
                    <motion.circle
                        cx="18"
                        cy="18"
                        r="15"
                        fill="none"
                        className="stroke-primary"
                        strokeWidth="2.5"
                        strokeDasharray={94.2}
                        style={{ strokeDashoffset }}
                        strokeLinecap="round"
                    />
                </svg>

                {/* Center Content: Percent or Arrow on hover */}
                <div className="absolute inset-0 flex items-center justify-center text-[10px] font-mono font-bold text-foreground">
                    <span className="group-hover:hidden">{percent}%</span>
                    <ChevronUp className="w-4 h-4 text-primary hidden group-hover:block transition-transform duration-200" />
                </div>
            </motion.div>

            {/* 2. Interactive Navigation Dock Pills */}
            <div className="flex flex-col items-center gap-2 p-2 rounded-full bg-background/70 dark:bg-card/70 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-xl">
                {SECTIONS.map((section, idx) => {
                    const isActive = activeSection === section.id;
                    const isHovered = hoveredSection === section.id;
                    const Icon = section.icon;

                    return (
                        <div key={section.id} className="relative flex items-center">
                            {/* Hover Tooltip Ribbon */}
                            {isHovered && (
                                <motion.div
                                    initial={{ opacity: 0, x: 10, scale: 0.9 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, x: 10, scale: 0.9 }}
                                    className="absolute right-10 px-3 py-1 rounded-lg bg-foreground text-background text-xs font-bold whitespace-nowrap shadow-xl flex items-center gap-2 pointer-events-none"
                                >
                                    <span className="text-[10px] font-mono opacity-70">0{idx + 1}</span>
                                    <span>{section.label}</span>
                                </motion.div>
                            )}

                            {/* Section Button */}
                            <button
                                onClick={() => scrollTo(section.id)}
                                onMouseEnter={() => setHoveredSection(section.id)}
                                onMouseLeave={() => setHoveredSection(null)}
                                aria-label={`Scroll to ${section.label}`}
                                className={cn(
                                    "relative w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
                                    isActive
                                        ? "text-primary scale-110 shadow-md shadow-primary/20"
                                        : "text-muted-foreground hover:text-foreground hover:scale-105"
                                )}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activeHudIndicator"
                                        className="absolute inset-0 rounded-full bg-primary/15 border border-primary/40 -z-10"
                                        transition={{ type: "spring", stiffness: 350, damping: 25 }}
                                    />
                                )}
                                <Icon className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    );
                })}
            </div>
        </aside>
    );
}

export default ScrollNavigationHUD;
