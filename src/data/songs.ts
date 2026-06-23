export type SongData = {
  id: string
  title: string
  titleAr: string
  emoji: string
  color: string
  lyricsEn: string
  lyricsAr: string
}

export const songs: SongData[] = [
  {
    id: 'm1', title: 'ABC Song', titleAr: 'أغنية الحروف', emoji: '🔤', color: 'blue',
    lyricsEn: 'A B C D E F G\nH I J K L M N O P\nQ R S T U V W X Y Z\nNow I know my ABC\'s!',
    lyricsAr: 'ألف بي سي دي إي أف جي\nإتش أي جي كاي إل إم إن أو بي\nكيو آر إس تي يو في دبليو إكس واي زد\nالآن عرفت حروفي!',
  },
  {
    id: 'm2', title: 'Ten Little Fishes', titleAr: 'عشر سمكات صغيرات', emoji: '🐟', color: 'cyan',
    lyricsEn: 'One little fish swimming in the sea\nTwo little fishes, come and see!\nThree little fishes, four and five\nSwimming and diving, all alive!',
    lyricsAr: 'سمكة صغيرة تسبح في البحر\nسمكتان صغيرتان، تعال وانظر!\nثلاث سمكات، أربع وخمس\nيسبحن ويغصن، كلها حية!',
  },
  {
    id: 'm3', title: 'Colors Song', titleAr: 'أغنية الألوان', emoji: '🌈', color: 'pink',
    lyricsEn: 'Red and yellow, green and blue\nThese are colors, I love them too!\nOrange and purple, pink and white\nColors make the world so bright!',
    lyricsAr: 'أحمر وأصفر وأخضر وأزرق\nهذه ألوان، أحبها أيضاً!\nبرتقالي وبنفسجي ووردي وأبيض\nالألوان تجعل العالم مشرقاً!',
  },
]
