import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Teacher } from '../_models/teacher';
import { TeacherToList } from '../_models/teacherToList';
import { TeacherService } from '../_services/teacher.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherListResolver implements Resolve<TeacherToList[]> {
  constructor(private teacherService: TeacherService, private router: Router, private toastr: ToastrService){}
  resolve(route: ActivatedRouteSnapshot): Observable<TeacherToList[]> {
    return this.teacherService.getTeachers().pipe(
      catchError(error => {
          this.toastr.error('مشکلی در گرفتن اطلاعات این درس وجود دارد لطفا دوباره تلاش کنید');
          return of(null);
      })
  );
  }
}
