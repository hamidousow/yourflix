import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, forkJoin, map, tap } from 'rxjs';
import { tmdbUtil } from '../../utils/tmdb-util';

const url = 'https://api.themoviedb.org/3/authentication';
const bearer_token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjgwZWE4ZjMzOWEwMzM0ZmQ1OTEzZTA3MWRmMzgwNiIsInN1YiI6IjY1YThlYTJhN2QyYmMxMDEzNmVhNjdmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J-mxxHOyyCMy-BP3Fz2wHmnVYQSa-mw9bakQg82lOoY'


@Injectable({
  providedIn: 'root'
})
export class TmdbAuthService {

  http = inject(HttpClient)

  readonly res = new BehaviorSubject({})
  readonly _token = new BehaviorSubject('')
  public token$ = this._token.asObservable().pipe((v) => v)

  authentication() {
    this.http
    .get(url, tmdbUtil.options)
    .pipe(tap((v) => this.res.next(v)))
    .subscribe();
  }  

  reqToken() {
    this.http
    .get<{ request_token: string }>(`https://api.themoviedb.org/3/authentication/token/new`, tmdbUtil.options)
    .pipe(tap((v) => {
      this._token.next(v.request_token)
      // console.log('mon token : ' + this._token);      
    }))
    .subscribe();
  }

  login(data?: any) {  

    const options = {
      method: 'GET',
      headers: {
          accept: 'application/json',
          Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjgwZWE4ZjMzOWEwMzM0ZmQ1OTEzZTA3MWRmMzgwNiIsInN1YiI6IjY1YThlYTJhN2QyYmMxMDEzNmVhNjdmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J-mxxHOyyCMy-BP3Fz2wHmnVYQSa-mw9bakQg82lOoY'
      },
    }
    
    this.reqToken()

    this.http
    .get(`https://www.themoviedb.org/authenticate/${this.token$}?redirect_to=http://localhost:4200/cdaflix`, options)
    .pipe(tap((v) => this.res.next(v)))
    .subscribe();
  }
    
}
