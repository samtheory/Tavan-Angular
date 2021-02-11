import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/_models/category';
import { Course } from 'src/app/_models/course';
import { PaginatedResult, Pagination } from 'src/app/_models/pagination';
import { CategoryService } from 'src/app/_services/category.service';
import { CourseService } from 'src/app/_services/course.service';

@Component({
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  responsiveOptions = [
    {
      breakpoint: '1254px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '1150px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '880px',
      numVisible: 1,
      numScroll: 1
    }
  ];
   
courses: Course[];
categories: Category[];
pag: Pagination;
userParams: any = {};

  constructor(private courseService: CourseService, private toastr: ToastrService,
     private route: ActivatedRoute, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getfirstPage();
    this.getCategories();
  }


  getfirstPage(){
    if(this.route.snapshot.paramMap.get('isActive') !== null){
      this.userParams.isActive = this.route.snapshot.paramMap.get('isActive');
    }
    if(this.route.snapshot.paramMap.get('suggest') !== null){
      this.userParams.suggest = this.route.snapshot.paramMap.get('suggest');
    }
    if(this.route.snapshot.queryParamMap.get('name') !== null){
    this.userParams.name = this.route.snapshot.queryParamMap.get('name');
    }
    this.courseService.getsfCourses(1 , 3, this.userParams).subscribe((res: PaginatedResult<Course[]>) => {
      this.courses = res.result;
      this.pag = res.pag;
    });
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    })
  }


  pageChanged(event: any): void{
    this.pag.currentPage = event.page + 1;
    this.loadCourses();
  }


  loadCourses(){
    this.courseService.getsfCourses(this.pag.currentPage , this.pag.itemsPerPage , this.userParams)
    .subscribe((res: PaginatedResult<Course[]>) => {
      this.courses = res.result;
      this.pag = res.pag;
    }, error => {
      this.toastr.error(error);
    });
  }

  new(){
    this.userParams.isNew = 1;
    this.loadCourses();
  }

  popular(){
    this.userParams.popular = 1;
    this.loadCourses();
  }

  suggest(){
    this.userParams.suggest = true;
    this.loadCourses();
  }

  free(){
    this.userParams.isfree = true;
    this.loadCourses();
  }

  categoryId(id: number){
    this.userParams.categoryId = id;
    this.loadCourses();
  }




}
