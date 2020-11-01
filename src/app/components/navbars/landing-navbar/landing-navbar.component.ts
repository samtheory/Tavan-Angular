import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import * as $ from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing-navbar',
  templateUrl: './landing-navbar.component.html',
  styleUrls: ['./landing-navbar.component.css']
})
export class LandingNavbarComponent implements OnInit {
  constructor(private authService: AuthService, private toastr: ToastrService, private router: Router) {


  }



  ngOnInit() {
    var toggle = true
    $('.toggle-open').click(function () {
      // $('#video').removeClass('text-red-600 bg-white  border-blue-300');
      // $('#video').addClass('bg-teal-200  border-teal-300');

      toggle ? $('.pk-menu').removeClass('hidden') : $('.pk-menu').addClass('hidden') 
      toggle = !toggle ;
      // $('.toggle-open').addClass('toggle-collapse');
      // $('.toggle-open').removeClass('toggle-open');
console.log(toggle)


    });
    $('.toggle-collapse').click(function () {

      $('.pk-menu').addClass('hidden')



    });
  }

  loggedIn() {
    return this.authService.logedIn();
  }

  logout(){
    localStorage.removeItem('token');
    this.toastr.success('loged out successfully');
    this.router.navigate(['/index/home']);
  }


  role() {
    const role = this.authService.decodeToken.role;
    if (role === 'admin') {
      return true;
    }
    return false;
  }



}
