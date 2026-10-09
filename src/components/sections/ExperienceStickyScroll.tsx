"use client";
import React from "react";
import Image from "next/image";
import { GraduationCap, BookOpen, Binary, Sparkles, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const CornerAccents = ({ hoverClass }: { hoverClass: string }) => (
    <>
        <div className={cn("absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-black/40 dark:border-white/40 z-20 pointer-events-none transition-colors duration-500", hoverClass)} />
        <div className={cn("absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-black/40 dark:border-white/40 z-20 pointer-events-none transition-colors duration-500", hoverClass)} />
        <div className={cn("absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-black/40 dark:border-white/40 z-20 pointer-events-none transition-colors duration-500", hoverClass)} />
        <div className={cn("absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-black/40 dark:border-white/40 z-20 pointer-events-none transition-colors duration-500", hoverClass)} />
    </>
);

export default function ExperienceStickyScroll({ isLowPowerMode = false }: { isLowPowerMode?: boolean }) {
    const t = useTranslations('experienceStickyScroll');
    const ref = React.useRef(null);
    const { useInView } = require('framer-motion');
    const isInView = useInView(ref, { margin: "200px" });
    const shouldAnimate = !isLowPowerMode && isInView;

    return (
        <div ref={ref} className="w-full max-w-6xl mx-auto p-4 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Telkom University Box (Left) - Hover Effect: Translate Y & Blue Glow */}
                <motion.div 
                    initial={isLowPowerMode ? {} : { opacity: 0, y: 20 }}
                    whileInView={isLowPowerMode ? {} : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="col-span-1 border border-black/10 dark:border-white/10 bg-neutral-100 dark:bg-[#0a0a0a] overflow-hidden relative group flex flex-col min-h-[450px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.3)] hover:border-blue-500/50"
                >
                    <CornerAccents hoverClass="group-hover:border-blue-500 dark:group-hover:border-blue-400" />
                    {/* Text Section (Top) */}
                    <div className="flex-1 p-8 relative z-10 transition-transform duration-500 group-hover:translate-x-1">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{t('uni.type')}</span>
                        </div>
                        <h3 className="text-3xl font-black text-neutral-900 dark:text-white mb-4">Universitas Muhammadiyah Jember</h3>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            {t('uni.desc')}
                        </p>
                    </div>

                    {/* Visual Section (Bottom) */}
                    <div className="h-[240px] flex items-center justify-center relative p-8 border-t border-black/10 dark:border-white/10 bg-gradient-to-b from-transparent to-black/5 dark:to-white/5 overflow-hidden">
                        {/* Background Logo */}
                        <div className="absolute inset-0">
                            <Image
                                src="/assets/unmuhjember-logo.png"
                                alt="Universitas Muhammadiyah Jember"
                                fill
                                className="object-contain opacity-20 dark:opacity-30 blur-[2px] scale-125 group-hover:scale-110 transition-transform duration-700"
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-black/40 to-black/10 dark:from-blue-950/90 dark:via-black/50 dark:to-transparent transition-opacity duration-500 group-hover:opacity-80" />
                        </div>

                        {/* Animated Background Element */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                        </div>

                        <div className="relative z-10 flex flex-col items-center transition-transform duration-500 group-hover:scale-105">
                            <div className="relative mb-6">
                                <GraduationCap className={cn("w-20 h-20 text-white drop-shadow-xl transition-all duration-300", shouldAnimate && "group-hover:animate-pulse")} />
                                <Binary className={cn("w-8 h-8 text-blue-400 absolute -top-2 -right-2 opacity-80 transition-all duration-300", shouldAnimate && "group-hover:-translate-y-2 group-hover:opacity-100")} />
                            </div>

                            <div className="flex flex-wrap gap-2 justify-center mb-4">
                                {t.raw('uni.tags').map((s: string) => (
                                    <span key={s} className="px-3 py-1 rounded-full text-[10px] bg-black/40 dark:bg-white/10 text-white border border-white/20 font-mono font-bold backdrop-blur-md shadow-lg group-hover:bg-blue-600/50 transition-colors">
                                        {s}
                                    </span>
                                ))}
                            </div>
                            <p className="text-[10px] font-mono text-white/90 uppercase tracking-widest bg-black/50 px-2 py-1 rounded backdrop-blur-sm border border-white/10 group-hover:border-blue-500/50 transition-colors">{t('uni.badge')}</p>
                        </div>

                        {/* Holographic Scan Effect */}
                        {shouldAnimate && (
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-400/80 to-transparent animate-scan z-20" />
                        )}
                    </div>
                </motion.div>

                {/* SMAN 88 Box (Right) - Hover Effect: Scale & Orange Glow */}
                <motion.div 
                    initial={isLowPowerMode ? {} : { opacity: 0, y: 20 }}
                    whileInView={isLowPowerMode ? {} : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="col-span-1 border border-black/10 dark:border-white/10 bg-neutral-100 dark:bg-[#0a0a0a] overflow-hidden relative group flex flex-col min-h-[450px] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(249,115,22,0.3)] hover:border-orange-500/50 hover:z-10"
                >
                    <CornerAccents hoverClass="group-hover:border-orange-500 dark:group-hover:border-orange-400" />
                    {/* Text Section (Top) */}
                    <div className="flex-1 p-8 relative z-10 transition-transform duration-500">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">{t('hs.type')}</span>
                        </div>
                        <h3 className="text-3xl font-black text-neutral-900 dark:text-white mb-4">SMAN 1 Kraksaan</h3>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            {t('hs.desc')}
                        </p>
                    </div>

                    {/* Visual Section (Bottom) */}
                    <div className="h-[240px] flex items-center justify-center relative p-8 border-t border-black/10 dark:border-white/10 bg-gradient-to-b from-transparent to-black/5 dark:to-white/5 overflow-hidden">
                         {/* Background Logo */}
                         <div className="absolute inset-0">
                            <Image
                                src="/assets/sman1kraksaan-logo.jpg"
                                alt="SMAN 1 Kraksaan"
                                fill
                                className="object-contain opacity-10 dark:opacity-15 blur-sm scale-125 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700"
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-orange-950/70 via-black/40 to-black/10 dark:from-orange-950/90 dark:via-black/50 dark:to-transparent mix-blend-multiply dark:mix-blend-normal transition-opacity duration-500 group-hover:opacity-80" />
                        </div>

                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <div className="absolute inset-0 bg-[radial-gradient(#80808012_1px,transparent_1px)] [background-size:16px_16px]"></div>
                        </div>

                        <div className="relative z-10 flex flex-col items-center">
                            <div className="relative mb-6">
                                <BookOpen className="w-20 h-20 text-white drop-shadow-xl group-hover:rotate-12 transition-transform duration-500" />
                                <Sparkles className={cn("w-6 h-6 text-yellow-400 absolute -bottom-2 -left-2 transition-all duration-300", shouldAnimate && "group-hover:scale-125")} />
                            </div>

                            <div className="flex flex-wrap gap-2 justify-center mb-4">
                                {t.raw('hs.tags').map((s: string) => (
                                    <span key={s} className="px-3 py-1 rounded-full text-[10px] bg-black/40 dark:bg-white/10 text-white border border-white/20 font-mono font-bold backdrop-blur-md shadow-lg group-hover:bg-orange-600/50 transition-colors">
                                        {s}
                                    </span>
                                ))}
                            </div>
                            <p className="text-[10px] font-mono text-white/90 uppercase tracking-widest bg-black/50 px-2 py-1 rounded backdrop-blur-sm border border-white/10 group-hover:border-orange-500/50 transition-colors">{t('hs.badge')}</p>
                        </div>
                    </div>
                </motion.div>



            </div>
        </div>
    );
}

