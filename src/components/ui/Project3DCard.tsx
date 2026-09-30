'use client';

import React, { useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, CheckCircle2, Sparkles, Layers } from 'lucide-react';
import { Project } from '@/types';
import { cn } from '@/lib/utils';

interface Project3DCardProps {
    project: Project;
    featured?: boolean;
    className?: string;
}

export function Project3DCard({ project, featured = false, className = '' }: Project3DCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const [isHovered, setIsHovered] = useState(false);

    // Mouse coordinates relative to card
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Spring physics for smooth tilt effect
    const springConfig = { damping: 20, stiffness: 260 };
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

    // Dynamic light reflection/spotlight position
    const glowX = useMotionValue(0);
    const glowY = useMotionValue(0);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();

        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        mouseX.set(x);
        mouseY.set(y);

        glowX.set(e.clientX - rect.left);
        glowY.set(e.clientY - rect.top);
    }, [mouseX, mouseY, glowX, glowY]);

    const handleMouseEnter = () => setIsHovered(true);

    const handleMouseLeave = () => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
    };

    const handleCardClick = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest('a') || target.closest('button')) return;
        router.push(`/projects/${project.slug}`);
    };

    return (
        <motion.div
            ref={cardRef}
            onClick={handleCardClick}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: 1000,
                transformStyle: 'preserve-3d',
            }}
            className={cn(
                "relative group rounded-3xl transition-shadow duration-500 cursor-pointer",
                featured ? "col-span-1 md:col-span-2 lg:col-span-2" : "col-span-1",
                className
            )}
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: 'preserve-3d',
                }}
                className={cn(
                    "relative h-full w-full rounded-3xl border border-black/10 dark:border-white/10",
                    "bg-gradient-to-b from-card/90 to-card/60 backdrop-blur-xl",
                    "p-6 sm:p-8 flex flex-col justify-between overflow-hidden",
                    "shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300",
                    isHovered && "border-primary/40 dark:border-primary/40"
                )}
            >
                {/* 1. Cursor-Following Holographic Spotlight Glare */}
                <motion.div
                    className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                        background: `radial-gradient(400px circle at ${glowX.get()}px ${glowY.get()}px, rgba(56, 189, 248, 0.15), transparent 70%)`
                    }}
                />

                {/* 2. Top Window Mockup Header */}
                <div
                    style={{ transform: 'translateZ(25px)' }}
                    className="flex items-center justify-between gap-4 mb-6 z-10"
                >
                    <div className="flex items-center gap-2">
                        {/* Traffic light dots */}
                        <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        </div>
                        <span className="ml-2 text-[11px] font-mono tracking-wider text-muted-foreground bg-muted/60 px-2.5 py-0.5 rounded-full border border-black/5 dark:border-white/5">
                            {project.category || 'Web App'}
                        </span>
                    </div>

                    {/* Status Pill */}
                    {project.status === 'completed' && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 backdrop-blur-md">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            Live System
                        </div>
                    )}
                </div>

                {/* 3. Center Preview Section with 3D Depth */}
                <div
                    style={{ transform: 'translateZ(35px)' }}
                    className={cn(
                        "relative w-full rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-muted/50 mb-6",
                        featured ? "aspect-[16/9] sm:aspect-[21/9]" : "aspect-[16/10]"
                    )}
                >
                    {project.image ? (
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                            sizes={featured ? "(max-width: 1200px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                        />
                    ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground p-6">
                            <Layers className="w-12 h-12 opacity-30 mb-2" />
                            <span className="text-xs font-mono">Interactive Web Preview</span>
                        </div>
                    )}

                    {/* Gradient Overlay for Aesthetics */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* 4. Project Information with 3D Popout */}
                <div
                    style={{ transform: 'translateZ(40px)' }}
                    className="flex flex-col flex-1 justify-between gap-4 z-10"
                >
                    <div>
                        <div className="flex items-start justify-between gap-2">
                            <h3 className="text-xl sm:text-2xl font-black text-foreground group-hover:text-primary transition-colors tracking-tight">
                                {project.title}
                            </h3>
                            <Link
                                href={`/projects/${project.slug}`}
                                className="w-9 h-9 rounded-full bg-muted/80 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 flex-shrink-0 group-hover:scale-110"
                                title="Lihat Detail Proyek"
                            >
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    <div>
                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                            {project.techStack?.slice(0, featured ? 6 : 4).map((tech, i) => (
                                <span
                                    key={i}
                                    className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium bg-muted/80 text-muted-foreground border border-black/5 dark:border-white/5 hover:border-primary/30 transition-colors"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-3 pt-4 border-t border-black/5 dark:border-white/5">
                            {project.demoUrl && (
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:opacity-95 shadow-md shadow-primary/20 transition-all hover:scale-105"
                                >
                                    <ExternalLink className="w-3.5 h-3.5" />
                                    Launch Demo
                                </a>
                            )}
                            {project.repoUrl && (
                                <a
                                    href={project.repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-black/10 dark:border-white/10 bg-background/80 text-xs font-semibold text-foreground hover:bg-muted transition-all"
                                >
                                    <Github className="w-3.5 h-3.5" />
                                    Source
                                </a>
                            )}
                            <Link
                                href={`/projects/${project.slug}`}
                                className="ml-auto text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
                            >
                                Studi Kasus →
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
