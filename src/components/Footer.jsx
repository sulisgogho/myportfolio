import React from 'react'
import { personalInfo } from '@/data/content'

const Footer = ({ isDarkMode }) => {
  return (
    <footer className={`py-8 border-t transition-colors duration-300 ${isDarkMode ? 'bg-slate-950 text-slate-500 border-slate-900' : 'bg-slate-50 text-slate-500 border-slate-200'}`}>
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-slate-900'}`}>
            Resume
          </a>
          <a href="#" className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-slate-900'}`}>
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
