import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Course } from 'src/app/_models/course';
import { LocalVar } from 'src/app/_models/localVar';
import { PaginatedResult, Pagination } from 'src/app/_models/pagination';
import { Photo } from 'src/app/_models/photo';
import { TeacherToList } from 'src/app/_models/teacherToList';
import { CourseService } from 'src/app/_services/course.service';
import { PhotoService } from 'src/app/_services/photo.service';
import { TeacherService } from 'src/app/_services/teacher.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-home-u',
  templateUrl: './home-u.component.html',
  styleUrls: ['./home-u.component.scss']
})
export class HomeUComponent implements OnInit {
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

  // scroll to target method 
  scrollToElement($element): void {
    // console.log($element);
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
  


  aCourses: Course[];
  dCourses: Course[];
  sCourses: Course[];
  teachers: TeacherToList[];
  localVar: LocalVar;
  photos: Photo[];
  useraParams: any = {};
  userdParams: any = {};
  usersParams: any = {};
  pag: Pagination;
  constructor(private courseService: CourseService, private toastr: ToastrService, private photoService: PhotoService,
     private route: ActivatedRoute, private teacherService: TeacherService, private mainService: UserService) { }
  
  ngOnInit(): void {
   this.getafirstPage();
   this.getdfirstPage();
   this.getsfirstPage();
   this.getTeachers();
   this.getLocalVar();

  this.getphotos();
  }


  getphotos(){
    this.photoService.getPhotos().subscribe(photos => {
      this.photos = photos;
    });
  }

  getLocalVar(){
    this.mainService.getLocalVar().subscribe(localvar => {
      this.localVar = localvar;
    });
  }

  getTeachers(){
    this.teacherService.getTeachers().subscribe(teachers => {
      this.teachers = teachers;
    });
  }


  getafirstPage(){
    this.useraParams.isActive = true;
    this.courseService.getCourses(1 , 9, this.useraParams).subscribe((res: PaginatedResult<Course[]>) => {
      this.aCourses = res.result;
      this.pag = res.pag;
      console.log(this.aCourses);
    });
  }

  getdfirstPage(){
    this.userdParams.isActive = false;
    this.courseService.getCourses(1 , 9, this.userdParams).subscribe((res: PaginatedResult<Course[]>) => {
      this.dCourses = res.result;
      this.pag = res.pag;
      console.log(this.dCourses);
    });
  }

  getsfirstPage(){
    this.usersParams.suggest = true;
    this.courseService.getsfCourses(1 , 9, this.usersParams).subscribe((res: PaginatedResult<Course[]>) => {
      this.sCourses = res.result;
      this.pag = res.pag;
      console.log(this.sCourses);
    });
  }

}
