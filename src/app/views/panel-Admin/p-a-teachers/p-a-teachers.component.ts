import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Teacher } from 'src/app/_models/teacher';
import { TeacherToList } from 'src/app/_models/teacherToList';
import { TeacherService } from 'src/app/_services/teacher.service';

@Component({
  selector: 'app-p-a-teachers',
  templateUrl: './p-a-teachers.component.html',
  styleUrls: ['./p-a-teachers.component.css']
})
export class PATeachersComponent implements OnInit {
  teachers: TeacherToList[];
  constructor(private teacherService: TeacherService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getTeachers();
  }

  getTeachers(){
    this.teacherService.getTeachers().subscribe(teachers => {
      this.teachers = teachers;
    })
  }

  deleteTeacher(id: number){
    this.teacherService.deleteTeacher(id).subscribe(next => {
      this.toastr.success('با موفقیت حذف شد');
    })
  }

}
