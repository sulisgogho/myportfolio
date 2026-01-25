'use client'

import React from 'react'
import Link from 'next/link' // Import Link Next.js
import { BookOpen, Clock, Calendar, ArrowRight } from 'lucide-react'
import { blogPosts } from '@/data/content' // Import data

const Blog = ({ isDarkMode }) => {
  return (
    <section id="blog" className={`py-20 border-t transition-colors duration-300 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
      {/* ... Header Section tetap sama ... */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ... Judul Section tetap sama ... */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className={`p-6 rounded-xl border flex flex-col transition-all hover:shadow-lg ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
              {/* ... Bagian Category, Title, Excerpt tetap sama ... */}

              <div className="mb-4">
                <span className="text-xs font-semibold text-blue-500 uppercase">{post.category}</span>
                <h3 className={`text-xl font-bold mt-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{post.title}</h3>
                <p className={`text-sm mt-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{post.excerpt}</p>
              </div>

              <div className="flex justify-between items-center mt-auto pt-4 border-t border-dashed border-gray-700/50">
                <span className={`text-xs flex items-center gap-1 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                  <Calendar size={12} /> {post.date}
                </span>

                {/* GANTI BAGIAN INI: Gunakan Link ke slug */}
                <Link href={`/blog/${post.slug}`} className="text-sm font-medium text-blue-500 hover:text-blue-400 flex items-center gap-1 transition-colors group">
                  Baca Selengkapnya <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
