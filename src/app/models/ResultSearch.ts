import { TmdbMovie } from "./TmdbMovie";

export interface ResultSearch {
    page:number,
    results : TmdbMovie[], 
    total_pages: number, 
    total_results: number
}