'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Sun, Moon, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [theme, setTheme] = useState('dark') // Set default ke Light Mode
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  return (
    <div className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-2xl">
      <nav className="backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 shadow-2xl rounded-full px-4 py-2 md:py-3 flex items-center justify-between transition-all duration-300">
        <Link href="/" className="text-lg md:text-xl font-black bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent ml-2">
          SM.
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-bold text-slate-600 dark:text-slate-300">
          <Link href="/" className="hover:text-blue-500 transition-colors">
            Beranda
          </Link>
          <Link href="/#tech-stack" className="hover:text-blue-500 transition-colors">
            Keahlian
          </Link>
          <Link href="/#portfolio" className="hover:text-blue-500 transition-colors">
            Karya
          </Link>
          <Link href="/#experience" className="hover:text-blue-500 transition-colors">
            Pengalaman
          </Link>
          <Link href="/#blog" className="hover:text-blue-500 transition-colors">
            Blog
          </Link>
          <Link href="/#contact" className="hover:text-blue-500 transition-colors">
            Kontak
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:scale-110 transition-transform">
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 absolute w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-700 rounded-3xl p-3 flex flex-col space-y-1 shadow-2xl">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-center font-bold p-3 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl">
            Beranda
          </Link>
          <Link href="/#tech-stack" onClick={() => setIsMobileMenuOpen(false)} className="text-center font-bold p-3 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl">
            Keahlian
          </Link>
          <Link href="/#portfolio" onClick={() => setIsMobileMenuOpen(false)} className="text-center font-bold p-3 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl">
            Karya
          </Link>
          <Link href="/#experience" onClick={() => setIsMobileMenuOpen(false)} className="text-center font-bold p-3 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl">
            Pengalaman
          </Link>
          <Link href="/#blog" onClick={() => setIsMobileMenuOpen(false)} className="text-center font-bold p-3 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl">
            Blog
          </Link>
          <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-center font-bold p-3 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl">
            Kontak
          </Link>
        </div>
      )}
    </div>
  )
}
