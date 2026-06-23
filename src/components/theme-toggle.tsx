'use client'

import { useTheme } from './theme-provider'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const { theme, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white transition-all hover:bg-white/30 hover:scale-110"
      title={theme === 'light' ? 'وضع ليلي' : 'وضع نهاري'}
    >
      {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </button>
  )
}
