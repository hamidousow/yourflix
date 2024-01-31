import { Injectable, Signal, inject, signal } from '@angular/core';
import { tmdbUtil } from '../../utils/tmdb-util';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, first, map, startWith, tap } from 'rxjs';
import { Movie } from '../../models/Movie';
import { TmdbMovie } from '../../models/TmdbMovie';
import { start } from '@popperjs/core';
import { TmdbMovieDetails } from '../../models/TmdbMovieDetails';
import { MovieProvider } from '../../models/MovieProvider';
import { toSignal } from '@angular/core/rxjs-interop';

const tmdbAttribution = "This product uses the TMDB API but is not endorsed or certified by TMDB.";

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  

  http = inject(HttpClient)
  
  _movies: BehaviorSubject<any> = new BehaviorSubject(null);
  readonly movies$: Observable<TmdbMovie[]> = this._movies.asObservable();

  _movieDetails: BehaviorSubject<any> = new BehaviorSubject(null);
  readonly movieDetails: Signal<TmdbMovieDetails | null>  = toSignal<TmdbMovieDetails>(this._movies.asObservable(), {initialValue: null});

  _movieProviders: BehaviorSubject<any> = new BehaviorSubject(null);
  readonly movieProviders: Signal<MovieProvider>  = toSignal<any>(this._movieProviders.asObservable(), {initialValue: null});

  //readonly images = signal<[]>([]);


  getOne(id: string) {
    this.http
    .get<TmdbMovieDetails>(`${tmdbUtil.baseUrl}/movie/${id}`)
    .pipe(map((v) => this._movieDetails.next(v)))
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

  // getImage(id: string) {
  //   this.http
  //   .get<{ backdrops : []}>(`${tmdbUtil.baseUrl}/movie/${id}/images`, tmdbUtil.options)
  //   .pipe(tap((v) => {
  //     this.images.set(v.backdrops)
  //   }))
  //   .subscribe();
  // }

  /**
   * get the list of streaming providers for a movie
   * @param id of the film
   */
  getMovieProviders(id: string) {
    this.http
    .get<{results : any}>(`${tmdbUtil.baseUrl}/movie/${id}/watch/providers`)
    .pipe(map((v) => this._movieProviders.next(v.results)))
    .subscribe();
  }


}
