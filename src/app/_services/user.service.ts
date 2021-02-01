import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalVar } from '../_models/localVar';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl + 'localVar/';

  constructor(private http: HttpClient) { }

  getLocalVar(): Observable<LocalVar>{
    return this.http.get<LocalVar>(this.baseUrl);
  }
}
