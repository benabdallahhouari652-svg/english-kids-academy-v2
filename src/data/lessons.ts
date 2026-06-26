export const levels = [
  { id: 1, title: 'Beginners', titleAr: 'المبتدئون', emoji: '🌟', color: 'sky' },
  { id: 2, title: 'Intermediate', titleAr: 'المتوسطون', emoji: '🚀', color: 'emerald' },
  { id: 3, title: 'Advanced', titleAr: 'المتقدمون', emoji: '💎', color: 'purple' },
  { id: 4, title: 'Master', titleAr: 'المحترفون', emoji: '👑', color: 'amber' },
]

export type LessonData = {
  id: string
  level: number
  order: number
  title: string
  titleAr: string
  icon: string
  color: string
  words: { en: string; ar: string; pron: string; emoji?: string }[]
}

export const lessons: LessonData[] = [
  // Level 1: Beginners
  {
    id: 'l1-1', level: 1, order: 1,
    title: 'Alphabet', titleAr: 'الحروف الإنجليزية', icon: '🔤', color: 'blue',
    words: [
      { en: 'Apple', ar: 'تفاحة', emoji: '🍎' },
      { en: 'Ball', ar: 'كرة', emoji: '⚽' },
      { en: 'Cat', ar: 'قطة', emoji: '🐱' },
      { en: 'Dog', ar: 'كلب', emoji: '🐶' },
      { en: 'Elephant', ar: 'فيل', emoji: '🐘' },
      { en: 'Fish', ar: 'سمكة', emoji: '🐟' },
      { en: 'Girl', ar: 'بنت', emoji: '👧' },
      { en: 'House', ar: 'منزل', emoji: '🏠' },
      { en: 'Ice cream', ar: 'مثلجات', emoji: '🍦' },
      { en: 'Juice', ar: 'عصير', emoji: '🧃' },
      { en: 'Kite', ar: 'طائرة ورقية', emoji: '🪁' },
      { en: 'Lamp', ar: 'مصباح', emoji: '💡' },
      { en: 'Monkey', ar: 'قرد', emoji: '🐒' },
      { en: 'Nose', ar: 'أنف', emoji: '👃' },
      { en: 'Orange', ar: 'برتقال', emoji: '🍊' },
      { en: 'Pig', ar: 'خنزير', emoji: '🐷' },
      { en: 'Queen', ar: 'ملكة', emoji: '👑' },
      { en: 'Rabbit', ar: 'أرنب', emoji: '🐰' },
      { en: 'Sun', ar: 'شمس', emoji: '☀️' },
      { en: 'Tiger', ar: 'نمر', emoji: '🐯' },
      { en: 'Umbrella', ar: 'مظلة', emoji: '☂️' },
      { en: 'Violin', ar: 'كمان', emoji: '🎻' },
      { en: 'Water', ar: 'ماء', emoji: '💧' },
      { en: 'Xylophone', ar: 'إكسيليفون', emoji: '🎷' },
      { en: 'Yacht', ar: 'يخت', emoji: '⛵' },
      { en: 'Zebra', ar: 'حمار وحشي', emoji: '🦓' },
    ],
  },
  {
    id: 'l1-2', level: 1, order: 2,
    title: 'Numbers 1-20', titleAr: 'الأعداد ١-٢٠', icon: '🔢', color: 'orange',
    words: [
      { en: 'One', ar: 'واحد', emoji: '1️⃣' },
      { en: 'Two', ar: 'اثنان', emoji: '2️⃣' },
      { en: 'Three', ar: 'ثلاثة', emoji: '3️⃣' },
      { en: 'Four', ar: 'أربعة', emoji: '4️⃣' },
      { en: 'Five', ar: 'خمسة', emoji: '5️⃣' },
      { en: 'Six', ar: 'ستة', emoji: '6️⃣' },
      { en: 'Seven', ar: 'سبعة', emoji: '7️⃣' },
      { en: 'Eight', ar: 'ثمانية', emoji: '8️⃣' },
      { en: 'Nine', ar: 'تسعة', emoji: '9️⃣' },
      { en: 'Ten', ar: 'عشرة', emoji: '🔟' },
      { en: 'Eleven', ar: 'أحد عشر', emoji: '1️⃣1️⃣' },
      { en: 'Twelve', ar: 'اثنا عشر', emoji: '1️⃣2️⃣' },
      { en: 'Thirteen', ar: 'ثلاثة عشر', emoji: '1️⃣3️⃣' },
      { en: 'Fourteen', ar: 'أربعة عشر', emoji: '1️⃣4️⃣' },
      { en: 'Fifteen', ar: 'خمسة عشر', emoji: '1️⃣5️⃣' },
      { en: 'Sixteen', ar: 'ستة عشر', emoji: '1️⃣6️⃣' },
      { en: 'Seventeen', ar: 'سبعة عشر', emoji: '1️⃣7️⃣' },
      { en: 'Eighteen', ar: 'ثمانية عشر', emoji: '1️⃣8️⃣' },
      { en: 'Nineteen', ar: 'تسعة عشر', emoji: '1️⃣9️⃣' },
      { en: 'Twenty', ar: 'عشرون', emoji: '2️⃣0️⃣' },
    ],
  },
  {
    id: 'l1-3', level: 1, order: 3,
    title: 'Colors', titleAr: 'الألوان', icon: '🎨', color: 'pink',
    words: [
      { en: 'Red', ar: 'أحمر', emoji: '🔴' },
      { en: 'Blue', ar: 'أزرق', emoji: '🔵' },
      { en: 'Green', ar: 'أخضر', emoji: '🟢' },
      { en: 'Yellow', ar: 'أصفر', emoji: '🟡' },
      { en: 'Orange', ar: 'برتقالي', emoji: '🟠' },
      { en: 'Purple', ar: 'بنفسجي', emoji: '🟣' },
      { en: 'White', ar: 'أبيض', emoji: '⚪' },
      { en: 'Black', ar: 'أسود', emoji: '⚫' },
      { en: 'Pink', ar: 'وردي', emoji: '🩷' },
      { en: 'Brown', ar: 'بني', emoji: '🟤' },
    ],
  },
  {
    id: 'l1-4', level: 1, order: 4,
    title: 'Shapes', titleAr: 'الأشكال', icon: '⬛', color: 'teal',
    words: [
      { en: 'Circle', ar: 'دائرة', emoji: '⭕' },
      { en: 'Square', ar: 'مربع', emoji: '🟩' },
      { en: 'Triangle', ar: 'مثلث', emoji: '🔺' },
      { en: 'Star', ar: 'نجمة', emoji: '⭐' },
      { en: 'Heart', ar: 'قلب', emoji: '❤️' },
      { en: 'Diamond', ar: 'ماس', emoji: '💎' },
    ],
  },
  // Level 2: Intermediate
  {
    id: 'l2-1', level: 2, order: 1,
    title: 'Animals', titleAr: 'الحيوانات', icon: '🐾', color: 'emerald',
    words: [
      { en: 'Cat', ar: 'قطة', emoji: '🐱' },
      { en: 'Dog', ar: 'كلب', emoji: '🐶' },
      { en: 'Lion', ar: 'أسد', emoji: '🦁' },
      { en: 'Elephant', ar: 'فيل', emoji: '🐘' },
      { en: 'Monkey', ar: 'قرد', emoji: '🐒' },
      { en: 'Bird', ar: 'طائر', emoji: '🐦' },
      { en: 'Fish', ar: 'سمكة', emoji: '🐟' },
      { en: 'Rabbit', ar: 'أرنب', emoji: '🐰' },
    ],
  },
  {
    id: 'l2-2', level: 2, order: 2,
    title: 'Fruits', titleAr: 'الفواكه', icon: '🍎', color: 'rose',
    words: [
      { en: 'Apple', ar: 'تفاحة', emoji: '🍎' },
      { en: 'Banana', ar: 'موز', emoji: '🍌' },
      { en: 'Orange', ar: 'برتقال', emoji: '🍊' },
      { en: 'Grapes', ar: 'عنب', emoji: '🍇' },
      { en: 'Watermelon', ar: 'بطيخ', emoji: '🍉' },
      { en: 'Strawberry', ar: 'فراولة', emoji: '🍓' },
    ],
  },
  {
    id: 'l2-3', level: 2, order: 3,
    title: 'Clothes', titleAr: 'الملابس', icon: '👕', color: 'purple',
    words: [
      { en: 'Shirt', ar: 'قميص', emoji: '👕' },
      { en: 'Pants', ar: 'بنطلون', emoji: '👖' },
      { en: 'Shoes', ar: 'حذاء', emoji: '👟' },
      { en: 'Hat', ar: 'قبعة', emoji: '🎩' },
      { en: 'Dress', ar: 'فستان', emoji: '👗' },
      { en: 'Jacket', ar: 'جاكيت', emoji: '🧥' },
    ],
  },
  {
    id: 'l2-4', level: 2, order: 4,
    title: 'School', titleAr: 'المدرسة', icon: '🏫', color: 'sky',
    words: [
      { en: 'Book', ar: 'كتاب', emoji: '📚' },
      { en: 'Pen', ar: 'قلم', emoji: '🖊️' },
      { en: 'Teacher', ar: 'مدرس', emoji: '👩‍🏫' },
      { en: 'Student', ar: 'طالب', emoji: '🧑‍🎓' },
      { en: 'Bag', ar: 'حقيبة', emoji: '🎒' },
      { en: 'Desk', ar: 'طاولة', emoji: '🪑' },
    ],
  },
]
