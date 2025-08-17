import { useState } from "react";
import { useCreateMovie } from "../hooks/useCreateMovie";
import { useNavigate } from "react-router-dom";
import type { NewMovie } from "../types/movieTypes";
import styles from './CreateMoviePage.module.css';

function CreateMoviePage() {
  type MovieFormState = Omit<NewMovie, 'id' | 'genre' | 'cast' | 'runtime'> & {
    genre: string;
    cast: string;
    runtime: string;
  };

  const [form, setForm] = useState<MovieFormState>({
    title: '',
    plot: '',
    director: '',
    poster: '',
    videoUrl: '',
    genre: '',
    cast: '',
    runtime: '',
  });

  const navigate = useNavigate();
  const { mutate, isPending, isSuccess, isError } = useCreateMovie();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const runtimeValue = Number(form.runtime);
    if (isNaN(runtimeValue)) {
      alert("La duración debe ser un número válido.");
      return;
    }

    const movieData: Omit<NewMovie, 'id'> = {
      title: form.title,
      plot: form.plot,
      director: form.director,
      poster: form.poster,
      videoUrl: form.videoUrl,
      genre: form.genre.split(',').map(g => g.trim()),
      cast: form.cast.split(',').map(c => c.trim()),
      runtime: runtimeValue,
    };

    mutate(movieData);
  };

  if (isSuccess) {
    navigate('/');
    return null;
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Agregar Nueva Película</h2>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="title">Título</label>
        <input id="title" name="title" className={styles.input} type="text" value={form.title} onChange={handleChange} required />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="plot">Sinopsis</label>
        <input id="plot" name="plot" className={styles.input} type="text" value={form.plot} onChange={handleChange} required />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="director">Director</label>
        <input id="director" name="director" className={styles.input} type="text" value={form.director} onChange={handleChange} />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="genre">Géneros (separados por coma)</label>
        <input id="genre" name="genre" className={styles.input} type="text" value={form.genre} onChange={handleChange} />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="runtime">Duración (minutos)</label>
        <input id="runtime" name="runtime" className={styles.input} type="number" value={form.runtime} onChange={handleChange} />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="poster">URL del Poster</label>
        <input id="poster" name="poster" className={styles.input} type="text" value={form.poster} onChange={handleChange} />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="videoUrl">URL del Video</label>
        <input id="videoUrl" name="videoUrl" className={styles.input} type="text" value={form.videoUrl} onChange={handleChange} />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="cast">Reparto (separado por coma)</label>
        <input id="cast" name="cast" className={styles.input} type="text" value={form.cast} onChange={handleChange} />
      </div>

      <button className={styles.button} type="submit" disabled={isPending}>
        {isPending ? 'Agregando...' : 'Agregar Película'}
      </button>

      {isError && <p className={styles.errorMessage}>❌ Error al guardar la película.</p>}
    </form>
  );
}

export default CreateMoviePage;