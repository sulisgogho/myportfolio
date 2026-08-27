import { Urbanist } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { personalInfo } from '@/lib/data'
import Link from 'next/link'

const urbanist = Urbanist({ subsets: ['latin'], variable: '--font-urbanist' })

export const metadata = {
  title: `${personalInfo.name} | Portfolio`,
  description: personalInfo.tagline,
}

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth scroll-pt-28" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body suppressHydrationWarning className={`min-h-screen bg-[#E8E8E8] text-zinc-900 ${urbanist.variable} font-sans selection:bg-neon/30 selection:text-neon relative`}>
        <div className="relative z-10 flex flex-col min-h-screen pt-24">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>

          {/* Footer — matches reference */}
          <footer className="bg-[#E8E8E8] border-t-2 border-brand-green pt-10 pb-4">
            <div className="w-full px-4 max-w-7xl mx-auto flex flex-col items-center gap-6">

              {/* Logo */}
              <div className="flex items-center gap-2">
                <span className="text-brand-green font-black text-xl">&lt;/&gt;</span>
                <span className="text-zinc-800 font-extrabold text-lg tracking-tight">
                  {personalInfo.name.split(' ')[0].toLowerCase()}.dev
                </span>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-5">
                <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-zinc-500 hover:text-brand-green transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"/></svg>
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-zinc-500 hover:text-brand-green transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href={personalInfo.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="text-zinc-500 hover:text-brand-green transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
              </div>

              {/* Nav links */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-base font-bold text-zinc-500">
                {[
                  { href: '/#home', label: 'About me' },
                  { href: '/#services', label: 'Services' },
                  { href: '/#portfolio', label: 'Portfolio' },
                  { href: '/#experience', label: 'Resume' },
                  { href: '/#blog', label: 'Blog' },
                  { href: '/#contact', label: 'Contact' },
                ].map((item) => (
                  <Link key={item.href} href={item.href} className="hover:text-brand-green transition-colors">
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Copyright */}
              <p className="text-sm md:text-base text-zinc-400 font-medium">
                © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}

