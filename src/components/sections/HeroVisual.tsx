'use client';

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Instagram, ArrowDown, ArrowDownRight, Bot, Zap, ExternalLink, MessageSquare } from 'lucide-react';
import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import Link from 'next/link';
import gsap from "gsap";
import { ProfileCard } from "@/components/ui/profile-card";
import { Spotlight } from "@/components/ui/spotlight-new";

export function HeroVisual({ isExiting = false }: { isExiting?: boolean }) {
  const { personal } = portfolioData;
  const [showProfile, setShowProfile] = useState(false);
  const [tooltip, setTooltip] = useState<{ show: boolean; text: string; x: number; y: number; icon: 'zap' | 'bot' | null }>({
    show: false,
    text: '',
    x: 0,
    y: 0,
    icon: null
  });

  const githubRef = useRef(null);
  const linkedinRef = useRef(null);
  const instagramRef = useRef(null);
  const zapRef = useRef(null);
  const zapSmallRef = useRef(null);

  useEffect(() => {
    if (!isExiting) return;

    const ctx = gsap.context(() => {
      // Reveal + Loop for GitHub
      gsap.fromTo(githubRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          onComplete: () => {
            gsap.to(githubRef.current, {
              y: -10,
              duration: 2,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              force3D: true
            });
          }
        }
      );

      // Reveal + Loop for LinkedIn
      gsap.fromTo(linkedinRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.1,
          ease: "power3.out",
          onComplete: () => {
            gsap.to(linkedinRef.current, {
              y: 10,
              duration: 2.5,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              force3D: true
            });
          }
        }
      );

      // Reveal + Loop for Instagram
      gsap.fromTo(instagramRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          onComplete: () => {
            gsap.to(instagramRef.current, {
              x: 10,
              duration: 3,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              force3D: true
            });
          }
        }
      );

      // Zap pulsing - Energetic heartbeat effect
      gsap.to([zapRef.current, zapSmallRef.current], {
        scale: 1.2,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        force3D: true
      });
    });

    return () => ctx.revert();
  }, [isExiting]);

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 60]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.45]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.95]);
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 120], [1, 0]);

  return (
    <motion.div
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-screen w-full flex flex-col bg-background text-foreground overflow-hidden selection:bg-primary/20"
    >
      {/* Clean Background */}

      {/* Spotlight Effect - Dramatic lighting */}
      <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
        <Spotlight
          duration={10}
          xOffset={120}
          translateY={-300}
          gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(0, 0%, 100%, .15) 0, hsla(0, 0%, 100%, .05) 50%, transparent 80%)"
          gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 100%, .1) 0, hsla(0, 0%, 100%, .02) 80%, transparent 100%)"
          gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 100%, .08) 0, hsla(0, 0%, 100%, 0) 80%, transparent 100%)"
        />
      </div>

      <motion.main
        style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
        className="relative flex-1 flex flex-col justify-center pt-40 pb-20 z-10 max-w-[105rem] w-full mx-auto will-change-transform"
      >
        <div className="flex relative gap-4 px-6 md:items-center w-full flex-col items-start justify-center">

          {/* Follow-Cursor Tooltip */}
          <AnimatePresence>
            {tooltip.show && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                className="fixed pointer-events-none z-[100] flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-black font-bold px-4 py-2.5 rounded-full shadow-2xl"
                style={{
                  left: tooltip.x,
                  top: tooltip.y,
                  x: "-50%",
                  y: "-150%", // offset slightly above the cursor
                }}
              >
                {tooltip.icon === 'zap' && <ExternalLink className="w-4 h-4" />}
                {tooltip.icon === 'bot' && <MessageSquare className="w-4 h-4" />}
                <span className="text-sm">{tooltip.text}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Line 1: AI & DATA */}
          <div className="md:flex gap-8 items-center relative">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[10px] md:text-xs text-muted-foreground text-start md:text-right leading-relaxed max-w-[200px] md:max-w-[220px] font-medium uppercase tracking-[0.2em] mb-6 md:mb-0"
            >
              Hi, I'm {personal.name}. I engineer scalable web systems & data intelligence.
            </motion.p>
            <div className="relative">
              <div ref={githubRef} className="hidden md:block absolute -top-4 right-2 text-primary/60 hover:text-primary z-20 opacity-0">
                <a
                  href={personal.socialLinks.find(s => s.platform === 'GitHub')?.url}
                  target="_blank"
                  className="block"
                >
                  <Github size={32} />
                </a>
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={isExiting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(3rem,11vw,13rem)] font-black leading-[0.95] md:leading-[0.85] tracking-tighter text-shiny will-change-transform md:px-4"
              >
                DATA &
              </motion.h1>
            </div>
          </div>

          {/* Line 2: SOFT [ICON] WARE */}
          <div className="md:flex gap-8 items-center relative">
            <div className="relative">
              <div ref={linkedinRef} className="hidden md:block absolute -top-8 left-4 text-primary/60 hover:text-primary z-20 opacity-0">
                <a
                  href={personal.socialLinks.find(s => s.platform === 'LinkedIn')?.url}
                  target="_blank"
                  className="block"
                >
                  <Linkedin size={32} />
                </a>
              </div>
              <div ref={instagramRef} className="hidden md:block absolute -bottom-12 right-36 text-primary/60 hover:text-primary z-20 opacity-0">
                <a
                  href={personal.socialLinks.find(s => s.platform === 'Instagram')?.url}
                  target="_blank"
                  className="block"
                >
                  <Instagram size={32} />
                </a>
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={isExiting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(3rem,11vw,13rem)] md:flex items-center font-black leading-[0.95] md:leading-[0.85] tracking-tighter text-shiny will-change-transform md:px-4"
              >
                <span className="">FULL</span>
                <div
                  ref={zapRef}
                  className="hidden lg:inline-block mx-[0.05em] relative cursor-pointer group"
                  onClick={() => window.location.href = '/projects'}
                  onMouseEnter={(e) => setTooltip({ show: true, text: "Explore Projects", icon: 'zap', x: e.clientX, y: e.clientY })}
                  onMouseMove={(e) => setTooltip(prev => ({ ...prev, x: e.clientX, y: e.clientY }))}
                  onMouseLeave={() => setTooltip(prev => ({ ...prev, show: false }))}
                >
                  <Zap className="w-[0.8em] h-[0.8em] text-sky-400 group-hover:text-sky-300 transition-colors" strokeWidth={1.5} />
                </div>
                <div
                  ref={zapSmallRef}
                  className="inline-block lg:hidden mx-[0.02em] relative cursor-pointer group"
                  onClick={() => window.location.href = '/projects'}
                  onMouseEnter={(e) => setTooltip({ show: true, text: "Explore Projects", icon: 'zap', x: e.clientX, y: e.clientY })}
                  onMouseMove={(e) => setTooltip(prev => ({ ...prev, x: e.clientX, y: e.clientY }))}
                  onMouseLeave={() => setTooltip(prev => ({ ...prev, show: false }))}
                >
                  <Zap className="w-[0.8em] h-[0.8em] text-sky-400 group-hover:text-sky-300 transition-colors" strokeWidth={2} />
                </div>
                <span className="">STACK</span>
              </motion.h1>
            </div>
          </div>

          {/* Line 3: EN [ICON] GINEER */}
          <div className="md:flex gap-8 items-center relative">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isExiting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3rem,11vw,13rem)] md:flex items-center font-black leading-[0.95] md:leading-[0.85] tracking-tighter text-shiny will-change-transform md:px-4"
            >
              <span className="">DEVELOPER</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[10px] md:text-xs text-muted-foreground pt-6 md:pt-8 leading-relaxed max-w-[250px] md:max-w-[200px] font-medium uppercase tracking-widest"
            >
              Open to fullstack development, data analytics, and software projects.
            </motion.p>
          </div>

          {/* Mobile Socials (Flows neatly below text instead of overlapping) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex md:hidden gap-6 px-4 pt-6 items-center text-primary/60"
          >
            <a href={personal.socialLinks.find(s => s.platform === 'GitHub')?.url} target="_blank" className="hover:text-primary transition-colors">
              <Github size={24} />
            </a>
            <a href={personal.socialLinks.find(s => s.platform === 'LinkedIn')?.url} target="_blank" className="hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
            <a href={personal.socialLinks.find(s => s.platform === 'Instagram')?.url} target="_blank" className="hover:text-primary transition-colors">
              <Instagram size={24} />
            </a>
          </motion.div>
        </div>

        {/* Action Buttons & Separator Section */}
        <div className="mx-auto max-w-[105rem] w-full px-6 md:px-20 mt-10 md:mt-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-4">
            {/* Quick Action Links */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all shadow-md"
              >
                View Projects
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/15 dark:border-white/20 bg-background/80 backdrop-blur-sm text-foreground font-semibold text-xs uppercase tracking-wider hover:bg-muted transition-all"
              >
                Consultation / Contact
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-[10px] md:text-xs whitespace-nowrap font-bold tracking-[0.25em] text-muted-foreground uppercase hidden sm:block">
                PROBOLINGGO, ID — 2026
              </div>
              <Link
                href="/resume"
                className="group flex items-center"
              >
                <motion.div
                  className="relative flex items-center bg-zinc-100 dark:bg-white h-11 w-32 md:w-11 md:group-hover:w-40 rounded-full transition-all duration-500 ease-[timing-function:cubic-bezier(0.23,1,0.32,1)] overflow-hidden shadow-lg"
                >
                  <span className="whitespace-nowrap opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200 group-hover:delay-150 text-[10px] font-black uppercase tracking-widest text-zinc-900 dark:text-black pl-5 pr-10">
                    Resume
                  </span>
                  <div className="absolute right-0 flex items-center justify-center size-11 text-zinc-900 dark:text-black group-hover:rotate-45 transition-transform duration-500">
                    <ArrowDownRight className="w-4 h-4" />
                  </div>
                </motion.div>
              </Link>
            </div>
          </div>
        </div>

        {/* Animated Scroll Down Indicator */}
        <motion.div
          style={{ opacity: scrollIndicatorOpacity }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 pointer-events-none z-20"
        >
          <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-muted-foreground/80 font-bold">
            Scroll To Explore
          </span>
          <div className="w-4 h-7 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1 shadow-sm">
            <motion.div
              animate={{ y: [0, 6, 0], opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </motion.main>

      {/* Award/Badge Vertical - MOVED TO LEFT */}
      <div
        className="absolute left-0 top-1/2 z-50 hidden md:flex items-center transform -translate-y-1/2 group/container"
        onMouseEnter={() => setShowProfile(true)}
        onMouseLeave={() => setShowProfile(false)}
      >
        {/* The Badge Trigger */}
        <div className="relative z-50">
          <motion.div
            whileHover={{ x: 10 }}
            className="bg-white text-black py-10 px-4 text-[10px] font-black uppercase tracking-[0.5em] shadow-2xl rounded-r-3xl border-r border-y border-zinc-200 cursor-pointer"
          >
            <span className="rotate-0 [writing-mode:vertical-rl]">
              AVAILABLE FOR OPPORTUNITY
            </span>
          </motion.div>
        </div>

        {/* Profile Card Sidebar/Drawer Effect - Connected to avoid gap */}
        <AnimatePresence>
          {showProfile && (
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="pl-4 pointer-events-auto"
              style={{ width: 'max-content' }}
            >
              <ProfileCard
                name={personal.name}
                title="Data Analyst & Full-stack Developer"
                description={`${personal.name} is a dedicated Data Analyst & Full-stack Developer focused on building scalable systems, analyzing complex data, and creating robust web architectures. She specializes in bridging technical innovation with high-performance execution to deliver meaningful and impactful digital solutions.`}
                imageUrl={personal.avatar}
                githubUrl={personal.socialLinks.find(s => s.platform === 'GitHub')?.url}
                linkedinUrl={personal.socialLinks.find(s => s.platform === 'LinkedIn')?.url}
                instagramUrl={personal.socialLinks.find(s => s.platform === 'Instagram')?.url}
                className="!max-w-4xl scale-[0.8] origin-left"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
