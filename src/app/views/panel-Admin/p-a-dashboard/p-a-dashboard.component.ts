import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Course } from 'src/app/_models/course';
import { PaginatedResult, Pagination } from 'src/app/_models/pagination';
import { CourseService } from 'src/app/_services/course.service';

@Component({
  selector: 'app-p-a-dashboard',
  templateUrl: './p-a-dashboard.component.html',
  styleUrls: ['./p-a-dashboard.component.css']
})
export class PADashboardComponent implements OnInit {
courses: Course[];
pag: Pagination;
userParams: any = {};
  constructor(private courseService: CourseService , private toastr: ToastrService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.courses = data['courses'].result;
      this.pag = data['courses'].pag;
    });
  }


  getfirstPage(){
    this.courseService.getCourses(1 , 4).subscribe((res: PaginatedResult<Course[]>) => {
      this.courses = res.result;
      this.pag = res.pag;
    });
  }


  pageChanged(event: any): void{
    this.pag.currentPage = event.pageIndex + 1;
    this.loadCourses();
  }


  loadCourses(){
    this.courseService.getCourses(this.pag.currentPage , this.pag.itemsPerPage)
    .subscribe((res: PaginatedResult<Course[]>) => {
      this.courses = res.result;
      this.pag = res.pag;
    }, error => {
      this.toastr.error(error);
    });
  }

}
