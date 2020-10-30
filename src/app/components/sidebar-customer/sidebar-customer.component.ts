import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-sidebar-customer',
  templateUrl: './sidebar-customer.component.html',
  styleUrls: ['./sidebar-customer.component.css']
})
export class SidebarCustomerComponent implements OnInit {

  collapseShow = "hidden";
  constructor(private toastr: ToastrService, private router: Router) { }

  ngOnInit() { }
  toggleCollapseShow(classes) {
    this.collapseShow = classes;
  }

  logout() {
    localStorage.removeItem('token');
    this.toastr.success('loged out successfully');
    this.router.navigate(['/index/home']);
  }
}
