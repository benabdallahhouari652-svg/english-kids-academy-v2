import { badges } from '@/data/badges'
import { Lock } from 'lucide-react'

export default function BadgesPage() {
  return (
    <div className="pb-12">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">🏅 الشارات والإنجازات</h1>
        <p className="text-gray-500 dark:text-gray-400">اجمع كل الشارات بتقدمك في التعلم</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {badges.map((badge) => (
          <div key={badge.id} className="rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-md text-center transition-all hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
            <div className="text-6xl mb-3">{badge.icon}</div>
            <h3 className="font-bold text-gray-800 text-lg dark:text-white">{badge.nameAr}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{badge.description}</p>
            <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
              <Lock className="h-3 w-3" /> لم تفتح بعد
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
