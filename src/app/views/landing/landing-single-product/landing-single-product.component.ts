import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/_models/course';
import { CourseService } from 'src/app/_services/course.service';

@Component({
  selector: 'app-landing-single-product',
  templateUrl: './landing-single-product.component.html',
  styleUrls: ['./landing-single-product.component.css']
})
export class LandingSingleProductComponent implements OnInit {
  course: Course;
  constructor(private courseService: CourseService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCourse();
  }


  getCourse(){
    this.courseService.getCourse(this.route.snapshot.params['id']).subscribe(course => {
      this.course = course;
    });
  }

}
