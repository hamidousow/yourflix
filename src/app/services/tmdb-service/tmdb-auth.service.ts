import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber, forkJoin, map, tap } from 'rxjs';
import { tmdbUtil } from '../../utils/tmdb-util';

const url = 'https://api.themoviedb.org/3/authentication';
const bearer_token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjgwZWE4ZjMzOWEwMzM0ZmQ1OTEzZTA3MWRmMzgwNiIsInN1YiI6IjY1YThlYTJhN2QyYmMxMDEzNmVhNjdmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J-mxxHOyyCMy-BP3Fz2wHmnVYQSa-mw9bakQg82lOoY'


@Injectable({
  providedIn: 'root'
})
export class TmdbAuthService {

  http = inject(HttpClient)

  readonly res = new BehaviorSubject({});
  //readonly _token : BehaviorSubject<string> = new BehaviorSubject('');
  public token$ : Observable<any> = this.reqToken()
  

  authentication() {
    this.http
    .get(url, tmdbUtil.options)
    .pipe(tap((v) => this.res.next(v)))
    .subscribe();
  }  

  reqToken() {
    const res = this.http
    .get<{ request_token: string }>(`https://api.themoviedb.org/3/authentication/token/new`, tmdbUtil.options)
    .pipe(map((v) => v.request_token ))
    return res
    
  }  

  async login(token?: string, data?: any) {  

    this.token$.subscribe({
      next: (v) => {
        console.log(v);
        console.log(this.token$);
        
      },
      error: (e) => console.log(e)      
    })

    const t = new Observable((sub) => {
      sub.next('ta mere')
    })

    

    const options = {
      method: 'GET',
      headers: {
          accept: 'application/json',
          Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjgwZWE4ZjMzOWEwMzM0ZmQ1OTEzZTA3MWRmMzgwNiIsInN1YiI6IjY1YThlYTJhN2QyYmMxMDEzNmVhNjdmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J-mxxHOyyCMy-BP3Fz2wHmnVYQSa-mw9bakQg82lOoY'
      },
    }

    // this.http
    // .get(`https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:4200/cdaflix`, options)
    // .pipe(tap((v) => this.res.next(v)))
    // .subscribe();
  }
    
}
