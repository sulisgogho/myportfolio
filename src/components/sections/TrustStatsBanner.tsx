'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Counter } from '@/components/ui/Counter';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { type: "spring", stiffness: 100 }
    }
};

export function TrustStatsBanner() {
    return (
        <section className="relative w-full py-20 lg:py-28 bg-background border-y border-black/5 dark:border-white/5 overflow-hidden">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className="relative z-10 max-w-6xl mx-auto px-6"
            >
                {/* Compact Glass Container */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 p-8 rounded-2xl bg-muted/20 backdrop-blur-md border border-black/5 dark:border-white/5 shadow-sm">
                    
                    {/* Stat 1 */}
                    <motion.div variants={itemVariants} className="flex flex-col items-center flex-1 text-center border-b md:border-b-0 md:border-r border-black/5 dark:border-white/5 pb-6 md:pb-0">
                        <span className="text-3xl font-black text-foreground tracking-tight flex items-center justify-center">
                            <Counter value={3.86} decimal={2} duration={2} />
                            <span className="text-muted-foreground text-lg ml-1 font-semibold">/ 4.0</span>
                        </span>
                        <span className="block text-sm font-bold text-foreground/90 mt-1">
                            IPK Teknik Informatika
                        </span>
                        <span className="block text-xs text-muted-foreground mt-0.5">
                            Universitas Muhammadiyah Jember
                        </span>
                    </motion.div>

                    {/* Stat 2 */}
                    <motion.div variants={itemVariants} className="flex flex-col items-center flex-1 text-center border-b md:border-b-0 md:border-r border-black/5 dark:border-white/5 pb-6 md:pb-0">
                        <span className="text-3xl font-black text-amber-500 tracking-tight">
                            Medali Emas
                        </span>
                        <span className="block text-sm font-bold text-foreground/90 mt-1">
                            Prestasi Nasional
                        </span>
                        <span className="block text-xs text-muted-foreground mt-0.5">
                            Juara 1 LKTIN APSI PTMA
                        </span>
                    </motion.div>

                    {/* Stat 3 */}
                    <motion.div variants={itemVariants} className="flex flex-col items-center flex-1 text-center border-b md:border-b-0 md:border-r border-black/5 dark:border-white/5 pb-6 md:pb-0">
                        <span className="text-3xl font-black text-sky-500 tracking-tight">
                            IBM & Microsoft
                        </span>
                        <span className="block text-sm font-bold text-foreground/90 mt-1">
                            Sertifikasi Analisis
                        </span>
                        <span className="block text-xs text-muted-foreground mt-0.5">
                            Coursera Professional Certified
                        </span>
                    </motion.div>

                    {/* Stat 4 */}
                    <motion.div variants={itemVariants} className="flex flex-col items-center flex-1 text-center">
                        <span className="text-3xl font-black text-foreground tracking-tight flex items-center justify-center">
                            <Counter value={14} decimal={0} duration={2} />
                            <span className="text-primary text-xl ml-0.5 font-bold">+</span>
                            <span className="text-sm text-muted-foreground ml-1.5 font-medium">Sistem</span>
                        </span>
                        <span className="block text-sm font-bold text-foreground/90 mt-1">
                            Proyek Selesai
                        </span>
                        <span className="block text-xs text-muted-foreground mt-0.5">
                            Fullstack Web & Data Apps
                        </span>
                    </motion.div>

                </div>
            </motion.div>
        </section>
    );
}
