import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Course } from '../_models/course';
import { PaginatedResult } from '../_models/pagination';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  baseUrl = environment.apiUrl + 'course/';
  constructor(private http: HttpClient) { }
  paginatedResult: PaginatedResult<Course[]> = new PaginatedResult<Course[]>();

  getCourses(page?: any , itemsPerPage?: any , userParams?: any): Observable<PaginatedResult<Course[]>>{
    let params = new HttpParams();
 
    if (page != null && itemsPerPage != null){
      params = params.append('pageNumber' , page);
      params = params.append('pageSize' , itemsPerPage);
     }
    if (userParams != null){
       params = params.append('isActive', userParams.isActive);
     }
    return this.http.get<Course[]>(this.baseUrl + 'some', {observe: 'response', params}).pipe(
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

  getUserCourses(page?: any , itemsPerPage?: any , userParams?: any): Observable<PaginatedResult<Course[]>>{
    let params = new HttpParams();
 
    if (page != null && itemsPerPage != null){
      params = params.append('pageNumber' , page);
      params = params.append('pageSize' , itemsPerPage);
     }
    if (userParams != null){
       params = params.append('isActive', userParams.isActive);
     }
    return this.http.get<Course[]>(this.baseUrl + 'usercourses', {observe: 'response', params}).pipe(
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
 
  getCourse(id: number): Observable<Course>{
   return this.http.get<Course>(this.baseUrl + id);
 }
 createCourse( pro: FormData){
   return this.http.post(this.baseUrl + 'create/', pro);
 }
 
 updateCourse(id: number, pro: FormData){
   return this.http.put(this.baseUrl + 'update/' + id, pro);
 }
//  getMainPhoto(userId: number){
//    return this.http.get(this.baseUrl + userId + '/getMain' );
//  }
//  deletePhoto(id: number){
//    return this.http.post(this.baseUrl + 'delete/' + id , {});
//  }
 
 deleteCourse(id: number){
   return this.http.post(this.baseUrl + 'delete/' + id , {});
 }
 
}
