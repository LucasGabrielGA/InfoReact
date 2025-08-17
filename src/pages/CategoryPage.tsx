import { useParams, useNavigate } from 'react-router-dom';
//import { response } from '../types/mediaData';
import MediaCard from '../components/MediaCard';
import MediaCardContainer from '../components/MediaCardContainer';
import styles from './CategoryPage.module.css';
import { getEmoji } from '../utils/categoryEmojis';
import { useMovies } from '../hooks/useMovies';
import { useMoviesByGenre } from '../hooks/useMovieByGenre';
import contentMsg from './ContentMessages.module.css'

function CategoryPage() {
  //===================================================================================//
  // Código de Entrega 3 //
  //===================================================================================//
  /*
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  const allCards = [
    ...response.recentList.cards,
    ...response.mostPopularList.cards,
    ...response.classicalList.cards,
    ...response.popularShows.cards,
  ];

  const uniqueCategories = Array.from(new Set(allCards.map(card => card.category).sort()));

  const handleNavigateToCategory = (category: string) => {
    navigate(`/category/${category}`);
  };

  const handleNavigateToDetail = (id: number) => {
    navigate(`/media/${id}`);
  };

  const handleNavigateToPlay = (id: number) => {
    navigate(`/media/${id}/play`);
  };

  if (!id) {
    return (
      <div className={styles.pageContainer}>
        <h1 className={styles.pageTitle}>Categorías</h1>
        <div className={styles.categoriesGrid}>
          {uniqueCategories.map(category => (
            <div
              key={category}
              className={styles.categoryCard}
              onClick={() => handleNavigateToCategory(category)}
            >
              <div className={styles.emoji}>{getEmoji(category)}</div>
              <h2 className={styles.categoryTitle}>{category}</h2>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const filteredCards = allCards.filter(card => card.category === id);

  return (
    <div className={styles.pageContainer}>
      {filteredCards.length === 0 ? (
        <p className={styles.noContent}>No hay contenido en esta categoría.</p>
      ) : (
        <MediaCardContainer title={`Categoría: ${id}`} description={`Contenido de ${id}`}>
          {filteredCards.map(card => (
            <MediaCard
              key={card.id}
              id={card.id}
              src={card.src}
              title={card.title}
              category={card.category}
              duration={card.duration}
              description={card.description}
              videoUrl={card.videoUrl}
              onDetail={() => handleNavigateToDetail(card.id)}
              onPlay={() => handleNavigateToPlay(card.id)}
            />
          ))}
        </MediaCardContainer>
      )}
    </div>
  );
  */

  //===================================================================================//
  // Código de Entrega 4 //
  //===================================================================================//
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const { 
    data: moviesAll,
    isLoading: isLoadingAll,
    isError: isErrorAll } = useMovies();
  
  const {
    data: genreMovies,
    isLoading: isLoadingGenre,
    isError: isErrorGenre,
  } = useMoviesByGenre(id || '');

  const handleNavigateToCategory = (category: string) => {
    navigate(`/category/${category}`);
  };

  const handleNavigateToDetail = (id: number) => {
    navigate(`/media/${id}`);
  };

  const handleNavigateToPlay = (id: number) => {
    navigate(`/media/${id}/play`);
  };

  if (!id) {
    if (isLoadingAll) return <p className={styles.loading}>Cargando categorías...</p>;
    if (isErrorAll || !moviesAll) return <p className={styles.error}>Error al cargar categorías.</p>;

    const uniqueCategories = Array.from(
      new Set(moviesAll.flatMap((movie) => movie.genre))
    ).sort();

    return (
      <div className={styles.pageContainer}>
        <h1 className={styles.pageTitle}>Categorías</h1>
        <div className={styles.categoriesGrid}>
          {uniqueCategories.map((category) => (
            <div
              key={category}
              className={styles.categoryCard}
              onClick={() => handleNavigateToCategory(category)}
            >
              <div className={styles.emoji}>{getEmoji(category)}</div>
              <h2 className={styles.categoryTitle}>{category}</h2>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (isLoadingGenre) 
    return (
      <>
        <div className={contentMsg.container}>
        <div className={contentMsg.loadingIcon}></div>
        <p className={contentMsg.loadingMessage}>Cargando contenido de {id}...</p>
      </div>
      </>
    );
  if (isErrorGenre || !genreMovies ) 
    return (
      <div className={contentMsg.container}>
        <div className={contentMsg.errorIcon}>⚠️</div>
        <p className={contentMsg.errorMessage}>Error al cargar las películas de {id}</p>
      </div>
    );

  return (
    <div className={styles.pageContainer}>
      {genreMovies.length === 0 ? (
        <p className={styles.noContent}>No hay contenido en esta categoría.</p>
      ) : (
        <MediaCardContainer title={`Categoría: ${id}`} description={`Contenido de ${id}`}>
          {genreMovies.map((movie) => (
            <MediaCard
              key={movie.id}
              movie={movie}
              onDetail={() => handleNavigateToDetail(movie.id)}
              onPlay={() => handleNavigateToPlay(movie.id)}
            />
          ))}
        </MediaCardContainer>
      )}
    </div>
  );
}

export default CategoryPage;