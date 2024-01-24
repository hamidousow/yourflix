import { Injectable, inject, signal } from '@angular/core';
import { tmdbUtil } from '../../utils/tmdb-util';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, first, map, startWith, tap } from 'rxjs';
import { Movie } from '../../models/Movie';
import { TmdbMovie } from '../../models/TmdbMovie';
import { start } from '@popperjs/core';

const tmdbAttribution = "This product uses the TMDB API but is not endorsed or certified by TMDB.";

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  

  http = inject(HttpClient)
  
  _movies: BehaviorSubject<any> = new BehaviorSubject(null);
  readonly movies$: Observable<TmdbMovie[]> = this._movies.asObservable();

  readonly images = signal<[]>([]);

  movie = signal<any>(null)

  getOne(id: string) {
    this.http
    .get(`${tmdbUtil.baseUrl}/movie/${id}`)
    .pipe(map((v) => this.movie.set(v)))
    .subscribe();
  }

  getPopularMovies() {
    
    this.http
    .get<{ results : TmdbMovie[]}>(`${tmdbUtil.baseUrl}/movie/popular`, tmdbUtil.options)
    .pipe(
      map((v) => this._movies.next(v.results))
    )
    .subscribe()
    
  }

  getImage(id: string) {
    this.http
    .get<{ backdrops : []}>(`${tmdbUtil.baseUrl}/movie/${id}/images`, tmdbUtil.options)
    .pipe(tap((v) => {
      this.images.set(v.backdrops)
    }))
    .subscribe();
  }


}
