import {Injectable} from '@angular/core';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Course } from '../_models/course';
import { CourseService } from '../_services/course.service';

@Injectable()

export class CourseListResolver implements Resolve<Course[]> {
    pageNumber = 1;
    pageSize = 9;
    userParams: any = {};
    constructor(private courseService: CourseService, private router: Router, private toastr: ToastrService){}
    resolve(route: ActivatedRouteSnapshot): Observable<Course[]> {
        if(route.params['isActive'] !== null) {
        this.userParams.isActive = route.params['isActive'];
        }
        return this.courseService.getCourses(this.pageNumber , this.pageSize, this.userParams).pipe(
            catchError(error => {
                this.toastr.error('مشکلی در دریافت اطلاعات به وجود آمده');
                return of(null);
            })
        );
    }
}
