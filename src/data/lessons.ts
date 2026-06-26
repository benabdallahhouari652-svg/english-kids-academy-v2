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
      { en: 'Apple', ar: 'تفاحة', pron: 'أَبَل', emoji: '🍎' },
      { en: 'Ball', ar: 'كرة', pron: 'بُول', emoji: '⚽' },
      { en: 'Cat', ar: 'قطة', pron: 'كَات', emoji: '🐱' },
      { en: 'Dog', ar: 'كلب', pron: 'دُوغ', emoji: '🐶' },
      { en: 'Elephant', ar: 'فيل', pron: 'إلِفَانْت', emoji: '🐘' },
      { en: 'Fish', ar: 'سمكة', pron: 'فِيش', emoji: '🐟' },
      { en: 'Girl', ar: 'بنت', pron: 'غِرْل', emoji: '👧' },
      { en: 'House', ar: 'منزل', pron: 'هَاوْس', emoji: '🏠' },
      { en: 'Ice cream', ar: 'مثلجات', pron: 'آيْس كْرِيم', emoji: '🍦' },
      { en: 'Juice', ar: 'عصير', pron: 'جُوس', emoji: '🧃' },
      { en: 'Kite', ar: 'طائرة ورقية', pron: 'كَايْت', emoji: '🪁' },
      { en: 'Lamp', ar: 'مصباح', pron: 'لَامْب', emoji: '💡' },
      { en: 'Monkey', ar: 'قرد', pron: 'مَانْكِي', emoji: '🐒' },
      { en: 'Nose', ar: 'أنف', pron: 'نُوز', emoji: '👃' },
      { en: 'Orange', ar: 'برتقال', pron: 'أُورِنْج', emoji: '🍊' },
      { en: 'Pig', ar: 'خنزير', pron: 'بِيغ', emoji: '🐷' },
      { en: 'Queen', ar: 'ملكة', pron: 'كْوِين', emoji: '👑' },
      { en: 'Rabbit', ar: 'أرنب', pron: 'رَابِت', emoji: '🐰' },
      { en: 'Sun', ar: 'شمس', pron: 'سَان', emoji: '☀️' },
      { en: 'Tiger', ar: 'نمر', pron: 'تَايْغِر', emoji: '🐯' },
      { en: 'Umbrella', ar: 'مظلة', pron: 'أَمْبْرِيلَا', emoji: '☂️' },
      { en: 'Violin', ar: 'كمان', pron: 'فَايُولِين', emoji: '🎻' },
      { en: 'Water', ar: 'ماء', pron: 'وُوتِر', emoji: '💧' },
      { en: 'Xylophone', ar: 'إكسيليفون', pron: 'زَايْلُوفُون', emoji: '🎷' },
      { en: 'Yacht', ar: 'يخت', pron: 'يُوت', emoji: '⛵' },
      { en: 'Zebra', ar: 'حمار وحشي', pron: 'زِيبْرَا', emoji: '🦓' },
    ],
  },
  {
    id: 'l1-2', level: 1, order: 2,
    title: 'Numbers 1-20', titleAr: 'الأعداد ١-٢٠', icon: '🔢', color: 'orange',
    words: [
      { en: 'One', ar: 'واحد', pron: 'وَان', emoji: '1️⃣' },
      { en: 'Two', ar: 'اثنان', pron: 'تُو', emoji: '2️⃣' },
      { en: 'Three', ar: 'ثلاثة', pron: 'ثْرِي', emoji: '3️⃣' },
      { en: 'Four', ar: 'أربعة', pron: 'فُور', emoji: '4️⃣' },
      { en: 'Five', ar: 'خمسة', pron: 'فَايْف', emoji: '5️⃣' },
      { en: 'Six', ar: 'ستة', pron: 'سِكْس', emoji: '6️⃣' },
      { en: 'Seven', ar: 'سبعة', pron: 'سِيفِن', emoji: '7️⃣' },
      { en: 'Eight', ar: 'ثمانية', pron: 'إيْت', emoji: '8️⃣' },
      { en: 'Nine', ar: 'تسعة', pron: 'نَايْن', emoji: '9️⃣' },
      { en: 'Ten', ar: 'عشرة', pron: 'تِين', emoji: '🔟' },
      { en: 'Eleven', ar: 'أحد عشر', pron: 'إلِيفِن', emoji: '1️⃣1️⃣' },
      { en: 'Twelve', ar: 'اثنا عشر', pron: 'تُوَلْف', emoji: '1️⃣2️⃣' },
      { en: 'Thirteen', ar: 'ثلاثة عشر', pron: 'ثِرْتِين', emoji: '1️⃣3️⃣' },
      { en: 'Fourteen', ar: 'أربعة عشر', pron: 'فُورْتِين', emoji: '1️⃣4️⃣' },
      { en: 'Fifteen', ar: 'خمسة عشر', pron: 'فِفْتِين', emoji: '1️⃣5️⃣' },
      { en: 'Sixteen', ar: 'ستة عشر', pron: 'سِكْسْتِين', emoji: '1️⃣6️⃣' },
      { en: 'Seventeen', ar: 'سبعة عشر', pron: 'سِيفِنْتِين', emoji: '1️⃣7️⃣' },
      { en: 'Eighteen', ar: 'ثمانية عشر', pron: 'إيْتِين', emoji: '1️⃣8️⃣' },
      { en: 'Nineteen', ar: 'تسعة عشر', pron: 'نَايْنْتِين', emoji: '1️⃣9️⃣' },
      { en: 'Twenty', ar: 'عشرون', pron: 'تْوِينْتِي', emoji: '2️⃣0️⃣' },
    ],
  },
  {
    id: 'l1-3', level: 1, order: 3,
    title: 'Colors', titleAr: 'الألوان', icon: '🎨', color: 'pink',
    words: [
      { en: 'Red', ar: 'أحمر', pron: 'رِد', emoji: '🔴' },
      { en: 'Blue', ar: 'أزرق', pron: 'بْلُو', emoji: '🔵' },
      { en: 'Green', ar: 'أخضر', pron: 'غْرِين', emoji: '🟢' },
      { en: 'Yellow', ar: 'أصفر', pron: 'يِلُو', emoji: '🟡' },
      { en: 'Orange', ar: 'برتقالي', pron: 'أُورِنْج', emoji: '🟠' },
      { en: 'Purple', ar: 'بنفسجي', pron: 'بِرْبَل', emoji: '🟣' },
      { en: 'White', ar: 'أبيض', pron: 'وَايْت', emoji: '⚪' },
      { en: 'Black', ar: 'أسود', pron: 'بْلَاك', emoji: '⚫' },
      { en: 'Pink', ar: 'وردي', pron: 'بِينْك', emoji: '🩷' },
      { en: 'Brown', ar: 'بني', pron: 'بْرَاوْن', emoji: '🟤' },
    ],
  },
  {
    id: 'l1-4', level: 1, order: 4,
    title: 'Shapes', titleAr: 'الأشكال', icon: '⬛', color: 'teal',
    words: [
      { en: 'Circle', ar: 'دائرة', pron: 'سِرْكَل', emoji: '⭕' },
      { en: 'Square', ar: 'مربع', pron: 'سْكْوِير', emoji: '🟩' },
      { en: 'Triangle', ar: 'مثلث', pron: 'تْرَايَنْغَل', emoji: '🔺' },
      { en: 'Star', ar: 'نجمة', pron: 'سْتَار', emoji: '⭐' },
      { en: 'Heart', ar: 'قلب', pron: 'هَارْت', emoji: '❤️' },
      { en: 'Diamond', ar: 'ماس', pron: 'دَايْمَنْد', emoji: '💎' },
    ],
  },
  // Level 2: Intermediate
  {
    id: 'l2-1', level: 2, order: 1,
    title: 'Animals', titleAr: 'الحيوانات', icon: '🐾', color: 'emerald',
    words: [
      { en: 'Cat', ar: 'قطة', pron: 'كَات', emoji: '🐱' },
      { en: 'Dog', ar: 'كلب', pron: 'دُوغ', emoji: '🐶' },
      { en: 'Lion', ar: 'أسد', pron: 'لَايِن', emoji: '🦁' },
      { en: 'Elephant', ar: 'فيل', pron: 'إلِفَانْت', emoji: '🐘' },
      { en: 'Monkey', ar: 'قرد', pron: 'مَانْكِي', emoji: '🐒' },
      { en: 'Bird', ar: 'طائر', pron: 'بِرْد', emoji: '🐦' },
      { en: 'Fish', ar: 'سمكة', pron: 'فِيش', emoji: '🐟' },
      { en: 'Rabbit', ar: 'أرنب', pron: 'رَابِت', emoji: '🐰' },
    ],
  },
  {
    id: 'l2-2', level: 2, order: 2,
    title: 'Fruits', titleAr: 'الفواكه', icon: '🍎', color: 'rose',
    words: [
      { en: 'Apple', ar: 'تفاحة', pron: 'أَبَل', emoji: '🍎' },
      { en: 'Banana', ar: 'موز', pron: 'بَنَانَة', emoji: '🍌' },
      { en: 'Orange', ar: 'برتقال', pron: 'أُورِنْج', emoji: '🍊' },
      { en: 'Grapes', ar: 'عنب', pron: 'غْرَابْس', emoji: '🍇' },
      { en: 'Watermelon', ar: 'بطيخ', pron: 'وُوتِر مِلُون', emoji: '🍉' },
      { en: 'Strawberry', ar: 'فراولة', pron: 'سْتْرُوبْرِي', emoji: '🍓' },
    ],
  },
  {
    id: 'l2-3', level: 2, order: 3,
    title: 'Clothes', titleAr: 'الملابس', icon: '👕', color: 'purple',
    words: [
      { en: 'Shirt', ar: 'قميص', pron: 'شِرْت', emoji: '👕' },
      { en: 'Pants', ar: 'بنطلون', pron: 'بَانْتْس', emoji: '👖' },
      { en: 'Shoes', ar: 'حذاء', pron: 'شُوز', emoji: '👟' },
      { en: 'Hat', ar: 'قبعة', pron: 'هَات', emoji: '🎩' },
      { en: 'Dress', ar: 'فستان', pron: 'دْرَس', emoji: '👗' },
      { en: 'Jacket', ar: 'جاكيت', pron: 'جَاكِت', emoji: '🧥' },
    ],
  },
  {
    id: 'l2-4', level: 2, order: 4,
    title: 'School', titleAr: 'المدرسة', icon: '🏫', color: 'sky',
    words: [
      { en: 'Book', ar: 'كتاب', pron: 'بُوك', emoji: '📚' },
      { en: 'Pen', ar: 'قلم', pron: 'بِين', emoji: '🖊️' },
      { en: 'Teacher', ar: 'مدرس', pron: 'تِيتْشِر', emoji: '👩‍🏫' },
      { en: 'Student', ar: 'طالب', pron: 'سْتْيُودِنْت', emoji: '🧑‍🎓' },
      { en: 'Bag', ar: 'حقيبة', pron: 'بَاغ', emoji: '🎒' },
      { en: 'Desk', ar: 'طاولة', pron: 'دِسْك', emoji: '🪑' },
    ],
  },
]
