import { Injectable, Signal, inject, signal } from '@angular/core';
import { tmdbUtil } from '../../utils/tmdb-util';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, first, map, startWith, tap } from 'rxjs';
import { TmdbMovie } from '../../models/TmdbMovie';
import { TmdbMovieDetails } from '../../models/TmdbMovieDetails';
import { toSignal } from '@angular/core/rxjs-interop';

const tmdbAttribution = "This product uses the TMDB API but is not endorsed or certified by TMDB.";

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  

  http = inject(HttpClient)

  private _popularMovies: BehaviorSubject<any> = new BehaviorSubject(null);
  readonly popularMovies$: Observable<TmdbMovie[]> = this._popularMovies.asObservable();

  private _topRatedMovies: BehaviorSubject<any> = new BehaviorSubject(null);
  readonly topRatedMovies$: Observable<TmdbMovie[]> = this._topRatedMovies.asObservable();

  private _upcomingMovies: BehaviorSubject<any> = new BehaviorSubject(null);
  readonly upcomingMovies$: Observable<TmdbMovie[]> = this._upcomingMovies.asObservable();

  private _movieDetails: BehaviorSubject<any> = new BehaviorSubject(null);
  readonly movieDetails$: Signal<TmdbMovieDetails | null>  = toSignal<TmdbMovieDetails>(this._movieDetails.asObservable(), {initialValue: null});

  private _movieProviders: BehaviorSubject<any> = new BehaviorSubject(null);
  readonly movieProviders$ = toSignal<any[]>(this._movieProviders.asObservable(), {initialValue: null});

  private _resultsSearchMovies: BehaviorSubject<any> = new BehaviorSubject(null);
  readonly resultsSearchMovies$ = toSignal<any[]>(this._resultsSearchMovies.asObservable(), {initialValue: null});


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
        this._popularMovies.next(v.results)        
      }
      )
    )
    .subscribe()
  }

  getTopRatedMovies() {    
    this.http
    .get<{ results : TmdbMovie[]}>(`${tmdbUtil.baseUrl}/movie/top_rated`, tmdbUtil.options)
    .pipe(
      map((v) => 
      {
        this._topRatedMovies.next(v.results)        
      }
      )
    )
    .subscribe()
  }

  getUpcomingMovies() {    
    this.http
    .get<{ results : TmdbMovie[]}>(`${tmdbUtil.baseUrl}/movie/upcoming`, tmdbUtil.options)
    .pipe(
      map((v) => 
      {
        this._upcomingMovies.next(v.results)        
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
        
        /** return an iterator */
        const r: any = {
          *[Symbol.iterator]() {
            yield v.results;
          }
        }
        const res = [...r]        
        return res
        
      }),
      tap((r) => {
        
        Object.keys(r[0]).map(l => {
          if(l == language) {
            const iterableObj = {
              *[Symbol.iterator]() {
                yield r[0][l];
              }
            }
            this._movieProviders.next([...iterableObj])
            console.log(r[0][l]);
          }          
        })
      })
    )
    .subscribe()
  }

  search(query: string) {

    const url = "https://api.themoviedb.org/3/search/movie"

    query = query.trim()

    const options = query ? {
      params: new HttpParams().set('query', query),
      ...tmdbUtil.options   
    } : {}

    this.http
    .get<{ results : []}>(`${tmdbUtil.baseUrl}/search/movie`, options)
    .pipe(map((values) => {
      this._resultsSearchMovies.next(values.results)      
    }))
    .subscribe();
  }
}
