import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-register-u',
  templateUrl: './register-u.component.html',
  styleUrls: ['./register-u.component.scss']
})
export class RegisterUComponent implements OnInit {
  user: any = {};
  constructor(private authService: AuthService, private toastr: ToastrService, private router: Router) {}

  ngOnInit(): void {}



  registerUser() {
    this.authService.register(this.user).subscribe(response =>{
      console.log(response);
      if(this.authService.decodeToken.role === 'admin'){
        this.router.navigate(['/admin/dashboard']);
      } else {
        this.router.navigate(['/']);
      }
    },error => {
      this.toastr.error(error);
    })
  }
}
