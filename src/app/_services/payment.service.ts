import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../_models/order';
import { Paylink } from '../_models/paylink';
import { PaymentParams } from '../_models/paymentParams';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  baseUrl = environment.apiUrl + 'course/';
  constructor(private http: HttpClient) { }

  buyCourse( offParams: any, courseId: number): Observable<Paylink>{
    return this.http.post<Paylink>(this.baseUrl + 'buy/' + courseId, offParams);
  }

  verifyPayment( paymentParam: any, courseId: number): Observable<Order>{
    return this.http.post<Order>(this.baseUrl + 'verify/' + courseId, paymentParam);
  }
}
