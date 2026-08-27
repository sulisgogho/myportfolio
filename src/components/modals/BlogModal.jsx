import React from 'react';
import Image from 'next/image';
import { X, Calendar, BookOpen } from 'lucide-react';

export default function BlogModal({ blog, onClose }) {
  if (!blog) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-4 bg-slate-900/80 backdrop-blur-md">
      <div className="bg-white dark:bg-slate-900 w-full max-w-3xl max-h-[95vh] md:max-h-[90vh] rounded-2xl md:rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-200 dark:border-slate-700 animate-in fade-in zoom-in duration-300">
        <div className="h-40 md:h-64 relative shrink-0">
          <Image src={blog.coverImg} alt="Cover" fill sizes="(max-width: 768px) 100vw, 80vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80"></div>
          <button onClick={onClose} className="absolute top-3 right-3 md:top-4 md:right-4 p-2 md:p-3 bg-black/30 hover:bg-red-500 text-white rounded-full transition-colors backdrop-blur-sm z-10">
            <X className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
        <div className="p-5 md:p-10 overflow-y-auto relative bg-white dark:bg-slate-900 rounded-t-2xl md:rounded-t-3xl -mt-4 md:-mt-6">
          <div className="flex items-center gap-2 md:gap-4 text-[10px] md:text-sm md:text-base font-bold text-slate-500 mb-3 md:mb-4 uppercase tracking-wider">
            <span className="flex items-center gap-1 md:gap-2">
              <Calendar className="w-3 h-3 md:w-4 md:h-4" /> {blog.date}
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-400"></span>
            <span className="flex items-center gap-1 md:gap-2">
              <BookOpen className="w-3 h-3 md:w-4 md:h-4" /> {blog.readTime}
            </span>
          </div>
          <h2 className="text-xl md:text-4xl font-extrabold text-slate-800 dark:text-slate-100 mb-4 md:mb-8 leading-tight">{blog.title}</h2>
          <div className="prose prose-sm md:prose-lg dark:prose-invert prose-slate max-w-none font-medium leading-relaxed md:leading-loose text-slate-600 dark:text-slate-300">
            <p>{blog.fullContent}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
