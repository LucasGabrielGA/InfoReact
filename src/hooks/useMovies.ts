import { useQuery } from "@tanstack/react-query";
import { movieService } from "../services/service.js";
import type { Movie } from "../types/movieTypes.js";

export const useMovies = () => {
    return useQuery<Movie[]> ({
        queryKey: ['movies'],
        queryFn: () => movieService.getAllMovies(),
        // FORZAR ERROR MANUALMENTE
        //queryFn: async () => {throw new Error('Error forzado para testeo');}
    });
};