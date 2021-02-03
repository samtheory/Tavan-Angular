import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Course } from '../_models/course';
import { Coursenamelist } from '../_models/coursenamelist';
import { PaginatedResult } from '../_models/pagination';
import { Session } from '../_models/session';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  baseUrl = environment.apiUrl + 'course/';
  courses: Course[];
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

  getsfCourses(page?: any , itemsPerPage?: any , userParams?: any): Observable<PaginatedResult<Course[]>>{
    let params = new HttpParams();

    if (page != null && itemsPerPage != null){
      params = params.append('pageNumber' , page);
      params = params.append('pageSize' , itemsPerPage);
     }
    if (userParams != null){
      if(userParams.name !== undefined ){
        params = params.append('name', userParams.name);
      }
      if(userParams.isActive !== undefined){
        params = params.append('isActive', userParams.isActive);
      }
      if(userParams.suggest !== undefined){
        params = params.append('suggest', userParams.suggest);
      }
      if(userParams.isNew !== undefined){
        params = params.append('isNew', userParams.isNew);
      }
      if(userParams.isfree !== undefined){
        params = params.append('isfree', userParams.isfree);
      }
      if(userParams.popular !== undefined){
        params = params.append('popular', userParams.popular);
      }
      if(userParams.categoryId !== undefined){
        params = params.append('categoryId', userParams.categoryId);
      }
       
     }
    return this.http.get<Course[]>(this.baseUrl + 'sfcourse', {observe: 'response', params}).pipe(
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
      if(userParams.isActive != null) {
        params = params.append('isActive', userParams.isActive);
      }
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
 getCoursesList(): Observable<Coursenamelist[]>{
  return this.http.get<Coursenamelist[]>(this.baseUrl);
}
 getMainCourse(id: number): Observable<Course>{
  return this.http.get<Course>(this.baseUrl + 'main/' + id);
}
gettheMainCourse(id: number): Observable<Course>{
  return this.http.get<Course>(this.baseUrl + 'themain/' + id);
}
 createCourse( pro: FormData){
   return this.http.post(this.baseUrl + 'create/', pro);
 }

 addCourseToUserAdmin(uid: number, courseId: number){
   return this.http.post(this.baseUrl + 'addcourseToUser/' + uid + '/' + courseId , {});
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

 addcourseToUser(id: number){
  return this.http.post(this.baseUrl + 'add/' + id , {});
 }



 // teacher category

 addTeacherToCourse(id: number, teacherId: number){
   return this.http.post(this.baseUrl + 'addTeacher/' + id + '/' + teacherId , {});
 }

 addCategoryToCourse(id: number, categoryId: number){
  return this.http.post(this.baseUrl + 'addCategory/' + id + '/' + categoryId , {});
}

removeCategoryofCourse(id: number , categoryId: number) {
  return this.http.post(this.baseUrl + 'removeCategory/' + id + '/' + categoryId , {});
}

removeTeacherofCourse(id: number , teacherId: number) {
  return this.http.post(this.baseUrl + 'removeTeacher/' + id + '/' + teacherId , {});
}


//session

addSession(session: any , id: number) {
  return this.http.post(this.baseUrl + 'addSession/' + id , session);
}

deleteSession(id: number){
  return this.http.post(this.baseUrl + 'deleteSession/' + id  , {});
}
 
}
