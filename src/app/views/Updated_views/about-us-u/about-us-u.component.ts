import { Component, OnInit } from '@angular/core';
import { aboutUsPage } from 'src/app/_Constant/data';

@Component({
  selector: 'app-about-us-u',
  templateUrl: './about-us-u.component.html',
  styleUrls: ['./about-us-u.component.css']
})
export class AboutUsUComponent implements OnInit {
  DB_const = { aboutUsPage };

  ngOnInit(): void {
  }

}
