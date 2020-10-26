import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-landing-navbar',
  templateUrl: './landing-navbar.component.html',
  styleUrls: ['./landing-navbar.component.css']
})
export class LandingNavbarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
