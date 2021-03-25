import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Coursenamelist } from 'src/app/_models/coursenamelist';
import { PaginatedResult, Pagination } from 'src/app/_models/pagination';
import { User } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { CourseService } from 'src/app/_services/course.service';

@Component({
  selector: 'app-p-a-all-user',
  templateUrl: './p-a-all-user.component.html',
  styleUrls: ['./p-a-all-user.component.css']
})
export class PAAllUserComponent implements OnInit {
  selected ="value";
  courses: Coursenamelist[];
  users: User[];
  info: any = {};
  pag: Pagination;
userParams: any = {};
  constructor(private authService: AuthService, private toastr: ToastrService, private courseService: CourseService) { }

  ngOnInit(): void {
    this.gerUserFirstPage();
    this.getCourses();
  }

  gerUserFirstPage(){
    this.authService.getUsers(1 , 50).subscribe((res: PaginatedResult<User[]>) => {
      this.users = res.result;
      this.pag = res.pag;
    });
  }

  getCourses(){
    this.courseService.getCoursesList().subscribe(courses => {
      this.courses = courses;
    })
  }

  addToCourseUser(id: number)
  {
    this.courseService.addCourseToUserAdmin(id , this.info[id]).subscribe(next => {
      this.toastr.success("با موفقیت اضافه شد");
    });
  }

  pageChanged(event: any): void{
    this.pag.currentPage = event.page + 1;
    this.loadUsers();
  }

  seaerch(){
    this.authService.getUsers(1 , 50, this.userParams).subscribe((res: PaginatedResult<User[]>) => {
      this.users = res.result;
      this.pag = res.pag;
    });
  }

  deleteUser(id: number)
  {
    this.authService.deleteUser(id).subscribe(next => {
      this.toastr.success('حذف شد');
    });
  }


  loadUsers(){
    this.authService.getUsers(this.pag.currentPage , this.pag.itemsPerPage , this.userParams)
    .subscribe((res: PaginatedResult<User[]>) => {
      this.users = res.result;
      this.pag = res.pag;
    }, error => {
      this.toastr.error(error);
    });
  }


  activateUser(id: number){
    this.authService.activateUser(id).subscribe(next => {
      this.toastr.success("با موفقیت تایید شد");
    })
  }

}
