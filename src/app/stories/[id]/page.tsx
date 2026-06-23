'use client'

import { useState } from 'react'
import { notFound, useParams } from 'next/navigation'
import { stories } from '@/data/stories'
import { ChevronLeft, ChevronRight, Volume2 } from 'lucide-react'
import Link from 'next/link'

export default function StoryReaderPage() {
  const params = useParams()
  const story = stories.find(s => s.id === params.id)
  if (!story) notFound()

  const [page, setPage] = useState(0)
  const current = story.pages[page]

  function speak(text: string) {
    if ('speechSynthesis' in window) { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(text); u.lang = 'en-US'; u.rate = 0.85; speechSynthesis.speak(u) }
  }

  return (
    <div className="mx-auto max-w-2xl pb-12">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/stories" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700"><ChevronLeft className="h-4 w-4 dark:text-white" /></Link>
        <div>
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">{story.titleAr}</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">{story.title}</p>
        </div>
      </div>
      <div className="rounded-3xl border-2 border-gray-200 bg-white p-8 shadow-lg min-h-[300px] flex flex-col items-center justify-center text-center dark:border-gray-700 dark:bg-gray-800">
        <div className="text-8xl mb-6">{story.emoji}</div>
        <div className="text-2xl font-bold text-gray-800 mb-3 dark:text-white">{current.en}</div>
        <div className="text-xl text-gray-600 mb-4 dark:text-gray-300">{current.ar}</div>
        <button onClick={() => speak(current.en)} className="flex items-center gap-2 rounded-xl bg-sky-100 px-4 py-2 font-bold text-sky-700 hover:bg-sky-200 dark:bg-sky-900/50 dark:text-sky-300 dark:hover:bg-sky-800/50">
          <Volume2 className="h-4 w-4" /> استمع
        </button>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <button onClick={() => setPage(Math.max(0, page - 1))} disabled={page === 0}
          className="flex items-center gap-1 rounded-xl bg-gray-100 px-4 py-2 font-bold text-gray-700 hover:bg-gray-200 disabled:opacity-30 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
          <ChevronRight className="h-4 w-4" /> السابق
        </button>
        <span className="text-sm text-gray-500 dark:text-gray-400">{page + 1} / {story.pages.length}</span>
        <button onClick={() => setPage(Math.min(story.pages.length - 1, page + 1))} disabled={page === story.pages.length - 1}
          className="flex items-center gap-1 rounded-xl bg-gray-100 px-4 py-2 font-bold text-gray-700 hover:bg-gray-200 disabled:opacity-30 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
          التالي <ChevronLeft className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
