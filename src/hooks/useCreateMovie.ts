import { useMutation, useQueryClient } from "@tanstack/react-query";
import { movieService } from '../services/service';
import type { NewMovie } from "../types/movieTypes";

export function useCreateMovie(){
    const queryClient = useQueryClient();

    return useMutation({
        //Omit para crear una película sin ID porque getNextId del servicio se encarga de ello.
        mutationFn: (movieData: Omit<NewMovie, 'id'>) => movieService.createMovie(movieData),
        onSuccess: () => {
            //Esto tendría que actualizar la lista de películas
            queryClient.invalidateQueries({ queryKey: ['movies'] });
        },
    });
}