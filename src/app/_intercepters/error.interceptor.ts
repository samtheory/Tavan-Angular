import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';
import { ErrorStateMatcher } from '@angular/material/core';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router , private toastr: ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(error => {
        if(error) {
          switch(error.status) {
            case 400:
          if(error.error.errors) {
            const modalStateErrors = [];
            let modalState = '';
            for(const key in error.error.errors) {
              if(error.error.errors[key]) {
                modalState += error.error.errors[key] + '\n';
                modalStateErrors.push(error.error.errors[key]);
              }
            }
            throw modalState;
          } else {
            this.toastr.error(error.error, error.status);
          }
            break;
            case 401:
              this.toastr.error('شما مجاز نمی باشید نام کاربری یا رمزعبور اشتباه است', error.status);
              break;
            case 403:
              this.toastr.error('دسترسی برای شما وجود ندارد', error.status);
              break;
            case 404:
              this.toastr.error('این صفحه موجود نیست', error.status);
              break;
            case 500:
              this.toastr.error('خطای سرور', error.status);
              break;


            default:
              this.toastr.error('یه مشکلی وجود دارد');
              console.log(error);
            break;
          }
        }
        return throwError;
      })
    );
  }
}
