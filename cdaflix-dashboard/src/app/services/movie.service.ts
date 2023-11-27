import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root',
})
export class MovieService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    const res = this.http.get<any[]>("http://localhost:8081/api/film/all")
    return res
  }
}
