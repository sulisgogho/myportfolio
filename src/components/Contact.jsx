import React from 'react'
import { Mail, Linkedin } from 'lucide-react'
import { personalInfo } from '@/data/content'

const Contact = ({ isDarkMode }) => {
  return (
    <section id="contact" className={`py-20 border-t transition-colors duration-300 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Siap Berkolaborasi?</h2>
        <p className={`mb-10 text-lg ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Hubungi saya untuk diskusi lebih lanjut.</p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a href={`mailto:${personalInfo.email}`} className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/25">
            <Mail size={20} />
            Kirim Email
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-3 px-8 py-4 rounded-lg font-semibold border transition-colors ${
              isDarkMode ? 'bg-slate-800 hover:bg-slate-700 text-white border-slate-700' : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 shadow-sm'
            }`}
          >
            <Linkedin size={20} />
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
