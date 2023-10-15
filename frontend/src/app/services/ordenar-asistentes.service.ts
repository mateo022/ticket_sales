import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class OrdenarAsistentesService {

  private apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getModuleCourse() {
    return this.http.get<any>(this.apiUrl + 'ordenarAsistentes');
  }

}
