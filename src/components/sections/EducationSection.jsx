'use client';
import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { certificates } from '@/lib/data';
import { GraduationCap, Award } from 'lucide-react';

export default function EducationSection() {
  const educations = [
    {
      id: 1,
      degree: "Bachelor's Degree in Informatics",
      institution: 'Universitas Muhammadiyah Jember',
      year: '2020 - 2024',
      gpa: '3.86 / 4.00',
      desc: 'Graduated with Highest GPA in the Faculty of Engineering — Wisudawan Berprestasi Utama.'
    },
    {
      id: 2,
      degree: "Senior High School",
      institution: 'SMAN 1 Kraksaan',
      year: '2017 - 2020',
      gpa: null,
      desc: null
    },
    {
      id: 3,
      degree: "Junior High School",
      institution: 'SMPN 1 Kraksaan',
      year: '2015 - 2017',
      gpa: null,
      desc: null
    }
  ];

  return (
    <section id="education" className="pb-12 bg-transparent">
      <div className="w-full px-4">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-start">

            {/* Left: Education — highlighted, no card box */}
            <AnimatedSection>
              <div className="flex flex-col items-start text-left px-2 md:px-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-brand-green rounded-xl flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-zinc-900">Education</h2>
                </div>

                {/* Timeline container */}
                <div className="relative border-l-4 border-brand-green/40 w-full ml-2 md:ml-0">
                  {educations.map((edu, idx) => (
                    <div key={edu.id} className={`relative pl-6 ${idx !== educations.length - 1 ? 'mb-10' : ''}`}>
                      <div className="absolute -left-[12px] top-1.5 w-5 h-5 rounded-full bg-brand-green shadow-md ring-4 ring-white"></div>
                      <span className="inline-block text-xs md:text-sm font-bold text-white bg-brand-green px-3 py-1 rounded-full mb-3">
                        {edu.year}
                      </span>
                      <h3 className="text-xl font-extrabold text-zinc-900 leading-tight mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-base font-bold text-brand-green mb-3">{edu.institution}</p>
                      
                      {edu.gpa && (
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs md:text-sm font-bold text-zinc-500 uppercase tracking-wider">GPA</span>
                          <span className="text-lg font-extrabold text-zinc-900">{edu.gpa}</span>
                        </div>
                      )}
                      
                      {edu.desc && (
                        <p className="text-sm md:text-base text-zinc-500 font-medium leading-relaxed max-w-sm">{edu.desc}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Certifications — with card */}
            <AnimatedSection delay={200}>
              <div className="border border-brand-green/20 rounded-2xl p-8 bg-white shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-brand-green/10 rounded-xl flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-brand-green" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-zinc-900">Certifications</h2>
                </div>

                <div className="flex flex-col divide-y divide-zinc-100">
                  {certificates.map((cert, idx) => (
                    <div key={cert.id} className="py-4 first:pt-0 last:pb-0">
                      <div className="flex items-start gap-3">
                        <span className="text-lg font-extrabold text-brand-green/30 leading-none w-7 shrink-0 mt-0.5">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <div className="min-w-0">
                          <h4 className="text-sm md:text-base font-extrabold text-zinc-900 leading-tight mb-1">{cert.title}</h4>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-xs md:text-sm font-bold text-brand-green">{cert.issuer}</span>
                            <span className="text-xs md:text-sm text-zinc-300">•</span>
                            <span className="text-xs md:text-sm text-zinc-400 font-medium">{cert.year}</span>
                          </div>
                          <p className="text-xs md:text-sm text-zinc-500 font-medium leading-relaxed line-clamp-1 mt-1">{cert.description[0]}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </div>
    </section>
  );
}

