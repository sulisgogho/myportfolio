'use client';
import React from 'react';
import Image from 'next/image';
import { Code, Scan, Monitor, Activity, Award } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import AnimatedSection from '@/components/AnimatedSection';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[calc(100vh-6rem)] pt-6 pb-10 flex flex-col items-center overflow-hidden">
      
      {/* Background Grid Pattern (Subtle) — hidden in dark mode */}
      <div className="absolute inset-0 pointer-events-none opacity-50 z-0 dark:hidden" 
           style={{ backgroundImage: 'linear-gradient(var(--color-brand-light) 1px, transparent 1px), linear-gradient(90deg, var(--color-brand-light) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="w-full px-4 relative z-10">
        <div className="w-full max-w-7xl mx-auto">
          
        <AnimatedSection>
          {/* Animated Border Wrapper */}
          <div className="relative rounded-[2rem] overflow-hidden p-[1px] shadow-sm">
            {/* Spinning background for border */}
            <div className="absolute inset-0 z-0">
              <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(transparent_60%,#2b7a4b_100%)] animate-[spin_4s_linear_infinite]" />
            </div>

            {/* Inner Content Card */}
            <div className="relative z-10 bg-white rounded-[calc(2rem-1px)] p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-8 lg:gap-24">
              
              {/* Left: Hexagon Photo */}
              <div className="relative flex-shrink-0">
                <div className="relative w-[260px] h-[290px] sm:w-[320px] sm:h-[360px] lg:w-[420px] lg:h-[480px] mx-auto">
                  
                  {/* SVG Rounded Hexagon Mask */}
                  <svg viewBox="0 0 100 115" className="w-full h-full drop-shadow-xl" style={{ overflow: 'visible' }}>
                    <defs>
                      <mask id="hexMask">
                        <polygon points="50,25 75,40 75,75 50,90 25,75 25,40" fill="white" stroke="white" strokeWidth="40" strokeLinejoin="round" />
                      </mask>
                    </defs>
                    <image 
                      href="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000" 
                      x="-15"
                      y="-15"
                      width="130" 
                      height="145" 
                      mask="url(#hexMask)" 
                      preserveAspectRatio="xMidYMid slice" 
                    />
                  </svg>

                  {/* Little Badge at bottom */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-10 drop-shadow-lg w-16 h-[72px]">
                    <svg viewBox="0 0 100 115" className="w-full h-full" style={{ overflow: 'visible' }}>
                      <polygon points="50,25 75,40 75,75 50,90 25,75 25,40" fill="#2b7a4b" stroke="#2b7a4b" strokeWidth="40" strokeLinejoin="round" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                      <Code className="w-6 h-6" strokeWidth={3} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Text & CTA */}
              <div className="text-left flex-1 max-w-2xl w-full">

                
                <div className="font-mono text-zinc-600 text-base md:text-lg mb-5">
                  <span className="text-zinc-400">&lt;span&gt;</span>
                  Hey, I&apos;m {personalInfo.name.split(' ')[0]}<span className="animate-blink font-bold text-brand-green">|</span>
                  <span className="text-zinc-400">&lt;/span&gt;</span>
                </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-zinc-900 leading-[1.2] mb-8 font-mono">
                Junior <span className="text-brand-green">{'{Full'}</span><br />
                <span className="text-brand-green">{'Stack}'}</span> Web & Data<br />
                Analyst<span className="animate-blink text-brand-green">_</span>
              </h1>
              
              <div className="font-mono text-zinc-600 text-base md:text-lg leading-relaxed mb-12 text-justify">
                <span className="text-zinc-400 block mb-1">&lt;p&gt;</span>
                With expertise in cutting-edge technologies such as Python, SQL, React, and NodeJS... I deliver data-driven web solutions that are both innovative and robust.
                <span className="text-zinc-400 block mt-1">&lt;/p&gt;</span>
              </div>

              {/* Tech Stack Icons Marquee */}
              <style>{`
                .fade-edges {
                  mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
                  -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
                }
                @keyframes marquee {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                  animation: marquee 25s linear infinite;
                }
                .animate-marquee:hover {
                  animation-play-state: paused;
                }
              `}</style>
              
              <div className="mb-12 w-full max-w-[600px]">
                <div className="overflow-hidden fade-edges relative">
                  <div className="flex w-max animate-marquee">
                    
                    {/* First Set */}
                    <div className="flex gap-5 pr-5">
                      {[
                        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
                        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
                        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
                        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
                        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
                        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
                        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
                        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
                        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
                        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
                        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
                        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg',
                        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
                        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
                        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg'
                      ].map((src, idx) => (
                        <div key={`set1-${idx}`} className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 rounded-xl border border-zinc-200 flex items-center justify-center bg-white shadow-sm hover:border-brand-green transition-colors">
                          <Image src={src} alt="Tech Icon" width={32} height={32} className="object-contain opacity-80" />
                        </div>
                      ))}
                    </div>

                    {/* Second Set (Duplicate for seamless loop) */}
                    <div className="flex gap-5 pr-5">
                      {[
                        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
                        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
                        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
                        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
                        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
                        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
                        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
                        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
                        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
                        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
                        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
                        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg',
                        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
                        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
                        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg'
                      ].map((src, idx) => (
                        <div key={`set2-${idx}`} className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 rounded-xl border border-zinc-200 flex items-center justify-center bg-white shadow-sm hover:border-brand-green transition-colors">
                          <Image src={src} alt="Tech Icon" width={32} height={32} className="object-contain opacity-80" />
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </div>

              {/* Quotes */}
              <div className="text-zinc-600 dark:text-zinc-400 font-mono text-base md:text-lg italic border-l-4 border-brand-green pl-4 py-1">
                &quot;Ide hebat tanpa eksekusi adalah halusinasi.&quot; <br/>
                <span className="text-sm text-zinc-500 dark:text-zinc-500 font-semibold mt-2 block">— Thomas A. Edison</span>
              </div>
            </div>

            </div>
          </div>
        </AnimatedSection>
        
        {/* Stats Section below Hero Card */}
        <AnimatedSection delay={200}>
          <div className="mt-8 relative rounded-[1.5rem] overflow-hidden bg-white border border-brand-green/20 shadow-sm">
            {/* Grid background for stats */}
            <div className="absolute inset-0 pointer-events-none opacity-5" 
                 style={{ backgroundImage: 'linear-gradient(var(--color-brand-dark) 1px, transparent 1px), linear-gradient(90deg, var(--color-brand-dark) 1px, transparent 1px)', backgroundSize: '16px 16px' }}>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-brand-green/10 p-6 md:p-8 relative z-10">
              <div className="flex flex-col items-center md:items-start p-4">
                <Scan className="w-5 h-5 text-brand-green mb-3" strokeWidth={2.5} />
                <h3 className="text-4xl md:text-5xl font-extrabold text-zinc-900 font-mono mb-1"><Counter end={4} /></h3>
                <p className="text-zinc-500 font-mono text-xs md:text-sm md:text-base">Year Experience</p>
              </div>
              <div className="flex flex-col items-center md:items-start p-4">
                <Monitor className="w-5 h-5 text-brand-green mb-3" strokeWidth={2.5} />
                <h3 className="text-4xl md:text-5xl font-extrabold text-zinc-900 font-mono mb-1"><Counter end={20} /></h3>
                <p className="text-zinc-500 font-mono text-xs md:text-sm md:text-base">Projects Completed</p>
              </div>
              <div className="flex flex-col items-center md:items-start p-4">
                <Activity className="w-5 h-5 text-brand-green mb-3" strokeWidth={2.5} />
                <h3 className="text-4xl md:text-5xl font-extrabold text-zinc-900 font-mono mb-1"><Counter end={10} /></h3>
                <p className="text-zinc-500 font-mono text-xs md:text-sm md:text-base">Satisfied Clients</p>
              </div>
              <div className="flex flex-col items-center md:items-start p-4">
                <Award className="w-5 h-5 text-brand-green mb-3" strokeWidth={2.5} />
                <h3 className="text-4xl md:text-5xl font-extrabold text-zinc-900 font-mono mb-1"><Counter end={6} /></h3>
                <p className="text-zinc-500 font-mono text-xs md:text-sm md:text-base">Awards Winner</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        </div>
      </div>
    </section>
  );
}

const Counter = ({ end, suffix = "+" }) => {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);
  
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const duration = 2000;
          const startTime = performance.now();
          
          const update = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            
            setCount(Math.floor(easeOut * end));
            
            if (progress < 1) {
              requestAnimationFrame(update);
            }
          };
          requestAnimationFrame(update);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [end]);

  return <span ref={ref}>{count}{suffix}</span>;
};
