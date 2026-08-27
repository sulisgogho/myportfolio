'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { blogPosts } from '@/lib/data'
import AnimatedSection from '@/components/AnimatedSection'
import { ArrowLeft, ArrowRight, X, Calendar, BookOpen } from 'lucide-react'

export default function AllBlogs() {
  const [selectedBlog, setSelectedBlog] = useState(null)

  return (
    <main className="pt-28 md:pt-32 pb-16 md:pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <Link href="/#blog" className="mb-6 md:mb-8 flex items-center gap-2 text-slate-500 hover:text-blue-500 font-bold transition-colors text-sm md:text-base w-fit">
            <ArrowLeft className="w-4 h-4 md:w-5 h-5" /> Kembali
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 md:mb-12">Semua Catatan & Tulisan</h1>
        </AnimatedSection>

        <div className="space-y-6 md:space-y-8">
          {blogPosts.map((post, index) => (
            <AnimatedSection key={post.id} delay={index * 100}>
              <div
                onClick={() => setSelectedBlog(post)}
                className="bg-white dark:bg-slate-800 rounded-2xl md:rounded-3xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:border-blue-500 transition-all cursor-pointer group hover:shadow-xl flex flex-col md:flex-row"
              >
                <div className="w-full md:w-2/5 h-40 md:h-auto overflow-hidden relative shrink-0 border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-700">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <Image src={post.coverImg} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw" />
                </div>
                <div className="p-5 md:p-8 w-full md:w-3/5 flex flex-col justify-center">
                  <div className="flex items-center gap-2 md:gap-3 text-[10px] md:text-xs md:text-sm font-bold text-slate-500 mb-2 md:mb-3 uppercase tracking-wider">
                    <span>{post.date}</span> • <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg md:text-2xl font-extrabold mb-2 md:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight line-clamp-2">{post.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 font-medium mb-4 line-clamp-2 text-xs md:text-sm md:text-base">{post.excerpt}</p>
                  <span className="mt-auto inline-flex items-center gap-2 text-xs md:text-sm md:text-base font-bold text-blue-600 dark:text-blue-400">
                    Mulai Membaca <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* MODAL DETAIL BLOG */}
      {selectedBlog && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-4 bg-slate-900/80 backdrop-blur-md">
          <div className="bg-white dark:bg-slate-900 w-full max-w-3xl max-h-[95vh] md:max-h-[90vh] rounded-2xl md:rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-200 dark:border-slate-700 animate-in fade-in zoom-in duration-300">
            <div className="h-40 md:h-64 relative shrink-0">
              <Image src={selectedBlog.coverImg} alt="Cover" fill className="object-cover" sizes="(max-width: 768px) 100vw, 800px" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80"></div>
              <button onClick={() => setSelectedBlog(null)} className="absolute top-3 right-3 md:top-4 md:right-4 p-2 md:p-3 bg-black/30 hover:bg-red-500 text-white rounded-full transition-colors backdrop-blur-sm">
                <X className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
            <div className="p-5 md:p-10 overflow-y-auto relative bg-white dark:bg-slate-900 rounded-t-2xl md:rounded-t-3xl -mt-4 md:-mt-6">
              <div className="flex items-center gap-2 md:gap-4 text-[10px] md:text-sm md:text-base font-bold text-slate-500 mb-3 md:mb-4 uppercase tracking-wider">
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
    </main>
  )
}
