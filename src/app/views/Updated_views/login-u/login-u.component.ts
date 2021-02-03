import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/_services/auth.service';
import { MatDialog } from '@angular/material/dialog';

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
  

  constructor(private authService: AuthService, private toastr: ToastrService, private router: Router, public dialog: MatDialog) { }

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


  openDialogNotLogin() {
    this.dialog.open(ForgotPassDialog);
  }
}



//------------------------------------------------------------------------------------------------
// .:: Forgot Password module Class 
//------------------------------------------------------------------------------------------------
@Component({
  selector: 'dialog-forgot-pass',
  templateUrl: 'forgot-pass-dialog.html',
})
export class ForgotPassDialog {
  constructor(public dialog: MatDialog, private router: Router) { }


  closeDialog() {
    this.dialog.closeAll();
  }

  register() {
    this.router.navigate(['/register']);
    this.dialog.closeAll();
  }

  login() {
    this.router.navigate(['/login']);
    this.dialog.closeAll();
  }
}