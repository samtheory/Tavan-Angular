import { Component, OnInit  ,Input} from '@angular/core';
import { Course } from 'src/app/_models/course';

@Component({
  selector: 'card-course',
  templateUrl: './card-course.component.html',
  styleUrls: ['./card-course.component.scss']
})
export class CardCourseComponent implements OnInit {
  @Input() data  : Course;



  constructor() { }

  ngOnInit(): void {
  }

}
