import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
baseUrl = environment.apiUrl +   'auth/';
private currentUser = new ReplaySubject<User>(1);
currentUser$ = this.currentUser.asObservable();
decodeToken: any;

login(model: any) {
  return this.http.post(this.baseUrl + 'login', model).pipe(
    map((response: any) => {
    const user = response;

    if (user) {
      localStorage.setItem('token', user.token);
      localStorage.setItem('user', JSON.stringify(user));
      this.currentUser.next(user);
      console.log(this.decodeToken);
    }
  })
  );
}

setCurrentUser(user: User)
{
  this.currentUser.next(user);
}
register(model: any) {
  return this.http.post(this.baseUrl + 'register', model);
}
logedIn(){
  const token = localStorage.getItem('token');
}

logout(){
  localStorage.removeItem('user');
  this.currentUser.next(null);
}
}
