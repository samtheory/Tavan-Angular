import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Course } from 'src/app/_models/course';
import { PaginatedResult, Pagination } from 'src/app/_models/pagination';
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
  useraParams: any = {};
  userdParams: any = {};
  pag: Pagination;
  constructor(private courseService: CourseService, private toastr: ToastrService) { }
  
  ngOnInit(): void {
    this.getafirstPage();
    this.getdfirstPage();
  }


  getafirstPage(){
    this.useraParams.isActive = true;
    this.courseService.getCourses(1 , 3, this.useraParams).subscribe((res: PaginatedResult<Course[]>) => {
      this.aCourses = res.result;
      this.pag = res.pag;
    });
  }

  getdfirstPage(){
    this.userdParams.isActive = false;
    this.courseService.getCourses(1 , 3, this.userdParams).subscribe((res: PaginatedResult<Course[]>) => {
      this.dCourses = res.result;
      this.pag = res.pag;
    });
  }

}
