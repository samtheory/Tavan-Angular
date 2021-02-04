import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-auth-status-bar',
  templateUrl: './auth-status-bar.component.html',
  styleUrls: ['./auth-status-bar.component.css']
})
export class AuthStatusBarComponent implements OnInit {

  constructor( private authService: AuthService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }


  loggedIn() {
    return this.authService.logedIn();
  }

  logout(){
    localStorage.removeItem('token');
    this.toastr.success('loged out successfully');
    this.router.navigate(['/index/home']);
  }


  role() {
    const role = this.authService.decodeToken.role;
    if (role === 'admin') {
      return true;
    }
    return false;
  }

}
