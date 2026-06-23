import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const colorMap: Record<string, string> = {
  sky: 'bg-sky-500 hover:bg-sky-600 text-white',
  blue: 'bg-blue-500 hover:bg-blue-600 text-white',
  emerald: 'bg-emerald-500 hover:bg-emerald-600 text-white',
  purple: 'bg-purple-500 hover:bg-purple-600 text-white',
  amber: 'bg-amber-500 hover:bg-amber-600 text-white',
  rose: 'bg-rose-500 hover:bg-rose-600 text-white',
  pink: 'bg-pink-500 hover:bg-pink-600 text-white',
  orange: 'bg-orange-500 hover:bg-orange-600 text-white',
  teal: 'bg-teal-500 hover:bg-teal-600 text-white',
  cyan: 'bg-cyan-500 hover:bg-cyan-600 text-white',
  indigo: 'bg-indigo-500 hover:bg-indigo-600 text-white',
}

export const borderColorMap: Record<string, string> = {
  sky: 'border-sky-300 bg-sky-50', blue: 'border-blue-300 bg-blue-50',
  emerald: 'border-emerald-300 bg-emerald-50', purple: 'border-purple-300 bg-purple-50',
  amber: 'border-amber-300 bg-amber-50', rose: 'border-rose-300 bg-rose-50',
  pink: 'border-pink-300 bg-pink-50', orange: 'border-orange-300 bg-orange-50',
  teal: 'border-teal-300 bg-teal-50', cyan: 'border-cyan-300 bg-cyan-50',
}
