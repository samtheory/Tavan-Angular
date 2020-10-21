import { Component, OnInit } from "@angular/core";
import { AuthService } from 'src/app/_services/auth.service';
import {ToastrService} from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {
  model: any = {};
  loggedIn: boolean;
  constructor(private authService: AuthService,private toastr: ToastrService, private router: Router) {}

  ngOnInit(): void {}


  login(){
    this.authService.login(this.model).subscribe(response =>{
      console.log(response);
      this.router.navigate(['/admin/dashboard']);
    },error => {
      this.toastr.error(error);
    })
  }
}
