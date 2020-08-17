import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  url = "http://swapi.dev/api/people/";

  constructor(private http: HttpClient) { }

  getPeoples():Observable<any> {
    return this.http.get<any>(this.url);
  }
}
