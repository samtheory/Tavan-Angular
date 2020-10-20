import { Component, OnInit } from '@angular/core';

import jalaali from 'jalaali-js';
@Component({
  selector: 'app-p-a-newCourse',
  templateUrl: './p-a-newCourse.component.html',
  styleUrls: ['./p-a-newCourse.component.css']
})
export class PANewCourseComponent implements OnInit {





  FinishDateChange(value: String) {
    var m = jalaali.toGregorian(1395, 1, 23);
    let yyyy: Number = Number(value.slice(0, 4))  ;
    let mm: Number = Number(value.slice(5, 7)) ;
    let dd: Number = Number(value.slice(8, 10)) ;
 
   let g = jalaali.toGregorian(yyyy, mm, dd)
    console.log(g.gy+'-'+g.gm+'-'+g.gd);

  }
  constructor() { }

  ngOnInit() {
  }

}
