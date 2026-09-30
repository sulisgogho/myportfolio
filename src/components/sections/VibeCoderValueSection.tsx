'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Database, Code2, LineChart, Cpu, ArrowUpRight, Award, GraduationCap, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Counter } from '@/components/ui/Counter';

export function VibeCoderValueSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, { damping: 25, stiffness: 120 });
    const yParallax = useTransform(smoothProgress, [0, 1], [40, -40]);

    const pillars = [
        {
            icon: Code2,
            title: 'Fullstack Web Engineering',
            desc: 'Merakit web app modern, responsif, dan interaktif menggunakan ekosistem React, Next.js, TypeScript, dan Tailwind dengan performa tinggi.',
            badge: 'Fullstack'
        },
        {
            icon: LineChart,
            title: 'Data Analytics & Insights',
            desc: 'Mengolah, menganalisis, dan memvisualisasikan data menggunakan Python (Pandas, Plotly), SQL, dan dashboard interaktif untuk pengambilan keputusan bisnis.',
            badge: 'Analytics'
        },
        {
            icon: Database,
            title: 'Arsitektur Sistem & Database',
            desc: 'Perancangan basis data yang aman dan terstruktur (PostgreSQL, SQLite, MySQL) serta integrasi API yang handal dengan fondasi teknik informatika yang kuat.',
            badge: 'Engineering'
        }
    ];

    return (
        <section
            ref={sectionRef}
            id="capabilities"
            className="relative py-24 px-6 md:px-12 bg-background/50 border-t border-black/5 dark:border-white/5 overflow-hidden"
        >
            {/* Ambient Background Glow with Parallax */}
            <motion.div
                style={{ y: yParallax }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none -z-10"
            />

            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 35, scale: 0.97, filter: 'blur(8px)' }}
                        whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3 border border-primary/20 backdrop-blur-md">
                            <Cpu className="w-3.5 h-3.5" />
                            Fullstack & Data Capabilities
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground">
                            Kombinasi Logika Rekayasa & Ketelitian Data
                        </h2>
                        <p className="text-muted-foreground mt-4 text-sm sm:text-base leading-relaxed">
                            Menggabungkan arsitektur software modern dengan wawasan berbasis data untuk menghasilkan aplikasi yang tangguh, estetik, dan fungsional.
                        </p>
                    </motion.div>
                </div>

                {/* 3 Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
                    {pillars.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40, scale: 0.96, filter: 'blur(8px)' }}
                                whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                                viewport={{ once: false, amount: 0.15 }}
                                transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                                className="relative p-8 rounded-3xl border border-black/10 dark:border-white/10 bg-card hover:border-primary/40 transition-all duration-300 hover:shadow-lg flex flex-col justify-between group"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <span className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground font-semibold">
                                            {item.badge}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>


            </div>
        </section>
    );
}
