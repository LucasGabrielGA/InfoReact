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
  
  "Action": "💣",
  "Aventure": "🧭",
  "Classics": "🎥",
  "Comedy": "😂",
  "Crime": "🚬",
  "Documentary": "📚",
  "Horror": "👻",
  "Parody": "🤡",
  "Science Fiction": "👽",
  "Sci-Fi": "👽",
  "Vampires": "🧛🏻‍♀️",
  "Warlike": "⚔️",
  
};

export function getCategoryWithEmoji(category: string): string {
  return `${categoryEmojis[category] || ''} ${category}`;
}

export function getEmoji(category:string): string{
  return `${categoryEmojis[category] || ''}`;
}