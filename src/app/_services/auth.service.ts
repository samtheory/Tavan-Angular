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
private currentUser = new ReplaySubject<User>(1);
currentUser$ = this.currentUser.asObservable();
paginatedResult: PaginatedResult<User[]> = new PaginatedResult<User[]>();
decodeToken: any;

login(model: any) {
  return this.http.post(this.baseUrl + 'login', model).pipe(
    map((response: any) => {
    const user = response;

    if (user) {
      localStorage.setItem('token', user.token);
      this.decodeToken = this.jwtHelper.decodeToken(user.token);
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
  return !this.jwtHelper.isTokenExpired(token);
}

logout(){
  localStorage.removeItem('user');
  this.currentUser.next(null);
}

updateProfile(user: FormData) {
  return this.http.post(this.baseUrl + 'update', user);
}

AdminRegister(user: FormData) {
  return this.http.post(this.baseUrl + 'adminregister', user);
}

deleteUser(id: number) {
  return this.http.post(this.baseUrl + 'delete/' + id , {});
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
