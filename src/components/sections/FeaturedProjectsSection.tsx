'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { Sparkles, ArrowRight, ArrowUpRight, ExternalLink, Github, Layers, ChevronLeft, ChevronRight } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { Project } from '@/types';

import { cn } from '@/lib/utils';

export function FeaturedProjectsSection() {
    const router = useRouter();
    const sectionRef = useRef<HTMLElement>(null);

    // 1. Tepat 4 Project Unggulan untuk Halaman Utama
    const allProjects = portfolioData.projects || [];
    const featuredProjects = allProjects.slice(0, 4);

    // 2. State untuk Project Utama di Bagian Atas yang Berganti Tiap 2 Detik
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Rotasi Otomatis Tiap 2 Detik (background timer halus)
    useEffect(() => {
        if (isPaused || featuredProjects.length === 0) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % featuredProjects.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [isPaused, featuredProjects.length]);

    // Scroll parallax tracking
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, { damping: 25, stiffness: 120 });
    const yHero = useTransform(smoothProgress, [0, 1], [25, -25]);

    const activeProject = featuredProjects[activeIndex] || featuredProjects[0];

    // Navigasi ke Halaman Detail Project
    const handleOpenDetail = (slug: string) => {
        router.push(`/projects/${slug}`);
    };

    return (
        <section
            ref={sectionRef}
            id="projects"
            className="relative py-24 lg:py-32 px-6 md:px-12 bg-background overflow-hidden border-t border-black/5 dark:border-white/5"
        >
            {/* Ambient background removed for cleaner look, handled by global aurora background */}

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section dengan Desain Mewah & Eye-Catching */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 35, scale: 0.97, filter: 'blur(8px)' }}
                        whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-sky-500/10 via-primary/15 to-purple-500/10 text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20 backdrop-blur-xl shadow-lg shadow-primary/5">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                            <Sparkles className="w-3.5 h-3.5 text-primary" />
                            Curated Portfolio • 4 Flagship Works
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-[1.05]">
                            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-primary to-purple-500">Creations</span>
                        </h2>
                        <p className="text-muted-foreground mt-3 max-w-2xl text-sm sm:text-base leading-relaxed">
                            Eksplorasi sistem web interaktif, platform analitik data, dan rekayasa fullstack yang dibangun dengan presisi tinggi. Klik proyek untuk melihat studi kasus lengkap.
                        </p>
                    </motion.div>

                    {/* Minimalist Interactive Carousel Controller */}
                    <div className="flex items-center gap-3 self-start md:self-end">
                        <div className="flex items-center gap-1 p-1 rounded-2xl bg-card/80 border border-black/10 dark:border-white/10 backdrop-blur-xl shadow-sm">
                            <button
                                onClick={() => setActiveIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length)}
                                className="w-8 h-8 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-all"
                                aria-label="Previous project"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <span className="text-xs font-mono font-bold px-2.5 text-foreground">
                                0{activeIndex + 1} <span className="text-muted-foreground/60 font-normal">/</span> 04
                            </span>
                            <button
                                onClick={() => setActiveIndex((prev) => (prev + 1) % featuredProjects.length)}
                                className="w-8 h-8 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-all"
                                aria-label="Next project"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* 1. PROJECT UTAMA DI BAGIAN ATAS (Berganti Otomatis Tiap 2 Detik) */}
                <motion.div
                    style={{ y: yHero }}
                    initial={{ opacity: 0, y: 60, scale: 0.94, filter: 'blur(12px)' }}
                    whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-14"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className="relative rounded-3xl border border-black/15 dark:border-white/15 bg-gradient-to-b from-card/95 via-card/85 to-card/65 backdrop-blur-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-primary/40">
                        {/* Dynamic Smooth Linear Progress Line (2s duration) */}
                        <div className="w-full h-[2.5px] bg-muted/30 overflow-hidden relative">
                            {!isPaused && (
                                <motion.div
                                    key={activeIndex}
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 2, ease: "linear" }}
                                    className="h-full bg-gradient-to-r from-sky-400 via-primary to-purple-500"
                                />
                            )}
                            {isPaused && (
                                <div className="h-full w-full bg-primary/70" />
                            )}
                        </div>

                        {/* Top Window Chrome & 5 Selector Tabs */}
                        <div className="px-6 py-4 border-b border-black/5 dark:border-white/10 flex items-center justify-between gap-4 bg-muted/20">
                            {/* Window Traffic Lights */}
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                                <span className="ml-3 text-[11px] font-mono tracking-widest uppercase font-bold text-muted-foreground">
                                    SPOTLIGHT CREATION • 0{activeIndex + 1}
                                </span>
                            </div>

                            {/* 5 Compact Project Selector Pills */}
                            <div className="flex items-center gap-1.5">
                                {featuredProjects.map((p, idx) => (
                                    <button
                                        key={p.id || p.slug}
                                        onClick={() => setActiveIndex(idx)}
                                        className={cn(
                                            "relative px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all duration-300",
                                            activeIndex === idx
                                                ? "bg-foreground text-background shadow-md scale-105"
                                                : "text-muted-foreground hover:text-foreground bg-muted/40 hover:bg-muted"
                                        )}
                                    >
                                        0{idx + 1}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Main Project Showcase Body with Crossfade Transition */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeProject.id || activeProject.slug}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.35, ease: "easeInOut" }}
                                className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center cursor-pointer group"
                                onClick={() => handleOpenDetail(activeProject.slug)}
                            >
                                {/* Left Content: Details & CTAs */}
                                <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                                    <div>
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-primary/20">
                                            {activeProject.category || 'Engineering'}
                                        </div>
                                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground group-hover:text-primary transition-colors tracking-tight leading-tight">
                                            {activeProject.title}
                                        </h3>
                                        <p className="text-sm sm:text-base text-muted-foreground mt-4 leading-relaxed line-clamp-3">
                                            {activeProject.description}
                                        </p>
                                    </div>

                                    {/* Tech Stack Chips */}
                                    <div className="flex flex-wrap gap-2">
                                        {activeProject.techStack?.slice(0, 5).map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 rounded-xl text-xs font-mono font-semibold bg-muted/80 text-foreground/80 border border-black/5 dark:border-white/10"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-black/5 dark:border-white/10">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleOpenDetail(activeProject.slug);
                                            }}
                                            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-foreground text-background font-extrabold text-xs uppercase tracking-wider hover:opacity-90 transition-all shadow-lg hover:gap-3"
                                        >
                                            Buka Detail Studi Kasus
                                            <ArrowRight className="w-4 h-4" />
                                        </button>

                                        {activeProject.demoUrl && (
                                            <a
                                                href={activeProject.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl border border-black/10 dark:border-white/10 bg-background/80 hover:bg-muted text-xs font-semibold text-foreground transition-all"
                                            >
                                                <ExternalLink className="w-3.5 h-3.5" />
                                                Live Demo
                                            </a>
                                        )}

                                        {activeProject.repoUrl && (
                                            <a
                                                href={activeProject.repoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl border border-black/10 dark:border-white/10 bg-background/80 hover:bg-muted text-xs font-semibold text-foreground transition-all"
                                            >
                                                <Github className="w-3.5 h-3.5" />
                                                Source
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Right Content: Visual Mockup */}
                                <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-muted/40 shadow-inner group/preview">
                                    {activeProject.image ? (
                                        <Image
                                            src={activeProject.image}
                                            alt={activeProject.title}
                                            fill
                                            className="object-cover object-top group-hover/preview:scale-105 transition-transform duration-700 ease-out"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                            priority
                                        />
                                    ) : (
                                        <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground p-8">
                                            <Layers className="w-16 h-16 opacity-30 mb-3" />
                                            <span className="text-sm font-mono">Interactive Web Preview</span>
                                        </div>
                                    )}

                                    {/* Hover prompt */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black font-bold text-xs shadow-lg">
                                            Klik untuk membuka halaman detail
                                            <ArrowUpRight className="w-3.5 h-3.5" />
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>

                {/* 2. GRID 4 PROYEK UNGGULAN */}
                <div className="mb-14">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="text-xl sm:text-2xl font-black text-foreground tracking-tight">
                                4 Proyek Unggulan
                            </h3>
                            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                                Klik salah satu kartu di bawah untuk membuka halaman detailnya, atau arahkan kursor untuk menyorot ke bagian atas.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {featuredProjects.map((project: Project, idx: number) => {
                            const isCurrent = activeIndex === idx;
                            return (
                                <motion.div
                                    key={project.id || project.slug}
                                    initial={{ opacity: 0, y: 50, scale: 0.94, filter: 'blur(8px)' }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                                    viewport={{ once: false, amount: 0.12 }}
                                    transition={{ duration: 0.65, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                    onClick={() => handleOpenDetail(project.slug)}
                                    onMouseEnter={() => {
                                        setActiveIndex(idx);
                                        setIsPaused(true);
                                    }}
                                    onMouseLeave={() => setIsPaused(false)}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className={cn(
                                        "relative rounded-2xl border p-4 flex flex-col justify-between cursor-pointer transition-all duration-300 backdrop-blur-xl group",
                                        isCurrent
                                            ? "border-primary bg-primary/10 shadow-xl shadow-primary/10 ring-2 ring-primary/40"
                                            : "border-black/10 dark:border-white/10 bg-card/80 hover:border-primary/40 hover:bg-card"
                                    )}
                                >
                                    <div>
                                        {/* Card Header & Status */}
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                                                0{idx + 1} • {project.category || 'Engineering'}
                                            </span>
                                            {isCurrent ? (
                                                <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                                    Aktif
                                                </span>
                                            ) : (
                                                <span className="text-[10px] font-mono text-muted-foreground/60 group-hover:text-primary transition-colors">
                                                    Pilih
                                                </span>
                                            )}
                                        </div>

                                        {/* Thumbnail Image */}
                                        <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-3 bg-muted border border-black/5 dark:border-white/5">
                                            {project.image ? (
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                                    sizes="(max-width: 768px) 100vw, 20vw"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                                                    <Layers className="w-6 h-6 opacity-30" />
                                                </div>
                                            )}
                                        </div>

                                        <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                                            {project.title}
                                        </h4>
                                        <p className="text-[11px] text-muted-foreground mt-1.5 line-clamp-2 leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Action link */}
                                    <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                                        <span className="text-[11px] font-semibold text-primary inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                                            Detail
                                            <ArrowRight className="w-3 h-3" />
                                        </span>
                                        <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* 3. CTA Seluruh Arsip Proyek */}
                <motion.div
                    initial={{ opacity: 0, y: 25, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
                >
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-foreground text-background font-extrabold text-sm hover:opacity-90 transition-all shadow-xl hover:gap-3.5 group"
                    >
                        Jelajahi Seluruh Arsip Proyek ({allProjects.length})
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

export default FeaturedProjectsSection;
