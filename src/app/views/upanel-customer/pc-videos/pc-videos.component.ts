import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Course } from 'src/app/_models/course';
import { PaginatedResult, Pagination } from 'src/app/_models/pagination';
import { UserLoginResponse } from 'src/app/_models/UserLoginResponse';
import { CourseService } from 'src/app/_services/course.service';

@Component({
  templateUrl: './pc-videos.component.html',
  styleUrls: ['./pc-videos.component.css']
})
export class PCVideosComponent implements OnInit {


  // ! THIS IS FAKE INFORMATION    

  
  courses: Course[];
  pag: Pagination;
  userParams: any = {};
    constructor(private courseService: CourseService , private toastr: ToastrService, private route: ActivatedRoute, 
      private router: Router) { }
  
    ngOnInit(): void {
      // this.route.data.subscribe(data => {
      //   this.courses = data['courses'].result;
      //   this.pag = data['courses'].pag;
      // });
      this.getfirstPage();
    }
  
  
    getfirstPage(){
      this.userParams.isActive = false;
        this.courseService.getUserCourses(1 , 9, this.userParams).subscribe((res: PaginatedResult<Course[]>) => {
        this.courses = res.result;
        this.pag = res.pag;
      });
    }
  
  
     pageChanged(event: any): void{
    this.pag.currentPage = event.page + 1;
    this.loadCourses();
  }

  
  
  
    loadCourses(){
      this.userParams.isActive = false;
      this.courseService.getUserCourses(this.pag.currentPage , this.pag.itemsPerPage , this.userParams)
      .subscribe((res: PaginatedResult<Course[]>) => {
        this.courses = res.result;
        this.pag = res.pag;
      }, error => {
        this.toastr.error(error);
      });
    }

}
