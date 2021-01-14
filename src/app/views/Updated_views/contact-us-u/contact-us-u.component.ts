import { Component, OnInit } from '@angular/core';
import { contactUs } from 'src/app/_Constant/data';

@Component({
  selector: 'app-contact-us-u',
  templateUrl: './contact-us-u.component.html',
  styleUrls: ['./contact-us-u.component.css']
})
export class ContactUsUComponent implements OnInit {
  DB_const = { contactUs };

  ngOnInit(): void {
  }

}
