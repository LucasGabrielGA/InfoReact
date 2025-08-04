import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMovies } from '../hooks/useMovies';
import { useUpdateMovie } from '../hooks/useUpdateMovie';
import { useDeleteMovie } from '../hooks/useDeleteMovie';
import type { Movie } from '../types/movieTypes';
import styles from './EditMoviePage.module.css';

function EditMoviePage() {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const { data: movies } = useMovies();
  const { mutate: updateMovie, isPending: isUpdating } = useUpdateMovie();
  const { mutate: deleteMovie, isPending: isDeleting } = useDeleteMovie();

  const movie = movies?.find(m => m.id === Number(id));

  const [form, setForm] = useState({
    title: '',
    plot: '',
    director: '',
    genre: '',
    cast: '',
    runtime: '',
    poster: '',
    videoUrl: '',
  });

  useEffect(() => {
    if (movie) {
      setForm({
        title: movie.title,
        plot: movie.plot,
        director: movie.director,
        genre: movie.genre.join(', '),
        cast: movie.cast.join(', '),
        runtime: movie.runtime.toString(),
        poster: movie.poster,
        videoUrl: movie.videoUrl,
      });
    }
  }, [movie]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;

    const updatedData: Partial<Movie> = {
      title: form.title,
      plot: form.plot,
      director: form.director,
      genre: form.genre.split(',').map(g => g.trim()),
      cast: form.cast.split(',').map(c => c.trim()),
      runtime: Number(form.runtime),
      poster: form.poster,
      videoUrl: form.videoUrl,
    };

    updateMovie({ id: Number(id), movieData: updatedData }, {
      onSuccess: () => navigate(`/media/${id}`),
    });
  };

  const handleDelete = () => {
    if (!id) return;
    if (window.confirm('¿Estás seguro que deseas eliminar esta película?')) {
      deleteMovie(Number(id), {
        onSuccess: () => navigate('/'),
      });
    }
  };

  if (!movie) return <p>Cargando película...</p>;

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h2>Editar película</h2>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="title">Título</label>
        <input type="text" name="title" placeholder="Título" value={form.title} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="plot">Sinopsis</label>
        <input type="text" name="plot" placeholder="Sinopsis" value={form.plot} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="director">Director</label>
        <input type="text" name="director" placeholder="Director" value={form.director} onChange={handleChange} />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="genre">Géneros</label>
        <input type="text" name="genre" placeholder="Géneros (separados por coma)" value={form.genre} onChange={handleChange} />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="runtime">Duración</label>
        <input type="number" name="runtime" placeholder="Duración (min)" value={form.runtime} onChange={handleChange} />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="poster">URL del poster</label>
        <input type="url" name="poster" placeholder="URL del poster" value={form.poster} onChange={handleChange} />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="videoUrl">URL del video</label>
        <input type="text" name="videoUrl" placeholder="URL del video" value={form.videoUrl} onChange={handleChange} />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="cast">Reparto (separado por coma)</label>
        <input type="text" name="cast" placeholder="Reparto (separado por coma)" value={form.cast} onChange={handleChange} />
      </div>

      <button type="submit" disabled={isUpdating}>
        {isUpdating ? 'Guardando...' : 'Guardar Cambios'}
      </button>

      <button type="button" onClick={handleDelete} disabled={isDeleting}>
        {isDeleting ? 'Eliminando...' : 'Eliminar Película'}
      </button>
    </form>
  );
}

export default EditMoviePage;