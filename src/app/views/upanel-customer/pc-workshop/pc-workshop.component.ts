import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Course } from 'src/app/_models/course';
import { PaginatedResult, Pagination } from 'src/app/_models/pagination';
import { CourseService } from 'src/app/_services/course.service';

@Component({
  templateUrl: './pc-workshop.component.html',
  styleUrls: ['./pc-workshop.component.css']
})
export class PCWorkshopComponent implements OnInit {
  courses: Course[];
  pag: Pagination;
  userParams: any = {};
    constructor(private courseService: CourseService , private toastr: ToastrService, private route: ActivatedRoute) { }
  
    ngOnInit(): void {
      // this.route.data.subscribe(data => {
      //   this.courses = data['courses'].result;
      //   this.pag = data['courses'].pag;
      // });
      this.getfirstPage();
    }
  
  
    getfirstPage(){
      this.userParams.isActive = true;
        this.courseService.getUserCourses(1 , 9, this.userParams).subscribe((res: PaginatedResult<Course[]>) => {
        this.courses = res.result;
        this.pag = res.pag;
      });
    }
  
  
    pageChanged(event: any): void{
      this.pag.currentPage = event.pageIndex + 1;
      this.loadCourses();
    }
  
  
    loadCourses(){
      this.userParams.isActive = true;
      this.courseService.getUserCourses(this.pag.currentPage , this.pag.itemsPerPage , this.userParams)
      .subscribe((res: PaginatedResult<Course[]>) => {
        this.courses = res.result;
        this.pag = res.pag;
      }, error => {
        this.toastr.error(error);
      });
    }

}
