import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login-u',
  templateUrl: './login-u.component.html',
  styleUrls: ['./login-u.component.scss']
})
export class LoginUComponent implements OnInit {
  model: any = {};
  loggedIn: boolean;
  jwtHelper = new JwtHelperService();
  token: any;
  decodedToken: any;

  constructor(private authService: AuthService,private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }


  login(){
    this.authService.login(this.model).subscribe(response =>{
      console.log(response);
      if(this.authService.decodeToken.role === 'admin'){
        this.router.navigate(['/admin/dashboard']);
      } else {
        this.router.navigate(['/Customer/dashboard']);
      }
    });
  }

}
