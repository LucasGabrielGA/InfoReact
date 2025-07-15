/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, type ReactNode } from 'react';
import { type Card } from '../types/mediaData';

type FavoritesContextType = {
  favorites: Card[];
  toggleFavorite: (card: Card) => void;
  isFavorite: (id: number) => boolean;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error('useFavorites debe usarse dentro de FavoritesProvider');
  return context;
};

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Card[]>([]);

  const toggleFavorite = (card: Card) => {
    setFavorites(prev =>
      prev.some(item => item.id === card.id)
        ? prev.filter(item => item.id !== card.id)
        : [...prev, card]
    );
  };

  const isFavorite = (id: number) => {
    return favorites.some(card => card.id === id);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};