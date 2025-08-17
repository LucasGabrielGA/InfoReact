import { useMutation, useQueryClient } from '@tanstack/react-query';
import { movieService } from '../services/service';
import type { Movie } from '../types/movieTypes';

export function useUpdateMovie() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, movieData }: { id: number; movieData: Partial<Movie> }) =>
      movieService.updateMovie(id, movieData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['movies'] });
    },
  });
}