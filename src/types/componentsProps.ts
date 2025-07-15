import { type Card } from "./mediaData";

export type NavbarProps = {
    searchTerm: string;
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    selectedCategory: string;
    onCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    allCards: Card[];
    onPlay: () => void;
    onNavigateToDetail: (id: number) => void;
}