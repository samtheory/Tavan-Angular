import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/_models/course';

@Component({
  selector: 'app-w-c-customer-course',
  templateUrl: './w-c-customer-course.component.html',
  styleUrls: ['./w-c-customer-course.component.css']
})
export class WCCustomerCourseComponent implements OnInit {
  @Input() course: Course;
  @Input() imageTeacher: String = 'assets/img/user4.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
