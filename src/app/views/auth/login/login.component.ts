import { Component, OnInit } from "@angular/core";
import { AuthService } from 'src/app/_services/auth.service';
import {ToastrService} from 'ngx-toastr';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {
  model: any = {};
  loggedIn: boolean;
  jwtHelper = new JwtHelperService();
  token: any;
  decodedToken: any;
  constructor(private authService: AuthService,private toastr: ToastrService, private router: Router) {}
  ngOnInit(): void {}


  login(){
    this.authService.login(this.model).subscribe(response =>{
      console.log(response);
      if(this.authService.decodeToken.role === 'admin'){
        this.router.navigate(['/admin/dashboard']);
      } else {
        this.router.navigate(['/Customer/dashboard']);
      }
    },error => {
      this.toastr.error(error);
    })
  }
}
