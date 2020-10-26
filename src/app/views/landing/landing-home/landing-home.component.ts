import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/_models/course';
import { AuthService } from 'src/app/_services/auth.service';
import { CourseService } from 'src/app/_services/course.service';

@Component({
  selector: 'app-landing-home',
  templateUrl: './landing-home.component.html',
  styleUrls: ['./landing-home.component.css']
})
export class LandingHomeComponent implements OnInit {
  aCourses: Course[];
  dCourses: Course[];
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
  }

}
