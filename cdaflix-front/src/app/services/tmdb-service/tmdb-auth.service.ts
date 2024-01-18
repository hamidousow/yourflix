import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';

const fetch = require('node-fetch');
const url = 'https://api.themoviedb.org/3/authentication';
const bearer_token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjgwZWE4ZjMzOWEwMzM0ZmQ1OTEzZTA3MWRmMzgwNiIsInN1YiI6IjY1YThlYTJhN2QyYmMxMDEzNmVhNjdmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J-mxxHOyyCMy-BP3Fz2wHmnVYQSa-mw9bakQg82lOoY'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: bearer_token
  }
};

@Injectable({
  providedIn: 'root'
})
export class TmdbAuthService {

  http = inject(HttpClient)

  constructor() { }

  readonly res = new BehaviorSubject({})

  authentication() {
    this.http
    .get(url, options)
    .pipe(tap((v) => this.res.next(v)))
    .subscribe();
  }  
}
