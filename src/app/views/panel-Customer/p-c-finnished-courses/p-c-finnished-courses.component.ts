import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Course } from 'src/app/_models/course';
import { PaginatedResult, Pagination } from 'src/app/_models/pagination';
import { CourseService } from 'src/app/_services/course.service';

@Component({
  selector: 'app-p-c-finnished-courses',
  templateUrl: './p-c-finnished-courses.component.html',
  styleUrls: ['./p-c-finnished-courses.component.css']
})
export class PCFinnishedCoursesComponent implements OnInit {
  courses: Course[];
  pag: Pagination;
  userParams: any = {};
    constructor(private courseService: CourseService , private toastr: ToastrService, private route: ActivatedRoute) { }
  
    ngOnInit(): void {
      this.getfirstPage();
    }
  
  
    getfirstPage(){
      this.userParams.isActive = false;
        this.courseService.getUserCourses(1 , 4, this.userParams).subscribe((res: PaginatedResult<Course[]>) => {
        this.courses = res.result;
        this.pag = res.pag;
      });
    }
  
  
    pageChanged(event: any): void{
      this.pag.currentPage = event.pageIndex + 1;
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
