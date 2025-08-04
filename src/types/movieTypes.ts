export interface NewMovie {
    title: string;
    plot: string;
    director: string;
    genre: string[];
    runtime: number;
    poster: string;
    videoUrl: string;
    cast: string[];
}

export type Movie = NewMovie & { id: number };