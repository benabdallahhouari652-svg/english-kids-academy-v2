import Link from 'next/link'
import { stories } from '@/data/stories'

export default function StoriesPage() {
  return (
    <div className="pb-12">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">📖 القصص المصورة</h1>
        <p className="text-gray-500 dark:text-gray-400">قصص ممتعة بالعربية والإنجليزية</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stories.map((story) => (
          <Link key={story.id} href={`/stories/${story.id}`} className="group rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-md transition-all hover:shadow-xl hover:-translate-y-1 text-center dark:border-gray-700 dark:bg-gray-800">
            <div className="text-6xl mb-3">{story.emoji}</div>
            <h3 className="font-bold text-gray-800 text-lg dark:text-white">{story.titleAr}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{story.title}</p>
            <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">{story.pages.length} صفحات</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
