import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  public url = 'http://localhost:5000/order/getall?productId=&saveUrl=fvdvdfv&isActive=';

    constructor(private http: HttpClient) {
        // nothing to do
    }

    download(): any {
        return  this.http.get(environment.apiUrl + "getall",{
          responseType: 'blob'} 
         )
    }
}
