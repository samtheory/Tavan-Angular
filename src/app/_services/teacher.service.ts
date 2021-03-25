import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Teacher } from '../_models/teacher';
import { TeacherToList } from '../_models/teacherToList';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  baseUrl = environment.apiUrl + 'teacher/';
  constructor(private http: HttpClient) { }

  getTeachers(): Observable<TeacherToList[]>{
    return this.http.get<TeacherToList[]>(this.baseUrl);
  }

  getTeacher(id: number): Observable<Teacher>{
    return this.http.get<Teacher>(this.baseUrl + id);
  }

  getTeacherWithCourse(id: number): Observable<Teacher>{
    return this.http.get<Teacher>(this.baseUrl + 'getwithCourses/' + id);
  }

  createTeacher(teacher: FormData){
    return this.http.post(this.baseUrl + 'create' , teacher);
  }

  updateTeacher(id: number , teacher: FormData){
    return this.http.put(this.baseUrl + 'update/' + id , teacher);
  }

  createOrupdateTeacherSkyUser(id: number){
    return this.http.post(this.baseUrl + 'cuskyteacher/' + id , {});
  }

  deleteTeacher(id: number){
    return this.http.post(this.baseUrl + 'delete/' + id, {});
  }

}
