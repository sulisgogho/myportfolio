'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Moon, Sun, X as CloseIcon } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '@/components/Icons';

// Custom X (Twitter) Icon
const XIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'services', 'portfolio', 'blog', 'contact'];
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 100) {
            current = section;
          }
        }
      }

      if (window.scrollY < 50) {
        current = 'home';
      }

      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  // Load saved theme on mount
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.documentElement.classList.add('dark');
      // eslint-disable-next-line
      setIsDark(true);
    }
  }, []);

  const toggleDark = () => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDark(!isDark);
  };

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isSidebarOpen]);

  return (
    <>
      <div className="fixed top-6 w-full flex justify-center items-center z-40 px-4">
        {/* Outer wrapper */}
        <div className="flex items-center w-full max-w-7xl mx-auto">

          {/* Main Navbar Pill */}
          <div className="flex-1 bg-[#323631] rounded-[20px] flex items-stretch h-[56px] shadow-lg border border-white/5 mx-auto">

            {/* Menu Button (Left Side) */}
            <button
              className="flex items-center justify-center w-16 h-full border-r border-white/10 text-zinc-300 hover:text-white hover:bg-white/5 rounded-l-[20px] transition-colors"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo Section */}
            <Link href="/#home" className="flex items-center gap-3 px-5 h-full">
              <span className="text-brand-green font-mono font-black text-xl">&lt;/&gt;</span>
              <span className="text-zinc-200 font-mono text-[17px] tracking-tight">Sulis.dev</span>
            </Link>

            {/* Center Links (Desktop) */}
            <div className="hidden lg:flex items-center flex-1 justify-center gap-7">
              {[
                { id: 'home', label: 'About me' },
                { id: 'services', label: 'Services' },
                { id: 'portfolio', label: 'Portfolio' },
                { id: 'experience', label: 'Resume' },
                { id: 'blog', label: 'Blog' },
                { id: 'contact', label: 'Contact' },
              ].map((item) => (
                <Link
                  key={item.id}
                  href={`/#${item.id}`}
                  onClick={() => setActiveSection(item.id)}
                  className={`text-[15px] transition-colors ${activeSection === item.id ? 'text-white font-semibold' : 'text-zinc-400 font-medium hover:text-white'}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right Section (Socials & Theme) */}
            <div className="hidden lg:flex items-center h-full">
              {/* Social Icons */}
              <div className="flex items-center gap-5 px-6">
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-zinc-100 hover:text-brand-green transition-colors">
                  <LinkedinIcon className="w-4 h-4 fill-current" />
                </a>
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-zinc-100 hover:text-brand-green transition-colors">
                  <GithubIcon className="w-4 h-4 fill-current" />
                </a>
              </div>

              {/* Theme Toggle */}
              <button
                onClick={toggleDark}
                className="flex items-center justify-center w-16 h-full border-l border-white/10 hover:bg-white/5 rounded-r-[20px] transition-colors"
                title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {isDark
                  ? <Sun className="w-5 h-5 text-amber-400" />
                  : <Moon className="w-5 h-5 text-amber-400" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-50 backdrop-blur-sm transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-[85%] max-w-[400px] bg-white z-50 p-8 md:p-12 overflow-y-auto transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-2xl ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="absolute top-6 right-6 text-brand-green hover:bg-brand-green/10 p-2 rounded-full transition-colors"
        >
          <CloseIcon className="w-6 h-6" />
        </button>

        <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 mt-6 mb-8 font-mono tracking-tighter">Get in touch</h2>

        <hr className="border-brand-green mb-8" />

        <p className="text-zinc-700 font-mono text-[15px] leading-relaxed mb-12">
          I&apos;m always excited to take on new projects and collaborate with innovative minds.
        </p>

        <div className="flex flex-col gap-8 mb-12">
          <div>
            <h3 className="text-zinc-500 font-mono text-lg mb-1">Phone Number</h3>
            <a href="https://wa.me/6282233447474" target="_blank" rel="noreferrer" className="text-zinc-800 font-mono text-[15px] hover:text-brand-green transition-colors block">+62 822-3344-7474</a>
          </div>
          <div>
            <h3 className="text-zinc-500 font-mono text-lg mb-1">Email</h3>
            <a href="mailto:sulistyowatimunawaroh@gmail.com" className="text-zinc-800 font-mono text-[15px] hover:text-brand-green transition-colors block">sulistyowatimunawaroh@gmail.com</a>
          </div>
          <div>
            <h3 className="text-zinc-500 font-mono text-lg mb-1">Instagram</h3>
            <p className="text-zinc-800 font-mono text-[15px]">sulisgogho123</p>
          </div>
          <div>
            <h3 className="text-zinc-500 font-mono text-lg mb-1">Address</h3>
            <p className="text-zinc-800 font-mono text-[15px] leading-relaxed">
              Probolinggo, East Java<br />Indonesia
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-zinc-500 font-mono text-lg mb-4">Social</h3>
          <div className="flex items-center gap-5 text-black">
            <a href="#" className="hover:text-brand-green transition-colors"><InstagramIcon className="w-[18px] h-[18px] fill-current" /></a>
            <a href="#" className="hover:text-brand-green transition-colors"><XIcon className="w-[18px] h-[18px]" /></a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-brand-green transition-colors"><LinkedinIcon className="w-[18px] h-[18px] fill-current" /></a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-brand-green transition-colors"><GithubIcon className="w-[18px] h-[18px] fill-current" /></a>
          </div>
        </div>
      </div>
    </>
  );
}
