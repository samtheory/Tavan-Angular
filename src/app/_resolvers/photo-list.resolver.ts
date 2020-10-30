import {Injectable} from '@angular/core';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Photo } from '../_models/photo';
import { PhotoService } from '../_services/photo.service';

@Injectable()

export class PhotoListResolver implements Resolve<Photo[]> {
    constructor(private photoService: PhotoService, private router: Router, private toastr: ToastrService){}
    resolve(route: ActivatedRouteSnapshot): Observable<Photo[]> {
        return this.photoService.getPhotos().pipe(
            catchError(error => {
                this.toastr.error('مشکلی در دریافت اطلاعات به وجود آمده');
                return of(null);
            })
        );
    }
}
