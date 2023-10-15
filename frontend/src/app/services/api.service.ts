import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://dev12.elearning-cctachilquinta.com/home/C013_BNUP/Backend/wolvesHadesServer/RedirectorRequest.php?path=';
  constructor(private http: HttpClient) { }
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  arrayLessonsId = { "lesson1": { "view1": 571, "view2": 572, "view3": 573, "view4": 574, "view5": 575 }, "lesson2": { "view1": 576, "view2": 577, "view3": 578, "view4": 579, "view5": 580, "view6": 581 }, "lesson3": { "view1": 582, "view2": 583 }, "lesson4": { "view1": 584, "view2": 585, "view3": 586, "view4": 587 } }
  listUser() { return this.http.get<any>(this.apiUrl + 'user/getUserInfo'); }
}