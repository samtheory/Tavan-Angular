import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Category } from '../_models/category';
import { CategoryService } from '../_services/category.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryListResolver implements Resolve<Category[]> {
  constructor(private categoryService: CategoryService, private router: Router, private toastr: ToastrService){}
  resolve(route: ActivatedRouteSnapshot): Observable<Category[]> {
    return this.categoryService.getCategories().pipe(
      catchError(error => {
          this.toastr.error('مشکلی در گرفتن اطلاعات این درس وجود دارد لطفا دوباره تلاش کنید');
          return of(null);
      })
  );
  }
}
