import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Carousel } from 'primeng/carousel';
import { Course } from 'src/app/_models/course';
import { PaginatedResult } from 'src/app/_models/pagination';
import { Teacher } from 'src/app/_models/teacher';
import { CourseService } from 'src/app/_services/course.service';
import { TeacherService } from 'src/app/_services/teacher.service';

@Component({
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
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
  // ! THIS IS FAKE INFORMATION    

teacher: Teacher;
courses: Course[];
userParams: any = {};


  constructor(private teacherService: TeacherService, private route: ActivatedRoute, private courseService: CourseService, private router: Router) { 
    Carousel.prototype.onTouchMove = () => { };
  }

  ngOnInit(): void {
    this.getTeacher();

  }

  getTeacher(){
    this.teacherService.getTeacherWithCourse(this.route.snapshot.params['id'])
    .subscribe(teacher => 
      {
        this.teacher = teacher;
        this.getfirstPage(teacher.name);
      })
  }

  getfirstPage(name: string){
    this.userParams.name = name;
    this.courseService.getsfCourses(1 , 9, this.userParams).subscribe((res: PaginatedResult<Course[]>) => {
      this.courses = res.result;
    });
  }

  gotoostadpage(teacher: string){
    this.router.navigate(['/search'], {queryParams: {name: teacher}});
  }

}
