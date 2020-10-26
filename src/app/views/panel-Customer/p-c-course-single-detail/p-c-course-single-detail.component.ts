import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Course } from 'src/app/_models/course';
import { AuthService } from 'src/app/_services/auth.service';
import { CourseService } from 'src/app/_services/course.service';

@Component({
  selector: 'app-p-c-course-single-detail',
  templateUrl: './p-c-course-single-detail.component.html',
  styleUrls: ['./p-c-course-single-detail.component.css']
})
export class PCCourseSingleDetailComponent implements OnInit {
  panelOpenState1 = false;
  panelOpenState2 = false;
  panelOpenState3 = false;
  course: Course;
  constructor(private courseService: CourseService, private toastr: ToastrService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCourse();
  }

  getCourse(){
  this.courseService.getCourse(this.route.snapshot.params['id']).subscribe(course => {
    this.course = course;
  });
}

}
