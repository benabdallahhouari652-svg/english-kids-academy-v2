'use client'

import { useState } from 'react'
import { notFound, useParams } from 'next/navigation'
import { lessons } from '@/data/lessons'
import { ChevronLeft, ChevronRight, Volume2, Languages, Speech } from 'lucide-react'
import Link from 'next/link'

export default function LessonDetailPage() {
  const params = useParams()
  const lesson = lessons.find(l => l.id === params.id)
  if (!lesson) notFound()

  const [currentIndex, setCurrentIndex] = useState(0)
  const word = lesson.words[currentIndex]

  function speak(text: string, langCode: string) {
    if ('speechSynthesis' in window) { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(text); u.lang = langCode; u.rate = 0.88; speechSynthesis.speak(u) }
  }

  return (
    <div className="mx-auto max-w-2xl pb-12">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/lessons" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700"><ChevronLeft className="h-4 w-4 dark:text-white" /></Link>
        <div>
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">{lesson.titleAr}</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">{lesson.title} • {lesson.words.length} كلمة</p>
        </div>
      </div>

      <div className="rounded-3xl border-2 border-gray-200 bg-white p-6 shadow-lg text-center dark:border-gray-700 dark:bg-gray-800">
        <div className="text-7xl mb-4">{word.emoji}</div>
        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-3">{word.en}</div>

        <div className="inline-block rounded-2xl bg-amber-50 border-2 border-amber-200 px-6 py-3 mb-4 dark:bg-amber-900/30 dark:border-amber-700">
          <span className="text-xs text-amber-600 font-bold block mb-1 dark:text-amber-400">🗣️ النطق</span>
          <span className="text-2xl font-bold text-amber-800 tracking-wider dark:text-amber-300">{word.pron}</span>
        </div>
        <div className="inline-block rounded-2xl bg-emerald-50 border-2 border-emerald-200 px-6 py-3 mb-2 dark:bg-emerald-900/30 dark:border-emerald-700">
          <span className="text-xs text-emerald-600 font-bold block mb-1 dark:text-emerald-400">🇸🇦 بالعربية</span>
          <span className="text-2xl font-bold text-emerald-800 dark:text-emerald-300">{word.ar}</span>
        </div>
        <div className="inline-block rounded-2xl bg-orange-50 border-2 border-orange-200 px-6 py-3 mb-4 dark:bg-orange-900/30 dark:border-orange-700">
          <span className="text-xs text-orange-600 font-bold block mb-1 dark:text-orange-400">🇩🇿 بالدارجة</span>
          <span className="text-xl font-bold text-orange-800 dark:text-orange-300">{word.darja}</span>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <button onClick={() => speak(word.en, 'en-US')} className="flex items-center gap-1.5 rounded-xl bg-blue-100 px-5 py-2.5 text-sm font-bold text-blue-700 hover:bg-blue-200 transition-all hover:scale-105 shadow-sm dark:bg-blue-900/50 dark:text-blue-300 dark:hover:bg-blue-800/50">
            <Volume2 className="h-4 w-4" /> English
          </button>
          <button onClick={() => speak(word.ar, 'ar-SA')} className="flex items-center gap-1.5 rounded-xl bg-emerald-100 px-5 py-2.5 text-sm font-bold text-emerald-700 hover:bg-emerald-200 transition-all hover:scale-105 shadow-sm dark:bg-emerald-900/50 dark:text-emerald-300 dark:hover:bg-emerald-800/50">
            <Languages className="h-4 w-4" /> بالعربية
          </button>
          <button onClick={() => speak(word.darja, 'ar-SA')} className="flex items-center gap-1.5 rounded-xl bg-orange-100 px-5 py-2.5 text-sm font-bold text-orange-700 hover:bg-orange-200 transition-all hover:scale-105 shadow-sm dark:bg-orange-900/50 dark:text-orange-300 dark:hover:bg-orange-800/50">
            <Speech className="h-4 w-4" /> بالدارجة
          </button>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <button onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))} disabled={currentIndex === 0}
          className="flex items-center gap-1 rounded-xl bg-gray-100 px-4 py-2 font-bold text-gray-700 hover:bg-gray-200 disabled:opacity-30 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
          <ChevronRight className="h-4 w-4" /> السابق
        </button>
        <span className="text-sm text-gray-500 dark:text-gray-400">{currentIndex + 1} / {lesson.words.length}</span>
        <button onClick={() => setCurrentIndex(Math.min(lesson.words.length - 1, currentIndex + 1))} disabled={currentIndex === lesson.words.length - 1}
          className="flex items-center gap-1 rounded-xl bg-gray-100 px-4 py-2 font-bold text-gray-700 hover:bg-gray-200 disabled:opacity-30 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
          التالي <ChevronLeft className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-4 flex justify-center gap-1.5">
        {lesson.words.map((_, i) => (
          <button key={i} onClick={() => setCurrentIndex(i)}
            className={`h-2.5 rounded-full transition-all ${i === currentIndex ? 'w-8 bg-sky-500' : 'w-2.5 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500'}`}
          />
        ))}
      </div>
    </div>
  )
}
