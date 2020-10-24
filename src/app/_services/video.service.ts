import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Video } from '../_models/video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  baseUrl = environment.apiUrl + 'video/';
  constructor(private http: HttpClient) { }

  createVideo(id: number ,pro: Video){
    return this.http.post(this.baseUrl + 'create/' + id, pro);
  }

  
  deleteVideo(id: number){
    return this.http.post(this.baseUrl + 'delete/' + id , {});
  }

}
