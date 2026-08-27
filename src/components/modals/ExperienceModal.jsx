import React, { useEffect } from 'react';
import { Briefcase, X, Calendar, MapPin } from 'lucide-react';

export default function ExperienceModal({ exp, onClose }) {
  // Handle ESC key press to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (exp) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [exp, onClose]);

  if (!exp) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-4 bg-zinc-900/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-[#1C1F1B] w-full max-w-2xl max-h-[95vh] md:max-h-[90vh] rounded-2xl md:rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-zinc-200 dark:border-white/10 animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()} // Prevent clicking inside modal from closing it
      >
        {/* Header */}
        <div className="p-3 md:p-4 border-b border-zinc-200 dark:border-white/5 flex justify-between items-center bg-zinc-50 dark:bg-[#252824]">
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-brand-green" />
            <span className="font-bold text-zinc-800 dark:text-zinc-100 text-sm md:text-base font-mono">Experience Detail</span>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 md:p-3 bg-zinc-200 dark:bg-white/5 hover:bg-brand-green hover:text-white rounded-full transition-colors flex-shrink-0"
            aria-label="Close"
          >
            <X className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 md:p-8 overflow-y-auto">
          <div className="mb-2">
            <span className="text-[10px] md:text-xs font-mono font-bold bg-brand-green/10 text-brand-green px-2 py-1 md:px-3 md:py-1.5 rounded-full">
              {exp.type}
            </span>
          </div>
          
          <h2 className="text-xl md:text-3xl font-extrabold text-zinc-900 dark:text-zinc-100 mb-1 leading-tight">
            {exp.role}
          </h2>
          
          <h3 className="text-base md:text-xl font-bold text-zinc-600 dark:text-zinc-400 mb-4 md:mb-6">
            {exp.company}
          </h3>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 sm:items-center mb-6 md:mb-8 text-xs md:text-sm md:text-base font-bold text-zinc-500 bg-zinc-50 dark:bg-white/5 p-3 md:p-4 rounded-xl border border-zinc-100 dark:border-white/5 font-mono">
            <div className="flex items-center gap-2">
              <Calendar className="w-3 h-3 md:w-4 md:h-4 text-zinc-400" /> {exp.period}
            </div>
            <div className="hidden sm:block text-zinc-300 dark:text-zinc-600">|</div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3 h-3 md:w-4 md:h-4 text-zinc-400" /> {exp.location}
            </div>
          </div>

          <h4 className="font-extrabold text-zinc-800 dark:text-zinc-200 mb-2 md:mb-3 text-sm md:text-base">Responsibilities & Achievements</h4>
          <div className="prose prose-zinc dark:prose-invert font-medium leading-relaxed text-zinc-600 dark:text-zinc-400 whitespace-pre-wrap text-xs md:text-sm md:text-base">
            {exp.fullDesc}
          </div>
        </div>
      </div>
    </div>
  );
}
