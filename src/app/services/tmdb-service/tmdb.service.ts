import { Injectable, Signal, inject, signal } from '@angular/core';
import { tmdbUtil } from '../../utils/tmdb-util';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, combineLatest, combineLatestWith, concat, concatAll, first, forkJoin, from, map, merge, mergeMap, scan, startWith, switchMap, tap } from 'rxjs';
import { TmdbMovie } from '../../models/TmdbMovie';
import { TmdbMovieDetails } from '../../models/TmdbMovieDetails';
import { toSignal } from '@angular/core/rxjs-interop';
import { ResultSearch } from '../../models/ResultSearch';

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

  private _nowPlayingMovies: BehaviorSubject<any> = new BehaviorSubject(null);
  readonly nowPlayingMovies$: Signal<TmdbMovie[] | null> = toSignal<TmdbMovie[]>(this._nowPlayingMovies.asObservable(), {requireSync: true});

  private _moviesSuggestions: BehaviorSubject<any> = new BehaviorSubject(null);
  readonly moviesSuggestions$: Signal<TmdbMovie[] | null> = toSignal<TmdbMovie[]>(this._moviesSuggestions.asObservable(), {requireSync: true});

  private readonly _movieDetails: BehaviorSubject<any> = new BehaviorSubject(null);
  readonly movieDetails$: Signal<TmdbMovieDetails>  = toSignal<TmdbMovieDetails>(this._movieDetails.asObservable(), {requireSync: true});

  private _movieProviders: BehaviorSubject<any> = new BehaviorSubject(null);
  readonly movieProviders$ = toSignal<any[]>(this._movieProviders.asObservable(), {initialValue: null});

  private _currentResults$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public readonly searchResults = toSignal<TmdbMovie[]>(this._currentResults$, {requireSync: true});

  private _totalResults$: BehaviorSubject<any> = new BehaviorSubject<any>(0);
  public readonly totalResults = toSignal<number>(this._totalResults$, {requireSync: true});

  private readonly _currentPage$ : BehaviorSubject<number> = new BehaviorSubject(1);
  public currentPage = toSignal<number>(this._currentPage$, { requireSync: true});

  private readonly _totalPages$ : BehaviorSubject<number> = new BehaviorSubject(1);
  public totalPages = toSignal<number>(this._totalPages$, { requireSync: true});

  
  async findById(id: number) {
    const result = await fetch(`${tmdbUtil.baseUrl}/movie/${id}`, tmdbUtil.options)
    .then((v) =>{ 
      return v.json()
    })
    .then((v) => { 
      this._movieDetails.next(v);        
      return v;
    })
    .catch((e) => console.log(e));
    return result;
  }

  getNowPlayingMovies() {
    this.http
    .get<{ results : TmdbMovie[]}>(`${tmdbUtil.baseUrl}/movie/now_playing`, tmdbUtil.options)
    .pipe(
      map((v) => 
        {
          this._nowPlayingMovies.next(v.results)        
        }
      )
    )
    .subscribe()
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
  getMovieProviders(id: number | null, language: string) {

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
        
      }),
      tap((r) => {
        
        Object.keys(r[0]).map(l => {
          if(l == language) {
            const iterableObj = {
              *[Symbol.iterator]() {
                yield r[0][l];
              }
            }
            this._movieProviders.next([...iterableObj]);            
          }          
        })
      })
    )
    .subscribe()
  }

  searchMovie(query: string, page: number) {
    query = query.trim()   
    
    let options = query ? {
      params: new HttpParams().set('query', query)
                              .set('page', page? page : ''),
      ...tmdbUtil.options   
    } : {}

    this.http
    .get<ResultSearch>(`${tmdbUtil.baseUrl}/search/movie`, options)
    .pipe(

      map((values) => {
        this._currentPage$.next(values.page);
        this._totalPages$.next(values.total_pages);      
        this._currentResults$.next(values.results);  
        this._totalResults$.next(values.total_results);           
        return values;   
      }),  

      scan((accumulator: any, values) => {   
        return [...accumulator, ...values.results]
      })  
    )
    .subscribe(val => console.log(val));
  }


  loadNextPage(query: string) {
    if(this.currentPage() < this.totalPages()) {      
      this._currentPage$.next(this.currentPage() + 1);
      this.searchMovie(query, this.currentPage());
    }   
  }

  loadPreviousPage(query: string) { 
    this._currentPage$.next(this.currentPage() - 1);
    this.searchMovie(query, this.currentPage());
  }

  getMovieSuggestions(id: number) {
    this.http
    .get<{ results : {}}>(`https://api.themoviedb.org/3/movie/${id}/recommendations`, tmdbUtil.options)
    .pipe(
      map((v) => {
        const iterableObj = {
          *[Symbol.iterator]() {
            yield v.results
          }
        }
        this._moviesSuggestions.next([...iterableObj][0])   
      })
    )
    .subscribe();
  }
}
