'use client'

import { useState } from 'react'
import { songs } from '@/data/songs'
import { Volume2 } from 'lucide-react'

export default function SongsPage() {
  const [activeSong, setActiveSong] = useState<string | null>(null)

  function speak(text: string) {
    if ('speechSynthesis' in window) { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(text); u.lang = 'en-US'; u.volume = 1; u.rate = 1.05; u.pitch = 1.1; speechSynthesis.speak(u) }
  }

  return (
    <div className="pb-12">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">🎵 الأناشيد التعليمية</h1>
        <p className="text-gray-500 dark:text-gray-400">أناشيد ممتعة لتعليم الإنجليزية</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {songs.map((song) => (
          <div key={song.id} className="rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl">{song.emoji}</div>
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white">{song.titleAr}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{song.title}</p>
              </div>
            </div>
            <button
              onClick={() => { setActiveSong(activeSong === song.id ? null : song.id); speak(song.lyricsEn) }}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-400 to-rose-400 px-4 py-2 text-sm font-bold text-white shadow-md hover:shadow-lg transition-transform hover:scale-105"
            >
              <Volume2 className="h-4 w-4" />
              {activeSong === song.id ? 'إيقاف' : 'استمع للنشيد'}
            </button>
            {activeSong === song.id && (
              <div className="mt-4 rounded-xl bg-gray-50 p-4 text-sm whitespace-pre-line dark:bg-gray-700">
                <p className="font-bold text-gray-700 mb-2 dark:text-gray-300">🏴󠁧󠁢󠁥󠁮󠁧󠁿 English:</p>
                <p className="text-gray-600 mb-3 dark:text-gray-400">{song.lyricsEn}</p>
                <p className="font-bold text-gray-700 mb-2 dark:text-gray-300">🇸🇦 العربية:</p>
                <p className="text-gray-600 dark:text-gray-400">{song.lyricsAr}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
