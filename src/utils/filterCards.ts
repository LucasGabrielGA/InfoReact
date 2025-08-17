//import { type Card } from "../types/mediaData";
import { type Movie } from "../types/movieTypes";

/*
export function filterCards(cards: Card[], searchTerm: string, selectedCategory: string): Card[] {
  return cards.filter(card =>
    card.title.toLowerCase().startsWith(searchTerm.toLowerCase()) &&
    (selectedCategory ? card.category === selectedCategory : true)
  );
}
*/

export function filterCards(movie: Movie[], searchTerm: string, selectedCategory: string): Movie[] {
  return movie.filter(movie =>
    movie.title.toLowerCase().startsWith(searchTerm.toLowerCase()) &&
    (selectedCategory ? movie.genre.includes(selectedCategory) : true)
  );
}