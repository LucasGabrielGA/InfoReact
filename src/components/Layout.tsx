import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { response, type Card } from '../types/mediaData';

function Layout() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const allCards: Card[] = [
    ...response.recentList.cards,
    ...response.mostPopularList.cards,
    ...response.classicalList.cards,
    ...response.popularShows.cards,
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const navigate = useNavigate();
  const handleNavigateToDetail = (id: number) => {
    setSearchTerm(''); //Esto limpiaria la barra de búsqueda
    setSelectedCategory(''); //Esto limpiaría la categoría
    navigate(`/media/${id}`);
  }

  return (
    <>
      <Navbar
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        allCards={allCards}
        onPlay={() => {}}
        onNavigateToDetail={handleNavigateToDetail}
      />
      <main>
        <Outlet context={{ searchTerm, selectedCategory }} />
      </main>
      <Footer />
    </>
  );
}

export default Layout;