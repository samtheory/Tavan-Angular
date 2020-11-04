import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Off } from '../_models/off';

@Injectable({
  providedIn: 'root'
})
export class OffService {
  baseUrl = environment.apiUrl + 'off/';
  constructor(private http: HttpClient) { }

  getOffs(): Observable<Off[]>{
    return this.http.get<Off[]>(this.baseUrl);
  }

  getOff(id: number): Observable<Off>{
    return this.http.get<Off>(this.baseUrl + id);
  }

  getOffCode(code: string): Observable<Off>{
    return this.http.get<Off>(this.baseUrl + 'code/' + code);
  }

  createOff(off: Off): Observable<Off>{
    return this.http.post<Off>(this.baseUrl + 'create' , off);
  }

  updateOff(id: number , off: Off): Observable<Off>{
    return this.http.post<Off>(this.baseUrl + 'update/' + id , off);
  }

  deleteOff(id: number){
    return this.http.post(this.baseUrl + 'delete/' + id , {});
  }
}
