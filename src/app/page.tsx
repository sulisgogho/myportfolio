'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { HeroVisual } from "@/components/sections/HeroVisual";
import { BrandScroller } from "@/components/ui/brand-scroller";
import { BeamDivider } from "@/components/ui/BeamDivider";
import { DeveloperActivitySection } from "@/components/sections/DeveloperActivitySection";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { VibeCoderValueSection } from "@/components/sections/VibeCoderValueSection";
import { CertificatesMarquee } from "@/components/sections/CertificatesMarquee";
import ExperienceTabsSection from "@/components/sections/ExperienceTabsSection";
import { SocialCorner } from '@/components/layout/SocialCorner';
import { ScrollNavigationHUD } from "@/components/ui/ScrollNavigationHUD";
import Link from 'next/link';
import { Sparkles, ArrowUpRight, MessageCircle, Zap, ShieldCheck, Clock } from 'lucide-react';

export default function HomePage() {
    // 1. Smooth Spring Scroll Progress Bar
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Parallax values for global background blobs (subtle & elegant)
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 5000], [0, 300]);
    const y2 = useTransform(scrollY, [0, 5000], [0, -250]);
    const y3 = useTransform(scrollY, [0, 5000], [0, 400]);

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative min-h-screen bg-background text-foreground overflow-x-clip selection:bg-primary/20"
        >
            {/* Top Interactive Scroll Progress Glow Bar */}
            <motion.div
                style={{ scaleX }}
                className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-sky-400 via-primary to-purple-500 origin-left z-[110] shadow-[0_0_12px_rgba(56,189,248,0.7)]"
            />

            {/* Global Parallax Background Effects - Elegant Aurora */}
            <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-background">
                <motion.div 
                    style={{ y: y1 }} 
                    className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] max-w-[1000px] max-h-[1000px] rounded-full bg-primary/10 blur-[120px] mix-blend-screen dark:bg-primary/5 dark:mix-blend-lighten" 
                />
                <motion.div 
                    style={{ y: y2 }} 
                    className="absolute top-[30%] -right-[10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] rounded-full bg-purple-500/10 blur-[130px] mix-blend-screen dark:bg-purple-500/5 dark:mix-blend-lighten" 
                />
                <motion.div 
                    style={{ y: y3 }} 
                    className="absolute bottom-[-10%] left-[20%] w-[70vw] h-[70vw] max-w-[1200px] max-h-[1200px] rounded-full bg-sky-500/10 blur-[150px] mix-blend-screen dark:bg-sky-500/5 dark:mix-blend-lighten" 
                />
            </div>

            {/* Floating Interactive Scroll HUD (Circular Gauge + Section Spy + Jump-to-Section) */}
            <ScrollNavigationHUD />

            {/* 1. Sleek, Modern Hero (DATA & FULL STACK DEVELOPER) with Scroll Parallax */}
            <HeroVisual isExiting={true} />

            {/* Moving Laser Beam Divider */}
            <BeamDivider orientation="horizontal" className="relative z-20" />

            {/* 2. Infinite Tech & Tool Scroller */}
            <div id="tech-stack" className="pt-16 pb-12 sm:pt-24 sm:pb-16 bg-muted/20">
                <BrandScroller />
            </div>

            {/* 5. Fullstack & Data Analytics Capabilities */}
            <VibeCoderValueSection />

            {/* Moving Laser Beam Divider */}
            <BeamDivider orientation="horizontal" className="relative z-20" />

            {/* 4. Highlighted Featured Projects / Portfolio with Scroll-Reactive 3D Three.js & Bento Grid */}
            <FeaturedProjectsSection />

            {/* Moving Laser Beam Divider */}
            <BeamDivider orientation="horizontal" className="relative z-20" />

            {/* 3. Live GitHub Activity & Public Repositories */}
            <DeveloperActivitySection />

            {/* Moving Laser Beam Divider */}
            <BeamDivider orientation="horizontal" reverse={true} className="relative z-20" />

            {/* Experience & Journey */}
            <ExperienceTabsSection />

            {/* Certificates Marquee */}
            <CertificatesMarquee />

            {/* High-Impact Interactive CTA Section */}
            <section className="relative px-4 sm:px-6 md:px-8 py-8 sm:py-12 overflow-hidden">
                {/* Background Ambient Glow & Radial Aurora */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-r from-primary/15 via-sky-500/15 to-emerald-500/15 blur-[100px] rounded-full pointer-events-none -z-10" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="max-w-4xl mx-auto relative rounded-3xl p-6 sm:p-8 md:p-10 border border-black/10 dark:border-white/10 bg-gradient-to-b from-card/90 via-card/60 to-background/95 backdrop-blur-2xl shadow-xl text-center overflow-hidden group"
                >
                    {/* Top ambient highlight border line */}
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                    <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

                    {/* 1. Status Pill */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold tracking-wider uppercase mb-5">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        <span>Open for New Projects &amp; Opportunities</span>
                    </div>

                    {/* 2. Headline with Modern Gradient */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.2] text-foreground mb-4">
                        Ready to Build Something <br className="hidden sm:block" />
                        <span className="bg-gradient-to-r from-primary via-sky-500 to-emerald-500 bg-clip-text text-transparent">
                            Remarkable Together?
                        </span>
                    </h2>

                    {/* 3. Subtitle */}
                    <p className="max-w-xl mx-auto text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed mb-7">
                        Whether you need a high-performance web platform, an interactive fullstack system, or data intelligence solutions — let&apos;s build software that makes a real impact.
                    </p>

                    {/* 4. Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8">
                        {/* Primary Button */}
                        <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.98 }}>
                            <Link
                                href="/contact"
                                className="relative group/btn inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-primary text-primary-foreground font-bold text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 overflow-hidden"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover/btn:translate-x-full duration-1000 transition-transform" />
                                <Sparkles className="w-4 h-4 transition-transform group-hover/btn:rotate-12" />
                                <span>Start Project Discussion</span>
                                <ArrowUpRight className="w-4 h-4 opacity-70 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
                            </Link>
                        </motion.div>

                        {/* WhatsApp Secondary Button */}
                        <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.98 }}>
                            <a
                                href="https://wa.me/6282233447474"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/wa inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full border border-black/15 dark:border-white/15 bg-background/80 hover:bg-emerald-500/10 hover:border-emerald-500/50 hover:text-emerald-500 dark:hover:text-emerald-400 font-semibold text-sm transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-emerald-500/15"
                            >
                                <MessageCircle className="w-4 h-4 text-emerald-500 transition-transform group-hover/wa:scale-110" />
                                <span>Chat via WhatsApp</span>
                                <ArrowUpRight className="w-4 h-4 opacity-50 group-hover/wa:opacity-100 group-hover/wa:translate-x-0.5 group-hover/wa:-translate-y-0.5 transition-all" />
                            </a>
                        </motion.div>
                    </div>

                    {/* 5. Trust / Perks Mini Badges */}
                    <div className="pt-6 border-t border-black/5 dark:border-white/5 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-muted-foreground/80">
                        <div className="flex items-center gap-1.5">
                            <Zap className="w-3.5 h-3.5 text-amber-500" />
                            <span>Quick Response (&lt; 24h)</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                            <span>Fullstack &amp; Analytics Expertise</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-emerald-500" />
                            <span>Flexible Timezone / Remote Ready</span>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Floating Social Corner */}
            <SocialCorner className="fixed bottom-8 right-8 z-[30]" />
        </motion.main>
    );
}
