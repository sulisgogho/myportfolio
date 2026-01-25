import React from 'react'
import { skills } from '@/data/content'

const Skills = ({ isDarkMode }) => {
  return (
    <section id="skills" className={`py-20 border-t transition-colors duration-300 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Tech Stack & Keahlian</h2>
          <p className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>Alat dan teknologi yang saya gunakan.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl border transition-all hover:-translate-y-1 flex flex-col items-center justify-center gap-3 text-center group ${
                isDarkMode ? 'bg-slate-800 border-slate-700 hover:border-blue-500' : 'bg-white border-slate-200 hover:border-blue-500 shadow-sm hover:shadow-md'
              }`}
            >
              <div className={`transform group-hover:scale-110 transition-transform ${isDarkMode ? 'text-blue-400 group-hover:text-blue-300' : 'text-blue-600 group-hover:text-blue-500'}`}>
                {/* Icon dirender langsung dari data */}
                {skill.icon}
              </div>
              <h3 className={`font-semibold text-sm ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>{skill.name}</h3>
              <span className={`text-xs px-2 py-1 rounded-full ${isDarkMode ? 'text-slate-500 bg-slate-900' : 'text-slate-500 bg-slate-100'}`}>{skill.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
