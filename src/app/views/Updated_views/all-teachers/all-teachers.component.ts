import { Component, OnInit } from '@angular/core';
import { TeacherToList } from 'src/app/_models/teacherToList';
import { TeacherService } from 'src/app/_services/teacher.service';

@Component({
  templateUrl: './all-teachers.component.html',
  styleUrls: ['./all-teachers.component.scss']
})
export class AllTeachersComponent implements OnInit {
  teachers: TeacherToList[]
  constructor(private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.getTechers();
  }

  getTechers() {
    this.teacherService.getTeachers().subscribe(teachers => {
      this.teachers = teachers;
    })
  }

}
