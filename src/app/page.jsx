'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import { personalInfo, techStacks, mainSkillsPills, projects, experiences, certificates, blogPosts } from '@/lib/data'
import { Code2, ChevronRight, Layers, ArrowRight, Briefcase, ExternalLink, Award, Calendar, MapPin, MonitorPlay, FileText, FileSpreadsheet, Presentation, X, BookOpen, Mail } from 'lucide-react'

// --- CUSTOM BRAND ICONS ---
const GithubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
)

const LinkedinIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const InstagramIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const TikTokIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.23-1.13 4.54-3.04 5.86-1.92 1.34-4.5 1.71-6.73 1.05-2.58-.75-4.65-2.82-5.18-5.46-.57-2.73.54-5.74 2.85-7.36 1.81-1.28 4.21-1.74 6.38-1.22v4.33c-1.39-.42-3-.3-4.14.49-1.2.82-1.77 2.37-1.36 3.75.43 1.48 1.96 2.5 3.52 2.45 1.57-.06 2.99-1.2 3.32-2.74.15-.71.16-1.45.16-2.18V.02z" />
  </svg>
)
// ----------------------------

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [selectedExp, setSelectedExp] = useState(null)
  const [selectedCert, setSelectedCert] = useState(null)
  const [selectedBlog, setSelectedBlog] = useState(null)

  return (
    <main className="pb-10">
      {/* HERO SECTION */}
      <section id="home" className="relative min-h-[100dvh] flex items-center pt-28 md:pt-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center lg:text-left pt-6 lg:pt-0">
              <AnimatedSection>
                <div className="inline-flex items-center space-x-2 bg-white dark:bg-slate-800 rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-4 md:mb-6 border border-slate-200 dark:border-slate-700 shadow-sm">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[10px] md:text-xs font-bold text-slate-600 dark:text-slate-300">Open to Work & Collaboration</span>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 md:mb-6 leading-[1.1]">
                  <span className="block text-slate-800 dark:text-slate-100">Halo, Saya</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">{personalInfo.name}</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <p className="text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-400 mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">{personalInfo.tagline}</p>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 md:gap-4 mb-10">
                  <Link
                    href="/projects"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 w-full sm:w-auto"
                  >
                    Lihat Karya Saya <ChevronRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#contact"
                    className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 hover:text-blue-500 text-slate-700 dark:text-slate-300 px-6 py-3 md:px-8 md:py-4 rounded-full font-bold transition-all shadow-sm flex items-center justify-center w-full sm:w-auto"
                  >
                    Hubungi Saya
                  </Link>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={400} className="relative hidden lg:block">
              <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute inset-4 rounded-[2rem] overflow-hidden border-[8px] border-white dark:border-slate-800 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 bg-slate-200 dark:bg-slate-700">
                  <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000" alt="Coding Setup" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-xl">
                      <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase">Keahlian Utama</p>
                      <p className="text-sm font-black text-slate-800 dark:text-slate-200">Fullstack & Data</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* TECH STACK & KEAHLIAN */}
      <section id="tech-stack" className="py-16 md:py-20 bg-white dark:bg-slate-900 relative z-10 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 md:mb-4 flex items-center justify-center gap-2 md:gap-3">
                <Layers className="text-blue-500 w-6 h-6 md:w-8 md:h-8" /> Tech Stack & Keahlian
              </h2>
              <p className="text-sm md:text-base text-slate-500 font-medium px-4">Alat dan teknologi yang saya gunakan sehari-hari untuk memecahkan masalah.</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-10 md:mb-12">
            {techStacks.map((stack, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 transition-colors h-full hover:shadow-xl group">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-slate-800 rounded-xl md:rounded-2xl flex items-center justify-center shadow-sm mb-4 md:mb-6 group-hover:scale-110 transition-transform border border-slate-100 dark:border-slate-700">
                    {stack.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 md:mb-4">{stack.category}</h3>
                  <ul className="space-y-2 md:space-y-3">
                    {stack.skills.map((skill, idx) => (
                      <li key={idx} className="flex items-start md:items-center gap-3 text-slate-600 dark:text-slate-400 font-medium text-sm md:text-base">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 md:mt-0 shrink-0"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={400}>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 max-w-4xl mx-auto">
              {mainSkillsPills.map((skill, index) => (
                <span
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full font-bold text-slate-700 dark:text-slate-300 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-blue-500 hover:text-blue-500 transition-all cursor-default text-xs md:text-sm"
                >
                  {skill.icon}
                  {skill.name}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-800/30 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4 text-center md:text-left">
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2 md:mb-4">Karya & Proyek Pilihan</h2>
                <p className="text-sm md:text-base text-slate-500 font-medium">Beberapa proyek terbaik yang mewakili berbagai multidisiplin ilmu.</p>
              </div>
              <Link href="/projects" className="hidden md:inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold hover:gap-3 transition-all">
                Lihat Semua Karya <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.slice(0, 6).map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 100}>
                <div
                  onClick={() => setSelectedProject(project)}
                  className="group bg-white dark:bg-slate-800 rounded-2xl md:rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-blue-500 cursor-pointer transition-all hover:-translate-y-2 hover:shadow-xl md:hover:shadow-2xl flex flex-col h-full"
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
                      <h3 className="text-lg md:text-2xl font-extrabold text-slate-800 dark:text-slate-100 line-clamp-2">{project.title}</h3>
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

          <div className="mt-8 text-center md:hidden">
            <Link
              href="/projects"
              className="inline-flex bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 items-center justify-center gap-2 text-blue-600 dark:text-blue-400 font-bold px-6 py-3 rounded-full w-full shadow-sm text-sm"
            >
              Lihat Semua Karya <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PENGALAMAN & SERTIFIKAT */}
      <section id="experience" className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-10 md:mb-16 text-center">Perjalanan Karir & Sertifikasi</h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 flex items-center gap-3">
                <Briefcase className="text-blue-500 w-6 h-6 md:w-8 md:h-8" /> Pengalaman
              </h3>
              <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-3 md:ml-4">
                {experiences.map((exp, index) => (
                  <AnimatedSection key={exp.id} delay={index * 150} className="mb-8 md:mb-10 ml-6 md:ml-8 relative group cursor-pointer">
                    <div onClick={() => setSelectedExp(exp)}>
                      <span className="absolute -left-[35px] md:-left-[41px] bg-slate-50 dark:bg-slate-900 border-4 border-blue-500 w-4 h-4 md:w-5 md:h-5 rounded-full group-hover:scale-150 transition-transform"></span>
                      <div className="bg-slate-50 dark:bg-slate-800/80 p-5 md:p-6 rounded-2xl border border-slate-200 dark:border-slate-700 group-hover:border-blue-500 transition-all shadow-sm group-hover:shadow-lg group-hover:-translate-y-1">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-[10px] md:text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">{exp.period}</span>
                          <ExternalLink className="w-3 h-3 md:w-4 md:h-4 text-slate-400 group-hover:text-blue-500 transition-colors mt-0.5" />
                        </div>
                        <h4 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100 leading-tight md:leading-normal mb-1 md:mb-0">{exp.role}</h4>
                        <p className="text-xs md:text-sm font-bold text-slate-500 dark:text-slate-400 mb-2 md:mb-3">
                          {exp.company} • {exp.type}
                        </p>
                        <p className="text-slate-600 dark:text-slate-300 text-xs md:text-sm leading-relaxed line-clamp-2">{exp.shortDesc}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 flex items-center gap-3">
                <Award className="text-amber-500 w-6 h-6 md:w-8 md:h-8" /> Sertifikasi
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certificates.map((cert, index) => (
                  <AnimatedSection key={cert.id} delay={index * 100}>
                    <div
                      onClick={() => setSelectedCert(cert)}
                      className="bg-slate-50 dark:bg-slate-800/80 p-4 md:p-5 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-amber-500 hover:shadow-lg transition-all cursor-pointer group h-full flex flex-col"
                    >
                      <div className="flex justify-between items-start mb-3 md:mb-4">
                        <Award className="w-6 h-6 md:w-8 md:h-8 text-amber-500 group-hover:scale-110 transition-transform" />
                        <div className="bg-white dark:bg-slate-700 p-1 md:p-1.5 rounded-full group-hover:bg-amber-500 group-hover:text-white transition-colors border border-slate-100 dark:border-transparent">
                          <ExternalLink className="w-3 h-3 md:w-4 md:h-4 text-slate-400 group-hover:text-white" />
                        </div>
                      </div>
                      <h4 className="font-bold text-sm md:text-base text-slate-800 dark:text-slate-100 mb-1 leading-tight flex-grow">{cert.title}</h4>
                      <div className="flex justify-between items-center mt-3 md:mt-4 text-[10px] md:text-xs font-bold text-slate-500">
                        <span>{cert.issuer}</span>
                        <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 px-2 py-0.5 md:py-1 rounded">{cert.year}</span>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section id="blog" className="py-16 md:py-24 bg-slate-100 dark:bg-slate-800/30 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4 text-center md:text-left">
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2 md:mb-4">Catatan & Tulisan Terbaru</h2>
                <p className="text-sm md:text-base text-slate-500 font-medium">Berbagi pemikiran tentang teknologi, analitik, dan manajemen.</p>
              </div>
              <Link href="/blog" className="hidden md:inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold hover:gap-3 transition-all">
                Lihat Semua Artikel <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.slice(0, 3).map((post, index) => (
              <AnimatedSection key={post.id} delay={index * 150}>
                <div
                  onClick={() => setSelectedBlog(post)}
                  className="bg-white dark:bg-slate-800 rounded-2xl md:rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-all cursor-pointer group hover:shadow-xl flex flex-col h-full"
                >
                  <div className="h-40 md:h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                    <img src={post.coverImg} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-5 md:p-8 flex-grow flex flex-col">
                    <div className="flex items-center gap-2 md:gap-3 text-[10px] md:text-xs font-bold text-slate-500 mb-3 md:mb-4 uppercase tracking-wider">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-400"></span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">{post.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 font-medium mb-4 md:mb-6 line-clamp-2 md:line-clamp-3 text-xs md:text-sm">{post.excerpt}</p>
                    <div className="mt-auto inline-flex items-center gap-2 text-xs md:text-sm font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-2 transition-transform">
                      Mulai Membaca <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              href="/blog"
              className="inline-flex bg-white dark:bg-slate-800 items-center justify-center gap-2 text-blue-600 dark:text-blue-400 font-bold px-6 py-3 rounded-full w-full border border-slate-200 dark:border-slate-700 shadow-sm text-sm"
            >
              Lihat Semua Artikel <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-3 md:mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Mari Terhubung!</h2>
              <p className="text-sm md:text-lg text-slate-500 font-medium max-w-2xl mx-auto px-2">Tertarik untuk berkolaborasi, diskusi proyek, atau sekadar menyapa? Temukan saya di platform berikut.</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-6">
            <AnimatedSection delay={100} className="lg:col-span-2 sm:col-span-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center justify-between p-5 md:p-8 bg-blue-50 dark:bg-blue-900/20 rounded-2xl md:rounded-3xl border border-blue-100 dark:border-blue-800/50 hover:bg-blue-600 hover:text-white transition-all duration-300 h-full"
              >
                <div>
                  <p className="text-xs md:text-sm font-bold text-blue-600 dark:text-blue-400 group-hover:text-blue-200 mb-1">Kirim Pesan</p>
                  <h4 className="text-xs md:text-lg font-bold text-slate-800 dark:text-slate-100 group-hover:text-white truncate max-w-[220px] sm:max-w-none">{personalInfo.email}</h4>
                </div>
                <div className="bg-white dark:bg-slate-800 p-3 md:p-4 rounded-full group-hover:scale-110 group-hover:rotate-12 transition-transform shadow-sm flex-shrink-0">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                </div>
              </a>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-row sm:flex-col items-center justify-start sm:justify-center gap-4 sm:gap-0 p-4 md:p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl md:rounded-3xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 hover:bg-blue-500 hover:text-white transition-all h-full text-left sm:text-center"
              >
                <LinkedinIcon className="w-6 h-6 md:w-8 md:h-8 text-slate-600 dark:text-slate-300 group-hover:text-white sm:mb-3 group-hover:-translate-y-1 transition-transform" />
                <span className="font-bold text-sm md:text-base text-slate-800 dark:text-slate-200 group-hover:text-white">LinkedIn</span>
              </a>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-row sm:flex-col items-center justify-start sm:justify-center gap-4 sm:gap-0 p-4 md:p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl md:rounded-3xl border border-slate-200 dark:border-slate-700 hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:hover:border-slate-100 dark:hover:bg-slate-100 dark:hover:text-slate-900 transition-all h-full text-left sm:text-center"
              >
                <GithubIcon className="w-6 h-6 md:w-8 md:h-8 text-slate-600 dark:text-slate-300 group-hover:text-white dark:group-hover:text-slate-900 sm:mb-3 group-hover:-translate-y-1 transition-transform" />
                <span className="font-bold text-sm md:text-base text-slate-800 dark:text-slate-200 group-hover:text-white dark:group-hover:text-slate-900">GitHub</span>
              </a>
            </AnimatedSection>

            <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 md:gap-6 sm:col-span-2 lg:col-span-1">
              <AnimatedSection delay={400} className="flex-1 h-full">
                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-center sm:justify-start lg:justify-center gap-2 md:gap-3 p-3 md:p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-pink-500 hover:bg-pink-500 hover:text-white transition-all h-full min-h-[4rem]"
                >
                  <InstagramIcon className="w-4 h-4 md:w-5 md:h-5 text-slate-600 dark:text-slate-300 group-hover:text-white transition-colors" />
                  <span className="font-bold text-slate-800 dark:text-slate-200 group-hover:text-white text-xs md:text-sm">Instagram</span>
                </a>
              </AnimatedSection>

              <AnimatedSection delay={500} className="flex-1 h-full">
                <a
                  href={personalInfo.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-center sm:justify-start lg:justify-center gap-2 md:gap-3 p-3 md:p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-black hover:bg-black hover:text-white dark:hover:border-slate-700 dark:hover:bg-slate-700 transition-all h-full min-h-[4rem]"
                >
                  <TikTokIcon className="w-4 h-4 md:w-5 md:h-5 text-slate-600 dark:text-slate-300 group-hover:text-white transition-colors" />
                  <span className="font-bold text-slate-800 dark:text-slate-200 group-hover:text-white text-xs md:text-sm">TikTok</span>
                </a>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* SEMUA MODALS */}
      {selectedExp && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-4 bg-slate-900/80 backdrop-blur-md">
          <div className="bg-white dark:bg-slate-900 w-full max-w-2xl max-h-[95vh] md:max-h-[90vh] rounded-2xl md:rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-200 dark:border-slate-700 animate-in fade-in zoom-in duration-300">
            <div className="p-3 md:p-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-900">
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
                <span className="font-bold text-slate-800 dark:text-slate-100 text-sm md:text-base">Detail Pengalaman</span>
              </div>
              <button onClick={() => setSelectedExp(null)} className="p-2 md:p-3 bg-slate-200 dark:bg-slate-800 hover:bg-red-500 hover:text-white rounded-full transition-colors flex-shrink-0">
                <X className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
            <div className="p-5 md:p-8 overflow-y-auto">
              <div className="mb-2">
                <span className="text-[10px] md:text-xs font-bold bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 md:px-3 md:py-1.5 rounded-full">{selectedExp.type}</span>
              </div>
              <h2 className="text-xl md:text-3xl font-extrabold text-slate-800 dark:text-slate-100 mb-1 leading-tight">{selectedExp.role}</h2>
              <h3 className="text-base md:text-xl font-bold text-slate-600 dark:text-slate-400 mb-4 md:mb-6 flex items-center gap-2">{selectedExp.company}</h3>

              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 sm:items-center mb-6 md:mb-8 text-xs md:text-sm font-bold text-slate-500 bg-slate-50 dark:bg-slate-800/50 p-3 md:p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3 h-3 md:w-4 md:h-4 text-slate-400" /> {selectedExp.period}
                </div>
                <div className="hidden sm:block text-slate-300 dark:text-slate-600">|</div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3 h-3 md:w-4 md:h-4 text-slate-400" /> {selectedExp.location}
                </div>
              </div>

              <h4 className="font-extrabold text-slate-800 dark:text-slate-200 mb-2 md:mb-3 text-sm md:text-base">Tanggung Jawab & Pencapaian</h4>
              <div className="prose prose-slate dark:prose-invert font-medium leading-relaxed text-slate-600 dark:text-slate-400 whitespace-pre-wrap text-xs md:text-sm">{selectedExp.fullDesc}</div>
            </div>
          </div>
        </div>
      )}

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
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 md:mb-6 font-medium text-xs md:text-sm">{selectedProject.fullDesc}</p>
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

      {selectedBlog && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-4 bg-slate-900/80 backdrop-blur-md">
          <div className="bg-white dark:bg-slate-900 w-full max-w-3xl max-h-[95vh] md:max-h-[90vh] rounded-2xl md:rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-200 dark:border-slate-700 animate-in fade-in zoom-in duration-300">
            <div className="h-40 md:h-64 relative shrink-0">
              <img src={selectedBlog.coverImg} alt="Cover" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80"></div>
              <button onClick={() => setSelectedBlog(null)} className="absolute top-3 right-3 md:top-4 md:right-4 p-2 md:p-3 bg-black/30 hover:bg-red-500 text-white rounded-full transition-colors backdrop-blur-sm">
                <X className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
            <div className="p-5 md:p-10 overflow-y-auto relative bg-white dark:bg-slate-900 rounded-t-2xl md:rounded-t-3xl -mt-4 md:-mt-6">
              <div className="flex items-center gap-2 md:gap-4 text-[10px] md:text-sm font-bold text-slate-500 mb-3 md:mb-4 uppercase tracking-wider">
                <span className="flex items-center gap-1 md:gap-2">
                  <Calendar className="w-3 h-3 md:w-4 md:h-4" /> {selectedBlog.date}
                </span>
                <span className="w-1 h-1 rounded-full bg-slate-400"></span>
                <span className="flex items-center gap-1 md:gap-2">
                  <BookOpen className="w-3 h-3 md:w-4 md:h-4" /> {selectedBlog.readTime}
                </span>
              </div>
              <h2 className="text-xl md:text-4xl font-extrabold text-slate-800 dark:text-slate-100 mb-4 md:mb-8 leading-tight">{selectedBlog.title}</h2>
              <div className="prose prose-sm md:prose-lg dark:prose-invert prose-slate max-w-none font-medium leading-relaxed md:leading-loose text-slate-600 dark:text-slate-300">
                <p>{selectedBlog.fullContent}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedCert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-4 bg-slate-900/80 backdrop-blur-md">
          <div className="bg-white dark:bg-slate-900 w-full max-w-2xl max-h-[95vh] md:max-h-[90vh] rounded-2xl md:rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-200 dark:border-slate-700 animate-in fade-in zoom-in duration-300">
            <div className="p-3 md:p-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-900">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 md:w-5 md:h-5 text-amber-500" />
                <span className="font-bold text-slate-800 dark:text-slate-100 text-sm md:text-base">Detail Sertifikat</span>
              </div>
              <button onClick={() => setSelectedCert(null)} className="p-2 md:p-3 bg-slate-200 dark:bg-slate-800 hover:bg-red-500 hover:text-white rounded-full transition-colors flex-shrink-0">
                <X className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
            <div className="p-4 md:p-8 overflow-y-auto">
              {selectedCert.imageUrl && (
                <img
                  src={selectedCert.imageUrl}
                  alt={selectedCert.title}
                  className="w-full h-60 md:h-120 rounded-xl md:rounded-2xl border-2 md:border-4 border-slate-100 dark:border-slate-800 mb-4 md:mb-6 object-cover aspect-video shadow-md"
                />
              )}
              <h2 className="text-lg md:text-3xl font-extrabold text-slate-800 dark:text-slate-100 mb-2 leading-tight">{selectedCert.title}</h2>
              <div className="flex gap-2 md:gap-4 items-center mb-4 md:mb-6 text-[10px] md:text-sm font-bold text-slate-500">
                <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 px-2 py-1 md:px-3 md:py-1 rounded-full">{selectedCert.issuer}</span>
                <span>Tahun: {selectedCert.year}</span>
              </div>
              <h4 className="font-extrabold text-slate-800 dark:text-slate-200 mb-1 md:mb-2 text-sm md:text-base">Deskripsi</h4>
              <div className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-xs md:text-sm flex flex-col gap-3">
                {Array.isArray(selectedCert.description) ? selectedCert.description.map((point, index) => <p key={index}>{point}</p>) : <p className="whitespace-pre-line">{selectedCert.description}</p>}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
