import { Component } from "@angular/core";
import { Router, NavigationEnd } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './_services/auth.service';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  title = "angular-dashboard-page";
  constructor(private router: Router, private authService: AuthService) { }
  jwtHelper = new JwtHelperService();
    ngOnInit() {
      const token = localStorage.getItem('token');
      if(token){
        this.authService.decodeToken = this.jwtHelper.decodeToken(token);
      }
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
    }
}
