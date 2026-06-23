import Link from 'next/link'
import { ChevronLeft, Star } from 'lucide-react'
import { lessons, levels } from '@/data/lessons'

type Props = { searchParams: Promise<{ level?: string }> }

export default async function LessonsPage(props: Props) {
  const { level } = await props.searchParams
  const filtered = level ? lessons.filter(l => l.level === parseInt(level)) : lessons
  const currentLevel = level ? levels.find(l => l.id === parseInt(level)) : null

  return (
    <div className="space-y-6 pb-12">
      <div className="flex items-center gap-3">
        {currentLevel && (
          <Link href="/lessons" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700">
            <ChevronLeft className="h-4 w-4 dark:text-white" />
          </Link>
        )}
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">📚 الدروس</h1>
          <p className="text-gray-500 dark:text-gray-400">{currentLevel ? `المستوى: ${currentLevel.titleAr}` : 'اختر درساً لتبدأ التعلم'}</p>
        </div>
      </div>

      {!level && (
        <div className="flex flex-wrap gap-3">
          {levels.map((lv) => (
            <Link key={lv.id} href={`/lessons?level=${lv.id}`} className="rounded-2xl border-2 border-gray-200 bg-white px-5 py-3 shadow-md transition-all hover:border-sky-300 hover:shadow-lg text-center dark:border-gray-700 dark:bg-gray-800 dark:hover:border-sky-500">
              <span className="text-2xl">{lv.emoji}</span>
              <p className="font-bold text-gray-800 mt-1 dark:text-white">{lv.titleAr}</p>
            </Link>
          ))}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((lesson) => (
          <Link key={lesson.id} href={`/lessons/${lesson.id}`} className="group rounded-2xl border-2 border-gray-200 bg-white p-5 shadow-md transition-all hover:shadow-xl hover:-translate-y-1 hover:border-sky-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-sky-500">
            <div className="flex items-center gap-3">
              <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-${lesson.color}-100 text-3xl shadow-sm dark:bg-gray-700`}>
                {lesson.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 dark:text-white">{lesson.titleAr}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{lesson.title}</p>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-1 text-amber-500">
              <Star className="h-4 w-4 fill-amber-400" />
              <span className="text-xs text-gray-500 dark:text-gray-400">{lesson.words.length} كلمة</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
