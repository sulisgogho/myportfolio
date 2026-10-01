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

    const smoothProgress = useSpring(scrollYProgress, { damping: 30, stiffness: 100 });
    const yParallax = useTransform(smoothProgress, [0, 1], [15, -15]);

    const pillars = [
        {
            icon: Code2,
            title: 'Fullstack Web Engineering',
            desc: 'Building modern, responsive, and interactive web apps using the React, Next.js, TypeScript, and Tailwind ecosystem with high performance.',
            badge: 'Fullstack'
        },
        {
            icon: LineChart,
            title: 'Data Analytics & Insights',
            desc: 'Processing, analyzing, and visualizing data using Python (Pandas, Plotly), SQL, and interactive dashboards for business decision making.',
            badge: 'Analytics'
        },
        {
            icon: Database,
            title: 'System Architecture & Database',
            desc: 'Designing secure and structured databases (PostgreSQL, SQLite, MySQL) and reliable API integrations with a strong informatics engineering foundation.',
            badge: 'Engineering'
        }
    ];

    return (
        <section
            ref={sectionRef}
            id="capabilities"
            className="relative py-24 px-6 md:px-12 bg-background/50 border-t border-black/5 dark:border-white/5 overflow-hidden"
        >
            {/* Ambient Background Glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none -z-10"
            />

            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground">
                        Turning Ideas into Real Digital Assets.
                    </h2>
                    <p className="text-muted-foreground mt-4 text-sm sm:text-base leading-relaxed">
                        An IT grad building web systems, crafting creative assets, and analyzing research data zero time wasted.
                    </p>
                </motion.div>

                {/* 3 Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
                    {pillars.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                                whileHover={{ y: -4 }}
                                className="relative p-8 rounded-3xl border border-black/10 dark:border-white/10 bg-card hover:border-primary/40 transition-colors duration-300 hover:shadow-lg flex flex-col justify-between group"
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
