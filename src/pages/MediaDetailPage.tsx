import { useParams, useNavigate } from 'react-router-dom';
//import { response } from '../types/mediaData';
import styles from './MediaDetailPage.module.css';
import { useFavorites } from '../context/favoritesContext';
import { useMovieById } from '../hooks/useMovieById';
import contentMsg from './ContentMessages.module.css'

function MediaDetailPage() {
  //===================================================================================//
  // Código de Entrega 3 //
  //===================================================================================//
  /*
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const allCards = [
    ...response.recentList.cards,
    ...response.mostPopularList.cards,
    ...response.classicalList.cards,
    ...response.popularShows.cards,
  ];
  const card = allCards.find(item => item.id === Number(id));

  const { toggleFavorite, isFavorite } = useFavorites();
  const handleFavoritesClick = () => {
    if (card) {
      toggleFavorite(card);
    }
};

  if (!card) return <p className={styles.noContent}>Contenido no encontrado.</p>;

  return (
    <div className={styles.detailContainer}>
      <h1 className={styles.title}>{card.title}</h1>
      <div className={styles.contentWrapper}>
        <img className={styles.image} src={card.src} alt={card.title} />
        <div className={styles.textContent}>
          <p><strong>Categoría:</strong> {card.category}</p>
          <p><strong>Duración:</strong> {card.duration}</p>
          <p className={styles.synopsis}>
            {card.description}
          </p>
          <div className={styles.buttons}>
            <button title='Reproducir' onClick={() => navigate(`/media/${card.id}/play`)}>▶ Reproducir</button>
            <button 
              onClick={handleFavoritesClick} 
              title={isFavorite(card.id) ? 'Quitar de Favoritos' : 'Añadir a Favoritos'}>
              {isFavorite(card.id) ? '★ Quitar de Favoritos' : '☆ Añadir a Favoritos'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  */
  //===================================================================================//
  // Código de Entrega 4 //
  //===================================================================================//
  
  const { id } = useParams<{ id: string }>();
  const movieId = Number(id); //Paseo el id string a number porque el hook espera number.
  const { data: movie, isLoading, isError } = useMovieById(movieId);
  const navigate = useNavigate();

  const { toggleFavorite, isFavorite } = useFavorites();
  const handleFavoritesClick = () => {
    if (movie) {
      toggleFavorite(movie);
    }
  }

  if (isLoading) 
    return (
      <>
        <div className={contentMsg.container}>
        <div className={contentMsg.loadingIcon}></div>
        <p className={contentMsg.loadingMessage}>Cargando contenido de la película...</p>
      </div>
      </>
    );
  if (isError || !movie ) 
    return (
      <div className={contentMsg.container}>
        <div className={contentMsg.errorIcon}>⚠️</div>
        <p className={contentMsg.errorMessage}>Error al cargar los datos de la película</p>
      </div>
    );

  /* -> Obsoleto. Adapté favoritesContext para que trabaje con Movie.
  // Favoritos espera types Cards, entonces adapto movie con los mismos campos para evitar errores
  const adaptedCard = {
    id: movie.id,
    title: movie.title,
    category: movie.genre?.[0] || 'Sin categoría',
    duration: `${movie.runtime} min`,
    description: movie.plot,
    src: movie.poster,
    videoUrl: movie.videoUrl,
  };
  */

  return (
    <div className={styles.detailContainer}>
      <h1 className={styles.title}>{movie.title}</h1>
      <div className={styles.contentWrapper}>
        <img className={styles.image} src={movie.poster} alt={movie.title} />
        <div className={styles.textContent}>
          <p><strong>Categoría:</strong> {movie.genre.join(', ')} </p>
          <p><strong>Duración:</strong> {movie.runtime} min</p>
          <p><strong>Reparto:</strong> {movie.cast.join(', ')} </p>
          <p className={styles.synopsis}>
            {movie.plot}
          </p>
          <div className={styles.buttons}>
            <button title='Reproducir' onClick={() => navigate(`/media/${movie.id}/play`)}>▶ Reproducir</button>
            <button 
              onClick={handleFavoritesClick} 
              title={isFavorite(movie.id) ? 'Quitar de Favoritos' : 'Añadir a Favoritos'}>
              {isFavorite(movie.id) ? '★ Quitar de Favoritos' : '☆ Añadir a Favoritos'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediaDetailPage;