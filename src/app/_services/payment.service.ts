import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PaymentParams } from '../_models/paymentParams';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  baseUrl = environment.apiUrl + 'course/';
  constructor(private http: HttpClient) { }

  verifyPayment( paymentParam: any, courseId: number){
    return this.http.post(this.baseUrl + 'verify/' + courseId, paymentParam);
  }
}
