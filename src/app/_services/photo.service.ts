import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Photo } from '../_models/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  baseUrl = environment.apiUrl + 'photo/';
  constructor(private http: HttpClient) { }


  getPhotos(): Observable<Photo[]>{
    return this.http.get<Photo[]>(this.baseUrl);
  }

  getPhoto(id: number): Observable<Photo>{
    return this.http.get<Photo>(this.baseUrl + id);
  }

  createPhoto(mainPhoto: Photo): Observable<Photo>{
    return this.http.post<Photo>(this.baseUrl + 'create' , mainPhoto);
  }

  updatePhoto(id: number , mainPhoto: FormData): Observable<Photo>{
    return this.http.put<Photo>(this.baseUrl + 'update/' + id , mainPhoto);
  }

  deletePhoto(id: number){
    return this.http.put(this.baseUrl + 'delete/' + id , {});
  }
}
