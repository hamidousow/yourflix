import { Backdrop } from "./Backdrop";

export interface TmdbMovieDetails {

    // id: number;
    // imdb_id: string;
    // original_title: string;
    // popularity: number;
    // poster_path: string;
    // release_date: string;
    // revenue: number;
    // runtime: number;
    // status: string;
    // tagline: string;
    // title: string;
    // video: boolean;
    // vote_average:number;
    // vote_count: number;
    // overview: string;
    // backdrop: Backdrop[];

    adult: false,
    backdrop_path: string,
    belongs_to_collection: null,
    budget: 0,
    genres: [
        {
        id: 80,
        name: string
        }
    ],
    homepage: string,
    id: 5632,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: 2.272,
    poster_path: string,
    production_companies: [
        {
        id: 3602,
        logo_path: null,
        name: string,
        origin_country: string
        }
    ],
    production_countries: [
        {
        iso_3166_1: string,
        name: string
        }
    ],
    release_date: string,
    revenue: 0,
    runtime: 93,
    spoken_languages: [
        {
        english_name: string,
        iso_639_1: string,
        name: string
        }
    ],
    status: string,
    tagline: string,
    title: string,
    video: false,
    vote_average: 5.147,
    vote_count: 17

}