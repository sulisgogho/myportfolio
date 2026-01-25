import React, { useState, useEffect } from 'react'
import { Github, ExternalLink, TrendingUp, ChevronDown, ChevronUp, Image as ImageIcon, X, Calendar, CheckCircle2 } from 'lucide-react'
import { projects } from '@/data/content'

const Projects = ({ isDarkMode }) => {
  const [showAll, setShowAll] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null) // State untuk Modal
  const INITIAL_LIMIT = 6
  const displayedProjects = showAll ? projects : projects.slice(0, INITIAL_LIMIT)

  // Non-aktifkan scroll body saat modal terbuka
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [selectedProject])

  return (
    <section id="projects" className={`py-20 border-t transition-colors duration-300 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="mb-4 md:mb-0">
            <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Projek Unggulan</h2>
            <p className={`max-w-xl ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Kumpulan studi kasus Data Analyst dan Fullstack. Klik kartu untuk detail lengkap.</p>
          </div>
        </div>

        {/* GRID KARTU */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)} // Trigger Modal
              className={`rounded-xl overflow-hidden border transition-all duration-300 flex flex-col h-full hover:shadow-2xl hover:-translate-y-1 cursor-pointer group/card ${isDarkMode ? 'bg-slate-800 border-slate-700 shadow-slate-900/50' : 'bg-white border-slate-200 shadow-slate-200/50'}`}
            >
              {/* BAGIAN GAMBAR */}
              <div className="h-48 relative overflow-hidden bg-slate-200">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" />
                ) : (
                  <div className={`w-full h-full flex items-center justify-center ${isDarkMode ? 'bg-slate-700' : 'bg-slate-100'}`}>
                    <ImageIcon className="text-slate-400" size={48} />
                  </div>
                )}

                {/* Overlay Tombol (Gunakan stopPropagation agar tidak membuka modal saat diklik) */}
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover/card:opacity-100 flex items-center justify-center gap-4 transition-all duration-300 backdrop-blur-[2px]">
                  <a href={project.github} onClick={(e) => e.stopPropagation()} className="p-3 bg-white rounded-full text-slate-900 hover:bg-blue-50 transition-colors transform hover:scale-110 shadow-lg" title="Lihat Kode">
                    <Github size={20} />
                  </a>
                  <a href={project.link} onClick={(e) => e.stopPropagation()} className="p-3 bg-blue-600 rounded-full text-white hover:bg-blue-500 transition-colors transform hover:scale-110 shadow-lg" title="Lihat Demo">
                    <ExternalLink size={20} />
                  </a>
                </div>

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-bold text-white bg-blue-600/90 backdrop-blur-md rounded-full shadow-sm">{project.category}</span>
                </div>
              </div>

              {/* KONTEN KARTU */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className={`text-xl font-bold mb-3 line-clamp-1 group-hover/card:text-blue-500 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{project.title}</h3>
                <p className={`text-sm mb-4 flex-1 line-clamp-3 leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{project.description}</p>
                <div className={`mb-4 p-3 rounded-lg border flex items-center gap-3 ${isDarkMode ? 'bg-slate-900/50 border-slate-700/50' : 'bg-slate-50 border-slate-100'}`}>
                  <div className={`p-1.5 rounded-md ${isDarkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600'}`}>
                    <TrendingUp size={16} />
                  </div>
                  <span className={`text-xs font-mono font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>{project.stats}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-dashed border-gray-500/20">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className={`px-2.5 py-1 text-xs font-medium rounded-md ${isDarkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* TOMBOL LOAD MORE */}
        {projects.length > INITIAL_LIMIT && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className={`flex items-center gap-2 px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 active:scale-95 ${
                isDarkMode ? 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-blue-500/50' : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-md hover:shadow-lg'
              }`}
            >
              {showAll ? (
                <>
                  Tampilkan Lebih Sedikit <ChevronUp size={18} />
                </>
              ) : (
                <>
                  Lihat Projek Lainnya <ChevronDown size={18} />
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* --- MODAL / POPUP PROJECT DETAIL --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop Blur */}
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={() => setSelectedProject(null)}></div>

          {/* Modal Content */}
          <div className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl flex flex-col ${isDarkMode ? 'bg-slate-800 text-slate-100' : 'bg-white text-slate-900'}`}>
            {/* Tombol Close */}
            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-md transition-all">
              <X size={24} />
            </button>

            {/* Gambar Header Modal */}
            <div className="relative h-64 sm:h-80 shrink-0">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1 text-xs font-bold text-white bg-blue-600 rounded-full mb-3 inline-block">{selectedProject.category}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{selectedProject.title}</h2>
              </div>
            </div>

            {/* Body Modal (Konten Blog) */}
            <div className="p-6 md:p-8 space-y-8">
              {/* Quick Stats Bar */}
              <div className={`flex flex-wrap gap-4 p-4 rounded-xl border ${isDarkMode ? 'bg-slate-900/50 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
                <div className="flex items-center gap-2">
                  <TrendingUp className="text-green-500" size={20} />
                  <span className="font-semibold">{selectedProject.stats}</span>
                </div>
                <div className="w-px h-6 bg-slate-500/30 hidden sm:block"></div>
                {selectedProject.details?.date && (
                  <div className="flex items-center gap-2 text-slate-500">
                    <Calendar size={18} />
                    <span>{selectedProject.details.date}</span>
                  </div>
                )}
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Kolom Kiri: Main Content */}
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h3 className={`text-xl font-bold mb-3 flex items-center gap-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-700'}`}>Tentang Project</h3>
                    <p className={`leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      {selectedProject.description}
                      {/* Jika ada teks tambahan panjang, taruh di sini */}
                      <br />
                      <br />
                      Proyek ini dirancang untuk menjawab kebutuhan spesifik di industri {selectedProject.category}, dengan fokus pada skalabilitas dan akurasi data.
                    </p>
                  </div>

                  {selectedProject.details && (
                    <>
                      <div>
                        <h4 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Tantangan</h4>
                        <p className={`leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{selectedProject.details.problem}</p>
                      </div>

                      <div>
                        <h4 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Solusi Teknis</h4>
                        <p className={`leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{selectedProject.details.solution}</p>
                      </div>

                      <div>
                        <h4 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Hasil Analisis</h4>
                        <p className={`leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{selectedProject.details.analysis_results}</p>
                      </div>

                      <div>
                        <h4 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Rekomendasi Bisnis</h4>
                        <p className={`leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{selectedProject.details.business_recommendations}</p>
                      </div>
                    </>
                  )}
                </div>

                {/* Kolom Kanan: Sidebar Info */}
                <div className="space-y-6">
                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-bold mb-3 text-sm uppercase tracking-wider opacity-70">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span key={tag} className={`px-3 py-1.5 text-sm rounded-lg border ${isDarkMode ? 'bg-slate-700 border-slate-600 text-slate-200' : 'bg-white border-slate-200 text-slate-700'}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features List */}
                  {selectedProject.details?.features && (
                    <div>
                      <h4 className="font-bold mb-3 text-sm uppercase tracking-wider opacity-70">Fitur Utama</h4>
                      <ul className="space-y-2">
                        {selectedProject.details.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                            <span className={isDarkMode ? 'text-slate-300' : 'text-slate-600'}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="pt-6 border-t border-slate-500/20 flex flex-col gap-3">
                    <a href={selectedProject.link} className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all shadow-lg shadow-blue-900/20">
                      <ExternalLink size={18} /> Live Demo
                    </a>
                    <a
                      href={selectedProject.github}
                      className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-medium transition-all border ${isDarkMode ? 'bg-slate-700 hover:bg-slate-600 text-white border-slate-600' : 'bg-white hover:bg-slate-50 text-slate-900 border-slate-200'}`}
                    >
                      <Github size={18} /> Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
