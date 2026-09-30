'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certificates = [
    { id: 1, title: 'IBM Data Science Professional', issuer: 'Coursera' },
    { id: 2, title: 'Microsoft Certified: Azure Fundamentals', issuer: 'Microsoft' },
    { id: 3, title: 'Google IT Support Professional', issuer: 'Coursera' },
    { id: 4, title: 'AWS Certified Cloud Practitioner', issuer: 'AWS' },
    { id: 5, title: 'Meta Front-End Developer', issuer: 'Coursera' },
    { id: 6, title: 'Fullstack Web Development', issuer: 'Dicoding' },
    { id: 7, title: 'Machine Learning Specialization', issuer: 'Stanford' },
    { id: 8, title: 'Juara 1 LKTIN Nasional', issuer: 'APSI PTMA' },
    { id: 9, title: 'React Advanced Concepts', issuer: 'Udemy' },
    { id: 10, title: 'UI/UX Design Principles', issuer: 'Google' },
];

// Duplicate for infinite scroll effect
const marqueeItems = [...certificates, ...certificates];

export function CertificatesMarquee() {
    return (
        <section className="relative w-full py-20 lg:py-28 bg-background overflow-hidden border-b border-black/5 dark:border-white/5">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />
            
            <div className="flex w-[200%] md:w-max">
                <motion.div
                    className="flex items-center gap-6 md:gap-8 pr-6 md:pr-8"
                    animate={{
                        x: ['0%', '-50%'],
                    }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {marqueeItems.map((cert, idx) => (
                        <div 
                            key={`${cert.id}-${idx}`} 
                            className="flex flex-col justify-center items-center p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-card hover:bg-muted/50 transition-colors shrink-0 w-[240px] h-[160px] text-center"
                        >
                            <Award className="w-8 h-8 text-primary mb-3 opacity-80" />
                            <h4 className="text-sm font-bold text-foreground leading-tight line-clamp-2">
                                {cert.title}
                            </h4>
                            <p className="text-xs text-muted-foreground mt-2">
                                {cert.issuer}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
