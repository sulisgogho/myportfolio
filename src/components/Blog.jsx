'use client'

import React, { useState } from 'react' // 1. Tambah useState
import Link from 'next/link'
import { BookOpen, Clock, Calendar, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react' // 2. Tambah Icon Chevron
import { blogPosts } from '@/data/content'

const Blog = ({ isDarkMode }) => {
  // 3. State untuk menangani "Lihat Lainnya"
  const [showAll, setShowAll] = useState(false)
  const INITIAL_LIMIT = 6

  // 4. Logika pemotongan data
  const displayedPosts = showAll ? blogPosts : blogPosts.slice(0, INITIAL_LIMIT)

  return (
    <section id="blog" className={`py-20 border-t transition-colors duration-300 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section (Saya asumsikan Anda punya header di sini) */}
        <div className="mb-12">
          <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Tulisan Terbaru</h2>
          <p className={`max-w-xl ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Berbagi pemikiran tentang teknologi dan karir.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 5. Map dari displayedPosts, bukan blogPosts langsung */}
          {displayedPosts.map((post) => (
            <div key={post.id} className={`p-6 rounded-xl border flex flex-col transition-all hover:shadow-lg ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
              <div className="mb-4">
                <span className="text-xs font-semibold text-blue-500 uppercase">{post.category}</span>
                <h3 className={`text-xl font-bold mt-2 line-clamp-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{post.title}</h3>
                <p className={`text-sm mt-2 line-clamp-3 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{post.excerpt}</p>
              </div>

              <div className="flex justify-between items-center mt-auto pt-4 border-t border-dashed border-gray-700/50">
                <span className={`text-xs flex items-center gap-1 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                  <Calendar size={12} /> {post.date}
                </span>

                <Link href={`/blog/${post.slug}`} className="text-sm font-medium text-blue-500 hover:text-blue-400 flex items-center gap-1 transition-colors group">
                  Baca Selengkapnya <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* 6. Tombol Toggle (Hanya muncul jika post lebih dari 6) */}
        {blogPosts.length > INITIAL_LIMIT && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className={`flex items-center gap-2 px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 active:scale-95 ${
                isDarkMode ? 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700' : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-sm'
              }`}
            >
              {showAll ? (
                <>
                  Tampilkan Lebih Sedikit <ChevronUp size={18} />
                </>
              ) : (
                <>
                  Lihat Artikel Lainnya <ChevronDown size={18} />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Blog
