import { useParams, useNavigate } from 'react-router-dom';
import { response } from '../types/mediaData';
import styles from './MediaDetailPage.module.css';
import { useFavorites } from '../context/favoritesContext';

function MediaDetailPage() {
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
}

export default MediaDetailPage;