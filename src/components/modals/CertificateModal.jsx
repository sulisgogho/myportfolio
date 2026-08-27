import React from 'react';
import Image from 'next/image';
import { Award, X } from 'lucide-react';

export default function CertificateModal({ cert, onClose }) {
  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-4 bg-slate-900/80 backdrop-blur-md">
      <div className="bg-white dark:bg-slate-900 w-full max-w-2xl max-h-[95vh] md:max-h-[90vh] rounded-2xl md:rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-200 dark:border-slate-700 animate-in fade-in zoom-in duration-300">
        <div className="p-3 md:p-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-900">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 md:w-5 md:h-5 text-amber-500" />
            <span className="font-bold text-slate-800 dark:text-slate-100 text-sm md:text-base">Detail Sertifikat</span>
          </div>
          <button onClick={onClose} className="p-2 md:p-3 bg-slate-200 dark:bg-slate-800 hover:bg-red-500 hover:text-white rounded-full transition-colors flex-shrink-0">
            <X className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
        <div className="p-4 md:p-8 overflow-y-auto">
          {cert.imageUrl && (
            <div className="relative w-full h-48 md:h-64 mb-4 md:mb-6 rounded-xl md:rounded-2xl overflow-hidden border-2 md:border-4 border-slate-100 dark:border-slate-800 shadow-md">
              <Image src={cert.imageUrl} alt={cert.title} fill sizes="(max-width: 768px) 100vw, 80vw" className="object-cover" />
            </div>
          )}
          <h2 className="text-lg md:text-3xl font-extrabold text-slate-800 dark:text-slate-100 mb-2 leading-tight">{cert.title}</h2>
          <div className="flex gap-2 md:gap-4 items-center mb-4 md:mb-6 text-[10px] md:text-sm md:text-base font-bold text-slate-500">
            <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 px-2 py-1 md:px-3 md:py-1 rounded-full">{cert.issuer}</span>
            <span>Tahun: {cert.year}</span>
          </div>
          <h4 className="font-extrabold text-slate-800 dark:text-slate-200 mb-1 md:mb-2 text-sm md:text-base">Deskripsi</h4>
          <div className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-xs md:text-sm md:text-base flex flex-col gap-3">
            {Array.isArray(cert.description) ? cert.description.map((point, index) => <p key={index}>{point}</p>) : <p className="whitespace-pre-line">{cert.description}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
