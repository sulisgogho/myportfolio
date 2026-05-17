import './globals.css'
import Navbar from '@/components/Navbar'
import { personalInfo } from '@/lib/data'

export const metadata = {
  title: `${personalInfo.name} | Portfolio`,
  description: personalInfo.tagline,
}

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="dark" suppressHydrationWarning>
      <body suppressHydrationWarning className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans transition-colors duration-300 selection:bg-blue-500 selection:text-white">
        <Navbar />
        {children}
        <footer className="py-6 md:py-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-center">
          <p className="text-slate-500 font-bold text-xs md:text-sm">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  )
}
