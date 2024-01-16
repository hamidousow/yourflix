import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Movie } from '../../models/Movie';
import { BehaviorSubject, map, tap,  } from 'rxjs';

const BASE_URL: string = "http://localhost:8081/api"

@Injectable({
  providedIn: 'root',
})
export class MovieService {

  readonly movie = new BehaviorSubject<Movie>(new Movie())
  readonly movies = new BehaviorSubject<Movie[]>([])
  readonly favoriteMovies = new BehaviorSubject<Movie[]>([])
  private http = inject(HttpClient)

  fetchAll() {
    this.http
    .get<Movie[]>(`${BASE_URL}/film/all`)
    .pipe(map((values) => this.movies.next(values)))
    .subscribe();
  }

  create(data: any): Observable<any>{

    const formData: FormData = new FormData();
    formData.append('title', data.title)
    formData.append('description', data.description)
    formData.append('img', data.img)
    formData.append('actors', 'list d\'acteurs')
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data; boundary=-------------movieBoudnary12345'
    })}

    const res = this.http.post<any>("http://localhost:8081/api/film/create", formData)
    return res
  }

  search(args: string) {

    args = args.trim()
    const options = args ? {
      params: new HttpParams().set('title', args)
    } : {}

    this.http
    .get<any>(`${BASE_URL}/film/find`, options)
    .pipe(map((values) => this.movies.next(values)))
    .subscribe();
  }

  

  findById(id: string) {
    const options = id ? {
      params: new HttpParams().set('id', id)
    } : {}

    this.http
    .get<Movie>(`${BASE_URL}/film/findOne/`, options)
    .pipe(map((value) => this.movie.next(value)))
    .subscribe();
  }

  addMovieInFavorite(idMovie: string, idUser: string | null) {
    const options = idMovie && idUser ? {
      params: new HttpParams()
                    .set('idMovie', idMovie)
                    .set('idUser', idUser)
    } : {}

    this.http
    .get<any>(`${BASE_URL}/film/addMovieToFavoriteList`, options)
    .pipe(map(val => this.movie.next(val)))
    .subscribe();
  }

  getMoviesByUser(idUser: string | null) {
    const options = idUser ? {
      params: new HttpParams().set('idUser', idUser)
    } : {}

    this.http
    .get<Movie[]>(`${BASE_URL}/film/getMoviesByUser`, options)
    .pipe(map((movies) => this.favoriteMovies.next(movies)))
    .subscribe()
    
  }
}


