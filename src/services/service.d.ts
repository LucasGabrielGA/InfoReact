export interface Movie {
  videoUrl: string;
  id: number;
  title: string;
  year: number;
  genre: string[];
  director: string;
  rating: number;
  runtime: number;
  plot: string;
  poster: string;
  cast: string[];
}

export declare const movieService: {
  getAllMovies(): Promise<Movie[]>;
  getMovieById(id: number): Promise<Movie>;
  getMoviesByGenre(genre: string): Promise<Movie[]>;
  getMoviesByCast(castMember: string): Promise<Movie[]>;
  getGenres(): Promise<{ genre: string; movies: Movie[] }[]>;
  createMovie(movieData: Partial<Movie>): Promise<Movie>;
  updateMovie(id: number, movieData: Partial<Movie>): Promise<Movie>;
  deleteMovie(id: number): Promise<{ success: boolean }>;
  searchMovies(query: string): Promise<Movie[]>;
};
