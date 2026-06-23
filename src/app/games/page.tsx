'use client'

import { useState, useEffect } from 'react'
import { lessons } from '@/data/lessons'
import { RotateCcw, ChevronLeft, CheckCircle, XCircle, Star, Volume2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const gameTypes = [
  { id: 'quiz', titleAr: 'الاختبارات', emoji: '❓', desc: 'اختر الإجابة الصحيحة', color: 'from-purple-400 to-violet-500' },
  { id: 'memory', titleAr: 'لعبة الذاكرة', emoji: '🧠', desc: 'طابق الكلمة بمعناها', color: 'from-sky-400 to-blue-500' },
  { id: 'matching', titleAr: 'صل الكلمات', emoji: '🔗', desc: 'صل الكلمة الإنجليزية بالعربية', color: 'from-emerald-400 to-green-500' },
  { id: 'math', titleAr: 'الحساب الذهني', emoji: '🧮', desc: 'حل مسائل الجمع والطرح', color: 'from-amber-400 to-orange-500' },
]

// ==================== QUIZ GAME ====================
function QuizGame({ onBack }: { onBack: () => void }) {
  const [words] = useState(() => lessons.flatMap(l => l.words).sort(() => Math.random() - 0.5).slice(0, 10))
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [done, setDone] = useState(false)

  function getOptions(correct: string) {
    const others = lessons.flatMap(l => l.words).filter(w => w.ar !== correct).sort(() => Math.random() - 0.5).slice(0, 3).map(w => w.ar)
    const all = [correct, ...others].sort(() => Math.random() - 0.5)
    return { options: all, correctIdx: all.indexOf(correct) }
  }

  const [{ options, correctIdx }, setOptions] = useState(() => getOptions(words[0].ar))

  useEffect(() => { setOptions(getOptions(words[index].ar)); setSelected(null) }, [index])

  function pick(i: number) {
    setSelected(i)
    if (i === correctIdx) setScore(s => s + 1)
    setTimeout(() => {
      if (index < 9) setIndex(i => i + 1)
      else setDone(true)
    }, 1200)
  }

  if (done) return (
    <div className="text-center py-12">
      <div className="text-6xl mb-4">🎉</div>
      <h2 className="text-2xl font-bold">انتهى الاختبار!</h2>
      <p className="text-lg mt-2">نقاطك: {score} / 10</p>
      <div className="mt-4 text-5xl">{score >= 8 ? '🏆' : score >= 5 ? '👍' : '💪'}</div>
      <Button onClick={onBack} className="mt-6 gap-2"><RotateCcw className="h-4 w-4" /> العب مرة أخرى</Button>
    </div>
  )

  const w = words[index]
  return (
    <div className="mx-auto max-w-lg">
      <button onClick={onBack} className="flex items-center gap-1 text-sm text-gray-600 mb-4 dark:text-gray-400"><ChevronLeft className="h-4 w-4" /> رجوع</button>
      <div className="rounded-3xl border-2 border-gray-200 bg-white p-8 shadow-lg dark:border-gray-700 dark:bg-gray-800">
        <div className="flex justify-between text-sm text-gray-500 mb-4 dark:text-gray-400">
          <span>السؤال {index + 1} / 10</span>
          <span>⭐ {score}</span>
        </div>
        <div className="text-center mb-6">
          <div className="text-6xl mb-3">{w.emoji}</div>
          <button onClick={() => { if ('speechSynthesis' in window) { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(w.en); u.lang = 'en-US'; speechSynthesis.speak(u) } }}
            className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 mb-2">
            <Volume2 className="h-4 w-4" /> {w.en}
          </button>
          <p className="text-gray-500 dark:text-gray-400">ما معنى هذه الكلمة؟</p>
        </div>
        <div className="space-y-3">
          {options.map((opt, i) => (
            <button key={i} onClick={() => pick(i)} disabled={selected !== null}
              className={`w-full rounded-xl border-2 p-4 font-bold text-lg transition-all ${
                selected === null ? 'border-gray-200 bg-gray-50 hover:border-purple-300 hover:bg-purple-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-purple-500 dark:hover:bg-purple-900/20' :
                i === correctIdx ? 'border-emerald-400 bg-emerald-50 text-emerald-700' :
                selected === i ? 'border-red-300 bg-red-50 text-red-700' : 'border-gray-100 opacity-40'
              }`}
            >{opt}</button>
          ))}
        </div>
      </div>
    </div>
  )
}

// ==================== MEMORY GAME ====================
function MemoryGame({ onBack }: { onBack: () => void }) {
  const [cards, setCards] = useState(() => {
    const picked = lessons.flatMap(l => l.words).sort(() => Math.random() - 0.5).slice(0, 6)
    const pairs = picked.flatMap((w, i) => [
      { id: i * 2, text: w.en, pairId: i, flipped: false, matched: false },
      { id: i * 2 + 1, text: w.ar, pairId: i, flipped: false, matched: false },
    ]).sort(() => Math.random() - 0.5)
    return pairs
  })
  const [flipped, setFlipped] = useState<number[]>([])
  const [matched, setMatched] = useState<Set<number>>(new Set())
  const [moves, setMoves] = useState(0)
  const [locked, setLocked] = useState(false)

  function flip(id: number) {
    if (locked || matched.has(id) || flipped.includes(id)) return
    const newFlipped = [...flipped, id]
    setFlipped(newFlipped)
    setMoves(m => m + 1)

    if (newFlipped.length === 2) {
      setLocked(true)
      const [a, b] = newFlipped
      const cardA = cards.find(c => c.id === a)!
      const cardB = cards.find(c => c.id === b)!
      if (cardA.pairId === cardB.pairId) {
        setMatched(prev => new Set([...prev, a, b]))
        setFlipped([])
        setLocked(false)
      } else {
        setTimeout(() => { setFlipped([]); setLocked(false) }, 1000)
      }
    }
  }

  const won = matched.size === cards.length
  if (won) {
    const allCards = lessons.flatMap(l => l.words).sort(() => Math.random() - 0.5).slice(0, 6)
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="text-2xl font-bold">أحسنت! ربحت 🏆</h2>
        <p className="text-lg mt-2">عدد المحاولات: {moves}</p>
        <Button onClick={onBack} className="mt-6 gap-2"><RotateCcw className="h-4 w-4" /> اختر لعبة أخرى</Button>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-lg">
      <button onClick={onBack} className="flex items-center gap-1 text-sm text-gray-600 mb-4 dark:text-gray-400"><ChevronLeft className="h-4 w-4" /> رجوع</button>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold dark:text-white">🧠 لعبة الذاكرة</h2>
        <span className="text-sm text-gray-500 dark:text-gray-400">محاولات: {moves}</span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {cards.map(card => {
          const isFlipped = flipped.includes(card.id) || matched.has(card.id)
          return (
            <button key={card.id} onClick={() => flip(card.id)}
              className={`h-24 rounded-2xl font-bold text-lg shadow-md transition-all ${
                isFlipped
                  ? matched.has(card.id) ? 'bg-emerald-100 border-2 border-emerald-400 text-emerald-800' : 'bg-white border-2 border-sky-400 text-gray-800'
                  : 'bg-gradient-to-br from-sky-400 to-blue-500 text-white hover:scale-105'
              }`}
            >
              {isFlipped ? card.text : '❓'}
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ==================== MATCHING GAME ====================
function MatchingGame({ onBack }: { onBack: () => void }) {
  const [pairs, setPairs] = useState(() => {
    const picked = lessons.flatMap(l => l.words).sort(() => Math.random() - 0.5).slice(0, 6)
    return picked.map((w, i) => ({ id: i, en: w.en, ar: w.ar, matched: false }))
  })
  const [selectedEn, setSelectedEn] = useState<number | null>(null)
  const [selectedAr, setSelectedAr] = useState<number | null>(null)
  const [moves, setMoves] = useState(0)
  const [done, setDone] = useState(false)

  function pickEn(id: number) {
    if (pairs[id].matched) return
    setSelectedEn(id)
    if (selectedAr !== null) checkMatch(id, selectedAr)
  }
  function pickAr(id: number) {
    if (pairs[id].matched) return
    setSelectedAr(id)
    if (selectedEn !== null) checkMatch(selectedEn, id)
  }
  function checkMatch(enId: number, arId: number) {
    setMoves(m => m + 1)
    if (enId === arId) {
      setPairs(prev => prev.map(p => p.id === enId ? { ...p, matched: true } : p))
      setSelectedEn(null); setSelectedAr(null)
      if (pairs.filter(p => !p.matched).length === 1) setDone(true)
    } else {
      setTimeout(() => { setSelectedEn(null); setSelectedAr(null) }, 800)
    }
  }

  if (done) return (
    <div className="text-center py-12">
      <div className="text-6xl mb-4">🎉</div>
      <h2 className="text-2xl font-bold">أحسنت!</h2>
      <p className="text-lg mt-2">محاولات: {moves}</p>
      <Button onClick={onBack} className="mt-6 gap-2"><RotateCcw className="h-4 w-4" /> اختر لعبة أخرى</Button>
    </div>
  )

  const shuffledAr = [...pairs].sort(() => Math.random() - 0.5)
  return (
    <div className="mx-auto max-w-lg">
      <button onClick={onBack} className="flex items-center gap-1 text-sm text-gray-600 mb-4 dark:text-gray-400"><ChevronLeft className="h-4 w-4" /> رجوع</button>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold dark:text-white">🔗 صل الكلمات</h2>
        <span className="text-sm text-gray-500 dark:text-gray-400">محاولات: {moves}</span>
      </div>
      <p className="text-sm text-gray-500 mb-4 text-center">اختر كلمة إنجليزية ثم اختر معناها بالعربية</p>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <p className="text-xs font-bold text-blue-600 mb-1 dark:text-blue-400">English</p>
          {pairs.map((p) => (
            <button key={p.id} onClick={() => pickEn(p.id)} disabled={p.matched}
              className={`w-full rounded-xl border-2 p-3 text-sm font-bold transition-all ${
                p.matched ? 'border-emerald-300 bg-emerald-50 text-emerald-600 opacity-60 dark:bg-emerald-900/30 dark:text-emerald-400' :
                selectedEn === p.id ? 'border-blue-400 bg-blue-50 text-blue-700 scale-105 dark:bg-blue-900/30 dark:text-blue-300' :
                'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-blue-500 dark:hover:bg-blue-900/20'
              }`}
            >{p.en}</button>
          ))}
        </div>
        <div className="space-y-2">
          <p className="text-xs font-bold text-emerald-600 mb-1 dark:text-emerald-400">العربية</p>
          {shuffledAr.map((p) => (
            <button key={p.id} onClick={() => pickAr(p.id)} disabled={p.matched}
              className={`w-full rounded-xl border-2 p-3 text-sm font-bold transition-all ${
                p.matched ? 'border-emerald-300 bg-emerald-50 text-emerald-600 opacity-60 dark:bg-emerald-900/30 dark:text-emerald-400' :
                selectedAr === p.id ? 'border-emerald-400 bg-emerald-50 text-emerald-700 scale-105 dark:bg-emerald-900/30 dark:text-emerald-300' :
                'border-gray-200 bg-white hover:border-emerald-300 hover:bg-emerald-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-emerald-500 dark:hover:bg-emerald-900/20'
              }`}
            >{p.ar}</button>
          ))}
        </div>
      </div>
    </div>
  )
}

// ==================== MATH GAME ====================
function MathGame({ onBack }: { onBack: () => void }) {
  const [questions, setQuestions] = useState(() => {
    const ops = ['+', '-'] as const
    const qs = []
    for (let i = 0; i < 10; i++) {
      const op = ops[Math.floor(Math.random() * ops.length)]
      let a = Math.floor(Math.random() * 15) + 1
      let b = Math.floor(Math.random() * 10) + 1
      if (op === '-' && a < b) [a, b] = [b, a]
      const correct = op === '+' ? a + b : a - b
      const wrongs = new Set<number>()
      while (wrongs.size < 3) {
        const w = correct + (Math.floor(Math.random() * 10) + 1) * (Math.random() > 0.5 ? 1 : -1)
        if (w !== correct && w >= 0) wrongs.add(w)
      }
      const options = [correct, ...wrongs].sort(() => Math.random() - 0.5)
      qs.push({ a, b, op, correct, options, correctIdx: options.indexOf(correct) })
    }
    return qs
  })

  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [done, setDone] = useState(false)

  function pick(i: number) {
    setSelected(i)
    if (i === questions[index].correctIdx) setScore(s => s + 1)
    setTimeout(() => {
      if (index < 9) { setIndex(i => i + 1); setSelected(null) }
      else setDone(true)
    }, 1000)
  }

  if (done) return (
    <div className="text-center py-12">
      <div className="text-6xl mb-4">🧮</div>
      <h2 className="text-2xl font-bold">أحسنت!</h2>
      <p className="text-lg mt-2">نقاطك: {score} / 10</p>
      <Button onClick={onBack} className="mt-6 gap-2"><RotateCcw className="h-4 w-4" /> اختر لعبة أخرى</Button>
    </div>
  )

  const q = questions[index]
  return (
    <div className="mx-auto max-w-lg">
      <button onClick={onBack} className="flex items-center gap-1 text-sm text-gray-600 mb-4"><ChevronLeft className="h-4 w-4" /> رجوع</button>
      <div className="rounded-3xl border-2 border-gray-200 bg-white p-8 shadow-lg text-center dark:border-gray-700 dark:bg-gray-800">
        <div className="flex justify-between text-sm text-gray-500 mb-4 dark:text-gray-400">
          <span>السؤال {index + 1} / 10</span>
          <span>⭐ {score}</span>
        </div>
        <div className="text-7xl mb-3">🧮</div>
        <div className="text-5xl font-bold text-gray-800 mb-6 dark:text-white">
          {q.a} <span className="text-orange-500">{q.op === '+' ? '+' : '−'}</span> {q.b} <span className="text-gray-400 dark:text-gray-500">=</span> <span className="text-amber-500">?</span>
        </div>
        <p className="text-gray-500 mb-4 dark:text-gray-400">اختر الإجابة الصحيحة</p>
        <div className="grid grid-cols-2 gap-3">
          {q.options.map((opt, i) => (
            <button key={i} onClick={() => pick(i)} disabled={selected !== null}
              className={`rounded-2xl border-2 p-5 text-2xl font-bold transition-all ${
                selected === null ? 'border-gray-200 bg-gray-50 hover:border-amber-300 hover:bg-amber-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-amber-500 dark:hover:bg-amber-900/20' :
                i === q.correctIdx ? 'border-emerald-400 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300' :
                selected === i ? 'border-red-300 bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300' : 'border-gray-100 opacity-40'
              }`}
            >{opt}</button>
          ))}
        </div>
      </div>
    </div>
  )
}

// ==================== MAIN ====================
export default function GamesPage() {
  const [activeGame, setActiveGame] = useState<string | null>(null)

  return (
    <div className="pb-12">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">🎮 الألعاب التعليمية</h1>
        <p className="text-gray-500 dark:text-gray-400">تعلم وأنت تلعب!</p>
      </div>

      {!activeGame && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gameTypes.map((game) => (
            <button key={game.id} onClick={() => setActiveGame(game.id)}
              className="rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-md transition-all hover:shadow-xl hover:-translate-y-1 text-center dark:border-gray-700 dark:bg-gray-800"
            >
              <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${game.color} text-white text-3xl shadow-md`}>{game.emoji}</div>
              <h3 className="mt-3 font-bold text-gray-800 text-lg dark:text-white">{game.titleAr}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{game.desc}</p>
            </button>
          ))}
        </div>
      )}

      {activeGame === 'quiz' && <QuizGame onBack={() => setActiveGame(null)} />}
      {activeGame === 'memory' && <MemoryGame onBack={() => setActiveGame(null)} />}
      {activeGame === 'matching' && <MatchingGame onBack={() => setActiveGame(null)} />}
      {activeGame === 'math' && <MathGame onBack={() => setActiveGame(null)} />}
    </div>
  )
}
