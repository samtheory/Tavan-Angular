import { Component, OnInit } from '@angular/core';
import { faq } from 'src/app/_Constant/data';



@Component({
  selector: 'app-faq-u',
  templateUrl: './faq-u.component.html',
  styleUrls: ['./faq-u.component.scss']
})
export class FAQUComponent implements OnInit {
  DB_const = { faq };
  toggle = [false, false, false, false, false, false, false];

  toggleFN(i: number) {
    this.toggle[i] = !this.toggle[i];
  }

  


ngOnInit() {

}

}
