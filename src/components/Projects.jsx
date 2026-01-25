import React from 'react'
import { BarChart2, Github, ExternalLink, TrendingUp } from 'lucide-react'
import { projects } from '@/data/content'

const Projects = ({ isDarkMode }) => {
  return (
    <section id="projects" className={`py-20 border-t transition-colors duration-300 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="mb-4 md:mb-0">
            <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Projek Unggulan</h2>
            <p className={`max-w-xl ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Kumpulan studi kasus Data Analyst dan Fullstack </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`rounded-xl overflow-hidden border transition-all duration-300 flex flex-col h-full hover:shadow-xl hover:shadow-blue-500/10 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200 shadow-md'}`}
            >
              <div className={`h-40 flex items-center justify-center relative group ${isDarkMode ? 'bg-gradient-to-r from-slate-700 to-slate-600' : 'bg-gradient-to-r from-slate-100 to-white'}`}>
                <BarChart2 className={`w-16 h-16 transition-transform duration-300 group-hover:scale-110 ${isDarkMode ? 'text-slate-500' : 'text-slate-300'}`} />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
                  <a href={project.github} className="p-2 bg-white rounded-full text-slate-900 hover:bg-gray-200">
                    <Github size={20} />
                  </a>
                  <a href={project.link} className="p-2 bg-blue-600 rounded-full text-white hover:bg-blue-500">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-semibold text-blue-500 uppercase tracking-wider">{project.category}</span>
                </div>
                <h3 className={`text-xl font-bold mb-3 transition-colors ${isDarkMode ? 'text-white group-hover:text-blue-400' : 'text-slate-900 group-hover:text-blue-600'}`}>{project.title}</h3>
                <p className={`text-sm mb-4 flex-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{project.description}</p>

                <div className={`mb-4 p-3 rounded-lg border ${isDarkMode ? 'bg-slate-900/50 border-slate-700/50' : 'bg-slate-50 border-slate-100'}`}>
                  <p className="text-xs text-green-500 font-mono flex items-center gap-2">
                    <TrendingUp size={12} />
                    {project.stats}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className={`px-2 py-1 text-xs rounded-md ${isDarkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
