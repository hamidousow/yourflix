import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  signin(data: any): Observable<any> {

    const user = {
      mail: data.mail,
      password: data.password
    }
    
    const res = this.http.post("http://localhost:8081/api/client/signin", user)
    return res
  }

  create(data: any): Observable<any>{

    const formData: FormData = new FormData();
    formData.append('mail', data.mail)
    formData.append('firstname', data.firstname)
    formData.append('lastname', data.lastname)
    formData.append('password', data.password)
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data;'
    })}

    const res = this.http.post<any>("http://localhost:8081/api/film/create", formData)
    return res
  }
}
