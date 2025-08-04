import MediaCard from '../components/MediaCard';
import MediaCardContainer from '../components/MediaCardContainer';
import { useNavigate } from 'react-router-dom';
import styles from './FavoritesPage.module.css';
import { useFavorites } from '../context/favoritesContext';

function FavoritesPage() {
  const { favorites } = useFavorites();
  const navigate = useNavigate();

  const handleDetail = (id: number) => navigate(`/media/${id}`);
  const handlePlay = (id: number) => navigate(`/media/${id}/play`);

  if (favorites.length === 0) {
    return (
      <div className={styles.container}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
          alt="Sin favoritos"
          className={styles.emptyImage}
        />
        <p className={styles.noFavoritesMessage}>No tienes favoritos aún 💔</p>
      </div>
    );
  }

  return (
    <MediaCardContainer title="Mis Favoritos" description="Tus series y películas favoritas.">
      {favorites.map(movie => (
        <MediaCard
          key={movie.id}
          movie={movie}
          onDetail={() => handleDetail(movie.id)}
          onPlay={() => handlePlay(movie.id)}
        />
      ))}
    </MediaCardContainer>
  );
}

export default FavoritesPage;