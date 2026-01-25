import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react'
import { blogPosts } from '@/data/content'

// Helper untuk mencari artikel berdasarkan slug
const getPost = (slug) => {
  return blogPosts.find((post) => post.slug === slug)
}

// 1. Fungsi Metadata (SEO)
export async function generateMetadata(props) {
  // PERBAIKAN PENTING: params harus di-await
  const params = await props.params
  const slug = params.slug

  const post = getPost(slug)

  if (!post) return { title: 'Post Not Found' }

  return {
    title: `${post.title} - Blog Andi Pratama`,
    description: post.excerpt,
  }
}

// 2. Komponen Halaman Utama
export default async function BlogPostPage(props) {
  // PERBAIKAN PENTING: params harus di-await
  const params = await props.params
  const slug = params.slug

  const post = getPost(slug)

  // Jika artikel tidak ditemukan di data, arahkan ke halaman 404
  if (!post) {
    notFound()
  }

  // Kita set default dark mode agar nyaman dibaca
  const isDarkMode = true

  return (
    <div className={`min-h-screen font-sans ${isDarkMode ? 'bg-slate-900 text-slate-200' : 'bg-white text-slate-800'}`}>
      {/* Navbar: Tombol Kembali */}
      <nav className="fixed w-full backdrop-blur-sm z-50 border-b border-slate-800 bg-slate-900/90 h-16 flex items-center">
        <div className="max-w-4xl mx-auto px-4 w-full">
          {/* Link kembali ke section blog di halaman utama */}
          <Link href="/#blog" className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors">
            <ArrowLeft size={20} /> Kembali ke Portfolio
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 pt-32 pb-20">
        {/* Header Artikel: Judul, Tanggal, Kategori */}
        <header className="mb-10 text-center">
          <div className="flex justify-center gap-4 text-sm text-slate-400 mb-4">
            <span className="flex items-center gap-1">
              <Calendar size={14} /> {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} /> {post.readTime}
            </span>
            <span className="flex items-center gap-1 text-blue-400">
              <Tag size={14} /> {post.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">{post.title}</h1>
        </header>

        {/* Isi Artikel */}
        <article className="prose prose-invert prose-lg max-w-none text-slate-300" dangerouslySetInnerHTML={{ __html: post.content }} />
      </main>
    </div>
  )
}
