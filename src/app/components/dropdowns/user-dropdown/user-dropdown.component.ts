import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

import Popper from "popper.js";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-user-dropdown",
  templateUrl: "./user-dropdown.component.html",
})
export class UserDropdownComponent implements OnInit {
  dropdownPopoverShow = false;
  @ViewChild("btnDropdownRef", { static: false }) btnDropdownRef: ElementRef;
  popper = document.createElement("div");
  /**
   *
   */
  constructor(private toastr: ToastrService, private router: Router) {

  }
  ngOnInit() {
    this.popper.innerHTML = `
    <div class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1" style="min-width:12rem" #popoverDropdownRef>
      <a  href="#/Customer/Profile"  class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent  text-gray-800">
        ویرایش پروفایل
      </a>
      <a   href="#/home"  class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent  text-gray-800">
        بازگشت به صفحه اصلی
      </a>
     <div class="h-0 my-2 border border-solid border-gray-200"></div>
  <a href="#/home" class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent  text-gray-800" (click)="logout()">
    logout
  </a>
    </div>`;
  }
  toggleDropdown(event) {
    event.preventDefault();
    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
      this.destroyPopper();
    } else {
      this.dropdownPopoverShow = true;
      this.createPoppper();
    }
  }
  destroyPopper() {
    this.popper.parentNode.removeChild(this.popper);
  }
  createPoppper() {
    new Popper(this.btnDropdownRef.nativeElement, this.popper, {
      placement: "bottom-end",
    });
    this.btnDropdownRef.nativeElement.parentNode.insertBefore(
      this.popper,
      this.btnDropdownRef.nativeElement.nextSibling
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.toastr.success('loged out successfully');
    this.router.navigate(['/index/home']);
  }
}
