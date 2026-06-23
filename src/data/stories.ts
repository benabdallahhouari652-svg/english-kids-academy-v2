export type StoryData = {
  id: string
  title: string
  titleAr: string
  emoji: string
  color: string
  pages: { en: string; ar: string; image?: string }[]
}

export const stories: StoryData[] = [
  {
    id: 's1', title: 'The Cat and the Mouse', titleAr: 'القطة والفأر', emoji: '🐱', color: 'sky',
    pages: [
      { en: 'A cat is sleeping.', ar: 'القطة نائمة.' },
      { en: 'A mouse sees the cat.', ar: 'فأر يرى القطة.' },
      { en: 'The mouse runs away!', ar: 'الفأر يهرب!' },
      { en: 'The cat wakes up. Meow!', ar: 'القطة تستيقظ. مياو!' },
    ],
  },
  {
    id: 's2', title: 'The Little Bird', titleAr: 'العصفور الصغير', emoji: '🐦', color: 'emerald',
    pages: [
      { en: 'A little bird is in the tree.', ar: 'عصفور صغير على الشجرة.' },
      { en: 'It sings a song.', ar: 'يغني أغنية.' },
      { en: 'The sun is shining.', ar: 'الشمس مشرقة.' },
      { en: 'The bird is happy!', ar: 'العصفور سعيد!' },
    ],
  },
  {
    id: 's3', title: 'My Family', titleAr: 'عائلتي', emoji: '👨‍👩‍👧‍👦', color: 'amber',
    pages: [
      { en: 'This is my father.', ar: 'هذا والدي.' },
      { en: 'This is my mother.', ar: 'هذه والدتي.' },
      { en: 'This is my brother.', ar: 'هذا أخي.' },
      { en: 'I love my family!', ar: 'أحب عائلتي!' },
    ],
  },
]
