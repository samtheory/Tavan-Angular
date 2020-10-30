import {Injectable} from '@angular/core';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Course } from '../_models/course';
import { CourseService } from '../_services/course.service';

@Injectable()

export class CourseListAllUserResolver implements Resolve<Course[]> {
    pageNumber = 1;
    pageSize = 9;

    constructor(private courseService: CourseService, private router: Router, private toastr: ToastrService){}
    resolve(route: ActivatedRouteSnapshot): Observable<Course[]> {
        return this.courseService.getUserCourses(this.pageNumber , this.pageSize).pipe(
            catchError(error => {
                this.toastr.error('مشکلی در دریافت اطلاعات به وجود آمده');
                return of(null);
            })
        );
    }
}
