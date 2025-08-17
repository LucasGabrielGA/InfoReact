import { useNavigate } from 'react-router-dom';
import styles from './MediaCard.module.css';
import { useFavorites } from '../context/favoritesContext';
import { getCategoryWithEmoji } from '../utils/categoryEmojis';
import { type Movie } from '../types/movieTypes';

//===================================================================================//
// Código de Entrega 3 //
//===================================================================================//
/*
type MediaCardProps = {
  id: number;
  src: string;
  title: string;
  category: string;
  duration: string;
  description: string;
  videoUrl: string;
  onDetail: () => void;
  onPlay: () => void;
};

function MediaCard({
  id,
  src,
  title,
  category,
  duration,
  description,
  videoUrl,
  onDetail,
  onPlay
}: MediaCardProps) {

  const navigate = useNavigate();
  const { toggleFavorite, isFavorite } = useFavorites();

  const handleCategoryClick = () => navigate(`/category/${category}`);

  const handleFavoritesClick = () => {
    toggleFavorite({ id, title, category, duration, src, description, videoUrl });
  };

  return (
    <article className={styles.container}>
      <a title="Ver Detalles" onClick={onDetail}>
        <img title='Ver Detalles' className={styles.img} src={src} alt={title} />
      </a>
      <div className={styles.content}>
        <a title="Ver Detalles" onClick={onDetail}>
          <h2 className={styles.title}>{title}</h2>
        </a>
        <a title='Ir a la Categoría' onClick={handleCategoryClick}>
          <p className={styles.category}>{getCategoryWithEmoji(category)}</p>
        </a>
        <p className={styles.duration}>⏱ {duration}</p>
        <div className={styles.buttonsContainer}>
          <button 
            onClick={handleFavoritesClick}
            title={isFavorite(id) ? 'Quitar de favoritos' : 'Añadir a favoritos'}
          >
            {isFavorite(id) ? '★' : '☆'}
          </button>
          <button onClick={onPlay} title="Reproducir">▶</button>
        </div>
      </div>
    </article>
  );
  */
 
//===================================================================================//
// Código de Entrega 4 //
//===================================================================================//

type MediaCardProps = {
  movie: Movie;
  onDetail: () => void;
  onPlay: () => void;
};

function MediaCard({ movie, onDetail, onPlay }: MediaCardProps) {
  console.log('MediaCard recibió:', movie);
  if (!movie) {
  throw new Error("MediaCard necesita un objeto movie válido");
}
  const navigate = useNavigate();
  const { toggleFavorite, isFavorite } = useFavorites();

  const {
    id,
    title,
    genre,
    runtime,
    poster,
    plot,
    videoUrl
  } = movie;

  const category = genre[0] ?? 'Sin categoría';

  const handleCategoryClick = () => navigate(`/category/${category}`);

  const handleFavoritesClick = () => {
    toggleFavorite(movie);
  };

  return (
    <article className={styles.container}>
      <a title="Ver Detalles" onClick={onDetail}>
        <img title="Ver Detalles" className={styles.img} src={poster} alt={title} />
      </a>
      <div className={styles.content}>
        <a title="Ver Detalles" onClick={onDetail}>
          <h2 className={styles.title}>{title}</h2>
        </a>
        <a title="Ir a la Categoría" onClick={handleCategoryClick}>
          <p className={styles.category}>{getCategoryWithEmoji(category)}</p>
        </a>
        <p className={styles.duration}>⏱ {runtime} min</p>
        <div className={styles.buttonsContainer}>
          <button
            onClick={handleFavoritesClick}
            title={isFavorite(id) ? 'Quitar de favoritos' : 'Añadir a favoritos'}
          >
            {isFavorite(id) ? '★' : '☆'}
          </button>
          <button onClick={onPlay} title="Reproducir">▶</button>
        </div>
      </div>
    </article>
  );
}

export default MediaCard;