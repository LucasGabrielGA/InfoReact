export const categoryEmojis: Record<string, string> = {
  "Acción": "💣",
  "Aventura": "🧭",
  "Bélico": "⚔️",
  "Comedia": "😂",
  "Ciencia Ficción": "👽",
  "Clásicos": "🎥",
  "Drama": "🎭",
  "Documental": "📚",
  "Noir": "🕵",
  "Romance": "💖",
  "Terror": "👻",
  "Thriller": "🔪",
  "Vampiros": "🧛🏻‍♀️",
  "Western": "🐎",
  
};

export function getCategoryWithEmoji(category: string): string {
  return `${categoryEmojis[category] || ''} ${category}`;
}

export function getEmoji(category:string): string{
  return `${categoryEmojis[category] || ''}`;
}