import { useQuery } from '@tanstack/react-query';
import { movieService } from '../services/service';
import { type Movie } from '../types/movieTypes';

export const useMoviesByGenre = (genre: string) => {
  return useQuery<Movie[]>({
    queryKey: ['moviesByGenre', genre],
    queryFn: () => movieService.getMoviesByGenre(genre),
    enabled: !!genre, // Esto solo ejecuta la query si genre tiene valor
  });
};