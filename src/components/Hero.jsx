import React from 'react'
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'
import { personalInfo } from '@/data/content'

const Hero = ({ isDarkMode }) => {
  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center pt-16 transition-colors duration-300 ${isDarkMode ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900' : 'bg-gradient-to-br from-slate-50 via-white to-blue-50'}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border mb-2 ${isDarkMode ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 'bg-blue-50 text-blue-600 border-blue-100'}`}>Data Analyst & Fullstack Dev</div>
          <h1 className={`text-4xl md:text-6xl font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Membangun Sistem.
            <br />
            Menganalisis <span className="text-blue-500">Data.</span>
          </h1>
          <p className={`text-lg max-w-xl mx-auto md:mx-0 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Halo, saya {personalInfo.name}. {personalInfo.bio}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <a href="#projects" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20">
              Lihat Projek <ChevronDown size={18} />
            </a>
            <a
              href="#contact"
              className={`px-8 py-3 rounded-lg font-medium transition-colors border ${isDarkMode ? 'bg-slate-700 hover:bg-slate-600 text-white border-slate-600' : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 shadow-sm'}`}
            >
              Hubungi Saya
            </a>
          </div>

          <div className={`flex gap-4 justify-center md:justify-start pt-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            <a href={personalInfo.github} className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-slate-900'}`}>
              <Github size={24} />
            </a>
            <a href={personalInfo.linkedin} className="hover:text-blue-500 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="hover:text-red-500 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="md:w-1/2 mt-12 md:mt-0 relative flex justify-center">
          {/* Visualisasi Kode */}
          <div
            className={`relative w-72 h-72 md:w-96 md:h-96 rounded-full blur-3xl absolute top-0 left-0 animate-pulse ${
              isDarkMode ? 'bg-gradient-to-tr from-blue-500/20 to-purple-500/20' : 'bg-gradient-to-tr from-blue-200/50 to-purple-200/50'
            }`}
          ></div>
          <div
            className={`relative z-10 backdrop-blur-xl border p-8 rounded-2xl shadow-2xl w-full max-w-md transform rotate-2 hover:rotate-0 transition-all duration-500 ${
              isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white/70 border-white/50 ring-1 ring-slate-200'
            }`}
          >
            <div className={`flex items-center gap-3 mb-6 border-b pb-4 ${isDarkMode ? 'border-slate-700' : 'border-slate-100'}`}>
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className={`text-sm font-mono ml-auto ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>app.js</span>
            </div>
            <div className="space-y-3 font-mono text-sm">
              <div className="text-slate-500">Start Application</div>
              <div className={isDarkMode ? 'text-blue-300' : 'text-blue-600'}>const result = await analyzeData();</div>
              <div className={isDarkMode ? 'text-green-300' : 'text-green-600'}>renderDashboard(result);</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
