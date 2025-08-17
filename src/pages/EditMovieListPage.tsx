import { useNavigate } from 'react-router-dom';
import MediaCard from '../components/MediaCard';
import MediaCardContainer from '../components/MediaCardContainer';
import { useMovies } from '../hooks/useMovies';
import styles from './EditMovieListPage.module.css';
import contentMsg from './ContentMessages.module.css';

function EditMovieListPage() {
  const { data: movies, isLoading, isError } = useMovies();
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className={contentMsg.container}>
        <div className={contentMsg.loadingIcon}></div>
        <p className={contentMsg.loadingMessage}>Cargando contenido...</p>
      </div>
    );
  }

  if (isError || !movies) {
    return (
      <div className={contentMsg.container}>
        <div className={contentMsg.errorIcon}>⚠️</div>
        <p className={contentMsg.errorMessage}>Error al cargar las películas.</p>
      </div>
    );
  }

  const handleEdit = (id: number) => navigate(`/editar/${id}`);

  return (
    <div className={styles.container}>
      <MediaCardContainer title="Editar Películas" description="Selecciona una película para editar">
        {movies.map(movie => (
          <MediaCard
            key={movie.id}
            movie={movie}
            onDetail={() => handleEdit(movie.id)}  //Clic llevará a /editar/:id
            onPlay={() => {}}  //No hago nada en Play, aunque después debería habilitarlo igual
          />
        ))}
      </MediaCardContainer>
    </div>
  );
}

export default EditMovieListPage;