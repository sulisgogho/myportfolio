'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { projects } from '@/lib/data';
import { ArrowUpRight, ArrowRight, ArrowLeft } from 'lucide-react';

const Github = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);

export default function PortfolioSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  // Auto-advance every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const currentProject = projects[currentIndex];

  return (
    <section id="portfolio" className="pb-12 bg-transparent relative">
      <div className="w-full px-4 relative z-10">
        <div className="w-full max-w-7xl mx-auto">
          <AnimatedSection>
          <div className="relative rounded-[2rem] overflow-hidden p-[1px] shadow-sm">
            {/* Spinning background for border */}
            <div className="absolute inset-0 z-0">
              <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(transparent_60%,#2b7a4b_100%)] animate-[spin_4s_linear_infinite]" />
            </div>
            
            <div className="relative z-10 bg-white rounded-[calc(2rem-1px)] p-6 md:p-10 flex flex-col">
            
            {/* Header */}
            <div className="flex justify-between items-end mb-10 border-b border-zinc-100 pb-6">
              <div>
                <p className="text-brand-green font-mono text-sm md:text-base mb-2 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green mr-2"></span>
                  Projects
                </p>
                <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 font-urbanist">
                  My Recent Works
                </h2>
              </div>
              <div className="text-right flex flex-col items-end">
                <div className="flex items-end gap-2 mb-2">
                  <p className="font-extrabold text-brand-green text-3xl leading-none">{projects.length}</p>
                  <p className="text-zinc-500 text-sm md:text-base font-bold pb-1 uppercase tracking-wider">Total Projects</p>
                </div>
                <Link href="/projects" className="text-zinc-900 font-bold text-sm md:text-base hover:text-brand-green transition-colors flex items-center">
                  View All Projects <ArrowRight className="w-4 h-4 ml-1"/>
                </Link>
              </div>
            </div>

            {/* Slider Container */}
            <div key={currentIndex} className="flex flex-col lg:flex-row gap-10 animate-slide-in-right">
              
              {/* Left Side: Image */}
              <div className="w-full lg:w-5/12 max-w-sm mx-auto lg:mx-0 lg:max-w-none relative aspect-square rounded-2xl overflow-hidden bg-zinc-900 group">
                <Image 
                  src={currentProject.imageUrl} 
                  alt={currentProject.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
              </div>

              {/* Right Side: Details */}
              <div className="w-full lg:w-7/12 flex flex-col justify-between">
                
                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-brand-green mb-4 leading-tight truncate">
                    {currentProject.title}
                  </h3>
                  <p className="text-zinc-500 font-medium leading-relaxed mb-8 line-clamp-2">
                    {currentProject.fullDesc}
                  </p>
                  
                  <p className="text-zinc-400 font-mono text-sm md:text-base uppercase tracking-wider mb-2">
                    Project Info
                  </p>
                  
                  <div className="flex flex-col border-t border-zinc-200">
                    <div className="flex justify-between items-center py-4 border-b border-zinc-200">
                      <span className="text-zinc-800 font-bold">Category</span>
                      <span className="text-zinc-500 text-sm md:text-base">{currentProject.category}</span>
                    </div>
                    <div className="flex justify-between items-center py-4 border-b border-zinc-200">
                      <span className="text-zinc-800 font-bold">Role</span>
                      <span className="text-zinc-500 text-sm md:text-base">{currentProject.role}</span>
                    </div>
                    <div className="flex justify-between items-start py-4 border-b border-zinc-200">
                      <span className="text-zinc-800 font-bold">Technologies</span>
                      <span className="text-zinc-500 text-sm md:text-base text-right max-w-[60%]">
                        {currentProject.tags.join(', ')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="flex flex-wrap items-center justify-between mt-8 gap-4">
                  
                  <div className="flex gap-6">
                    {currentProject.websiteUrl && (
                      <a href={currentProject.websiteUrl} target="_blank" rel="noreferrer" className="flex items-center text-sm md:text-base text-zinc-700 font-bold hover:text-brand-green transition-colors">
                        <ArrowUpRight className="w-5 h-5 mr-1"/> Live Demo
                      </a>
                    )}
                    {currentProject.githubUrl && (
                      <a href={currentProject.githubUrl} target="_blank" rel="noreferrer" className="flex items-center text-sm md:text-base text-zinc-700 font-bold hover:text-brand-green transition-colors">
                        <Github className="w-5 h-5 mr-2"/> View on Github
                      </a>
                    )}
                  </div>
                  
                  {/* Slider Controls */}
                  <div className="flex gap-3">
                    <button 
                      onClick={prevSlide} 
                      className="w-12 h-12 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all shadow-sm"
                      aria-label="Previous project"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={nextSlide} 
                      className="w-12 h-12 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all shadow-sm"
                      aria-label="Next project"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>

                </div>

              </div>
            </div>
          </div>
          </div>
        </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
