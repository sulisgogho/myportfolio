'use client';
import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import Image from 'next/image';
import { Phone, Mail, MessageSquare, Code, BarChart3, Server, Bot, Microscope, ClipboardList } from 'lucide-react';
import { FacebookIcon, InstagramIcon } from '../Icons';

export default function CompaniesSection() {
  return (
    <section id="services" className="pb-12 bg-transparent">
      <div className="w-full px-4">
        <div className="w-full max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="flex flex-col lg:flex-row gap-6">

              {/* Left Card: Cooperation / Skills */}
              <div className="relative w-full lg:w-[65%] rounded-[1.5rem] overflow-hidden p-[1px] shadow-sm flex flex-col">
                <div className="absolute inset-0 z-0">
                  <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(transparent_60%,#2b7a4b_100%)] animate-[spin_4s_linear_infinite]" />
                </div>
                <div className="relative z-10 w-full h-full bg-white rounded-[calc(1.5rem-1px)] p-8 md:p-12 flex flex-col overflow-hidden">
                  <p className="text-brand-green font-mono text-sm md:text-base mb-4 flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green mr-2"></span>
                    Tech Stack
                  </p>

                  <h3 className="text-3xl md:text-5xl font-extrabold text-zinc-900 font-mono leading-tight mb-8 max-w-lg">
                    Tools & Technologies I work with<span className="animate-blink text-brand-green">_</span>
                  </h3>

                  {/* Skills List */}
                  <div className="border border-brand-green/20 rounded-xl p-6 md:p-8 mb-12 flex flex-col gap-6">

                    <div className="flex flex-col gap-1.5">
                      <h4 className="text-xl font-extrabold text-zinc-900">Front-End Development</h4>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="flex items-center gap-1.5 px-2.5 py-1 bg-zinc-100 dark:bg-transparent rounded-md text-[14px] text-zinc-900 dark:text-zinc-400 font-medium border border-zinc-200 dark:border-transparent shadow-sm dark:shadow-none"><span className="text-sky-500">⚛</span> React.js</span>
                        <span className="flex items-center gap-1.5 px-2.5 py-1 bg-zinc-100 dark:bg-transparent rounded-md text-[14px] text-zinc-900 dark:text-zinc-400 font-medium border border-zinc-200 dark:border-transparent shadow-sm dark:shadow-none"><span className="font-bold text-black text-[14px]">N</span> Next.js</span>
                        <span className="flex items-center gap-1.5 px-2.5 py-1 bg-zinc-100 dark:bg-transparent rounded-md text-[14px] text-zinc-900 dark:text-zinc-400 font-medium border border-zinc-200 dark:border-transparent shadow-sm dark:shadow-none"><span className="text-orange-500">🌐</span> HTML</span>
                        <span className="flex items-center gap-1.5 px-2.5 py-1 bg-zinc-100 dark:bg-transparent rounded-md text-[14px] text-zinc-900 dark:text-zinc-400 font-medium border border-zinc-200 dark:border-transparent shadow-sm dark:shadow-none"><span className="text-blue-500">🎨</span> CSS</span>
                        <span className="flex items-center gap-1.5 px-2.5 py-1 bg-zinc-100 dark:bg-transparent rounded-md text-[14px] text-zinc-900 dark:text-zinc-400 font-medium border border-zinc-200 dark:border-transparent shadow-sm dark:shadow-none"><span className="text-yellow-500 font-bold text-[14px]">JS</span> JavaScript</span>
                        <span className="flex items-center gap-1.5 px-2.5 py-1 bg-zinc-100 dark:bg-transparent rounded-md text-[14px] text-zinc-900 dark:text-zinc-400 font-medium border border-zinc-200 dark:border-transparent shadow-sm dark:shadow-none"><span className="text-sky-400">🌊</span> Tailwind CSS</span>
                      </div>
                    </div>

                    <div className="w-full h-px bg-zinc-200/60"></div>

                    <div className="flex flex-col gap-1.5">
                      <h4 className="text-xl font-extrabold text-zinc-900">Back-End Development</h4>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="flex items-center gap-1.5 px-2.5 py-1 bg-zinc-100 dark:bg-transparent rounded-md text-[14px] text-zinc-900 dark:text-zinc-400 font-medium border border-zinc-200 dark:border-transparent shadow-sm dark:shadow-none"><span className="text-green-600">⬢</span> Node.js</span>
                        <span className="flex items-center gap-1.5 px-2.5 py-1 bg-zinc-100 dark:bg-transparent rounded-md text-[14px] text-zinc-900 dark:text-zinc-400 font-medium border border-zinc-200 dark:border-transparent shadow-sm dark:shadow-none"><span className="text-zinc-800">🚂</span> Express</span>
                        <span className="flex items-center gap-1.5 px-2.5 py-1 bg-zinc-100 dark:bg-transparent rounded-md text-[14px] text-zinc-900 dark:text-zinc-400 font-medium border border-zinc-200 dark:border-transparent shadow-sm dark:shadow-none"><span className="text-blue-500">🐍</span> Python</span>
                        <span className="flex items-center gap-1.5 px-2.5 py-1 bg-zinc-100 dark:bg-transparent rounded-md text-[14px] text-zinc-900 dark:text-zinc-400 font-medium border border-zinc-200 dark:border-transparent shadow-sm dark:shadow-none"><span className="text-zinc-600">🌶️</span> Flask</span>
                      </div>
                    </div>

                    <div className="w-full h-px bg-zinc-200/60"></div>

                    <div className="flex flex-col gap-1.5">
                      <h4 className="text-xl font-extrabold text-zinc-900">Databases & Infrastructure</h4>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="flex items-center gap-1.5 px-2.5 py-1 bg-zinc-100 dark:bg-transparent rounded-md text-[14px] text-zinc-900 dark:text-zinc-400 font-medium border border-zinc-200 dark:border-transparent shadow-sm dark:shadow-none"><span className="text-blue-600">🐬</span> MySQL</span>
                        <span className="flex items-center gap-1.5 px-2.5 py-1 bg-zinc-100 dark:bg-transparent rounded-md text-[14px] text-zinc-900 dark:text-zinc-400 font-medium border border-zinc-200 dark:border-transparent shadow-sm dark:shadow-none"><span className="text-blue-700">🐘</span> PostgreSQL</span>
                        <span className="flex items-center gap-1.5 px-2.5 py-1 bg-zinc-100 dark:bg-transparent rounded-md text-[14px] text-zinc-900 dark:text-zinc-400 font-medium border border-zinc-200 dark:border-transparent shadow-sm dark:shadow-none"><span className="text-green-500">🍃</span> MongoDB</span>
                        <span className="flex items-center gap-1.5 px-2.5 py-1 bg-zinc-100 dark:bg-transparent rounded-md text-[14px] text-zinc-900 dark:text-zinc-400 font-medium border border-zinc-200 dark:border-transparent shadow-sm dark:shadow-none"><span className="text-yellow-500">🔥</span> Firebase</span>
                        <span className="flex items-center gap-1.5 px-2.5 py-1 bg-zinc-100 dark:bg-transparent rounded-md text-[14px] text-zinc-900 dark:text-zinc-400 font-medium border border-zinc-200 dark:border-transparent shadow-sm dark:shadow-none"><span className="text-blue-500">🐳</span> Docker</span>
                      </div>
                    </div>

                    <div className="w-full h-px bg-zinc-200/60"></div>

                    <div className="flex flex-col gap-1.5">
                      <h4 className="text-xl font-extrabold text-zinc-900">Data & Analytics</h4>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="flex items-center gap-1.5 px-2.5 py-1 bg-zinc-100 dark:bg-transparent rounded-md text-[14px] text-zinc-900 dark:text-zinc-400 font-medium border border-zinc-200 dark:border-transparent shadow-sm dark:shadow-none"><span className="text-slate-800">🐼</span> Pandas</span>
                        <span className="flex items-center gap-1.5 px-2.5 py-1 bg-zinc-100 dark:bg-transparent rounded-md text-[14px] text-zinc-900 dark:text-zinc-400 font-medium border border-zinc-200 dark:border-transparent shadow-sm dark:shadow-none"><span className="text-blue-500 font-bold text-[14px]">NUM</span> NumPy</span>
                        <span className="flex items-center gap-1.5 px-2.5 py-1 bg-zinc-100 dark:bg-transparent rounded-md text-[14px] text-zinc-900 dark:text-zinc-400 font-medium border border-zinc-200 dark:border-transparent shadow-sm dark:shadow-none"><span className="text-indigo-500 font-bold text-[14px]">T+</span> Tableau</span>
                        <span className="flex items-center gap-1.5 px-2.5 py-1 bg-zinc-100 dark:bg-transparent rounded-md text-[14px] text-zinc-900 dark:text-zinc-400 font-medium border border-zinc-200 dark:border-transparent shadow-sm dark:shadow-none"><span className="text-emerald-500">📊</span> Data Visualization</span>
                      </div>
                    </div>

                  </div>

                  {/* Contact Info area */}
                  <div className="flex items-center gap-8 relative z-10">
                    {/* Avatar with concentric circles */}
                    <div className="relative w-28 h-28 flex items-center justify-center">
                      <div className="absolute inset-0 border border-brand-green/20 rounded-full"></div>
                      <div className="absolute inset-3 border border-brand-green/30 rounded-full"></div>
                      <div className="w-14 h-14 rounded-full overflow-hidden relative z-10 border-2 border-white bg-zinc-100">
                        <Image src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=150" alt="Avatar" fill sizes="(max-width: 768px) 100vw, 150px" className="object-cover" />
                      </div>
                      <div className="absolute bottom-7 right-7 w-2.5 h-2.5 bg-brand-green rounded-full z-20 border-[1.5px] border-white"></div>
                    </div>

                    <div className="flex flex-col gap-3 font-mono text-sm md:text-base text-zinc-600">
                      <div className="flex items-center gap-3">
                        <FacebookIcon className="w-5 h-5 text-zinc-800 fill-zinc-800" />
                        <span>sulis.gogho</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-zinc-800 fill-zinc-800" />
                        <a href="https://wa.me/6282233447474" target="_blank" rel="noreferrer" className="hover:text-brand-green transition-colors">+62-822-3344-7474</a>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-zinc-800 text-white flex items-center justify-center rounded-sm">
                          <Mail className="w-3 h-3" />
                        </div>
                        <a href="mailto:sulistyowatimunawaroh@gmail.com" className="hover:text-brand-green transition-colors">sulistyowatimunawaroh@gmail.com</a>
                      </div>
                    </div>
                  </div>

                  {/* Decorative graphic bottom right */}
                  <div className="absolute -bottom-16 -right-16 w-72 h-72 border border-brand-green/20 rounded-full flex items-center justify-center pointer-events-none">

                    {/* Outer Circle (No Planet) */}
                    <div className="absolute w-56 h-56 border border-brand-green/20 rounded-full flex items-center justify-center">

                      {/* Middle Circle (Orbiting Planet 2) */}
                      <div className="absolute w-40 h-40 border border-brand-green/20 rounded-full flex items-center justify-center">
                        <div className="w-full h-full absolute animate-[spin_15s_linear_infinite]">
                          <div className="w-2.5 h-2.5 bg-zinc-500 rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                        </div>

                        {/* Inner Circle (Orbiting Planet 1) */}
                        <div className="absolute w-20 h-20 border border-brand-green/20 rounded-full flex items-center justify-center">
                          <div className="w-full h-full absolute animate-[spin_8s_linear_infinite_reverse]">
                            <div className="w-2 h-2 bg-zinc-600 rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card: My Services */}
              <div className="w-full lg:w-[35%] border border-brand-green/20 rounded-[1.5rem] p-8 md:p-10 bg-white shadow-sm flex flex-col">
                <p className="text-brand-green font-mono text-sm md:text-base mb-8 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green mr-2"></span>
                  My Services
                </p>

                <div className="flex flex-col gap-1">

                  {/* Service 1 */}
                  <div className="group flex flex-col gap-1.5 p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-[#32322a] transition-colors border border-transparent hover:border-zinc-100 dark:hover:border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
                        <Code className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-zinc-900 text-lg">Web Development</h4>
                    </div>
                    <p className="text-base text-zinc-500 font-medium pl-11 leading-relaxed">Building responsive, dynamic, and fast web applications using modern frontend and backend frameworks like React and Node.js.</p>
                  </div>

                  {/* Service 2 */}
                  <div className="group flex flex-col gap-1.5 p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-[#32322a] transition-colors border border-transparent hover:border-zinc-100 dark:hover:border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600">
                        <BarChart3 className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-zinc-900 text-lg">Data Analytics</h4>
                    </div>
                    <p className="text-base text-zinc-500 font-medium pl-11 leading-relaxed">Extracting insights from complex datasets and building interactive visualizations for data-driven business decisions.</p>
                  </div>

                  {/* Service 4 */}
                  <div className="group flex flex-col gap-1.5 p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-[#32322a] transition-colors border border-transparent hover:border-zinc-100 dark:hover:border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-600">
                        <Bot className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-zinc-900 text-lg">Trading Bots</h4>
                    </div>
                    <p className="text-base text-zinc-500 font-medium pl-11 leading-relaxed">Developing automated algorithmic trading bots and implementing quantitative strategies for various financial markets.</p>
                  </div>

                  {/* Service 5 */}
                  <div className="group flex flex-col gap-1.5 p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-[#32322a] transition-colors border border-transparent hover:border-zinc-100 dark:hover:border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-600">
                        <Microscope className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-zinc-900 text-lg">Research</h4>
                    </div>
                    <p className="text-base text-zinc-500 font-medium pl-11 leading-relaxed">Conducting in-depth academic and technical research, gathering data, and presenting comprehensive findings and analyses.</p>
                  </div>

                  {/* Service 6 */}
                  <div className="group flex flex-col gap-1.5 p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-[#32322a] transition-colors border border-transparent hover:border-zinc-100 dark:hover:border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-600">
                        <ClipboardList className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-zinc-900 text-lg">Administration</h4>
                    </div>
                    <p className="text-base text-zinc-500 font-medium pl-11 leading-relaxed">Managing day-to-day administrative tasks, technical operations, and ensuring smooth workflow and project documentation.</p>
                  </div>

                </div>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
