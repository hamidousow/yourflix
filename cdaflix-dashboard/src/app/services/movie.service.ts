import { HttpClient, HttpHeaders } from '@angular/common/http';
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
}
