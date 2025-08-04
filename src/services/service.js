import {moviesDB, getNextId} from "../db/db.js";

// Simulate API delay
const delay = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock API service with CRUD operations
export const movieService = {
  // GET all movies
  async getAllMovies() {
    await delay(2000);
    // Load from localStorage if available, fallback to initial data
    const stored = localStorage.getItem('moviesDB');
    if (stored) {
      return JSON.parse(stored);
    }
    return [...moviesDB];
  },

  // GET movie by ID
  async getMovieById(id) {
    await delay(2000);
    const stored = localStorage.getItem('moviesDB');
    const movies = stored ? JSON.parse(stored) : moviesDB;
    const movie = movies.find((m) => m.id === parseInt(id));
    if (!movie) {
      throw new Error('Movie not found');
    }
    return movie;
  },

  // GET movies by genre
  async getMoviesByGenre(genre) {
    await delay(2000);
    const stored = localStorage.getItem('moviesDB');
    const movies = stored ? JSON.parse(stored) : moviesDB;
    
    if (!genre) {
      throw new Error('Genre parameter is required');
    }
    

    return movies.filter((movie) =>
      movie.genre.some((g) => g.toLowerCase() === genre.toLowerCase())
    );
  },

  // GET movies by cast member
  async getMoviesByCast(castMember) {
    await delay(200);
    const stored = localStorage.getItem('moviesDB');
    const movies = stored ? JSON.parse(stored) : moviesDB;

    if (!castMember) {
      throw new Error('Cast member parameter is required');
    }

    return movies.filter((movie) =>
      movie.cast.some((actor) =>
        actor.toLowerCase().includes(castMember.toLowerCase())
      )
    );
  },

  // GET all genres with movies grouped by genre
  async getGenres() {
    await delay(200);
    const stored = localStorage.getItem('moviesDB');
    const movies = stored ? JSON.parse(stored) : moviesDB;

    const genreMap = {};

    movies.forEach((movie) => {
      movie.genre.forEach((genre) => {
        if (!genreMap[genre]) {
          genreMap[genre] = [];
        }
        genreMap[genre].push(movie);
      });
    });

    // Convert to array format with genre name and movies
    return Object.keys(genreMap)
      .map((genre) => ({
        genre,
        movies: genreMap[genre],
      }))
      .sort((a, b) => a.genre.localeCompare(b.genre));
  },

  // POST - Create new movie
  async createMovie(movieData) {
    await delay(2000);
    const stored = localStorage.getItem('moviesDB');
    const movies = stored ? JSON.parse(stored) : [...moviesDB];

    const newMovie = {
      ...movieData,
      id: getNextId(),
      cast: movieData.cast || [],
      poster:
        movieData.poster ||
        'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    };

    movies.push(newMovie);
    localStorage.setItem('moviesDB', JSON.stringify(movies));
    return newMovie;
  },

  // PUT - Update existing movie
  async updateMovie(id, movieData) {
    await delay(2000);
    const stored = localStorage.getItem('moviesDB');
    const movies = stored ? JSON.parse(stored) : [...moviesDB];

    const index = movies.findIndex((m) => m.id === parseInt(id));
    if (index === -1) {
      throw new Error('Movie not found');
    }

    movies[index] = { ...movies[index], ...movieData };
    localStorage.setItem('moviesDB', JSON.stringify(movies));
    return movies[index];
  },

  // DELETE movie
  async deleteMovie(id) {
    await delay(2000);
    const stored = localStorage.getItem('moviesDB');
    const movies = stored ? JSON.parse(stored) : [...moviesDB];

    const index = movies.findIndex((m) => m.id === parseInt(id));
    if (index === -1) {
      throw new Error('Movie not found');
    }

    movies.splice(index, 1);
    localStorage.setItem('moviesDB', JSON.stringify(movies));
    return { success: true };
  },

  // Search movies
  async searchMovies(query) {
    await delay(2000);
    const stored = localStorage.getItem('moviesDB');
    const movies = stored ? JSON.parse(stored) : moviesDB;

    if (!query) return movies;

    return movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.director.toLowerCase().includes(query.toLowerCase()) ||
        movie.genre.some((g) => g.toLowerCase().includes(query.toLowerCase()))
    );
  },
};