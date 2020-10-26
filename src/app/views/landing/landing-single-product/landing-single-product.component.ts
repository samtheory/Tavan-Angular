import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Course } from 'src/app/_models/course';
import { CourseService } from 'src/app/_services/course.service';

@Component({
  selector: 'app-landing-single-product',
  templateUrl: './landing-single-product.component.html',
  styleUrls: ['./landing-single-product.component.css']
})
export class LandingSingleProductComponent implements OnInit {
  course: Course;
  constructor(private courseService: CourseService, private route: ActivatedRoute, private toastr: ToastrService,private router: Router) { }

  ngOnInit(): void {
    this.getCourse();
  }


  getCourse(){
    this.courseService.getCourse(this.route.snapshot.params['id']).subscribe(course => {
      this.course = course;
    });
  }

  addCourseToUser(id: number){
      this.courseService.addcourseToUser(id).subscribe(next => {
        this.toastr.success('با موفقیت ثبت نام شد');
        this.router.navigate(['/Customer/dashboard']);
      })
  }

}
