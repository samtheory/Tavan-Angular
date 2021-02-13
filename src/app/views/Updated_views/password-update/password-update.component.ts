import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-password-update',
  templateUrl: './password-update.component.html',
  styleUrls: ['./password-update.component.css']
})
export class PasswordUpdateComponent implements OnInit {
model: any = {};
  constructor(private route: ActivatedRoute, private router: Router,private authService: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  changePassword(){
    if(this.model.newPassword !== this.model.newPassword1)
    {
      this.toastr.error('رمز عبور و تکرار آن برابر نیستند');
      return;
    }
    this.authService.resertPass(this.model , this.route.snapshot.params['username'] , this.route.snapshot.params['id'])
    .subscribe(next => {
      this.toastr.success('رمز عبور با موفقیت عوض شد');
      this.router.navigate(['/login']);
    });
  }

}
