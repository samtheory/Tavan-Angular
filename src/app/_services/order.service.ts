import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Order } from '../_models/order';
import { ExcelResult, PaginatedResult } from '../_models/pagination';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseUrl = environment.apiUrl + 'order/';
  constructor(private http: HttpClient) { }

  paginatedResult: PaginatedResult<Order[]> = new PaginatedResult<Order[]>();
  excelResult: ExcelResult<Order[]> = new ExcelResult<Order[]>();

  getOrders(page?: any , itemsPerPage?: any , userParams?: any): Observable<PaginatedResult<Order[]>>{
    let params = new HttpParams();

    if (page != null && itemsPerPage != null){
      params = params.append('pageNumber' , page);
      params = params.append('pageSize' , itemsPerPage);
     }
    if (userParams != null){
       params = params.append('productId', userParams.productId);
       if(userParams.isActive != null)
       {
        params = params.append('isActive', userParams.isActive);
       }
     }
    return this.http.get<Order[]>(this.baseUrl, {observe: 'response', params}).pipe(
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



  getExcelOrders( userParams?: any) {
    let params = new HttpParams();
    if (userParams != null){
       params = params.append('productId', userParams.productId);
       params = params.append('saveUrl' , userParams.saveUrl);
       if(userParams.isActive != null)
       {
        params = params.append('isActive', userParams.isActive);
       }
     }
    return this.http.get(this.baseUrl + "getall",  {
    responseType: 'arraybuffer',params: params});
  }
}
