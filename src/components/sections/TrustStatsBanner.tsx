'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
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
    const t = useTranslations('trustStats');
    return (
        <section className="relative w-full py-20 lg:py-28 bg-background border-y border-black/5 dark:border-white/5 overflow-hidden">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
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
                            {t('stat1.title')}
                        </span>
                        <span className="block text-xs text-muted-foreground mt-0.5">
                            {t('stat1.desc')}
                        </span>
                    </motion.div>

                    {/* Stat 2 */}
                    <motion.div variants={itemVariants} className="flex flex-col items-center flex-1 text-center border-b md:border-b-0 md:border-r border-black/5 dark:border-white/5 pb-6 md:pb-0">
                        <span className="text-3xl font-black text-amber-500 tracking-tight">
                            {t('stat2.value')}
                        </span>
                        <span className="block text-sm font-bold text-foreground/90 mt-1">
                            {t('stat2.title')}
                        </span>
                        <span className="block text-xs text-muted-foreground mt-0.5">
                            {t('stat2.desc')}
                        </span>
                    </motion.div>

                    {/* Stat 3 */}
                    <motion.div variants={itemVariants} className="flex flex-col items-center flex-1 text-center border-b md:border-b-0 md:border-r border-black/5 dark:border-white/5 pb-6 md:pb-0">
                        <span className="text-3xl font-black text-sky-500 tracking-tight">
                            {t('stat3.value')}
                        </span>
                        <span className="block text-sm font-bold text-foreground/90 mt-1">
                            {t('stat3.title')}
                        </span>
                        <span className="block text-xs text-muted-foreground mt-0.5">
                            {t('stat3.desc')}
                        </span>
                    </motion.div>

                    {/* Stat 4 */}
                    <motion.div variants={itemVariants} className="flex flex-col items-center flex-1 text-center">
                        <span className="text-3xl font-black text-foreground tracking-tight flex items-center justify-center">
                            <Counter value={14} decimal={0} duration={2} />
                            <span className="text-primary text-xl ml-0.5 font-bold">+</span>
                            <span className="text-sm text-muted-foreground ml-1.5 font-medium">{t('stat4.unit')}</span>
                        </span>
                        <span className="block text-sm font-bold text-foreground/90 mt-1">
                            {t('stat4.title')}
                        </span>
                        <span className="block text-xs text-muted-foreground mt-0.5">
                            {t('stat4.desc')}
                        </span>
                    </motion.div>

                </div>
            </motion.div>
        </section>
    );
}
