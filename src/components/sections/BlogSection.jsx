'use client';
import React from 'react';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import { blogPosts } from '@/lib/data';
import { ArrowUpRight } from 'lucide-react';

export default function BlogSection({ onSelectBlog }) {
  return (
    <section id="blog" className="pb-12 bg-transparent">
      <div className="w-full px-4">
        <div className="w-full max-w-7xl mx-auto">

          {/* Header — centered like reference */}
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-brand-green text-sm md:text-base font-bold uppercase tracking-wider mb-3 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
                Latest Posts
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 leading-tight">
                From Blog
              </h2>
            </div>
          </AnimatedSection>

          {/* 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post, index) => (
              <AnimatedSection key={post.id} delay={index * 100}>
                <div
                  onClick={() => onSelectBlog(post)}
                  className="group bg-white p-4 pb-8 border border-zinc-200 hover:border-brand-green/40 rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col h-full"
                >
                  {/* Image Container with Padding */}
                  <div className="h-48 md:h-56 w-full overflow-hidden relative rounded-xl mb-6">
                    <Image
                      src={post.coverImg}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Category Pill */}
                    <div className="absolute bottom-3 left-3 bg-white px-4 py-1.5 rounded text-xs md:text-sm font-bold text-zinc-900 z-10 shadow-sm">
                      {post.category || 'Tech'}
                    </div>
                  </div>

                  {/* Content - Centered */}
                  <div className="flex flex-col items-center text-center flex-grow px-2 md:px-4">
                    {/* Meta */}
                    <div className="flex items-center justify-center gap-2 text-sm text-zinc-500 font-mono mb-4">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-zinc-900 font-mono leading-tight mb-4 transition-colors">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm md:text-base text-zinc-500 font-mono leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

