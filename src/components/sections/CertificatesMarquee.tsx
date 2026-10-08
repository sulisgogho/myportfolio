'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import Image from 'next/image';

import { useTranslations } from 'next-intl';
import { portfolioData } from '@/data/portfolio';

const certificates = portfolioData.achievements;

// Duplicate for infinite scroll effect
const marqueeItems = [...certificates, ...certificates];

export function CertificatesMarquee() {
    const tData = useTranslations('data.achievements');
    return (
        <section className="relative w-full py-8 md:py-10 bg-background overflow-hidden border-b border-black/5 dark:border-white/5">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />
            
            <div className="flex w-max">
                <motion.div
                    className="flex items-center gap-6 md:gap-8 pr-6 md:pr-8"
                    animate={{
                        x: ['0%', '-50%'],
                    }}
                    transition={{
                        duration: 80,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {marqueeItems.map((cert, idx) => (
                        <div 
                            key={`${cert.id}-${idx}`} 
                            className="flex flex-col items-center p-4 rounded-2xl border border-black/10 dark:border-white/10 bg-card hover:bg-muted/50 transition-colors shrink-0 w-[280px] h-[220px] text-center"
                        >
                            {cert.image ? (
                                <div className="relative w-full h-[140px] rounded-lg overflow-hidden mb-3 shrink-0 bg-white flex items-center justify-center">
                                    {cert.image.toLowerCase().endsWith('.pdf') ? (
                                        <iframe
                                            src={`${cert.image}#view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
                                            className="w-full h-[150%] border-none pointer-events-none scale-90"
                                            title={cert.title}
                                        />
                                    ) : (
                                        <Image 
                                            src={cert.image} 
                                            alt={cert.title} 
                                            fill 
                                            className="object-cover"
                                        />
                                    )}
                                </div>
                            ) : (
                                <Award className="w-8 h-8 text-primary mb-3 opacity-80" />
                            )}
                            <h4 className="text-sm font-bold text-foreground leading-tight line-clamp-1">
                                {tData.has(`${cert.id}.title`) ? tData(`${cert.id}.title`) : cert.title}
                            </h4>
                            <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                                {tData.has(`${cert.id}.issuer`) ? tData(`${cert.id}.issuer`) : cert.issuer}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
