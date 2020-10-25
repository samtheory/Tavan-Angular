import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ['./register.component.css']

})
export class RegisterComponent implements OnInit {
  user: any = {};
  constructor(private authService: AuthService, private toastr: ToastrService, private router: Router) {}

  ngOnInit(): void {}



  registerUser() {
    this.authService.register(this.user).subscribe(next => {
      this.toastr.success('ثبت نام با موفقیت انجام شد');
      this.router.navigateByUrl('/login');
    }, error => {
      this.toastr.error(error);
    });
  }
}
