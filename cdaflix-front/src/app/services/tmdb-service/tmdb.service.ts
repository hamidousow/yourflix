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
import { Provider } from '../../models/Provider';
import { MediaStreamingOptions } from '../../models/MovieStreamingOptions';

const tmdbAttribution = "This product uses the TMDB API but is not endorsed or certified by TMDB.";

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  

  http = inject(HttpClient)
  
  _movies: BehaviorSubject<any> = new BehaviorSubject(null);
  readonly movies$: Observable<TmdbMovie[]> = this._movies.asObservable();

  _movieDetails: BehaviorSubject<any> = new BehaviorSubject(null);
  readonly movieDetails$: Signal<TmdbMovieDetails | null>  = toSignal<TmdbMovieDetails>(this._movieDetails.asObservable(), {initialValue: null});

  _movieProviders: BehaviorSubject<any> = new BehaviorSubject(null);
  readonly movieProviders$ = toSignal<any[]>(this._movieProviders.asObservable(), {initialValue: null});


  getOne(id: string) {
    this.http
    .get<TmdbMovieDetails>(`${tmdbUtil.baseUrl}/movie/${id}`)
    .pipe(map((v) =>{ 
      this._movieDetails.next(v) 
    }))
    .subscribe();
  }

  getPopularMovies() {
    
    this.http
    .get<{ results : TmdbMovie[]}>(`${tmdbUtil.baseUrl}/movie/popular`, tmdbUtil.options)
    .pipe(
      map((v) => 
      {
        this._movies.next(v.results)        
      }
      )
    )
    .subscribe()
    
  }

  /**
   * get the list of streaming providers for a movie
   * @param id of the film
   */
  getMovieProviders(id: number | null) {

    let language = "CA"
    this.http
    .get<{ results : {}}>(`${tmdbUtil.baseUrl}/movie/${id}/watch/providers`, tmdbUtil.options)
    .pipe(
      map((v) => {
        
        const r: any = {
          *[Symbol.iterator]() {
            yield v.results;
          }
        }
        const res = [...r]
        return res
        
      }), tap((r) => {
        this._movieProviders.next(Object.keys(r[0]).map(p => r[0][p]))
        Object.keys(r[0]).map(p => console.log(r[0][p]))
      })
    )
    .subscribe()
  }
}
