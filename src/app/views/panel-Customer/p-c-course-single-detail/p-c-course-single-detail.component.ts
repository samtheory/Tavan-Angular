import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p-c-course-single-detail',
  templateUrl: './p-c-course-single-detail.component.html',
  styleUrls: ['./p-c-course-single-detail.component.css']
})
export class PCCourseSingleDetailComponent implements OnInit {
  panelOpenState1 = false;
  panelOpenState2 = false;
  panelOpenState3 = false;
  constructor() { }

  ngOnInit(): void {
  }

}
