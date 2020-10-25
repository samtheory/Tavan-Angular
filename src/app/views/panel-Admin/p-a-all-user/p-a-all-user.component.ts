import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaginatedResult, Pagination } from 'src/app/_models/pagination';
import { User } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-p-a-all-user',
  templateUrl: './p-a-all-user.component.html',
  styleUrls: ['./p-a-all-user.component.css']
})
export class PAAllUserComponent implements OnInit {
  users: User[];
  pag: Pagination;
userParams: any = {};
  constructor(private authService: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.gerUserFirstPage();
  }

  gerUserFirstPage(){
    this.authService.getUsers(1 , 10).subscribe((res: PaginatedResult<User[]>) => {
      this.users = res.result;
      this.pag = res.pag;
    });
  }


  pageChanged(event: any): void{
    this.pag.currentPage = event.page;
    this.loadUsers();
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

}
