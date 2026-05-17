'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { projects } from '@/lib/data'
import AnimatedSection from '@/components/AnimatedSection'
import { ArrowLeft, ArrowRight, MonitorPlay, FileText, FileSpreadsheet, Presentation, ExternalLink, X } from 'lucide-react'

// --- CUSTOM GITHUB ICON ---
const GithubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
)
// ----------------------------

export default function AllProjects() {
  const [activeTab, setActiveTab] = useState('Semua')
  const [selectedProject, setSelectedProject] = useState(null)

  const tabs = ['Semua', 'Website', 'Data', 'Trading', 'Admin']
  const filteredProjects = activeTab === 'Semua' ? projects : projects.filter((p) => p.category === activeTab)

  return (
    <main className="pt-28 md:pt-32 pb-16 md:pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <Link href="/#portfolio" className="mb-6 md:mb-8 flex items-center gap-2 text-slate-500 hover:text-blue-500 font-bold transition-colors text-sm md:text-base w-fit">
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" /> Kembali
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 md:mb-8">Katalog Seluruh Karya</h1>

          <div className="flex flex-wrap gap-2 mb-8 md:mb-12 border-b border-slate-200 dark:border-slate-800 pb-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-bold transition-all ${
                  activeTab === tab ? 'bg-slate-800 text-white dark:bg-white dark:text-slate-900 shadow-sm' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedSection key={project.id} delay={(index % 6) * 100}>
              <div
                onClick={() => setSelectedProject(project)}
                className="group bg-white dark:bg-slate-800 rounded-2xl md:rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-blue-500 cursor-pointer transition-all hover:-translate-y-1 hover:shadow-xl flex flex-col h-full"
              >
                <div className="h-40 md:h-48 relative overflow-hidden shrink-0 border-b border-slate-100 dark:border-slate-700">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 md:top-4 md:left-4 z-20 flex gap-2">
                    <span className="text-[10px] md:text-xs font-black px-2 py-1 md:px-3 md:py-1.5 rounded-full bg-white/95 dark:bg-slate-900/95 text-blue-600 dark:text-blue-400 backdrop-blur-sm shadow-sm">{project.category}</span>
                  </div>
                </div>
                <div className="p-5 md:p-8 flex flex-col flex-grow">
                  <div className="mb-3 md:mb-4 flex justify-between items-start">
                    <h3 className="text-lg md:text-xl font-extrabold text-slate-800 dark:text-slate-100 line-clamp-2">{project.title}</h3>
                    <div className="bg-slate-50 dark:bg-slate-700 p-1.5 md:p-2 rounded-full group-hover:bg-blue-500 group-hover:text-white transition-colors shrink-0 ml-3 shadow-sm">
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-5 md:mb-6 flex-grow font-medium text-xs md:text-sm line-clamp-3">{project.shortDesc}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] md:text-xs font-bold bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 px-2 py-1 md:px-3 md:py-1.5 rounded-md md:rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && <span className="text-[10px] md:text-xs font-bold text-slate-400 py-1 md:py-1.5">+{project.tags.length - 3}</span>}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* MODAL DETAIL PROYEK */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-4 bg-slate-900/80 backdrop-blur-md">
          <div className="bg-white dark:bg-slate-900 w-full max-w-5xl max-h-[95vh] md:max-h-[90vh] rounded-2xl md:rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-200 dark:border-slate-700 animate-in fade-in zoom-in duration-300">
            <div className="p-4 md:p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-900">
              <div>
                <span className="text-[10px] md:text-xs font-black px-2 py-1 md:px-3 md:py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-1 md:mb-2 inline-block">{selectedProject.category}</span>
                <h3 className="text-lg md:text-2xl font-extrabold text-slate-800 dark:text-slate-100 leading-tight">{selectedProject.title}</h3>
              </div>
              <button onClick={() => setSelectedProject(null)} className="p-2 md:p-3 bg-slate-200 dark:bg-slate-800 hover:bg-red-500 hover:text-white rounded-full transition-colors flex-shrink-0">
                <X className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>

            <div className="p-4 md:p-8 overflow-y-auto">
              {selectedProject.websiteUrl && (
                <div className="mb-6 md:mb-8">
                  <h4 className="font-extrabold text-slate-800 dark:text-slate-200 mb-2 md:mb-3 flex items-center gap-2 text-sm md:text-base">
                    <MonitorPlay className="w-4 h-4 md:w-5 md:h-5 text-blue-500" /> Mini Website Preview
                  </h4>
                  <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-xl md:rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-700 relative">
                    <div className="absolute inset-0 flex items-center justify-center z-0">
                      <span className="animate-pulse font-bold text-xs md:text-sm text-slate-400">Memuat Preview...</span>
                    </div>
                    <iframe src={selectedProject.websiteUrl} className="w-full h-full relative z-10 bg-white" title="Preview" sandbox="allow-scripts allow-same-origin" />
                  </div>
                </div>
              )}
              {selectedProject.documentUrl && selectedProject.documentType && (
                <div className="mb-6 md:mb-8">
                  <h4 className="font-extrabold text-slate-800 dark:text-slate-200 mb-2 md:mb-3 flex items-center gap-2 text-sm md:text-base">
                    {selectedProject.documentType === 'pdf' && <FileText className="w-4 h-4 md:w-5 md:h-5 text-red-500" />}
                    {selectedProject.documentType === 'excel' && <FileSpreadsheet className="w-4 h-4 md:w-5 md:h-5 text-green-500" />}
                    {selectedProject.documentType === 'ppt' && <Presentation className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />}
                    Preview Dokumen
                  </h4>
                  <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-xl md:rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-700">
                    <iframe src={`https://docs.google.com/gview?url=${encodeURIComponent(selectedProject.documentUrl)}&embedded=true`} className="w-full h-full" title="Doc Preview" />
                  </div>
                </div>
              )}

              <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                <div className="md:col-span-2">
                  <h4 className="font-extrabold text-slate-800 dark:text-slate-200 mb-2 text-sm md:text-base">Deskripsi Proyek</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 md:mb-6 font-medium text-xs md:text-sm whitespace-pre-line">{selectedProject.fullDesc}</p>
                  <h4 className="font-extrabold text-slate-800 dark:text-slate-200 mb-2 md:mb-3 text-sm md:text-base">Teknologi</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, idx) => (
                      <span key={idx} className="text-[10px] md:text-sm font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 md:p-6 rounded-xl md:rounded-2xl border border-slate-200 dark:border-slate-700 h-fit mt-2 md:mt-0">
                  <h4 className="font-extrabold text-slate-800 dark:text-slate-200 mb-3 md:mb-4 text-sm md:text-base">Informasi</h4>
                  <p className="text-[10px] md:text-sm font-bold text-slate-500 mb-1">Peran</p>
                  <p className="font-bold text-blue-600 dark:text-blue-400 mb-4 md:mb-6 text-sm md:text-base">{selectedProject.role}</p>
                  <div className="space-y-2 md:space-y-3">
                    {selectedProject.websiteUrl && (
                      <a
                        href={selectedProject.websiteUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 md:px-4 md:py-3 rounded-lg md:rounded-xl font-bold transition-colors w-full text-xs md:text-sm"
                      >
                        <ExternalLink className="w-3 h-3 md:w-4 h-4" /> Buka Live Demo
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white dark:bg-slate-700 dark:hover:bg-slate-600 px-3 py-2 md:px-4 md:py-3 rounded-lg md:rounded-xl font-bold transition-colors w-full text-xs md:text-sm"
                      >
                        <GithubIcon className="w-3 h-3 md:w-4 h-4" /> Repositori GitHub
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
  )
}
