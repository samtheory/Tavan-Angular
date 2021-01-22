import { Component, OnInit } from '@angular/core';

@Component({

  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  day =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  month =[
    'فروردین',
    'تردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'ابان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند',
];
year  = []
constructor() { }

ngOnInit(): void {
  for (var i = 1410; i >= 1300; i--) {
    this.year.push(i);
  }
}

}
