import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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

  verifyPayment( paymentParam: any, courseId: number){
    return this.http.post(this.baseUrl + 'verify/' + courseId, paymentParam);
  }
}
