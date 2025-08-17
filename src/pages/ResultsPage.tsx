import { useLocation, useNavigate } from 'react-router-dom';
import styles from './ResultsPage.module.css';
//import { response } from '../types/mediaData';
import { filterCards } from '../utils/filterCards';
import MediaCard from '../components/MediaCard';
import MediaCardContainer from '../components/MediaCardContainer';
import contentMsg from './ContentMessages.module.css'
import { useMovies } from '../hooks/useMovies';

function ResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const { data: movies, isLoading, isError } = useMovies();

  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('q') || '';
  const selectedCategory = searchParams.get('cat') || '';

  /*
  const allCards = [
    ...response.recentList.cards,
    ...response.mostPopularList.cards,
    ...response.classicalList.cards,
    ...response.popularShows.cards,
  ];
  */

  if (isLoading) 
    return (
      <>
        <div className={contentMsg.container}>
        <div className={contentMsg.loadingIcon}></div>
        <p className={contentMsg.loadingMessage}>Cargando contenido...</p>
      </div>
      </>
    );
  if (isError || !movies ) 
    return (
      <div className={contentMsg.container}>
        <div className={contentMsg.errorIcon}>⚠️</div>
        <p className={contentMsg.errorMessage}>Error al cargar las películas.</p>
      </div>
    );

  //const filtered = filterCards(allCards, searchTerm, selectedCategory);
  const filtered = filterCards(movies, searchTerm, selectedCategory);

  const handleDetail = (id: number) => navigate(`/media/${id}`);
  const handlePlay = (id: number) => navigate(`/media/${id}/play`);

  /*
  return (
    <div className={styles.container}>
      {filtered.length === 0 ? (
        <div className={styles.emptyContainer}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
            alt="Sin resultados"
            className={styles.emptyImage}
          />
          <p className={styles.noResults}>No se encontraron resultados para la búsqueda "{searchTerm}"</p>
        </div>
      ) : (
        <MediaCardContainer title="Resultados" description="Contenido que coincide con tu búsqueda.">
          {filtered.map(card => (
            <MediaCard
              key={card.id}
              id={card.id}
              title={card.title}
              category={card.category}
              duration={card.duration}
              src={card.src}
              description={card.description}
              videoUrl={card.videoUrl}
              onDetail={() => handleDetail(card.id)}
              onPlay={() => handlePlay(card.id)}
            />
          ))}
        </MediaCardContainer>
      )}
    </div>
  );
  */

  return (
    <div className={styles.container}>
      {filtered.length === 0 ? (
        <div className={styles.emptyContainer}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
            alt="Sin resultados"
            className={styles.emptyImage}
          />
          <p className={styles.noResults}>
            No se encontraron resultados para la búsqueda "{searchTerm}"
          </p>
        </div>
      ) : (
        <MediaCardContainer title="Resultados" description="Contenido que coincide con tu búsqueda.">
          {filtered.map((movie) => (
            <MediaCard
              key={movie.id}
              movie={movie}
              onDetail={() => handleDetail(movie.id)}
              onPlay={() => handlePlay(movie.id)}
            />
          ))}
        </MediaCardContainer>
      )}
    </div>
  );
}

export default ResultsPage;