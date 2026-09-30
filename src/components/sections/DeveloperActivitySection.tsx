'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { GitHubShowcase } from '@/components/ui/github-showcase';

export function DeveloperActivitySection() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, { damping: 25, stiffness: 120 });
    const yParallaxGlow = useTransform(smoothProgress, [0, 1], [-50, 50]);
    const yGitCard = useTransform(smoothProgress, [0, 1], [25, -20]);

    return (
        <section
            ref={sectionRef}
            id="github-activity"
            className="relative py-20 px-4 md:px-8 bg-background border-t border-black/5 dark:border-white/5 overflow-hidden"
        >
            {/* Ambient Background Glowing Orb with Scroll Parallax */}
            <motion.div
                style={{ y: yParallaxGlow }}
                className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-primary/10 dark:bg-primary/5 blur-3xl pointer-events-none"
            />
            <motion.div
                style={{ y: yParallaxGlow }}
                className="absolute bottom-10 -left-32 w-96 h-96 rounded-full bg-sky-500/10 dark:bg-sky-500/5 blur-3xl pointer-events-none"
            />

            <div className="max-w-[1700px] mx-auto relative z-10">
                {/* GitHub Showcase with Smooth Scroll Parallax */}
                <motion.div
                    style={{ y: yGitCard }}
                    initial={{ opacity: 0, y: 35, scale: 0.97, filter: 'blur(8px)' }}
                    whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full"
                >
                    <GitHubShowcase />
                </motion.div>
            </div>
        </section>
    );
}

export default DeveloperActivitySection;
