'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { HeroVisual } from "@/components/sections/HeroVisual";
import { BrandScroller } from "@/components/ui/brand-scroller";
import { BeamDivider } from "@/components/ui/BeamDivider";
import { DeveloperActivitySection } from "@/components/sections/DeveloperActivitySection";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { VibeCoderValueSection } from "@/components/sections/VibeCoderValueSection";
import { TrustStatsBanner } from "@/components/sections/TrustStatsBanner";
import { CertificatesMarquee } from "@/components/sections/CertificatesMarquee";
import ExperienceTabsSection from "@/components/sections/ExperienceTabsSection";
import { SocialCorner } from '@/components/layout/SocialCorner';
import { ScrollNavigationHUD } from "@/components/ui/ScrollNavigationHUD";
import Link from 'next/link';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export default function HomePage() {
    // 1. Smooth Spring Scroll Progress Bar
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Parallax values for global background blobs
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 5000], [0, 1000]);
    const y2 = useTransform(scrollY, [0, 5000], [0, -800]);
    const y3 = useTransform(scrollY, [0, 5000], [0, 1500]);

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

            {/* Trust Stats Banner */}
            <TrustStatsBanner />

            {/* Certificates Marquee */}
            <CertificatesMarquee />

            {/* Direct CTA with Scroll Reveal */}
            <motion.div
                initial={{ opacity: 0, y: 25, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="mt-32 mb-40 text-center"
            >
                <div className="inline-flex flex-col sm:flex-row items-center gap-4">
                    <Link
                        href="/contact"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-sm hover:opacity-95 shadow-lg shadow-primary/20 transition-all hover:scale-105"
                    >
                        <Sparkles className="w-4 h-4" />
                        Mulai Diskusi Proyek
                    </Link>
                    <a
                        href="https://wa.me/6282233447474"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-black/15 dark:border-white/15 bg-background font-semibold text-sm hover:bg-muted transition-all"
                    >
                        Chat via WhatsApp
                        <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>
            </motion.div>

            {/* Floating Social Corner */}
            <SocialCorner className="fixed bottom-8 right-8 z-[30]" />
        </motion.main>
    );
}
