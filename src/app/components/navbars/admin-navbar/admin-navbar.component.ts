import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-admin-navbar",
  templateUrl: "./admin-navbar.component.html",
})
export class AdminNavbarComponent implements OnInit {
  constructor(private toastr: ToastrService, private router: Router) {}

  ngOnInit(): void {}


  logout(){
    localStorage.removeItem('token');
    this.toastr.success('loged out successfully');
    this.router.navigate(['/index/home']);
  }
}
