import React from 'react'
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'
import { personalInfo } from '@/data/content'

const Hero = ({ isDarkMode }) => {
  return (
    <section
      id="home"
      // Tambahkan 'overflow-hidden' agar efek blur tidak bikin scroll samping di HP
      // Tambahkan 'py-20' agar konten tidak kepotong navbar di HP
      className={`min-h-screen flex items-center justify-center relative overflow-hidden py-20 lg:py-0 transition-colors duration-300 ${
        isDarkMode ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900' : 'bg-gradient-to-br from-slate-50 via-white to-blue-50'
      }`}
    >
      {/* Container utama: Gunakan gap untuk jarak antar kolom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center gap-10 md:gap-12 lg:gap-20">
        {/* Kolom Kiri: Teks */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6 z-10">
          {/* Badge Role */}
          <div className={`inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-semibold border mb-2 ${isDarkMode ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 'bg-blue-50 text-blue-600 border-blue-100'}`}>
            Data Analyst & Fullstack Dev
          </div>

          {/* Heading: Responsif dari HP (3xl) sampai Desktop (6xl) */}
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Membangun Sistem.
            <br className="hidden sm:block" /> {/* Break line hanya di tablet ke atas */}
            <span className="block mt-2">
              {' '}
              {/* Jarak dikit antar baris */}
              Menganalisa <span className="text-blue-500">Data.</span>
            </span>
          </h1>

          {/* Bio Text */}
          <p className={`text-base sm:text-lg max-w-lg mx-auto md:mx-0 leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Halo, saya {personalInfo.name}. {personalInfo.bio}
          </p>

          {/* Tombol Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
            <a href="#projects" className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20">
              Lihat Projek <ChevronDown size={18} />
            </a>
            <a
              href="#contact"
              className={`w-full sm:w-auto px-8 py-3.5 rounded-lg font-medium transition-colors border flex items-center justify-center ${
                isDarkMode ? 'bg-slate-700 hover:bg-slate-600 text-white border-slate-600' : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 shadow-sm'
              }`}
            >
              Hubungi Saya
            </a>
          </div>

          {/* Social Icons */}
          <div className={`flex gap-6 justify-center md:justify-start pt-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={`transform hover:scale-110 transition-all ${isDarkMode ? 'hover:text-white' : 'hover:text-slate-900'}`}>
              <Github size={24} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-all hover:text-blue-500">
              <Linkedin size={24} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="transform hover:scale-110 transition-all hover:text-red-500">
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Kolom Kanan: Visualisasi Kode */}
        <div className="w-full md:w-1/2 relative flex justify-center items-center mt-8 md:mt-0">
          {/* Blob Background: Ukuran responsif */}
          <div
            className={`absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full blur-3xl animate-pulse ${isDarkMode ? 'bg-gradient-to-tr from-blue-500/20 to-purple-500/20' : 'bg-gradient-to-tr from-blue-200/50 to-purple-200/50'}`}
          ></div>

          {/* Code Window Card */}
          <div
            className={`relative z-10 backdrop-blur-xl border p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md transform rotate-2 hover:rotate-0 transition-all duration-500 ${
              isDarkMode ? 'bg-slate-800/60 border-slate-700' : 'bg-white/70 border-white/50 ring-1 ring-slate-200'
            }`}
          >
            {/* Window Controls */}
            <div className={`flex items-center gap-3 mb-6 border-b pb-4 ${isDarkMode ? 'border-slate-700' : 'border-slate-100'}`}>
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className={`text-xs sm:text-sm font-mono ml-auto ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>app.js</span>
            </div>

            {/* Code Content */}
            <div className="space-y-3 font-mono text-xs sm:text-sm">
              <div className="text-slate-500"> Start Application</div>
              <div className={isDarkMode ? 'text-blue-300' : 'text-blue-600'}>const result = await analyzeData();</div>
              <div className={isDarkMode ? 'text-green-300' : 'text-green-600'}>renderDashboard(result);</div>
              <div className="flex gap-2 mt-4 pt-2 border-t border-dashed border-gray-600/30">
                <span className="text-purple-400">console</span>.log(<span className="text-yellow-400">"Ready!"</span>);
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
