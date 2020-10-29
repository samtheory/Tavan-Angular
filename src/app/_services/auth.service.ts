import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PaginatedResult } from '../_models/pagination';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private http: HttpClient) { }
jwtHelper = new JwtHelperService();
baseUrl = environment.apiUrl +   'auth/';
decodeToken: any;
private currentUserSource = new ReplaySubject<User>(1);
currentUser$ = this.currentUserSource.asObservable();
paginatedResult: PaginatedResult<User[]> = new PaginatedResult<User[]>();


login(model: any) {
  return this.http.post(this.baseUrl + 'login', model).pipe(
    map((response: any) => {
    const user = response;

    if (user) {
      localStorage.setItem('token', user.token);
      localStorage.setItem('token', user.user);
      this.currentUserSource.next(user);
      this.decodeToken = this.jwtHelper.decodeToken(user.token);
      console.log(this.decodeToken);
    }
  })
  );
}
register(model: any) {
  return this.http.post(this.baseUrl + 'register', model);
}
logedIn(){
  const token = localStorage.getItem('token');
  return !this.jwtHelper.isTokenExpired(token);
}
isActive(){
  const user = localStorage.getItem('user');
}

logout(){
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  this.currentUserSource.next(null);
}

updateProfile(user: FormData) {
  return this.http.post(this.baseUrl + 'update', user);
}
updateUserAdmin(user: FormData, id: number) {
  return this.http.post(this.baseUrl + 'update/' + id, user);
}


AdminRegister(user: FormData) {
  return this.http.post(this.baseUrl + 'adminregister', user);
}

deleteUser(id: number) {
  return this.http.post(this.baseUrl + 'delete/' + id , {});
}

getUser(id: number): Observable<User>{
  return this.http.get<User>(this.baseUrl + id);
}

getUsers(page?: any , itemsPerPage?: any , userParams?: any): Observable<PaginatedResult<User[]>>{
  let params = new HttpParams();

  if (page != null && itemsPerPage != null){
    params = params.append('pageNumber' , page);
    params = params.append('pageSize' , itemsPerPage);
   }
  return this.http.get<User[]>(this.baseUrl, {observe: 'response', params}).pipe(
    map(response => {
      this.paginatedResult.result = response.body;
      console.log(response.headers.get('Pagination'));
      if(response.headers.get('Pagination') != null){
        this.paginatedResult.pag = JSON.parse(response.headers.get('Pagination'));
      }
      return this.paginatedResult;
    })
  );
}

}
