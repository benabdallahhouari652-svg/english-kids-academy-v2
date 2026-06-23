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
  words: { en: string; ar: string; darja: string; pron: string; emoji?: string }[]
}

export const lessons: LessonData[] = [
  // Level 1: Beginners
  {
    id: 'l1-1', level: 1, order: 1,
    title: 'Alphabet', titleAr: 'الحروف الإنجليزية', icon: '🔤', color: 'blue',
    words: [
      { en: 'Apple', ar: 'تفاحة', darja: 'تُفَّاحَة', pron: 'أَبَل', emoji: '🍎' },
      { en: 'Ball', ar: 'كرة', darja: 'كُورَة', pron: 'بُول', emoji: '⚽' },
      { en: 'Cat', ar: 'قطة', darja: 'قَطُوس', pron: 'كَات', emoji: '🐱' },
      { en: 'Dog', ar: 'كلب', darja: 'كَلْب', pron: 'دُوغ', emoji: '🐶' },
      { en: 'Elephant', ar: 'فيل', darja: 'فِيل', pron: 'إلِفَانْت', emoji: '🐘' },
      { en: 'Fish', ar: 'سمكة', darja: 'حُوتَة', pron: 'فِيش', emoji: '🐟' },
      { en: 'Girl', ar: 'بنت', darja: 'بِنْت', pron: 'غِرْل', emoji: '👧' },
      { en: 'House', ar: 'منزل', darja: 'دَار', pron: 'هَاوْس', emoji: '🏠' },
      { en: 'Ice cream', ar: 'مثلجات', darja: 'جْلَاصَة', pron: 'آيْس كْرِيم', emoji: '🍦' },
      { en: 'Juice', ar: 'عصير', darja: 'عْصِير', pron: 'جُوس', emoji: '🧃' },
      { en: 'Kite', ar: 'طائرة ورقية', darja: 'طَيَّارَة', pron: 'كَايْت', emoji: '🪁' },
      { en: 'Lamp', ar: 'مصباح', darja: 'لَامْبَة', pron: 'لَامْب', emoji: '💡' },
      { en: 'Monkey', ar: 'قرد', darja: 'قَرْد', pron: 'مَانْكِي', emoji: '🐒' },
      { en: 'Nose', ar: 'أنف', darja: 'نِيف', pron: 'نُوز', emoji: '👃' },
      { en: 'Orange', ar: 'برتقال', darja: 'بَرْطَقَال', pron: 'أُورِنْج', emoji: '🍊' },
      { en: 'Pig', ar: 'خنزير', darja: 'خَلُّوف', pron: 'بِيغ', emoji: '🐷' },
      { en: 'Queen', ar: 'ملكة', darja: 'مَلْكَة', pron: 'كْوِين', emoji: '👑' },
      { en: 'Rabbit', ar: 'أرنب', darja: 'أَرْنَب', pron: 'رَابِت', emoji: '🐰' },
      { en: 'Sun', ar: 'شمس', darja: 'شَمْس', pron: 'سَان', emoji: '☀️' },
      { en: 'Tiger', ar: 'نمر', darja: 'نْمَر', pron: 'تَايْغِر', emoji: '🐯' },
      { en: 'Umbrella', ar: 'مظلة', darja: 'مْطَلَّة', pron: 'أَمْبْرِيلَا', emoji: '☂️' },
      { en: 'Violin', ar: 'كمان', darja: 'كَمَان', pron: 'فَايُولِين', emoji: '🎻' },
      { en: 'Water', ar: 'ماء', darja: 'مَا', pron: 'وُوتِر', emoji: '💧' },
      { en: 'Xylophone', ar: 'إكسيليفون', darja: 'كْسِيلِيفُون', pron: 'زَايْلُوفُون', emoji: '🎷' },
      { en: 'Yacht', ar: 'يخت', darja: 'يَاخْت', pron: 'يُوت', emoji: '⛵' },
      { en: 'Zebra', ar: 'حمار وحشي', darja: 'حْمَار وَحْشِي', pron: 'زِيبْرَا', emoji: '🦓' },
    ],
  },
  {
    id: 'l1-2', level: 1, order: 2,
    title: 'Numbers 1-20', titleAr: 'الأعداد ١-٢٠', icon: '🔢', color: 'orange',
    words: [
      { en: 'One', ar: 'واحد', darja: 'وَاحْدْ', pron: 'وَان', emoji: '1️⃣' },
      { en: 'Two', ar: 'اثنان', darja: 'زُوج', pron: 'تُو', emoji: '2️⃣' },
      { en: 'Three', ar: 'ثلاثة', darja: 'تْلَاثَة', pron: 'ثْرِي', emoji: '3️⃣' },
      { en: 'Four', ar: 'أربعة', darja: 'رْبْعَة', pron: 'فُور', emoji: '4️⃣' },
      { en: 'Five', ar: 'خمسة', darja: 'خَمْسَة', pron: 'فَايْف', emoji: '5️⃣' },
      { en: 'Six', ar: 'ستة', darja: 'سْتَة', pron: 'سِكْس', emoji: '6️⃣' },
      { en: 'Seven', ar: 'سبعة', darja: 'سَبْعَة', pron: 'سِيفِن', emoji: '7️⃣' },
      { en: 'Eight', ar: 'ثمانية', darja: 'تْمَانْيَة', pron: 'إيْت', emoji: '8️⃣' },
      { en: 'Nine', ar: 'تسعة', darja: 'تْسْعَة', pron: 'نَايْن', emoji: '9️⃣' },
      { en: 'Ten', ar: 'عشرة', darja: 'عَشْرَة', pron: 'تِين', emoji: '🔟' },
      { en: 'Eleven', ar: 'أحد عشر', darja: 'حْدَاش', pron: 'إلِيفِن', emoji: '1️⃣1️⃣' },
      { en: 'Twelve', ar: 'اثنا عشر', darja: 'طْنَاش', pron: 'تُوَلْف', emoji: '1️⃣2️⃣' },
      { en: 'Thirteen', ar: 'ثلاثة عشر', darja: 'تْلَطَاش', pron: 'ثِرْتِين', emoji: '1️⃣3️⃣' },
      { en: 'Fourteen', ar: 'أربعة عشر', darja: 'رْبْعَطَاش', pron: 'فُورْتِين', emoji: '1️⃣4️⃣' },
      { en: 'Fifteen', ar: 'خمسة عشر', darja: 'خَمْسَطَاش', pron: 'فِفْتِين', emoji: '1️⃣5️⃣' },
      { en: 'Sixteen', ar: 'ستة عشر', darja: 'سْتَطَاش', pron: 'سِكْسْتِين', emoji: '1️⃣6️⃣' },
      { en: 'Seventeen', ar: 'سبعة عشر', darja: 'سَبْعَطَاش', pron: 'سِيفِنْتِين', emoji: '1️⃣7️⃣' },
      { en: 'Eighteen', ar: 'ثمانية عشر', darja: 'تْمَانْطَاش', pron: 'إيْتِين', emoji: '1️⃣8️⃣' },
      { en: 'Nineteen', ar: 'تسعة عشر', darja: 'تْسَعْطَاش', pron: 'نَايْنْتِين', emoji: '1️⃣9️⃣' },
      { en: 'Twenty', ar: 'عشرون', darja: 'عَشْرِين', pron: 'تْوِينْتِي', emoji: '2️⃣0️⃣' },
    ],
  },
  {
    id: 'l1-3', level: 1, order: 3,
    title: 'Colors', titleAr: 'الألوان', icon: '🎨', color: 'pink',
    words: [
      { en: 'Red', ar: 'أحمر', darja: 'حْمَر', pron: 'رِد', emoji: '🔴' },
      { en: 'Blue', ar: 'أزرق', darja: 'زْرَق', pron: 'بْلُو', emoji: '🔵' },
      { en: 'Green', ar: 'أخضر', darja: 'خْضَر', pron: 'غْرِين', emoji: '🟢' },
      { en: 'Yellow', ar: 'أصفر', darja: 'صْفَر', pron: 'يِلُو', emoji: '🟡' },
      { en: 'Orange', ar: 'برتقالي', darja: 'بَرْطَقَال', pron: 'أُورِنْج', emoji: '🟠' },
      { en: 'Purple', ar: 'بنفسجي', darja: 'بَنَفْسَجِي', pron: 'بِرْبَل', emoji: '🟣' },
      { en: 'White', ar: 'أبيض', darja: 'بْيَاض', pron: 'وَايْت', emoji: '⚪' },
      { en: 'Black', ar: 'أسود', darja: 'كْحَل', pron: 'بْلَاك', emoji: '⚫' },
      { en: 'Pink', ar: 'وردي', darja: 'وَرْدِي', pron: 'بِينْك', emoji: '🩷' },
      { en: 'Brown', ar: 'بني', darja: 'بُونِي', pron: 'بْرَاوْن', emoji: '🟤' },
    ],
  },
  {
    id: 'l1-4', level: 1, order: 4,
    title: 'Shapes', titleAr: 'الأشكال', icon: '⬛', color: 'teal',
    words: [
      { en: 'Circle', ar: 'دائرة', darja: 'دَايْرَة', pron: 'سِرْكَل', emoji: '⭕' },
      { en: 'Square', ar: 'مربع', darja: 'مْرَبَّع', pron: 'سْكْوِير', emoji: '🟩' },
      { en: 'Triangle', ar: 'مثلث', darja: 'مُثَلَّث', pron: 'تْرَايَنْغَل', emoji: '🔺' },
      { en: 'Star', ar: 'نجمة', darja: 'نَجْمَة', pron: 'سْتَار', emoji: '⭐' },
      { en: 'Heart', ar: 'قلب', darja: 'قَلْب', pron: 'هَارْت', emoji: '❤️' },
      { en: 'Diamond', ar: 'ماس', darja: 'مَاس', pron: 'دَايْمَنْد', emoji: '💎' },
    ],
  },
  // Level 2: Intermediate
  {
    id: 'l2-1', level: 2, order: 1,
    title: 'Animals', titleAr: 'الحيوانات', icon: '🐾', color: 'emerald',
    words: [
      { en: 'Cat', ar: 'قطة', darja: 'قَطُوس', pron: 'كَات', emoji: '🐱' },
      { en: 'Dog', ar: 'كلب', darja: 'كَلْب', pron: 'دُوغ', emoji: '🐶' },
      { en: 'Lion', ar: 'أسد', darja: 'سَبْع', pron: 'لَايِن', emoji: '🦁' },
      { en: 'Elephant', ar: 'فيل', darja: 'فِيل', pron: 'إلِفَانْت', emoji: '🐘' },
      { en: 'Monkey', ar: 'قرد', darja: 'قَرْد', pron: 'مَانْكِي', emoji: '🐒' },
      { en: 'Bird', ar: 'طائر', darja: 'بَبْغَاء', pron: 'بِرْد', emoji: '🐦' },
      { en: 'Fish', ar: 'سمكة', darja: 'حُوتَة', pron: 'فِيش', emoji: '🐟' },
      { en: 'Rabbit', ar: 'أرنب', darja: 'أَرْنَب', pron: 'رَابِت', emoji: '🐰' },
    ],
  },
  {
    id: 'l2-2', level: 2, order: 2,
    title: 'Fruits', titleAr: 'الفواكه', icon: '🍎', color: 'rose',
    words: [
      { en: 'Apple', ar: 'تفاحة', darja: 'تُفَّاحَة', pron: 'أَبَل', emoji: '🍎' },
      { en: 'Banana', ar: 'موز', darja: 'بَانَانَة', pron: 'بَنَانَة', emoji: '🍌' },
      { en: 'Orange', ar: 'برتقال', darja: 'بَرْطَقَال', pron: 'أُورِنْج', emoji: '🍊' },
      { en: 'Grapes', ar: 'عنب', darja: 'عْنَب', pron: 'غْرَابْس', emoji: '🍇' },
      { en: 'Watermelon', ar: 'بطيخ', darja: 'دِلَّاع', pron: 'وُوتِر مِلُون', emoji: '🍉' },
      { en: 'Strawberry', ar: 'فراولة', darja: 'فْرَاوْلَة', pron: 'سْتْرُوبْرِي', emoji: '🍓' },
    ],
  },
  {
    id: 'l2-3', level: 2, order: 3,
    title: 'Clothes', titleAr: 'الملابس', icon: '👕', color: 'purple',
    words: [
      { en: 'Shirt', ar: 'قميص', darja: 'قَمِيصَة', pron: 'شِرْت', emoji: '👕' },
      { en: 'Pants', ar: 'بنطلون', darja: 'بَنْطَال', pron: 'بَانْتْس', emoji: '👖' },
      { en: 'Shoes', ar: 'حذاء', darja: 'سْبَاط', pron: 'شُوز', emoji: '👟' },
      { en: 'Hat', ar: 'قبعة', darja: 'قُبَّعَة', pron: 'هَات', emoji: '🎩' },
      { en: 'Dress', ar: 'فستان', darja: 'رُوبَة', pron: 'دْرَس', emoji: '👗' },
      { en: 'Jacket', ar: 'جاكيت', darja: 'بْلِيزَة', pron: 'جَاكِت', emoji: '🧥' },
    ],
  },
  {
    id: 'l2-4', level: 2, order: 4,
    title: 'School', titleAr: 'المدرسة', icon: '🏫', color: 'sky',
    words: [
      { en: 'Book', ar: 'كتاب', darja: 'كْتَاب', pron: 'بُوك', emoji: '📚' },
      { en: 'Pen', ar: 'قلم', darja: 'قَلَم', pron: 'بِين', emoji: '🖊️' },
      { en: 'Teacher', ar: 'مدرس', darja: 'مُعَلِّم', pron: 'تِيتْشِر', emoji: '👩‍🏫' },
      { en: 'Student', ar: 'طالب', darja: 'تِلْمِيذ', pron: 'سْتْيُودِنْت', emoji: '🧑‍🎓' },
      { en: 'Bag', ar: 'حقيبة', darja: 'مَحْفَظَة', pron: 'بَاغ', emoji: '🎒' },
      { en: 'Desk', ar: 'طاولة', darja: 'طَاوْلَة', pron: 'دِسْك', emoji: '🪑' },
    ],
  },
]
