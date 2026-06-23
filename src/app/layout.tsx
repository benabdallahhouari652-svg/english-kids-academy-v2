import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'
import { Home, BookOpen, Music, Gamepad2, Medal, BookMarked } from 'lucide-react'
import { ThemeProvider } from '@/components/theme-provider'
import { ThemeToggle } from '@/components/theme-toggle'

export const metadata: Metadata = {
  title: 'English Kids Academy - تعليم الإنجليزية للأطفال',
  description: 'منصة تفاعلية لتعليم اللغة الإنجليزية للأطفال الناطقين بالعربية',
}

const navItems = [
  { href: '/', label: 'الرئيسية', icon: Home },
  { href: '/lessons', label: 'الدروس', icon: BookOpen },
  { href: '/stories', label: 'القصص', icon: BookMarked },
  { href: '/songs', label: 'الأناشيد', icon: Music },
  { href: '/games', label: 'الألعاب', icon: Gamepad2 },
  { href: '/badges', label: 'الشارات', icon: Medal },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body style={{ backgroundColor: 'var(--bg-body)', color: 'var(--text-color)' }}>
        <ThemeProvider>
          <nav className="sticky top-0 z-50 border-b-4 border-orange-300 bg-gradient-to-l from-sky-400 via-blue-400 to-purple-400 shadow-lg" style={{ borderBottomColor: '#f97316' }}>
            <div className="mx-auto max-w-6xl px-4">
              <div className="flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-white/50 bg-white p-0.5 shadow-md">
                    <img src="/kids-logo.png" alt="English Kids" className="h-full w-full object-contain rounded-full" />
                  </div>
                  <span className="text-lg font-bold text-white drop-shadow">English Kids</span>
                </Link>
                <div className="flex items-center gap-2">
                  <div className="hidden md:flex md:items-center md:gap-1">
                    {navItems.map((item) => (
                      <Link key={item.href} href={item.href} className="flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-bold text-white/90 transition-all hover:bg-white/20 hover:text-white">
                        <item.icon className="h-4 w-4" />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </nav>
          <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
