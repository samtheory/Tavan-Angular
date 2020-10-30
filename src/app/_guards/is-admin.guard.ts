import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {
  constructor(private router: Router , private authService: AuthService , private toastr: ToastrService ) {}
  canActivate(): boolean  {
    if (this.authService.logedIn()){
      if(this.authService.decodeToken.role === 'admin') {
        return true;
      }
    }


    this.toastr.error('امکان ورود برای شما وجود ندارد');
    this.router.navigate(['/home']);
  }
  
}
