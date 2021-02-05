import { Component, OnInit } from '@angular/core';
import { aboutUsPage } from 'src/app/_Constant/data';
import { TeacherToList } from 'src/app/_models/teacherToList';
import { TeacherService } from 'src/app/_services/teacher.service';

@Component({
  selector: 'app-about-us-u',
  templateUrl: './about-us-u.component.html',
  styleUrls: ['./about-us-u.component.scss']
})
export class AboutUsUComponent implements OnInit {
  DB_const = { aboutUsPage };
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
teachers: TeacherToList[];
  constructor(private teacherService: TeacherService){}

  ngOnInit(): void {
    this.getTeachers();
  }


  getTeachers(){
    this.teacherService.getTeachers().subscribe(teachers => {
      this.teachers = teachers;
    });
  }

}
