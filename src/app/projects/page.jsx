'use client';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Search, MonitorPlay, FileText, FileSpreadsheet, Presentation, ExternalLink, X, Images, ChevronLeft, ChevronRight } from 'lucide-react';

const Github = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);

import { projects } from '@/lib/data';
import AnimatedSection from '@/components/AnimatedSection';

/** Auto-sliding photo gallery component */
function PhotoGallery({ images }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef(null);

  const goTo = useCallback((idx, fromTimer = false) => {
    if (isTransitioning && !fromTimer) return;
    setIsTransitioning(true);
    setActiveIdx(idx);
    setTimeout(() => setIsTransitioning(false), 400);
  }, [isTransitioning]);

  const next = useCallback(() => {
    goTo((prev) => {
      const nextIdx = (prev + 1) % images.length;
      return nextIdx;
    }, true);
  }, [goTo, images.length]);

  // Reset to index 0 when images change
  useEffect(() => {
    setActiveIdx(0);
  }, [images]);

  // Auto-slide every 2.5s
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveIdx(prev => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(timerRef.current);
  }, [images.length]);

  const handlePrev = () => {
    clearInterval(timerRef.current);
    setActiveIdx(prev => (prev === 0 ? images.length - 1 : prev - 1));
    timerRef.current = setInterval(() => {
      setActiveIdx(prev => (prev + 1) % images.length);
    }, 2500);
  };

  const handleNext = () => {
    clearInterval(timerRef.current);
    setActiveIdx(prev => (prev + 1) % images.length);
    timerRef.current = setInterval(() => {
      setActiveIdx(prev => (prev + 1) % images.length);
    }, 2500);
  };

  const handleDot = (idx) => {
    clearInterval(timerRef.current);
    setActiveIdx(idx);
    timerRef.current = setInterval(() => {
      setActiveIdx(prev => (prev + 1) % images.length);
    }, 2500);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="mb-8">
      <h4 className="font-extrabold text-zinc-900 mb-3 flex items-center gap-2 text-base">
        <Images className="w-5 h-5 text-brand-green" /> Project Photos
      </h4>

      {/* Main Image */}
      <div className="relative w-full h-[220px] md:h-[340px] rounded-2xl overflow-hidden border-2 border-zinc-100 bg-zinc-100 group">
        <Image
          key={activeIdx}
          src={images[activeIdx]}
          alt={`Project photo ${activeIdx + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 900px"
          className="object-cover transition-opacity duration-400"
          style={{ opacity: 1 }}
          priority
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 via-transparent to-transparent pointer-events-none" />

        {/* Prev/Next Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-zinc-800 hover:bg-brand-green hover:text-white transition-all shadow-md opacity-0 group-hover:opacity-100 z-10"
          aria-label="Previous photo"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-zinc-800 hover:bg-brand-green hover:text-white transition-all shadow-md opacity-0 group-hover:opacity-100 z-10"
          aria-label="Next photo"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Counter badge */}
        <div className="absolute bottom-3 right-3 bg-zinc-900/70 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full">
          {activeIdx + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="flex gap-2 mt-3 overflow-x-auto pb-1 scrollbar-hide">
        {images.map((src, idx) => (
          <button
            key={idx}
            onClick={() => handleDot(idx)}
            className={`relative flex-shrink-0 w-16 h-12 md:w-20 md:h-14 rounded-xl overflow-hidden border-2 transition-all ${
              activeIdx === idx
                ? 'border-brand-green scale-105 shadow-md'
                : 'border-zinc-200 opacity-60 hover:opacity-90 hover:border-zinc-300'
            }`}
            aria-label={`View photo ${idx + 1}`}
          >
            <Image
              src={src}
              alt={`Thumbnail ${idx + 1}`}
              fill
              sizes="80px"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-1.5 mt-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDot(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              activeIdx === idx ? 'w-6 bg-brand-green' : 'w-1.5 bg-zinc-300 hover:bg-zinc-400'
            }`}
            aria-label={`Go to photo ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  // Filter projects based on search query
  const filteredProjects = projects.filter(project => {
    const query = searchQuery.toLowerCase();
    return (
      project.title.toLowerCase().includes(query) ||
      project.category.toLowerCase().includes(query) ||
      project.role.toLowerCase().includes(query) ||
      project.tags.some(tag => tag.toLowerCase().includes(query)) ||
      project.shortDesc.toLowerCase().includes(query)
    );
  });

  // Close modal on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') setSelectedProject(null); };
    if (selectedProject) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedProject]);

  return (
    <main className="min-h-screen bg-[#E8E8E8] py-16 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none"></div>
      
      <div className="w-full max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Navigation & Header */}
        <AnimatedSection>
          <div className="mb-12">
            <Link href="/#portfolio" className="inline-flex items-center text-zinc-500 hover:text-brand-green font-bold text-sm md:text-base mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 font-urbanist mb-4">
              All Projects
            </h1>
            <p className="text-zinc-600 max-w-2xl font-medium">
              A complete archive of all the applications, tools, and research projects I have worked on. Use the search bar below to find something specific.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-12">
            <div className="relative max-w-xl">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-zinc-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-11 pr-4 py-4 bg-white border border-brand-green/20 rounded-2xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green/50 shadow-sm transition-all font-medium"
                placeholder="Search by title, technology, or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 100}>
                <div 
                  onClick={() => setSelectedProject(project)}
                  className="group flex flex-col bg-white border border-brand-green/20 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-brand-green/50 hover:-translate-y-1 h-full cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative w-full aspect-square bg-zinc-100 overflow-hidden">
                    <Image 
                      src={project.imageUrl} 
                      alt={project.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs md:text-sm font-bold text-brand-green shadow-sm">
                      {project.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-extrabold text-zinc-900 transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                      <div className="w-8 h-8 shrink-0 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-brand-green group-hover:border-brand-green group-hover:text-white transition-colors duration-300 text-zinc-400 ml-4">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                    
                    <p className="text-zinc-500 text-sm md:text-base font-medium mb-6 flex-grow line-clamp-3">
                      {project.shortDesc}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="px-3 py-1.5 bg-zinc-100 rounded-lg text-xs md:text-sm font-bold text-zinc-600">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-3 py-1.5 bg-zinc-100 rounded-lg text-xs md:text-sm font-bold text-zinc-600">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        ) : (
          <AnimatedSection>
            <div className="text-center py-20 bg-white border border-brand-green/20 rounded-3xl">
              <h3 className="text-xl font-bold text-zinc-900 mb-2">No projects found</h3>
              <p className="text-zinc-500">Try adjusting your search query to find what you&apos;re looking for.</p>
            </div>
          </AnimatedSection>
        )}

      </div>

      {/* MODAL DETAIL PROYEK */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-zinc-900/80 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) setSelectedProject(null); }}
        >
          <div className="bg-white w-full max-w-5xl max-h-[90vh] rounded-[2rem] shadow-2xl flex flex-col overflow-hidden border border-brand-green/20 animate-in fade-in zoom-in duration-300">
            {/* Modal Header */}
            <div className="p-6 border-b border-zinc-100 flex justify-between items-center bg-zinc-50/50 flex-shrink-0">
              <div>
                <span className="text-xs md:text-sm font-black px-3 py-1 rounded-full bg-brand-green/10 text-brand-green mb-2 inline-block">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-zinc-900 leading-tight font-urbanist">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-3 bg-zinc-100 hover:bg-red-500 hover:text-white rounded-full transition-colors flex-shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 overflow-y-auto">

              {/* 1. Photo Gallery Slider (always shown if projectImages exists) */}
              {selectedProject.projectImages && selectedProject.projectImages.length > 0 && (
                <PhotoGallery images={selectedProject.projectImages} />
              )}

              {/* 2. Live Preview (iframe) */}
              {selectedProject.websiteUrl && (
                <div className="mb-8">
                  <h4 className="font-extrabold text-zinc-900 mb-3 flex items-center gap-2 text-base">
                    <MonitorPlay className="w-5 h-5 text-brand-green" /> Live Preview
                  </h4>
                  <div className="w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden border-2 border-zinc-100 relative bg-zinc-50">
                    <div className="absolute inset-0 flex items-center justify-center z-0">
                      <span className="animate-pulse font-bold text-sm md:text-base text-zinc-400">Loading Preview...</span>
                    </div>
                    <iframe src={selectedProject.websiteUrl} className="w-full h-full relative z-10 bg-white" title="Preview" sandbox="allow-scripts allow-same-origin" />
                  </div>
                </div>
              )}

              {/* 3. Document Preview */}
              {selectedProject.documentUrl && selectedProject.documentType && (
                <div className="mb-8">
                  <h4 className="font-extrabold text-zinc-900 mb-3 flex items-center gap-2 text-base">
                    {selectedProject.documentType === 'pdf' && <FileText className="w-5 h-5 text-red-500" />}
                    {selectedProject.documentType === 'excel' && <FileSpreadsheet className="w-5 h-5 text-brand-green" />}
                    {selectedProject.documentType === 'ppt' && <Presentation className="w-5 h-5 text-orange-500" />}
                    Document Preview
                  </h4>
                  <div className="w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden border-2 border-zinc-100">
                    <iframe src={`https://docs.google.com/gview?url=${encodeURIComponent(selectedProject.documentUrl)}&embedded=true`} className="w-full h-full" title="Doc Preview" />
                  </div>
                </div>
              )}

              {/* 4. Description + Info */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h4 className="font-extrabold text-zinc-900 mb-2 text-base uppercase tracking-wider font-mono">Project Description</h4>
                  <p className="text-zinc-600 leading-relaxed mb-6 font-medium text-sm md:text-base whitespace-pre-line">
                    {selectedProject.fullDesc}
                  </p>
                  
                  <h4 className="font-extrabold text-zinc-900 mb-3 text-base uppercase tracking-wider font-mono">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, idx) => (
                      <span key={idx} className="text-sm md:text-base font-bold bg-zinc-100 text-zinc-700 px-4 py-2 rounded-xl border border-zinc-200/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200/50 h-fit">
                  <h4 className="font-extrabold text-zinc-900 mb-4 text-base uppercase tracking-wider font-mono">Information</h4>
                  <p className="text-sm md:text-base font-bold text-zinc-500 mb-1">Role</p>
                  <p className="font-bold text-brand-green mb-6 text-base">{selectedProject.role}</p>
                  
                  <div className="space-y-3">
                    {selectedProject.websiteUrl && (
                      <a
                        href={selectedProject.websiteUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green/90 text-white px-4 py-3 rounded-xl font-bold transition-colors w-full text-sm md:text-base shadow-sm"
                      >
                        <ExternalLink className="w-4 h-4" /> Open Live Demo
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white px-4 py-3 rounded-xl font-bold transition-colors w-full text-sm md:text-base shadow-sm"
                      >
                        <Github className="w-4 h-4" /> GitHub Repository
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
