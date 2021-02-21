import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/_models/course';

@Component({
  selector: 'card-course',
  templateUrl: './card-course.component.html',
  styleUrls: ['./card-course.component.scss']
})
export class CardCourseComponent implements OnInit {
  @Input() course  : Course;
  @Output() video_url = new EventEmitter<string>();

  passVideo(url){
    this.video_url.emit(url);

  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  

}
