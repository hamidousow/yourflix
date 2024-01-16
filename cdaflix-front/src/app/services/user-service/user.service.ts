import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { Movie } from '../../models/Movie';
import { User } from '../../models/User';


const BASE_URL: string = "http://localhost:8081/api";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient)

  readonly favoriteMovies = new Subject<Movie[]>();
  readonly userLogged = new Observable<User>();

  login(data: any) {

    const user = {
      mail: data.mail,
      password: data.password
    }
    
    this.http
    .post("http://localhost:8081/api/client/signin", user)
    .subscribe();
    
  }

  create(data: any) {

    const formData: FormData = new FormData();
    formData.append('mail', data.mail)
    formData.append('firstname', data.firstname)
    formData.append('lastname', data.lastname)
    formData.append('password', data.password)
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data;'
    })}

    this.http
    .post<any>("http://localhost:8081/api/film/create", formData)
    .subscribe();
  
  }

  // getUserMoviesList(idUser: string | null) {
  //   const options = idUser ? {
  //     params: new HttpParams().set('idUser', idUser)
  //   } : {}

  //   this.http
  //   .get<Movie[]>(`${BASE_URL}/film/getMoviesByUser`, options)
  //   .pipe(map((movies) => this.favoriteMovies.next(movies)))
  //   .subscribe()
    
  // }
}
