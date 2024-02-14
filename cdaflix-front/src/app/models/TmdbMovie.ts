import { Backdrop } from "./Backdrop";

export interface TmdbMovie {

    id: number;
    adult: boolean;
    genre_ids: [];
    original_title: string;
    original_language: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average:number;
    vote_count: number;
    overview: string;
    backdrop: Backdrop[];

}