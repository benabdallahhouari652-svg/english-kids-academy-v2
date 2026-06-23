import Link from 'next/link'
import { BookOpen, Music, Gamepad2, Medal, BookMarked, Sparkles, ArrowLeft, Stars } from 'lucide-react'
import { lessons } from '@/data/lessons'
import { levels } from '@/data/lessons'

const features = [
  { href: '/lessons', label: 'الدروس التفاعلية', desc: 'حروف، أرقام، ألوان، حيوانات', icon: BookOpen, color: 'from-sky-400 to-blue-500', emoji: '📚' },
  { href: '/stories', label: 'القصص المصورة', desc: 'قصص ممتعة بالعربية والإنجليزية', icon: BookMarked, color: 'from-emerald-400 to-green-500', emoji: '📖' },
  { href: '/songs', label: 'الأناشيد', desc: 'أناشيد تعليمية مع الكلمات', icon: Music, color: 'from-pink-400 to-rose-500', emoji: '🎵' },
  { href: '/games', label: 'الألعاب', desc: 'ألعاب ذاكرة ومطابقة ورياضيات', icon: Gamepad2, color: 'from-purple-400 to-violet-500', emoji: '🎮' },
]

export default function HomePage() {
  return (
    <div className="space-y-8 pb-12">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-400 via-blue-400 to-indigo-500 p-8 text-white shadow-xl">
        <div className="relative z-10 text-center">
          <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-4 border-white/40 bg-white p-1.5 shadow-lg">
            <img src="/kids-logo.png" alt="English Kids Academy" className="h-full w-full object-contain rounded-full" />
          </div>
          <p className="text-xs text-white/70 mb-1">المؤسس والمطور</p>
          <p className="text-sm text-white/90 font-bold mb-2">المربي بن عبد الله الهواري</p>
          <h1 className="text-3xl font-bold md:text-4xl">English Kids Academy</h1>
          <p className="mt-2 text-lg text-white/90">تعليم اللغة الإنجليزية للأطفال بالعربية</p>
          <p className="mt-1 text-sm text-white/70">بأسلوب تفاعلي ممتع مع الدروس والقصص والألعاب</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/lessons" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-blue-600 shadow-lg transition-transform hover:scale-105">
              <Sparkles className="h-5 w-5" />
              ابدأ التعلم
            </Link>
            <Link href="/games" className="inline-flex items-center gap-2 rounded-full bg-white/20 px-6 py-3 font-bold text-white backdrop-blur transition-transform hover:scale-105">
              <Gamepad2 className="h-5 w-5" />
              العب وتعلم
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <Link key={f.href} href={f.href} className="group rounded-2xl border-2 border-transparent bg-white p-5 shadow-md transition-all hover:border-orange-300 hover:shadow-xl hover:-translate-y-1 dark:bg-gray-800 dark:hover:border-orange-500">
            <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${f.color} text-white text-2xl shadow-md group-hover:scale-110 transition-transform`}>
              <f.icon className="h-7 w-7" />
            </div>
            <h3 className="mt-3 font-bold text-gray-800 text-lg dark:text-white">{f.label}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{f.desc}</p>
          </Link>
        ))}
      </div>

      {/* Levels */}
      <div>
        <h2 className="flex items-center gap-2 text-xl font-bold text-gray-800 mb-4 dark:text-white">
          <Stars className="h-6 w-6 text-amber-500" />
          المستويات التعليمية
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {levels.map((level) => {
            const levelLessons = lessons.filter(l => l.level === level.id)
            return (
              <Link key={level.id} href={`/lessons?level=${level.id}`} className="rounded-2xl border-2 border-gray-200 bg-white p-5 shadow-md transition-all hover:shadow-xl hover:-translate-y-1 text-center dark:border-gray-700 dark:bg-gray-800 dark:hover:border-sky-500">
                <div className="text-5xl mb-2">{level.emoji}</div>
                <h3 className="font-bold text-gray-800 dark:text-white">{level.titleAr}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{levelLessons.length} دروس</p>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
