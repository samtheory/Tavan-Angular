import {Injectable} from '@angular/core';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Course } from '../_models/course';
import { CourseService } from '../_services/course.service';

@Injectable()

export class CourseDetailMainResolver implements Resolve<Course> {
    constructor(private courseService: CourseService, private router: Router, private toastr: ToastrService){}
    resolve(route: ActivatedRouteSnapshot): Observable<Course> {
        return this.courseService.getMainCourse(route.params['id']).pipe(
            catchError(error => {
                this.toastr.error('مشکلی در گرفتن اطلاعات این درس وجود دارد لطفا دوباره تلاش کنید');
                return of(null);
            })
        );
    }
}