import { type Card } from "../types/mediaData";

export function filterCards(cards: Card[], searchTerm: string, selectedCategory: string): Card[] {
  return cards.filter(card =>
    card.title.toLowerCase().startsWith(searchTerm.toLowerCase()) &&
    (selectedCategory ? card.category === selectedCategory : true)
  );
}