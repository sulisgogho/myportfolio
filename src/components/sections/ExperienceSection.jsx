'use client';
import React, { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { experiences } from '@/lib/data';

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState(0);

  const active = experiences[activeTab];

  return (
    <section id="experience" className="pb-12 bg-transparent">
      <div className="w-full px-4">
        <div className="w-full max-w-7xl mx-auto">
          <AnimatedSection>
            {/* Animated border wrapper */}
            <div className="relative rounded-[2rem] overflow-hidden p-[1px] shadow-sm">
              <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(transparent_60%,#2b7a4b_100%)] animate-[spin_4s_linear_infinite]" />
              </div>

              <div className="relative z-10 bg-white rounded-[calc(2rem-1px)] p-8 md:p-12">

                {/* Heading */}
                <div className="mb-10">
                  <p className="text-brand-green text-sm md:text-base font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
                    Experience
                  </p>
                  <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 leading-tight max-w-2xl">
                    <span className="text-brand-green">+{experiences.length} years</span> of{' '}
                    <span className="italic">passion</span> for<br className="hidden md:block" />
                    programming techniques
                  </h2>
                </div>

                {/* Grid: Left list | Right detail */}
                <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-12 items-start">

                  {/* Left: Company tabs */}
                  <div className="flex flex-col border border-zinc-100 rounded-2xl overflow-hidden">
                    {experiences.map((exp, index) => {
                      const isActive = activeTab === index;
                      return (
                        <button
                          key={exp.id}
                          onClick={() => setActiveTab(index)}
                          className={`flex items-center gap-4 py-4 px-5 transition-all duration-200 border-l-4 text-left ${
                            isActive
                              ? 'border-brand-green bg-brand-green/5'
                              : 'border-transparent hover:border-brand-green/30 hover:bg-zinc-50'
                          }`}
                        >
                          <div className={`w-11 h-11 flex items-center justify-center rounded-xl shrink-0 font-extrabold text-lg transition-colors ${
                            isActive ? 'bg-brand-green text-white' : 'bg-zinc-100 text-brand-green'
                          }`}>
                            {exp.company.charAt(0)}
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className={`font-bold text-sm md:text-base leading-tight truncate ${isActive ? 'text-brand-green' : 'text-zinc-900'}`}>
                              {exp.company.split('(')[0].trim()}
                            </span>
                            <span className="text-xs md:text-sm text-zinc-400 font-medium mt-0.5">{exp.period}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Right: Detail */}
                  <AnimatedSection key={activeTab}>
                    <div>
                      <h3 className="text-xl md:text-2xl font-extrabold text-brand-green mb-1 leading-tight">
                        {active.role}
                      </h3>
                      <p className="text-sm md:text-base font-bold text-zinc-500 mb-6">
                        {active.company} &bull; {active.period}
                      </p>

                      <div className="flex flex-col gap-3 mb-8">
                        {active.fullDesc
                          .split('\n')
                          .filter(line => line.trim().startsWith('•'))
                          .slice(0, 3)
                          .map((line, i) => (
                            <div key={i} className="flex gap-3 items-start">
                              <span className="text-brand-green mt-1 shrink-0">•</span>
                              <p className="text-sm md:text-base text-zinc-600 leading-relaxed font-medium">
                                {line.replace(/^[•]\s*/, '')}
                              </p>
                            </div>
                          ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {['Teamwork', 'Communication', 'Problem Solving', 'Leadership', 'Data Analysis'].map((skill, idx) => (
                          <span
                            key={idx}
                            className="text-xs md:text-sm font-bold text-zinc-600 px-4 py-2 bg-zinc-50 rounded-lg border border-zinc-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>

                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

