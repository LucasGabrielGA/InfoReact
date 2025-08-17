import { useQuery } from "@tanstack/react-query";
import { movieService } from "../services/service";
import type { Movie } from "../types/movieTypes";

export const useMovieById = (id: number) => {
    return useQuery<Movie>({
        queryKey: ['movie', id],
        queryFn: () => movieService.getMovieById(id),
        enabled: !!id, //Esto en teoría haría que se ejecute la query sólo si hay id
    });
};