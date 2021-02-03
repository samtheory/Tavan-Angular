import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Teacher } from 'src/app/_models/teacher';
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


  constructor(private teacherService: TeacherService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getTeacher();

  }

  getTeacher(){
    this.teacherService.getTeacherWithCourse(this.route.snapshot.params['id'])
    .subscribe(teacher => 
      {
        this.teacher = teacher;
      })
  }

}
