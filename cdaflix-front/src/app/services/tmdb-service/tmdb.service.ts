import { Injectable, inject, signal } from '@angular/core';
import { tmdbUtil } from '../../utils/tmdb-util';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, map, tap } from 'rxjs';
import { Movie } from '../../models/Movie';
import { TmdbMovie } from '../../models/TmdbMovie';

const tmdbAttribution = "This product uses the TMDB API but is not endorsed or certified by TMDB.";

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  http = inject(HttpClient)
  
  readonly movies = new BehaviorSubject<TmdbMovie[]>([]);

  movie = signal<any>(new TmdbMovie())

  getOne(id: string) {
    this.http
    .get(`${tmdbUtil.baseUrl}/movie/${id}`)
    .pipe(map((v) => this.movie.set(v)))
    .subscribe();
  }

  async getPopularMovies() {
    this.http
    .get<{ results : TmdbMovie[]}>(`${tmdbUtil.baseUrl}/movie/popular`, tmdbUtil.options)
    .pipe(tap((v) => {
      this.movies.next(v.results)
    }))
    .subscribe();
  }
}
